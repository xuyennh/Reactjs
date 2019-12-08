import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ToDoListScreen from './src/screens/ToDoListScreen'
import HomeScreen from './src/screens/HomeScreen'
import FormDataScreen from './src/screens/FormDataScreen'
import { Provider } from 'react-redux'
import store from './store'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ToDoListScreen,
    Form: FormDataScreen,
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <Provider store={store}>
      <AppContainer />
    </Provider>;
  }
}

