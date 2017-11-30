// // This is where it all goes :)


// $(document).ready(function() {


//   $('.percentage').easyPieChart({
//     animate: 1000,
//     lineWidth: 9,
//     scaleColor: false, 
//     barColor: "#ffffff",
//     trackColor: "#000000",
//     size: 300
//   });


//    $('.reveal').hover(function() {
//       if ($(this).data("reality") === "reality") {
//         $('.bounce').toggleClass('hide');
//         $('.hover_bounce').toggleClass('show');
//       }

//       if ($(this).data("reality") === "augmented") {
//         $('.opacity').toggleClass('hide');
//         $('.hover_opacity').toggleClass('show');
//       }

//       if ($(this).data("reality") === "mixed") {
//         $('.rotate').toggleClass('hide');
//         $('.hover_rotate').toggleClass('show');
//       }

//       if ($(this).data("reality") === "virtual") {
//         $('.rotate_long').toggleClass('hide');
//         $('.hover_rotate_long').toggleClass('show');
//       }
//     });
//   /* Every time the window is scrolled ... */
//   $(window).scroll( function(){
//     /* Check the location of each desired element */
//     $('.block').each( function(i){
//       var bottom_of_object = $(this).position().top + $(this).outerHeight();
//       var bottom_of_window = $(window).scrollTop() + $(window).height();
//       /* If the object is completely visible in the window, fade it it */
//       if( bottom_of_window + 800 > bottom_of_object ){
//         $(this).animate({'opacity':'1'},1000);       
//       }
//     }); 
//   }); 
// });