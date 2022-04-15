import {Dropdown as DD} from 'semantic-ui-react';

const Dropdown=({data,handleChange,value})=>{
    const {defaultValue,required,options,id}=data;

    let ddOptions=options.map((val,index)=>{
        return {
            key:index,text:val,value:val
        }
    })
    return(
        // <select defaultValue={defaultValue} required={required}>
        //                     {options.map((value,idx)=>{
        //                         return  <option name={id} value={value} key={value} 
        //                         onChange={handleChange}>{value} 
        //                         </option>
        //                     })}
        //                     </select>
        <DD search options={ddOptions} name={id} id={id} selection onChange={handleChange} 
        defaultValue={defaultValue} required={required} data-testid="Dropdown"/>
    )
}
export default Dropdown;