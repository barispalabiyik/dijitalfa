/**
   * Preload
   */
 window.onload = function(){
    var preloader = document.querySelector('.preloader-wrapper');
    var body = document.querySelector('body');
    
    function fadeOut(){
     preloader.classList.add("d-none");
     body.classList.remove("loading");
    }
    setTimeout(fadeOut, 0);
  }