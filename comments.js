function loadComments(imageId) {
    const commentsList = document.getElementById('comments-list');
    commentsList.innerHTML = '';

    // 从本地存储加载评论
    const comments = JSON.parse(localStorage.getItem(`comments_${imageId}`)) || [];

    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.textContent = comment;
        commentsList.appendChild(commentElement);
    });
}

document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const commentInput = document.getElementById('comment-input');
    const comment = commentInput.value.trim();

    if (comment) {
        const urlParams = new URLSearchParams(window.location.search);
        const imageId = parseInt(urlParams.get('id')) || 397;

        // 从本地存储加载现有评论
        const comments = JSON.parse(localStorage.getItem(`comments_${imageId}`)) || [];
        
        // 添加新评论
        comments.push(comment);

        // 保存到本地存储
        localStorage.setItem(`comments_${imageId}`, JSON.stringify(comments));

        // 重新加载评论
        loadComments(imageId);

        // 清空输入框
        commentInput.value = '';
    }
});

// 初始加载评论
const urlParams = new URLSearchParams(window.location.search);
const initialImageId = parseInt(urlParams.get('id')) || 397;
loadComments(initialImageId);
