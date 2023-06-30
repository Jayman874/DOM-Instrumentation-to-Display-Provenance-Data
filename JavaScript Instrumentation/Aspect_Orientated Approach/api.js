xhr = addAspects(logger)

xhr.onreadystatechange = async function ({ document }) {
  //await new Promise(res => setTimeout(res, 1000))
  console.log(document + ' added')
}