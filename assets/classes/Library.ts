// import { Book } from "./Book";
import { ReferenceBook } from "./ReferenceBook.js";

export class Library{
    private books: Array<ReferenceBook> = []

    addBook(book: ReferenceBook): boolean{
        const isLocationTaken = this.books.some(existingBook => 
            existingBook.getLocationCode.toLowerCase() === book.getLocationCode.toLowerCase()
        )

        if(isLocationTaken){
            console.log(`sorry : You can't add the book ${book.getTitle} , location Code ${book.getLocationCode} has been used before`)
            return false
        }

        this.books.push(book)
        console.log(`The book ${book.getTitle} with code ${book.getLocationCode} was added successfully`)
        return true
    }

    removeBook(deletedTitle: string){
        this.books = this.books.filter(book =>book.getTitle.toLowerCase() !== deletedTitle.toLowerCase())
    }

    searchBooks(searchKey: string): ReferenceBook[]{
        const lowerKey = searchKey.toLowerCase()
        return this.books.filter(book=>
            book.getTitle.toLowerCase().includes(lowerKey) ||
            book.getLocationCode.toLowerCase().includes(lowerKey) 
        )
    }

    filterByCategory(category:string): ReferenceBook[]{
        const lowerCategory = category.toLowerCase()
        if(!category || category == "All") return this.books
        return this.books.filter(book => book.getCategory.toLowerCase() == lowerCategory)
    }

    toggleAvailability(title:string){
        const selectedBook = this.books.find(book=>book.getTitle.toLowerCase() == title.toLowerCase())
        if(selectedBook){
            const currentStatus:boolean = selectedBook.getStatus
            selectedBook.setIsAvailable = !currentStatus
        }
    }
}