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


.main-content{
	padding-left:50px;
	padding-right:50px;
	box-sizing:border-box;
	margin:0 auto;
	height:700px;
	padding-top:50px;
}
.main-bar{
	box-shadow: 0 8px 6px -6px black;
	border: 0.01px solid gray;
    padding: 1em;
    background-color:#0D734C;
    width:49%;
	float:left;
	margin-top:20px;
	text-align:center;
	box-sizing:border-box;
	margin-right:10px;
	
}
.side-bar{
	box-shadow: 0 8px 6px -6px black;
	border: 0.01px solid gray;
    padding: 1em;
    background:#0D734C;
    width:49%;
	float:left;
	margin-top:20px;
	text-align:center;
	box-sizing:border-box;
}

.style1{
	border-bottom:1px solid ghostwhite;
	color:white;
}
.style2{
	display: block;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 1em;
    line-height: 2.5em;
    text-decoration: none;
    background: #0E2F00;
    color: white;
    font-weight: 200;
    width: 70%;
    border-radius: 4px;
}
.style2:hover{
	transform:scale(1.2);
}

footer{
	text-align:center;
	font-size:70%;
	color:white;
}

`;
class Membership extends Component {
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
	
	
	
			<div className="content-area main-content group">
				<div className="main-bar">
						<h3>Quarterly</h3>
					<div className="style1"></div>
					<h4>£55</h4>
					<h4>per quarter</h4>
					
					<input className="style2" type="submit" value="choose Plan"/>
					
				</div>
				<div className="side-bar">
					<h3>Guest</h3>
					<div className="style1"></div>
					<h4>£6</h4>
					<h4>per session</h4>
					<input className="style2" type="submit" value="Choose Plan"/>
				</div>
			</div>

	
			<footer>
				<p>© 2017 Designed and developed by CLOADTEST and RQC UK Limited</p>
			
			</footer>
		</Wrapper>
      );
   }
}
export default Membership;