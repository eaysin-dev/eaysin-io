import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BaseModal from "@/components/ui/modal";

import { ClientInformation } from "@/constant/interfaces";
import { PortfolioDetails } from "./portfolio-details";

const PortfolioItem = ({ portfolio }: { portfolio: PortfolioDetails }) => {
  const { data, component } = portfolio;

  return (
    <Card
      className="hover:shadow-lg transition-shadow p-1 rounded-md"
      key={portfolio?.id}
    >
      <CardHeader>
        <CardTitle className="mb-2">{data?.title}</CardTitle>
        <CardDescription>{data?.description[0]}</CardDescription>
      </CardHeader>

      <CardContent>
        {/* Technologies Section */}
        <div className="flex flex-wrap gap-2">
          {data.techStack.length > 0 ? (
            data.techStack.map((technology: string) => (
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
            {Object.keys(data?.clientInformation || {}).map((key) => (
              <div key={key}>
                <p className="text-xs text-muted-foreground">{key}:</p>
                <p className="text-sm capitalize">
                  {data?.clientInformation[key as keyof ClientInformation] ||
                    ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col justify-end items-start gap-3">
        {data?.isConfidential && (
          <p className="text-sm text-muted-foreground">
            This is a private project for {data?.clientInformation?.company}.
          </p>
        )}

        <div className="flex justify-between items-center w-full">
          {/* GitHub Button */}
          <div className="space-x-1">
            {!data?.isConfidential && (
              <a
                href={data?.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge variant={"secondary"} className={`py-1`}>
                  Github
                </Badge>
              </a>
            )}

            {/* Live Link Button */}
            {data?.liveLink && (
              <a
                rel="noreferrer noopener"
                href={data?.liveLink}
                target="_blank"
              >
                <Badge variant={"secondary"} className={`py-1`}>
                  Live Demo
                </Badge>
              </a>
            )}
          </div>

          <BaseModal title={data?.title} buttonText="Details" size="large">
            {data?.identity ? component : null}
          </BaseModal>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PortfolioItem;
