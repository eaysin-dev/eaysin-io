import { accounts } from "@/app/data/accounts";
import { Typography } from "@/components/ui/typography";

const Social = () => {
  return (
    <div className="md:col-span-1">
      <h2 className="text-3xl font-bold bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text mb-2 text-start">
        Follow Me
      </h2>

      <ul className="space-y-2">
        <li>
          <a href={accounts?.github} target="_blank" rel="noopener noreferrer">
            <Typography variant="large">Github</Typography>
          </a>
        </li>
        <li>
          <a
            href={accounts?.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography variant="large">Linkedin</Typography>
          </a>
        </li>
        <li>
          <a href={accounts?.twitter} target="_blank" rel="noopener noreferrer">
            <Typography variant="large">Twitter</Typography>
          </a>
        </li>
        <li>
          <a
            href={accounts?.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography variant="large">Facebook</Typography>
          </a>
        </li>

        <li>
          <a
            href={accounts?.leetCode}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography variant="large">LeetCode</Typography>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
