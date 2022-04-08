import * as React from 'react';
import core from "@fubo/core";

import {
  BrowserRouter as Router,
} from "react-router-dom";

const { AppProvider, FederatedModule } = core.components;

// @ts-ignore
const Routes = React.lazy(() => import('smarttv/Routes'));

const App = () => (
  <AppProvider>
    <h1>Xbox App</h1>
    <FederatedModule>
      <Routes />
    </FederatedModule>
  </AppProvider>
);

export default App;
