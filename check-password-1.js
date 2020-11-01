function CheckPassword(inputtxt) {
    var passw = /^[-+]?[0-9]{5,7}$/;
    if (inputtxt.value.match(passw)) {
        alert('YA')
        return true;
    }
    else {
        alert('TIDAK')
        return false;
    }
}