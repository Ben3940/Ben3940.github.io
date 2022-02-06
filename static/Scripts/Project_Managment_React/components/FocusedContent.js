const FocusedContent = ({ data, showProjects }) => {
    if (data.type === "project") {
        return (
            React.createElement("section", {className: "focusedContent-container"},
            React.createElement("h2", null, data.title),
            React.createElement("h2", null, "Project Description"),
            React.createElement("div", {className: "underline-secondary"}),
            React.createElement("p", null, data.desc),
            React.createElement("button", {onClick: () => showProjects(true)}, "Close"))
        );
    }
  
    return (
        React.createElement("section", {className: "focusedContent-container"},
        React.createElement("h2", null, data.name),
        React.createElement("h2", null, "Team Description"),
        React.createElement("div", {className: "underline-secondary"}),
        React.createElement("p", null, data.desc),
        React.createElement("div", {className: "focusedContent-memberlist"},
        React.createElement("h1", null, "Members [", data.members, "]"),
        React.createElement("div", {className: "underline-secondary"}),
        React.createElement("ul", {className: "focusedContent-members"}, data.memberNames.map((person, idx) => {
            return React.createElement("li", {
              key: idx
            }, person);
          }))),
        React.createElement("button", {onClick: () => showProjects(false)}, "Close"))
    );
};

export default FocusedContent;