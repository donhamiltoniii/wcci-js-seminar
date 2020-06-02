const RenderApplication = {
  render(selector, content) {
    try {
      const element = document.querySelector(selector);
      element.innerHTML = content;
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};

export default RenderApplication;
