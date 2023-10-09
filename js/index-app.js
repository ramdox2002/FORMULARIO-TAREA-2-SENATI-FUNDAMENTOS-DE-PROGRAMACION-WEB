document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const lastname = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;
    const hobby = document.querySelector("#hobby").value;

    localStorage.setItem("name", name);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("email", email);
    localStorage.setItem("hobby", hobby);

    window.location.href = "welcome.html";
  });
});
