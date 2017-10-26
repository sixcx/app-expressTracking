import React, {Component} from "react"
import {Navigator} from "react-native-deprecated-custom-components"
import Welcome from "../page/Welcome"

export default class Navigation extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    _renderScene(route, navigator) {
        return <route.component navigator={navigator}  {...route.params} />;
    }

    configureScene(route, routeStack) {
        if (route.type == 'Bottom') {
          return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
        }
        return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
    }

    render () {
        return (
            <Navigator
                initialRoute = {{
                    name: 'Welcome',
                    component: Welcome
                }}
                configureScene={this.configureScene}
                renderScene = {this._renderScene}
             />
        )
    }
}