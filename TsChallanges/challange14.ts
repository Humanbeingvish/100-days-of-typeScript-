function ParseJSON(jsonString:string){
    try {
        const parseData = JSON.parse(jsonString);
        return parseData
    } catch (error) {
        console.log(`Error in parsing JSON ${error}`)
    }
}

const validjson = '{"Name":"DeadPool","age":"69"}';
const invalidJSon = '{name:"John","age":"34"}';

console.log(ParseJSON(validjson));
console.log(ParseJSON(invalidJSon))