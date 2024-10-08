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
  <div>
    <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      Usages
    </h2>
    {usages.map((usage, index) => (
      <div key={index} className="mt-6">
        <h3 className="text-2xl font-semibold">{`${index + 1}. ${
          usage.title
        }`}</h3>
        <p>{usage.description}</p>
        <Image src={usage.image} alt={usage.alt} className="my-4" />
      </div>
    ))}
  </div>
);

export default ProjectUsages;
