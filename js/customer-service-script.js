function checkGdprCookie() {
    if (!Cookies.get('is_gdpr_ibw_accepted') || JSON.parse(Cookies.get('is_gdpr_ibw_accepted')) === null) {
        $('#cookieModal').modal({
        backdrop: 'static',
        keyboard: false
        });
    }
}

$(document).ready(() => {
    checkGdprCookie();
    $(document).on('click', '.accept-gdpr', function () {
        document.cookie = "is_gdpr_ibw_accepted=1; path=/";
        $('#cookieModal').modal('hide');
    });

    //remove flash message
    setTimeout(function () {
        $('.alert').addClass('flash-mess-fadeout');
    }, 5000);
});

$(window).scroll(function (event) {
    let scroll = $(window).scrollTop();

    // hide form ornamnets
    if (scroll > 100) {
        $('.ornaments').css({'opacity': '0', 'visibility': 'hidden'});
    } else {
        $('.ornaments').css({'opacity': '1', 'visibility': 'visible'});
    }

    //form top

    if (scroll > 400) {
        $('.sticky-sidebar').css({'transform': 'translateY(-100px)'});
    } else {
        $('.sticky-sidebar').css({'transform': 'translateY(0px)'});
    }
});