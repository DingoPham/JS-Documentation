/* Có thể tìm danh mục bài tập và danh mục phần bành cách nhấn tổ hợp Ctrl + F và gõ BT/Phần + số danh mục muốn xem */

/*--------------------------------Phần 1: Các biến---------------------------------*/
/*----------------------- BT 1.1 ---------------------------*/

// Khai báo các biến "var, let, const"
// Kiểu dữ liệu: "Number, String, Boolean, Object, Array, Null/Underfined"
// Lưu ý: lên đặt tên phù hợp với kiểu dữ liệu của nó 
// (ví dụ: var name = "Tên", var age = 11 ...)
// Ví dụ về biến var, let, const:

var/*let, const*/ num = 1; // Number(Kiểu số)

var/*let, const*/ mess = "Hello"; // String(Kiểu chữ)

var/*let, const*/ select = true; // Boolean(Kiểu true/false)

var/*let, const*/ customer = { // Object(Kiểu đóng gói)
    cusID: "001",              // (Sẽ sử dụng được các kiểu dữ liệu
    cusName: "Phạm Văn A",     // cơ bản như Number, String, Boolean)
    cusAge: 19                 // 
}                              // 

var/*let, const*/ arrayNumber = [ // Array(Kiểu chuỗi) 
    1, 3, 5, 7                    // (Sẽ sử dụng được các kiểu dữ liệu
];                                // cơ bản như Number, String, Boolean)

/*----------------------- BT 1.2 ---------------------------*/

// Cách để khai báo biến "var" "let" "const" với kiểu phạm vi hoạt động(Scope): Tuỳ thuộc vào vị trí kha báo
/* var trong trường hợp này sẽ có 2 kiểu phạm vi khai báo: */
//  var với phạm vi khai báo ở mức "funtion" (Chỉ khai báo được bên trong của function)
//  var với phạm vi khai báo ở mức "global" (Có thể khai báo ở bên ngoài của function)
// Dưới đây là ví dụ:
var example = 1; // => biến "example" có phạm vi global
function getNumber(){ 
    var number = 0; // => biến "number" có phạm vi chỉ nằm trong function có tên là getNumber()

    //dùng hàm console.log để hiển thị thông tin
    console.log(number); // => biến number có thể chạy bên trong funtion "getNumber()" 
    console.log(example); // => biến example có thể chạy bên trong funtion "getNumber()"
}
console.log(number); // => biến number "không" thể chạy bên ngoài funtion "getNumber()" 
console.log(example); // => biến number có thể chạy bên ngoài funtion "getNumber()" 

/* let và const có phạm vi khai báo ở trong cặp dấu {} (hay còn gọi là mức khối lệnh: "block") */

/*----------------------- BT 1.3 ---------------------------*/

/* Cách khai báo bằng biến "var" */
// Khai báo biến sử dụng var

function getNumber(){
    var number;
    console.log(number); //Underfined (không có giá trị)
    for (var i = 0; i < 10; i++){
        number = 1 // => được đặt giá trị
        console.log(number); // => in ra 1
    }
    console.log(number); // => in ra 1
}

// Ghi đè bằng biến var 

function getNumber(){
    var number = 2; // biến number khi đã được đặt giá trị = 2
    console.log(number); // in ra 2
    for (var i = 0; i < 10; i++){
        var number = 1 //Biến var có thể được khai báo nhiều lần / giá trị khai báo sau sẽ ghi đè giá trị khai báo trước và in ra kết quả = 1
        console.log(number); // in ra 1
    }
    console.log(number);
}

/* Cách khai báo bằng biến "let" */
// Khai báo biến sử dụng let

function getData(){
    var data = this._data;
    for (const item of data){
            let itemEl = document.createElement("tr"); // |  <========================|| 
            itemEl.textContent = item;                 // |  <========================||
    }                                                  //                             ||
}                                                      //                             ||
//                                                                                    ||
// Không thể khai báo lại cùng một biến bằng "let" trong cùng một block (ghi đè)      || 
// Trong cùng phạm vi thì biến khai báo bằng "let" có thể gán lại giá trị ==========> ||

/* Cách khai báo biến bằng "const" */

function getData(){
    if (data && data.leght > 0){
        const fullName = "Nguyễn Văn B";
        for (const item of data){
            let itemEl = document.createElement("tr");
            fullName = "Nguyễn Đỗ C" //  |  <=========================================|| Sai
        }                            //                                               ||
    }                                //                                               ||
    else{                            //                                               ||
        //...                                                                         ||
    }                                //                                               ||
}                                    //                                               ||
//                                                                                    ||
// Không thể khai báo lại cùng một biến bằng "const" trong cùng một block (ghi đè)    ||
// Biến khi khai báo bằng "const" sẽ không gán lại được giá trị ====================> ||
// Lưu ý: khi khai báo biến bằng "const" phải luôn gán giá trị cho nó 
//  ví dụ: const number = 1, const word = "abc"

