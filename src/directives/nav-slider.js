angular.module('nav-slider', [])
  .directive('draggableNavigation', function () {
      return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
          
          function buildSlide(){
            
            var container = document.getElementById("sliding-nav-menu");
            dragend = new Dragend(container, {
              direction: 'horizontal',
              afterInitialize: function() {
                container.style.visibility = "visible";
                container.direction = 'horizontal';
              }
            });
          }
         
          buildSlide();
        
        },
      };
     });

