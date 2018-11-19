import React, { Component } from 'react';
import { View,Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

// import FloatLabelTextInput from 'react-native-floating-label-text-input';

export default class Home extends Component {
    onBlur() {
        console.log('#####: onBlur');
    }
    render() {
        return (
            <View style={styles.container}>
              <Text>"Home"</Text>
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
    logincontainer:{
    flexDirection: 'column',
    flex: 4,
    justifyContent: 'center',
    backgroundColor:'#2D58A7',
    }


    }

)

