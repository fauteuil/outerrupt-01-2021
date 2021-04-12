/* eslint-disable @typescript-eslint/no-var-requires */
import React, { render } from "react-dom";
import { RecoilRoot } from "recoil";

import App from "./App";

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

const rootElement = document.getElementById("root");
render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  rootElement
);
