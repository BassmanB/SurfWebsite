<!DOCTYPE html>
<template>
  <body>
  <div>
	<main class="home" style="display: block;clear: both;">
		<header>
			<div v-on:scroll="scrollFunction" id="header" class="fixed-home header active">
				<ul>
					<li class="active"><a id="aboutchange" href="#">About</a></li>
					<li><a id="As" href="#">Gallery</a></li>
					<li class="active" ><a href="#"><img id="logo"  src="../assets/logo.png" ></a></li>
					<li class="active" v-on:click="myFunction"  id="header-btn"><a  id="blue" >Book</a></li>
					<li class="active"><a id="contact" href="#">Contact</a></li>
				</ul>
			</div>
		</header>
		<div id="text-homescreen">
				<h1 class="titles">Surf School</h1>
				<h3>We don’t push you into the wave,<br>
					We teach you how to surf!</h3>
			</div>
			<button class="watch">WATCH VIDEO</button>

<div class="offer-wrap">
		<h1 class="titles">Offers</h1>
		<div class="wrapped">
			<img id="surf" src="../assets/surf.png">
			<button>Surf Lesson</button>
		</div>
		<div class="wrapped">
			<img src="../assets/paddle.png">
			<button>Paddle</button>
		</div>
		<div class="wrapped">
			<img src="../assets/canoa.png">
			<button>Canoagem</button>
		</div>
		<div class="wrapped">
			<img src="../assets/car.png">
			<button>Transporte</button>
		</div>
		<div class="wrapped">
			<img src="../assets/boards.png">
			<button>Equipamento</button>
		</div>
	</div>


<div id="booking">

	  <form >
			<div id="close" v-on:click="myFunction2">x</div>
		<h1 id="book-name">BOOK</h1>

			<div>
		<label class="type">Type:
			<select name="Type" id="type">
				<option>Surf</option>
				<option>Paddle</option>
				<option>Canoe</option>
				<option>Transport</option>
				<option value="rent">Rent</option>
			</select>
		</label>
		<label for="first">First Name:
			<input type="text"  id="first" name="Name" placeholder="John" required title="insert your name" 	v-model="name">
			</label>
			<label for="last">Last Name:
			<input type="text"  id="last" name="Name" placeholder="John" required title="insert your name" 	v-model="surname">
			</label>
			<label for="phone">Phone Number:
			<input type="text" minlength="9" maxlength="10"  id="phone" name="PhoneNumber" placeholder="Phone Number" v-model="phoneNumber" required title="insert your Phone Number">
			</label>
	</div>
	<div>
		<label>Email:
			<input type="email" name="Email" placeholder="email" required 	v-model="email">
		</label>

	</div>

			<label>Notes</label>
			<textarea name="Notes" rows="10" cols="40" placeholder="Write Notes Here"></textarea>
			<p id="nota">NOTA: A sua reserva só fica registada depois de receber um email de confirmação. <br>
			NOTE: Your reservation will be registered after you receive a confirmation email.</p>
			<input style="height: 60px;" id="submit" type="submit" name="" v-on:click="booking">

		</form>


</div>
	</main>
	<section style="background-color: rgba(0,0,0,0);">
		<div id="about" style="background-color: rgba(0,0,0,0);" >
			<div id="about-text">
				<h2>About Us</h2>
				<div id="line"></div>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br> sed do eiusmodbr
				tempor incididunt ut labore et dolore magna aliqua. <br> Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris <br> nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in <br> reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. <br> Excepteur sint occaecat cupidatat non
				proident, sunt in <br> culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
			<div id="about-img-inline">
				<img src="../assets/about.png" id="about-img">
				<img src="../assets/about.png" id="about-img-2">
			</div>
		</div>
