import Component from "../../utils/component";

import state from "../../state-management/state-object";

const Main = new Component({
  selector: ".app",
  state: state(this),
  template(data) {
    return `
      <main class="main-content">
        <section class="message">
            <p class="message-content">${data.message}</p>
            <input class="message-input" type="text" />
            <button class="message-button">${data.buttonLabel}</button>
        </section>
      </main>
    `;
  },
});

export default Main;
