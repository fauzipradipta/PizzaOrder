import React from "react";
import { Modal } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { addToCart } from "../helpers/CartAction";

const handleClick = (id) => {
  this.props.addToCart(id);
};
const ModalItem = ({ props, show, id, onHide, image, name, price }) => {
  if (!show) {
    return null;
  }

  return (
    <div>
      <Modal show={show}>
        <Modal.Body>
          <Card.Img className="image" variant="top" src={image} />
          <Modal.Title>{name}</Modal.Title>${price}
        </Modal.Body>
        <Modal.Footer>
          <button className="add-to-card" variant="secondary" onClick={onHide}>
            Close
          </button>
          <button
            className="add-to-card"
            onClick={() => {
              handleClick(id);
            }}
          >
            Add to cart
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalItem);
