// let comment = "Я хочу купить viAgra, viAgrA, а так же в комплекте получить xxx видео и ххх видео, и вот такое ХХХ и такое XXX видео"; //проверка
// let comment = "Я хочу купить видео";//проверка




// НЕ ПОЛУЧАЕТСЯ СОХРАНЯТЬ все комментарии, сохранился один и он же выводится при обновлении страницы. Как-то надо вводимые сообщения собирать в массив, а потом его выводить.. или наоборот все сохраняемое выводить в массив.. короче, не докурутила, не додумала



// DOMContentLoaded - на загрузку страницы
document.addEventListener('DOMContentLoaded', function(event) {
    let savedUserName = localStorage.getItem('author');
    let savedText = JSON.parse(localStorage.getItem('text_messages'));

        if (savedUserName !=null)
    {
        document.getElementById('user_name').value = savedUserName; 
    }

    if (savedText !=null)
    {
        document.getElementById('comments').innerHTML = savedText; 
    }
    });
    


function check() {
    let user_name = document.getElementById('user_name').value
    let comment = document.getElementById('comment').value;
if (comment.search(/viagra/i) > -1 || comment.search(/xxx/i) > -1 || comment.search(/ххх/i) > -1) {
    let change = "***"; //на что заменяем
    let commentRight = comment.replace(/viagra/ig, change);
    let commentRight2 = commentRight.replace(/xxx/ig, change);
    let commentRight3 = commentRight2.replace(/ххх/ig, change);
    document.getElementById('comments').innerHTML = commentRight3;
}
else {
    document.getElementById('comments').innerHTML = comment;
}
document.getElementById('comment').value = "";

if (localStorage.getItem('author')===null)// есть ли в локальном хранилище имя пользоватея
{
    localStorage.setItem('author', user_name);//то добавляем имя, внесенное пользователем
};



let savedText = [];
savedText.push(comment);


if (localStorage.getItem('text_messages')===null)// есть ли в локальном хранилище сообщения
{
    localStorage.setItem('text_messages', JSON.stringify(savedText));//то добавляем текст, внесенный пользователем
};
};