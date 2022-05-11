import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";

import MealsList from "../components/mealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;
    const DisplayedMeals = MEALS.filter(item => item.categoryIds.indexOf(catId) >= 0);

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation]);

    return <MealsList items={DisplayedMeals} />
}

export default MealsOverviewScreen;
