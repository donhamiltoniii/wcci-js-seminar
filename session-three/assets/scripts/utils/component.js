class Component {
  constructor({ selector, state, template }) {
    this.element = document.querySelector(selector);
    this.state = state;
    this.template = template;
  }

  render() {
    return this.template(this.state);
  }
}

export default Component;
