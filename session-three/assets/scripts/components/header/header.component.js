import Component from "../../utils/component";

import state from "../../state-management/state-object";

import MainNav from "../main-nav/main-nav.component";

const Header = new Component({
  selector: ".app",
  state,
  template(data) {
    return `
      <header class="main-header">
        <section class="main-header__logo">
          <h1>${data.siteTitle}</h1>
          <h2>${data.siteSubtitle}</h2>
        </section>
        ${MainNav.render()}
      </header>
    `;
  },
});

export default Header;
