function parseCount(count){
    if(isNaN(Number.parseInt(count))){
        throw new SyntaxError("Невалидное значение");
    }else{
        return Number.parseInt(count);
    }
}

function validateCount(count){
    try {
        return parseCount(count);
    }catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        if ((a + b < c) || (a + c) < b || (c + b) < a){
            throw new SyntaxError("Треугольник с такими сторонами не существует");
        }else{
            this.a = a;
            this.b = b;
            this.c = c;
        }

    }

    getPerimeter(){
        return (this.a + this.b + this.c);
    }

    getArea(){
        let p = this.getPerimeter() / 2;
        return parseFloat(Math.sqrt(p * (p - this.a) * (p  - this.b) * (p - this.c)).toFixed(3));
    }

}

function getTriangle(a,b,c){
    let triangle;
    try {
        triangle = new Triangle(a,b,c);
    }catch (e){
        triangle = new Object();
        triangle.getArea = function () {return "Ошибка! Треугольник не существует";};
        triangle.getPerimeter = function () {return  "Ошибка! Треугольник не существует";};
    } finally {
        return triangle;
    }
}
