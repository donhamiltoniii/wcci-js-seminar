// import apiRequests from "./utils/api-requests";

// // Do all of the stuff
// const navList = document.querySelector(".main-header__nav-list");
// const navButton = document.querySelector(".main-header__nav-button");

// navButton.addEventListener("click", () => {
//   navList.classList.toggle("hidden");
// });

// const photoEndpoint = "https://jsonplaceholder.typicode.com/photos/89";
// const photoElement = document.querySelector(".about__avatar-container img");
// const photoCallBack = (photoData) => {
//   photoElement.setAttribute("src", photoData.url);
// };

// apiRequests.getRequest(photoEndpoint, photoCallBack);

// const detailsTitle = document.querySelector(".details__title");
// const detailsList = document.querySelector(".details__list");

// detailsTitle.addEventListener("click", () => {
//   detailsList.classList.toggle("hidden");
// });

// const userEndpoint = "https://jsonplaceholder.typicode.com/users/5";
// const userName = document.querySelector(".about__user-info h3");
// const userHometown = document.querySelector(".about__user-info h4");
// const userCallBack = (user) => {
//   const responseUserName = user.username;
//   const responseHometown = user.address.city;

//   userName.textContent = userName.textContent.replace(
//     "{{userName}}",
//     responseUserName
//   );

//   userHometown.textContent = userHometown.textContent.replace(
//     "{{hometown}}",
//     responseHometown
//   );
// };

// apiRequests.getRequest(userEndpoint, userCallBack);

// // Session Two
// const copyRight = document.querySelector(".main-footer small");
// const currentYear = new Date().getFullYear();
// copyRight.innerText = copyRight.innerText.replace(
//   "{{copyRightYear}}",
//   currentYear
// );
import Component from "./utils/component";

const App = new Component({
  selector: "#root",
  state: {
    message: "Hello from Component Class!",
  },
  template(data) {
    return `<h1>${data.message}</h1>`;
  },
});

export default App;
