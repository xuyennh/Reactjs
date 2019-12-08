import React, { Component } from 'react';
import {connect} from 'react-redux'
import { View } from "react-native";
import FormData from '../components/FormData'
import * as actions from '../actions/ToDoListScreenActions'
class FormDataContainer extends Component {

  render() {
    return (
        <View className="formDataContainer" >
            <FormData {...this.props}/>
        </View>
      
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add : (data) => {
            dispatch(actions.addData(data))
        },
        update: (data) => {
            dispatch(actions.updateData(data))
        }
    }
}

export default connect(null,mapDispatchToProps)(FormDataContainer)