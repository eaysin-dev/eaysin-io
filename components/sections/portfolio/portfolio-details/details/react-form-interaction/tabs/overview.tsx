import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import DocsDescription from "../../../ui/description";
import ListGroup from "../../../ui/list-group";
import { keyFeatures } from "../data";

export const OverviewSection = () => (
  <Card>
    <CardHeader>
      <h2 className="text-xl font-semibold">Overview</h2>
    </CardHeader>
    <CardContent>
      <DocsDescription>
        <Typography variant="inlineCode">`react-form-interactions`</Typography>{" "}
        is a powerful and extensible form hook for React applications. It
        simplifies form state management, validation, and submission handling.
        It also supports dynamic and async validation, field interactions, and
        form reset functionality.
      </DocsDescription>

      <ListGroup listItems={keyFeatures} isCodedLabel />
    </CardContent>
    <CardFooter className="text-right">Version: 2.0.2</CardFooter>
  </Card>
);
