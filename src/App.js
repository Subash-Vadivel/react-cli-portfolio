import React, { useEffect, useRef, useState } from 'react'
import './App.css'

export default function App() {
  const [val, setVal] = useState('');
  const [inval, setInval] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        inputRef.current.focus();
      } else if (event.target.tagName === 'INPUT') {
        setInval(event.target.value);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [inputRef]);

  const output = () => {
    var tcurrInput = inval.trim().split(" ");
    var currInput = []
    for (let i = 0; i < tcurrInput.length; i++) {
      if (tcurrInput[i] !== '')
        currInput.push(tcurrInput[i].trim());
    }
    // console.log(currInput);
    if (currInput.length === 1 && currInput[0] === 'help') {
      const newHTML = `>${inval}<br />help --for finding commands<br />ls --for listing files<br />cat [argument] --for opening files<br />theme [argument] --to change the theme<br />clear --to clear the terminal<br /><br />`;
      setVal(prevVal => prevVal + newHTML);
    }
    else if (currInput.length === 1 && currInput[0] === 'ls') {
      const newHTML = `>${inval}<br />About.txt<br />Projects.txt<br />Education.txt<br />Contact.txt<br/><br/>`;
      setVal(prevVal => prevVal + newHTML);
    }
    else if (currInput.length === 1 && currInput[0] === 'clear') {
      setVal('');
    }
    else if (currInput.length === 2 && currInput[0] === 'cat') {
      if (currInput[1] === 'About.txt') {
        const newHTML = `>${inval}<br />Hi there, my name is Subash and I am currently studying Computer Science Engineering at Kongu Engineering College. I am passionate about coding and have a strong skillset in React, and Node.js. I enjoy working on full-stack development projects and am constantly seeking to improve my abilities as a developer. I believe coding is a powerful tool that can be used to solve a variety of problems and I am excited to continue learning and growing as a developer.<br/><br/>`;
        setVal(prevVal => prevVal + newHTML);
      }
      else if (currInput[1] === 'Contact.txt') {
        const newHTML = `>${inval}<br /><div><ul>
        <li><a style="color:white;" href="http://www.linkedin.com/in/subash-v" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a style="color:white;" href="mailto:vsubashvsubash@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></li>
        <li><a style="color:white;" href="https://github.com/Subash-Vadivel" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a style="color:white;" href="https://leetcode.com/vsubashvsubash" target="_blank" rel="noopener noreferrer">Leet Code</a></li>
        <li><a style="color:white;" href="https://www.hackerrank.com/vsubashvsubash" target="_blank" rel="noopener noreferrer">Hacker Rank</a></li>
        <li><a style="color:white;" href="https://drive.google.com/file/d/1lY7T6N30QsU2GicBIbGfIokIqmAVHOIb/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
        <li><a style="color:white;" href="tel:+919994320743" target="_blank" rel="noopener noreferrer">9994320743</a></li>

      </ul></div>
      <br/>`;
        setVal(prevVal => prevVal + newHTML);
      }
      else if (currInput[1] === 'Projects.txt') {
        const newHTML = `>${inval}<br />
        <ul>
        <li><a style="color:white;" target="_blank" href="https://quickquiz.rido.live">Quick Quiz<br/><br/>  - An Online Quiz website build using Node JS as a backend framework and React as a frontend framework for Learners.</a><br/><br /></li>
        <li><a style="color:white;" target="_blank" href="https://driveaway.rido.live/">Drive Away<br/><br/> - A Cab booking and acting Driver booking app developed using React and Firebase</a><br/><br /></li>
        <li><a style="color:white;" target="_blank" href="https://colorflush.rido.live/">Color Flush<br/><br/>  - React Application Fun Game</a><br/><br /></li>
        <li><a style="color:white;" target="_blank" href="https://notes.rido.live/">Pick Notes<br/><br/>  - Pick Notes is used to take short notes while attending meeting or online classes developed using React.</a><br/><br /></li>
        <li><a style="color:white;" target="_blank" href="https://converto.rido.live/">Converto<br/><br/>  - An Application Which is going to convert given number to all native languages.</a><br/><br /></li>

        </ul><br/>`;

        setVal(prevVal => prevVal + newHTML);
      }
      else if (currInput[1] === 'Education.txt') {
        const newHTML = `>${inval}<br /><div>
        <h4>Education</h4>
        <ul>
          <li>10th std - BVM Matric Higher Secondary School - 89.2%</li>
          <li>12th std - BVM Matric Higher Secondary School - 87.5%</li>
          <li>Kongu Engineering College - CGPA 9.48*</li>
        </ul>
      </div><br/>`;
        setVal(prevVal => prevVal + newHTML);
      }
      else {
        const newHTML = `>${inval}<br />Command not found<br/><br/>`;
        setVal(prevVal => prevVal + newHTML);
      }
    }
    else if (currInput.length === 2 && currInput[0] === 'theme') {
      if (currInput[1] === 'hacker') {
        const body = document.body;
        const elements = document.querySelectorAll('*');
        body.style.cssText = 'background-color: black !important; color: #2de327 !important';
        for (let i = 0; i < elements.length; i++) {
          if (true) {
            elements[i].style.color = '#2de327';
          }
        }
      }
      else if (currInput[1] === 'windows') {
        const body = document.body;
        const elements = document.querySelectorAll('*');
        body.style.cssText = 'background-color: black !important; color: white !important';
        for (let i = 0; i < elements.length; i++) {
          if (true) {
            elements[i].style.color = 'white';
          }
        }
      }
      else {
        const newHTML = `>${inval}<br />Command not found<br/><br/>`;
        setVal(prevVal => prevVal + newHTML);
      }
    }
    else {
      const newHTML = `>${inval}<br />Command not found<br/><br/>`;
      setVal(prevVal => prevVal + newHTML);
    }
  }

  const typing = (e) => {
    if (e.key === 'Enter') {
      setInval(prevState => '');
      // console.log('Enter key clicked');
      output();
    }
    else {
      setInval(e.target.value);
    }
  }

  return (
    <>
      <div className='container-fluid'>
        {/* <h3 className='mb-3 text-light'>Suganth's Portfolio...</h3> */}
        <p className='mt-4'>Rido@Subash-Portfolio<span className='text-light'>: <span></span>$ </span><span className='text-light'>Hello, World! Welcome to Subash's Portfolio. I am Linux-inspired. For basic commands type help.</span></p>

        <div className='text-light' dangerouslySetInnerHTML={{ __html: val }}></div>

        <label htmlFor='inp' className='inline-label'>Rido@Subash-Portfolio<span className='text-light'>:<span className='text-primary'>~</span>$</span></label>
        <input
          id='inp'
          className='inline-input'
          value={inval}
          onChange={(e) => setInval(e.target.value)}
          onKeyDown={typing}
          ref={inputRef}
          autoComplete="off"
          spellCheck={false}
        />
      </div>
    </>
  )
}