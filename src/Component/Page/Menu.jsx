import React from "react";
import MenuItem from "./MenuItem";
import APIService from "../service/api";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    APIService.getItems()
      .then((data) => {
        this.setState({ items: data });
        console.log(this.state.data);
      })
      .catch(function (ex) {
        console.log("Response Getting Error", ex);
      });
  }

  render() {
    return (
      <div className="menu">
        <h1 className="Title"> Our Menu</h1>
        <div className="menuList">
          {this.state.items.map((item, key) => (
            <MenuItem
              key={key}
              image={item.image}
              name={item.name}
              price={item.item_price}
            />
          ))}
        </div>
      </div>
    );
  }
}
