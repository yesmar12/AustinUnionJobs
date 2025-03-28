import { type PageProps } from "$fresh/server.ts";
import Button from "../components/Button.tsx";

export default function App({ Component, url }: PageProps) {
  const isContactPage = url.pathname === "/contact";

  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AustinUnionJobs</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <header class="bg-gray-100 py-4">
<div class="max-w-screen-lg mx-auto px-4 flex flex-col items-center">
  <div class="flex justify-between w-full mb-2">
    {!isContactPage && (
      <Button>
        <a href="/contact">Contact Us</a>
      </Button>
    )}
    <Button>
      <a
        href="https://workerorganizing.org/support/"
        target="_blank"
        rel="noopener noreferrer"
        class="w-full block"
      >
        Organize Your Workplace
      </a>
    </Button>
  </div>
  <a href="/"><h1 class="text-4xl font-bold text-center mb-2">Austin Union Jobs</h1></a>
  <p class="text-center mb-4 text-gray-700">
    Find job opportunities with union representation in the Austin area.
  </p>
</div>
        </header>
        <Component />
      </body>
    </html>
  );
}
