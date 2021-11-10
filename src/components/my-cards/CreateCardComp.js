import { Form, Button } from "react-bootstrap";
import { creatNewCard } from "../../helpers/FetchHelper.js";
import { toast } from "react-toastify";

function CreateCardComp({ clickHandler }) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicBusinessName">
        <Form.Label>Business Name:</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBusinessDescription">
        <Form.Label>Business Description:</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBusinessAddress">
        <Form.Label>Business Address:</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBusinessPhone">
        <Form.Label>Business Phone:</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBusinessImage">
        <Form.Label>Business Image, Please enter a URL:</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Button
        variant="primary"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          registerCard();
        }}
      >
        Create Card
      </Button>
    </Form>
  );
}

function getInputData() {
  return {
    bizName: document.getElementById("formBasicBusinessName").value,
    bizDescription: document.getElementById("formBasicBusinessDescription")
      .value,
    bizAddress: document.getElementById("formBasicBusinessAddress").value,
    bizPhone: document.getElementById("formBasicBusinessPhone").value,
    bizImage: document.getElementById("formBasicBusinessImage").value,
  };
}

function registerCard() {
  const data = getInputData();
  creatNewCard(data, (data) => {
    if (data._id) {
      toast("Card Created Successfully");
    } else {
      toast("Eror Card was not created");
    }
  });
}

export default CreateCardComp;
