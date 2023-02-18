import React, { useState } from "react";
import { Card } from "react-bootstrap";
import ModalMenu from "../Modal/ModalItem";

function MenuItem({ image, name, itemPrice }) {
  const [showModal, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <div className="menuItem">
      <Card>
        <Card.Img className="image" variant="top" src={image} />
        <Card.Body>
          <Card.Title className="pizzaName">{name}</Card.Title>
          <Card.Text>${itemPrice}</Card.Text>

          <button className="add-to-card" onClick={handleShow}>
            {" "}
            See More{" "}
          </button>
        </Card.Body>
      </Card>
      <ModalMenu
        show={showModal}
        onHide={() => setShow(false)}
        image={image}
        name={name}
        price={itemPrice}
      />
    </div>
  );
}
export default MenuItem;
