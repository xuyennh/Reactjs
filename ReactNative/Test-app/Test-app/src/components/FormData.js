import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
class FormData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        };
    }
    handlePress() {
        const { navigation } = this.props;
        let itemId = navigation.getParam('id', null);
        console.log('id of form', itemId)
        if (itemId !== null) {
            if (this.state.content !== '') {
                let data = {
                    id: itemId,
                    content: this.state.content
                }
                this.props.update(data)
            }
        } else {
            this.props.add(this.state);
        }
        this.props.navigation.navigate('List', {
            titleParam: 'To Do List',
        });
    }
    render() {
        let itemId = null;
        let color = 'green';
        let textBtn = 'Thêm';
        let content = '';
        if (this.props) {
            let { navigation } = this.props;
            itemId = navigation.getParam('id', null);
            content = navigation.getParam('content', '');
            if (itemId !== null) {
                color = 'blue';
                textBtn = 'Sửa';
            }
        };
        return (
            <View style={styles.container}>
                <Text>Nhập nội dung Task:</Text>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Nhập vào đây..."
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ content: text })}
                    defaultValue={content} />
                <Button color={color} title={textBtn} onPress={() => this.handlePress()} />
            </View>
        );
    }
}

export default FormData

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        paddingLeft: 5
    }
})
