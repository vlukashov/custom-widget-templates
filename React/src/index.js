const React = window.React;
const ReactDOM = window.ReactDOM;

import Widget from "./Widget";

class happeoCustomReactWidget extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.getElementsByTagName(slug)[0];
    const widgetId = this.getAttribute("widgetId") || "";
    ReactDOM.render(<Widget id={widgetId} />, mountPoint);
  }
}

const slug = "henna-testaa-8ntvyep6n4t9r536eo5n";

window.customElements.get(slug) ||
  window.customElements.define(slug, happeoCustomReactWidget);