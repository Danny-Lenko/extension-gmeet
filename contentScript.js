let party = [];

let organizerController = 0;

const targetNode = document.body;

const observerConfig = {
  childList: true,
  subtree: true,
};

const observer = new MutationObserver((mutationsList) => {
  const comeMessage = document.querySelector('[jsname="Ota2jd"]');
  const goMessage = document.getElementsByClassName("VfPpkd-gIZMF")[0];

  if (comeMessage) {
    getParty();
    console.log("came:", party);
  }

  if (goMessage) {
    getParty();
    console.log("went:", party);
  }
});

(() => {
  console.log("we are at work");
  observer.observe(targetNode, observerConfig);
})();

const getParty = () => {
  party = [...document.getElementsByClassName("dkjMxf")];
  const organizer = document.querySelector('[jsname="JS8eVc"]');
  if (organizer) {
    party.push("organizer");
  } else {
    party.filter((player) => player !== "organizer");
  }
};

// =================================================================== more optimized listener

//   for (const mutation of mutationsList) {
//  if (
//    mutation.addedNodes.length &&
//    mutation.addedNodes[0].classList &&
//    [...mutation.addedNodes[0].classList].length &&
//    [...mutation.addedNodes[0].classList].includes("dkjMxf")
//  ) {
//    getParty();
//    console.log(party);
//  }
//  if (
//    mutation.removedNodes.length &&
//    mutation.removedNodes[0].classList &&
//    [...mutation.removedNodes[0].classList].length &&
//    [...mutation.removedNodes[0].classList].includes("dkjMxf")
//  ) {
//    getParty();
//    console.log(party);
//  }

//  if (
//    mutation.removedNodes.length &&
//    mutation.removedNodes[0].classList &&
//    [...mutation.removedNodes[0].classList].length &&
//    [...mutation.removedNodes[0].classList].includes("VfPpkd-gIZMF")
//  ) {
//    getParty();
//    console.log(party);
//  }
//   }
