import Header from './components/Header.js'
import Sidebar from './components/Sidebar.js'
import Content from './components/Content.js'
import FocusedContent from './components/FocusedContent.js'
import Stats from './components/Stats.js'
import data from './data.js'

const { useState, useEffect } = window.React;

function App() {
    const [links, setLinks] = useState([]);
    const [projects, setProjects] = useState([]);
    const [teams, setTeams] = useState([]);
    const [statsProjects, setStatsProjects] = useState({});
    const [statsTeams, setStatsTeams] = useState({});
    const [displayProjects, setDisplayProjects] = useState(false);
    const [focusedContent, setFocusedContent] = useState(null);
  
    const showProjects = (bool) => {
      setDisplayProjects(bool);
      setFocusedContent(null);
    }
  
    const setFocus = (card) => {
      setFocusedContent(card);
    }
  
    useEffect(() => {
      setLinks(data.navlinks);
      setProjects(data.projects);
      setTeams(data.teams);
      setStatsProjects(data.stats.projects)
      setStatsTeams(data.stats.teams)
    }, [])
  
    return (
        React.createElement(React.Fragment, null, React.createElement("main", {className: "main-container"}, 
        React.createElement(Header, {
            navlinks: links,
            showProjects: showProjects}),
        React.createElement(Sidebar, {
            projects: projects,
            teams: teams,
            showProjects: showProjects,
            setFocus: setFocus,
            displayProjects: displayProjects,
            focusedContent: focusedContent}),
            focusedContent ? 
        React.createElement(FocusedContent, {
            data: focusedContent,
            showProjects: showProjects}) :
        React.createElement(Content, {
            data: displayProjects ? projects : teams,
            displayProjects: displayProjects,
            setFocus: setFocus}), focusedContent ? null : 
        React.createElement(Stats, {
            projectStats: statsProjects,
            teamStats: statsTeams,
            displayProjects: displayProjects
        })))
    );
  }
  
  export default App;