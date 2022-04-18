import React, { useEffect, useState } from "react";
import { userDetails } from "../utils/inputParameters";
import Dropdown from "./Dropdown";
import Radio from "./Radio";
import Textbox from "./Textbox";
import {Button, Form} from 'semantic-ui-react'
import '../App.css';
import { useDispatch } from "react-redux";
import { getUserDetails } from "../actions/actions";

const UserForm=()=>{
    let initialState={};
    let dispatch=useDispatch();

    useEffect(()=>{
        userDetails.forEach((val,index)=>{
            initialState[val.id]=val.defaultValue ? val.defaultValue :''
        })
        
    },[])
    const [userData,setUserData]=useState(initialState);
    
    const handleChange=(e,{name,value})=>{
        setUserData((prevState)=>({...prevState,[name]:value}))
    }
    const handleSubmit=()=>{
        console.log()
        dispatch(getUserDetails(userData))
    }
    return(
        <React.Fragment>
            <Form onSubmit={handleSubmit}>
                {userDetails.map((val,index)=>{
                    return <div key={val.id}>
                    <Form.Field className="marginbottom1">
                    <label>{val.title}<span className="required ">{val.required?'*':''}</span></label>
                    {val.type==="text"?
                        <Textbox data={val}  handleChange={handleChange} value={userData[val.id] || ''}/>
                    :val.type==='radio'?
                    <Radio data={val} handleChange={handleChange} value={userData[val.id] || ''}/>
                    :val.type==='select'?
                    <Dropdown data={val} handleChange={handleChange} value={userData[val.id] || ''}/>
                    :''}
                </Form.Field></div>})}
                 <Button type='submit' >Submit</Button>
            </Form>
        </React.Fragment>
    )
}
export default UserForm;