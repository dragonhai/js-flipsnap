/**
 * Fixed foreach on IE8
 * Production steps of ECMA-262, Edition 5, 15.4.4.18
 *
 * @reference: http://es5.github.io/#x15.4.4.18
 */
if (!Array.prototype.forEach) {

  Array.prototype.forEach = function(callback, thisArg) {

    var T, k;

    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }

    // 1. Let O be the result of calling toObject() passing the
    // |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3. Let len be toUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If isCallable(callback) is false, throw a TypeError exception. // See: http://es5.github.com/#x9.11
    if (typeof callback !== "function") {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Let k be 0
    k = 0;

    // 7. Repeat, while k < len
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //    This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty
      //    internal method of O with argument Pk.
      //    This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined
  };
}

// check if it is IE and it's version is 8 or older
//if (document.documentMode && document.documentMode < 9) {
//
//  // save original function of splice
//  var originalSplice = Array.prototype.splice;
//
//  // provide a new implementation
//  Array.prototype.splice = function() {
//
//    // since we can't modify 'arguments' array,
//    // let's create a new one and copy all elements of 'arguments' into it
//    var arr = [],
//      i = 0,
//      max = arguments.length;
//
//    for (; i < max; i++){
//      arr.push(arguments[i]);
//    }
//
//    // if this function had only one argument
//    // compute 'deleteCount' and push it into arr
//    if (arr.length==1) {
//      arr.push(this.length - arr[0]);
//    }
//
//    // invoke original splice() with our new arguments array
//    return originalSplice.apply(this, arr);
//  };
//}

/**
 * Fix addEventListener, removeEventListener, dispatchEvent
 *
 * @reference https://gist.github.com/jonathantneal/3748027
 */
//!window.addEventListener && (function (WindowPrototype, DocumentPrototype, ElementPrototype, addEventListener, removeEventListener, dispatchEvent, registry) {
  //WindowPrototype[addEventListener] = DocumentPrototype[addEventListener] = ElementPrototype[addEventListener] = function (type, listener) {
    //var target = this;
    //registry.unshift([target, type, listener, function (event) {
    //  event['currentTarget'] = target;
    //  event['preventDefault'] = function () { event['returnValue'] = false };
    //  event['stopPropagation'] = function () { event['cancelBubble'] = true };
    //  event['target'] = event['srcElement'] || target;
    //
    //  listener.handleEvent.call(listener, event);
    //}]);
    //console.log(registry[0][3]);
    //this.attachEvent("on" + type, registry[0][3]);

  //};

  //WindowPrototype[removeEventListener] = DocumentPrototype[removeEventListener] = ElementPrototype[removeEventListener] = function (type, listener) {
  //  for (var index = 0, register; register = registry[index]; ++index) {
  //    if (register[0] == this && register[1] == type && register[2] == listener) {
  //      return this.detachEvent("on" + type, registry.splice(index, 1)[0][3]);
  //    }
  //  }
  //};

  //WindowPrototype[dispatchEvent] = DocumentPrototype[dispatchEvent] = ElementPrototype[dispatchEvent] = function (eventObject) {
  //  return this.fireEvent("on" + eventObject.type, eventObject);
  //};
//})(Window.prototype, HTMLDocument.prototype, Element.prototype, "addEventListener", "removeEventListener", "dispatchEvent", []);
