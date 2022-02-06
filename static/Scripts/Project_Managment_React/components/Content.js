import Card from './Card.js';

const Content = ({ data, displayProjects, setFocus }) => {
    if (displayProjects) {
        return (
            React.createElement(React.Fragment, null,
            React.createElement("h2", {className: "content-header"}, "Projects"),
            React.createElement("section", {className: "content-container"}, data.map((project, idx) => {
                console.log(project);
                return React.createElement(Card, {
                  key: project.title,
                  project: project,
                  team: null,
                  idx: idx,
                  setFocus: setFocus
                });
              })))
        )
    }
    return (
        React.createElement(React.Fragment, null, 
        React.createElement("h2", {className: "content-header"}, "Teams"),
        React.createElement("section", {className: "content-container"}, 
        data.map((team, idx) => {
            return React.createElement(Card, {
              key: team.name,
              project: null,
              team: team,
              idx: idx,
              setFocus: setFocus
            });
          })))
    );
};

export default Content;