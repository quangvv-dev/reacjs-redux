import React, { Component } from 'react'
import { connect } from 'react-redux';//ket noi de lay dulieu tu store xuong
import {listAdd,Delete_List,Edit_List, Update} from '../actions/index';


class Formlist extends Component {
//khoi tao constructor
    constructor(props)
    {
        super(props);
        //khoi tao state luu tam
        this.state  = {
            name:'',
            age:'',
        }
    }
// target gia tri input
    handleChange = (e) =>
    {
        var target = e.target;
        var name = target.name;
        var value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
          [name]: value
        });
    }

    onSubmit =(e)=>{
        e.preventDefault();
        this.props.onAddItem(this.state)
        
        // console.log('this.state');
    }
    onDelete = id => e => {
        this.props.onDeleteItem(id);
                        }
    onEdit=item=>e=>{
        this.props.onUpdateItem(item);
        console.log(item)
    }
    
 _renderTable(){
     if(this.props.tasks){
        return this.props.tasks.map((item,i)=>{
            return(
            <tr key={i}>
                <td >{item.id}</td> 
                <td>{item.name}</td> 
                <td>{item.age}</td>
                <td>
                    <button type="submit" className="btn btn-warning btn-sm" data-toggle="modal" data-target="#myModal" onClick={this.onEdit(item)} >Edit</button>
                    <button type="submit" className="btn btn-danger btn-sm" onClick={this.onDelete(item.id)} >Delete</button>
                </td>
            </tr>)
            })
     }
    return null;
 }
 handleUpdate = (event) => {
    event.preventDefault();
    const changeUser = {
      id: this.props.inf.id,
      name: this.refs.name.value,
      age: this.refs.age.value,
      
    }
    this.props.Update(changeUser);
    console.log(changeUser)
  }

  render() {
      
    //   var {tasks}=this.props; // const tasks = this.props.tasks; props cua redux
    // console.log(this.props.tasks);

// console.log(this.state.info)
    return (
      <div className="list">
       <div className="modal" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
      
        {/* <!-- Modal Header --> */}
        <div className="modal-header">
          <h4 className="modal-title">Sua User</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
        {/* <!-- Modal body --> */}
        <div className="modal-body">
         <div className="form-group">
          <label >Name:</label>
          <input type="text" className="form-control" name="name" ref="name" defaultValue={this.props.inf.name} />
          <label >Age:</label>
          <input type="text" className="form-control" name="age" ref="age"  defaultValue={this.props.inf.age} />
        </div>
        </div>
        
        {/* <!-- Modal footer --> */}
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" onClick={this.handleUpdate} >Update</button>
          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
                <div className="main-content">
                <div className="section__content section__content--p30">
                <h2>Display</h2>
                
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="table-responsive table--no-card m-b-30">
                                    <table className="table table-borderless table-striped table-earning">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>NAME</th>
                                                <th>AGE</th>
                                                <th>ThaoTac</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {this._renderTable()}
                                        </tbody>
                                    </table>

                                    <form >

                                    <label >Name:</label>

                                    <input type={"text"} className="form-control" name="name" onChange={this.handleChange}  />

                                    <label>age:</label>

                                    <input type="text" className="form-control"  name="age"  onChange={this.handleChange} />
                                    <button type="submit" className="btn btn-primary" onClick={this.onSubmit} >ADD</button>
                                    </form>
                                                            
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyright">
                                    <p>Copyright © 2018 Colorlib. All rights reserved. Template by <a href="https://colorlib.com">Colorlib</a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
      </div>
    )
  }

   
}

//lay du lieu tu store xuong de hien thi

const mapStatetoProps = (state) => {
   
    return {
        
        tasks: state.tasks.info,
        inf:state.tasks.inf
        
    }
    // console.log(tasks)
}
// dispatch du lieu len store
const mapDispatchtoProps =(dispatch,props)=>{
    return {
        onAddItem:      (itemName) => dispatch(listAdd(itemName)),
        onDeleteItem: (id) => dispatch(Delete_List(id)),
        onUpdateItem: (item) => dispatch(Edit_List(item)),
        Update: (item) => dispatch(Update(item))
      }
    }


export default connect(mapStatetoProps,mapDispatchtoProps)(Formlist);
