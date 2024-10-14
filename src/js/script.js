$(function () {
    const offset = 149;

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 30) {
            $('body').addClass('navbar-scrolled');

        } else {
            $('body').removeClass('navbar-scrolled');
        }

    });

    $('.navbar li a').click(function (event) {
        event.preventDefault();
        el = $($(this).attr('href'));  // Keep it as a jQuery object

        const y = el.offset().top - offset;

        window.scrollTo({ top: y, behavior: 'smooth' });

    });
});
