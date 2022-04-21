var password = document.querySelector(".password")
function whenchecked() {
    if (password.type == "password") {
      password.type = "text"
    }
    else (
      password.type = "password"
    )
  }