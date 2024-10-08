import { Typography } from "@/components/ui/typography";

interface ListItem {
  id: string;
  label: string;
  description: string;
}

type Props = {
  title?: string;
  description?: string;
  listItems: ListItem[];
  isCodedLabel?: boolean;
};

const ListGroup = ({ description, listItems, title, isCodedLabel }: Props) => {
  return (
    <>
      {title && (
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          {title}
        </h2>
      )}

      {description && (
        <p className="leading-7 [&:not(:first-child)]:mt-6">{description}</p>
      )}

      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {listItems?.map((item) => (
          <li key={item?.id}>
            <Typography
              variant={isCodedLabel ? "inlineCode" : "p"}
              className="inline"
            >
              {item?.label}
            </Typography>{" "}
            :{" "}
            <Typography variant="p" className="inline">
              {item?.description}
            </Typography>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
