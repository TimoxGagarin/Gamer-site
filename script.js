$(function () {
    $('div.special-for-you__menu').on('click', 'a:not(.active)', function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });
});