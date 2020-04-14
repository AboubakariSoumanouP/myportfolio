import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import ProjectSubPage from "./pages/ProjectSubPage";
import { act } from "@testing-library/react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "Home",
    };
  }

  componentDidMount() {
    this.addPageActiveClass();
  }

  componentDidUpdate() {
    this.addPageActiveClass();
  }

  addPageActiveClass() {
    const activeLink = document.querySelector(".active-page");
    if (activeLink) {
      activeLink.classList.remove("active-page");
    }

    const navLinks = document.querySelectorAll(".navbar a");
    const searchText = this.state.activePage;

    for (var i = 0; i < navLinks.length; i++) {
      if (navLinks[i].innerText.includes(searchText)) {
        navLinks[i].classList.add("active-page");
        break;
      }
    }
  }

  changePage = (newPage) => {
    this.setState({ activePage: newPage });
  };

  render() {
    const ProjectSubPageComponent = (projectInfo) => {
      return <ProjectSubPage projectInfo={projectInfo} />;
    };

    return (
      <Router basename="/">
        <NavBar
          activePage={this.state.activePage}
          changePage={this.changePage}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutMe" component={About} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/contactMe" component={Contact} />
          <Route
            exact
            path="/projectSubPage"
            component={ProjectSubPageComponent}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
