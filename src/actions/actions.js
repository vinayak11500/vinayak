export const getUserDetails=(userData)=>dispatch=>{
    dispatch({
        type:'user',
        payload:userData
    })
}