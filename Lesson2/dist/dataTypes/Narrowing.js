// Union Type
function print1(a) {
    if (typeof a === "string") {
        return a.toUpperCase();
    }
    return a;
}
//Optional
function optionalFunc(sinhvien) {
    if (!!sinhvien) {
        return sinhvien.name;
    }
}
optionalFunc({});
function login(user) {
    if ("is_admin" in user && user.is_admin) {
        console.log("Welcome to admin");
    }
    else {
        console.log("Welcome Back");
    }
}