</section>

	<div id="instructors">
		<div id="instructors-img-inline">
			<img src="../assets/instrutor-1.png" id="instructors-img">
			<div class="buttons">
				<button id="previous"><</button>
				<button id="next" v-on:click="pictureChange">></button>
			</div>
			<img src="../assets/instrutor-1-blur.png" id="instructors-img-2">
		</div>
		<div id="instructors-text">
			<h2>About Us</h2>
			<div id="line-2"></div>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br> sed do eiusmodbr
			tempor incididunt ut labore et dolore magna aliqua. <br> Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris <br> nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in <br> reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. <br> Excepteur sint occaecat cupidatat non
			proident, sunt in <br> culpa qui officia deserunt mollit anim id est laborum.</p>
		</div>

	</div>

<div class="testimon">
	<div id="testimonialnames"><h1>Testimonials</h1></div>
	<div id="testimonialtext"><p>Lorem ipsum dolor si met, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p></div>
	<div class="buttons2">
				<button id="previous2"><</button>
				<button id="next2" onclick="pictureChange()">></button>
			</div>

	</div>
</div>
</body>
</template>



<script>

import BookingService from '@/services/BookingService'

//window.onscroll = function() {methods.scrollFunction()};

  export default {

    data() {
      return {
        email: '',
        name: '',
        surname: '',
        phoneNumber: '',
        error: 'sth went wrong'
      }
    },
  methods: {
    myFunction: function(){
    var x = document.getElementById("booking");
    x.style.color = "red";
    x.style.right ="0px";
    x.style.zIndex =1000;

   return false;
  },
   myFunction2: function() {

    var x = document.getElementById("booking");
    x.style.color = "red";
    x.style.right ="-400px";
    return false;
  },
  async booking() {
    console.log("KURWA MACCCCC")
    try {
        BookingService.booking({
        name: this.name,
        surname: this.surname,
        email: this.email,
        phoneNumber: this.phoneNumber
      })
    } catch (error) {
      this.error = error.response.data.error
    }
  },
  pictureChange: function() {
    document.getElementById('instructors-img-2').src="http://31.media.tumblr.com/fca646cd8fe87906e605ad7e8d039903/tumblr_mmoz4fWT6U1soh1p8o1_500.png";
    document.getElementById('instructors-img').src="http://31.media.tumblr.com/fca646cd8fe87906e605ad7e8d039903/tumblr_mmoz4fWT6U1soh1p8o1_500.png";
  },
  image: function() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementByClass("wrapped").className = "slideUp";
    }
  },

   scrollFunction: function() {
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        document.getElementById("header").className = "active";
        document.getElementById("header-btn").className = "active";
        document.getElementById("blue").className = "active";
        document.getElementById("logo").className = "active";
        document.getElementById("As").className = "active";
        document.getElementById("aboutchange").className = "active";
        document.getElementById("contact").className = "active";

    } else {
        document.getElementById("header").className = "";
        document.getElementById("header-btn").className = "";
        document.getElementById("blue").className = "";
        document.getElementById("logo").className = "";
        document.getElementById("As").className = "";
        document.getElementById("aboutchange").className = "";
        document.getElementById("contact").className = "";
    }
  }
},
created () {
   window.addEventListener('scroll', this.scrollFunction);
 },
 destroyed () {
   window.removeEventListener('scroll', this.scrollFunction);
 }
}



</script>
<style>

@import url('https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,900');
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,900');
@import url('https://fonts.googleapis.com/css?family=Berkshire+Swash');


body{
  width:100%;
}

.home{
	background-image: url('../assets/water1.png');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: no-repeat top center;
	height: 330vh;
	display: block;
}

#line{

	width: 350px;
	height: 4px;
	background: #145DB9;
	left: 68%;
	top: -20px;
	position:relative;
	z-index: 100;


}
#line-2{

	width: 350px;
	height: 4px;
	background: #145DB9;
	top: -20px;
	left: -230px;
	position:relative;
	z-index: 100;
}

