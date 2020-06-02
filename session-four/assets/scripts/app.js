import Component from "./utils/component";

import state from "./state-management/state-object";

import Header from "./components/header/header.component";
import Main from "./components/main/main.component";

const App = new Component({
  selector: "#root",
  state: state(this),
  template() {
    return `
      <div class="app">
        ${Header.render()}
        ${Main.render()}
      </div>
    `;
  },
});

export default App;
