import { Library } from "./classes/Library.js";
import { ReferenceBook } from "./classes/ReferenceBook.js";

const myLibrary = new Library()

const booksContainer = document.getElementById("books-container") as HTMLDivElement
const searchInput = document.getElementById("searchInput") as HTMLInputElement
const categoryFilter = document.getElementById("categoryFilter") as HTMLSelectElement

myLibrary.addBook(new ReferenceBook("./assets/img/At-top-the-world.jpg","On top of the world", "Moustafa Ali", "story" , true , "A-101"))
myLibrary.addBook(new ReferenceBook("./assets/img/doctors-and-death.webp","Doctors and the philosophy of death", "Abdulrahman Al-Alyan", "Medicine" , true , "B-205"))
myLibrary.addBook(new ReferenceBook("./assets/img/psychology.jpg","Psychology Terms Dictionary", "Mutawif Yaseen", "psychology",false, "C-302"))
myLibrary.addBook(new ReferenceBook("./assets/img/that-night.jpg" , "That night will haunt you", "Mona AlToukhy", "novel",false, "D-303"))

function renderCategory(books: ReferenceBook[]) {
    const uniqueCategories: string[] = []
    books.forEach(book => {
        const category = book.getCategory
        if(!uniqueCategories.includes(category)) {
            uniqueCategories.push(category)
            categoryFilter.innerHTML += `<option value=${category}>${category}</option>`
        }
    })
}


function renderBooks(booksArray: ReferenceBook[]) {
    if (booksArray.length === 0) {
        booksContainer.innerHTML = `<p>No Books Available</p>`
        return
    }

    booksContainer.innerHTML = booksArray.map(book => book.displayInfo()).join("")

    toggleListeners()
}


function toggleListeners() {
    const toggleButtons = document.querySelectorAll(".toggle-btn")
    
    toggleButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const target = event.target as HTMLButtonElement
            const bookTitle = target.getAttribute("data-title")
            
            if (bookTitle) {
                myLibrary.toggleAvailability(bookTitle)
                searchAndFilter()
            }
        });
    });
}


function searchAndFilter() {
    const searchValue = searchInput.value
    const selectedCategory = categoryFilter.value

    let filteredBooks = myLibrary.filterByCategory(selectedCategory)

    if (searchValue.trim() !== "") {
        const lowerKey = searchValue.toLowerCase()
        filteredBooks = filteredBooks.filter(book =>
            book.getTitle.toLowerCase().includes(lowerKey) ||
            book.getAuthor.toLowerCase().includes(lowerKey) 
        )
    }

    renderBooks(filteredBooks)
}


searchInput.addEventListener("input", searchAndFilter)

categoryFilter.addEventListener("change", searchAndFilter)



renderBooks(myLibrary.filterByCategory("All"))
renderCategory(myLibrary.filterByCategory("All"))