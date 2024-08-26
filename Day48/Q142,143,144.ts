setTimeout(()=>{
    console.log('This is emitted after 3 seconds ')
},3000);


/////.....
console.log('Start');

setTimeout(()=>{
    console.log('Executed at last')
},0);

console.log('End');

///.....

