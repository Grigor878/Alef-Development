"use strict";

//add class marked to main_heart onclick
$('.main_heart').click(function () {
    $(this).toggleClass('marked');
    alert('Добавленo в избранное');
});

//console onclick main_btn
$('.main_btn').click(function () {
    console.log("Куплен товар");
});

//nuyny bayc mi hatna menak anum
// document.querySelector('.main_heart').onclick = function () {
//     this.style.opacity = '1';
//     alert('добавленo в избранное');
// }

// $(document).ready(function(e) {
//     $('#pulsanteOpera').click(function(){
// $(this).toggleClass('pulsante').toggleClass('pulsanteRimuovi');
//     });
// $('#thumbDown').click(function(){
//         if($(this).css('opacity')==0.6)
//     $(this).css('opacity','1.0');
//     else
//     $(this).css('opacity','0.6');
// });
// });

// $('#thumbDown, #thumbUp').click(function(){
//     $(this).toggleClass('faded opaque');
// });

// $('#thumbDown, #thumbUp').click(function(){
//     $(this).css('opacity', function(i,o){
//         return parseFloat(o).toFixed(1) === '0.6' ? 1 : 0.6;
//     });
// });


//
// function getSelectValue() {
//     var selectedValue = document.getElementById("list").value;
//     console.log(selectedValue);
// }
// getSelectValue();


//
// $(document).ready(function () {
//     $(".main_value").on('change', function () {
//         $(".main_card").hide();
//         $("#" + $(this).val()).fadeIn(700);
//     }).change();
// });


// search with select-option by price
$(document).ready(function () {
    $(".main_value").change(function () {
        $(this).find("option:selected").each(function () {
            var optionValue = $(this).attr("value");
            if (optionValue) {
                $(".showall").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else {
                $(".main_card").hide();
            }
        });
    }).change();
});


// search with select-option by age
// $(document).ready(function () {
//     $(".main_age-select").change(function () {
//         $(this).find("option:selected").each(function () {
//             var optionValue = $(this).attr("value");
//             if (optionValue) {
//                 $(".show").not("." + optionValue).hide();
//                 $("." + optionValue).show();
//             } else {
//                 $(".main_card").hide();
//             }
//         });
//     }).change();
// });


//isShowBtn & isShowBtn_hide
window.onload = () => {

    const scrollBtn = document.querySelector('.isShowBtn')

    window.onscroll = () => {
        if (window.scrollY > 700) {
            scrollBtn.classList.remove('isShowBtn_hide');
        } else if (window.scrollY < 700) {
            scrollBtn.classList.add('isShowBtn_hide');
        }
    };

    scrollBtn.onclick = () => {
        window.scrollTo(0, 0);
    };
};
