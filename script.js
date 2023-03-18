"use strict";

// task #1

fetch("https://reqres.in/api/unknown", {
  method: "get",
})
  .then(function (mosuliinfo) {
    if (mosuliinfo.status !== 200) {
      throw "error msg";
    }
    return mosuliinfo.json();
  })
  .then(function (mosuliinfoJS) {
    console.log(mosuliinfoJS);
    mosuliinfoJS.data.forEach((element1) => {
      let li1 = document.createElement("li");
      li1.textContent = `${element1.name} ${element1.color}`;
      li1.classList.add("li1");
      document.querySelector(".ul1").appendChild(li1);
    });
  })
  .catch(function (error) {
    // if (error == 404) {
    let p = document.createElement("p");
    p.textContent = "Error";
    p.classList.add("P2");
    document.querySelector(".ul1").appendChild(p);
    // }
  });

//  // task #2

function getinfo() {
  let request = new XMLHttpRequest();
  request.addEventListener("load", function () {
    let response = this.responseText;
    let responseData = JSON.parse(response);

    responseData.data.forEach((element) => {
      let li = document.createElement("li");
      li.textContent = `${element.first_name} ${element.last_name}`;
      li.style.marginBottom = "10px";
      document.querySelector(".ul").appendChild(li);

      let img = document.createElement("img");
      img.setAttribute("src", `${element.avatar}`);
      li.appendChild(img);
      img.style.marginLeft = "20px";
      console.log(responseData);
    });
    request.addEventListener("error", function () {
      let p = document.createElement("p");
      p.textContent = "Not founded";
      p.classList.add("pClass");
      document.querySelector(".ul").appendChild(p);
    });
  });

  request.open("get", "https://reqres.in/api/users?page=2");
  request.send();
}

getinfo();

// task #3

let currentPage = 1;
function getinfo1(page) {
  fetch("https://reqres.in/api/users?page=" + page, {
    method: "get",
  })
    .then(function (mosuli) {
      // console.log(mosuli);
      return mosuli.json();
    })
    .then(function (mosuliJS) {
      console.log(mosuliJS);
      const Fragment = document.createDocumentFragment();
      mosuliJS.data.forEach((element2) => {
        let li2 = document.createElement("li");
        li2.textContent = `${element2.first_name} ${element2.last_name}`;
        li2.classList.add("li2");
        Fragment.appendChild(li2);
      });

      document.querySelector(".ul3").innerHTML = " ";
      document.querySelector(".ul3").appendChild(Fragment);
    })
    .catch(function (error1) {
      // if (error == 404) {
      // let p1 = document.createElement("p");
      // p1.textContent = "Error";
      // p1.classList.add("P2");
      // document.querySelector(".ul1").appendChild(p);
      // }
    });
}
let prev = document.querySelector(".prev");
let ul3 = document.querySelector(".ul3");
// prev.Disabled = true;
document.querySelector(".prev").addEventListener("click", function () {
  currentPage--;
  prev.addEventListener("click", function () {
    if (currentPage === 1) {
      prev.Disabled = true;
    }
  });
});

document.querySelector(".next").addEventListener("click", function () {
  currentPage++;
  getinfo1(currentPage);
});
getinfo1(currentPage);
