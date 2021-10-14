const icon = document.querySelector('.icon_img');
const btn = document.querySelector('.go');
let i = 0;
btn.addEventListener('click', ()=>{
    btn.style.pointerEvents = 'none'
    icon.style.transform = 'translateY(-25px)'
    icon.style.offsetPath = ''
    i++;
    switch (i){
        case 1:
            startAnimation(
                'M363 478L335 462.5L322 444.5L312.5 438.5L296 436L270 447',
                'move',
            );
        break;
        case 2:
            startAnimation(
                "M270 447L231.5 471L195.5 490",
                'move1',
            );
        break;
        case 3:
            startAnimation(
                "M195.5 490L174 502L161.5 505.5L153 507.5L140.5 508.5H109.5",
                'move'
            );
        break;
        case 4:
            startAnimation(
                'M109.5 509L89 507.5L73 503L59.5 497.5L48.5 492L29.5 481.5',
                'move1'
            );
        break;
        case 5:
            startAnimation(
                'M29.5 481.5L10.5 469.5L3 461L1.5 451.5L3 445.5L12 439.5L23 434L32 429.5L36.5 426L41.5 418.5',
                'move'
            );
        break;
        case 6:
            startAnimation(
                'M41.5 418.5V411L36 404.5L31 398L32.5 389.5L37.5 378L45.5 370.5L60.5 361',
                'move1'
            )
        break;
        case 7:
            startAnimation(
                'M60.5 361L103 339.5L133.5 324.5',
                'move'
        )
        break;
        case 8:
            startAnimation(
                'M133.5 324.5L149.5 314.5L156.5 305.5V297L151 289L136 277.5L119.5 268L96 253.5',
                'move1'
            )
        break;
        case 9:
            startAnimation(
                'M96 253.5L62.5 234.5L50.5 228L43 221L40.5 214L43 208L48.5 204.5L57 200.5',
                'move'
            )
        break;
        case 10:
            startAnimation(
                'M57 200.5L71 195.5L78 192.5L81 187.5V182.5L75.5 176.5L72.5 172V164V158.5L78 154L83.5 152L91.5 150.5H98L105 152L109 156L120 169',
                'move1'
            )
        break;
        case 11:
            startAnimation(
                'M120 169L137 190.5L152 206.5L158.5 212L163.5 215.5H171.5',
                'move'
            )
        break;
        case 12:
            startAnimation(
                'M171.5 215.5H184.5L195.5 212.5L205.5 208L211.5 201L215 194L216.5 179',
                'move1'
            )
        break;
        case 13:
            startAnimation(
                'M216.5 179L214 166.5L208.5 154.5L201 143.5L199.5 134.5L204.5 128H216.5L230 130H249',
                'move'
            )
        break;
        case 14:
            startAnimation(
                'M248.5 130L259 125L260.5 112L269.5 104L281 96L291 83.5',
                'move1'
            )
        break;
        case 15:
            startAnimation(
                'M291 83.5L295 76.5L294.5 55.5L292.5 42.5L293 30.5L299 18L306 11.5L315 8L324.5 7L339.5 12',
                'move'
            )
        break;
        case 16:
            startAnimation(
                'M339.5 12L358.5 29L370 39.5L378 42L408.5 40L417.5 40.5L422.5 42L424.5 44L424 51',
                'move1'
            )
        break;
        case 17:
            startAnimation(
                'M424 51L408.5 58.5L400 63L395.5 67L394.5 70L395.5 93.5L394.5 99L389 108L383.5 115.5L380.5 120.5L379.5 124',
                'move'
            )
        break;
        case 18:
            startAnimation(
                'M379.5 124L378.5 132.5L382 141.5L389 146L401.5 152L408 158.5L413 166L415.5 175L415 183.5L413 190L405 197.5',
                'move1'
            )
        break;
        case 19:
            startAnimation(
                'M405 197.5L396 206L393 213L392 224L391 238.5L390.5 250L388 257.5L376 273.5',
                'move'
            )
        break;
        case 20:
            startAnimation(
                'M376 273.5L358.5 287L341 299L327 307.5L316.5 314L304.5 320',
                'move1'
            )
        break;
        case 21:
            startAnimation(
                'M304.5 320L289 329.5L279 336L269 343L265 347L263 350.5V357L264 361.5L267 365L272.5 370L279 374.5L285 378L294.5 383',
                'move'
            )
        break;
        case 22:
            startAnimation(
                'M294.5 383L309 391L322.5 397L332.5 401H348L372.5 400.5',
                'move1'
            )
        break;
        case 23:
            startAnimation(
                'M372.5 400.5L382.5 406.5L403.5 418L428 432L444.5 441',
                'move'
            )
        break;
        case 24:
            startAnimation(
                'M444.5 441L481.5 463L496 471.5L512.5 480L522.5 481H532L541.5 473.5',
                'move1'
            )
        break;
        case 25:
            startAnimation(
                'M541.5 473.5L545 464.5L550.5 455.5L559.5 451H570L579.5 455.5L587 461.5L593 470L601 483.5L608.5 489.5L615 493.5L622 495.5H634',
                'move'
            )
        break;
        case 26:
            startAnimation(
                'M634 495.5L644.5 493L665.5 482L687 469L707.5 457L728 443.5',
                'move1'
            )
        break;
        case 27:
            startAnimation(
                'M728 443.5L741.5 436.5L756 425L768.5 416L780 408.5L803 395',
                'move'
            )
        break;
        case 28:
            startAnimation(
                'M803 395L835.5 379.5L851 369.5L866.5 356',
                'move1'
            )
        break;
        case 29:
            startAnimation(
                'M866.5 356L878 348L883 339L886 327.5V315.5L884.5 303L879.5 288.5',
                'move'
            )
        break;
        case 30:
            startAnimation(
                'M879.5 288.5L872 276L864 266.5L854 259.5L843.5 256.5H833.5L821.5 259.5',
                'move1'
            )
        break;
        case 31:
            startAnimation(
                'M760.5 298L744 308.5L721 322L702.5 333.5',
                'move'
            )
        break;
        case 32:
            startAnimation(
                'M760.5 298L744 308.5L721 322L702.5 333.5',
                'move1'
            )
        break;
        case 33:
            startAnimation(
                'M702.5 333.5L690.5 341.5L682 345H675L668 344L661.5 340.5L639.5 324',
                'move'
            )
        break;
        case 34:
            startAnimation(
                'M639.5 324L631 316.5L621 307L614.5 299.5L613 292L615 285.5L621 280L628.5 276.5L643.5 270',
                'move1'
            )
        break;
        case 35:
            startAnimation(
                'M643.5 270L666 259L684 248.5L701 240L715 230.5',
                'move'
            )
        break;
        case 36:
            startAnimation(
                'M715 230.5L724 222.5L730.5 214L735.5 206.5L738 199V188.5L737.5 180L725.5 163',
                'move1'
            )
        break;
        case 37:
            startAnimation(
                'M725.5 163L710 153.5L694.5 150.5L682.5 149L670.5 150.5',
                'move'
            )
        break;
        case 38:
            startAnimation(
                'M670.5 150.5L657.5 157L643 166L630 173.5L614 182L598 188.5',
                'move1'
            )
        break;
        case 39:
            startAnimation(
                'M598 188.5L580 197.5L568.5 203L558 209.5L551.5 215.5L543.5 229',
                'move'
            )
        break;
        case 40:
            startAnimation(
                'M543.5 229L541 242.5L538 252L531 261.5L522.5 267.5L513.5 272.5L500 277',
                'move1'
            )
        break;
        case 41:
            startAnimation(
                'M500 277H483H470L460.5 275L441.5 260.5',
                'move'
            )
        break;
        case 42:
            startAnimation(
                'M441.5 260.5L431 248L424.5 236.5L422 225L424.5 203.5',
                'move1'
            )
        break;
        case 43:
            startAnimation(
                'M424.5 203.5L431.5 187.5L440.5 174L449 161.5L462.5 148',
                'move'
            )
        break;
        case 44:
            startAnimation(
                'M462.5 148L476.5 135.5L490 126L509 114',
                'move1'
            )
        break;
        case 45:
            startAnimation(
                'M509 114L523.5 108L537 102.5L548 96.5L552.5 92.5L554.5 89.5V85L549.5 80.5L543 76.5L538.5 72L535 67L533.5 56.5',
                'move'
            )
        break;
        case 46:
            startAnimation(
                'M533.5 56.5V47L537 35L543 23.5L549 16L558 9L564.5 4',
                'move1'
            )
        break;
        case 47:
            startAnimation(
                'M564.5 4L574.5 1H586.5L596 3.5L605.5 10.5L611 18L615.5 25L618 31.5',
                'move'
            )
        break;
        case 48:
            startAnimation(
                'M618 31.5L619.5 42.5L618 51L612.5 57.5L604 62L593.5 68L587 74.5L583 82L580.5 89.5L579.5 96.5V102L582 107L587 110.5L591 111.5',
                'move1'
            )
        break;
        case 49:
            startAnimation(
                'M591 111.5L600.5 110.5L611.5 103.5L617 94.5L623 84L629.5 75.5L642.5 65L651 60.5L658.5 58.5L670.5 56.5',
                'move'
            )
        break;
        case 50:
            startAnimation(
                'M670.5 56.5L682 57.5L703.5 65L717.5 73L726 78.5L731 84V89.5L730 95L728.5 99.5V104L730 106L733.5 109L738 111',
                'move1'
            )
        break;
        case 51:
            startAnimation(
                'M738 111L743 112.5H750L753.5 110L757 107L761 101L765 94.5L770.5 88L775 83.5L779.5 80.5L784.5 79.5',
                'move'
            )
        break;
        case 52:
            startAnimation(
                'M784.5 79.5H792.5H800H804.5L812 81L813 83.5L814.5 87V90.5V93L813 96.5L808.5 100L800.5 104L794.5 107L789.5 109.5L786 112.5L784.5 118L786 123L789.5 126L793 128L796 131L797 135.5L799 140L803.5 144.5',
                'move1'
            )
        break;
        
    }
    setTimeout(()=>{
        btn.style.pointerEvents = '';
    }, 2000)

})
function startAnimation(coordinates, nameAnimation){
    icon.style.offsetPath = `path('${coordinates}')`;
    icon.style.animation = `${nameAnimation} 2s linear forwards`;
}

