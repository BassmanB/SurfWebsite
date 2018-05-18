<!DOCTYPE html>
<template>
<div>
<div id="cssProperties">
  <div class="large square el" style="width: 200px; height: 200px; border: 2px solid black;"></div>
</div>
<!--	<div><button onclick="openNav()" >Fecha e abre</button></div>

	<div class="booking-view" id="myDIV" >
		<div id="close" onclick="closeNav()">x</div>
		<h1 id="book-name">BOOK</h1>
	-->

		<form>
		<label class="type">Type:
			<select name="Type" id="type">
				<option>Surf</option>
				<option>Paddle</option>
				<option>Canoe</option>
				<option>Transport</option>
				<option value="rent">Rent</option>
			</select>
		</label>
		<v-text-field
			label="First Name"
			v-model="name"
		></v-text-field>
		<v-text-field
			label="Surname"
			v-model="surname"
		></v-text-field>
		<v-text-field
			label="Phone Number"
			v-model="phoneNumber"
			></v-text-field>
			<v-text-field
				label="email"
				v-model="email"
				></v-text-field>


			<label>Notes</label>
			<textarea name="Notes" rows="10" cols="40" placeholder="Write Notes Here"></textarea>
			<p id="nota">NOTA: A sua reserva só fica registada depois de receber um email de confirmação. <br>
			NOTE: Your reservation will be registered after you receive a confirmation email.</p>
			<input style="height: 60px;" id="submit" type="submit" name="">

		</form>
    <v-btn class="cyan"
        @click="booking">
        Register
    </v-btn>
</div>
</template>

<script>

import BookingService from '@/services/BookingService'
export default {

  data() {
    return {
      email: 'abc',
      name: 'def',
      surname: 'surferski',
      phoneNumber: '666',
      error: null
    }
  },
  methods: {
    async booking() {
      try {
        await BookingService.booking({
          name: this.name,
          surname: this.surname,
          email: this.email,
          phoneNumber: this.phoneNumber
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
/* type="text/javascript" >
function openNav() {
    document.getElementById("myDIV").style.right = "400";
}

function closeNav() {
    document.getElementById("myDIV").style.width = "0";
}

var cssProperties = anime({
  targets: '#cssProperties .el',
  opacity: .5,
  left: '240px',
  backgroundColor: '#FFF',
  borderRadius: ['0em', '2em'],
  easing: 'easeInOutQuad'

});
*/
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,900');
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,900');
@import url('https://fonts.googleapis.com/css?family=Berkshire+Swash');

body{
margin:0;
padding:0;
font-family: 'Nunito';


}

.home{
background-image: url('../assets/water1.png');
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
height: 320vh;
display: block;
}

.mute{
position: absolute;
border-radius: 50%;
margin: auto;
left: 40%;
top: 35%;
width: 300px;
height: 300px;
font-size: 3em;
font-weight: bolder;
color: yellow;
background-color: purple;
transition: .05s ease-in;
border-color: rgba(0,0,0,0);
}

.mute:active{
background-color: yellow;
color: purple;
border-radius: 10px;
transform: scale(4)

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

z-index: 100;
margin: auto 10%;
width: 80%;
text-align: center;
padding-top: 20px;
position: relative;
position: fixed;


}
.fixed-home{
background-color: rgba(0,0,0,0);
}

.fixed-home.active{
background-color: rgba(0,0,0,1);
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


#hero{
height: 100vh;
/*background-image: url("../assets/rgb1.jpg");*/
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
background-attachment: fixed;

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
}

#blue{
color: #145DB9;
}

a{
text-decoration: none;
color: white;
}

#header-btn{
background-color: white;
border-radius: 3px;
margin: 0 20px;

}

#fixed-book{

z-index: 100;
position: absolute;
bottom: 45%;
right: 0;
position: fixed;
transition: .5s ease-in-out;
}
#fixed-book:active{


position: absolute;
bottom: 0;
right: 0;
position: fixed;
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

#book-btn{
width:35px;
height:105px;
background-color: #E0F3FF;
border-top-left-radius:45px;
border-bottom-left-radius: 45px;
color: white;
font-family: 'Nunito';
font-weight: 400;
font-size: 1em;
border-color: rgba(0,0,0,0);

}

#book-btn:active {
width:350px;
height:650px;

border-top-left-radius:0px;
border-bottom-left-radius: 0px;
}


#text-homescreen{
padding-top: 350px;
padding-left: 10%;
color: white;

}

h1{
font-size: 6em;
font-weight: 400;
margin:0;
font-family: 'Atmosphere', cursive;
color: white;
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



.booking-view{
margin: auto;
overflow: auto;
width: 400px;
height: 70vh;
background-color: #E0F2FF;
color: #145DB9;
text-align: center;
font-family: Montserrat;
font-weight: 400;
position: absolute
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
}

#book-name{
font-family: nunito;
color: #145DB9;
font-size: 2em;
font-weight: bolder;
margin: 20px 0;
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
	top: 70vh;
	z-index: 300;
	width: 400px;

}

#nota{
text-align: left;
margin-left: 30px;
width: 80%;
font-size: .75em;
margin-bottom: 40px;
}



			/*booking*/


</style>