#about h2{
	color: #145DB9;
	font-family: montserrat;
	font-weight: 600;
	font-size: 3em;
}
#header{

	z-index: 300;
	margin: auto 10%;
	width: 100%;
	text-align: center;
	padding-top: 20px;
	position: relative;
	position: fixed;
	background-color: rgba(0,0,0,0);
	margin: 0;
	transition: all .4s ease-in-out;


}
#header.active{
	background-color: rgba(255,255,255,1);
	width: 100%;
	padding-top: 0;
	color: blue;
	-webkit-box-shadow: 0 1px 15px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0 1px 15px rgba(0, 0, 0, 0.25);
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.25);
}

ul{
	margin: 0;

}
ul li{
	display: inline-block;
	padding: 0 20px;
	color: white;


}


#logo{
	width: 40px;
	height: auto;
	vertical-align: middle;

}#logo.active{
	content: url('../assets/logo-azul.png');
	transform: scale(.7);

}


#blue{
	color: #145DB9;
}
#blue.active{
	color: #fff;
}

#As{
	text-decoration: none;
	color: white;
}

#As.active{
	color: #145DB9;
	font-size: 1.3em;
}

#aboutchange{
	text-decoration: none;
	color: white;
}

#aboutchange.active{
	color: #145DB9;
	font-size: 1.3em;
}

#contact{
	text-decoration: none;
	color: white;
}

#contact.active{
	color: #145DB9;
	font-size: 1.3em;
}
#header-btn{
	background-color: white;
	border-radius: 3px;
	margin: 0 20px;
	transition: .1s all ease-in-out;

}
#header-btn.active{
	background-color: #145db9;
	color: white;
	font-size: 1.3em;


}

#header-btn:hover{
	border-radius: 15px;
}



#about{
	display: block;
	margin-top: 200px;
}

#about-text{
	width: 45%;
	text-align: right;
	justify-content: right;
	align-content: right;
	display: inline-block;
	position: absolute;
	float: left;

}
#about-img-inline{
	display: inline-block;
	z-index: -111;
	width: 50%;
	float: right;



}



#about-img{
	width: 450px;
	height: auto;
	display: inline-block;
	position: relative;
	top: -50px;
	left:0;
	box-shadow: 0 0 55px 0px rgba(0,0,0,0.3);

}


#about-img-2{

	width: 550px;
	height: auto;
	display: inline-block;
	position: relative;
	top: -750px;
	float: right;
	z-index: -123;
	-webkit-filter: blur(35px); /* Safari 6.0 - 9.0 */
    filter: blur(5px);
    background-color: #145DB9;
    opacity: .9;
  background-blend-mode: screen;


}

#instructors{
	display: inline-block;
	position: relative;
	top: -400px;


}

#instructors-text{

	text-align: left;
	justify-content: left;
	align-content: left;
	display: inline-block;
position: absolute;
	float: left;
	left: 70%;
	width: 100%;


}
#instructors-img-inline{
	display: inline-block;
	z-index: -111;
	width: 50%;
	float: left;



}



#instructors-img{
	width: 450px;
	height: auto;
	display: inline-block;
	position: relative;
	left:30%;
	box-shadow: 0 0 55px 0px rgba(0,0,0,0.3);

}


#instructors-img-2{

	width: 600px;
	height: auto;
	display: inline-block;
	position: relative;
	top: -500px;
	left: -50px;
	float: right;
	z-index: -123;
	-webkit-filter: blur(35px); /* Safari 6.0 - 9.0 */
    filter: blur(5px);
    background-color: #145DB9;
    opacity: .9;
  background-blend-mode: screen;


}

.buttons{
	position: relative;
	display: inline-block;
	float: right;
	bottom: -455px;
	right: 18px;
}

#previous{
width: 60px;
	height: 60px;
	top: -6px;
	right: -61px;
	position: relative;
	display: inline-block;
	border:none;
	font-size: 2em;
	color: #145DB9;


}
#next{

	display: inline-block;
	width: 60px;
	height: 60px;
	color: white;
	border:none;
	background-color: #145DB9;
	position: relative;
	top: -6px;
	right: -57px;
	font-size: 2em;


}

.buttons2{
	position: relative;
	display: inline-block;
		z-index: 200;
	position: relative;
    top: 20%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
}

