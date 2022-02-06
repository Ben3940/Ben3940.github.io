import Navbar from './Navbar.js';

const Header = ({ navlinks, user, showProjects }) => {
  return (
    React.createElement("header", {className: "header-container"},
      React.createElement(Navbar, {
        navlinks: navlinks,
        showProjects: showProjects
      }),
      React.createElement("div", {className: "header-float-left"},
      React.createElement("button", {className: "header-upgrade-btn"}, "Upgrade"),
      React.createElement("button", {className: "header-user-btn"}, "B")))
  )
};

export default Header;