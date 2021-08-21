const num = document.querySelectorAll(".num");
const res = document.getElementById("res");
const res1 = document.querySelector("#res1");
const del = document.querySelector(".del");
const reset = document.querySelector(".reset");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const divide = document.getElementById("divide");
const multiple = document.getElementById("multiple");
const mat = document.getElementById("mat");
const equal = document.querySelector(".equal");

plus.addEventListener("click", (e) => {
  if (res.textContent === "") {
    return;
  }
  mat.textContent = "+";
});

minus.addEventListener("click", (e) => {
  if (res.textContent === "") {
    return;
  }
  mat.textContent = "-";
});

divide.addEventListener("click", (e) => {
  if (res.textContent === "") {
    return;
  }
  mat.textContent = "/";
});

multiple.addEventListener("click", (e) => {
  if (res.textContent === "") {
    return;
  }
  mat.textContent = "x";
});

num.forEach((e) => {
  e.addEventListener("click", () => {
    if (mat.textContent !== "") {
      res1.textContent += e.textContent;
    } else {
      res.textContent += e.textContent;
    }
  });
});

del.addEventListener("click", () => {
  if (res.textContent && mat.textContent === "") {
    const arr = res.textContent.split("");
    arr.pop();
    res.textContent = arr.join("");
  } else if (mat.textContent && res1.textContent === "") {
    mat.textContent = new String();
  } else if (res1.textContent) {
    const arr = res1.textContent.split("");
    arr.pop();
    res1.textContent = arr.join("");
  }
});

reset.addEventListener("click", () => {
  res.textContent = new String();
  mat.textContent = new String();
  res1.textContent = new String();
});
equal.addEventListener("click", () => {
  if (mat.textContent === "+") {
    res.textContent =
      parseFloat(res.textContent) + parseFloat(res1.textContent);
    mat.textContent = new String();
    res1.textContent = new String();
  } else if (mat.textContent === "-") {
    res.textContent =
      parseFloat(res.textContent) - parseFloat(res1.textContent);
    mat.textContent = new String();
    res1.textContent = new String();
  }
  if (mat.textContent === "x") {
    res.textContent =
      parseFloat(res.textContent) * parseFloat(res1.textContent);
    mat.textContent = new String();
    res1.textContent = new String();
  }
  if (mat.textContent === "/") {
    res.textContent =
      parseFloat(res.textContent) / parseFloat(res1.textContent);
    mat.textContent = new String();
    res1.textContent = new String();
  }
});
