## appDirectTechMeetUp
Sample project for AppDirect Tech Meetup

## 🧪 Cypress Installation Guide

### 1. Introduction

Cypress is a modern, JavaScript-based end-to-end testing framework built for the web. It enables developers to write, run, and debug tests for web applications efficiently.
This document provides step-by-step installation instructions for Windows and macOS operating systems.

### 2. Prerequisites

Before installing Cypress, ensure the following prerequisites are met.

#### 2.1 System Requirements

| **Component**                  | **Minimum Requirement**                           |
| ------------------------------ | ------------------------------------------------- |
| **Operating System**           | Windows 10 (64-bit) or later, macOS 10.9 or later |
| **Node.js**                    | Version 14.x or higher                            |
| **npm (Node Package Manager)** | Installed with Node.js                            |
| **Disk Space**                 | At least 1 GB free space                          |
| **Internet Connection**        | Required for installation and updates             |

#### 2.2 Verify Node.js and npm Installation

Open a terminal (Command Prompt, PowerShell, or Terminal) and execute:

```bash
node -v
npm -v
```

If Node.js or npm is not installed, download and install from 👉 `https://nodejs.org`

### 3. Installation Steps

#### 3.1 Installation on Windows

- Open Command Prompt or PowerShell  
  Press Windows + R, type cmd, and press Enter.

**Navigate to the Project Directory**

```bash
cd C:\path\to\your\project
```

**Initialize a Node.js Project (if not already created)**

```bash
npm init -y
```

**Install Cypress via npm**

```bash
npm install cypress --save-dev
```

**Verify Installation**

```bash
npx cypress verify
```

**Open Cypress Test Runner**

```bash
npx cypress open
```

This command launches the Cypress Test Runner application.

#### 3.2 Installation on macOS

Open Terminal  
(Located in Applications → Utilities → Terminal)

**Navigate to the Project Directory**

```bash
cd /path/to/your/project
```

**Initialize a Node.js Project (if not already created)**

```bash
npm init -y
```

**Install Cypress via npm**

```bash
npm install cypress --save-dev
```

**Verify Installation**

```bash
npx cypress verify
```

**Launch Cypress Test Runner**

```bash
npx cypress open
```

### 4. Alternative Installation Methods

#### 4.1 Using Yarn

**If you use Yarn as your package manager, install Cypress using:**

```bash
yarn add cypress --dev
```

#### 4.2 Direct Download (Optional)

Cypress can also be installed directly as a standalone application from:
👉 `https://download.cypress.io/desktop`

### 5. Post-Installation Setup

After installation, Cypress creates a default folder structure within your project:

```bash
/cypress
  /e2e
  /fixtures
  /support
cypress.config.js
```

Place your test files under the `/cypress/e2e` directory.

#### Run Tests

Headless mode (without GUI):

```bash
npx cypress run
```

Headed mode (with GUI):

```bash
npx cypress open
```

### 6. Updating Cypress

**To update Cypress to the latest version:**

```bash
npm install cypress@latest --save-dev
```

**Verify the version:**

```bash
npx cypress --version
```

### 7. Install Cursor (AI Coding Editor)

#### Installation on Windows
1. Go to the Cursor website: `https://cursor.sh`  
2. Click Download for Windows (.exe).  
3. Open the downloaded installer.  
4. Approve any security prompts (Windows Defender SmartScreen).  
5. Follow the on-screen install steps.  
6. Launch Cursor from the Start Menu.  
7. Sign in with GitHub or Google

#### Installation on macOS
1. Visit `https://cursor.sh`  
2. Download Cursor for macOS (.dmg).  
3. Open the .dmg, then drag Cursor.app into Applications.  
4. Run Cursor (you may need to allow it in System Settings → Privacy & Security).  
5. Sign in using GitHub/Google.

### 8. Troubleshooting
| **Issue**                     | **Possible Solution**                                                                |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| Cypress fails to launch       | Ensure Node.js version ≥ 14 and system meets requirements.                           |
| Permission errors (macOS)     | Run installation with `sudo` or adjust folder permissions.                           |
| Proxy or network restrictions | Configure npm proxy using `npm config set proxy <url>`.                              |
| Tests not detected            | Verify test files are in `/cypress/e2e/` and have `.cy.js` or `.spec.js` extensions. |

### 9. References

Cypress Official Documentation: `https://docs.cypress.io`  
Node.js Official Website: `https://nodejs.org`  
Cypress GitHub Repository: `https://github.com/cypress-io/cypress`
