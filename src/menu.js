function userCheck() {
    username = document.getElementById('username').value
    password = document.getElementById('password').value
    if (username == 'staff123' && password == 'staff123') window.location = 'pageStaff.html'
    else if (username == 'student123' && password == 'student123')
        window.location = 'pageStudent.html'
    else window.alert('Login Failed')
}
