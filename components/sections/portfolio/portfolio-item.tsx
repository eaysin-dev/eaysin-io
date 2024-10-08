import { ClientInformation, Portfolio } from "@/app/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ReactFormInteractions from "./portfolio-details/details/react-form-interaction";
import DocsDialog from "./portfolio-details/docs-dialog";

const PortfolioItem = ({ portfolio }: { portfolio: Portfolio }) => {
  return (
    <Card className="border border-muted p-1" key={portfolio?.id}>
      <CardHeader>
        <CardTitle className="mb-2">{portfolio?.title}</CardTitle>
        <CardDescription>{portfolio?.description[0]}</CardDescription>
      </CardHeader>

      <CardContent>
        {/* Technologies Section */}
        <div className="flex flex-wrap gap-2">
          {portfolio.technologies.length > 0 ? (
            portfolio.technologies.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))
          ) : (
            <Badge>No technologies specified</Badge>
          )}
        </div>

        {/* Client Info Section */}
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-muted-foreground">
            Client Information
          </h4>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {Object.keys(portfolio?.clientInformation || {}).map((key) => (
              <div key={key}>
                <p className="text-xs text-muted-foreground">{key}:</p>
                <p className="text-sm capitalize">
                  {portfolio?.clientInformation[
                    key as keyof ClientInformation
                  ] || ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col justify-end items-start gap-3">
        {portfolio?.isConfidential && (
          <p className="text-sm text-muted-foreground">
            This is a private project for{" "}
            {portfolio?.clientInformation?.company}.
          </p>
        )}

        <div className="flex justify-between w-full">
          <Button asChild variant="outline">
            <a
              href="https://your-portfolio.com/project-details"
              target="_blank"
              rel="noopener noreferrer"
            >
              {portfolio?.isConfidential ? "View Case Study" : "Github"}
            </a>
          </Button>

          <DocsDialog title="react-form-interactions">
            <ReactFormInteractions />
          </DocsDialog>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PortfolioItem;
