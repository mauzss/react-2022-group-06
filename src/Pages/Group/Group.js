import React, { useState } from 'react';

//Styled
import './GroupStyle.css';

//pages
import Members from './Members';

//Data
import { MemberData } from '../../Data/MemberData';


const Group = () => {
  const [active, setActive] = useState('FirstMember');

  const [select, setSelect] = useState('1');
  const markMember = (position) => {
    const beforeMenber = document.querySelector(`.group__nav button:nth-child(${select})`);
    const currentMenber = document.querySelector(`.group__nav button:nth-child(${position})`);

    if(beforeMenber) 
      if(beforeMenber.classList.contains("btn-select")) beforeMenber.classList.remove('btn-select');
    if(currentMenber) currentMenber.classList.add('btn-select');
    
    setSelect(position);
  }

  return (
    <div className="group">
      <h1 className="group__title">Grupo</h1>
      <p className="group__text">Mienbros del desarrollo del proyecto</p>
      <nav className="group__nav">
        <button 
        className="btn-select"
        onClick={ () => { setActive('FirstMember'); markMember(1);}}>Member 01</button>
        <button 
        onClick={ () => { setActive('SecondMember'); markMember(2);}}>Member 02</button>
        <button 
        onClick={ () => { setActive('ThirdMember'); markMember(3);}}>Member 03</button>
        <button 
        onClick={ () => { setActive('FourthMember'); markMember(4);}}>Member 04</button>
        <button 
        onClick={ () => { setActive('FifthMember'); markMember(5);}}>Member 05</button>
      </nav>
      <div className="container-menber">
        {active === 'FirstMember'  &&  <Members data={MemberData} memberIndex={0} /> }
        {active === 'SecondMember' &&  <Members data={MemberData} memberIndex={1} /> }
        {active === 'ThirdMember'  &&  <Members data={MemberData} memberIndex={2} /> }
        {active === 'FourthMember' &&  <Members data={MemberData} memberIndex={3} /> }
        {active === 'FifthMember'  &&  <Members data={MemberData} memberIndex={4} /> }
      </div>
      
    </div>
  )
}

export default Group;