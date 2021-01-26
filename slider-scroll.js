
    const slider= $('.slider');
  

    function onSliderAfterChange(event, slick, currentSlide) {
      $(event.target).data('current-slide', currentSlide);
    }
    
    function onSliderWheel(e) {
      var deltaY = e.originalEvent.deltaY,
        $currentSlider = $(e.currentTarget),
        currentSlickIndex = $currentSlider.data('current-slide') || 0;
      
      if (
        // проверка скролла вверх
        (deltaY < 0 && currentSlickIndex == 0) ||
        // проверка скролла вниз
        (deltaY > 0 && currentSlickIndex == $currentSlider.data('slider-length') - 1)
      ) {
        return;
      }
  
      e.preventDefault();
  
      if (e.originalEvent.deltaY < 0) {
        $currentSlider.slick('slickPrev');
      } else {
        $currentSlider.slick('slickNext');
      }
    }
    
    slider.each(function(index, element) {
      var $element = $(element);
      // set the length of children in each loop
      // but the better way for performance is to set this data attribute on the div.slider in the markup
      $element.data('slider-length', $element.children().length);
    })
    
    

    .slick({
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      arrows: false
    })
    .on('afterChange', onSliderAfterChange)
    .on('wheel', onSliderWheel);
  
  
  slider.on('wheel', (function(e) {
    e.preventDefault();
  
    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickPrev');
    } else {
      $(this).slick('slickNext');
    }
  }));

//


  

  