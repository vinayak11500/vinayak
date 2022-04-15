import {render,screen,cleanup,fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Dropdown from '../Dropdown'

afterEach(cleanup);

describe("Dropdown",()=>{
    const data={
        title:'Country',
        type:'select',
        id:'country',
        options:['','India','US','UK','Iceland','Australia'],
        required:true,
        defaultValue:'India'
    }
    const handleChange=jest.fn();

    render(<Dropdown handleChange={handleChange} data={data}/>)
    const dropdown=screen.getByTestId("Dropdown");

    test("rendering",()=>{
        expect(dropdown).toBeInTheDocument();
    })

    test("changing values",()=>{
        const display = dropdown.children[0];
        console.log(display);
        expect(display.textContent).toBe(options[0].text);
        console.log(display.textContent);
        fireEvent.click(dropdown);
        const dropdownOptions = getAllByRole(dropdown, 'option');
        fireEvent.click(dropdownOptions[2]);
        expect(display.textContent).toBe(options[2].text);
        console.log(display.textContent);
    })
})