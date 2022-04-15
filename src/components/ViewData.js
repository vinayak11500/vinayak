import { connect } from "react-redux";
import { Table } from "semantic-ui-react";
import '../App.css'

const ViewData=({user})=>{

    const userData=user ? Object.keys(user) :'';
    const displaydData=()=>{
        let data=[];
        for(var i=0;i<userData.length;i++)
        {
            data.push(
                <Table.Row key={userData[i]}>
                    <Table.HeaderCell>{userData[i].toLocaleUpperCase()}</Table.HeaderCell>
                    <Table.Cell>{user[userData[i]]}</Table.Cell>
                </Table.Row>
            )
        }
        return data;
    }
    return(
        <div className="App"><center>
            {user ? 
            <Table basic='very' celled collapsing>
                <Table.Body>
                {displaydData()}
                </Table.Body>
            </Table>
             : 'Oops! No Data Found'}</center>
        </div>
    )
}
const mapStateToProps=state=>({
    temp:state.temp,
    user:state.user,
  })

export default connect(mapStateToProps)(ViewData);