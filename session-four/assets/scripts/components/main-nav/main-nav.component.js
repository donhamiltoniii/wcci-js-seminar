import Component from "../../utils/component";

import state from "../../state-management/state-object";

const MainNav = new Component({
  selector: ".app",
  state,
  template() {
    return `
      <nav class="main-nav">
        <button class="main-nav__button btn">MENU</button>
        <ul class="main-nav__list hidden">
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#details">Details</a>
            </li>
            <li>
                <a href="#friends">Friends</a>
            </li>
            <li>
                <a href="#posts">Posts</a>
            </li>
            <li>
                <a href="#comments">Comments</a>
            </li>
        </ul>
        </nav>
      `;
  },
});

export default MainNav;
