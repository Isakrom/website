"use strict";
// frameworks loaded and used
/* global Aviator, ReactDOM, rushEvents */
// components loaded
/* global App, EventGroupsContainer */
/* global EventGroupsContainer */
const AppRouteTarget = {
  setupLayout: () =>{
    ReactDOM.render(
      <App/>,
      document.body
    );
  },
  events: () =>{
    ReactDOM.render(
      <EventGroupsContainer events={rushEvents}/>,
      document.querySelector("#content")
    );
    adjustFooterHeight();
  },
};
Aviator.setRoutes({
  target: AppRouteTarget,
  "/*": "setupLayout",
  "/": "events",
  "/rush": {
    target: AppRouteTarget,
    "/*": "setupLayout",
    "/": "events",
    "/events": "events",
  },
});
window.addEventListener("load", main);

function main(){
  Aviator.dispatch();
  Aviator.navigate("/rush/");
}

function adjustFooterHeight() {
  const above_footer_height =
    document.querySelector("#content").clientHeight +
    document.querySelector("nav").clientHeight;
  const footer = document.querySelector("#footer");
  const window_height = window.innerHeight;
  if ((window_height - footer.clientHeight) > above_footer_height) {
    footer.style.marginTop = (window_height - footer.clientHeight - above_footer_height) + "px";
  } else {
    footer.style.marginTop = null;
  }
}



