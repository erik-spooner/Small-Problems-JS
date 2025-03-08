// https://leetcode.com/problems/event-emitter/description/


/**
 * Event Emiiter class
 * 
 * stores subscriptions in the form (eventname, [callbacks])
 * 
 */
class EventEmitter 
{
  constructor() {
    this.subscriptions = new Map();
  }

  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (!this.subscriptions.get(eventName)) 
      { this.subscriptions.set(eventName, []); }

    this.subscriptions.get(eventName).push(callback);

    // Returns a subscription object with an unsbscribe method
    return {
      unsubscribe: () => {
        let index = this.subscriptions.get(eventName).find(callback);
        this.subscriptions.get(eventName).splice(index, 1);

        if (this.subscriptions.get(eventName).length == 0) {
          this.subscriptions.delete(eventName);
        }

      }
    };
  }
  
  /**
   * @param {string} eventName
   * @param {Array} args÷
   * @return {Array}
   */
  emit(eventName, args = []) {    
    var results = [];

    // if there are no subscriptions with this name return an empty array
    if (!this.subscriptions.get(eventName)) 
      { return results }

    let callbacks = this.subscriptions.get(eventName);

    // fill the results array with the results of the callbacks associated with the event
    for (var i = 0; i < this.subscriptions.get(eventName).length; i++) {
      let callback = callbacks[i];
      results.push(callback(...args));
    }

    return results;
  }
}

const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
function onClickCallback() { return 99 }
var sub = emitter.subscribe('onClick', onClickCallback);

console.log(emitter.emit('onClick')); // [99]
sub.unsubscribe(); // undefined
console.log(emitter.emit('onClick')); // []

// Create a second subscription
function onClickCallback2() { return 0 }
sub = emitter.subscribe('onClick', onClickCallback);
var sub2 = emitter.subscribe('onClick', onClickCallback2);

console.log(emitter.emit('onClick')); // [99,0]



