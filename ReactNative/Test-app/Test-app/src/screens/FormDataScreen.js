import React from "react";
import { View } from "react-native";
import FormDataContainer from "../containers/FormDataContainer";
class FormDataScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('titleParam', 'Form Data'),
        };
      };
    render() {
        return (
            <View>
                <FormDataContainer {...this.props}/>
            </View>
        );
    }
}

export default FormDataScreen

