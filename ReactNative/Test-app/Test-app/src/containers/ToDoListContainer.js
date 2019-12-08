import React, { Component } from 'react';
import {connect} from 'react-redux'
import { View } from "react-native";
import ToDoList from '../components/ToDoList'
import * as actions from '../actions/ToDoListScreenActions'
class ToDoListContainer extends Component {
componentDidMount(){
    this.props.initLoad()
}
  render() {
    return (
        <View className="toDoListContainer" >
            <ToDoList {...this.props}/>
        </View>
      
    );
  }
}
//mapStateToProp
const mapStateToProps = (state) => {
    return {
        todos: state.todos.listToDo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        initLoad : () => {
            dispatch(actions.getData())
        },
        delete: (id) => {
            dispatch(actions.deleteData(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ToDoListContainer)