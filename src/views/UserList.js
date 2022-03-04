import React, { useContext } from "react";
import { 
    View, 
    Text, 
    FlatList, 
    StyleSheet, 
    Alert
} from "react-native";
import { 
    Avatar, 
    Button, 
    Icon 
} from "react-native-elements";
import UsersContext from "../context/UsersContext";

export default (props) => {

    const { state, dispatch } = useContext(UsersContext)

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário.', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não',
                onPress() {
                    console.warn('Operação Cancelada')
                }
            }
        ])
    }

    function getUserItem({ item }) {
        return (
            <View style={styles.container}>
                <Avatar 
                    size={80}
                    rounded
                    source={{uri: item.avatarUrl}}
                    style={{ flex: 1 }}
                />
                <View style={styles.viewText}>
                    <Text style={styles.textTitle}>{item.name}</Text>
                    <Text>{item.email}</Text>
                </View>
                <View style={styles.buttons}>
                    <Button 
                        icon={<Icon name="edit" size={20} color="orange"/>}
                        onPress={() => props.navigation.navigate("UserForm", item)}
                        type="clear"
                    />
                    <Button 
                        icon={<Icon name="delete" size={20} color="red"/>}
                        onPress={() => confirmUserDeletion(item)}
                        type="clear"
                    />
                </View>
            </View>
        )
    }

    return (
        <View>
            <FlatList 
                keyExtractor={item => item.id}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", 
        padding: 10
    },
    viewText: {
        padding: 20, 
        flex: 2
    },
    textTitle: {
        fontSize: 20, 
        fontWeight: "bold"
    },
    buttons: { 
        flex: 1, 
        flexDirection: "row", 
        alignItems: "center"
    }
})