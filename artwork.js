document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const artworkId = urlParams.get('id');

    fetch('image-list.json')
        .then(response => response.json())
        .then(imageList => {
            const artwork = {
                id: artworkId,
                title: `作品${artworkId}`,
                image: imageList[artworkId - 1],
                description: `这是作品${artworkId}的描述`
            };

            document.getElementById('artwork-details').innerHTML = `
                <h2>${artwork.title}</h2>
                <img src="../images/${artwork.image}" alt="${artwork.title}">
                <p>${artwork.description}</p>
            `;
        });
});