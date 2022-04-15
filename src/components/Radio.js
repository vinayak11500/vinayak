import { Radio as RRadio} from "semantic-ui-react";
import '../App.css'

const Radio=({data,handleChange,value})=>{
    const {id,required,options}=data;
    // return options.map((value,idx)=>{
    //         return <span key={value}>
    //         <label htmlFor={value}>{value}</label>
    //         <input name={id} id={value} value={value} 
    //         type={type} onChange={handleChange} required={required}/>
    //         </span>
    //     })
    return options.map((val,index)=>{return <RRadio key={val} className="marginright1" label={val} name={id} id={id+val} onChange={handleChange} 
    value={val} checked={val===value} required={required} data-testid="Radio"
    />})
}
export default Radio;