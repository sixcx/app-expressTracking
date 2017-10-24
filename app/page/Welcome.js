import React, {Component} from "react"
import {Image, StyleSheet, View, Text, Dimensions, TouchableOpacity} from "react-native"
const {height, width} = Dimensions.get('window')

export default class Welcome extends Component {
    constructor (props) {
        super(props)

        this.state = {
            time: 3,
            hidden: false
        }
    }

    componentDidMount () {
        this.timer = setInterval(() => {
            if (this.state.time > 0) {
                this.setState({
                    time: --this.state.time
                }, () => {
                    if (this.state.time < 1) {
                        this.setState({
                            hidden: true
                        })
                    }
                }) 
            }
            
        }, 1000)
    }

    componentWillUnmount () {
        clearInterval(this.timer)
    }

    close () {
        this.setState({
            hidden: true
        })
    }

    render () {
        return (
            !this.state.hidden ?
            <View style={styles.container}>
                <Image style={{width: width, height: height}} resizeMode={'contain'}
                    source={require('../res/main.png')} />
                <TouchableOpacity style={{position:'absolute',height:23,width:54,top:33,right:25,backgroundColor:'rgba(0,0,0,0.2)',borderRadius:11,display:'flex',justifyContent:'center',alignItems:'center'}} onPress={()=>this.close()}>
                    <Text style={{color:"#fff"}}>跳过{this.state.time}</Text>
                </TouchableOpacity>
            </View> :
            null
        )
    }  
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})