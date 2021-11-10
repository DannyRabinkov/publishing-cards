import { Container, Button } from "react-bootstrap";
import React from "react";
import CreateCardComp from "../components/my-cards/CreateCardComp.js";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { creatNewCard } from "../helpers/FetchHelper.js";
import { toast } from "react-toastify";
import CardsCont from "../components/my-cards/CardsCont.jsx";

export default class MyCardsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddMode: false,
    };
    this.insertCard = this.insertCard.bind(this);
  }

  insertCard = (data) => {
    creatNewCard(data, (data) => {
      if (data._id) {
        toast("Card Created Successfully", {
          onClose: () => {
            !this.state.isAddMode && <CardsCont />;
          },
        });
      } else {
        toast("Eror card was not created");
      }
    });
  };

  render() {
    return (
      <Container className="card-container">
        <h1>
          {" "}
          My Cards! <BsCreditCard2FrontFill />
        </h1>
        <Button
          className="primary-button btn btn-success"
          onClick={() => {
            this.setState({ isAddMode: true });
          }}
        >
          Create new card
        </Button>
        <Container className="p-0">
          {!this.state.isAddMode && <CardsCont />}
          {this.state.isAddMode && (
            <CreateCardComp clickHandler={this.insertCard} />
          )}
        </Container>
      </Container>
    );
  }
}
