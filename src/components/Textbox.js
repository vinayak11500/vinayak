import { Input } from 'semantic-ui-react'

const Textbox=({data,handleChange,value})=>{   
    const {type,placeholder,maxlength,id,required}=data
    return (
        <>
            <Input type={type} placeholder={placeholder} maxLength={maxlength} 
                        id={id} name={id} onChange={handleChange} 
                        required={required} value={value}/>
        </>
    )
}
export default Textbox; 