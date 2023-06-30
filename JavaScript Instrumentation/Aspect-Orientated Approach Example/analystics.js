const analytics = {}

analytics.addUser = function ({ requestIp }) {
  return {
    during: () => console.log(`ANALYTICS: ${requestIp} adding user`)
  }
}
