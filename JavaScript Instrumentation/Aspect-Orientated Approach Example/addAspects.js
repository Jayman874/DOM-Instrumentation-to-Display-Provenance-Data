function addAspects (...aspects) {
  const get = (target, prop, receiver) => {
    if (typeof target[prop] !== 'function') {
      return Reflect.get(target, prop, receiver)
    }

    return async function (...args) {
      const run = pointcut => aspects.forEach(aspect => aspect[prop]?.(...args)[pointcut]?.())
      run('before')
      const result = Reflect.apply(target[prop], target, args)
      run('during')
      await result
      run('after')
      return result
    }
  }

  return new Proxy({}, { get })
}