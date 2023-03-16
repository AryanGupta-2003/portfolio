
var words = ['Web Developer','App Developer','UI/UX Designer','Web3 Developer'],
    currentStep = 0,
    textEl = document.querySelector('.change-text'),
    oldWord = '';


setTimeout(changeWord, 100);

function changeWord() {
  oldWord = textEl.innerHTML;
  
  // check if there is a word atm or not
  if (oldWord.length < 1) {

    if (currentStep !== words.length -1) {
          currentStep ++;
    }else {
      currentStep = 0;
    }
    addNextWord();
  } else {
    setTimeout(deleteWord, 600);
  }
  
};

function deleteWord() {
  var WordLength = oldWord.length,
      currentWord = textEl.innerHTML,
      currentLength = currentWord.length;
  

  if (currentLength < 1) {
    changeWord();
    return;
  }
  
  textEl.innerHTML = currentWord.substring(0, currentLength - 1);
  
  setTimeout(deleteWord, 150);
}

function addNextWord() {
  var currentWord = textEl.innerHTML,
      currentLength = currentWord.length,
      nextWord = words[currentStep],
      nextWordLength = nextWord.length;
    
  
  if (currentLength === nextWordLength) {
    changeWord();
    return;
  }
  
  textEl.innerHTML = nextWord.substring(0, currentLength + 1);
    
  setTimeout(addNextWord, 200);
  
  
}


/*-------------cursor----------------*/






(function($) { "use strict";
		
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

	
	//About page
	
	$(".about-text").on('click', function () {
		$("body").addClass("about-on");
	});
	$(".about-close").on('click', function () {
		$("body").removeClass("about-on");
	});

	
	//Contact page
	
	$(".contact-text").on('click', function () {
		$("body").addClass("contact-on");
	});
	$(".contact-close").on('click', function () {
		$("body").removeClass("contact-on");
	});

	
	//projects portfolio page
	
	$(".projects").on('click', function () {
		$("body").addClass("projects-on");
	});
	$(".projects-close").on('click', function () {
		$("body").removeClass("projects-on");
	});

	

	
	//Nature portfolio page
	
	$(".nature").on('click', function () {
		$("body").addClass("nature-on");
	});
	$(".nature-close").on('click', function () {
		$("body").removeClass("nature-on");
	});

	
})(jQuery); 




  


  /*-----------------------projects------------------*/

  (function($) {
 
    var SliceSlider = {
      
      /**
       * Settings Object
       */
      settings: {
        delta:              0,
        currentSlideIndex:  0,
        scrollThreshold:    40,
        slides:             $('.slide'),
        numSlides:          $('.slide').length,
        navPrev:            $('.js-prev'),
        navNext:            $('.js-next'),
      },
      
      /**
       * Init
       */
      init: function() {
        s = this.settings;
        this.bindEvents();
      },
      
      /**
       * Bind our click, scroll, key events
       */
      bindEvents: function(){
        
        // Scrollwheel & trackpad
        s.slides.on({
          'DOMMouseScroll mousewheel' : SliceSlider.handleScroll
        });
        // On click prev
        s.navPrev.on({
          'click' : SliceSlider.prevSlide
        });
        // On click next
        s.navNext.on({
          'click' : SliceSlider.nextSlide
        });
        // On Arrow keys
        $(document).keyup(function(e) {
          // Left or back arrows
          if ((e.which === 37) ||  (e.which === 38)){
            SliceSlider.prevSlide();
          }
          // Down or right
          if ((e.which === 39) ||  (e.which === 40)) {
            SliceSlider.nextSlide();
          }
        });
      },
      
      /** 
       * Interept scroll direction
       */
      handleScroll: function(e){
  
        // Scrolling up
        if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) { 
  
          s.delta--;
       
          if ( Math.abs(s.delta) >= s.scrollThreshold) {
            SliceSlider.prevSlide();
          }
        }
   
        // Scrolling Down
        else {
   
          s.delta++;
   
          if (s.delta >= s.scrollThreshold) {
            SliceSlider.nextSlide();
          }
        }
   
        // Prevent page from scrolling
        return false;
      },
  
      /**
       * Show Slide
       */
      showSlide: function(){ 
        // reset
        s.delta = 0;
        // Bail if we're already sliding
        if ($('body').hasClass('is-sliding')){
          return;
        }
        // Loop through our slides
        s.slides.each(function(i, slide) {
  
          // Toggle the is-active class to show slide
          $(slide).toggleClass('is-active', (i === s.currentSlideIndex)); 
          $(slide).toggleClass('is-prev', (i === s.currentSlideIndex - 1)); 
          $(slide).toggleClass('is-next', (i === s.currentSlideIndex + 1)); 
          
          // Add and remove is-sliding class
          $('body').addClass('is-sliding');
  
          setTimeout(function(){
              $('body').removeClass('is-sliding');
          }, 1000);
        });
      },
  
      /**
       * Previous Slide
       */
      prevSlide: function(){
        
        // If on first slide, loop to last
        if (s.currentSlideIndex <= 0) {
          s.currentSlideIndex = s.numSlides;
        }
        s.currentSlideIndex--;
        
        SliceSlider.showSlide();
      },
  
      /**
       * Next Slide
       */
      nextSlide: function(){
        
        s.currentSlideIndex++;
     
        // If on last slide, loop to first
        if (s.currentSlideIndex >= s.numSlides) { 
          s.currentSlideIndex = 0;
        }
   
        SliceSlider.showSlide();
      },
    };
    SliceSlider.init();
  })(jQuery);
  

  /*------skills---------*/


