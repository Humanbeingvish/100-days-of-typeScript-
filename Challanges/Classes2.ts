class BankAccount{
    accountNumber:number;
    accountHolder:string;
    balance:number

constructor(accountNumber:number,accountHolder:string,initialBalance:number){
    this.accountNumber=accountNumber;
    this.accountHolder=accountHolder;
    this.balance=initialBalance;
}
deposit(amount:number){
    amount + this.balance
}
withdraw(amount:number){
    if(amount > this.balance){
        console.log('The withdrawal limit is Exceeding:')
    }else{
        this.balance - amount 
    }
}
transferFunds(toAccount:BankAccount,amount:number){
if(amount > this.balance){
    console.log('You cannot trasfer the amount ,as it is exceeding the balance :')
}else{
    toAccount.withdraw(amount);
    toAccount.deposit(amount);
    console.log(`The amount is sucussfully transfered :${toAccount.accountNumber}`)
}
}

printAccountDetails(){
    console.log(`This accountHolder ${this.accountHolder} ,accountnumber is: ${this.accountNumber} and the balnace is ${this.balance}`)
}
}


let account1= new BankAccount (1004,'Deadpool',15000);
let account2 = new BankAccount(4001,'Spiderman',25000);

account1.transferFunds(account2,5000);
account1.withdraw(16000);



/////////////////////////////////////////////////////////////////////////////

class Boook{
    title:string;
    author:string;
    isbn:string;

    constructor(title:string,author:string,isbn:string){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
    getInfo(){
        console.log(`The book tittle:${this.title} and the author is ${this.author} and ${this.isbn}`)
    }
}

class Library{
    Books:Boook[] =[];

    addBook(book:Boook){
        this.Books.push(book);
        console.log(`The book is added seccessfully ${book.getInfo()}`)
    }
    listBooks(){
        if(this.Books.length === 0 ){
            console.log('No book found');
        }
        else{
            console.log('Listing all the books ');
        this.Books.forEach(book => {
                console.log(`Books:  ${book.getInfo()}`)
            });
        }
    }
}



const Book1= new Boook ('The Hobbit', 'J.R.R. Tolkien', '12345');
const Book2= new Boook ('The Rab', 'Tolkien', '32232');

const myLibrary = new Library();
 myLibrary.addBook(Book1);
 myLibrary.addBook(Book2);

 myLibrary.listBooks();



