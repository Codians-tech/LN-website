// Coded by Raman Choudhary

const $signUpBtn = document.getElementById("sign-up-button")
const $cancelBtn = document.getElementById("cancel-btn")
const $formEle = document.getElementById("sign-up-form")
const $formSubmitBtn = document.getElementById("form-submit-button")




$signUpBtn.addEventListener("click", () => {
  $formEle.classList.remove("hidden")
  document.body.style.overflow = "hidden"
})

$cancelBtn.addEventListener("click", () => {
  $formEle.classList.add("hidden")
  document.body.style.overflow = "inherit"
})

$formSubmitBtn.addEventListener("click", async () => {
  const $name = document.getElementById("user-name")
  const $phone = document.getElementById("user-phone")
  const $gender = document.querySelector('input[name="gender"]:checked')

  if (
    !$phone
    || !$name
    || $gender
  ) {
    // show error
  }

  const payload = {
    name: $name.value,
    phone: $phone.value,
    gender: $gender && $gender.value || "N/A"
  }

  const res = await fetch("https://api.blindly.in/web/interest", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  const json = await res.json()
  console.log(json);
  // reset form
  $name.value = ""
  $phone.value = ""
  $name.value = ""
  $formEle.classList.add("hidden")
  document.body.style.overflow = "inherit"

  console.log(payload);
})
