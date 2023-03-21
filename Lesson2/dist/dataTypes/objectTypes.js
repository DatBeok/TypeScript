// Array
var arr = [1, 2, 3, 4];
var arrNum = [1, 2, 3];
var arr2 = [
    [1, 2, 3],
    [4, 5, 6],
];
// Tuple
var tuple = ["DatBe", "Ha Noi", 20];
// Enum
var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["USER"] = 1] = "USER";
})(ROLE || (ROLE = {}));
var role = ROLE.ADMIN;
console.log(role); // 0
var role2 = ROLE.USER;
console.log(role2); // 1
var STATUS_CODE;
(function (STATUS_CODE) {
    STATUS_CODE[STATUS_CODE["SUCCESS"] = 200] = "SUCCESS";
    STATUS_CODE[STATUS_CODE["NOT_FOUND"] = 404] = "NOT_FOUND";
    STATUS_CODE[STATUS_CODE["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(STATUS_CODE || (STATUS_CODE = {}));
var statusCode = STATUS_CODE.SUCCESS;
