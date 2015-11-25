(function (){
  function init() {
    var sakuraDrawing = document.getElementById('sakuraDrawing');
    window.requestAnimationFrame(draw);
  }

  function draw() {
    var mainDrawing = document.getElementById('mainDrawing');

    if (mainDrawing.getContext) {
      var context = mainDrawing.getContext('2d');
      var time = new Date();

      context.save();

      context.clearRect(0, 0, mainDrawing.width, mainDrawing.height);
      context.translate(100, 100);
      context.rotate(((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds());

      for (var i = 0 ; i < 16 ; i ++) {
        var angle = Math.PI * 2 * i / 16;
        var radius = 75;
        var sakuraX = Math.sin(angle) * radius - 25;
        var sakuraY = Math.cos(angle) * radius - 24;
        context.drawImage(sakuraDrawing, sakuraX, sakuraY);
      }

      context.restore();
      window.requestAnimationFrame(draw);
    }
  }

  init();
})();
