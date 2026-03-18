let registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    let fullName = document.getElementById("fullName").value.trim();
    let userName = document.getElementById("userName").value.trim();
    let password = document.getElementById("password").value;
    let confirmPass = document.getElementById("confirm-password").value;

    if (!fullName || !userName || !password || !confirmPass) {
        alert("Các ô không được để trống");
        return;
    }
    if (username.length < 4) {
        alert("Tên đăng nhập phải có ít nhất 4 ký tự");
        return;
    }
    if (password.length < 6) {
        alert("Mật khẩu phải có ít nhất 6 ký tự");
        return;
    }
    if (password !== confirmPass) {
        alert("Mật khẩu không trùng");
        return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const isExist = users.some(user => user.userName === userName);
    if (isExist) {
        alert("Tên này đã có người sử dụng");
        return;
    }
    const newUser = {
        fullname: fullName,
        username: userName,
        password: password
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký thành công!");
    registerForm.reset(); 
});
