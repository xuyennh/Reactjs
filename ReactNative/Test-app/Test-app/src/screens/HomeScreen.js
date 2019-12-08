import React from "react";
import { View, Text, Button } from "react-native";
class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="To Do List"
                    onPress={() => {
                        this.props.navigation.navigate('List', {
                            titleParam: 'To Do List',
                        });
                    }}
                />
            </View>
        );
    }
}

export default HomeScreen


