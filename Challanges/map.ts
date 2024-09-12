let phoneBook = new Map<number,string>();

phoneBook.set(696969,'deadPool');
phoneBook.set(232323,'SuperMan');

if(phoneBook.has(696969)){
    console.log('Yes it is number of DeadPool')
}else{
    console.log('Number not found');
};
