document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const artworkId = parseInt(urlParams.get('id'));

    // 生成图片列表
    const imageList = [];
    for (let i = 397; i <= 427; i++) {
        imageList.push(`IMG_0${i}.jpeg`);
    }

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