import { Card, Button } from "react-bootstrap";

function CardComp({ card, clickHandler }) {
  return (
    (card && (
      <Card>
        <Card.Img variant="top" style={{ width: 60 }} src={card.bizImage} />
        <Card.Body>
          <Card.Title>{card.bizName}</Card.Title>
          <Card.Text>{card.bizDescription}</Card.Text>
          <Card.Text>{card.bizAddress}</Card.Text>
          <Card.Text>{card.bizPhone}</Card.Text>
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              clickHandler(card._id);
            }}
          >
            Remove this card
          </Button>
        </Card.Body>
      </Card>
    )) || <></>
  );
}

export default CardComp;
