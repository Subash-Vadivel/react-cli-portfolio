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
      const newHTML = `>${inval}<br />help --for finding commands<br />ls --for listing files<br />cat [argument] --for opening files<br />clear --to clear the terminal<br /><br />`;
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
        const newHTML = `>${inval}<br />Hi there, my name is Suganth and I am currently studying Computer Science Engineering at Kongu Engineering College. I am passionate about coding and have a strong skillset in Django, React, and Node.js. I enjoy working on full-stack development projects and am constantly seeking to improve my abilities as a developer. I believe coding is a powerful tool that can be used to solve a variety of problems and I am excited to continue learning and growing as a developer.<br/><br/>`;
        setVal(prevVal => prevVal + newHTML);
      }
      else if (currInput[1] === 'Contact.txt') {
        const newHTML = `>${inval}<br /><div><ul>
        <li><a style="color:white;" href="https://www.linkedin.com/in/gsuganth/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a style="color:white;" href="mailto:suganthjayanthi@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></li>
        <li><a style="color:white;" href="https://github.com/suganthsugi" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a style="color:white;" href="tel:+19025436252">9025436252</a></li>
      </ul></div>
      <br/>`;
        setVal(prevVal => prevVal + newHTML);
      }
      else if (currInput[1] === 'Projects.txt') {
        const newHTML = `>${inval}<br />
        <ul>
        <li><a style="color:white;" target="_blank" href="https://github.com/suganthsugi/kec-hackathon-KEConnect">KEConnect<br/>  - A KEC Forem - A award winning forem website build using Django as a backend framework and Bootstrap as a frontend framework for blogging for a students of kongu engineering college.</a><br/><br /></li>
        <li><a style="color:white;" target="_blank" href="https://github.com/suganthsugi/quick-quiz-server">Quick Quiz<br/> - A quiz platform - A backend of a quiz platform which uses nodejs and express framework for backend and react for frontned</a><br/><br /></li>
        <li><a style="color:white;" target="_blank" href="https://github.com/suganthsugi/e-commerce">ShopTing<br/>  - A Ecommerce website - A fullstack e-commerce website made with django for backend and bootstrap for frontend</a><br/><br /></li>
        <li><a style="color:white;" target="_blank" href="https://pentafox.in/">BlogIt<br/>  - A Social media blogging application. Working with Pentafox Technologies - Under Developement</a></li>
        </ul><br/>`;
        setVal(prevVal => prevVal + newHTML);
      }
      else if (currInput[1] === 'Education.txt') {
        const newHTML = `>${inval}<br /><div>
        <h4>Education</h4>
        <ul>
          <li>10th std - Vidhya Vikashni Matric Higher Secondary School - 84.4%</li>
          <li>12th std - Vidhya Vikashni Matric Higher Secondary School - 89.17%</li>
          <li>Kongu Engineering College - CGPA 8.94*</li>
        </ul>
      </div><br/>`;
        setVal(prevVal => prevVal + newHTML);
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
        <p className='mt-4'>Suganth@Suganth-Portfolio<span className='text-light'>: <span></span>$ </span><span className='text-light'>Hello, World! Welcome to Suganth's Portfolio. I am Linux-inspired. For basic commands type help.</span></p>

        <div className='text-light' dangerouslySetInnerHTML={{ __html: val }}></div>

        <lable htmlFor='inp' className='inline-label'>alien@Suganth-Portfolio<span className='text-light'>:<span className='text-primary'>~</span>$</span></lable>
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