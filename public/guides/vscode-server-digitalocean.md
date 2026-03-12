# How to Install and Use VS Code Server on a Digital Ocean Ubuntu Server

A complete guide to setting up VS Code Server (code-server) on a Digital Ocean Ubuntu droplet so you can code from any browser, anywhere.

---

## Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [Create a Digital Ocean Droplet](#2-create-a-digital-ocean-droplet)
3. [Initial Server Setup](#3-initial-server-setup)
4. [Install VS Code Server (code-server)](#4-install-vs-code-server-code-server)
5. [Configure code-server](#5-configure-code-server)
6. [Set Up as a Systemd Service](#6-set-up-as-a-systemd-service)
7. [Set Up a Domain with Nginx Reverse Proxy](#7-set-up-a-domain-with-nginx-reverse-proxy)
8. [Secure with SSL (Let's Encrypt)](#8-secure-with-ssl-lets-encrypt)
9. [Using VS Code Server](#9-using-vs-code-server)
10. [Managing Extensions](#10-managing-extensions)
11. [Troubleshooting](#11-troubleshooting)
12. [Security Best Practices](#12-security-best-practices)

---

## 1. Prerequisites

- A **Digital Ocean account** (sign up at [digitalocean.com](https://digitalocean.com))
- A **domain name** (optional but highly recommended for SSL)
- A **local terminal** (Terminal on macOS/Linux, or PowerShell/WSL on Windows)
- Basic familiarity with the Linux command line

---

## 2. Create a Digital Ocean Droplet

### Step 1: Log in to Digital Ocean

Go to your Digital Ocean dashboard and click **Create → Droplets**.

### Step 2: Choose an Image

Select **Ubuntu 24.04 LTS** (or the latest LTS version available).

### Step 3: Choose a Plan

For VS Code Server, the recommended minimum specs are:

| Plan        | vCPUs | RAM  | Storage | Monthly Cost |
|-------------|-------|------|---------|--------------|
| **Basic**   | 2     | 2 GB | 50 GB   | $12/mo       |
| Recommended | 2     | 4 GB | 80 GB   | $24/mo       |
| Heavy use   | 4     | 8 GB | 160 GB  | $48/mo       |

> **Tip:** 2 GB RAM is the minimum. If you plan to run builds, Docker, or language servers, go with 4 GB+.

### Step 4: Choose a Region

Pick the region **closest to your physical location** for the lowest latency.

### Step 5: Authentication

Select **SSH keys** (recommended) or set a root password.

To add your SSH key:

```bash
# On your local machine, check for existing keys
ls ~/.ssh/id_ed25519.pub

# If no key exists, generate one
ssh-keygen -t ed25519 -C "your_email@example.com"

# Copy the public key
cat ~/.ssh/id_ed25519.pub
```

Paste the output into the Digital Ocean SSH key field.

### Step 6: Create the Droplet

Give it a hostname (e.g., `vscode-server`) and click **Create Droplet**. Note the **IP address** once it's ready.

---

## 3. Initial Server Setup

### Connect to Your Server

```bash
ssh root@YOUR_SERVER_IP
```

### Create a Non-Root User

```bash
# Create a new user
adduser coder

# Grant sudo privileges
usermod -aG sudo coder

# Copy SSH keys to the new user
rsync --archive --chown=coder:coder ~/.ssh /home/coder
```

### Set Up the Firewall

```bash
# Allow OpenSSH
ufw allow OpenSSH

# Enable the firewall
ufw enable

# Check status
ufw status
```

### Update the System

```bash
apt update && apt upgrade -y
```

### Switch to the New User

```bash
# Log out and reconnect as the new user
exit
ssh coder@YOUR_SERVER_IP
```

---

## 4. Install VS Code Server (code-server)

### Option A: Using the Official Install Script (Recommended)

```bash
curl -fsSL https://code-server.dev/install.sh | sh
```

This script:
- Detects your OS and architecture
- Downloads the latest release
- Installs code-server system-wide

### Option B: Manual Installation

```bash
# Check for the latest version at https://github.com/coder/code-server/releases
VERSION=4.96.4

# Download the .deb package
wget https://github.com/coder/code-server/releases/download/v${VERSION}/code-server_${VERSION}_amd64.deb

# Install it
sudo dpkg -i code-server_${VERSION}_amd64.deb

# Clean up
rm code-server_${VERSION}_amd64.deb
```

### Verify Installation

```bash
code-server --version
```

---

## 5. Configure code-server

The configuration file is located at `~/.config/code-server/config.yaml`. It is created automatically on first run.

### Run code-server Once to Generate Config

```bash
code-server
# Press Ctrl+C after it starts
```

### Edit the Configuration

```bash
nano ~/.config/code-server/config.yaml
```

Default configuration:

```yaml
bind-addr: 127.0.0.1:8080
auth: password
password: YOUR_AUTO_GENERATED_PASSWORD
cert: false
```

### Recommended Configuration

```yaml
bind-addr: 127.0.0.1:8080
auth: password
password: a-strong-unique-password-here
cert: false
```

> **Important:** Keep `bind-addr` set to `127.0.0.1` (localhost only). We'll use Nginx as a reverse proxy to handle external traffic securely.

Save and exit (`Ctrl+X`, then `Y`, then `Enter`).

---

## 6. Set Up as a Systemd Service

This ensures code-server starts automatically on boot and restarts on failure.

### Enable and Start the Service

```bash
# Enable the systemd service for your user
sudo systemctl enable --now code-server@$USER
```

### Verify It's Running

```bash
sudo systemctl status code-server@$USER
```

You should see `Active: active (running)`.

### Useful Service Commands

```bash
# Stop code-server
sudo systemctl stop code-server@$USER

# Restart code-server
sudo systemctl restart code-server@$USER

# View logs
journalctl -u code-server@$USER -f
```

---

## 7. Set Up a Domain with Nginx Reverse Proxy

### Point Your Domain to the Server

In your domain registrar's DNS settings, create an **A record**:

| Type | Name              | Value          |
|------|-------------------|----------------|
| A    | code.yourdomain.com | YOUR_SERVER_IP |

Wait a few minutes for DNS propagation.

### Install Nginx

```bash
sudo apt install nginx -y
```

### Configure Nginx

Create a new site configuration:

```bash
sudo nano /etc/nginx/sites-available/code-server
```

Paste the following:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name code.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:8080/;
        proxy_set_header Host $host;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection upgrade;
        proxy_set_header Accept-Encoding gzip;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Enable the Site

```bash
# Create symlink
sudo ln -s /etc/nginx/sites-available/code-server /etc/nginx/sites-enabled/

# Remove default site (optional)
sudo rm /etc/nginx/sites-enabled/default

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

### Update the Firewall

```bash
sudo ufw allow 'Nginx Full'
```

### Test

Visit `http://code.yourdomain.com` in your browser. You should see the code-server login page.

---

## 8. Secure with SSL (Let's Encrypt)

### Install Certbot

```bash
sudo apt install certbot python3-certbot-nginx -y
```

### Obtain an SSL Certificate

```bash
sudo certbot --nginx -d code.yourdomain.com
```

Follow the prompts:
1. Enter your email address
2. Agree to the terms of service
3. Choose whether to redirect HTTP to HTTPS (select **Yes** — option 2)

### Verify Auto-Renewal

```bash
sudo certbot renew --dry-run
```

Certbot adds a systemd timer that automatically renews certificates before they expire.

### Test

Visit `https://code.yourdomain.com` — you should see a secure connection with the code-server login page.

---

## 9. Using VS Code Server

### Logging In

1. Open your browser and go to `https://code.yourdomain.com`
2. Enter the password from your `~/.config/code-server/config.yaml`
3. You're now in a full VS Code environment

### The Interface

The VS Code Server interface is nearly identical to desktop VS Code:

- **Explorer** (Ctrl+Shift+E) — Browse and manage files
- **Search** (Ctrl+Shift+F) — Search across your project
- **Source Control** (Ctrl+Shift+G) — Git integration
- **Terminal** (Ctrl+`) — Integrated terminal with full shell access
- **Extensions** (Ctrl+Shift+X) — Install and manage extensions
- **Command Palette** (F1 or Ctrl+Shift+P) — Access all commands

### Opening a Project

```bash
# From the integrated terminal, navigate to your project:
cd ~/projects/my-app

# Or clone a repository:
git clone https://github.com/username/repo.git
```

You can also set a default workspace directory:

```bash
nano ~/.config/code-server/config.yaml
```

Add:

```yaml
bind-addr: 127.0.0.1:8080
auth: password
password: your-password
cert: false
# Open this folder by default
```

Or start code-server with a specific folder:

```bash
code-server /home/coder/projects
```

### Setting Up Your Development Environment

#### Install Node.js (via nvm)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc
nvm install --lts
node --version
npm --version
```

#### Install Python

```bash
sudo apt install python3 python3-pip python3-venv -y
python3 --version
```

#### Install Docker (Optional)

```bash
# Install Docker
curl -fsSL https://get.docker.com | sh

# Add your user to the docker group
sudo usermod -aG docker $USER

# Log out and back in, then verify
docker --version
```

#### Install Git and Configure

```bash
sudo apt install git -y
git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"
```

### Keyboard Shortcuts

Most standard VS Code shortcuts work. Some browser shortcuts may conflict:

| Action                  | Shortcut            |
|-------------------------|---------------------|
| Command Palette         | F1 / Ctrl+Shift+P  |
| Toggle Terminal         | Ctrl+`              |
| Quick Open File         | Ctrl+P              |
| Toggle Sidebar          | Ctrl+B              |
| Split Editor            | Ctrl+\              |
| Find in Files           | Ctrl+Shift+F        |
| Go to Definition        | F12                 |
| Format Document         | Shift+Alt+F         |

> **Tip:** If browser shortcuts conflict, use the Command Palette (F1) as a fallback for any action.

---

## 10. Managing Extensions

### Install Extensions via the UI

1. Click the Extensions icon in the sidebar (or press Ctrl+Shift+X)
2. Search for the extension you want
3. Click **Install**

### Install Extensions via the Terminal

```bash
# Install an extension by its identifier
code-server --install-extension esbenp.prettier-vscode
code-server --install-extension dbaeumer.vscode-eslint
code-server --install-extension ms-python.python
code-server --install-extension bradlc.vscode-tailwindcss
```

### List Installed Extensions

```bash
code-server --list-extensions
```

### Uninstall an Extension

```bash
code-server --uninstall-extension extension-id
```

### Popular Extensions for Web Development

| Extension                      | ID                                  |
|-------------------------------|--------------------------------------|
| Prettier                      | esbenp.prettier-vscode              |
| ESLint                        | dbaeumer.vscode-eslint              |
| Tailwind CSS IntelliSense     | bradlc.vscode-tailwindcss           |
| GitLens                       | eamodio.gitlens                     |
| Auto Rename Tag               | formulahendry.auto-rename-tag       |
| Path IntelliSense             | christian-kohler.path-intellisense  |
| Thunder Client (REST API)     | rangav.vscode-thunder-client        |
| Docker                        | ms-azuretools.vscode-docker         |

> **Note:** code-server uses the **Open VSX Registry** instead of the Microsoft Marketplace. Most popular extensions are available, but some Microsoft-exclusive extensions may not be.

---

## 11. Troubleshooting

### code-server Won't Start

```bash
# Check the service status
sudo systemctl status code-server@$USER

# Check logs for errors
journalctl -u code-server@$USER --no-pager -n 50
```

### Can't Connect in Browser

1. **Check if code-server is running:**
   ```bash
   sudo systemctl status code-server@$USER
   ```

2. **Check if the port is listening:**
   ```bash
   ss -tlnp | grep 8080
   ```

3. **Check Nginx configuration:**
   ```bash
   sudo nginx -t
   sudo systemctl status nginx
   ```

4. **Check firewall rules:**
   ```bash
   sudo ufw status
   ```

### WebSocket Errors

If you see WebSocket connection errors, ensure your Nginx config includes:

```nginx
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection upgrade;
```

Then restart Nginx:

```bash
sudo systemctl restart nginx
```

### High Memory Usage

```bash
# Check memory usage
free -h

# Check code-server processes
ps aux | grep code-server

# Restart code-server to free memory
sudo systemctl restart code-server@$USER
```

If memory is consistently high, consider:
- Upgrading your droplet
- Adding swap space:

```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

# Make it permanent
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

### SSL Certificate Renewal Failed

```bash
# Test renewal
sudo certbot renew --dry-run

# Force renewal
sudo certbot renew --force-renewal

# Check the timer
sudo systemctl status certbot.timer
```

### Extensions Not Available

If an extension isn't available on Open VSX, you can install it manually:

```bash
# Download the .vsix file from the extension's GitHub releases
wget https://github.com/user/extension/releases/download/v1.0.0/extension.vsix

# Install manually
code-server --install-extension extension.vsix
```

---

## 12. Security Best Practices

### Use Strong Passwords

Use a password manager to generate a strong, unique password for code-server (at least 20 characters).

### Restrict SSH Access

```bash
# Edit SSH config
sudo nano /etc/ssh/sshd_config
```

Set these values:

```
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
```

Restart SSH:

```bash
sudo systemctl restart sshd
```

### Enable Fail2Ban

```bash
sudo apt install fail2ban -y

# Create a local config
sudo nano /etc/fail2ban/jail.local
```

Add:

```ini
[DEFAULT]
bantime = 3600
findtime = 600
maxretry = 5

[sshd]
enabled = true

[nginx-http-auth]
enabled = true
```

```bash
sudo systemctl enable --now fail2ban
```

### Keep Everything Updated

```bash
# Set up unattended security updates
sudo apt install unattended-upgrades -y
sudo dpkg-reconfigure -plow unattended-upgrades
```

### Regular Backups

Use Digital Ocean's **automated backups** (enable in the droplet settings for 20% of the droplet cost) or set up manual snapshots before major changes.

### Monitor Your Server

```bash
# Install htop for system monitoring
sudo apt install htop -y
htop
```

---

## Quick Reference

| Task                        | Command                                        |
|-----------------------------|------------------------------------------------|
| Start code-server           | `sudo systemctl start code-server@$USER`       |
| Stop code-server            | `sudo systemctl stop code-server@$USER`        |
| Restart code-server         | `sudo systemctl restart code-server@$USER`     |
| View logs                   | `journalctl -u code-server@$USER -f`           |
| Edit config                 | `nano ~/.config/code-server/config.yaml`        |
| Update code-server          | `curl -fsSL https://code-server.dev/install.sh \| sh` |
| Restart Nginx               | `sudo systemctl restart nginx`                 |
| Renew SSL certificate       | `sudo certbot renew`                           |
| Check server resources      | `htop`                                         |
| Install extension           | `code-server --install-extension <id>`         |

---

## Summary

You now have a fully functional VS Code environment accessible from any browser with:

- **code-server** running as a background service
- **Nginx** reverse proxy handling traffic
- **SSL/TLS** encryption via Let's Encrypt
- **Firewall** and **Fail2Ban** for security
- **Systemd** managing automatic startup and restarts

You can code from any device — laptop, tablet, or even a phone — as long as you have a browser and an internet connection.
