import { render,screen,cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Radio from '../Radio'

afterEach(cleanup)
describe("Radio Component",()=>{
    const data={
        title:'Gender',
        type:'radio',
        id:'gender',
        options:['Male','Female'],
        required:true
    }
    const handleChange=jest.fn();
    const value="";

    render(<Radio handleChange={handleChange} value={value} data={data}/>)
    const male=screen.getByLabelText("Male") //as HTMLInputElement;
    const female=screen.getByLabelText("Female") //as HTMLInputElement;
    
    test("Radio rendering",()=>{
        expect(female).toBeInTheDocument();
        expect(male).toBeInTheDocument();
    })
    
    test('default value',()=>{
        expect(female).not.toBeChecked();
        expect(male).not.toBeChecked();
    })

    test('change value',()=>{
        fireEvent.click(female);
        expect(female).toBeChecked();
    })
})