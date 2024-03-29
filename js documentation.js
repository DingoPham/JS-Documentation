/* Có thể tìm danh mục bài tập và danh mục phần bành cách nhấn tổ hợp Ctrl + F và gõ BT/Phần + số danh mục muốn xem */
/* !!! Sử dụng môi trưởng Console của trình duyệt Website hoặc node.js để làm môi trường chạy các ví dụ bên dưới !!! */

/*-------------------------------- Phần 1: BIẾN ---------------------------------*/
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

/*----------------------- BT 1.5 ---------------------------*/
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

/*----------------------- BT 1.6 ---------------------------*/

//Lưu ý khi sử dụng toán tử "So sánh"
// == và != là kiểu so sánh tương đối, JS sẽ tự động chuyển về cùng kiểu rồi so sánh giá trị
// === và !== là kiểu so sánh tuyệt đối, so sánh đúng kiểu và giá trị (Nhanh và chính xác hơn)
// Khi sử dụng toán tử === và !== sẽ dẩm bảo tính logic và hiệu suất tốt hơn

/*-------------------------------- Phần 2: MẢNG ---------------------------------*/
/*----------------------- BT 2.1 ---------------------------*/
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

// VII) Kiểm tra mảng với .some() và .every()

/* some(): Dùng để kiểm tra trong mảng có "ít nhất 1 phần tử" thoả mãn điều kiện hay không */
var numbers = [1, 3, 5, 7, 9]; // true: thoả mãn - false: không thoả mãn
var hasEvenNumber = number.some(function(number){ // Kiểm tra xem có phần tử nào 
    return number % 2 === 0;                      // chia hết cho 2 hay không
});
console.log(hasEvenNumber); // false

/* every(): Dùng để kiểm tra "tất cả các phần tử" trong mảng có thoả mãn điều kiện hay không*/
var number = [2, 4, 6, 8, 10]; // true: thoả mãn - false: không thoả mãn
var allAreEven = number.every(function(number){   // Kiểm tra xem tất cả phần tử
    return number % 2 === 0;                      // có chia hết cho 2 không
});
console.log(allAreEven); // true

/*-------------------------------- Phần 3: ĐỐI TƯỢNG ---------------------------------*/
/* Giới thiệu: Khai báo đối tượng và truy cập, thao tác với các thuộc tính trong đối tượng */

// Cho một đối tượng mẫu:
var person = {
    fullName: "Nguyễn Văn A",
    age: 20
};

// Truy cập thuộc tính 
console.log(person.fullName);    // Lấy trực tiếp giá trị
console.log(person["fullName"]); // Lấy theo tên giá trị

// Thêm thuộc tính mới
person.gender = "Nam";

// Sửa đổi giá trị thuộc tính
person.age = 25;

// Xoá thuộc tính
delete person.gender;

// Kiểm tra sự tồn tại của thuộc tính 
console.log("gender" in person); // nếu tồn tại: True - nếu không: False

// Duyệt qua các thuộc tính
for (var key in person){
    console.log(key + ": " + person[key]);
}

/*----------------------- BT 3.1 ---------------------------*/
/* Constructors và Prototypes*/

