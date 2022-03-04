import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import UserList from "./views/UserList";
import UserForm from "./views/UserForm";
import { Button, Icon } from "react-native-elements";
import { UsersProvider } from "./context/UsersContext";

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <UsersProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="UserList"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#0ea512'
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: "bold"
                        }
                    }}
                >
                    <Stack.Screen
                        name="UserList"
                        component={UserList}
                        options={({ navigation }) => {
                            return {
                                title: "Lista de Usuários",
                                headerRight: () => (
                                    <Button
                                        type="clear"
                                        icon={<Icon name="add" size={20} color="white" />}
                                        onPress={() => { navigation.navigate("UserForm") }}
                                    />
                                )
                            }
                        }}
                    />
                    <Stack.Screen
                        name="UserForm"
                        component={UserForm}
                        options={{ title: "Formulário" }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>
    );
}