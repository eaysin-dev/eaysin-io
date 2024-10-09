// ProjectKeyFeatures.tsx

import { Typography } from "@/components/ui/typography";

export interface KeyFeature {
  id: string;
  label: string;
  description: string;
}

export interface ProjectKeyFeaturesType {
  features: KeyFeature[];
  isCodedLabel?: boolean;
}

const ProjectKeyFeatures = ({
  features,
  isCodedLabel,
}: ProjectKeyFeaturesType) => {
  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold">Key Features</h3>
      <ul className="list-disc list-inside text-sm text-muted-foreground ml-2.5">
        {features.map((feature, index) => (
          <li key={index}>
            {feature?.label && (
              <div className="inline">
                <Typography
                  variant={isCodedLabel ? "inlineCode" : "p"}
                  className="inline font-medium"
                >
                  {feature?.label}
                </Typography>{" "}
                :{" "}
              </div>
            )}
            <Typography variant="p" className="inline">
              {feature?.description}
            </Typography>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectKeyFeatures;
