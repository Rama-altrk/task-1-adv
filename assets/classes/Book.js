export class Book {
    img;
    title;
    author;
    category;
    isAvailable;
    constructor(img, title, author, category, isAvailable = true) {
        this.img = img;
        this.title = title;
        this.author = author;
        this.category = category;
        this.isAvailable = isAvailable;
    }
    //setter functions
    set setImg(newImg) {
        this.title = newImg;
    }
    set setTitle(newTitle) {
        this.title = newTitle;
    }
    set setAuthor(newAuther) {
        this.author = newAuther;
    }
    set setCategory(newCategory) {
        this.
            category = newCategory;
    }
    set setIsAvailable(availablety) {
        this.isAvailable = availablety;
    }
    //getter functions
    get getImg() {
        return this.img;
    }
    get getTitle() {
        return this.title;
    }
    get getAuthor() {
        return this.author;
    }
    get getCategory() {
        return this.category;
    }
    get getStatus() {
        return this.isAvailable;
    }
    displayInfo() {
        return (`title: ${this.title} ,
            auther: ${this.author} ,
            category: ${this.category} ,
            status: ${this.getStatus ? 'available' : 'not available'}`);
    }
}
