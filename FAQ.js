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

.style2{
	padding:0;
	margin:0;
	width:100%;
	text-align:center;
	
}
details {
    font-family: 'Open Sans';
    margin-left: 30px;
    margin-top: 10px;
    font-size: 20px;
}

summary{
	font-size: 25px;
    margin-top: 10px;
    color: #990033;
}

details[open] summary {
    color: #FF7B00;
}
details p {
    padding-left: 25px;
}

footer{
	text-align:center;
	font-size:70%;
	color:white;
}

`;
class FAQ extends Component {
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
		
			<div class="content-area group">
			<div class="container">
				<div class="style2">
					<p>Your Questions Answered</p>
					<p>Want to know more about us? Perhaps answers to questions below will help. Feel free to email your questions</p>
					<p>to us at</p>
					<p>mitford@outlook.com</p>
				</div>
				<div>
					<details>
						<summary>Can I come and try out the club?</summary>
						<p>Yes, that is fine, subject to us still having space for new members. Also note that, depending on how late you join in the season, then there is an adjustment made to the membership fee.</p>
					</details>
					<details>
						<summary>Do you offer coaching?</summary>
						<p>Not at the moment but we can arrange 1 to 1 coaching based on the availablity of the coach.</p>
					</details>
					<details>
						<summary>When do you play, and what time?</summary>
						<p>The season starts in September, and finishes sometime in May. Exact dates vary year on year, and are usually shown on the front page of this website. There is normally a break for Christmas, again advised on the front page of this website. Clubnight is Wednesday -- we play from 7pm to 9pm.</p>
					</details>
					<details>
						<summary>How do I get to your club?</summary>
						<p>Please see Contact page for address and google maps.</p>
					</details>
					<details>
						<summary>Do I have to have had formal badminton training?</summary>
						<p>Absolutely not -- most of us have learnt through trial and error!</p>
					</details>
					<details>
						<summary>Do you play with feathers, or plastic shuttles?</summary>
						<p>We play with feathered shuttles.</p>
					</details>
					<details>
						<summary>Who runs the club?</summary>
						<p>The club is run by a committee. It is a "non-profit" organisation, people give of their time freely, to make the club run smoothly. Running a club of our size does not happen automatically, and the more people involved in organising things, the better. If you are interested in helping out, please ask one of the committee members.</p>
					</details>
					<details>
						<summary>Do you have changing rooms and showers?</summary>
						<p>Yes, we have both changing rooms and showers.</p>
					</details>
					<details>
						<summary>Do I have to wear whites?</summary>
						<p>No. The majority of players wear club t-shirts/clothes.</p>
					</details>
					<details>
						<summary>Can I come alone or need to bring a partner to play with me?</summary>
						<p>No, you do not need to bring partner. The club uses a "peg board", to manage the courts. This ensures that the club night players mix in together and get games.</p>
					</details>
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
export default FAQ;