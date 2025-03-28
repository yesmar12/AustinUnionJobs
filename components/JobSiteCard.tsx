import { JSX } from "preact";
import Button from "./Button.tsx";

interface JobSiteProps {
  name: string;
  url: string;
}

export function JobSiteCard(props: JobSiteProps): JSX.Element {
  return (
    <div class="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow flex flex-col justify-between">
      <h3 class="text-lg font-semibold mb-3">{props.name}</h3>
      <Button>
        <a href={props.url} target="_blank" rel="noopener noreferrer" class="w-full block">
          Visit Job Site
        </a>
      </Button>
    </div>
  );
}
