"use strict"

$(document).ready(function()
{
	var resultList = $("#resultList");
	resultList.text("Injected using jquery");
 	var toggleButton = $("#toggleButton");
	toggleButton.on("click",function(){
	console.log("Button clicked");
	resultList.toggle();
		if(toggleButton.text() === "Hide"){
		toggleButton.text("Show");
		}else{
		toggleButton.text("Hide");
		}
	});

	//hamara code break na ho isliye isko empty kara he	
	resultList.empty();

	$.each(results,function(i,item)
	{
		var newResult = $("<div class='result'>" +
			"<div class='title'>" + item.title + "</div>"+
			"<div>" + " Level : " + item.level + "</div>" +
			"<div>" + "Total videos : " + item.total_videos + "</div>" +
			"<div>" + "Instructor : " + item.instructor + "</div>" +
			"</div>");
		resultList.append(newResult);
	});

		// newResult.hover(function(){
		// 	console.log("Hover In");
		// }, function()
		// {
		// 	console.log("Hover Out");
		// }
		// )
		// })

		newResult.hover(function(){
			$(this).css("background-color","lightgray");
			$(this).css("color","darkblue");
			$(this).css("border-color","blue");
		}, function()
		{
			$(this).css("background-color","transparent");
			$(this).css("color","brown");
			$(this).css("border-color","#999");
		}
		)

		})

	$("#loginForm").on("submit", function()
	{
		$.post("/api/login",{},function(){
			console.log("success ::" +data);
		})
		.fail(function(data){
		     console.log("something BAD happened!")
		})
		.done (function(){

		})
		return false;
	})


	}




// var resultsDiv=document.getElementById("results");
// resultsDiv.innerHTML="<p> Message injected by JS </p>";
// console.log(resultsDiv);
// console.log(x);
// var x --> window
// Global scope
// scope - Creation,Deletion
// Global -> window

var results = "some imp object";

// function test(){
// 	var y = "Hi";
// 	var z = "Where am I ?";
// 	console.log("Value of Y:" +y);
// }
// test();
// // console.log(z);
// var result = "another imp value";

// comparison
// == value check 
// === strict equality operator memory me ja kar mameory ki value check karta he
// !=
// function is an Object

// function showMessage(msg){
// 	console.log(msg);
// }
// showMessage("Hello World");

//polymorphism -Overloading

// function showMessage(msg1,msg2){
// 	console.log(msg1 + "," + msg2);

// }
//defining
// function showMeCallback(msg,callback){
// 	console.log(msg);

// 	callback(); 
// }
// //calling
// showMeCallback("You are crazy!",function(){
// 	console.log("I am in callback");
// });

// var globalVar="Global something";
// function doSomething(){
// 	console.log("Accessing Global Var:"+globalVar);
// 	var someMsg="something";
// 	console.log(someMsg);

// 	showMeCallback("with Closure",function (){
// 	showMessage("showMe with Closure ():"+someMsg);	
// 	})	
// }
// doSomething();

//object literal(k,v)
// var result={
// 	title:"Java",
// 	instructor:"Saurabh",
// 	level:"Beginner"
// };

// console.log(result);
// console.log(result.title);

// result.ShowTotal =function(a,b){
// 	return a+b;
// }


// results.push(result);

// looping
// for(var i=0; i< results.length; i++){
// 	console.log(results[i]);
// }
















javascript:function E() {f0 = document.forms['addPassengerForm'] || document.forms['jpBook'] || document.forms['jpform'];function F1(el, val) {if (document.getElementById(el) && val != '') document.getElementById(el).value = val; }if (document.forms['loginFormId']) {};if (document.forms['jpform']) {F1('ticketType', 'E_TICKET');};if (f0['addPassengerForm:psdetail:0:psgnName']) f0['addPassengerForm:psdetail:0:psgnName'].value = 'Hemant Soni';dq = document.querySelector('input[size=\'16\'][id^=\'addPassengerForm:psdetail:0:\']');if (dq) dq.value = 'Hemant Soni';if (f0['addPassengerForm:psdetail:0:psgnAge']) f0['addPassengerForm:psdetail:0:psgnAge'].value = '27';if (f0['addPassengerForm:psdetail:0:berthChoice']) f0['addPassengerForm:psdetail:0:berthChoice'].value = 'LB';if (f0['addPassengerForm:psdetail:1:psgnName']) f0['addPassengerForm:psdetail:1:psgnName'].value = 'Gajendra Soni';dq = document.querySelector('input[size=\'16\'][id^=\'addPassengerForm:psdetail:1:\']');if (dq) dq.value = 'Gajendra Soni';if (f0['addPassengerForm:psdetail:1:psgnAge']) f0['addPassengerForm:psdetail:1:psgnAge'].value = '40';if (f0['addPassengerForm:psdetail:1:berthChoice']) f0['addPassengerForm:psdetail:1:berthChoice'].value = 'MB';if (f0['addPassengerForm:psdetail:2:psgnName']) f0['addPassengerForm:psdetail:2:psgnName'].value = 'Madhukanta Soni';dq = document.querySelector('input[size=\'16\'][id^=\'addPassengerForm:psdetail:2:\']');if (dq) dq.value = 'Madhukanta Soni';if (f0['addPassengerForm:psdetail:2:psgnAge']) f0['addPassengerForm:psdetail:2:psgnAge'].value = '68';if (f0['addPassengerForm:psdetail:2:berthChoice']) f0['addPassengerForm:psdetail:2:berthChoice'].value = 'UB';if (f0['addPassengerForm:mobileNo']) f0['addPassengerForm:mobileNo'].value = '8770781223';if (f0['addPassengerForm:autoUpgrade']) {f0['addPassengerForm:autoUpgrade'].checked = true;f0['addPassengerForm:autoUpgrade'].removeAttribute('disabled');}function D(n,t){for(c=t.split('|'),d=!1,q=0;q<c.length;q++)c[q]==n&&(d=!0);return d}if (document.forms['jpBook']) {try { if(document.getElementsByClassName('NETBANKING')[0].style.display == 'none')eval(document.getElementById('NETBANKING').getAttribute('onclick'));} catch (err) {}};}E()