
//Всплывающее окно теории
$(function() {
$('#popup,#hide-layout').hide(); // скрыли фон и всплывающее окно
$('#hide-layout').css({opacity: .5}); // кроссбраузерная прозрачность
alignCenter($('#popup')); // центрировали окно
$(window).resize(function() {
  alignCenter($('#popup')); // центрирование при ресайзе окна
})
$('#btn-theory').click(function() {
  $('#hide-layout, #popup').fadeIn(300); // плавно открываем
})
$('#popup-theory-btn-close, #hide-layout').click(function() {
  $('#hide-layout, #popup').fadeOut(300); // плавно скрываем
})
// функция центрирования
function alignCenter(elem) {
  elem.css({
    left: '35%', // получаем координату центра по ширине
    top: '45' + '%' // получаем координату центра по высоте
  })
}
})
