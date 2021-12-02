import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import theme from "./theme";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import MetamaskProvider from "./components/MetaMaskProvider/index";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Trending from "./routes/WatchList/Trending";

function getLibrary(provider: any, connector: any) {
  return new ethers.providers.Web3Provider(provider); // this will vary according to whether you use e.g. ethers or web3.js
}

/**
 * / -> <Home /> which has Trending collections [INDEX route]
 * -----
 * Problem is how do we know ahead of time what the trending will be?
 * This will be derived from the API, and so this will be dynamic
 * /trending -> <CollectionLists />
 * /blueChips -> <CollectionLists />
 *
 * /collections/:watchList
 * ex., /collections/trending, /collections/:blueChips -> then fetch for each list from API
 *
 * -----
 * /collection/:collectionId -> <Collection />
 */

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>
          <MetamaskProvider>
            <Routes>
              <Route path="/" element={<App />}>
                <Route
                  index
                  element={<Navigate replace to="/watchLists/trending" />}
                />
                <Route path="watchLists/trending" element={<Trending />} />
                <Route
                  path="watchLists"
                  element={<Navigate replace to="/watchLists/trending" />}
                >
                  <Route path=":watchList" element={<div>New trends</div>} />
                </Route>
                <Route path="collection"></Route>
              </Route>
            </Routes>
          </MetamaskProvider>
        </ChakraProvider>
      </Web3ReactProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
