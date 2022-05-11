import { useLayoutEffect } from "react";
import { Image, Text, View, StyleSheet, ScrollView } from "react-native";

//Data
import { MEALS } from "../data/dummy-data";

//Context
// import { FavoritesContext } from "../store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

//Components
import IconButton from "../components/IconButton";
import List from "../components/mealDetail/List";
import Subtitle from "../components/mealDetail/Subtitle";
import MealDetails from "../components/MealDetails";

function MealDetailsScreen({ route, navigation }) {
    // const favoriteMealsContext = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const mealIsFavorite = favoriteMealIds.includes(mealId);

    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            // favoriteMealsContext.removeFavorite(mealId);
            dispatch(removeFavorite({ id: mealId }));
        } else {
            // favoriteMealsContext.addFavorite(mealId);
            dispatch(addFavorite({ id: mealId }));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    icon={mealIsFavorite ? "star" : "star-outline"}
                    color="#fff"
                    onPress={changeFavoriteStatusHandler}
                />
            }
        })
    }, [navigation, changeFavoriteStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <View>
                <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
                <Text style={styles.title}>{selectedMeal.title}</Text>
                <MealDetails
                    duration={selectedMeal.duration}
                    complexity={selectedMeal.complexity}
                    affordability={selectedMeal.affordability}
                />
                <View style={styles.listOuterContainer}>
                    <View style={styles.listContainer}>
                        <Subtitle>Ingredients</Subtitle>
                        <List data={selectedMeal.ingredients} />
                        <Subtitle>Steps</Subtitle>
                        <List data={selectedMeal.steps} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: '#333'
    },
    listOuterContainer: {
        alignItems: "center",
    },
    listContainer: {
        maxWidth: '80%'
    }
})