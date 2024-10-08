import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ListGroup from "../../../ui/list-group";
import { inputs, returns } from "../data";

export const APISection = () => (
  <Card>
    <CardHeader>
      <h2 className="text-xl font-semibold">Api</h2>
    </CardHeader>{" "}
    <CardContent>
      <ListGroup title="Inputs" listItems={inputs} isCodedLabel />

      <ListGroup
        title="Returns"
        description="An object containing the following methods and properties:"
        isCodedLabel
        listItems={returns}
      />
    </CardContent>
  </Card>
);
