import React, { Component } from 'react';
import styled from 'styled-components';
import './index.css';
const Wrapper = styled.div`
.container{
	width:940px;
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

.content-area h1{
	text-align:center;
}
img {
    max-width: 250px;
    border-radius: 5px;
    float: right;
    padding-top:1em;
	padding-left:1em;
 }
.main-area {
	width: 70%;
	float: left;
	line-height:2;
	background-image: linear-gradient(to bottom,#e5e9dc,#FFF);
	padding-right: 20px;
	padding-left:20px;
	text-align:justify;
	box-shadow:-2px -4px 5px gray;
	box-sizing: border-box;
}

.sidebar {
	width: 30%;
	float: left;
	margin:0;
	padding-left:20px;
	box-sizing: border-box;
	font-size: 114%;
}
.timings{
	
	box-sizing:border-box;
	box-shadow: 0 0 9px rgba(0,0,0,0.3);
    border-radius: 5px;
	background-color: #cce6ff;
	line-height: 1em;
	text-align:center;
	padding: 15px;
    margin-bottom: 10px;
	
}
.training h4{
	color:#006296;
}
.timings h4{
	color:#006296;
}
.training{
	
	box-sizing:border-box;
	text-align: center;
    line-height: 1.63;
	margin-top: 0.5em;
    padding: 1em 2em;
	background-color: #e7eff5;
    border: 2px solid #d3dee7;
    box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, .10);
    border-radius: 10px;
}
.timings:hover,
.training:hover {
	transform:scale(1.1);
}
.lower-content{
	text-align:justify;
	line-height:2;
	margin:0;
	padding:0;
	box-sizing:border-box;
	background-color:white;
}

.lower-content1{	
	background-color:#12d3b9;
	text-align:center;
	margin:0;
	padding:0;
}
.lower-content2{
	margin:0;
	padding-left:2em;
	padding-right:2em;	
	background-color:#e7e4e4;
}
footer{
	text-align:center;
	font-size:70%;
	color:white;
}

`;
class Home extends Component {
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
				<h1>Welcome to Mitford Smashers Badminton Club</h1>
				<h1>(MSBC)</h1>
					<div className="main-area">
						<img src="./images/event-photos/microsoft_team.jpeg" alt=""/>
							<p>We are a friendly club who meet for club nights every Friday evening at Academy Sports, Northumberland Ave, Reading from 7 - 9pm</p>

							<p>We use good quality feather shuttlecocks and play throughout the year. There is a social side to our club, with regular social gathering and fun activities organised for members.</p>

							<p>We also have our own badminton tournament every year. We are affiliated to the Badminton England and Reading Badminton Association (RBA).</p>

							<p>We play our home matches on Wednesday evenings 8pm to 10pm at Academy Sports in Reading. The main badminton hall has four wooden-surfaced courts. Players are expected to wear gum-sole shoes appropriate to the courts. Members are also expected to bring their own equipment - rackets (can also be purchased).</p>

					</div>
					<div className="sidebar">
							<div className="timings">
								<h4>Timings</h4>
								<p>Fri 7 PM to 9 PM</p>
								<p>Wed 8 PM to 10 PM</p>
								<p>(Home League matches)</p>
							</div>
							<div className="training">
								<h4>Training</h4>
								<p>Dedicated 1-to-1 session and block training sessions can be arranged</p>
							</div>
					</div>
			</div>
		</div>
		
			
		<div className="lower-content">
			<div className="container">
				<h1 className="lower-content1">Interested ?</h1>
				<p className="lower-content2"> MSBC is interested in having more players join our friendly environment. If you would like to join MSBC then please email us or book a free taster session on any Wednesday night at the Academy Sports Centre. If you find you are enjoying your taster session, play to the club's standard you are more than welcome to join. Members will be charged £6 per session deductible from membership on joining.</p>
			</div>
		</div>
			
			
		<footer>
			<p>© 2017 Designed and developed by CLOADTEST and RQC UK Limited</p>
		
		</footer>
		</Wrapper>
      );
   }
}
export default Home;