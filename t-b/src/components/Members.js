import React, { useState } from 'react'

function Members(props){
    // const {allMembers} = props
    console.log('all', props)
    return(
        <div>
         {props.allMembers.map(i => (
            <div className="member" key={i.id}>
            <h2>{i.name}</h2>
            <p>{i.role}</p>
            <p>{i.email}</p>
            </div>
         ))}
        </div>
    )
}

export default Members