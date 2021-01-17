import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HP from './homepage/HP';
import Project from './projects/Project';
import About from './about/About';
import Contact from './contact/Contact'
import { Document, Page } from 'react-pdf' 

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/project'>
          <Project />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/resume'>
          <Document file='Users/naomitran/Desktop/NTResume.pdf'>
          <Page />
          </Document>
        </Route>
        <Route path='/'>
          <HP />
        </Route>
      </Switch>

    </Router>
    

  );
}

export default App;
