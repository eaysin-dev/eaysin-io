import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ViewOnGithub from "@/components/ui/view-on-github/view-on-github";

export const UsageExample = () => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold">Usage Example</h2>
      </CardHeader>
      <CardContent>
        <p>
          Check out the usage example and more information in the GitHub
          Repository.
        </p>

        <ViewOnGithub />
      </CardContent>
    </Card>
  );
};
