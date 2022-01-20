const { useState } = window.React;

const Menu = ({items, addToOrder }) => {
  return (
    React.createElement("div", {className: "section-center"}, items.map((menuItem, idx) => {
    const {
      id,
      title,
      img,
      price,
      desc
    } = menuItem;

    return (
        React.createElement("article", {key: id, className: "menu-item"}, 
        React.createElement("img", {src: img, alt: title, className: "photo"}),
        React.createElement("div", {className: "item-info"}, 
        React.createElement("header", null, 
        React.createElement("h4", null, title), 
        React.createElement("h4", {className: "price"}, "$", price)), 
        React.createElement("p", {className: "item-text"}, desc), 
        React.createElement("button", {id: idx, onClick: () => addToOrder(menuItem, idx), className: "order-btn"}, "Add to Order"))))
    }))
  );
};

export default Menu;