/*----------------------- BT 1.4 ---------------------------*/
/* Những quy ước về việc sử dụng var, let, const */

// Cần xác định rõ phạm vi sử dụng của biến
// biến "let" và "const" kiểm soát giá trij của biến tốt hơn
// Luôn sử dụng "let" và "const" thay cho var vì biến "var" sẽ chỉ sử dụng được ở trong phạm vi của function 
//  còn biến "let" và "const" có thể sử dụng với phạm vi global và rộng hơn

/*-------------------------------- Phần 2: Toán tử ---------------------------------*/
/*----------------------- BT 2.1 ---------------------------*/
// Tên gọi và cách nhận biết về các toán tử: 

/* " + " - Toán tử cộng (Addition)
" - " - Toán tử trừ (Subtraction)
" * " - Toán tử nhân (Multiplication)
" / " - Toán tử chia (Division)
" > " - Toán tử lớn hơn (Greater than)
" < " - Toán tử nhỏ hơn (Less than)
" >= " - Toán tử lớn hơn hoặc bằng (Greater than or equal to)
" <= " - Toán tử nhỏ hơn hoặc bằng (Less than or equal to)
" === " - Toán tử so sánh bằng về giá trị và kiểu dữ liệu (Strict equality)
" !== " - Toán tử so sánh khác về giá trị hoặc kiểu dữ liệu (Strict inequality)
" && " - Toán tử logic AND (Logical AND)
" || " - Toán tử logic OR (Logical OR)
" ! " - Toán tử logic NOT (Logical NOT)
" & " - Toán tử AND bit (Bitwise AND)
" | " - Toán tử OR bit (Bitwise OR)
" ^ " - Toán tử XOR bit (Bitwise XOR)
" ~ " - Toán tử NOT bit (Bitwise NOT)
" >> " - Toán tử dịch bit sang phải (Bitwise right shift)
" << " - Toán tử dịch bit sang trái (Bitwise left shift) */


// Cho ví dụ về 2 giá trị số:
let x = 5;
let y = 6;

// 1) Toán tử "số học" bao gồm: +, -, *, /
let sum = x + y; //( +, -, *, / )

// 2) Toán tử "so sánh" bao gồm: >, <, >=, <=, ===, !==
let isGreater = x > y; //( >, <, >=, <=, ===, !== )

// 3) Toán tử "logic" bao gồm: &&, ||, !
let isTrue = x && y; //( &&, ||, ! )

// 4) Toán tử "bitwise" bao gồm:  &, |, ^, ~, >>, << 
// Lưu ý: Toán tử này sử dụng trong các trường hợp cần thực hiện các phép toán trên các bit của số nguyên như trong mã máy, mã hoá,....
let a = 5; // 101
let b = 3; // 011
let result = a & b; // 001 (1)

/*----------------------- BT 2.1 ---------------------------*/

//Lưu ý khi sử dụng toán tử "So sánh"
// == và != là kiểu so sánh tương đối, JS sẽ tự động chuyển về cùng kiểu rồi so sánh giá trị
// === và !== là kiểu so sánh tuyệt đối, so sánh đúng kiểu và giá trị (Nhanh và chính xác hơn)
// Khi sử dụng toán tử === và !== sẽ dẩm bảo tính logic và hiệu suất tốt hơn

/*----------------------- BT 2.2 ---------------------------*/
//  I)Cách tạo mảng
// 1) Tạo mảng bằng cách đặt giá trị trong dấu ngoặc vuông []

var emptyArray = []; // Đây là một mảng rỗng
var fruits = ["Apple", "Orange", "Banana"]; // Đây là mảng chứa các giá trị có kiểu dữ liệu là String
var total = ["Nguyễn Văn A", 19, true]; // Đây là mảng chứa các giá trị khác nhau có kiểu dữ liệu là String, Int, Boolean

// 2) Truy cập phần tử trong mảng theo Index

var firstFruits = fruits [0]; // Apple    | Sẽ truy cập bằng cách lấy tên của biến "fruits"
var secondFruits = fruits [1]; // Orange  | và chọn vị trí của giá trị (bắt đầu từ 0) để 
var thirdFruits = fruits [2]; // Banana   | chọn ra giá trị đó

// 3) Độ dài của mảng

var leght = fruits.length; // Được hiểu là nó sẽ lấy cả 3 giá trị trong Array có tên fruits

//  II) Xử lý mảng 
var fruits = ["Apple", "Orange", "Banana"]; 

