/*
 * @Author: pbh 
 * @Date: 2017-10-25 16:25:37 
 * @Last Modified by: pbh
 * @Last Modified time: 2017-10-27 15:45:35
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

    leftButton () {
        let leftButton = this.props.leftButtonTitle ?
            <Text style = {styles.title}>{this.props.leftButtonTitle}</Text> : null;
        return (
            <TouchableOpacity onPress-={this.onButtonClick()}>
                <View style={{width: 50, alignItems: 'center', flex: 1, justifyContent: 'center'}}>
                    {this.props.leftView ? this.props.leftView : leftButton}
                </View>
            </TouchableOpacity>
        )
    }
    
    onButtonClick () {
        if (this.props.navigator && this.props.popEnabled) {
            this.props.navigator.pop();
        }
        if (this.props.onLeftButtonClick) {
            this.props.onLeftButtonClick();
        }
    }

    getButton (data = {}, style) {
        return (
            <View>
                {(!!data.props) ? data : (
                    <NavButton 
                        title={data.title}
                        style={[data.style, style]}
                        tintColor={data.tintColor}
                        handler={data.handler} />
                )}
            </View>
        )
    }

    render () {
        let statusBar = this.props.statusBar.hidden ? null :
        <View style={styles.statusBar}>
            <StatusBar {...this.props.statusBar} barStyle="light-content" style={styles.statusBar}/>
        </View>;
        
        let title = this.props.titleView ? this.props.titleView :
        <Text style={styles.title} ellipsizeMode="head" numberOfLines={1}>{this.props.title}</Text>
        
        let content = this.props.hide ? null :
        <View style={styles.navBar}>
            {this.getButton(this.props.leftButton)}
            <View style={[styles.navTitle, this.props.titleLayoutStyle]}>
                {title}
            </View>
            {this.getButton(this.props.rightButton, {marginRight: 8})}
        </View>;

        return (
            <View style={[styles.container, this.props.style]}>
                {statusBar}
                {content}
            </View>
        )
    }
}

class NavButton extends Component {
    render () {
        return (
            <TouchableOpacity style={styles.navButton} onPress={this.props.handler}>
                <View style={this.props.style}>
                    <Text style={[styles.title, {color: this.props.tintColor}]}>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4caf50',
    },
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: Platform.OS === 'ios' ? NAV_HEIGHT_IOS : NAV_HEIGHT_ANDROID
    },
    navTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 40,
        top: 0,
        right: 40,
        bottom: 0
    },
    title: {
        fontSize: 18,
        color: '#FFFFFF'
    },
    navButton: {
        alignItems: 'center'
    },
    statusBar: {
        height: Platform.OS === 'ios' ? STATUSBAR_HEIGHT : 0
    }
})