import { UnionCard } from "../components/UnionCard.tsx";
import { Union } from "../types/union.ts";
import { slugify } from "../utils/slugify.ts";

// Import the JSON data
const unionData = JSON.parse(Deno.readTextFileSync("./jobs.jsonc")) as Union[];

export default function Home() {
  // Filter out any commented unions (those without a union property)
  const unions = (unionData as Union[]).filter((union) => union.union);

  return (
    <div class="px-4 py-8 mx-auto bg-gray-100 min-h-screen">
      <div class="max-w-screen-lg mx-auto">
        <h1 class="text-4xl font-bold text-center mb-8">Austin Union Jobs</h1>
        <p class="text-center mb-8 text-gray-700">
          Find job opportunities with union representation in the Austin area.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {unions.map((union) => (
            <UnionCard
              key={union.union}
              union={union.union}
              desc={union.desc}
              url={union.url}
              slug={slugify(union.union)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