#previous2{
	top: 244px;
	right: 0px;
width: 60px;
	height: 60px;
	position: absolute;
	display: inline-block;
	border:none;
	font-size: 2em;
	z-index: 100;
	color: #145DB9;
	-webkit-box-shadow: 0 1px 15px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0 1px 15px rgba(0, 0, 0, 0.25);
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.25);


}
#next2{

	display: inline-block;
	width: 60px;
	height: 60px;
	color: white;
	border:none;
	background-color: #145DB9;
	position: absolute;
	top: 244px;
	right: -57px;
	font-size: 2em;
	z-index: 100;
	-webkit-box-shadow: 0 1px 15px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0 1px 15px rgba(0, 0, 0, 0.25);
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.25);


}

#hero{
  height: 100vh;

	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
  background-attachment: fixed;

}



#fixed-book{

	z-index: 100;
	position: absolute;
	bottom: 0;
	right: 0;
	position: fixed;
	transition: .5s ease-in-out;
}



/*#book-btn{
	width:300px;
	height:45px;
	background-color: #145DB9;
	border:none;
	color: white;
	font-family: 'Nunito';
	font-weight: 400;
	font-size: 1em;
}*/

.add{
	position:absolute;bottom:0; right:0;height:70vh; width:300px;
}

#book-btn{
	position: relative;
	width:35px;
	height:105px;
	bottom:45%;
	background-color: #E0F3FF;
	border-top-left-radius:45px;
	border-bottom-left-radius: 45px;
	color: white;
	font-family: 'Nunito';
	font-weight: 400;
	font-size: 1em;
	border-color: rgba(0,0,0,0);
	transition: all 1s ease-in-out;

}






#text-homescreen{
	padding-top: 350px;
	padding-left: 10%;
	color: white;

}

.titles{
	font-size: 6em;
	font-weight: 400;
	margin:0;
	font-family: 'Atmosphere', cursive;
	color: white;
}
h1{
	font-size: 6em;
	font-family: 'Avenir';
	margin: 0;
	letter-spacing: -2px;
}

.offer-wrap{
	width: 100%;
	margin: auto;
	text-align:center;
	position: relative;
	top: 450px;
}



.wrapped{
	display: inline-block;
	margin: 20px 0;
	width: 30%;
}

.wrapped img{
	box-shadow: 0 0 15px 0px rgba(0,0,0,0.5);
	margin:20px 30px;
	width: 80%;
	height: auto;
	opacity: .8;
	transition: .2s ease-in-out;
}

.wrapped img:hover{
	box-shadow:0 0 30px 0px rgba(0,0,0,0.5);
	opacity: 1;

}

.wrapped button{
	font-family: Montserrat;
	font-weight: 500;
	color: white;
	font-size: 1em;
	letter-spacing: 1px;
}


.wrapped button{
	position: relative;
	display: block;
	margin: auto;
	width: 270px;
	height: 30px;
	background-color: rgba(255,255,255,0);
	border: 1px solid rgba(255,255,255,1);
	transition: .1s ease-in-out;
	border-color:
}

.wrapped button:before{

  content: " ";
  position: absolute;
  z-index: 5;
  top:  0px;
  left: 0px;
  right: 0px;
  bottom:  0px;
  border: 1px solid rgba(255,255,255,0);
  transition: .1s ease-in-out;
}

.wrapped button:hover{
	position: relative;
	display: block;
	margin: auto;
	width: 270px;
	height: 30px;
	background-color: rgba(0,0,0,0);
}

.wrapped button:hover:before{

  content: " ";
  position: absolute;
  z-index: 5;
  top: -10px;
  left: 5px;
  right: 5px;
  bottom: -10px;
  border: 1px solid rgba(255,255,255,1);
}

/*button {
  width: 270px;
  height: 30px;
  background-color:rgba(0,0,0,0);
  position: relative;
  border: 5px solid blue;
}
button:after {
  content: '';
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  border: 5px solid green;
  z-index: -1;
}*/



				/*booking*/

