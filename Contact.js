import React, { Component } from 'react';
import styled from 'styled-components';
import './index.css';
const Wrapper = styled.div`
.container{
	max-width:940px;
	height:auto;
	margin:0 auto;
	box-sizing:border-box;
	padding-right:20px;
	padding-left:20px;
}
header{
	margin:0;
	padding:0;
	
}
header ul,li{
	margin:0;
	padding:0;
}
header p{
	text-align:center;
	font-size:85%;
	padding-top:10px;
	color:white;
}
.site-nav li{
	list-style:none;
	float:left;
	margin-right:10px;
	margin-top:20px;
}
.site-nav a{
	text-decoration:none;
	border:1px solid #004d4d;
	padding:15px;
	background-color:#008080;
	color:white;
	display:block;
	border-bottom:none;
	transition-property:color,background-color;
	transition-duration:2s;
	
}
.site-nav a:hover{
	background-color:white;
	color:black;
}
.content-area{
	border-top:1px solid #004d4d;
	background-color:white;
}

form{
	width:40%;
	float:left;
	background-color:#ECECEC;
	padding:20px;
	box-sizing:border-box;
	margin-bottom:20px;
}
form:hover,
img:hover {
	transform:scale(1.1);
}
img{
	width:60%;
	float:left;
	padding-left:20px;
	box-sizing:border-box;
}
input[type="email"],
input[type="text"],
input[type="number"]{
	width:90%;
	display:block;
	box-sizing:border-box;
	padding:10 20px;
	height:40px;
}
textarea{
	width:90%;
}
input[type="submit"]{
	width:50%;
	height:30px;
	background-color:#336600;
	color:white;
}


footer{
	text-align:center;
	font-size:70%;
	color:white;
}

`;
class Contact extends Component {
   render() {
      return (
		<Wrapper>
			<header className="group">
				<div className="container">
					<p>Mitford Smashers Badminton Club</p>
					<nav className="site-nav">
                        <ul className="group" >
                            <li><a href="#">Home</a></li>
                            <li><a href="#/membership">Membership</a></li>
                            <li><a href="#/events">Events</a></li>
                            <li><a href="#/faq">FAQ</a></li>
                            <li><a href="#/contact">Contact</a></li>
                        </ul>
                    </nav>
				</div>
			</header>
		
			<div className="content-area group">
				<div className="container">
					<p>Academy Sports</p>
					<p>Northumberland Ave, Reading RG2 8DF</p>
					<p>Ph: 07948618811, Email: mitfordclub@outlook.com</p>
					<br></br>
					<br></br>
					
					<form>
						<label>Full Name:</label>
						<input type="text" />
						<br></br>
						<br></br>

						<label>Email:</label>
						<input type="email" />
						<br></br>
						<br></br>

						<label>Phone Number:</label>
						<input type="number" />
						<br></br>
						<br></br>
						
						Message:<br></br>
						<textarea name="message" rows="5" cols="30"></textarea>
						<br></br>
						<br></br>
						<input type="submit"/>
					</form>
					<div className="group">
						<img src="./images/google_map.jpg" alt=""/>
					</div>
				</div>
			</div>
			
			
			<footer>
				<p>© 2017 Designed and developed by CLOADTEST and RQC UK Limited</p>
			
			</footer>
		</Wrapper>
      );
   }
}
export default Contact;