import { Typography } from "@/components/ui/typography";

const Address = () => {
  return (
    <div className="md:col-span-1">
      <Typography variant="h4" className="uppercase tracking-wider pb-4">
        Where to Find Me
      </Typography>

      <div>
        <Typography variant="large">Real Crossing, College Road</Typography>
        <Typography variant="large">Mountain View, California</Typography>
        <Typography variant="large">Sadar, Mymensingh, BD</Typography>
        <Typography variant="large">+880 164 3226 078</Typography>
      </div>
    </div>
  );
};

export default Address;
