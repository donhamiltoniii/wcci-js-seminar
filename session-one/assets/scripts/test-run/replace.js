const replaceShit = () => {
  setTimeout(() => {
    const userName = document.querySelector(".about__user-info h3");
    const newValue = userName.textContent.replace("{{userName}}", "Dondon");
    userName.textContent = newValue;
  }, 3000);
};

export default replaceShit;
