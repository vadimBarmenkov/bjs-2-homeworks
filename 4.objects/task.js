function Student(name, gender, age) {
    // Ваш код
    this.name = name;
    this.gender = gender;
    this.age = age;

}

Student.prototype.setSubject = function (subjectName) {
    //добавление предмета
    this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
    if (!this.marks?.length) {
        this.marks = [mark];
        return;
    }
    this.marks.push(mark);
    // добавление оценок в массив
}


Student.prototype.addMarks = function (...marks) {
    if (!this.marks?.length) {
        this.marks = [...marks]
        return
    }
    this.marks.push(...marks)
}

Student.prototype.getAverage = function (){
    return this.marks.reduce(function (sum, element) {return sum+element;}, 0) / this.marks.length;
}

Student.prototype.exclude = function (reason){
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}