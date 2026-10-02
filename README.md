# Digital Library
A simple interactive web project built to apply OOP concepts


## Features
- Smart search: instant search bar that looks for books using the title or author's name.

- Dropdown list for dynamic filtering: it’s generated automatically without repetition to filter books by category.

- Controlling the interactive state: the ability to borrow or return books with the push of a button and update the card design instantly.

- Book and reference management: adding, storing, or deleting different types of books.

## Techniques used
- HTML5: to build the facade structure and input fields.

- CSS3: to organize the cards and design a responsive, stylish interface.

- TypeScript: to control the programming logic and manage the DOM Manipulation.


## OOP Concepts Applied
- Encapsulation: protect class fields using the Private fields feature and prevent external modification except through setters and getters.

- Inheritance: class ReferanceBook inherits all the properties of the parent class Book and adds its own special features.

- Polymorphism: redefining the 'displayInfo()' function to show more information (Method Overriding).

- Abstraction: Designing classes so that properties aren't accessed directly, but through dedicated functions.


## Project Structure

```text
Rama_Altrk_adv_#1/
│
├── 📁 assets/
│   ├── 📁 css/
│   │   └── style.css          # Styles and Colors File
│   └── 📁 js/
│       ├── 📁 classes/        # Classes Code Folder
│       │   ├── book.ts
│       │   ├── ReferenceBook.ts
│       │   └── library.ts
│       ├── index.ts           #The main control file and the DOM
│       └── index.js           # The final compiled file resulting from the translation
│
├── index.html                 # Main user interface
└── README.md                  # Current project guide
```
## How to Run
- Open the project folder in a code editor, like VS Code

- Open the Terminal and run the TypeScript auto-watch command to make sure files compile instantly when you save:
```bash
tsc -w
```
- Click the Go Live button at the bottom of VS Code to open the interface in the browser.

- Enjoy the experience of searching, filtering, and borrowing books dynamically.
