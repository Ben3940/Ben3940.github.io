const { useState } = window.React;

const Modal = ({ cancelPayingBill, calcTotal }) => {
    /* return (
        <section className='modal-container'>
            <h2>Bill</h2>
            <div className="underline"></div>
            <h3>Total ${calcTotal()}</h3>
            <button onClick={() => {cancelPayingBill()}}className='cancel-bill-btn'>Cancel</button>
        </section>
    ); */
    return (
      React.createElement("section", {className: "modal-container"}, 
      React.createElement("h2", null, "Bill"), 
      React.createElement("div", {className: "underline"}), 
      React.createElement("h3", null, "Total $", calcTotal()), 
      React.createElement("button", {onClick: () => {cancelPayingBill();},className: "cancel-bill-btn"}, "Cancel"))
    );
}

export default Modal