fruits.push("Grapes"); // Thêm phần tử vào cuối mảng: ["Apple", "Orange", "Banana", "Grapes"]
fruits.pop(); // Xoá phần tử cuối mảng
fruits.unshift("Cherry"); // Thêm phần tử vào đầu mảng: ["Cherry", "Apple", "Orange", "Banana"]
fruits.shift(); // Xoá phần tử đầu mảng
fruits.splice(index, numberrecord); // Xoá phần tử ở vị trí được chọn: index = vị trí phần tử, numberRecord = số lượng phần tử muốn xoá tính từ vị trí index

//  III) Duyệt và sắp xếp mảng
/* Duyệt mảng */

var fruits = ["Apple", "Orange", "Banana"];

for (var i = 0; i < fruits.length; i++){ // Sử dụng vòng lặp for để duyệt mảng
    console.log(fruits[i]);
}

fruits.forEach(function (fruit){ // Sử dụng vòng lặp forEach để duyệt mảng
    console.log(fruit); 
});

/* Sắp xếp mảng */

var number = [3, 1, 5, 7, 9, 2, 4, 6, 8]

number.sort(function(a, b){ // Sắp xếp tăng dần
    return a - b;
});

number.sort(function(a, b){ // Sắp xếp giảm dần
    return b - a;
})

//  VI) Lọc và tạo mảng mới từ mảng hiện tại
/* lọc mảng */
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
var evenNumber = number.filter(function(number){
    return number % 2 === 0;
});

// kết quả đưa ra theo số chắn của evenNumber là: 2, 4, 6, 8, 10

/* tạo mảng mới từ mảng hiện tại */
var number = [1, 2, 3, 4, 5];

var squaredNumber = number.map(function(number){
    return number * number;
});

// kết quả đưa ra theo số bình phương của squaredNumber là: 1, 4, 9, 16, 25

//  V) Sử dụng .reduce() trong mảng
// Cho ví dụ một mảng có tên là products
var products = [
    { fullName: "Products 1", price: 1000, quantity: 1 },
    { fullName: "Products 2", price: 4500, quantity: 2 },
    { fullName: "Products 3", price: 2000, quantity: 3 }
];

/*----Tổng hợp giá trị của một thuộc tính trong các đối tượng mảng----*/

var total = products.reduce(function(acc, product){
    return acc + product.price;                      
}, 0)                                                // Ví dụ ở đây là về giá trị price
console.log(total);                                  // Khi cộng cả 3 giá trị price trong mảng sẽ có kết quả là: 6600

/*----Tổng hợp thông tin từ nhiều thuộc tính----*/

var summary = products.reduce(function(acc, product){
    acc.totalPrice += product.price * product.quantity;
    acc.totalQuantity += product.quantity;
    return acc;
}, {
    totalPrice: 0, totalQuantity: 0                  // Ví dụ ở đây là về giá trị price và quantity Trong ví dụ này giá trị của
});                                                  // totalPrice được tính bằng từng price * từng quantity = 25000
console.log(summary);                                // totalQuantity được tính bằng cách cộng từng quantity = 6

/* Tìm giá trị lớn nhất, nhỏ nhất */

var maxPrice = products.reduce(function(acc, product){
    return (product.price > acc.price) ? product : acc;
}, products[0]);                                     // Ví dụ dưới đây tìm và đưa ra giá trị lớn nhất về price trong chuỗi products
console.log(maxPrice)                                // Kết quả được đưa ra sẽ là {fullName: 'Products 2', price: 4500, quantity: 2}

// VI) Tìm kiếm trong mảng

/* indexOf */
var fruits = ["Apple", "Orange", "Banana"]; // Trả về index của bản ghi đầu tiên thoả
var index = fruits.indexOf("Banana");       // mãn điều kiện, nếu không có trả về -1
// index: 1

/* lastIndexOf */
var numbers = [1, 2, 3, 4, 2, 6];            // Trả về index của phần tử cuối cùng 
var lastIndexOf = numbers.lastIndexOf(2);    // thoả mãn điều kiện
// lastIndex: 4

/* find */ 
var numbers = [10, 20, 30, 40 ,50];
var foundNumber = numbers.find(function(number){ // Trả về phần tử đầu tiên thoả mãn điều kiện. 
    return number > 30;                          // Nếu không có trả về `undefined`
});
// foundNumber: 40

/* findIndex */
var numbers = [10, 20, 30, 40, 50];
var foundIndex = numbers.findIndex(function(number){ // Trả về index của phần tử đầu tiên trong
    return number > 30;                              // mảng thoả mãn điều kiện, nếu không có thì trả về -1
})
// foundIndex: 3

/* includes */
var fruits = ["Apple", "Orange", "Banana"];          // Kiểm tra một giá trị có tồn tại hay không.
var isOrangeInclude = fruits.includes("Orange");     // Có thì trả về true, không thì trả về false
// isBananaIncluded: true
