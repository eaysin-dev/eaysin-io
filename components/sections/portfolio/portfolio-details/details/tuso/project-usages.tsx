import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

interface Usage {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
}

interface ProjectUsagesProps {
  usages: Usage[];
}

const ProjectUsages = ({ usages }: ProjectUsagesProps) => (
  <Card className="mt-5">
    <CardHeader>
      <CardTitle>Usages</CardTitle>
    </CardHeader>

    <CardContent>
      {usages.map((usage, index) => (
        <div key={index} className="mt-6">
          <h3 className="text-2xl font-semibold">{`${index + 1}. ${
            usage.title
          }`}</h3>
          <p>{usage.description}</p>
          <Image src={usage.image} alt={usage.alt} className="my-4" />
        </div>
      ))}
    </CardContent>
  </Card>
);

export default ProjectUsages;
