const email = document.querySelector(".submitEm");
const errorMsg1 = document.querySelector(".errorMsg1");
const errorMsg2 = document.querySelector(".errorMsg2");

function submitEmail(event) {
  if (email.value == "") {
    errorMsg1.classList.add("active");
  } else {
    errorMsg1.classList.remove("active");
    if (email.value.includes("@") && email.value.includes(".")) {
      errorMsg2.classList.remove("active");
    } else {
      errorMsg2.classList.add("active");
    }
  }
}
