import { Container, Button } from "react-bootstrap";
import React from "react";
import CreateCardComp from "../components/my-cards/CreateCardComp.js";
import CardComp from "../components/my-cards/CardComp.js";
import { useState } from "react";
import { BsCreditCard2FrontFill } from "react-icons/bs";
function MyCardsPage() {
  const [isAddMode, setAddMode] = useState(false);

  return (
    <Container className="card-container">
      <h1 style={{ fontFamily: "ariel", fontSize: "2rem", padding: "20px" }}>
        {" "}
        My Cards! <BsCreditCard2FrontFill></BsCreditCard2FrontFill>
      </h1>
      <Button
        className="primary-button btn btn-success"
        onClick={() => {
          setAddMode(true);
        }}
      >
        Create new card
      </Button>
      <Container className="p-0">
        {!isAddMode && <CardComp></CardComp>}
        {isAddMode && (
          <CreateCardComp clickHandler={insertCard}></CreateCardComp>
        )}
      </Container>
    </Container>
  );

  function insertCard(data) {
    var insertNewCard = insertCard(data, localStorage.getItem("token"), () => {
      setAddMode(false);
    });
  }
}
export default MyCardsPage;
