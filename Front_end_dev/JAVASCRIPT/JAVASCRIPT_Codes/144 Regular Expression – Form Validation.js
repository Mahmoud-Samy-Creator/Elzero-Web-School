document.getElementById("register").onsubmit = function () {
    let phoneInput = document.getElementById("phone").value;
    let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/;

    return phoneRe.test(phoneInput);
};