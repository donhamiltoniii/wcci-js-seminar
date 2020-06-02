const handler = function (instance) {
  return {
    get(obj, prop) {
      if (
        ["[object Object]", "[object Array]"].indexOf(obj[prop].toString()) > -1
      ) {
        return new Proxy(obj[prop], handler(instance));
      }
      return obj[prop];
    },
    set(obj, prop, value) {
      obj[prop] = value;
      instance.render();
      return true;
    },
    deleteProperty(obj, prop) {
      delete obj[prop];
      instance.render();
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

export default (component) => new Proxy(state, handler(component));
