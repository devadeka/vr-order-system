let hostAddress = "localhost:3000"
let apiVersion = 1


const ApiUrlBuilder = function() {
  return {
    baseURL: () => `${hostAddress}/api/v${apiVersion}`
  }
}

module.exports = ApiUrlBuilder;