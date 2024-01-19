const btnSignIn = document.getElementById ("sign-in"); /*boton iniciar sesion*/
      btnSignUp = document.getElementById ("sign-up"); /*boton registrarse*/
      formRegister = document.querySelector(".login");
      formLogin = document.querySelector(".register");
btnSignIn.addEventListener("click", e =>{
    formRegister.classList.add ("hide");
    formLogin.classList.remove ("hide");
})
btnSignUp.addEventListener("click", e =>{
    formLogin.classList.add ("hide");
    formRegister.classList.remove ("hide");
})