"use strict";

var person = {
    name: 'felix',
    sayHello: function(){
        return 'Hello ' + this.name;
    }
}

console.log(person.sayHello());