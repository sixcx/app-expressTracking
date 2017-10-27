/*
 * @Author: pbh 
 * @Date: 2017-10-27 09:50:55 
 * @Last Modified by: pbh
 * @Last Modified time: 2017-10-27 10:22:32
 */

 import React from "react"
 import Color from "../res/style/Color"
 import {
     Image, TouchableOpacity, StyleSheet, Text, View
 } from "react-native"

 export default class pageUtil {
     static getMoreButton(callBack) {
         return <TouchableOpacity
                ref='moreMenuButton'
                underlayColor='transparent'
                style={{padding: 5}}
                onPress={callBack}>
             <View style={{paddingRight: 8}}>
                 <Image style={{width: 24, height: 24, marginLeft: 5}}
                    source={require('../res/image/more.png')}
                  />
             </View>
         </TouchableOpacity>
     }
 }