import React, {Component} from "react";
import {Text,View} from "react-native";


export default class Meteors extends Component {
  render(){
    return(
      <View style = {{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text> Welcome To Meteors Screen</Text>
      </View>
    )
  }
}