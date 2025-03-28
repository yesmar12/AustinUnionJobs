import { PageProps } from "$fresh/server.ts";
import { Union } from "../../types/union.ts";
import { slugify } from "../../utils/slugify.ts";
import { JobSiteCard } from "../../components/JobSiteCard.tsx";
import Button from "../../components/Button.tsx";

// Import the JSON data
const unionData = JSON.parse(Deno.readTextFileSync("./jobs.jsonc")) as Union[];

export default function UnionPage({ params }: PageProps) {
  const { slug } = params;
  
  // Find the union that matches the slug
  const union = unionData.find((u) => slugify(u.union) === slug);
  
  // If no union is found, show a 404 message
  if (!union) {
    return (
      <div class="px-4 py-8 mx-auto bg-gray-100 min-h-screen">
        <div class="max-w-screen-lg mx-auto text-center">
          <h1 class="text-4xl font-bold mb-8">Union Not Found</h1>
          <p class="mb-8">The union you're looking for doesn't exist.</p>
            <a href="/" class="w-full block">Back to Home</a>
        </div>
      </div>
    );
  }
  
  return (
    <div class="px-4 py-8 mx-auto bg-gray-100 min-h-screen">
      <div class="max-w-screen-lg mx-auto">
        <div class="mb-6">
          <Button>
            <a href="/" class="w-full block">← Back to All Unions</a>
          </Button>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md mb-8">
          <h1 class="text-3xl font-bold mb-4">{union.union}</h1>
          <p class="text-gray-700 mb-6">{union.desc}</p>
          
          {union.url && (
            <Button>
              <a 
                href={union.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                class="w-full block"
              >
                Visit Union Website
              </a>
            </Button>
          )}
        </div>
        
        <h2 class="text-2xl font-bold mb-4">Job Sites</h2>
        
        {union.jobsites && union.jobsites.length > 0 ? (
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {union.jobsites.map((jobsite) => (
              <JobSiteCard
                key={jobsite.name}
                name={jobsite.name}
                url={jobsite.url}
              />
            ))}
          </div>
        ) : (
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p>No job sites available for this union.</p>
          </div>
        )}
      </div>
    </div>
  );
}
