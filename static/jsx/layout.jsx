"use strict";
/* global App, Aviator, React, ReactDOM, TimeUtil */
/* global EventGroupsContainer */
/*
Aviator stuffs:
https://gist.github.com/hojberg/9549330
https://github.com/swipely/aviator
https://stackoverflow.com/questions/31048953/what-do-these-three-dots-in-react-do

Gist on AFS:
https://gist.github.com/robertvunabandi/36dc4eeab7646713fd627eefc5f5182a
*/
const AppRouteTarget = {
  setupLayout: () =>{
    ReactDOM.render(
      <App/>,
      document.body
    );
  },
  events: () =>{
    ReactDOM.render(
      <EventGroupsContainer/>,
      document.querySelector("#content")
    );
  },
};
Aviator.setRoutes({
  target: AppRouteTarget,
  "/*": "setupLayout",
  "/": "events",
  "/events": "events",
});
window.addEventListener("load", main);

function main(){
  Aviator.dispatch();
  // Aviator.navigate("/");
}