//Слайдер и добавление нового элемента

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let slider = document.querySelector('.slider_wrapper-inner');
let slides = document.querySelector('.slider')
let allSlide = document.querySelectorAll('.slider_wrapper-item');
let offset = 0;
let itemSize = 60;
// itemSize устанавливает фиксированый размер элемента слайдера с учётом отступа
slider.style.width = allSlide.length * itemSize +'px'
nextBtn.addEventListener('click', ()=>{
    if(offset == +(slides.offsetWidth - (allSlide[0].offsetWidth + 10))){
        offset = 0
    }else{
        offset += allSlide[0].offsetWidth + 10;
    }
    slider.style.transition = '.5s ease-in-out'
    slider.style.transform = `translateX(-${offset}px)`
})
prevBtn.addEventListener('click',()=>{
    if(offset <= 0){
        offset = +(slides.offsetWidth - (allSlide[0].offsetWidth + 10))
    }else{
        offset -= allSlide[0].offsetWidth + 10;
    }
    slider.style.transition = '.5s ease-in-out'
    slider.style.transform = `translateX(-${offset}px)`
})


const showIcon = document.querySelector('.rating_icon');
const closeIcon = document.querySelector('.rating_close');
let listRating = document.querySelector('.rating');
let shadow = document.querySelector('.shadow');

showIcon.addEventListener('click', ()=>{
    listRating.style.top = '50%';
    shadow.style.background = 'rgba(30,30,30,.52)'
})
closeIcon.addEventListener('click', ()=>{
    listRating.style.top = '-100%'
    shadow.style.background = ''
})
