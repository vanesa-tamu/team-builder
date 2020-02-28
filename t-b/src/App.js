import React, { useState } from 'react';
import { Route, Link, NavLink } from 'react-router-dom'
import './App.css';
import TeamForm from '../src/components/Form.js'
import Members from '../src/components/Members.js'

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'van',
      email: 'v@gmail.com',
      role: 'member'
    },
    {
      id: 2,
      name: 'van',
      email: 'v@gmail.com',
      role: 'member'
    }
  ])

  function addMember(member){
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setMembers([...members, newMember])
  }
  return (
    <div className="App">
      <TeamForm addMember={addMember}/> 
      <Members allMembers={members}/> 
    </div>
  );
}

export default App;
