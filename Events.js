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
	background-color: #00b3b3;
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

.table-area{
	width:900px;
	margin:0 auto;
	padding-bottom:20px;
}
.table-heading{
	font-style:none;
	text-align:center;
}

table{
	display: table;
    border-collapse: separate;
    border-spacing: 2px;
    border-color: grey;
	width:100%;
	margin:0 auto;
	text-align:center;
}

.toggle-btn {
	display: none;
}


	.toggle-btn-visible {
		display: block;
	}

	.toggle-target-hidden {
		display: none;
	}

	.toggle-target-expanded {
		display: block;
	}
	
.box-design{
	box-shadow:inset 2px 10px 5px gray,2px 10px 5px gray;
	padding:40px;
	float:left;
	width:40%;
	
}
table,th,td{
	border:1px solid ghostwhite;
	border-collapse:collapse;
	padding:10px;
	box-sizing:border-box;
}
table th,td{
	font-size:85%;
}
.black-color{
	background-color:#8DC167;
	color:black;
}
.black-color1{
	background-color:#C2330E;
	color:black;
}
.color-edeae8{
	background-color:#edeae8;
}
.color-aliceblue{
	background-color:aliceblue;
}
.color-lemonchiffon{
	background-color:#ffbf80;
}
.color-blue{
	background-color:#336600;
	color:white;
}
.table-mens4Event{
	margin-top:40px;
}

.row1-color{
	background-color:#336600;
	color:white;
}
.row2-color td{
	background-color:#8DC167;
	color:white;
}

footer{
	
	text-align:center;
	font-size:70%;
	color:black;
}


