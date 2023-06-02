import { getActiveTabURL } from "./utils.js";

document.addEventListener("DOMContentLoaded", async () => {
  const activeTab = await getActiveTabURL();
  const container = document.getElementsByClassName("container")[0];

  if (activeTab.url.includes("meet.google.com")) {
    container.innerHTML =
      '<div class="title">Listening to the certain circumstances...</div>';
  } else {
    container.innerHTML =
      '<div class="title">This is not a Google Meet page!</div>';
  }
});
