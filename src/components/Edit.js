import React, { Component } from 'react'
import {connect} from 'react-redux'
  class Edit extends Component {
    onEdit=(e)=>{
        
        const update =this.props.tasks;
        this.props.onUpdateItem(update);
        console.log(update)
    }
    onDelete = id => e => {
        this.props.onDeleteItem(id);
                        }
  render() {
    var { info } = this.props;
    return (
            <tr key={info.id}>
                <td >{info.id}</td> 
                <td>{info.name}</td> 
                <td>{info.age}</td>
                <td>
                    <button type="submit" className="btn btn-warning btn-sm" data-toggle="modal" data-target="#myModal" onClick={this.onEdit} >Edit</button>
                    <button type="submit" className="btn btn-danger btn-sm" onClick={this.onDelete(info.id)} >Delete</button>
                </td>
            </tr>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
    //hàm này là đẩy dữ liệu lêm store
    return {
    //   onDeleteItem: (id) => dispatch(deleteItem(id)),
    //   onUpdateItem: (id) => dispatch(updateItem(id))
      // là dispath gửi dữ liêu vào action để nó gửi vào reducer
      //cai person owr dau ra the
      // cais nay đặt tên gì cũng đơợc, kiểu như biến 1 function
    }
  }
export default connect(null,mapDispatchToProps)(Edit);