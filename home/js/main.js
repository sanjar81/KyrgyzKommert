function showMenu() {
    if (window.screen.width<993) {
        document.getElementById('left-menu').classList.toggle("left-menu");
        if (document.getElementById('left-menu').classList.contains('left-menu')) {
            document.getElementById('democollapse').innerHTML = '&times';
        }

        else {
            document.getElementById('democollapse').style.backgroundColor = 'white';
            document.getElementById('democollapse').innerHTML = '<span class="icon-humburger"></span>\n' +
                '                        <span class="icon-humburger"></span>\n' +
                '                        <span class="icon-humburger"></span>'
        }
    }

    else {
        document.getElementById('left-menu').classList.remove('left-menu');
    }

}





//
// <div class="col-xs-12 col-sm-6 text-left">
//     <li><a href="../index.html" class="font-family-regular"><img src="../images/icons/home.png"
// alt="">Главная</a>
//     </li>
//     <li><a href="../htmls/lenta.html" class="font-family-regular"><img
// src="../images/icons/speaker.png" alt="">Лента</a>
//     </li>
//     <li><a href="../htmls/recourses.html" class="font-family-regular"><img
// src="../images/icons/library.png"
// alt="">Учебный материал</a></li>
// <li><a href="#" class="font-family-regular"><img src="../images/icons/pay.png" alt="">Банк
// вапросов</a>
// </li>
// <li><a href="#" class="font-family-regular"><img src="../images/icons/examine.png" alt="">Экзамены</a>
//     </li>
//     <li><a href="#" class="font-family-regular"><img src="../images/icons/chat.png" alt="">Отправит
// отзыв</a>
// </li>
// </div>
// <div class="col-xs-12 col-sm-6">
//     <li><a href="#"><img src="../images/icons/family.png" alt="">Пользователи</a></li>
// <li><a href="#"><img src="../images/icons/comment.png" alt="">Добавит ленту</a></li>
// <li><a href="#"><img src="../images/icons/drawer.png" alt="">Добавит тему</a>
// </li>
// <li><a href="#"><img src="../images/icons/board.png" alt="">Добавит учебный материал</a>
// </li>
// <li><a href="#"><img src="../images/icons/paper.png" alt="">Создать/Редактировать вопрос</a>
// </li>
// <li><a href="#"><img src="../images/icons/document.png" alt="">Создать (ccылку) practice
// quiz</a></li>
// <li><a href="#"><img src="../images/icons/checked.png" alt="">Создать (ccылку) practice
// quiz</a></li>
//
// </div>