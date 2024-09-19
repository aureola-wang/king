document.addEventListener('DOMContentLoaded', function() {
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');

    function attemptPlay() {
        bgMusic.play().then(() => {
            console.log('自动播放成功');
            musicToggle.textContent = '暂停音乐';
        }).catch(error => {
            console.log('自动播放失败，等待用户交互');
            musicToggle.textContent = '播放音乐';
        });
    }

    attemptPlay();

    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            attemptPlay();
        }
    });

    document.addEventListener('click', function onFirstClick() {
        attemptPlay();
        document.removeEventListener('click', onFirstClick);
    }, { once: true });

    musicToggle.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.textContent = '暂停音乐';
        } else {
            bgMusic.pause();
            musicToggle.textContent = '播放音乐';
        }
    });
});