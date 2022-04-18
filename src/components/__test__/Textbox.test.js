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
    const value=""

    render(<Textbox data={data} handleChange={handleChange} value={value}/>)
    const textbox=screen.getByTestId("textbox")
    test("Textbox rendering",()=>{
        expect(textbox).toBeInTheDocument();
    })

    test("Textbox text",()=>{
        const elementInput=textbox.children[0];
        console.log('textbox',elementInput.textContent);
        expect(elementInput).toHaveValue(value);
        fireEvent.change(elementInput,{target:{value:"abc"}});
        expect(elementInput).toHaveValue("abc");
    })

})
