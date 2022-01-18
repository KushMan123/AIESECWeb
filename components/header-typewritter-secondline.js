import { useEffect } from "react";

const TypeWritterSecondLine = (props) => {
	const Typewriter = function (txtElement, words, wait = 3000) {
		this.txtElement = txtElement;
		this.words = words;
		this.txt = "";
		this.wordIndex = 0;
		this.wait = parseInt(wait, 10);
		this.type();
		this.isdeleting = false;
	};

	//Type method
	Typewriter.prototype.type = function () {
		//current index of word
		const current = this.wordIndex % this.words.length;
		//get full text of current word
		const fulltxt = this.words[current];
		//check if deleting
		if (this.isdeleting) {
			//Remove a character
			this.txt = fulltxt.substring(0, this.txt.length - 1);
		} else {
			//add a character
			this.txt = fulltxt.substring(0, this.txt.length + 1);
		}
		//Initial Type Speed
		let typeSpeed = 200;

		if (this.isdeleting) {
			typeSpeed /= 2;
		}

		//Check if txt is complete
		if (!this.isdeleting && this.txt === fulltxt) {
			//Pause at end
			typeSpeed = this.wait;
			//Set delete to true
			this.isdeleting = true;
		} else if (this.isdeleting && this.txt === "") {
			this.isdeleting = false;
			//Move to next word
			this.wordIndex++;
			//Pause before stop typing
			typeSpeed = 200;
		}

		//Insert txt in elemet
		this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
		setTimeout(() => this.type(), typeSpeed);
	};

	useEffect(() => {
		const txtElement = document.querySelector(".second-line");
		const words = JSON.parse(txtElement.getAttribute("data-words"));
		const wait = txtElement.getAttribute("data-wait");
		//Initialze TypeWriter
		new Typewriter(txtElement, words, wait);
	}, []);

	return (
		<span
			className='second-line'
			data-wait='3000'
			data-words={props.dataword}></span>
	);
};

export default TypeWritterSecondLine;
