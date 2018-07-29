import  {LIST_ALL,ADD_LIST,DELETE_LIST} from '../constants/actionType' // lấy actionType

//action hien thi
export const listAll = () =>{
    return{
        type: LIST_ALL

    }
}
//action addItem
export const listAdd = (itemName) =>{
    return{
        type: ADD_LIST,
        itemName

    }
}
//action deleletItem
export const Delete_List = (id) =>{
    return{
        type: DELETE_LIST,
        

    }
}