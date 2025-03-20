// 1. Kiểm tra số nguyên dương
function isPositiveInteger(n) {
    return Number.isInteger(n) && n > 0;
}
console.log(isPositiveInteger(5)); // true
console.log(isPositiveInteger(-3)); // false

// 2. Kiểm tra số nguyên âm
function isNegativeInteger(n) {
    return Number.isInteger(n) && n < 0;
}
console.log(isNegativeInteger(-4)); // true
console.log(isNegativeInteger(3)); // false

// 3. Tính tổng hai số
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 7)); // 10

// 4. Giải phương trình bậc 1: ax + b = 0
function solveLinearEquation(a, b) {
    if (a === 0) {
        return b === 0 ? "Vô số nghiệm" : "Vô nghiệm";
    }
    return -b / a;
}
console.log(solveLinearEquation(2, -4)); // 2

// 5. Kiểm tra số nguyên tố
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // true
console.log(isPrime(8)); // false

// 6. Kiểm tra số chính phương
function isPerfectSquare(n) {
    return Number.isInteger(Math.sqrt(n));
}
console.log(isPerfectSquare(9)); // true
console.log(isPerfectSquare(10)); // false

// 7. Kiểm tra số chẵn lẻ
function isEven(n) {
    return n % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false

// 8. Kiểm tra số lớn hơn 10 bằng if-else
function checkGreaterThan10(n) {
    if (n > 10) {
        return "Số lớn hơn 10";
    } else {
        return "Số không lớn hơn 10";
    }
}
console.log(checkGreaterThan10(15)); // "Số lớn hơn 10"
console.log(checkGreaterThan10(8)); // "Số không lớn hơn 10"

// 9. Hiển thị ngày trong tuần bằng switch-case
function getDayOfWeek(n) {
    switch (n) {
        case 1: return "Chủ Nhật";
        case 2: return "Thứ Hai";
        case 3: return "Thứ Ba";
        case 4: return "Thứ Tư";
        case 5: return "Thứ Năm";
        case 6: return "Thứ Sáu";
        case 7: return "Thứ Bảy";
        default: return "Số không hợp lệ";
    }
}
console.log(getDayOfWeek(3)); // "Thứ Ba"
console.log(getDayOfWeek(8)); // "Số không hợp lệ"
