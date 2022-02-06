const Navbar = ({ navlinks, showProjects }) => {
    return (
        React.createElement("section", {className: "navbar-container"},
        React.createElement("a", {id: "goBack",href: "index.html#WebDev-head-section"},
        React.createElement("i", {class: "fas fa-arrow-circle-left"})), navlinks.map(link => {
            return React.createElement("a", {
              key: link,
              onClick: link === 'Projects' ? () => {showProjects(true);} : () => {showProjects(false);}, href: "!#", className: "navbar-link"}, link);})))
  };
  
  export default Navbar;