function Customor(firstName, lastName, age){ // Sử dụng Constructor function để tạo đối tượng 
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Customor.prototype.getFullName = function(){ // Thêm phương thức vào vào prototype
    return this.firstName + "" + this.lastName;
};

var person = new Customor("Nguyễn", "A", 30); // Tạo đối tượng từ Constructor

console.log(person.getFullName()); 

/* Object Methods */

var customer = {
    firstName: "A",
    lastName: "Nguyễn",
    age: 30
};

var keys = Object.keys(customer); // "Object.keys()" sẽ lấy tất cả các tên của đối tượng  
console.log("Keys:", keys);  // ["FirstName", "LastName", "Age"]

var values = Object.values(customer); // "Object.values()" sẽ lấy mảng chứa tất cả các giá trị của đối tượng 
console.log("Values:", values); // ["A", "Nguyễn", 30]

var entries = Object.entries(customer); // "Object.entries()" sẽ lấy mảng chứa các cặp key-value của đối tượng (Tổng hợp của 2 yếu tố trên)
console.log("Entries:", entries); // [["FirstName", "A"], ["LastName", "Nguyễn"], ["Age", 30]]

/* JSON (JavaScript Object Notation) */
// KN: JSON (JavaScript Object Notation) là một định dạng truyền tải dữ liệu giữa máy chủ và trình duyệt web, hay giữa các hệ thống khác nhau. VD ở dưới:

person = {                                   /* Các quy tắc về đối tượng JSON */
    "FullName" : "Nguyễn Mạnh",                 // 1) Kiểu Dữ liệu "Key-Value Pairs" (Cặp Key-Value)
    "Age" : 30,                                 // 2) Key Phải là Chuỗi (String) và đặt trong dấu ngoặc kép
    "IsStudent" : false,                        // 3) Giá trị có thể là số, chuỗi, Boolean, mảng, đối tượng hoặc `null`
    "DateOfBirth" : "2002-11-01",               // 4) Dấu ngoặc kéo mở và đóng: bắt đầu bằng `{` và kết thúc bằng `}`
    "Courses" : ["Math", "History"],            // 5) Phân cách giữa các cặp key-value bằng dấu phẩy `,`
    "Address" : {                               // 6) Mảng và đối tượng đều có thể chứa nhiều giá trị
        "city": "Hà Nội",                       // 7) Giá trị ngày tháng phải ở dạng chuỗi
        "zipcode": "10001"                      // 8) Value không thể là undefined hoặc chứa phương thức
    }
}

/* Làm việc với JS và JSON */

// Cho VD1: Tạo đối tượng JSON
var customer = {
    firstName: "A",
    lastName: "Nguyễn",
    age: 30
};
                                // Kết quả:
console.log("Đối tượng JS:");   // Đối tượng JS:
console.log(customer);          // { firstName: 'A', lastName: 'Nguyễn', age: 30 }

// Cho VD2: Chuyển đổi đối tượng JS thành chuỗi JSON với stringify
var jsonString = JSON.stringify(customer, null, 2);
                                // Kết quả:
console.log("\nChuỗi JSON:");   // Chuỗi JSON:
console.log(jsonString);        // {
//                                   "firstName": "A",
//                                   "lastName": "Nguyễn",
//                                   "age": 30
//                                 }

// Cho VD3: Chuyển chuỗi JSON thành thành đối tượng JS với parse
var parsedCustomer = JSON.parse(jsonString);
                                // Kết quả:
console.log("\nĐối tượng JS:"); // Đối tượng JS:
console.log(parsedCustomer);    // { firstName: 'A', lastName: 'Nguyễn', age: 30 }

/*-------------------------------- Phần 4: ĐIỀU KIÊN & VÒNG LẶP ---------------------------------*/
/*----------------------- BT 4.1 ---------------------------*/
// 1) Câu lệnh điều kiện, Cho VD:

let age = 18;
if (age >= 18){
    console.log("Bạn đã đủ và trên 18 tuổi");
}
else{
    console.log("Bạn chưa đủ 18 tuổi");
} // Sử dụng ` if `, ` else ` để kiểm tra điều kiện 

// 2) Sử dụng toán tử 3 ngôi ` ?: ` cho các điều kiện đơn giản, cho VD:

let date = new Date('2021-05-03'); // yyyy-mm-dd
let dateValue = date.getDate();
const dateString = date < 10? ` 0${dateValue} ` : dateValue;
console.log("dateString: ", dateString);  // ===> dateString: 03

/*----------------------- BT 4.2 ---------------------------*/
// Vòng lặp
// 1) ` for `, ` forEach `, ` for..in `, `for..of`, ` while `, ` do..while ` 
/* (Dùng để lặp qua các đoạn mã một cách lặp đi lặp lại) */

for (let i = 0; i < 5; i++){
    console.log(i);
} // sẽ tạo vòng lặp cho đến khi chạy đủ những số nhỏ hơn 5 (bắt đầu từ 0)

let j = 0;
while (j < 5){
    console.log(j);
    j++;
} // Kết quả tương tự ví dụ trên

// 2) Sử dụng ` break ` và ` continue ` để kiểm soát vòng lặp

const customer = {
    customerID: "ABC01",
    customerName: "Nguyễn Văn A",
    DateOfBirth: "1999-04-29" 
}
for (const prop in customer){
    if (prop === "DateOfBirth"
        && customer[prop] != null
        && customer[prop] != undefined){
            const dob = new Date(customer[prop])
            console.log("Ngày sinh: ", dob); // Ngày sinh:  1999-04-29T00:00:00.000Z
            break;
        }
    else{
        continue;
    }
} 

/*-------------------------------- Phần 5: HÀM ---------------------------------*/
/*----------------------- BT 5.1 ---------------------------*/
// KN: Định nghĩa hàm bằng cách sử dụng function và truyền tham số. Sử dụng return để trả về giá trị từ hàm 
// 1) Regular function: hàm cơ bản, gọi thông qua tên hàm, có thể nhận đối số và trả về kết quả.

function greet(name){
    return "Hello, " + name + "!"; 
}
let message = greet("Mạnh");
console.log(message);

// 2) Arrow function: : Không có “this” riêng biệt và thường sử dụng cho các hàm ngắn gọn.

function sumFunction(a, b){ // Tính tổng của regular function
    return a + b;
};

const sumShort = (a, b) => a + b; // Tính tổng của arrow function

console.log(sumFunction(5, 3)); // KQ = 8
console.log(sumShort(5, 3)); //KQ = 8
/*----------------------- BT 5.2 ---------------------------*/
// KN Hàm Callback: là một hàm được truyền và được gọi lại thực thi trong một hàm khác và thường sử dụng trong xử lý bất đồng bộ
function fetchData(callback){ // Hàm fetchData() mô phỏng việc lấy dữ liệu từ server sau một khoảng thời gian 
    fetch('/api/v1/customer')
    .then(data=>data.json())
    .then(data=>{
        callback(data);
    })
    .catch(error=>{
        console.error(error);
    });
}

// Hàm callback được truyền vào fetchData
function displayData(data){
    console.log(data);
}

// Gọi hàm fetchData với hàm callback bằng displayData
fetchData(displayData);

/*----------------------- BT 5.3 ---------------------------*/
// Hàm Reccursive Function & Generator Function
// 1) Reccursive Function(Hàm đệ quy): Gọi chính nó để giải quyết vấn đề. Cần có điểm dừng để tránh vòng lặp vô hạn.
// Lưu ý: cần có điểm dừng để tránh bị lặp vô hạn

function factoria(n){
    if (n === 0 || n === 1){ // Trường hợp cơ bản n = 0 hoặc n = 1
        return 1;
    }
    else { // Trường hợp đệ quy
        return n * factoria(n - 1);
    }
}

console.log(factoria(5)); // KQ = 120

// 2) Generator Function(hàm tạo): : sử dụng để tạo ra một chuỗi giá trị qua thời gian, có khả năng tạm dừng và tiếp tục thực thi
// Lưu ý: Giúp tối ưu hoá việc sử dụng bộ nhớ và có thể giúp xử lý các tác vụ liên quan đến lượng dữ liệu lớn một cách hiệu quả hơn.

// Generator function để tạo ra chuỗi số nguyên chẵn
function* evenNumberGenerator(max){
    let num = 0;
    while (num <= max){
        yield num;
        num += 2;
    }
}

// Tạo một instance của generator
const evenNumGen = evenNumberGenerator(10);

// Lấy giá trị từ generator
console.log(evenNumGen.next().value); // 0
console.log(evenNumGen.next().value); // 2
console.log(evenNumGen.next().value); // 4
console.log(evenNumGen.next().value); // 6
console.log(evenNumGen.next().value); // 8
console.log(evenNumGen.next().value)  // 10

/*----------------------- BT 5.4 ---------------------------*/
// Hàm Constructor Function: hàm đặc biệt để tạo đối tượng. Thường gọi bằng “new”

// ví dụ Contructor fuction cho đối tượng Person
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayHello = function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I work as a ${this.job}`);
    };
}

// Thêm các instance mới cho các giá trị của Person
let person1 = new Person("John", 30, "Developer");
let person2 = new Person("Marry", 25, "Desinger");

// Gọi phương thức sayHello từ instance 
person1.sayHello();
person2.sayHello();

/*----------------------- BT 5.5 ---------------------------*/
// Hàm IIFE (Immediately Invoked function Expression): Là hàm được gọi ngay lập tức khi định nghĩa, thường sử dụng để tạo phạm vi cục bộ
// Lưu ý: IIFE là một cách tiện lợi để tạo ra một phạm vi cục bộ ngay lập tức mà không làm ảnh hưởng đến phạm vi toàn cục và tránh xung đột biến toàn cục. Điều này giúp tăng tính bảo mật và đảm bảo tính độc lập của mã JavaScript.
(function(){ // Hàm IIFE
    const sidebarExpandButton = document.querySelector("#sidebar");
    sidebarExpandButton.addEventListener("click", ()=>{
        document.querySelector("#sidebarFull").style.visibility = "visible"; // Hiển thị Sidebar mở rộng
    })
})()

// Biến sidebarExpandButton được khai báo trong IIEF nên không thể truy cập bên ngoài 
console.log(sidebarExpandButton); // ->> Lỗi Uncaught ReferenceError: sidebarExpandButton is not defined

/*-------------------------------- Phần 6: LÀM VIỆC VỚI DOM ---------------------------------*/
//Lưu ý: Trong phần này rất cần đến cả phần code của HTML lên hầu hết các dòng code JS lên được chạy thử ở bên HTML
/*----------------------- BT 6.1 ---------------------------*/
// DOM Manipulation (xử lý DOM): là quá trình thay đổi cấu trúc, nội dung hoặc kiểu dáng của các phần tử trên trang web bằng cách sử dụng JavaScript
// Để hiểu rõ hơn ví dụ hãy truy cập phần TEST.html 

//  Thêm một phần tử vào danh sách
let newListElement = document.createElement("li");
let newListText = document.createTextNode("Item4");
newListElement.appendChild(newListText);

let list = document.querySelector("#myList ul");
list.appendChild(newListElement);

/*----------------------- BT 6.2 ---------------------------*/
// Lấy phần tử trong DOM 
// 1) getElementById 
let elementById = document.getElementById('myId');
// 2) getElementByClassName
let elementByClass = document.getElementsByClassName('myClass');
// 3) getElementByTagName 
let elementByTag = document.getElementsByTag('div');
// 4) getElementByName 
let elementByName = document.getElementsByName('myName');
// 5) querySelector
let elementEl = document.querySelector('#myElementId');
// 6) querySelectorAll 
let elementEls = document.querySelectorAll('.myClassName');

/*----------------------- BT 6.3 ---------------------------*/
// DOM - Traversings: Traversing là việc di chuyển qua các phần tử hoặc các thành phần trong cây DOM. Cụ thể, đó là việc đi lên, đi xuống hoặc đi ngang qua các Node (nodes) trong cây DOM để truy cập, thay đổi hoặc tương tác với chúng.
// 1) parentNode và parentElement
// 2) childNodes hoặc children
// 3) firstChild và lastChild
// 4) nextSibling và previousSibling
// 5) nextElementSibling và previousElementSibling
// 6) querySelector và querySelectorAll (kết hợp với CSS selectors)

/*----------------------- BT 6.4 ---------------------------*/
// Traversings – parentNode & parentElement

// parentNode: là một thuộc tính của mọi Node trong cây DOM (bao gồm cả element và không phải là element).
//   + Nó trả về Node cha trực tiếp của Node đó
//   + Nếu Node đó là một element, parentNode sẽ trả về element cha của nó
//   + Nếu Node đó không phải là element, parentNode sẽ trả về Node cha không phải element(ví dụ, một Node văn bản nằm giữa các element).

// parentElement: là một thuộc tính chỉ có sẵn trên các phần tử (element) trong DOM
//   + Nó trả về phần tử cha trực tiếp của phần tử đó
//   + Nếu phần tử đó không có phần tử cha (ví dụ, nó là phần tử gốc), parentElement sẽ trả về null 
// VD: Lấy element cha
let parent = element.parentNode;
let parentEl = element.parentElement;

// Lưu ý: Sử dụng parentNode nếu bạn đang làm việc với Node và muốn truy cập phần tử cha, hoặc bạn có thể
// sử dụng parentElement nếu bạn chắc chắn rằng bạn đang làm việc với một phần tử và muốn truy cập
// phần tử cha của nó.

/*----------------------- BT 6.5 ---------------------------*/
// Traversings – childNode & childElement

// childNode:  trả về một NodeList chứa tất cả các Node con, bao gồm cả các Node văn bản, Node trống (thể hiện khoảng trắng giữa các thẻ), và các Node khác không phải là phần tử. 
//   + NodeList này bao gồm tất cả các Node con, không chỉ các phần tử con.

// childElement: n trả về một HTMLCollection chỉ chứa các phần tử con, bỏ qua các Node văn bản và các Node khác không phải là phần tử.
//   + HTMLCollection này chỉ chứa các phần tử con, không bao gồm các Node khác

let parentElement = document.getElementById("parent"); // Xem trực tiếp bên phần TEST.html

// NodeList bao gồm 5 nút: 3 phần tử, 1 nút văn bản, 1 comment node
let childNodes = parent.childNodes;
//HTMLCollection bao gồm 2 phần tử: 2 phần tử thẻ <p>
let children = parent.children;

// Lưu ý: Khi bạn chỉ quan tâm đến các phần tử con và muốn bỏ qua các Node văn bản và Node khác, children
//  thường được ưa chuộng hơn để giảm sự phức tạp và dễ sử dụng hơn trong nhiều trường hợp

/*----------------------- BT 6.6 ---------------------------*/
// Traversings – truy cập phần tử liền kề
// 1)  nextSibling và previousSibling 
//  + Trả về phần tử kế tiếp (nextSibling) hoặc phía trước (previousSibling) trong danh sách con của Zcùng một phần tử cha.
//  + Bao gồm cả các Node văn bản và Node trống (nodeType 3)
//  + Có thể chứa các Node không phải là phần tử

// 2) nextElementSibling và previousElementSibling
//  + Trả về phần tử kế tiếp (nextSibling) hoặc phía trước (previousSibling) trong danh sách con của cùng một phần tử cha
//  + Chỉ chứa các phần tử (nodeType 1), bỏ qua Node văn bản và các Node khác không phải là phần tử

let listItem2 = document.getElementById("item2");

// Sử dụng nextSibling để lấy nút kế tiếp (cả text node và element node)
let nextSibling = listItem2.nextSibling
console.log(nextSibling.textContent); // In ra khoảng trắng vì nó là text node

// Sử dụng nextElementSibling để lấy phần tử kế tiếp(chỉ element node)
let nextElementSibling = listItem2.nextElementSibling;
console.log(nextElementSibling.textContent); // In ra "Item3"
// Xem trực tiếp bên phần TEST.html

/*----------------------- BT 6.7 ---------------------------*/
// Traversings – querySelector & querySelectorAll
// 1) querySelector
//  + querySelector trả về phần tử đầu tiên phù hợp với selector được chỉ định
//  + Nếu không tìm thấy phần tử nào, nó trả về null
//  + ! Chỉ trả về một phần tử, dù có nhiều phần tử khớp với selector !
let element = document.querySelector(".myClass");

// 2) querySelectorAll 
//  + querySelectorAll trả về một NodeList chứa tất cả các phần tử phù hợp với selector được chỉ định
//  + Nếu không tìm thấy phần tử nào, nó trả về một NodeList trống.
//  + ! Trả về tất cả các phần tử khớp với selector, không chỉ là phần tử đầu tiên !
let elements = document.querySelectorAll(".myClass");

/*-------------------------------- Phần 7: SỰ KIỆN(EVENT) ---------------------------------*/
// KN về Event: 
//  - Là một hành động hoặc tình huống mà trình duyệt web hoặc môi trường thực thi JavaScript ghi nhận và thông báo cho mã JavaScript để xử lý
//  - Các sự kiện có thể xuất phát từ người dùng (nhấp chuột, nhấn phím, kéo thả) hoặc từ các hoạt động khác trên trang web (tải trang, thay đổi kích thước cửa sổ trình duyệt).

// Một số Event phổ biến: 
// 1) click, dblclick
// 2) keydown, keyup, keypress
// 3) mouseorver, mouserout
// 4) submit
// 5) load
// 6) change

// Lấy tham chiếu đến phần tử có id là myButton
var myButton = document.getElementById("myButton");

// Gán kết event click với một hàm xử lý
myButton.addEventListener("click", function(){
    // xử lý logic...
});

/*----------------------- BT 7.1 ---------------------------*/
// Event Propagation - Lan truyền sự kiện
//  Trong javascrip khi có các phần tử lồng nhau và xảy ra sự kiện, các sự kiện sẽ trải qua ba giai đoạn chính:
// 1) Capturing Phase (Giai đoạn nắm bắt):
//   - Sự kiện được bắt đầu từ phần tử gốc của cây DOM (thường là “document”) và di chuyển xuống tới phần tử target
//   - Nếu Element được đặt một xử lý sự kiện ở giai đoạn này (bằng cách sử dụng `addEventListener` với `{capture:true}`, nó sẽ được gọi đầu tiên
// 2) Target Phase (Giai đoạn mục tiêu): Sự kiện đến phần tử mục tiêu (element mà sự kiện đã xảy ra)
// 3) Buddling Phase (Giai đoạn nổi lên): Sự kiện bắt đầu từ phần tử mục tiêu và lan tỏa lên từ phần tử con đến phần tử cha, cho đến khi đến phần tử gốc (thường là `document`)

/*----------------------- BT 7.2 ---------------------------*/
// Event Delegation – Uỷ quyền sự kiện
//  Delegation (sự ủy quyền) tức là khi ta tạo 1 sự kiện cho phần tử cha, thì các phần tử con bên trong cũng nhận được event đó
// VD: Tạo sự kiện click cho document thì tất cả các phần tử con (div, button, table….) sẽ đều nhận được sự kiện click này ==
document.addEventListener("click", function(){ //                                                                            ||
    // Hiển thị tagName (số lần click) của element được click:                                                                              ||
    console.log(event.target.tagName);//  <==================================================================================                                                                                  
})  // Xem trực tiếp bên phần TEST.html

/*----------------------- BT 7.3 ---------------------------*/
// Event Object – các đối tượng sự kiện: trong JavaScript là một đối tượng chứa thông tin và thuộc tính liên quan đến sự kiện
//  đã xảy ra. Khi một sự kiện được kích hoạt, trình duyệt tạo một đối tượng sự kiện và truyền nó cho
//  hàm xử lý sự kiện được đăng ký

// Một số thuộc tính thông thường của Đối tượng sự kiện:
// + `event.type`: Trả về chuỗi biểu thị loại sự kiện (VD: “click”)
// + `event.target`: Chỉ đến phần sử mà sự kiện được kích hoạt
// + `event.clientX` và `event.clientY`: cung cấp toạ độ ngang và dọc của con trỏ chuột

var myButton = document.getElementById("myButton");
// Gán event click:
myButton.addEventListener("click", function (event){
    // Truy cập thông tin từ Event Object
    console.log("Loại sự kiện: ", event.type);
    console.log("Phần tử kích hoạt sự kiện: ", event.target);
    console.log("Toạ độ X, Y của con trỏ chuột: ", "X: ", event.clientX, "Y: ", event.clientY);
});

/*----------------------- BT 7.4 ---------------------------*/
// Cách kiểm soát các lắng nghe và xử lý sự kiện

/* Option 1: */
// addEventListener():
//  + Sử dụng để đăng ký lắng nghe một sự kiện trên một phần tử DOM cụ thể
//  + Có thể kiểm soát giai đoạn nắm bắt và nổi lên bằng cách sử dụng tuỳ chọn `{capture: true}` hoặc `{capture: false}` 
//    mặc định không thiết lập thì capture là false.
const button = document.getElementById("myButton");
// Lắng nghe event click ở giai đoạn nắm bắt (capture phase)
button.addEventListener("click", function(){
    console.log("Button Clicked!");
}, true);

// removeEventListener(): 
//  + Để huỷ bỏ lắng nghe sự kiện đã đăng ký
button.removeEventListener("click", clickHandler); // Huỷ bỏ lắng nghe Event
// Lưu ý: Khi đăng ký các sự kiện cần phải luôn đi kèm với việc hủy bỏ để tránh leak (rò rỉ bộ nhớ).

/* Option 2: */
// once option(): : sử dụng tùy chọn `{once: true}` khi đăng ký lắng nghe sự kiện để chỉ lắng nghe sự kiện một lần và tự động hủy bỏ sau khi xử lý.
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", function(){
    console.log("Button Clicked!");
},{once: true});

/*----------------------- BT 7.5 ---------------------------*/
// Cách kiểm soát các lắng nghe và xử lý sự kiện