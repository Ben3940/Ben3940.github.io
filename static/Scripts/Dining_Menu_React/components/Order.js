const Order = ({ order, calcTotal, removeFromOrder, clearOrder, payingBill }) => {
    return (
        React.createElement("section", {className: "order-container"},
        React.createElement("h4", null, "Bill"), order.map((item, idx) => {
        return (React.createElement("div", {key: idx, className: "order-item"},
            React.createElement("h5", null, item.title), 
            React.createElement("div", null, 
            React.createElement("span", null, item.price), 
            React.createElement("span", null, 
            React.createElement("button", {onClick: () => removeFromOrder(item), className: "remove-btn"},
            React.createElement("i", {className: "fas fa-minus remove-icon"})))))
        );}),
        React.createElement("div", {className: "order-underline"}),
        React.createElement("div", {className: "total"},
        React.createElement("span", null, "total:"),
        React.createElement("span", null, "$", calcTotal())),
        React.createElement("button", {onClick: () => clearOrder(), className: "cancel-bill-btn"}, "Cancel Order"),
        React.createElement("button", {onClick: () => payingBill(), className: "pay-bill-btn"}, "Pay Bill"))
    );
}

export default Order