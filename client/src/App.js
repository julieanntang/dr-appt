import "./App.css";
import NavBar from "./components/NavBar";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router";
import { routes } from "./components/routes";

function App() {
  const renderRoutes = () => {
    return routes.map((route) => (
      <Route exact path={route.pathname} component={route.component} />
    ));
  };
  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          {renderRoutes()}
          <Route component={() => <p>react router 404 path not found</p>} />
        </Switch>
      </Container>
    </>
  );
}

export default App;

