import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

import MealsList from '../components/mealsList/MealsList';
import { useSelector } from "react-redux";

export function FavoritesScreen() {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);

    const favoriteMeals = MEALS.filter((meal) =>
        favoriteMealIds.includes(meal.id)
    )

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You don't have no favorite meals yet.</Text>
            </View>
        )
    }

    return <MealsList items={favoriteMeals} />
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontWeight: "bold",
        fontSize: 18,
    }
})