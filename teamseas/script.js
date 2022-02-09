// values are now hardcoded, since the campaign has ended

function pad(num, size) {
  num = num.toString()
  while (num.length < size) num = "0" + num
  return num
}

async function fetchWalletValue() {
  const data = 163428
  const stringToAdd = pad(parseInt(data), 6).toString()
  for (let x = 0; x < stringToAdd.length; x++) {
    document.getElementById(`digi-${x+1}`).innerText = stringToAdd[x]
  }
}

async function fetchRecent() {
  document.getElementById('recent').innerText = 1.9
}

async function fetchHighest() {
  document.getElementById('highest').innerText = 25000
}

async function fetchCount() {
  document.getElementById('count').innerText = 538
}


fetchWalletValue()
fetchRecent()
fetchHighest()
fetchCount()
