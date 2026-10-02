export class Book{
    private img : string
    private title : string;
    private author : string;
    private category : string;
    private isAvailable : boolean;

    constructor(img:string ,title:string , author:string , category:string , isAvailable:boolean = true ){
        this.img = img
        this.title = title
        this.author= author
        this.category= category
        this.isAvailable= isAvailable
    }

    //setter functions
    set setImg(newImg:string){
        this.title =newImg
    }

    set setTitle(newTitle:string){
        this.title =newTitle
    }

    set setAuthor(newAuther:string){
        this.author=newAuther
    }

    set setCategory(newCategory:string){
        this.
        category=newCategory
    }

    set setIsAvailable(availablety:boolean){
        this.isAvailable=availablety
    }

    //getter functions

    get getImg(): string{
        return this.img
    }

    get getTitle(): string{
        return this.title
    }

    get getAuthor(): string{
        return this.author
    }

    get getCategory(): string{
        return this.category
    }

    get getStatus(): boolean{
        return this.isAvailable
    }

    displayInfo(): string{
        return(
            `title: ${this.title} ,
            auther: ${this.author} ,
            category: ${this.category} ,
            status: ${this.getStatus? 'available' : 'not available' }`
        )
    }
}