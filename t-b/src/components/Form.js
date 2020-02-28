import React, { useState }  from 'react'

function TeamForm({addMember}){
    const [member, setMember] = useState({name: '', email: '', role: ''})
    // const { addMember } = props

    const changeHandler = (e) => {
        setMember({...member, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        addMember(member)
        setMember({name: '', email: '', role: ''})
    }

    return(
        <div className='memberForm'>
        <form onSubmit={submitHandler}>
            <label htmlFor='name'>Name</label>
            <input
                id='name'
                type='text'
                name='name'
                value={member.name}
                onChange={changeHandler}
            />
            <label htmlFor='email'>Email</label>
            <input
                id='email'
                type='text'
                name='email'
                value={member.email}
                onChange={changeHandler}
            />
            <label htmlFor='role'>Role</label>
            <input
                id='role'
                type='text'
                name='role'
                value={member.role}
                onChange={changeHandler}
            />
            <button type='submit'>Sign Up!</button>
        </form>
     
        </div>
    )
}

export default TeamForm 