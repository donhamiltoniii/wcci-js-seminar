import RenderApp from "../utils/render-application";
import App from "../app";

const handler = function () {
  return {
    get(obj, prop) {
      if (
        ["[object Object]", "[object Array]"].indexOf(obj[prop].toString()) > -1
      ) {
        return new Proxy(obj[prop], handler());
      }
      return obj[prop];
    },
    set(obj, prop, value) {
      obj[prop] = value;
      RenderApp.render("#root", App.render());
      return true;
    },
    deleteProperty(obj, prop) {
      delete obj[prop];
      RenderApp.render("#root", App.render());
      return true;
    },
  };
};

const state = {
  buttonLabel: "Update Message",
  message: "Hello from Component Class!",
  siteSubtitle: "Getting through this together",
  siteTitle: "We Can COVID",
};

const stateProxy = new Proxy(state, handler());

export default stateProxy;
