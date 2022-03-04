import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Avatar, Button } from "react-native-elements";
import UsersContext from "../context/UsersContext";

export default ({ route, navigation }) => {

    const [user, setUser] = useState( route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nome: </Text>
            <TextInput 
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o Nome"
                value={user.name}
                style={styles.input}
            />
            <Text style={styles.title}>E-mail: </Text>
            <TextInput 
                onChangeText={email => setUser({...user, email})}
                placeholder="Informe o E-mail"
                value={user.email}
                style={styles.input}
            />
            <Text style={styles.title}>URL do Avatar: </Text>
            <TextInput 
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder="Informe o E-mail"
                value={user.avatarUrl}
                style={styles.input}
            />
            <Button 
                title="Salvar"
                onPress={()=>{
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigation.goBack()
                }}
                style={styles.button}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    title: {
        fontSize: 25
    },
    input: {
        borderWidth: 1,
        borderColor: '#b5b5b5',
        padding: 5,
        marginBottom: 20
    }
})