document.addEventListener('DOMContentLoaded', function() {
    // 初始化Swiper
    new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
    });

    // 加载作品数据
    fetch('artworks.json')
        .then(response => response.json())
        .then(data => {
            const swiperWrapper = document.querySelector('.swiper-wrapper');
            data.forEach(artwork => {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide';
                slide.innerHTML = `
                    <img src="../images/${artwork.image}" alt="${artwork.title}">
                    <h3>${artwork.title}</h3>
                    <a href="artwork.html?id=${artwork.id}">查看详情</a>
                `;
                swiperWrapper.appendChild(slide);
            });
        });
});