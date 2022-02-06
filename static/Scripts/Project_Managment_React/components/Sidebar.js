const Sidebar = ({ projects, teams, showProjects, setFocus, displayProjects, focusedContent }) => {
    const newProjectText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, officiis eligendi corporis nam nesciunt dicta minus voluptatum rerum repellat, id dignissimos aliquam inventore a?";
    const newTeamText = "Lorem, ipsum id dignissimos amet consectetur adipisicing elit. Aut amet optio, quasi dignissimos cum dicta autem hic ipsum libero delectus error nemo laboriosam natus inventore. Temporibus!";

    if (focusedContent) {
        if (focusedContent.type === "project") {
            return (
                React.createElement("section", {className: "sidebar-container"},
                React.createElement("h3", null,
                React.createElement("button", {onClick: () => showProjects(true),
                    className: "sidebar-projects"}, "Projects")), 
                    projects.map(project => {
                    return React.createElement("button", {
                      key: project.title,
                      onClick: () => setFocus(project),
                      className: "sidebar-project-btn"}, project.title);}),
                React.createElement("div", {className: "underline"}),
                React.createElement("h3", null,
                React.createElement("button", {onClick: () => showProjects(false),className: "sidebar-teams"}, "Teams")), 
                    teams.map(team => {
                    return React.createElement("button", {
                      key: team.name,
                      onClick: () => setFocus(team),
                      className: "sidebar-team-btn"
                    }, team.name);}),
                React.createElement("div", {className: "sidebar-float-bottom"},
                React.createElement("h3", null, "Start New Project"), 
                React.createElement("div", {className: "sidebar-new-project-icon"}, "+"), 
                React.createElement("p", null, newProjectText)))
            );
        } else {
            return (
                React.createElement("section", {className: "sidebar-container"},
                React.createElement("h3", null,
                React.createElement("button", {onClick: () => showProjects(true),
                    className: "sidebar-projects"}, "Projects")), 
                    projects.map(project => {
                    return React.createElement("button", {
                      key: project.title,
                      onClick: () => setFocus(project),
                      className: "sidebar-project-btn"
                    }, project.title);}),
                React.createElement("div", {className: "underline"}),
                React.createElement("h3", null,
                React.createElement("button", {onClick: () => showProjects(false),
                    className: "sidebar-teams"}, "Teams")), 
                    teams.map(team => {
                    return React.createElement("button", {
                      key: team.name,
                      onClick: () => setFocus(team),
                      className: "sidebar-team-btn"}, team.name);
                  }), 
                React.createElement("div", {className: "sidebar-float-bottom"},
                React.createElement("h3", null, "Start New Team"),
                React.createElement("div", {className: "sidebar-new-project-icon"}, "+"),
                React.createElement("p", null, newTeamText)))
            );
        }

    } else {
        if (displayProjects){
            return (
                React.createElement("section", {className: "sidebar-container"},
                React.createElement("h3", null,
                React.createElement("button", {onClick: () => showProjects(true),
                    className: "sidebar-projects"}, "Projects")), 
                    projects.map(project => {
                    return React.createElement("button", {
                      key: project.title,
                      onClick: () => setFocus(project),
                      className: "sidebar-project-btn"}, project.title);}),
                React.createElement("div", {className: "underline"}),
                React.createElement("h3", null,
                React.createElement("button", {onClick: () => showProjects(false),className: "sidebar-teams"}, "Teams")), 
                    teams.map(team => {
                    return React.createElement("button", {
                      key: team.name,
                      onClick: () => setFocus(team),
                      className: "sidebar-team-btn"
                    }, team.name);}),
                React.createElement("div", {className: "sidebar-float-bottom"},
                React.createElement("h3", null, "Start New Project"), 
                React.createElement("div", {className: "sidebar-new-project-icon"}, "+"), 
                React.createElement("p", null, newProjectText)))
            );
        }
        else {
            return (
                React.createElement("section", {className: "sidebar-container"},
                React.createElement("h3", null,
                React.createElement("button", {onClick: () => showProjects(true),
                    className: "sidebar-projects"}, "Projects")), 
                    projects.map(project => {
                    return React.createElement("button", {
                      key: project.title,
                      onClick: () => setFocus(project),
                      className: "sidebar-project-btn"
                    }, project.title);}),
                React.createElement("div", {className: "underline"}),
                React.createElement("h3", null,
                React.createElement("button", {onClick: () => showProjects(false),
                    className: "sidebar-teams"}, "Teams")), 
                    teams.map(team => {
                    return React.createElement("button", {
                      key: team.name,
                      onClick: () => setFocus(team),
                      className: "sidebar-team-btn"}, team.name);
                  }), 
                React.createElement("div", {className: "sidebar-float-bottom"},
                React.createElement("h3", null, "Start New Team"),
                React.createElement("div", {className: "sidebar-new-project-icon"}, "+"),
                React.createElement("p", null, newTeamText)))
            );
        }
    }
    
    
  
};

export default Sidebar;