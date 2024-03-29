import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";

function Root() {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
