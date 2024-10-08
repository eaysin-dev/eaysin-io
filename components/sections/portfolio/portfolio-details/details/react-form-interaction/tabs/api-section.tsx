import ListGroup from "../../../ui/list-group";
import { inputs, returns } from "../data";

export const APISection = () => (
  <>
    <h2 className="text-xl font-semibold mb-5">Api</h2>
    <ListGroup title="Inputs" listItems={inputs} isCodedLabel />

    <ListGroup
      title="Returns"
      description="An object containing the following methods and properties:"
      isCodedLabel
      listItems={returns}
    />
  </>
);
