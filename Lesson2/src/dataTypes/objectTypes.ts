// Array
const arr: Array<Number> = [1, 2, 3, 4];

const arrNum: number[] = [1, 2, 3];

const arr2: Array<Array<Number>> = [
  [1, 2, 3],
  [4, 5, 6],
];

// Tuple
const tuple: [string, string, number] = ["DatBe", "Ha Noi", 20];

// Enum
enum ROLE {
  ADMIN,
  USER,
}

const role = ROLE.ADMIN;
console.log(role); // 0

const role2 = ROLE.USER;
console.log(role2); // 1

enum STATUS_CODE {
  SUCCESS = 200,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}
const statusCode = STATUS_CODE.SUCCESS;
