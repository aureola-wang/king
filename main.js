document.addEventListener('DOMContentLoaded', function() {
    // 生成图片列表
    const imageList = [];
    for (let i = 397; i <= 427; i++) {
        imageList.push(`IMG_0${i}.jpeg`);
    }

    let swiper;
    let currentIndex = 0;

    // 设置导航链接
    const prevLink = document.getElementById('prevLink');
    const nextLink = document.getElementById('nextLink');

    // 动态生成艺术品数据并检查图片是否存在
    const artworksPromises = imageList.map((image, index) => 
        new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve({
                id: index + 1,
                title: `作品${index + 1}`,
                image: image,
                description: `这是作品${index + 1}的描述`
            });
            img.onerror = () => resolve(null);
            img.src = `images/${image}`;
        })
    );

    Promise.all(artworksPromises).then(artworks => {
        // 过滤掉不存在的图片
        const validArtworks = artworks.filter(artwork => artwork !== null);

        // 创建轮播图
        const swiperWrapper = document.querySelector('.swiper-wrapper');
        validArtworks.forEach(artwork => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            slide.innerHTML = `
                <img src="images/${artwork.image}" alt="${artwork.title}">
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
            on: {
                slideChange: function () {
                    currentIndex = this.realIndex;
                    updateNavigationLinks();
                }
            }
        });

        // 设置导航链接事件监听器
        prevLink.addEventListener('click', (e) => {
            e.preventDefault();
            swiper.slidePrev();
        });

        nextLink.addEventListener('click', (e) => {
            e.preventDefault();
            swiper.slideNext();
        });

        function updateNavigationLinks() {
            prevLink.href = `artwork.html?id=${getPrevId()}`;
            nextLink.href = `artwork.html?id=${getNextId()}`;
        }

        function getPrevId() {
            return currentIndex === 0 ? validArtworks.length : currentIndex;
        }

        function getNextId() {
            return currentIndex === validArtworks.length - 1 ? 1 : currentIndex + 2;
        }

        // 初始化导航链接
        updateNavigationLinks();
    });

    // 音乐控制代码保持不变
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');

    bgMusic.play().catch(error => {
        console.log('自动播放失败。用户可能需要手动开始播放。');
    });

    musicToggle.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play();
        } else {
            bgMusic.pause();
        }
    });
});