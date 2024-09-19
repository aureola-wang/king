document.addEventListener('DOMContentLoaded', function() {
    const artworkContainer = document.getElementById('artwork-container');
    const artworkDescription = document.getElementById('artwork-description');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    const urlParams = new URLSearchParams(window.location.search);
    let currentId = parseInt(urlParams.get('id')) || 397;

    const minId = 397;
    const maxId = 427;

    function loadImage(id) {
        artworkContainer.innerHTML = `<img src="images/IMG_0${id}.jpeg" alt="图片 ${id}">`;
        artworkDescription.textContent = `这是图片 ${id - 396} 的描述。这里可以添加更多关于图片的详细信息。`;
        updateButtons();
        // 更新页面标题
        document.title = `图片 ${id - 396} - 王浩宸17岁生日快乐`;
        // 重置倒计时
        resetCountdown();
    }

    function updateButtons() {
        prevButton.style.display = currentId > minId ? 'inline-block' : 'none';
        nextButton.style.display = currentId < maxId ? 'inline-block' : 'none';
        
        prevButton.href = `artwork.html?id=${currentId - 1}`;
        nextButton.href = `artwork.html?id=${currentId + 1}`;
    }

    prevButton.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentId > minId) {
            currentId--;
            loadImage(currentId);
            loadComments(currentId);
        }
    });

    nextButton.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentId < maxId) {
            currentId++;
            loadImage(currentId);
            loadComments(currentId);
        }
    });

    loadImage(currentId);
    loadComments(currentId);
});

function resetCountdown() {
    countdown = 30;
    updateCountdown();
}