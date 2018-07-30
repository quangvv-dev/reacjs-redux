import  {LIST_ALL,ADD_LIST,DELETE_LIST,EDIT_LIST, UPDATE} from '../constants/actionType' //khao bao action type

//khai báo initialState của store
var initialState    =   {
    info:[
        { id:1, name:'quang',age:23},
        { id:2,name:'hoa',age:18}

    ],
    inf:{}
}
//set xử lý action
var myReducer   =(state = initialState, action) => {
switch (action.type)
    {
// xu lý action hiển thi
        case LIST_ALL:
        return state

//xử lý action AddItem
        case ADD_LIST:
        return{
            ...state,
            info: state.info.concat({id: state.info.length+1,
                 name: action.itemName.name,
                 age: action.itemName.age})
        }
        
        case DELETE_LIST:{
            console.log(action);
            return {...state, info:state.info.filter(item => item.id !== action.id)}
        }

        case EDIT_LIST:
        console.log(action.item)
        return {...state,inf:action.item}

        case UPDATE:
        return { ...state,info: state.info.map(item =>{
            if(item.id === action.changeUser.id){
                item = action.changeUser;
            }
            return item;
        })}
            

      
        default: return state
    }
    


    

}
export default myReducer;
