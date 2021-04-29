// Event Emmiter is a clas; so to use it create an instant.\/ object of that class.
const EventEmmiter = require('events'); // class
const { url } = require('node:inspector');
const emmiter = new EventEmmiter();     // object


// we need to register a listner to listen to this noise/ signal
emmiter.on('messageLooged', /*function*/(arg) =>{ // e, argor eventArg
  console.log("signal received: "+ arg);
})
// raised event
emmiter.emit('messageLooged', {id: 1, url: 'http://'});  // when this is raised; emmiter iterates over each listner methods and call them sunchronously.
// emmiter.emit(EventName, ..args[]);
// emmiter.emit(EventName, 1, 'url') ==> better practice is to encapsulate them in an object.

