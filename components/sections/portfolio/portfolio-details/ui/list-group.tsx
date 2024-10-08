import { ListItem } from "@/app/data/portfolio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

type Props = {
  title?: string;
  description?: string;
  listItems: ListItem[];
  isCodedLabel?: boolean;
  isCard?: boolean;
};

const ListGroup = ({
  description,
  listItems,
  title,
  isCodedLabel,
  isCard = false,
}: Props) => {
  return (
    <Card className={`mt-5 ${!isCard && "m-0 p-0 border-none"}`}>
      <CardHeader className={`${!isCard && "m-0 p-0 border-none"}`}>
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription> {description}</CardDescription>}
      </CardHeader>

      <CardContent className={`${!isCard && "ml-2 p-0 border-none"}`}>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {listItems?.map((item) => (
            <li key={item?.id}>
              {item?.label && (
                <div className="inline">
                  <Typography
                    variant={isCodedLabel ? "inlineCode" : "p"}
                    className="inline"
                  >
                    {item?.label}
                  </Typography>{" "}
                  :{" "}
                </div>
              )}
              <Typography variant="p" className="inline">
                {item?.description}
              </Typography>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ListGroup;
