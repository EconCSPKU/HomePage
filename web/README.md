# PKU EconCS Lab Homepage

This is the source code for the [Elicit Lab](https://elicit.info) homepage, built with Next.js and Tailwind CSS.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    cd web
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3.  **Build for Production**:
    ```bash
    npm run build
    npm start
    ```

## Content Management

The content is separated from the code to make updates easy. You can find the data files in `web/data/`:

*   **`people.ts`**: Update PI info, students, and alumni.
*   **`publications.ts`**: Add new papers here.
*   **`research.ts`**: Update research direction descriptions.

## Deployment

This project can be easily deployed on [Vercel](https://vercel.com/new) or [GitHub Pages](https://nextjs.org/docs/app/building-your-application/deploying/static-exports).
