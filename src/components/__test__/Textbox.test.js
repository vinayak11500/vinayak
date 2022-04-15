import {render,screen,cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/react';
import Textbox from '../Textbox';

afterEach(()=>{
    cleanup();
})

describe("Textbox component",()=>{
    const handleChange=jest.fn();
    const data={
        title:'First Name',
        type:'text',
        maxlength:15,
        placeholder:'Enter First Name',
        id:'fname',
        required:true
    }
    const value="abc"

    render(<Textbox data={data} handleChange={handleChange} value={value}/>)
    const textbox=screen.getByTestId("textbox").querySelector('input');;
    test("Textbox rendering",()=>{
        expect(textbox).toBeInTheDocument();
    })

    test("Textbox text",()=>{
        expect(textbox).toHaveTextContent("");
        fireEvent.change(textbox,{target:{value:"abc"}});
        expect(textbox).toHaveTextContent("abc");
        
    })

})
