import { Typography } from "./typography";

type Props = {
  title: string;
  description: string;
  dataNum: string;
};

const SectionHeader = ({ description, title, dataNum }: Props) => {
  return (
    <div className="grid md:grid-cols-2 mb-14">
      <div className="section-intro relative mb-5 mt-4" data-num={dataNum}>
        <Typography variant="subhead" className="mt-12">
          {title}
        </Typography>
      </div>
      <Typography variant="h1">{description}</Typography>
    </div>
  );
};

export default SectionHeader;
