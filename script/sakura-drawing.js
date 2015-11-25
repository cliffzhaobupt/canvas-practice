(function (){
  var sakuraImg = new Image();

  function init() {
    sakuraImg.src = 'image/sakura.png';
    sakuraImg.onload = function() {
      window.requestAnimationFrame(draw);
    };
  }

  function draw() {
    var sakuraDrawing = document.getElementById('sakuraDrawing');

    if (sakuraDrawing.getContext) {
      var context = sakuraDrawing.getContext('2d');
      var time = new Date();

      context.save();

      context.clearRect(0, 0, sakuraDrawing.width, sakuraDrawing.height);
      context.translate(25, 24);
      context.rotate(((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds());
      context.drawImage(sakuraImg, -15, -15);

      context.restore();
      window.requestAnimationFrame(draw);
    }
  }

  init();  
})();
