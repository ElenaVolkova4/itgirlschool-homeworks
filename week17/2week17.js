// let comment = "Я хочу купить viAgra, viAgrA, а так же в комплекте получить xxx видео и ххх видео, и вот такое ХХХ и такое XXX видео"; //проверка
// let comment = "Я хочу купить видео";//проверка

function check() {
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
};