#booking{
	margin: auto;
	overflow: auto;
	width: 400px;
	height: 70vh;
	background-color: #E0F2FF;
	color: black;
	text-align: center;
	font-family: Montserrat;
	font-weight: 400;
	right:-400px;
	position: fixed;
  bottom:0%;
	transition: .3s all ease-in-out
}



#close{
	position: fixed;
	color: white;
	font-size: 2.8em;
	text-align: center;
	vertical-align: center;
	width: 400px;
	height: 60px;
	background-color: #145DB9;
	display: block;
}

#book-name{
	font-family: nunito;
	color: #145DB9;
	font-size: 2em;
	font-weight: bolder;
	padding-top: 90px;

}



label#type{
	display: block;
	margin:auto;
	text-align: center;
}

label{
	margin: 10px 0;
	display: block;
	text-align: left;
	margin-left: 30px;
	color: black;
}
p{
	color: black;
}

.watch{
	margin-left:auto;
	margin-right:auto;
	display:block;
	margin-top:10%;
	padding:10px 20px;
	border: 2px solid #fff;
	background-color: rgba(0,0,0,0);
	color: white;
	font-size: 1em;
	border-radius: 5px;
	transition: .1s ease-in-out;
}

.watch:hover{
	border-radius: 20px;
}

.type{
	display: inline-block;
	margin: auto;
	text-align: center;
}

#type{
	display:block;
	margin: auto;
	width: 200px;
	height: 30px;
	border:none;
	margin-top: 20px;
}
input{
	display: block;
	height: 30px;
	width: 90%;
	margin-top: 5px;
	border:0px;
	padding-left: 15px;

}
textarea{
	display: block;
	text-align: left;
	margin-left: 30px;
	margin-bottom: 20px;
	border:0;
	width: 82%;
	padding-left: 15px;
	padding-top: 10px;
}

input#submit{
	margin:auto;
	width: 100%;
	height: 60px;
	color: white;
	background-color: #145DB9;
	position: fixed;
    bottom: 0;

    z-index: 300;
    width: 400px;

}

#nota{
	text-align: left;
	margin-left: 30px;
	width: 80%;
	font-size: .75em;
	margin-bottom: 70px;
}




				/*booking*/


.testimon{
background-image: url('../assets/watering-surf-ocean-water.png');
background-size: cover;
background-repeat: no-repeat;
	background-position: center center;
	height: 100vh;
	display: block;
}

#testimonialnames{
	width: 45%;
	height: 130px;
	background-color: rgba(255,255,255,.7);
	 margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 300px;
    z-index: 101;
    -webkit-box-shadow: 0 1px 15px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0 1px 15px rgba(0, 0, 0, 0.25);
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.25);
    text-align: center;
}
#testimonialtext{
	width: 60%;
	height: 300px;
	background-color: rgba(255,255,255,1);
	 margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 280px;
    z-index: 99;
    text-align: center;
}

#testimonialtext p{
	padding-top: 150px;
	width: 80%;
	margin: auto;

}


.slideUp {
    animation-name: slideUp;
    -webkit-animation-name: slideUp;
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    visibility: visible;
}

@keyframes slideUp {
    0% {
        opacity: 0;
        -webkit-transform: translateY(100%);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateY(0%);
    }
}

@-webkit-keyframes slideUp {
    0% {
        opacity: 0;
        -webkit-transform: translateY(70%);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateY(0%);
    }
}


@media only screen and (min-width: 1300px) {

	.home{
		height: 300vh;
	}



}


@media only screen and (max-width: 1024px) {

	.home{
		height: 300vh;
	}




}


@media only screen and (max-width: 768px) {

	.home{
		height: 720vh;
	}

	.wrapped{
		display: block;
		width: 100%;
	}

}

@media only screen and (max-width: 668px) {

	.home{
		height: 580vh;
	}

	.wrapped{
		display: block;
		width: 100%;
	}

}
</style>
