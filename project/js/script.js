"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const libraries = {
    library: [
      "React JS",
      "Angular JS",
      "Aurelia JS",
      "Vue JS",
      "Node JS",
      "Ext JS",
      "Bindows",
      "CrossUl",
      "Webix",
      "DHX",
      "RedUL",
    ],
  };

  const libraryList = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector("form.add"),
    addInput = addForm.querySelector(".adding__input"),
    checkbox = addForm.querySelector('[type="checkbox"]');

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newlibrary = addInput.value;
    const favorite = checkbox.checked;

    if (newlibrary) {
      if (newlibrary.length > 11) {
        newlibrary = `${newlibrary.substring(0, 10)}...`;
      }
      if (favorite) {
        console.log("Добавляем углубленное изучение");
      }

      libraries.library.push(newlibrary);
      sortArr(libraries.library);
      createlibraryList(libraries.library, libraryList);
    }
    event.target.reset();
  });

  const sortArr = (arr) => {
    arr.sort();
  };

  function createlibraryList(libraries, parent) {
    parent.innerHTML = "";
    sortArr(libraries);
    libraries.forEach((library, i) => {
      parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${library}
             <div class="delete"></div>
        </li>
        `;
    });
    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        libraries.library.splice(i, 1);
        createlibraryList(libraries, parent);
      });
    });
  }

  createlibraryList(libraries.library, libraryList);

  var b = document.body || document.getElementsByTagName("body")[0];
  b.insertAdjacentHTML(
    "beforeend",
    '<button on click="topFunction()" id="toTop" title="Go to top">Вверх</button>'
  );
  document
    .getElementById("toTop")
    .setAttribute(
      "style",
      "display: none; position: fixed; bottom: 18px; right: 18px; z-index: 1000; border: none; outline: none; background: none; cursor: pointer;"
    );

  document.documentElement.setAttribute("style", "scroll-behavior: smooth;");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    let t = document.getElementById("toTop");
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      t.style.display = "block";
    } else {
      t.style.display = "none";
    }
  }

  function topFunction() {
    document.documentElement.scrollTop = 0;
  }
});
