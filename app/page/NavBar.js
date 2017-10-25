/*
 * @Author: pbh 
 * @Date: 2017-10-25 16:25:37 
 * @Last Modified by: pbh
 * @Last Modified time: 2017-10-25 18:55:11
 * NavBar组件
 */

import React, {Component} from "react"
import {
    StyleSheet,
    Navigator,
    Platform,
    TouchableOpacity,
    Image,
    StatusBar,
    Text,
    View
} from "react-native"
import Mainstyle from "../res/style/MainStyle"
const NAV_HEIGHT_IOS = Mainstyle.navbar_height_ios;
const NAV_HEIGHT_ANDROID = Mainstyle.navbar_height_android;
const STATUSBAR_HEIGHT = 20; 

export default class NavBar extends Component {
    constructor (props) {
        super (props)
        this.state = {
            title: "",
            popEnabled: true,
            hide: false
        }
    }

    render () {
        let statusBar = this.props.statusBar.hidden ? null :
        <View style={styles.statusBar}>
            <StatusBar {...this.props.statusBar} barStyle="light-content" style={styles.statusBar}/>
        </View>;
        let title = this.props.titleView ? this.props.titleView :
        <Text style={styles.title} ellipsizeMode="head" numberOfLines={1}>{this.props.title}</Text>
        return (
            <View></View>
        )
    }
}

const styles = StyleSheet.create({
    statusBar: {
        height: Platform.OS === 'ios' ? STATUSBAR_HEIGHT : 0
    }
})