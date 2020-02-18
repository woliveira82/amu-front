import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Email from "./pages/email";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ Email } />
        </Switch>
    </BrowserRouter>
);

export default Routes;