$(document).ready(function(){
		$("#gameoptions").show(); 
		$("#coloroptions").hide(); 
		$("#numberoptions").hide();

		$(".back").click(function(){
			$("#numberoptions").hide();
			$("#coloroptions").hide();
			$("#gameoptions").show(); 
			$("body").css("background","white");
			$(".selection").css('min-height', '400px');
			$(".message-box").text("You are right! You took "  + guess_count + " guesses!").hide();
			$(".message-box").append("<button type='button' class='btn btn-success' id='field'>Play Again</button>").hide();
			$(".number-results").text("");
			target=0;
			guess_count = 0;
			colorVal=0;
		});

		document.getElementById('colorgame').onclick = function(){
			$("#gameoptions").hide(); 
			$("#coloroptions").show(); 
			$(".selection").css('min-height', '750px');
			var colorArr = ["aqua","black","blue","gold","gray","green","magenta","navy","orange","red","white","yellow"];
			var target = colorArr[Math.floor(Math.random() * colorArr.length)];
			var guess_input_text;
			var colorVal="";
			var finished = false;
			var guess_count = 0;
			var selector = '.box';
			var elems = document.querySelectorAll(selector);
			var makeActive;
			var checkfunction;
			

			$(".message-box").text("Which colour is the right???");
			$(".message-box").show();


			makeActive = function () {
				for (var i = 0; i < elems.length; i++)
				    elems[i].classList.remove('active');

				    this.classList.add('active');	    
			};

			for (var i = 0; i < elems.length; i++){
				elems[i].addEventListener('mousedown', makeActive);
			}
				

			$(".boxname").click(function(){
				colorVal=this.innerHTML;
				console.log(colorVal);
				guess_count++;
				$(".message-box").css("background",colorVal);
								
					if(colorVal < target){
						$(".message-box").text("Your input is alphabetically higher than mine!");
						
					}else if(colorVal > target){
						$(".message-box").text("Your input is alphabetically lower than mine!");
						
					}else if(colorVal === target){
						myBody=document.getElementsByTagName("body")[0];
						myBody.style.background = target;
						$(".message-box").text("You are right! You took "  + guess_count + " guesses!");
						$(".message-box").append("<button type='button' class='btn btn-success' id='field'>Play Again</button>");

						$("#field").click(function(){
							$("#coloroptions").hide();
							$("#gameoptions").show(); 
							$("body").css("background","white");
							$(".selection").height(400);
							$(".message-box").text("You are right! You took "  + guess_count + " guesses!").hide();
							$(".message-box").append("<button type='button' class='btn btn-success' id='field'>Play Again</button>").hide();
							target=0;
							guess_count = 0;
							colorVal=0;
						});
					}				
			});
		};
		document.getElementById('numbergame').onclick = function(){
			$("#gameoptions").hide(); 
			$("#coloroptions").hide(); 
			$("#numberoptions").show();
			$(".selection").height(550);
			var guess_count = 0;
			$(".number-results").text("");

			var random_number=Math.floor(Math.random()*100);
			var user_input;

			$(".number-submit").click(function(){
				guess_count ++;
				user_input=$('#search').val();
				console.log(user_input);
				if(user_input > 100 || user_input < 0){
					$(".number-results").text("The random number is between 1 and 100");
					$(".number-results").css("color","red");
				}
				else if(random_number > user_input){
					$(".number-results").text("The random number is highter than your input");
					$(".number-results").css("color","red");
				}else if(random_number < user_input){
					$(".number-results").text("The random number is lower than your input");
					$(".number-results").css("color","red");
				}else if(random_number == user_input){
					$(".number-results").text("Congratulations!!! You are right!! You find the number!! You took "  + guess_count + " guesses!!");
					$(".number-results").css("color","green");
				}
			});
		};
});