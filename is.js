/**
 * Collection of isType helpers
 */
/**
 * isType
 * true if `value` type is of `type`.
 *
 * @param {*} value value to test
 * @param {String} type type
 * @return {Boolean} true if `value` is a type of `type`, false otherwise
 * @api public
 */
export const isEqual = (a,b) => a === b
export const isType = (v, type) => isEqual(typeof v, type) 
export const isString = s => isType(s,'string')
export const isObject = o => isType(o,"object")
export const isNumber = n => isType(n,"number")
export const isStringObject = so => isString(so) || isObject(so)
export const isPromise = x => isType(x.then,'function')
export const isFunction = x => isType(x, 'function')

/**
 * isDefined
 * Test if `value` is defined.
 *
 * @param {*} value value to test
 * @return {Boolean} true if 'value' is defined, false otherwise
 * @api public
 */

export const isDefined = value => !isType(value, 'undefined');
  
/**
 * isEmpty
 * Test if `value` is empty.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is empty, false otherwise
 * @api public
 */
export const isEmpty = value =>{
    var type = toStr.call(value);
    var key;
  
    if (type === '[object Array]' || type === '[object Arguments]' || type === '[object String]') {
      return value.length === 0;
    }
  
    if (type === '[object Object]') {
      for (key in value) {
        if (owns.call(value, key)) {
          return false;
        }
      }
      return true;
    }
  
    return !value;
  };
  