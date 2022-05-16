import React, { useState } from 'react';

//Styled
import './GroupStyle.css';

//pages
import Members from './Members';

//Data
import { MemberData } from '../../Data/MemberData';


const Group = () => {
  const [active, setActive] = useState('FirstMember');

  return (
    <div>
      
      <h1>GROUP</h1>
      <p>Lorem impsum</p>
      <nav>
        <button onClick={ () => setActive('FirstMember') }>Member 01</button>
        <button onClick={ () => setActive('SecondMember') }>Member 02</button>
        <button onClick={ () => setActive('ThirdMember') }>Member 03</button>
        <button onClick={ () => setActive('FourthMember') }>Member 04</button>
        <button onClick={ () => setActive('FifthMember') }>Member 05</button>
      </nav>
      <div>
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