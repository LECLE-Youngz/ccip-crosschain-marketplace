const addressCreator = args[0]
const addressBuyer = args[1]

// make HTTP request
const url = `metadata-storage.azurewebsites.net/api/v1/socials/creator/${addressCreator}/buyer/${addressBuyer}`
console.log(`HTTP GET Request to ${url}\n`)

const checkNFTPurchasedRequest = Functions.makeHttpRequest({
  url: url
})

// Execute the API request (Promise)
const checkNFTPurchasedResponse = await checkNFTPurchasedRequest
if (checkNFTPurchasedResponse.error) {
  console.error(checkNFTPurchasedResponse.error)
  throw Error("Request failed")
}

const data = checkNFTPurchasedResponse["data"]
console.log(JSON.stringify(data, null, 2));
// Gets the latest yield rate in the array of returned data values
const floatingRate = data.data[0].numBuy;

if (data.Response === "Error") {
  console.error(data.Message)
  throw Error(`Functional error. Read message: ${data.Message}`)
}

return Functions.encodeUint256(floatingRate)
