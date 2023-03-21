function showStringData(a) {
    return a;
}
function ShowNumberData(b) {
    return b;
}
// Generic
function showData(a) {
    return a;
}
showData(10);
// const numArr = [1, 2, 3, 5, 8, 13]; //Fibonacci
// const result = numArr.map((item) => {
//   return item * item;
// });
// const strArr = ["Faker", "0ner", "Zues"];
// // const resultStrArr = strArr.map(item =>{
// //     return item + "-T1"
// // })
// // console.log(resultStrArr);
// function T1_map<T>(arr: T[], callback: (item: T, index: number) => T): T[] {
//   let temp = [];
//   for (let i = 0; i < arr.length; i++) {
//     const newItem = callback(arr[i], i);
//     temp.push();
//   }
//   return temp;
// }
// const resultT1 = T1_map(strArr, (item, index) => {
//   return "T1 " + item;
// });
// console.log(resultT1);
// // Viết hàm soft sử dụng generics cho number và string
// var Numb = [2, 6, 7, 9, 1, 0, 10, 4, 3, 5, 8];
// var StrArr = ["Alex", "Zenk", "Consti", "Boen"];
// function Stt_map(arr, callback) {
//     var stt = [];
//     for (var a = 0; a < arr.length; a++) {
//         var newStt = callback(arr[a], a);
//         stt.push(newStt);
//     }
//     return stt;
// }
// ;
// var reSult = Stt_map(Numb, function (item, index) {
//     return item;
// });
// reSult.sort(function (firstStt, secondStt) {
//     if (secondStt > firstStt) {
//         return -1;
//     }
//     else {
//         return 0;
//     }
// });
// console.log(reSult);
