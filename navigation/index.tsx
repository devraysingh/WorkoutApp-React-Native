import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PlannerScreen from "../screens/PlannerScreen";
import { FontAwesome, Entypo } from '@expo/vector-icons';



export default function Navigation() {

    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    )
}

const Stack = createNativeStackNavigator();
function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}


const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
    return (
        <BottomTab.Navigator initialRouteName="Home">
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    unmountOnBlur: true, tabBarIcon: ({ color, size }) =>
                        <FontAwesome
                            name="home"
                            size={size}
                            color={color}
                        />
                }}
            />
            <BottomTab.Screen
                name="Planner"
                component={PlannerScreen}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <Entypo
                            name="add-to-list"
                            size={size}
                            color={color}
                        />
                }}
            />
        </BottomTab.Navigator>
    )
}