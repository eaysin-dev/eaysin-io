import { Api } from "@/components/ui/project-details/apis";
import { ChallengeType } from "@/components/ui/project-details/challenges";
import { InstallationStep } from "@/components/ui/project-details/installation";
import { KeyFeature } from "@/components/ui/project-details/key-features";
import { ProjectResourcesType } from "@/components/ui/project-details/resources";
import { Responsibility } from "@/components/ui/project-details/role";
import { Screenshot } from "@/components/ui/project-details/screenshots";
import { UsageType } from "@/components/ui/project-details/usage";
import { ValidationRule } from "@/components/ui/project-details/validations-feature";

export interface ClientInformation {
  client?: string;
  company?: string;
  date?: string;
}

export interface PortfolioDetail {
  id: string;
  identity: string;
  title: string;
  subtitle: string;
  description: string[];
  duration: string;
  organization: string;
  tagline: string;
  overview: string;
  keyFeatures: KeyFeature[];
  usage?: UsageType[];
  techStack: string[];
  challenges: ChallengeType[];
  api?: Api[];
  images?: Screenshot[];
  isConfidential?: boolean;
  role?: string;
  responsibilities: Responsibility[];
  installationStep?: InstallationStep[];
  lessons?: string;
  improvements?: string;
  blogCaseStudies?: ProjectResourcesType;
  externalResource?: ProjectResourcesType;
  validationRules?: ValidationRule;
  clientInformation: ClientInformation;
  githubLink: string;
  liveLink: string;
}
