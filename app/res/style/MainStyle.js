/*
 * @Author: pbh 
 * @Date: 2017-10-25 17:06:02 
 * @Last Modified by: pbh
 * @Last Modified time: 2017-10-25 17:20:44
 * 全局样式
 */
import {Dimensions} from "react-native"
import Color from "./Color"

const {height, width} = Dimensions.get('window');

module.exports = {
    listView_main: {
        flex: 1,
        backgroundColor: Color.white
    },
    backgroundColor: Color.white,
    listView_height: (height-(60)),
    window_height: height,
    window_width: width,
    navbar_height_ios: 44,
    navbar_height_android: 50,
    line: {
        flex: 1,
        height: 0.4,
        opacity: 0.5,
        bacgroundColor: 'darkgray'
    },
    cell_main: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        marginVertical: 3,
        borderColor:Colors.lightgray,
        borderStyle: null,
        borderWidth: 0.5,
        borderRadius: 2,
        shadowColor:Colors.gray,
        shadowOffset: {width:0.5, height: 0.5},
        shadowOpacity: 0.4,
        shadowRadius: 1,
        elevation:2
    }
}