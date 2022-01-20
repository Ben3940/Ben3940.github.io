import Menu from 'static/Scripts/Dining_Menu_React/components/Menu.js';
import Categories from 'static/Scripts/Dining_Menu_React/components/Categories.js';
import Order from 'static/Scripts/Dining_Menu_React/components/Order.js';
import Modal from 'static/Scripts/Dining_Menu_React/components/Modal.js';
import items from 'static/Scripts/Dining_Menu_React/data.js';

const { useState, useEffect } = window.React;

function getCategories(menuItems) {
  let categories = ["all"];
  for(let i = 0; i < menuItems.length; i++) {
    if(!categories.includes(menuItems[i].category)) {
      categories.push(menuItems[i].category);
    }
  }
  return categories;
}

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(getCategories(menuItems));
  const [order, setOrder] = useState([]);
  const [count, setCount] = useState(10000);
  const [payBill, setPayBill] = useState(false);

  const filterMenu = (category) => {
    if(category !== "all"){
      const filteredItems = items.filter(item => item.category === category)
      setMenuItems(filteredItems);
    } else {
      setMenuItems(items);
    }
  }


  const addToOrder = (menuItem, idx) => {
    menuItem.id = count;
    setOrder(order.concat(menuItem));
    setCount(count + 1);
  }

  const removeFromOrder = (itemToRemove) => {
    let first_inst = true;
    let newBill = []
    for(let i=0; i < order.length; i++) {
      if(order[i].id === itemToRemove.id && first_inst){
        first_inst = false;
        continue;
      }
      newBill.push(order[i]);
    }
    setOrder(newBill);
  }

  const clearOrder = () => {
    setOrder([]);
  }

  const payingBill = () => {
    setPayBill(true);
  }

  const cancelPayingBill = () => {
    setPayBill(false);
  }


  const calcTotal = () => {
    let total = 0;
    order.forEach((item) => {
      total += item.price;
    })

    return total.toFixed(2);
  }
  return (
    React.createElement("main", null, payBill ? 
    React.createElement(Modal, {cancelPayingBill: cancelPayingBill, calcTotal: calcTotal}) : "", React.createElement("div", {className: payBill ? "overlay" : ""}, 
    React.createElement("section", { className: "menu section"}, order.length > 0 ? React.createElement(Order, {
      order: order,
      calcTotal: calcTotal,
      removeFromOrder: removeFromOrder,
      clearOrder: clearOrder,
      payingBill: payingBill
    }) : "", 
    React.createElement("div", {className: "title"}, 
    React.createElement("h2", null, "Menu"), 
    React.createElement("div", {className: "underline"})),
    React.createElement(Categories, {categories: categories, filterMenu: filterMenu}), 
    React.createElement(Menu, {items: menuItems, addToOrder: addToOrder}))))
  );
}

export default App;