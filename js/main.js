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
      const contents = document.querySelectorAll('.content');
      const chatLists = document.querySelectorAll('#open-chat ul li');
      if (content.id === item.dataset.target) {
        content.classList.add('active');

        chatLists.forEach((chatList, index) => {
          chatList.addEventListener('click', function () {
            contents[index].scrollIntoView({behavior: "smooth", block: "end"});
          });
        });


      } else {
        content.classList.remove('active');
      }
    });
  });
});

//
// ;(function () {
//   document.addEventListener('DOMContentLoaded', () => {
//     const contents = document.querySelectorAll('.content');
//     if (contents) {
//       contents.forEach((content)=>{
//         content.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
//       })
//
//     }
//   })
// })();
