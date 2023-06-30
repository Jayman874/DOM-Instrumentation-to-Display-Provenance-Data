function addAspects (...aspects) {
    const get = (target, prop, receiver) => {
      if (typeof target[prop] !== 'function') {
        return Reflect.get(target, prop, receiver)
      }
  
      return function (...args) {
        aspects.forEach(aspect => aspect[prop](...args))
        return Reflect.apply(target[prop], target, args)
      }
    }
  
    return new Proxy({}, { get })
  }