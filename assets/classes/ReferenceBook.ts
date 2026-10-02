import { Book } from "./Book.js";

export class ReferenceBook extends Book{
    private locationCode:string

    constructor(img:string , title:string , auther:string , category:string , status:boolean , locationCode:string){
        super(img,title,auther,category,status)
        this.locationCode= locationCode
    }

    set setLocationCode(newLocationCode:string){
        this.locationCode=newLocationCode
    }

    get getLocationCode(): string{
        return this.locationCode
    }

    displayInfo(): string{
        return(
            `
                <div class="card reference-card ${super.getStatus ? 'available' : 'borrowed'}">
                    <img src=${super.getImg} alt="${super.getTitle} book" class="book">
                    <h3>${super.getTitle}</h3>
                    <h4>${super.getAuthor}</h4>
                    <p>category : ${super.getCategory}</p>
                    <p>location : ${this.getLocationCode}</p>
                    <p class="status">${super.getStatus ? "available" : "not available"}</p>
                    <button class="toggle-btn" data-title="${super.getTitle}">
                        ${super.getStatus ? 'borrow' : ' Cancel'}
                    </button>
                </div>
            `
        )
    }
}

