import { View, Text, FlatList, StyleSheet, Pressable } from "react-native"
import { useEffect } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import data from "../data.json";
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {

    useEffect(() => {
        console.log("Rending Home Screen");

        return () => console.log("Unmounting Home Screen")
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.header}>New Workouts</Text>

            <FlatList
                data={data as Workout[]}
                renderItem={({ item }) => {
                    return (
                        <Pressable onPress={() => navigation.navigate("WorkoutDetail", { slug: item.slug })}>
                            < WorkoutItem item={item} />
                        </Pressable>
                    )
                }}
                keyExtractor={item => item.slug}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    header: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: "bold"
    }
})