$(function(){
    var $head=$('.head');
    $('.closebtn',$head).on('click',function(){
        $head.css('display','none');
    })

    $('.hiSlider3').hiSlider({
        isFlexible: true,
        isSupportTouch: true,
        titleAttr: function(curIdx){
            return $('img', this).attr('alt');
        }
    });

    var $news=$('.news-right ul');
    setInterval(function(){
        $('li:first',$news).appendTo('.news-right ul');
    },1000)

    $('.gotop').on('click',function(){
        $('html,body').animate({scrollTop:0});
        return false;
    })
})
