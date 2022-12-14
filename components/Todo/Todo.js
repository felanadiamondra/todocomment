import { View, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
function Todo(props){
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
            </View>
            <Text>{props.text}</Text>
        </View>
    )
}  

const styles = StyleSheet.create({
    item : {
        backgroundColor : '#fff',
        padding : 15,
        borderRadius : 10,
        flexDirection : 'row',
        alignItems : 'center' , 
        justifyContent : 'space-between',
        marginBottom : 20
    },

    itemLeft : {
        flexDirection : 'row',
        alignItem : 'center',
        flexWrap : 'wrap'
    },

    square : {
        width : 24,
        height : 24,
        backgroundColor : '#55BCF6',     
        opacity : 0.4,
        borderRadius : 5, 
        marginRight : 15
    } , 
    itemText : {
        maxWidth : '80%'
    } , 
    circular : {
        width: 12,
        height : 12,
        borderColor : '#55BCF6',
        borderWidth : 2,
        borderRadius : 5 
    }
})

export default Todo;