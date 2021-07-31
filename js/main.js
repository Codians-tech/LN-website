// Coded by Raman Choudhary

const $signUpBtn = document.getElementById("sign-up-button")
const $cancelBtn = document.getElementById("cancel-btn")
const $formEle = document.getElementById("sign-up-form")
const $formSubmitBtn = document.getElementById("form-submit-button")

// Mobile menu
const $mobileMenu = document.querySelector(".mobile-menu")
const $navbar = document.querySelector("header nav")
let isMobileMenuOpen = false

$signUpBtn.addEventListener("click", () => {
  $formEle.classList.remove("hidden")
  document.body.style.overflow = "hidden"
})

$mobileMenu.addEventListener("click", () => {
  if (isMobileMenuOpen) {
    $navbar.classList.remove("open")
    $mobileMenu.classList.remove("open")
  } else {
    $navbar.classList.add("open")
    $mobileMenu.classList.add("open")
  }
  isMobileMenuOpen = !isMobileMenuOpen
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

const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

const componentDidMount = async () => {
  const data = {};
  for (var i in navigator) data[i] = navigator[i];
  if(location.search) {
    const refArr = location.search.split('?q=ref=')
    if(refArr.length > 1) {
      const payload = {
        platform: navigator.platform,
        deviceType: getDeviceType(),
        inviteCode: refArr[1],
        data
      }
      fetch("https://api.blindly.in/api/referrals", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      window.location.replace("https://play.google.com/store/apps/details?id=in.blindly.app");
    }
  }
  
}