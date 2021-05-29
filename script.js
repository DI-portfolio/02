////////// ローディング画面 //////////
$(window).on('load', function() {
    $('#loading').delay(3000).fadeOut('slow');
    
})

////////// ヘッダー　トップ画像スライダー //////////
$('.header-slider-image').slick( {
    fade: true,
    autoplaySpeed: 2800,
    speed: 2000,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
});

////////// 商品紹介 //////////
//　商品画像スライダー
$('.items-list-slider').slick( {
    fade: true,
    autoplaySpeed: 3000,
    speed: 1800,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
});


// 商品画像　左の画面外から右にスライドして現れるアニメーション
const itemsList01Top = $('.items-image-list01').offset().top+50,
      itemsList02Top = $('.items-image-list02').offset().top+50,
      itemsList03Top = $('.items-image-list03').offset().top+50,
      aboutTop = $('.about').offset().top+50,
      accessTop = $('.access').offset().top;

function items01Anime() {// 商品画像01
    let scroll = $(window).scrollTop();
    if (scroll >= itemsList01Top - windowHeight
        && scroll < itemsList03Top - windowHeight) {
        $('.items-image-list01').addClass('itemsRightMove');
        $('.items-image-list01').removeClass('itemsLeftMove');
        $('.items-text01').addClass('textAppear');
    } else if (scroll >= itemsList03Top - windowHeight) {
        $('.items-image-list01').removeClass('itemsRightMove');
        $('.items-image-list01').addClass('itemsLeftMove');
        $('.items-text01').removeClass('textAppear');
    } else if ($('.items-image-list01').hasClass('itemsRightMove')
        && $('.items-text01').hasClass('textAppear')) {
        $('.items-image-list01').removeClass('itemsRightMove');
        $('.items-image-list01').addClass('itemsLeftMove');
        $('.items-text01').removeClass('textAppear');
    }
}

function items02Anime() {// 商品画像02
    let scroll = $(window).scrollTop();
    if (scroll >= itemsList02Top - windowHeight
        && scroll < aboutTop - windowHeight) {
        $('.items-image-list02').addClass('itemsRightMove');
        $('.items-image-list02').removeClass('itemsLeftMove');
        $('.items-text02').addClass('textAppear');
    } else if (scroll >= aboutTop - windowHeight) {
        $('.items-image-list02').removeClass('itemsRightMove');
        $('.items-image-list02').addClass('itemsLeftMove');
        $('.items-text02').removeClass('textAppear');
    } else if ($('.items-image-list02').hasClass('itemsRightMove')
        && $('.items-text02').hasClass('textAppear')) {
        $('.items-image-list02').removeClass('itemsRightMove');
        $('.items-image-list02').addClass('itemsLeftMove');
        $('.items-text02').removeClass('textAppear');
    }
}

function items03Anime() {// 商品画像03
    let scroll = $(window).scrollTop();
    if (scroll >= itemsList03Top - windowHeight
        && scroll < accessTop - windowHeight) {
        $('.items-image-list03').addClass('itemsRightMove');
        $('.items-image-list03').removeClass('itemsLeftMove');
        $('.items-text03').addClass('textAppear');
    } else if (scroll >= accessTop - windowHeight) {
        $('.items-image-list03').removeClass('itemsRightMove');
        $('.items-image-list03').addClass('itemsLeftMove');
        $('.items-text03').removeClass('textAppear');
    } else if ($('.items-image-list03').hasClass('itemsRightMove')
        && $('.items-text03').hasClass('textAppear')) {
        $('.items-image-list03').removeClass('itemsRightMove');
        $('.items-image-list03').addClass('itemsLeftMove');
        $('.items-text03').removeClass('textAppear');
    }    
    
}

/////////////////////////////////////////////////////
////////// 下記にファンクション出力の記述有り　//////////
/////////////////////////////////////////////////////


// 所定のスクロール値で途中で右の画面外から
// 下へのスクロールを促す矢印が現れる、または右の画面外へ移動
let itemsTop = $('.items').offset().top-100,
    footerTop = $('footer').offset().top-100,
    windowHeight = $(window).height();

function navScrollArrow() {
    let scroll = $(window).scrollTop();
    if (scroll >= itemsTop && scroll < footerTop - windowHeight) {
        $('#scrolldown-nav').removeClass('RightMove');
        $('#scrolldown-nav').addClass('LeftMove');
    } else if (scroll >= footerTop - windowHeight) {
        $('#scrolldown-nav').removeClass('LeftMove');
        $('#scrolldown-nav').addClass('RightMove');
    } else if ($('#scrolldown-nav').hasClass('LeftMove')) {
        $('#scrolldown-nav').removeClass('LeftMove');
        $('#scrolldown-nav').addClass('RightMove');    
    }
}

// ページの一番下辺りまでスクロールすると
// 下の画面外からトップへ移行できる矢印が現れる、
//そこから上にスクロールすると下の画面外へ移動
function scrollTopArrow() {
    let scroll = $(window).scrollTop();
    if (scroll >= footerTop - windowHeight) {
        $('.scroll-top-arrow').removeClass('DownMove');
        $('.scroll-top-arrow').addClass('UpMove');
    } else {
        $('.scroll-top-arrow').removeClass('UpMove');
        $('.scroll-top-arrow').addClass('DownMove');
    }
}

// サイドナビの項目クリック時のページ内リンク
$('#sticky-nav-list a, #open-nav-list a').click(function() {
    let elmHash = $(this).attr('href');
    let pos = $(elmHash).offset().top;
    $('body, html').animate( {scrollTop: pos}, 500);
        return false;
});


////////// 画面幅768px以下時 //////////
// ハンバーガーメニュークリック時にナビが現れる
$('.open-btn').click(function() {
    $(this).toggleClass('active');
    $('.open-nav').toggleClass('open-nav-active');
});
$('.open-nav a').click(function() {
    $('.open-btn').removeClass('active');
    $('.open-nav').removeClass('open-nav-active');
});

// ヘッダーのスクロールを促す矢印(画面幅768px以下時はフィックスして色変更)
// 所定のスクロール値で途中で右の画面外から
// 下へのスクロールを促す矢印が現れる、または右の画面外へ移動
let windowWidth = $(window).width();

function respoScrollArrow() {
    let scroll = $(window).scrollTop();
    if (windowWidth <= 768) {
        if (scroll >= footerTop - windowHeight) {
            $('#scrolldown').removeClass('respoLeftMove');
            $('#scrolldown').addClass('respoRightMove');
        } else {
            $('#scrolldown').removeClass('respoRightMove');
            $('#scrolldown').addClass('respoLeftMove');
        }
    }
}

$('.scroll-top, .respo-scroll-top').click(function() {// クリックでトップへ移動
    $('body, html').animate({
        scrollTop: 0
    }, 700);
    return false;
});

$(window).scroll(function() {
    navScrollArrow();
    scrollTopArrow();
    respoScrollArrow();
    items01Anime();
    items02Anime()
    items03Anime()
});
$(window).on('load', function() {
    navScrollArrow();
    scrollTopArrow();
    respoScrollArrow();
    items01Anime();
    items02Anime()
    items03Anime()
});

