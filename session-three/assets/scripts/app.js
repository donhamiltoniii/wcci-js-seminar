import Component from "./utils/component";

import state from "./state-management/state-object";

import Header from "./components/header/header.component";

const App = new Component({
  selector: "#root",
  state,
  template() {
    return `
      <div class="app">
        ${Header.render()}
      </div>
    `;
  },
});

export default App;
