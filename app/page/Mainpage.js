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
            dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
        }
    }

    //右侧按钮
    _rightButton () {

    }

    render () {
        return (
            <View style={styles.container}>
                {/* header */}
                <NavBar
                    title="快递宝"
                    style={this.state.theme.styles.navBar}
                    statusBar={{backgroundColor: this.state.theme.themeColor}}
                    rightButton={this._rightButton()}
                    hide={false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white
    }
})