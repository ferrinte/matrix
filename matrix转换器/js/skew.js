/******斜切******/
 window.onload = function () {
	(function() {
    var $ = function(selector) { return document.querySelector(selector); };
    var $css3Transform = function(element, value) {
        var arrPriex = ["O", "Ms", "Moz", "Webkit", ""], length = arrPriex.length;
        for (var i=0; i < length; i+=1) {  element.style[arrPriex[i] + "Transform"] = value;  }
    };
    var eleRangeX = $("#matrixSkewX"), eleRangeY = $("#matrixSkewY"),
        eleDetail = $("#matrixDetail"), eleBox = $("#matrixBox");
    
    if (eleDetail && eleRangeX && eleRangeY && eleBox) {
        var arrRange = [eleRangeX, eleRangeY];
        for (var start=0; start<2; start+=1) {
            arrRange[start].addEventListener("change", function() {
                var maxVal = this.getAttribute("max"), minVal = this.getAttribute("min"), value = this.value;
               if (value - minVal < 0) {
                    value = minVal;
                    this.value = minVal;
                }
                if (value - maxVal > 0) {
                    value = maxVal;
                    this.value = maxVal;
                }
                var tanValY = Math.tan(eleRangeY.value * Math.PI / 180), tanValX = Math.tan(eleRangeX.value * Math.PI / 180);
                var valTransform = 'matrix(1,'+ tanValY.toFixed(3) +','+ tanValX.toFixed(3) +',1,0,0)';
                eleDetail.innerHTML = '目前属性值为：' + valTransform;
                $css3Transform(eleBox, valTransform);
            });    
        }     
    }    
})();


 }