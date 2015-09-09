/********************************
 *        this file used for the home page
 *        Author: WinnerJiang
 *        Date: 2015-07-08
 * 
 ********************************/
 
$(document).ready(function(){
	
	
	//Carousel Image
	var x=0;
	var flag="go_to_left";
	
	var carouselImage = function(){
		//for confine
		if(x==-3240){
			flag="go_to_right";
		}
		if(x==0){
			flag="go_to_left";
		}
		if(flag=="go_to_right"){
			$(".imgCarouselArea").animate({left:x},500);
			x+=1080;
		}
		if(flag=="go_to_left"){
			$(".imgCarouselArea").animate({left:x},500);
			x-=1080;
		}
	};
	
	setInterval(carouselImage, 1000);
	
	
	
});