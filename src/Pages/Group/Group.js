import React, { useState } from 'react';

//Styled
import './GroupStyle.css';
import Button from 'react-bootstrap/Button';

//pages
import Members from './Members';

//Data
import { MemberData } from '../../Data/MemberData';


const Group = () => {
  const [active, setActive] = useState('FirstMember');

  return (
    <div>

      <nav className='menu'>
        <Button variant="primary" onClick={ () => setActive('FirstMember') }>Member 01</Button>{' '}
        <Button variant="primary" onClick={ () => setActive('SecondMember') }>Member 02</Button>{' '}
        <Button variant="primary" onClick={ () => setActive('ThirdMember') }>Member 03</Button>{' '}
        <Button variant="primary" onClick={ () => setActive('FourthMember') }>Member 04</Button>{' '}
        <Button variant="primary" onClick={ () => setActive('FifthMember') }>Member 05</Button>{' '}
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