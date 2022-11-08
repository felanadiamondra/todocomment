import { StyleSheet, View, Text } from 'react-native'
import Todo from './Todo';
function TodoList(){
    return(
        <View style={styles.container}>
            <View style={styles.todoWrapper}>
                <Text style={styles.header}> Todo </Text>
            </View>

            <View style={styles.todoitem}>
                <Todo text='Todo 1'/>
                <Todo text='Todo 2'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#E8EAED'
    },
    todoWrapper :{
        paddingHorizontal : 20,
        paddingTop : 80
    },
    header :{
        fontSize : 24,
        fontWeight : 'bold'
    },
    todoitem : {

    }
})

export default TodoList;