import { JSX } from "preact";
import Button from "./Button.tsx";

interface UnionCardProps {
  union: string;
  desc: string;
  url: string;
  slug: string;
}

export function UnionCard(props: UnionCardProps): JSX.Element {
  return (
    <div class="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow flex flex-col justify-between">
      <div>
        <h2 class="text-xl font-bold mb-2">{props.union}</h2>
      <p class="text-gray-700 mb-4">{props.desc}</p>
      </div>
      
      <footer class="flex flex-col sm:flex-row gap-2 mt-4">
        <Button>
          <a href={props.url} target="_blank" rel="noopener noreferrer" class="w-full block">
            Visit Website
          </a>
        </Button>
        <Button>
          <a href={`/unions/${props.slug}`} class="w-full block">
            View Job Sites
          </a>
        </Button>
      </footer>
    </div>
  );
}
