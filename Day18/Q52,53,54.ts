let SmartPhone = {
    brand:"Samsung",
    model:"S24",
    spec:{
        battery:5000,
        display:"Amold"
    }
}


console.log(SmartPhone);

//Q53...

let NestedList={
    ProgrammingLanguage:[" Js","typeScript","Node"],
    Framework:['Express',"Angular"],
    tools:['Git',"Docker"]
}

let {ProgrammingLanguage,Framework,tools} = NestedList;
    


console.log(`Program:${ProgrammingLanguage[1]} ,framework is ${Framework[0]} and tools are ${tools}`);

//Q54........

function CreateObjectWithDynamicKey(key:string,val:string){
    let KeyObject = {};
    KeyObject[key]=val;
    return KeyObject;
}

let Preference = CreateObjectWithDynamicKey('Vish','Glo');
console.log(Preference);
