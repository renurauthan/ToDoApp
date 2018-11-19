import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './Login';
import Home from './Home';
/*const { navigate } = this.props.navigation;*/


export class Splash extends Component {

static navigationOptions = {
      header: null
  };
  constructor() {

    super();

    this.state = {

      isVisible: true,

    }

  }

  Hide_Splash_Screen = () => {

    this.setState({
      isVisible: false

    });
  }
   componentDidMount(){
        setTimeout(() => {
        this.Hide_Splash_Screen();
            this.props.navigation.navigate('LoginScreen')
          }, 1000);
      }

  render() {
    return (

      <View style={styles.container}>
        <Image source={require("./logo.png")}
          style={styles.imageStyle}>
        </Image>
     <Text style={styles.textStyle}> Feel Free ToDO
              </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16a085',
    alignItems: 'center',
    justifyContent: 'center',

  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  textStyle: {
    fontSize: 18,
    color: '#000000'
  }
});



export default class App extends Component{

render(){
return(
<RootStack/>
);
}
}
const RootStack = createStackNavigator(
  {
   SplashScreen: Splash,
    LoginScreen: Login,
    HomeScreen: Home,

  },
  {
    initialRouteName: 'SplashScreen',
  }
);

