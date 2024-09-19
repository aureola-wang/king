document.addEventListener('DOMContentLoaded', function() {
    // 生成图片列表
    const imageList = [];
    for (let i = 397; i <= 427; i++) {
        imageList.push(`IMG_0${i}.jpeg`);
    }

    // 初始化Swiper
    let swiper;

    // 动态生成艺术品数据
    const artworks = imageList.map((image, index) => ({
        id: index + 1,
        title: `作品${index + 1}`,
        image: image,
        description: `这是作品${index + 1}的描述`
    }));

    // 创建轮播图
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    artworks.forEach(artwork => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <img src="../images/${artwork.image}" alt="${artwork.title}">
            <h3>${artwork.title}</h3>
            <a href="artwork.html?id=${artwork.id}">查看详情</a>
        `;
        swiperWrapper.appendChild(slide);
    });

    // 初始化Swiper
    swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
    });
});