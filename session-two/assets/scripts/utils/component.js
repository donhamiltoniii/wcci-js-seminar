class Component {
  constructor(properties) {
    this.element = document.querySelector(properties.selector);
    this.state = properties.state;
    this.template = properties.template;
  }

  render() {
    this.element.innerHTML = this.template(this.state);
    return true;
  }
}

export default Component;
