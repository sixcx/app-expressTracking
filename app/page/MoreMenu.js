/*
 * @Author: pbh 
 * @Date: 2017-10-27 10:55:00 
 * @Last Modified by: pbh
 * @Last Modified time: 2017-10-27 16:39:01
 */

 import React, {Component} from "react"
 import {Share, Text, TouchableHighlight, View, Platform} from "react-native"
 import Popover from "../component/Popover"
 import common from "../data/common"
 import pageUtil from "../util/pageUtil"

 export const MORE_MENU = {
     Theme: "主题",
     About: "关于",
     Share: "分享"
 }

 export default class MoreMenu extends Component {
     constructor (props) {
         super (props)
         this.state = {
             isVisible: false,
             buttonRect: {}
         }
     }

     //打开
     open () {
         this.showPopover();
     }

     showPopover () {
         if (!this.props.anchorView) {
             return;
         }
         let anchorView = this.props.anchorView;
         anchorView.measure((ox, oy, width, height, px, py) => {
             this.setState({
                 isVisible: true,
                 buttonRect: {x: px, y: py, width: width, height: height}
             })
         })
     }

     //关闭
     closePopover () {
         this.setState({
             isVisible: false
         })
         if (typeof this.props.onClose === 'function') {
             this.props.onClose();
         }
     }

    onMoreMenuSelect (tab) {
        this.closePopover();
        if (typeof this.props.onMoreMenuSelect == 'function') {
            this.props.onMoreMenuSelect(tab);
        }
        let targetComponent, params = {...this.props, menuType: tab};
        switch (tab) {
        case MORE_MENU.Theme:
            break;
        case MORE_MENU.About:
            //targetComponent = AboutPage;
            break;
        case MORE_MENU.Share:
            this.onShare();
            break
        }
        if (targetComponent) {
            this.props.navigator.push({
                component: targetComponent,
                params: params
            })
        }
    }

    renderMore () {
        let more = <Popover
            isVisible={this.state.isVisible}
            fromRect={this.state.buttonRect}
            placement="bottom"
            onClose={() => {this.closePopover()}}
            contentStyle={{opacity: 0.82, backgroundColor: '#343434'}}
            contentMarginRight={20}>
            <View>
                {this.props.menus.map((item, i, arr) => {
                    return <TouchableHighlight key={i} onPress={ () => {this.onMoreMenuSelect(arr[i])}} underlayColor='transparent'>
                        <Text style={{
                            marginRight: 10,
                            marginLeft: 10,
                            fontSize: 16,
                            color: 'white',
                            padding: 8,
                            fontWeight: '400'
                        }}>
                            {arr[i]}
                        </Text>
                    </TouchableHighlight>
                })}
            </View>
        </Popover>;
        return more;
    }

    onShare () {
        Share.share({
            message: common.shareContent + (Platform.OS === 'ios' ? "" : common.shareUrl),
            url: common.shareUrl,
            title: common.shareTitle
        }, {
            dialogTitle: common.shareTitle,
            excludedActivityTypes: [
                'com.apple.UIKit.activity.PostToTwitter'
            ],
            tintColor: 'green'
        })
    }

    render (){
        return (
            this.renderMore()
        )
    }
 }