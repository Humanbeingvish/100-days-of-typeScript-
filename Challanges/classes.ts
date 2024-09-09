export class bankAccount{
    accoutNumber:number;
    accountHolder:string;
    balance:number;

constructor(accountNumber:number,accountHolder:string,initialBalance:number){
    this.accoutNumber = accountNumber;
    this.accountHolder=accountHolder;
    this.balance=initialBalance;}

     deposit(amount:number){
        amount + this.balance;
    }
     withdraw(amount:number){
        this.balance - amount
    }
     getBalance(){
return this.balance;
    }
     printAccountDetails(){
        console.log(this.accoutNumber,this.accountHolder,this.balance)
    }


transferFunds(fromAccount:bankAccount,toAccount:bankAccount,amount:number){
    console.log(amount,fromAccount,toAccount) 
}
}

 let account1 =new bankAccount (102,'DeadPool',12);
  let account2=new bankAccount(69,'SuperMan',234);

account1.printAccountDetails();
account2.printAccountDetails()

