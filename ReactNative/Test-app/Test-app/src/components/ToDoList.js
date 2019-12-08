import React, { Component } from 'react';
import { View, Text, Button, ScrollView } from "react-native";
class ToDoList extends Component {
    updateTask(id, content){
        this.props.navigation.navigate('Form', {
            titleParam: 'Update Form With ID: '+ id,
            id: id,
            content: content
        });
    }
    addTask(){
        this.props.navigation.navigate('Form', {
            titleParam: 'Add Form',
        });
    }
    deleteTask(id){
        this.props.delete(id);
    }
    render() {
        let listTask = [];
        if (this.props.todos) {
            console.log('this.props.todos', this.props.todos)
            listTask = this.props.todos.map((item, key) => {
                return (
                    <View key={key} style={{ flex: 1, flexDirection: 'row'}}>
                        <View style={{ width: '70%', height: 'auto', backgroundColor: 'powderblue', borderColor :"white", borderWidth:2  }}>
                            <Text>
                                {item.content}
                            </Text>
                        </View>
                        <View style={{ width: "30%", height: 'auto', backgroundColor: 'steelblue', borderColor :"white", borderWidth:2 }}>
                            <Button  color="blue" title="Sửa" onPress={() => this.updateTask(item.id, item.content)} />
                            <Button  color="pink" title="Xóa" onPress={() => this.deleteTask(item.id)} />
                        </View>
                    </View>
                )
            })
        } else {
            console.log('no props')
        }
        return (
            <ScrollView className="toDoList" >
                <Button color="green" title="Thêm" onPress={() => this.addTask()} />
                {listTask}
            </ScrollView>

        );
    }
}

export default ToDoList
