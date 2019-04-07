import React, { Component } from 'react';
import './App.css';
import mysteries from './mysteries.js';

function Letter(props)
{
	let nameOfClass;
	if(props.clicked === true)
	{
		nameOfClass = 'LetterClicked';
	}
	else
	{
		nameOfClass = 'LetterUnclicked';
	}
	
	return (
		<button className={nameOfClass} onClick={props.onClick}>
			{props.letter}
		</button>
	);
}

class Alphabet extends Component
{
	newLetter(index)
	{
		let alphabet = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUWVXYZŹŻ';
		return (
			<Letter 
				letter={alphabet[index]} 
				onClick={()=>{this.props.onClick(index)}} 
				clicked={this.props.clicked[index]} 
			/>
		);
	}
	
	render()
	{
		let rows = [];
		let alphabet = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUWVXYZŹŻ';
		let numOfRows = alphabet.length / 5;
		if(alphabet.length > 0)
		{
			numOfRows++;
		}
		for(let i = 0; i < numOfRows; i++)
		{
			let row = [];
			for(let j = 0; j < 5; j++)
			{
				if(5*i+j < alphabet.length)
				{
					row.push(this.newLetter(5*i+j));
				}
			}
			rows.push(<div className="rowOfAlphabet">{row}</div>);
		}
		return (
			<div className="Alphabet">
				{rows}
			</div>
		);
	}
}

function Lives(props)
{
	return (
		<div className="Lives">
			{props.lives}
		</div>
	);
}

function Answer(props)
{
	return (
		<div className="Answer">
			{props.current}
		</div>
	);
}

function generateMystery()
{
	let index = Math.floor(Math.random()*mysteries.length);
	let newMystery = mysteries[index][0];
	let category = mysteries[index][1];
	
	let blank = "";
	for(let i = 0; i < newMystery.length; i++)
	{
		if(newMystery[i] !== " ")
		{
			blank += "*";
		}
		else
		{
			blank += " ";
		}
	}
	
	let alphabet = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUWVXYZŹŻ';
	let is = Array(35).fill(false);
	let allLetters = 0;
	for(let i = 0; i < 35; i++)
	{
		for(let j = 0; j < newMystery.length; j++)
		{
			if(newMystery[j] === alphabet[i])
			{
				is[i] = true;
				allLetters++;
				break;
			}
		}
	}
	
	let wynik = [newMystery, blank, is, allLetters, category];
	return wynik;
}

function Refresh(props)
{
	return (
		<button className="refresh" onClick={props.onClick}>
			Nowa gra
		</button>
	);
}

class App extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			lives: 5,
			mystery: generateMystery(),
			clicked: Array(35).fill(false),
			finished: false,
			allTrueClicked: 0,
		};
		this.clickHandler = this.clickHandler.bind(this);
	}
	
	clickHandler(i)
	{
		let alphabet = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUWVXYZŹŻ';
		let clicked = this.state.clicked;
		let mystery = this.state.mystery;
		let lives = this.state.lives;
		let finished = this.state.finished;
		let stat = this.state.stat;
		let allTrueClicked = this.state.allTrueClicked;
		
		if(clicked[i] === true || finished === true)
		{
			return;
		}
		
		clicked[i] = true;
		
		if(mystery[2][i] === false)
		{
			lives--;
			if(lives === 0)
			{
				finished = true;
				stat = 'Niestety, ale przegrałeś';
			}
		}
		else
		{
			allTrueClicked++;
			let blank = '';
			for(let p = 0; p < mystery[0].length; p++)
			{
				if(alphabet[i] === mystery[0][p])
				{
					blank += alphabet[i]
				}
				else if(mystery[1][p] !== '*')
				{
					blank += mystery[1][p];
				}
				else if(mystery[0][p] !== ' ')
				{
					blank += '*';
				}
			}
			mystery[1] = blank;
			if(allTrueClicked === mystery[3])
			{
				finished = true;
				stat = 'Brawo! Wygrałeś!'
			}
		}
		
		this.setState({
			clicked: clicked,
			mystery: mystery,
			lives: lives,
			finished: finished,
			allTrueClicked: allTrueClicked,
			stat: stat,
		});
	}
	
	
	refreshHandler()
	{
		document.location.reload();
	}
	
	componentDidMount()
	{
		const firstStatus = 'Kategoria: ' + this.state.mystery[4];
		this.setState({
			stat: firstStatus,
		});
	}
	
  render() {
	  if(this)
    return (
      <div className="App">
		<div className="left">
			<Lives lives={this.state.lives} />
			<Refresh onClick={this.refreshHandler} />
			<Alphabet 
				onClick={(i)=>{this.clickHandler(i)}} 
				clicked={this.state.clicked} 
			/>
		</div>
		<div className="right">
			<div className="status">
				{this.state.stat}
			</div>
			<Answer current={this.state.mystery[1]} />
		</div>
      </div>
    );
  }
}

export default App;