
window.addEventListener('scroll',function(){
	var header= document.querySelector('header');
	header.classList.toggle("sticky", window.scrollY > 0);
			});
				
	function toggleMenu(){
		var menuToggle = document.querySelector('.toggle');
		var menu = document.querySelector('.menu');
		menuToggle.classList.toggle('active');
		menu.classList.toggle('active');
			}

	var input=document.querySelectorAll("input");
	var btn=document.querySelector("button");

		function UserName(){
		  var name=/^[A-Za-z]{3,20}[ ][A-Za-z]{3,20}$/;
				if(name.test(input[0].value))
			 	 console.log(input[0].value);
			 	
			  else
				alert("Name Is required");
				}

			btn.addEventListener("click",UserName);
										
			btn.addEventListener("click",()=>{
		        var key =/^[A-Za-z0-9._]{3,20}@[A-Za-z]{3,20}[.][A-Za-z.]{3,6}$/;
				  if(key.test(input[1].value))
				    console.log(input[1].value);
				  else
					alert("Email is Required required")    
					                });
									

			
