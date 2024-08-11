//switch funtion begins
const switchTheme = () => {
  // Get root element and the data-theme value
  const rootElem = document.documentElement;
  //getting data-theme attribute
  let dataTheme = rootElem.getAttribute("data-theme"),
    newTheme;

  //newTheme contion is mean when it light turn to dark, if it isnt light turn to light
  newTheme = dataTheme === "light" ? "dark" : "light";

  //set the new HTML attiribute
  rootElem.setAttribute("data-theme", newTheme);

  //set local storage item to make default theme as device's light/dark mode
  localStorage.setItem("theme", newTheme);
  console.log("button clicked");
};

// Adding event listener for the theme swithcer
document
  .querySelector("#theme-switcher")
  .addEventListener("click", switchTheme);
