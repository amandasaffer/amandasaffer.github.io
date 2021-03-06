function preload(ele, imgName) {
  var c = new Image(); // create img element for preload
  var ele = '.' + ele; // add hyphen to beginning of class name
  
  // when the image element is loaded, set the background image
  c.onload = function(){
    $(ele).css('background-image','url(/img/' + imgName + ')');
  }

  // wait for image to load though
  c.src = '/img/' + imgName;
}

$(document).ready(function() {
  preload('-spacedojo', 'josh.jpg');
  preload('-sos', 'laura.jpg');
  preload('-tbb', 'couch.jpg');
  preload('-wizard-school', 'card-bg.jpg');
  preload('-betkong', 'esports.jpg');
  preload('-woofgang', 'sonya.jpg');
  preload('-testimonials', 'head.jpg');
  preload('landing', 'head.jpg');
});

document.querySelector( "#site-menu" ).addEventListener( "click", function() {
  this.classList.toggle( "active" );
  document.body.classList.toggle( "menu-open" );
  $('#expanded-menu').fadeToggle(350).css('display', 'flex');
});