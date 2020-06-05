import App from "./app";
import RenderApplication from "./utils/render-application";

import state from "./state-management/state-object";

document.body.addEventListener("click", (event) => {
  if (event.target.classList.contains("message-button")) {
    const messageButton = event.target;
    const messageInput = messageButton.parentElement.querySelector(
      ".message-input"
    );

    const updatedMessage = messageInput.value;

    state.message = updatedMessage;

    console.log(state);
  }
});

RenderApplication.render("#root", App.render());
