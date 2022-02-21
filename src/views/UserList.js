import React from "react";
import { View, Text, FlatList } from "react-native";
import { Avatar, Button, Icon } from "react-native-elements";
import users from "../data/users"

export default () => {

    function getUserItem({ item }) {
        return (
            <View style={{flexDirection: "row", padding: 10}}>
                <Avatar 
                    size={80}
                    rounded
                    source={{uri: item.avatarUrl}}
                    style={{ flex: 1 }}
                />
                <View style={{padding: 20, flex: 2}}>
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>{item.name}</Text>
                    <Text>{item.email}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center"}}>
                    <Button 
                        type="clear"
                        icon={<Icon name="edit" size={20} color="orange"/>}
                        onPress={() => console.warn('Editando - ' + item.name)}
                    />
                    <Button 
                        type="clear"
                        icon={<Icon name="delete" size={20} color="red"/>}
                        onPress={() => console.warn('Deletando - ' + item.name)}
                    />
                </View>
            </View>
        )
    }

    return (
        <View>
            <FlatList 
                keyExtractor={item => item.id}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}