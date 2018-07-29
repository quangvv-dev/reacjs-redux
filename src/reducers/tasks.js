import  {LIST_ALL,ADD_LIST} from '../constants/actionType' //khao bao action type

//khai báo initialState của store
var initialState    =   {
    info:[
        { id:1, name:'quang',age:23},
        { id:2,name:'hoa',age:18}

    ]
}


//set xử lý action
var myReducer   =(state =initialState,action) =>{
switch (action.type)
    {
// xu lý action hiển thi
        case LIST_ALL:
        return state

//xử lý action AddItem
        case ADD_LIST:
        return{
            ...state,
            info: state.info.concat({id:state.info.length+1,
                 name:action.itemName.name,
                 age:action.itemName.age})
        }
        // var newinfo=    {
        //     id:state.length + 1 ,
        //      name:action.itemName.name,
        //      age:action.itemName.age
        //     }

        // state.push(newinfo);
        // console.log(action );
        // return [...state];
        default: return state
    }


    

}
export default myReducer;
