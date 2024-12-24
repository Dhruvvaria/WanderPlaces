(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

document.querySelector(".left-btn").addEventListener("click", function () {
  document.querySelector(".filter-option").scrollBy({
    top: 0,
    left: -100,
    behavior: "smooth",
  });
});

document.querySelector(".right-btn").addEventListener("click", function () {
  document.querySelector(".filter-option").scrollBy({
    top: 0,
    left: 100,
    behavior: "smooth",
  });
});

let taxSwitch = document.getElementById("flexSwitchCheckDefault");

taxSwitch.addEventListener("click", () => {
  let taxInfo = document.getElementsByClassName("tax-ammount");
  for (info of taxInfo) {
    if (info.style.display != "inline") {
      info.style.display = "inline";
    } else {
      info.style.display = "none";
    }
  }
});
