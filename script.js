const lock = document.querySelector(".lock-icon");
const password = document.querySelector(".password");

lock.addEventListener('click',() => {
    if(lock.classList.contains("bxs-lock")){
        lock.classList.remove("bsx-lock");
        lock.classList.add("bsx-lock-open");
        password.type="text";
    }
    else{
        lock.classList.add("bsx-lock");
        lock.classList.remove("bsx-lock-open");
        password.type="password";
    }
});