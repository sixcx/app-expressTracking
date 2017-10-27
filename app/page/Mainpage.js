import React, {Component} from "react"
import {
    BackHandler,
    DeviceEventEmitter,
    Image,
    ListView,
    RefreshControl,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import NavBar from "./NavBar"
import Color from "../res/style/Color"
import pageUtil from "../util/pageUtil"
import MoreMenu, {MORE_MENU} from "./MoreMenu"

export default class Mainpage extends Component {
    constructor (props) {
        super (props)
        this.state = {
            theme: this.props.theme,
            customThemeVisible: false,
            isLoading: false,
            isEmptyOrFail: false,
            emptyOrFailTip: '',
            tractData: null,
            anchorView: this.refs.moreMenuButton,
            dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
        }
    }

    //右侧按钮
    _rightButton () {
        return pageUtil.getMoreButton(() => {
            this.refs.moreMenu.open();
            this.setState({
                anchorView: this.refs.moreMenuButton
            })
        })
    }
    
    //渲染更多页面
    _renderMore () {
        let params = {...this.props, theme: this.state.theme};
        return <MoreMenu
        {...params}
        ref="moreMenu"
        menus={[MORE_MENU.Theme, MORE_MENU.About, MORE_MENU.Share]}
        contentStyle={{right: 20}}
        onMoreMenuSelect={(e) => {
            if (e === MORE_MENU.Theme) {
                this.setState({
                    customThemeVisible: true
                })
            }
        }}
        anchorView={this.state.anchorView}
        navigator={this.props.navigator}/>
    }

    //菜单
    _renderMenu () {
        return <View style={[styles.menuContainer, this.props.theme.styles.navBar]}>
            <TouchableOpacity activeOpacity={0.5} style={styles.menuItem}
                onPress={() => this._clickMenu('查快递')}>
                <Image source={require('../res/image/search.png')} style={styles.menuImage}/>
                <Text style={styles.menuText}>查快递</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.menuItem}
                onPress={() => this._clickMenu('寄快递')}>
                <Image source={require('../res/image/post.png')} style={styles.menuImage}/>
                <Text style={styles.menuText}>寄快递</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.menuItem}
                onPress={() => this._clickMenu('扫码')}>
                <Image source={require('../res/image/sweep.png')} style={styles.menuImage}/>
                <Text style={styles.menuText}>扫码</Text>
            </TouchableOpacity>
        </View>
    }

    _clickMenu (name) {
        switch (name) {
            case "查快递":
                /* this.props.navigator.push({
                    component: aa,
                    params: {
                        title: name,
                        theme: this.state.theme
                    }
                }) */
                console.log(name);
                break;
            case "寄快递":
                /* this.props.navigator.push({
                    component: aa,
                    params: {
                        title: name,
                        theme: this.state.theme
                    }
                }) */
                console.log(name);
                break;
            case "扫码":
                /* this.props.navigator.push({
                    component: aa,
                    params: {
                        title: name,
                        theme: this.state.theme
                    }
                }) */
                console.log(name);
                break;
            default: 
                break;
        }
    }
    render () {
        return (
            <View style={styles.container}>
                {/* header */}
                <NavBar
                    title="快递吧"
                    style={this.state.theme.styles.navBar}
                    statusBar={{backgroundColor: this.state.theme.themeColor}}
                    rightButton={this._rightButton()}
                    hide={false}
                />

                {this._renderMenu()}
                {this._renderMore()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white
    },
    menuContainer: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    menuItem: {
        alignItems: 'center'
    },
    menuImage: {
        width: 38,
        height: 38,
        padding: 8
    },
    menuText: {
        fontSize: 16,
        color: Color.white,
        marginTop: 8
    }
})