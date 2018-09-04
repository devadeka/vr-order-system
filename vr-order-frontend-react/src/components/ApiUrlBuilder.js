//let hostAddress = "http://10.1.6.235:3000"
let hostAddress = "http://localhost:3000"
let apiVersion = 1


const ApiUrlBuilder = function() {
  return {
    baseURL: () => `${hostAddress}/api/v${apiVersion}`
  }
}

module.exports = ApiUrlBuilder;