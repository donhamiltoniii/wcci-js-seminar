const apiRequests = {
  getRequest(location, callBack) {
    fetch(location)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        callBack(data);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};

export default apiRequests;
