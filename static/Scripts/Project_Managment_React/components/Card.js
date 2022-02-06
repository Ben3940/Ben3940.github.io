const Card = ({ project, team, idx, setFocus }) => {

    if (project) {
        return (
            React.createElement("div", {onClick: () => setFocus(project),
                className: `card-container-project ${idx % 2 === 0 ? "primary-bgrd" : "secondary-bgrd"}`
              },
            React.createElement("h3", null, project.symbol))
        )
    }
    return (
        React.createElement("div", {onClick: () => setFocus(team),
            className: `card-container-team ${idx % 2 === 0 ? "primary-bgrd" : "secondary-bgrd"}`
          },
        React.createElement("h3", null, team.symbol))
    );
};

export default Card;