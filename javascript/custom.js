
var menu = function() {
    var btn = document.querySelector('.navigation');
	
	
    if (btn.style.display === "block") {
        btn.style.display = "none";
		
    } else {
        btn.style.display = "block";
		
    }
}
menu();