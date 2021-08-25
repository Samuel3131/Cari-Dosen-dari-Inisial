const searchResults = document.querySelector('.searchResults');

function sendData(e) {
    fetch('liveSearch', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({payload: e.value})
    })
    .then(res => res.json())
    .then(data => {
        let payload = data.payload;
        // console.log(payload);

        searchResults.innerHTML = '';

        if(payload.length < 1) {
            return;
        }

        payload.forEach((item, index) => {
            if(index > 0) searchResults.innerHTML += '<div><div>';
            searchResults.style.border = '1px solid #fff'
            searchResults.style.display = 'flex';
            searchResults.style.flexDirection = 'column';
            searchResults.style.justifyContent = 'space-between';

            searchResults.innerHTML += `<p>Nama : ${item.nama}</p>`;
            searchResults.innerHTML += `<p>Inisial : ${item.inisial}</p>`;
            searchResults.innerHTML += `<p>Lab : ${item.lab}</p>`;
            searchResults.innerHTML += `<p>Status : ${item.statusDosen}</p>`;
        })
    })
} 

