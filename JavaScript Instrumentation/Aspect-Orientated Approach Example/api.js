const api = addAspects(logger)

api.addUser = async function ({ name }) {
  //await new Promise(res => setTimeout(res, 1000))
  console.log(name + ' added')
}