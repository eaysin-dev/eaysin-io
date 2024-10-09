import { Typography } from "@/components/ui/typography";

export interface Command {
  id: string;
  command: string;
  description?: string;
}

export interface InstallationStep {
  id: string;
  title: string;
  description: string;
  commands: Command[];
}

interface ProjectInstallationProps {
  installationSteps: InstallationStep[];
}

const ProjectInstallation = ({
  installationSteps,
}: ProjectInstallationProps) => {
  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold">Installation Steps</h3>
      <div className="space-y-2 mt-2 ml-2.5">
        {installationSteps.map((step, index) => (
          <div key={step?.id}>
            <p className="text-sm font-medium">
              {index + 1}. {step.title}
            </p>
            <Typography
              variant="p"
              className="pl-1 mt-2.5 text-muted-foreground"
            >
              {step.description}
            </Typography>
            <ul className="list-disc list-inside mt-2 ml-1.5">
              {step.commands.map((command, cmdIndex) => (
                <li key={cmdIndex} className="mt-1">
                  <Typography variant="inlineCode" className="font-medium">
                    {command.command}
                  </Typography>{" "}
                  - {command.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectInstallation;
