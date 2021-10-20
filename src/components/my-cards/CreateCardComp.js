import { Form, Button } from "react-bootstrap";
import { creatNewCard } from "../../helpers/FetchHelper.js";

function CreateCardComp({ clickHandler }) {
  function getInputData() {
    return {
      bizName: document.getElementById("formBasicBusinessName").value,
      bizDescription: document.getElementById("formBasicBusinessDescription")
        .value,
      bizAddress: document.getElementById("formBasicBusinessAddress").value,
      bizPhone: document.getElementById("formBasicBusinessPhone").value,
    };
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicBusinessName">
        <Form.Label>Business Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBusinessDescription">
        <Form.Label>Business Description</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBusinessAddress">
        <Form.Label>Business Address</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBusinessPhone">
        <Form.Label>Business Phone</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBusinessImage">
        <Form.Label>Business Image</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          const bizData = getInputData();
          creatNewCard(bizData, (response) => {
            clickHandler(response);
          });
        }}
      >
        Create Card
      </Button>
    </Form>
  );
}
export default CreateCardComp;
