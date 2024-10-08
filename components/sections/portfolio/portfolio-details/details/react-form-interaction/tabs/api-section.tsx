import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ListGroup from "../../../ui/list-group";
import { inputs, returns } from "../data";

export const APISection = () => (
  <Card>
    <CardHeader>Api</CardHeader>
    <CardContent>
      <ListGroup
        title="Inputs"
        description="useFormInteractions(initialValues, validationRulesConfig)"
        listItems={inputs}
        isCodedLabel
      />

      <ListGroup
        title="Returns"
        description="An object containing the following methods and properties:"
        isCodedLabel
        listItems={returns}
      />
    </CardContent>
  </Card>
);
