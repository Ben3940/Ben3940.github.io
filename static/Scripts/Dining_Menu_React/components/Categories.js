const Categories = ({ categories, filterMenu }) => {
    return (
      React.createElement("section", {className: "btn-container"}, categories.map(category => {
        return (
          React.createElement("button", {key: category, onClick: () => {filterMenu(category);}, className: "filter-btn"}, category));
      }))
    );
  };
  
  export default Categories;