import { Event } from "./eventInterface";


class Producer{
    private events:Event[] =[];

producer(event:Event):void{
    console.log(`The topic is ${event.topic} and the message is ${event.topic} and it is created in :${event.timestamp}`);
    this.events.push(event);
}
};

class Consumer{
    subscribe(topic:string,callBack:(event:Event)=>void){
        console.log(`Subscribing to the topic ${topic}`);

    }
}

 class EventSystem{
    private static subscribers:Map<string,((event: Event) => void)[]> = new Map();

    static register(topic:string,callBack:(event:Event)=>void){
        if(!this.subscribers.has(topic)){
            this.subscribers.set(topic,[]);
        }
        
    }
 }