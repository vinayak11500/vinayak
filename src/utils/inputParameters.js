export const userDetails=[
    {
        title:'First Name',
        type:'text',
        maxlength:15,
        placeholder:'Enter First Name',
        id:'fname',
        required:true
    },
    {
        title:'Middle Name',
        type:'text',
        maxlength:15,
        placeholder:'Enter Middle Name',
        id:'mname',
        required:false
    },
    {
        title:'Last Name',
        type:'text',
        maxlength:15,
        placeholder:'Enter Last Name',
        id:'lname',
        required:true
    },
    {
        title:'Gender',
        type:'radio',
        id:'gender',
        options:['Male','Female'],
        required:true
    },
    {
        title:'Country',
        type:'select',
        id:'country',
        options:['','India','US','UK','Iceland','Australia'],
        required:true,
        defaultValue:'India'
    },
]