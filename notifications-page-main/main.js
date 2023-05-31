// document.addEventListener('DOMContentLoaded', function() {
//     const comments = document.querySelectorAll('.comment');
//     const markAllBtn = document.querySelector('.container p');
//     const notiNum = document.querySelector('.container span');
//     notiNum.textContent = '3';

//     markAllBtn.addEventListener('click', function() {
//         comments.forEach((comment) => {
//             comment.classList.add('active');
//         });
//         notiNum.textContent = '0';
//     });

//     comments.forEach((comment) => {
//         comment.addEventListener('click', () => {
//             comment.classList.add('active');
//             notiNum.textContent = String(parseInt(notiNum.textContent) - 1);
//         });
//     });
// });


const comments = document.querySelectorAll('.comment');
const markAllBtn = document.querySelector('.container p');
const notiNum = document.querySelector('.container span');
let notificationCount = 3;

markAllBtn.addEventListener('click', function() {
  comments.forEach((comment) => {
    comment.classList.add('active');
  });
  notificationCount = 0;
  updateNotificationCount();
});

comments.forEach(comment => {
  comment.addEventListener('click', () => {
    comment.classList.add('active');
    notificationCount--;
    updateNotificationCount();
  });
});

function updateNotificationCount() {
  notiNum.textContent = notificationCount;
}
  