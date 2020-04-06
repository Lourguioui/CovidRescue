import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Root } from 'native-base';
import Register from './screens/Register';
import Login from './screens/Login';;
import HomeScreen from './screens/HomeScreen';
import Confirm from './screens/Confirm'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const StackNavigator = createStackNavigator();
console.disableYellowBox = true;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <NavigationContainer>
      <StackNavigator.Navigator initialRouteName = "Login" screenOptions={{headerShown:false, }}>
        <StackNavigator.Screen name="Login" component={Login} />
        <StackNavigator.Screen name="main" component={HomeScreen} />
        <StackNavigator.Screen name="Register" component={Register} />
        <StackNavigator.Screen name="Confirm" component={Confirm} />
           
      </StackNavigator.Navigator>
    </NavigationContainer>
    );
  }
}

