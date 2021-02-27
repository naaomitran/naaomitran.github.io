import { Link, BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom";
import HP from './homepage/HP';
import Project from './projects/Project';
import About from './about/About';
import Contact from './contact/Contact'
import { Document, Page } from 'react-pdf' 
// import Resume from '../assets/NTResume.pdf'
// import Res from '../src/NTResume.pdf'
import Resume from './NTResume.pdf';

function App() {
  return (
    <HashRouter basename="/subdirectory"> 

    <Router>
      <Switch>
        <Route {`${process.env.PUBLIC_URL}/about`} component={About} />
        <Route path={`${process.env.PUBLIC_URL}/projects`} component={Project} />
        <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
        <Route path={`${process.env.PUBLIC_URL}/resume`}>
          <Document file={Resume}>
          <Page />
          </Document>
        </Route>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={HP} />
          {/* <HP /> */}
        {/* </Route> */}
      </Switch>

    </Router>

    </HashRouter>

    

  );
}

export default App;
