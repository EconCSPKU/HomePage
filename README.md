# PKU EconCS Lab Homepage

Welcome to the repository for the PKU EconCS Lab website. This project is built using modern web technologies to showcase our research, publications, and team members.

## 🛠 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript

## 📂 Project Structure

The source code is located in the `web` directory.

```
.
├── web/
│   ├── app/              # Next.js App Router pages and layouts
│   ├── components/       # Reusable React components
│   ├── data/             # Content data files (people, pubs, research)
│   ├── lib/              # Utility functions
│   └── public/           # Static assets (images, logos)
└── README.md             # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1. Navigate to the web directory:
   ```bash
   cd web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Content Management

The website content is data-driven and separated from the UI logic. You can update the site by modifying the TypeScript files in `web/data/`:

- **People** (`web/data/people.ts`):
  Update information for the Principal Investigator (PI), Ph.D. students, Master's students, undergraduates, and alumni.

- **Publications** (`web/data/publications.ts`):
  Add new conference or journal papers. Entries are automatically sorted or displayed based on the list order.

- **Research** (`web/data/research.ts`):
  Edit research directions, descriptions, and associated imagery.

## 📦 Build & Deployment

### Standard Build

To build the application for production:

```bash
cd web
npm run build
```

This project is optimized for deployment on [Vercel](https://vercel.com/) or any platform that supports Next.js.

### Deployment on Ubuntu Server (PM2 + Nginx)

For self-hosted Ubuntu servers, we recommend using PM2 for process management and Nginx as a reverse proxy.

#### 1. Prerequisites

Ensure Node.js (v18+), npm, PM2, and Nginx are installed on your server.

```bash
# Install Node.js (example using nvm)
nvm install 18

# Install PM2 globally
npm install -g pm2

# Install Nginx
sudo apt update
sudo apt install nginx
```

#### 2. Build and Start with PM2

Navigate to the `web` directory, build the project, and start it.

```bash
cd web
npm install
npm run build

# Start the application using PM2
pm2 start npm --name "econcs-site" -- start
```

Save the PM2 process list so it restarts on reboot:

```bash
pm2 save
pm2 startup
```

#### 3. Configure Nginx

Create a new Nginx configuration file:

```bash
sudo nano /etc/nginx/sites-available/econcs-site
```

Add the following configuration (replace `your_domain.com` with your actual domain):

```nginx
server {
    listen 80;
    server_name your_domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site and restart Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/econcs-site /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

