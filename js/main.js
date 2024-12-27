// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("slide");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}   
//   slides[slideIndex-1].style.display = "block"; 
//   setTimeout(showSlides, 5000);
//   console.log(slideIndex)
// }


//cuenta regresiva
(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let birthday = "04 23, 2025 20:00:00",
      countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

          document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");

          headline.innerText = "El dia a llegado!";
          countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)
  }());
//
//cuenta regresiva



/* Boton ver padrinos */
$(document).ready(function(){

  //Nav Toggle
  $(".hamburger-btn").click(function(){
    $(".header .nav").slideToggle();
  })
  $(".header .nav").click(function(){
    if($(window).width() < 990){
      $(".header .nav").slideToggle();
    }
  })

  //Fixed Header
  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $(".header").addClass("fixed");
    }
    else{
      $(".header").removeClass("fixed");
    }
  })

  //ScrollIT
    $.scrollIt({
      topOffset: -50
    });

// Inicio Abrir Popup Galeria
const wHeight = $(window).height();
$(".gallery-popup .gp-img").css("max-height", wHeight + "px");

let itemIndex = 0;
const totalGalleryItems = $(".gallery-item").length;

$(".gallery-item").click(function(){
  itemIndex = $(this).index();
  $(".gallery-popup").addClass("open");
  $(".gallery-popup .gp-img").hide();
  gpSlideShow();
})// Fin Abrir Popup Galeria

// Inicio Controles next 
$(".gp-controls .next").click(function(){
  if(itemIndex == totalGalleryItems-1){
    itemIndex = 0;
  }
  else{
    itemIndex++;
  }
  $(".gallery-popup .gp-img").fadeOut(function(){
    gpSlideShow();
  })
})// Fin Control inicio 

// Inicio Control prev 
$(".gp-controls .prev").click(function(){
  if(itemIndex == 0){
    itemIndex = totalGalleryItems-1;
  }
  else{
    itemIndex--;
  }
  $(".gallery-popup .gp-img").fadeOut(function(){
    gpSlideShow();
  })
})// Fin Control prev 

// Inicio Mostrar imnagen en popup
function gpSlideShow(){
  const imgSrc = $(".gallery-item").eq(itemIndex).find("img").attr("data-large");
  $(".gallery-popup .gp-img").fadeIn().attr("src", imgSrc);
  $(".gp-counter").text((itemIndex+1) +"/"+ totalGalleryItems);
}// Fin Mostrar imnagen en popup

// Inicio cerrar popup galeria
$(".gp-close").click(function(){
  $(".gallery-popup").removeClass("open");
})// Fin cerrar popup galeria

// Inicio Cerrar Popup galeria al click por fuera del popup
$(".gallery-popup").click(function(event){
  if($(event.target).hasClass("open")){
    $(".gallery-popup").removeClass("open");
  }
})
// Fin Cerrar Popup galeria al click por fuera del popup
})

// Inicio event
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});
//Fin Event

// Automatic show popup after 2 seconds of page load
    const bpop = document.querySelector('.bpop');
    const popup = document.querySelector('.popup');
    const close1 = document.querySelector('.closep1');
    const close2 = document.querySelector('.closep2');
    window.onload = function(){
        setTimeout(function(){
            // bpop.style.display = "block"
            popup.style.display = "block"
            //Add some time delay to show popup
        })
    }
    close1.addEventListener('click', () => {
        bpop.style.display = "none";
    })
    close2.addEventListener('click', () => {
        bpop.style.display = "none";        
    })

var x = document.getElementById("myAudio");     
function playAudio() { 
  x.play(); 
}     
function pauseAudio() { 
  x.pause(); 
} 

// Audio boton flotante
const playerButton = document.querySelector('.player-button'),
audio = document.querySelector('audio'),
playIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
</svg>
`,
pauseIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg>`;

function toggleAudio () {
if (audio.paused) {
audio.play();
playerButton.innerHTML = pauseIcon;
} else {
audio.pause();
playerButton.innerHTML = playIcon;
}
}

playerButton.addEventListener('click', toggleAudio);

audio.ontimeupdate = changeTimelinePosition;
function audioEnded () {
playerButton.innerHTML = playIcon;
}

soundButton.addEventListener('click', toggleSound);


//confirmar por whatsapp
// function openWhatsApp() {
//   const phoneNumber = '6691752536';
//   const url = `https://api.whatsapp.com/send?phone=5216691752536&text=Hola!%20quiero,%20cotizar%20una%20invitación%20digital.`;
//   window.open(url, '_blank');
//  }
//  document.getElementById('confirm-btn').addEventListener('click', openWhatsApp);
//Fin confirmar por whatsapp