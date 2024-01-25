const contactDetails = () => {
  let styles = "font-weight: bold;";
  console.group(
    `%c👨‍💻 Hi! I am Abhishek Adhikari and thanks for checking out this project!`,
    styles
  );
  console.log(`%c📂 Github    : https://github.com/sith-lord-vader/`, styles);
  console.log(
    `%c📄 LinkedIn  : https://www.linkedin.com/in/abhiayush23/`,
    styles
  );
  console.log(`%c🌐 LinkedIn  : https://www.lordvader.me/`, styles);
  console.log(`%c📷 Instagram : https://www.instagram.com/xpertr2/`, styles);
  console.log(`%c✉️ Email     : abhiayush23@gmail.com`, styles);
  console.groupEnd();
};

let [lastX, lastY] = ["-1", "-1"];
let [lastPosX, lastPosY] = [0, 0];

let pointers = {};
pointers["-1"] = {};
pointers["-1"]["-1"] = "top-left";
pointers["-1"]["1"] = "bottom-left";
pointers["1"] = {};
pointers["1"]["-1"] = "top-right";
pointers["1"]["1"] = "bottom-right";

document.body.addEventListener("mousemove", (e) => {
  let [currentPosX, currentPosY] = [e.clientX, e.clientY];

  let toRemove = [lastX, lastY];
  if (Math.abs(currentPosX - lastPosX) > 10) {
    let currentX = currentPosX - lastPosX > 0 ? "1" : "-1";
    if (currentX !== lastX) {
      lastX = currentX;
    }
    lastPosX = currentPosX;
  }
  if (Math.abs(currentPosY - lastPosY) > 10) {
    let currentY = currentPosY - lastPosY > 5 ? "1" : "-1";
    if (currentY !== lastY) {
      lastY = currentY;
    }
    lastPosY = currentPosY;
  }
  document.body.classList.remove(pointers[toRemove[0]][toRemove[1]]);
  document.body.classList.add(pointers[lastX][lastY]);
});

contactDetails();
