import { Typography } from "@/components/ui/typography";

export interface ApiParameter {
  id: string;
  label: string;
  description: string;
}

export interface Api {
  id: string;
  label: string;
  description: string;
  data: ApiParameter[];
}

interface ProjectApisProps {
  apis: Api[];
}

const ProjectApis = ({ apis }: ProjectApisProps) => {
  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold">APIs</h3>
      {apis.map((api) => (
        <div key={api?.id} className="ml-2.5">
          <div className="mt-4">
            <h4 className="font-semibold">{api?.label}:</h4>
            <p className="text-sm text-muted-foreground mt-1">
              {api.description}
            </p>
            <ul className="list-disc list-inside mb-2 mt-2">
              {api?.data.map((param, idx) => (
                <li key={idx}>
                  <Typography variant="inlineCode" className="font-medium">
                    {param.label}
                  </Typography>{" "}
                  : {param.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectApis;
