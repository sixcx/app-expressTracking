/*
 * @Author: pbh 
 * @Date: 2017-10-26 18:03:38 
 * @Last Modified by:   pbh 
 * @Last Modified time: 2017-10-26 18:03:38 
 */

import Storage from "react-native-storage";
import {AsyncStorage} from "react-native";
var storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,
})
global.storage = storage;