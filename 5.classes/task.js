class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    get state(){
        return this._state;
    }

    fix(){
        this.state = this.state * 1.5;
    }

     set state(state){
        if (state < 0){
            state = 0;
        }else if(state > 100){
            state = 100;
        }
        this._state = state;
    }
}


class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, ...args) {
        super(...args);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book{
    constructor(...args) {
        super(...args);
        this.type = "novel"
    }
}

class FantasticBook extends Book{
    constructor(...args) {
        super(...args);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book{
    constructor(...args) {
        super(...args);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if (book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        return (this.books.find(book => book[type]  === value) ?? null);
    }

    giveBookByName(bookName){
        return this.books.splice(this.books.indexOf(this.findBookBy("name", bookName)), 1)[0] ?? null;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.subjects = [];
    }

    addMark(mark, subject){
        if (this.subjects.find(obj => obj.name === subject) === undefined){
            this.subjects.push({name: subject, marks: []});
        }
        this.subjects.find(obj => obj.name === subject).marks.push(mark);
    }

    getAverageBySubject(subject){
        let marksArr = this.subjects.find(obj => obj.name === subject).marks;
        return marksArr.reduce(function (sum, element) {return sum+element;}, 0) / marksArr.length;
    }

    getAverage(){
        let marksArr = [];
        this.subjects.forEach(function (elem) {
            marksArr.push(elem.marks.reduce(function (sum, element) {return sum+element;}, 0) / elem.marks.length);
        });
        return marksArr.reduce(function (sum, element) {return sum+element;}, 0) / marksArr.length;
    }
}

