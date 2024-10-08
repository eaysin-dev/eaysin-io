import { accounts } from "@/app/data/accounts";
import { Typography } from "@/components/ui/typography";

const Social = () => {
  return (
    <div className="md:col-span-1">
      <Typography variant="h4" className="uppercase tracking-wider pb-4">
        Follow Us
      </Typography>

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
