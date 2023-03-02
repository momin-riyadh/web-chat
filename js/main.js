const leftItems = document.querySelectorAll('.g-chat-left li');
const contentItems = document.querySelectorAll('.g-chat .content');


leftItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove active class from all list items
    leftItems.forEach(item => item.classList.remove('active'));

    // Add active class to clicked item
    item.classList.add('active');

    // Show corresponding content item and hide others
    contentItems.forEach(content => {
      if (content.id === item.dataset.target) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  });
});


;(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const chatHistory = document.querySelector('.g-chat-history');
    if (chatHistory) {
      chatHistory.scrollTop = chatHistory.scrollHeight;
    }
  })
})();
