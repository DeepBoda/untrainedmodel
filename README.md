# UntrainedModel

UntrainedModel is a premium, open-source AI playground and generative AI platform designed for builders, developers, and creators. It features a modern, "Apple-style" aesthetic with glassmorphism, smooth animations, and a fully responsive design.

## 🚀 Features

-   **AI Playground**: A fully functional, IDE-style interface for interacting with AI models (Chat, Code, Research modes).
-   **Blog**: A beautiful, SEO-optimized blog with dynamic routing and rich typography.
-   **Premium UI/UX**: Built with Tailwind CSS, Framer Motion, and custom glassmorphism components.
-   **Dark Mode**: Enforced premium dark theme for a consistent, professional look.
-   **Performance**: Optimized for speed with static export, global loading states, and smooth page transitions.
-   **SEO Ready**: Automatic sitemap, robots.txt, and Open Graph metadata generation.
-   **PWA Support**: Installable as a progressive web app on mobile devices.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Tailwind Animate](https://github.com/jamiebuilds/tailwindcss-animate)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
-   **Typography**: [Inter](https://fonts.google.com/specimen/Inter) & [Outfit](https://fonts.google.com/specimen/Outfit)

## 📦 Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/untrainedmodel.git
    cd untrainedmodel
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Building for Production

This project is configured for **Static Export**.

1.  **Build the project**:
    ```bash
    npm run build
    ```

2.  **Deploy**:
    The build output will be in the `out/` directory. You can deploy this folder to any static hosting provider:
    -   **GitHub Pages**
    -   **Netlify**
    -   **Vercel**
    -   **AWS S3**
    -   **Apache / Nginx**

## 📂 Project Structure

```
src/
├── app/                # Next.js App Router pages
│   ├── blog/           # Blog routes
│   ├── playground/     # Playground app
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # Reusable UI components
│   ├── ui/             # Shadcn/UI primitives
│   └── ...
├── lib/                # Utilities and data
└── ...
```

## 📄 License

This project is licensed under the MIT License.