`;
class Events extends Component {
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
		
		<div className="table-heading">
			<h1>LEAGUE SCHEDULE and RESULTS TABLE</h1>
			
			<div className="table-area">
			
			<div className="leaguetable">
			<h2>LEAGUE SCHEDULE TABLE</h2>
			<table className="table-mens3Event">
				<tr>
					<td className="color-blue" rowspan="2">
						<h2>Mens 3</h2>
						<br />
						<div>HOME TEAM</div>
					</td>
					<td className="color-blue" colspan="7">
						<div>AWAY TEAM</div>
					</td>
				</tr>
				<tr>
					<td className="black-color">Chi C</td>
					<td className="black-color">Cre B</td>
					<td className="black-color">Hur</td>
					<td className="black-color1">Mis A</td>
					<td className="black-color">Nor</td>
					<td className="black-color">Oas B</td>
					<td className="black-color">Syn A</td>
					
				</tr>
				<tr>
					<td className="black-color">Chiltern C</td>
					<td className="black-color"></td>
					<td className="color-edeae8">16 Apr</td>
					<td className="color-edeae8">26 Mar</td>
					<td>3 - 6</td>
					<td className="color-edeae8">30 Nov</td>
					<td className="color-edeae8">11 Dec</td>
					<td className="color-edeae8">13 Nov</td>
				</tr>
				<tr>
					<td className="black-color">Crescent B</td>
					<td className="color-edeae8">26 Jan</td>
					<td className="black-color"></td>
					<td className="color-edeae8">21 March</td>
					<td className="color-edeae8">23 March</td>
					<td className="color-edeae8">17 Nov</td>
					<td className="color1">8 - 1</td>
					<td className="color-edeae8">19 Jan</td>
				</tr>
				<tr>
					<td className="black-color">Hurst</td>
					<td className="color-edeae8">06 Oct</td>
					<td className="color-edeae8">05 Jan</td>
					<td className="black-color"></td>
					<td className="color-edeae8">01 Dec</td>
					<td className="color-edeae8">12 Jan</td>
					<td className="color-edeae8">10 Nov</td>
					<td className="color1">6 - 3</td>
				</tr>
				<tr>
					<td className="black-color1">Mitford Smashers A</td>
					<td className="color-aliceblue">14 March</td>
					<td className="color-aliceblue">08 Nov</td>
					<td className="color-aliceblue">21 Feb</td>
					<td className="black-color"></td>
					<td className="color-aliceblue">18 Apr</td>
					<td className="color-aliceblue">07 Mar</td>
					<td className="color-lemonchiffon">4 - 5</td>
				</tr>
				<tr>
					<td className="black-color">North Reading</td>
					<td className="color-edeae8">16 Feb</td>
					<td className="color-edeae8">02 Feb</td>
					<td className="color-edeae8">15 Dec</td>
					<td className="color1">1 - 8</td>
					<td className="black-color"></td>
					<td className="color-edeae8">19 Jan</td>
					<td className="color-edeae8">02 Mar</td>
				</tr>
				<tr>
					<td className="black-color">Oasis B</td>
					<td className="color-edeae8">27 Sep</td>
					<td className="color-edeae8">29 Nov</td>
					<td className="color-edeae8">28 Feb</td>
					<td className="color-edeae8">11 Apr</td>
					<td className="color-edeae8">04 Oct</td>
					<td className="black-color"></td>
					<td className="color-edeae8">18 Apr</td>
				</tr>
				<tr>
					<td className="black-color">Syngenta A</td>
					<td className="color-edeae8">?</td>
					<td className="color-edeae8">?</td>
					<td className="color-edeae8">?</td>
					<td className="color-edeae8">?</td>
					<td className="color-edeae8">?</td>
					<td className="color-edeae8">?</td>
					<td className="black-color"></td>
				</tr>
				
			</table>
			
			
			
			
			<table className="table-mens4Event">
				<tr>
					<td className="color-blue" rowspan="2">
						<h2>Mens 4</h2>
						<br />
						<div>HOME TEAM</div>
					</td>
					<td className="color-blue" colspan="7">
						<div>AWAY TEAM</div>
					</td>
				</tr>
				<tr>
					<td className="black-color">Cot B</td>
					<td className="black-color">Cre C</td>
					<td className="black-color1">Mis B</td>
					<td className="black-color">Riv</td>
					<td className="black-color">Syn B</td>
					<td className="black-color">Uft</td>
					<td className="black-color">War</td>
					
				</tr>
				<tr>
					<td className="black-color">Cotswold B</td>
					<td className="black-color"></td>
					<td className="color-edeae8">15 Jan</td>
					<td className="color-edeae8">18 Dec</td>
					<td>0 - 9</td>
					<td className="color-edeae8">20 Nov</td>
					<td className="color-edeae8">29 Jan</td>
					<td>3-6</td>
				</tr>
				<tr>
					<td className="black-color">Crescent C</td>
					<td>6-3</td>
					<td className="black-color"></td>
					<td className="color-edeae8">06 Dec</td>
					<td className="color-edeae8">28 March</td>
					<td className="color-edeae8">21 Feb</td>
					<td className="color-edeae8">15 Nov</td>
					<td className="color-edeae8">10 Nov</td>
				</tr>
				<tr>
					<td className="black-color1">Mitford Smashers B</td>
					<td className="color-lemonchiffon">7 - 2</td>
					<td className="color-aliceblue">22 Nov</td>
					<td className="black-color"></td>
					<td className="color-aliceblue">21 Mar</td>
					<td className="color-lemonchiffon">6 - 3</td>
					<td className="color-aliceblue">28 Feb</td>
					<td className="color-aliceblue">29 Nov</td>
				</tr>
				<tr>
					<td className="black-color">Rivermead</td>
					<td className="color-edeae8">12 Dec</td>
					<td className="color-edeae8">06 Mar</td>
					<td>9 - 0</td>
					<td className="black-color"></td>
					<td>9 - 0</td>
					<td className="color-edeae8">23 Jan</td>
					<td className="color-edeae8">20 Feb</td>
				</tr>
				<tr>
					<td className="black-color">Syngenta B</td>
					<td>7 - 2</td>
					<td className="color-edeae8">01 May</td>
					<td className="color-edeae8">27 March</td>
					<td className="color-edeae8">13 Feb</td>
					<td className="black-color"></td>
					<td className="color-edeae8">06 Mar</td>
					<td className="color-edeae8">30 Jan</td>
				</tr>
				<tr>
					<td className="black-color">Ufton</td>
					<td className="color-edeae8">7 Feb</td>
					<td>1 - 8</td>
					<td className="color-edeae8">13 Dec</td>
					<td>0 - 9</td>
					<td>1 - 8</td>
					<td className="black-color"></td>
					<td className="color-edeae8">17 Jan</td>
				</tr>
				<tr>
					<td className="black-color">Wargrave</td>
					<td className="color-edeae8">7 Mar</td>
					<td className="color-edeae8">7 Feb</td>
					<td className="color-edeae8">3 Jan</td>
					<td className="color-edeae8">20 Dec</td>
					<td className="color-edeae8">1 Nov</td>
					<td>6 - 3</td>
					<td className="black-color"></td>
				</tr>
				
			</table>
			</div>
			
			<div className="resulttable">
			<h2>LEAGUE POINTS TABLE</h2>
			
			
			<table className="mens3-result">
				<tr className="row1-color">
					<td>Mens</td>
					<td colspan="4">Matches</td>
					<td colspan="2">Rubbers</td>
					<td colspan="2">Games</td>
					<td colspan="2">Points</td>
					<td></td>
				</tr>
				<tr className="row2-color">
					<td>DIV 3 (team of 6)</td>
					<td>Total</td>
					<td>Full</td>
					<td>Won</td>
					<td>Lost</td>
					<td>Won</td>
					<td>Lost</td>
					<td>Won</td>
					<td>Lost</td>
					<td>Won</td>
					<td>Lost</td>
					<td>PTS</td>
				</tr>
				<tr className="color-lemonchiffon">
					<td>Mitford Smashers A</td>
					<td>3</td>
					<td>3</td>
					<td>2</td>
					<td>1</td>
					<td>18</td>
					<td>9</td>
					<td>40</td>
					<td>25</td>
					<td>1242</td>
					<td>1116</td>
					<td>10</td>
				</tr>
				<tr>
					<td>Hurst</td>
					<td>1</td>
					<td>1</td>
					<td>1</td>
					<td>0</td>
					<td>6</td>
					<td>3</td>
					<td>12</td>
					<td>6</td>
					<td>367</td>
					<td>317</td>
					<td>4</td>
				</tr>
				<tr>
					<td>Syngenta A</td>
					<td>2</td>
					<td>2</td>
					<td>1</td>
					<td>1</td>
					<td>8</td>
					<td>10</td>
					<td>18</td>
					<td>20</td>
					<td>688</td>
					<td>714</td>
					<td>4</td>
				</tr>
				<tr>
					<td>Crescent B</td>
					<td>1</td>
					<td>0</td>
					<td>1</td>
					<td>0</td>
					<td>8</td>
					<td>1</td>
					<td>16</td>
					<td>6</td>
					<td>439</td>
					<td>364</td>
					<td>3</td>
				</tr>
				<tr>
					<td>Chiltern C</td>
					<td>1</td>
					<td>1</td>
					<td>0</td>
					<td>1</td>
					<td>3</td>
					<td>6</td>
					<td>9</td>
					<td>15</td>
					<td>418</td>
					<td>460</td>
					<td>1</td>
				</tr>
				<tr>
					<td>North Reading</td>
					<td>1</td>
					<td>1</td>
					<td>0</td>
					<td>1</td>
					<td>1</td>
					<td>8</td>
					<td>4</td>
					<td>17</td>
					<td>327</td>
					<td>435</td>
					<td>1</td>
				</tr>
				<tr>
					<td>Oasis B</td>
					<td>1</td>
					<td>0</td>
					<td>0</td>
					<td>1</td>
					<td>1</td>
					<td>8</td>
					<td>6</td>
					<td>16</td>
					<td>364</td>
					<td>439</td>
					<td>0</td>
				</tr>		
			</table>
			
			
			<table>
				<tr className="row2-color">
					<td>DIV 4 (team of 6)</td>
					<td>Total</td>
					<td>Full</td>
					<td>Won</td>
					<td>Lost</td>
					<td>Won</td>
					<td>Lost</td>
					<td>Won</td>
					<td>Lost</td>
					<td>Won</td>
					<td>Lost</td>
					<td>PTS</td>
				</tr>
				<tr>
					<td>Rivermead</td>
					<td>4</td>
					<td>4</td>
					<td>4</td>
					<td>0</td>
					<td>36</td>
					<td>0</td>
					<td>72</td>
					<td>1</td>
					<td>1537</td>
					<td>873</td>
					<td>16</td>
				</tr>	
				<tr>
					<td>Syngenta B</td>
					<td>3</td>
					<td>3</td>
					<td>2</td>
					<td>2</td>
					<td>15</td>
					<td>12</td>
					<td>31</td>
					<td>27</td>
					<td>1023</td>
					<td>997</td>
					<td>9</td>
				</tr>	
				<tr>
					<td>Crescent C</td>
					<td>2</td>
					<td>2</td>
					<td>2</td>
					<td>0</td>
					<td>14</td>
					<td>4</td>
					<td>29</td>
					<td>11</td>
					<td>809</td>
					<td>632</td>
					<td>8</td>
				</tr>	
				<tr>
					<td>Wargrave</td>
					<td>2</td>
					<td>2</td>
					<td>2</td>
					<td>0</td>
					<td>12</td>
					<td>6</td>
					<td>26</td>
					<td>13</td>
					<td>711</td>
					<td>666</td>
					<td>8</td>
				</tr>	
				<tr className="color-lemonchiffon">
					<td>Mitford Smashers B</td>
					<td>2</td>
					<td>2</td>
					<td>1</td>
					<td>1</td>
					<td>7</td>
					<td>11</td>
					<td>15</td>
					<td>23</td>
					<td>635</td>
					<td>697</td>
					<td>5</td>
				</tr>	
				<tr>
					<td>Ufton</td>
					<td>4</td>
					<td>4</td>
					<td>0</td>
					<td>4</td>
					<td>5</td>
					<td>31</td>
					<td>14</td>
					<td>63</td>
					<td>1096</td>
					<td>1547</td>
					<td>4</td>
				</tr>	
				<tr>
					<td>Cotswold B</td>
					<td>5</td>
					<td>3</td>
					<td>0</td>
					<td>5</td>
					<td>10</td>
					<td>35</td>
					<td>25</td>
					<td>74</td>
					<td>1550</td>
					<td>1949</td>
					<td>3</td>
				</tr>	
			</table>
			</div>
			
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
export default Events;