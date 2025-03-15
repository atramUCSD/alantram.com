import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
import { BlogPage, ProjectPage, Sony, Caps_Redesign, CDC } from './pages'

import Main from "./pages/Main/Main";

import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'

import './App.css'

function App() {
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;

  const { theme } = useContext(ThemeContext);

  console.log("%cDEVELOPER PORTFOLIO", `color:${theme.primary}; font-size:50px`);
  console.log("%chttps://atramUCSD.github.io/personal-website-3", `color:${theme.tertiary}; font-size:20px`);
  console.log(dateTime)
  console.log("10:09pm hash router implementation + returned to / for Main component vs empty string")
  // console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      <HashRouter>
        <ScrollToTop/>
        <Switch>
          <Route path= '/' exact component={Main} />
          <Route path="/projects" exact component={ProjectPage} />
          <Route path="/Sony" exact component={Sony} />
          <Route path="/Caps_Redesign" exact component={Caps_Redesign} />
          <Route path="/CDC" exact component={CDC} />
          <Redirect to='/' /> 
        </Switch>
      </HashRouter>
      <BackToTop />
    </div>
  );
}

export default App;
