let initialState={
    temp:'how are u'
}
export default function(state=initialState,action)
{
    switch(action.type)
    {
        case 'user':
           return {
               ...state,
               user:action.payload
           }
        default:
            return state;
    }
}