import { data } from "./helper";

const container = document.querySelector(".container");

class Parent {
    public length:number;
    private notLength:number;
    constructor() {
        this.length = 15;
     }
    getLength() {
        return this.notLength = 30;
        
     }
}

interface Address {
    street: string;
    city: string;
};

class MyClass extends Parent {
    width:number;
    top:number;
    address:Address;

    constructor(width:number, top:number) {
        super();
        this.width = width;
        this.top = top;
        
    }

    getSum(): number {
        let localCounter:number = this.width + this.top + this.getLength();
        console.log('localCounter: ', localCounter);
        return localCounter;
    }

}

const counter:MyClass = new MyClass(12, 16);
counter.getSum();
counter.getLength();

console.log("message: ");

const onInit = function() { };

onInit();



