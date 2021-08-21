const toggle = document.querySelector(".tog");
const ball = document.querySelector(".red");

let c = 1;

toggle.addEventListener("click", () => {
  if (c === 1) {
    ball.style.transform = "translateX(10px)";
    c++;

    document.querySelectorAll(".key").forEach((e) => {
      e.style.backgroundColor = "hsl(45, 7%, 89%)";
      e.style.borderBottomColor = "hsl(35, 11%, 61%)";
      e.style.color = "hsl(60, 10%, 19%)";
    });

    document.querySelector(".head").style.color = "hsl(60, 10%, 19%)";

    document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
    document.querySelector(".keypads").style.backgroundColor =
      "hsl(0, 5%, 81%)";
    document.querySelector(".tog").style.backgroundColor = "hsl(0, 5%, 81%)";
    document.querySelector(".result").style.backgroundColor = "hsl(0, 0%, 93%)";
    document.querySelector(".del").style.backgroundColor = "hsl(185, 42%, 37%)";
    document.querySelector(".del").style.borderBottomColor =
      "hsl(185, 58%, 25%)";
    document.querySelector(".del").style.color = "#fff";
    document.querySelector(".reset").style.backgroundColor =
      "hsl(185, 42%, 37%)";
    document.querySelector(".reset").style.color = "#fff";
    document.querySelector(".reset").style.borderBottomColor =
      "hsl(185, 58%, 25%)";
    document.querySelector(".equal").style.backgroundColor =
      "hsl(25, 98%, 40%)";
    document.querySelector(".equal").style.color = "#fff";
    document.querySelector(".equal").style.borderBottomColor =
      "hsl(25, 99%, 27%)";
    document.querySelector(".result").style.color = "hsl(60, 10%, 19%)";
    ball.style.backgroundColor = "hsl(25, 98%, 40%)";
  } else if (c === 2) {
    ball.style.transform = "translateX(20px)";
    c++;

    document.querySelectorAll(".key").forEach((e) => {
      e.style.backgroundColor = "hsl(268, 47%, 21%)";
      e.style.borderBottomColor = "hsl(290, 70%, 36%)";
      e.style.color = "hsl(52, 100%, 62%)";
    });
    document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
    document.querySelector(".keypads").style.backgroundColor =
      "hsl(268, 71%, 12%)";
    document.querySelector(".result").style.backgroundColor =
      "hsl(268, 71%, 12%)";
    document.querySelector(".result").style.color = "hsl(52, 100%, 62%)";
    document.querySelector(".tog").style.backgroundColor = "hsl(268, 71%, 12%)";
    document.querySelector(".head").style.color = "hsl(52, 100%, 62%)";
    document.querySelector(".del").style.backgroundColor = "hsl(281, 89%, 26%)";
    document.querySelector(".del").style.color = "#fff";
    document.querySelector(".del").style.borderBottomColor =
      "hsl(285, 91%, 52%)";
    document.querySelector(".reset").style.backgroundColor =
      "hsl(281, 89%, 26%)";
    document.querySelector(".reset").style.borderBottomColor =
      "hsl(285, 91%, 52%)";
    document.querySelector(".reset").style.color = "#fff";
    document.querySelector(".equal").style.backgroundColor =
      "hsl(176, 100%, 44%)";
    document.querySelector(".equal").style.borderBottomColor =
      "hsl(177, 92%, 70%)";
    document.querySelector(".equal").style.color = "hsl(198, 20%, 13%)";
    ("hsl(177, 92%, 70%)");
    document.querySelector(".red").style.backgroundColor =
      "hsl(176, 100%, 44%)";
  } else {
    ball.style.transform = "translateX(0px)";
    c = 1;

    document.querySelectorAll(".key").forEach((e) => {
      e.style = null;
      e.style = null;
      e.style = null;
    });
    document.body.style = null;
    document.querySelector(".keypads").style = null;
    document.querySelector(".result").style = null;
    document.querySelector(".tog").style = null;
    document.querySelector(".head").style = null;
    document.querySelector(".del").style = null;
    document.querySelector(".reset").style = null;
    document.querySelector(".equal").style = null;
    document.querySelector(".red").style = null;
  }
});
