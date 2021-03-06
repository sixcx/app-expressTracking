/*
 * @Author: pbh 
 * @Date: 2017-10-26 17:43:55 
 * @Last Modified by: pbh
 * @Last Modified time: 2017-10-27 15:07:49
 */

 import React, {Component} from "react"
 import common from "./common"
 import theme, {themeFlag} from "../res/style/theme"
 import moment from "moment"
 import Color from "../res/style/Color"

 export default class localData extends Component {
     constructor (props) {
         super (props)
     }

     //保存主题
     saveThemeDataToLocal(theme){
        console.log(theme);
        storage.save({
            key: common.SeachRemarkKey,
            id: common.SeachRemarkKey,
            data: theme,
            expires: null
        });
    }
     //获取主题
     loadThemeFromLocal () {
         return new Promise((resolve, reject) => {
            storage.load({
                key:common.SeachRemarkKey,
                id:common.SeachRemarkKey
            }).then(theme => {
                if(theme){
                    resolve(theme.createTheme(theme));
                }else {
                    resolve(theme.createTheme(themeFlag.Blue));
                }
            }).catch(err => {
                resolve(theme.createTheme(themeFlag.Blue));
            });
         })
     }
 }