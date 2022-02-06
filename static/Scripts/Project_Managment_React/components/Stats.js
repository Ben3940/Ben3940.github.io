const Stats = ({ projectStats, teamStats, displayProjects}) => {
    if (displayProjects) {
      return (
        React.createElement("section", {className: "stats-container"},
        React.createElement("div", {className: "stats-inner-container"},
        React.createElement("h4", null, "Project Stats"),
        React.createElement("div", {className: "stats-bargraph"},
        React.createElement("span", null, "Initialized:", 
        React.createElement("div", {className:"stats-initialized-projects-bar"}, projectStats.initializedProjects)),
        React.createElement("span", null, "Completed:",
        React.createElement("div", {className: "stats-completed-projects-bar"}, projectStats.completedProjects)),
        React.createElement("span", null, "Active:",
        React.createElement("div", {className: "stats-active-projects-bar"}, projectStats.activeProjects))))));
    }
  
    return (
        React.createElement("section", {className: "stats-container"},
        React.createElement("div", {className: "stats-inner-container"},
        React.createElement("h4", null, "Team Stats"),
        React.createElement("span", null, "Active Teams: ", teamStats.numberTeams))))
};
  
export default Stats;