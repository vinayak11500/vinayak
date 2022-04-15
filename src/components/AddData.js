import {Tab} from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css';
import '../App.css';

import UserForm from './UserForm';
const AddData=()=>{

    let tabData=[{menuItem:'UserInformation',render:<UserForm/>},
        {menuItem:'Tab 2',render:'No Data Found'},{menuItem:'Tab 3',render:'No Data Found'}];

    const panes = tabData.map((val,index)=>{
        return { menuItem: val.menuItem, render: () => <Tab.Pane>{val.render}</Tab.Pane> }
        })

    return(
        <div className='margin2'>
            <Tab panes={panes} />
        </div>
    )
}

export default AddData;