import React, { Component } from 'react';
import { View, StyleSheet,Button,Image,TextInput,Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class Login extends Component {
    onBlur() {
        console.log('#####: onBlur');
    }
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.logo_container}>
            <Image source={require("./q_logo.png")}/>
            </View>
            <View style={styles.login_container}>
            <Text style={styles.login_text} >LOGIN</Text>
            <View style={styles.inputtext_container}>
             <TextInput style = {styles.input}
                           underlineColorAndroid = "white"
                           placeholder = "Email"
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           onChangeText = {this.handleEmail}/>

                        <TextInput style = {styles.input}
                           underlineColorAndroid = "white"
                           placeholder = "Password"
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           onChangeText = {this.handlePassword}/>
            </View>
             <Button style={styles.login_button} title="Login" onPress={()=>{this.props.navigation.navigate('HomeScreen')}}/>
            </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
    flexDirection:'column',
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'white',
    },
    logo_container:{
    flexDirection: 'column',
    flex: 1,
    padding: 20,
     alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
    },
  login_container:{
    flexDirection: 'column',
    flex: 4,
     alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#2D58A7',
    },

    login_text:{
        flex: 1,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
         padding: 20,
        justifyContent: 'center',
       alignItems: 'center',
        backgroundColor:'#2D58A9',
        },
 inputtext_container:{
    flexDirection: 'column',
    flex: 1,
    height: 50,
    justifyContent: 'space-between',
    },
    input:{
         height: 40,
          borderColor: 'white',
          borderWidth: 2,
          borderRadius: 20,
        },
 login_button:{

    height: 30,
    justifyContent: 'center',
    backgroundColor:'#2D58A9',
    }


    }

)

