	/*旋转js代码*/
 window.onload = function () {
   (function() {
   var $ = function(selector) {
      return document.querySelector(selector);
   };
   var $css3Transform = function(element, value) {
      var arrPriex = ["O", "Ms", "Moz", "Webkit", ""], length = arrPriex.length;
      for (var i=0; i < length; i+=1) {
         element.style[arrPriex[i] + "Transform"] = value;
      }
   };
   var eleDetail = $("#matrixDetail"),
       eleRotate = $("#matrixRotate"),
       eleBox = $("#matrixBox");
   
   if (eleDetail && eleRotate && eleBox) {
      eleRotate.addEventListener("change", function() {
         var maxVal = this.getAttribute("max");
         var minVal = this.getAttribute("min");
         var value = this.value;
         if (value < minVal) {
            value = minVal;
            this.value = minVal;
         }
         if (value > maxVal) {
            value = maxVal;
            this.value = maxVal;
         }
         var cosVal = Math.cos(this.value * Math.PI / 180), sinVal = Math.sin(this.value * Math.PI / 180);
         var valTransform = 'matrix('+ cosVal.toFixed(3) +','+ sinVal.toFixed(3) +','+ (-1 * sinVal).toFixed(3) +','+ cosVal.toFixed(3) +',0,0)'
         eleDetail.innerHTML = '目前属性值为：' + valTransform;
         $css3Transform(eleBox, valTransform);
      });   
   }  
})();


}
