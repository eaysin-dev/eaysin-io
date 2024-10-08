import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import DocsDescription from "../../../ui/description";
import ListGroup from "../../../ui/list-group";
import { keyFeatures } from "../data";

export const OverviewSection = () => (
  <>
    <h2 className="text-xl font-semibold">Overview</h2>
    <DocsDescription>
      <Typography variant="inlineCode">`react-form-interactions`</Typography> is
      a powerful and extensible form hook for React applications. It simplifies
      form state management, validation, and submission handling. It also
      supports dynamic and async validation, field interactions, and form reset
      functionality.
    </DocsDescription>

    <ListGroup listItems={keyFeatures} isCodedLabel />
    <Typography variant="inlineCode">Version: 2.0.2 </Typography>
    <div>
      Check out the usage example and more information in the{" "}
      <Link href={""}>
        <Button variant={"secondary"} className="underline">
          GitHub Repository.
        </Button>
      </Link>
    </div>
  </>
);
