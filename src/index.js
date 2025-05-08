As a code modification expert, I understand "changing the theme to be more modern" can be a bit broad and needs more specificity. However, assuming that you want to apply the most basic changes to CSS files and import said files, the changes could technically fit in your app.css or any new CSS file you'd create that would be imported in your src/index.js. 

But, if you require some modifications in your index.js file based on your current setup, here's the same file with an example modification:

import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./App.css";
import "./modernTheme.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

In this example, I've imported a new CSS file "modernTheme.css". You'd create this file and add all your modern theme styles there.

More complex themes might require more significant changes to the JavaScript code, potentially using context providers or other mechanisms to control the theme at runtime. This would involve creating a new context, developing a new hook to use this context, and adjusting each component so it's aware of the new theme context. 

Please let me know if you have any specific ideas for the new modern theme if you require more detailed help.