// Do all of the stuff
const navList = document.querySelector(".main-header__nav-list");
const navButton = document.querySelector(".main-header__nav-button");

navButton.addEventListener("click", () => {
  navList.classList.toggle("hidden");
});

const photoEndpoint = "https://jsonplaceholder.typicode.com/photos/89";
const photoElement = document.querySelector(".about__avatar-container img");

const photoRequest = fetch(photoEndpoint);
photoRequest
  .then((response) => {
    const photoData = response.json();
    return photoData;
  })
  .then((photoData) => {
    photoElement.setAttribute("src", photoData.url);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Fetch complete!");
  });

const detailsTitle = document.querySelector(".details__title");
const detailsList = document.querySelector(".details__list");

detailsTitle.addEventListener("click", () => {
  detailsList.classList.toggle("hidden");
});

const userEndpoint = "https://jsonplaceholder.typicode.com/users/5";
const userName = document.querySelector(".about__user-info h3");
const userHometown = document.querySelector(".about__user-info h4");

fetch(userEndpoint)
  .then((res) => res.json())
  .then((user) => {
    const responseUserName = user.username;
    const responseHometown = user.address.city;

    userName.textContent = userName.textContent.replace(
      "{{userName}}",
      responseUserName
    );

    userHometown.textContent = userHometown.textContent.replace(
      "{{hometown}}",
      responseHometown
    );
  })
  .catch(console.error);
