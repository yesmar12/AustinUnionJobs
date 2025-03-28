import { UnionCard } from "../components/UnionCard.tsx";
import { Union } from "../types/union.ts";
import { slugify } from "../utils/slugify.ts";
import { shuffle } from "../utils/shuffle.ts";

// Import the JSON data
const unionData = JSON.parse(Deno.readTextFileSync("./jobs.jsonc")) as Union[];

export default function Home() {
  // Filter out any commented unions (those without a union property)
  const unions = (unionData as Union[]).filter((union) => union.union);

  return (
    <div>
      <div class="px-4 py-8 mx-auto bg-gray-100">
        <div class="max-w-screen-lg mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shuffle(unions).map((union) => (
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
    </div>
  );
}
