const songContainer = document.getElementById('songs');


document.getElementById('submitButton').addEventListener('click',() => {
    while(songContainer.firstChild){
        songContainer.removeChild(songContainer.firstChild);
    }
    const searchInput = document.getElementById('searchInput').value;


    const url = 'https://itunes.apple.com/search?media=music&&limit=20&&term='+searchInput+'&&country=US';
    fetch(url)
    .then( (response) => {
        return response.json();
    })
    .then((data) => {
        //console.log(data);
        const artists = data.results;
        return artists.map( result => {
            
            const article = document.createElement('article'),
                artist = document.createElement('p'),
                song = document.createElement('p'),
                img = document.createElement('img'),
                audio = document.createElement('audio'),
                audioSource = document.createElement('source')

        artist.innerHTML = result.artistName
        song.innerHTML = result.trackName
        img.src = result.artworkUrl100
        audioSource.src = result.previewUrl
        audio.setAttribute('controls','')

        article.appendChild(img)
        article.appendChild(artist)
        article.appendChild(song)
        article.appendChild(audio)
        audio.appendChild(audioSource)

    songContainer.appendChild(article);


        })
    })
    .catch(error => console.log('Request failed:', error));

})