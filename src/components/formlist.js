import React, { Component } from 'react'
import { connect } from 'react-redux';//ket noi de lay dulieu tu store xuong
import {listAdd} from '../actions/index';



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
        // console.log(this.state);
    }

  render() {
      
      var {tasks}=this.props; // const tasks = this.props.tasks; props cua redux


// console.log(this.props.addTask(this.state))
    return (
      <div className="list">
            <h2>Display</h2>
                
                <div className="main-content">
                <div className="section__content section__content--p30">
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
                                            {tasks}
                    
                                        </tbody>
                                    </table>
                                    {/* form add */}
                                    <form >
                                    {/* <label >ID:</label>
                                    <input type={"text"} className="form-control"  name="id" onChange={this.handleChange}  /> */}
                                    
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
const mapStatetoProps = (state)=>{
    return {
        tasks:state.tasks.info.map((item,i)=><tr key={i}><td >{item.id}</td> <td>{item.name}</td> <td>{item.age}</td> <td><button type="button" className="btn btn-warning btn-sm">Edit</button>
        <button type="button" className="btn btn-danger btn-sm">Delete</button>
        </td></tr>)
    }
}
// dispatch du lieu len store
const mapDispatchtoProps =(dispatch,props)=>{
    return {
        onAddItem: (itemName) => dispatch(listAdd(itemName))
      }
    }


export default connect(mapStatetoProps,mapDispatchtoProps)(Formlist);
