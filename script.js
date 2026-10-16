
const openStoryButton = document.getElementById("openStory");
const welcomeScreen = document.getElementById("welcomeScreen");
const mainWebsite = document.getElementById("mainWebsite");

openStoryButton.addEventListener("click", function () {
  welcomeScreen.classList.add("hidden");
  mainWebsite.classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
