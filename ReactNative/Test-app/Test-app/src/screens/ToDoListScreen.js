import React from "react";
import { View } from "react-native";
import ToDoListContainer from '../containers/ToDoListContainer'
class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam('titleParam', '!!!No Title!!!'),
      };
    };
  
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ToDoListContainer {...this.props}/>
        </View>
      );
    }
  }

export default DetailsScreen
