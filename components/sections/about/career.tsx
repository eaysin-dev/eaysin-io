import { careers } from "@/app/data/career";
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
import { Typography } from "@/components/ui/typography";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

const Career = () => {
  return (
    <>
      <div className="row">
        <Typography variant="h2">Career</Typography>
      </div>

      <div className="row block-900-full grid lg:grid-cols-2 gap-5 pt-7">
        {careers?.map((career) => (
          <Card
            key={career.id}
            className="hover:shadow-lg transition-shadow rounded-md"
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                {career.role}
              </CardTitle>
              <CardDescription>
                <span className="text-sm text-muted-foreground">
                  {career.date}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="p" className="text-gray-500 mb-4">
                {career.description}
              </Typography>
              <div className="mb-2 space-y-1.5">
                <Badge variant="outline" className="mr-2">
                  {career.company}
                </Badge>
                <Badge variant="outline" className="mr-2">
                  {career.location}
                </Badge>
                {career.type && (
                  <Badge variant="outline" className="mr-2 capitalize">
                    {career.type}
                  </Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              {career.website && (
                <Link href={career.website} target="_blank">
                  <Button
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:underline"
                  >
                    Company Website <ExternalLinkIcon className="h-4 w-4" />
                  </Button>
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Career;
