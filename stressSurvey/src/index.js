import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Components/Base/ScrollToTop";
import MediaQueryReact from "media-query-react";
import { ForDevice } from "media-query-react";
import ScrollToTopMobile from "./Components/Base/ScrollToTopMobile";

const screenSize = {
  mobile: {
    // custom device name
    minWidth: 320,
    maxWidth: 480,
  },
  mobileLandscape: {
    minWidth: 481,
    maxWidth: 767,
  },
  tablet: {
    minWidth: 768,
    maxWidth: 1024,
  },
  desktop: {
    minWidth: 1025,
    maxWidth: 2500,
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MediaQueryReact mediaQueries={screenSize}>
      {/*<BrowserRouter basename="/powerMe/wellness" >*/}
      <BrowserRouter>
        <ForDevice deviceName={["tablet", "desktop"]}>
          <ScrollToTop />
        </ForDevice>

        <ForDevice deviceName="mobile">
          <ScrollToTopMobile />
        </ForDevice>
        <App />
      </BrowserRouter>
    </MediaQueryReact>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
