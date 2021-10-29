const API_ENDPOINT = "https://such-rest.dogecoin.com/api/";

function pad(num, size) {
  num = num.toString()
  while (num.length < size) num = "0" + num
  return num
}

async function fetchWalletValue() {
  const res = await fetch(API_ENDPOINT + "total");
  const data = await res.text()
  const stringToAdd = pad(parseInt(data), 6).toString()
  for (let x = 0; x < stringToAdd.length; x++) {
    document.getElementById(`digi-${x+1}`).innerText = stringToAdd[x]
  }
}

async function fetchRecent() {
  const res = await fetch(API_ENDPOINT + "recent")
  const data = await res.text()
  document.getElementById('recent').innerText = JSON.parse(data).value
  // const stringToAdd = pad(parseInt(data), 6).toString()
  // for (let x = 0; x < stringToAdd.length; x++) {
  //   document.getElementById(`digi-${x+1}`).innerText = stringToAdd[x]
  // }
}

async function fetchHighest() {
  const res = await fetch(API_ENDPOINT + "largest")
  const data = await res.text()
  document.getElementById('highest').innerText = JSON.parse(data).value
  // const stringToAdd = pad(parseInt(data), 6).toString()
  // for (let x = 0; x < stringToAdd.length; x++) {
  //   document.getElementById(`digi-${x+1}`).innerText = stringToAdd[x]
  // }
}

async function fetchCount() {
  const res = await fetch(API_ENDPOINT + "count")
  const data = await res.text()
  document.getElementById('count').innerText = data
  // const stringToAdd = pad(parseInt(data), 6).toString()
  // for (let x = 0; x < stringToAdd.length; x++) {
  //   document.getElementById(`digi-${x+1}`).innerText = stringToAdd[x]
  // }
}

(async function() {
  if (!fetch) {
    // Browser not compatible, bailing out
    return
  }
  try {
    setInterval(function() {
      fetchWalletValue()
      fetchRecent()
      fetchHighest()
      fetchCount()
    }, 5000)
  } catch (e) {
    // Handle API Transport errors.
  }
})();
