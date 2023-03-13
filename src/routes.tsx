import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Projects } from "./pages/Portfolio";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Projects} />
      </Switch>
    </BrowserRouter>
  );
}
