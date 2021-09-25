import "./App.css";
import NavBar from "./components/NavBar";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Appointments from "./pages/Appointments";
import Patients from "./pages/Patients";
import Physicians from "./pages/Physicians";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/appointments" component={Appointments} />
          <Route exact path="/patients" component={Patients} />
          <Route exact path="/physicians" component={Physicians} />
        </Switch>
      </Container>
    </>
  );
}

export default App;

