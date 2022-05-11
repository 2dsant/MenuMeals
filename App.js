import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        sceneContainerStyle: {
          backgroundColor: '#fff'
        },
        drawerActiveTintColor: '#fff',
        drawerActiveBackgroundColor: '#000',
      }}
    >
      <Drawer.Screen name='Categories'
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />
        }}
      />
      <Drawer.Screen name='Favorites'
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MealsCategories"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#000',
              },
              headerTintColor: '#fff',
              contentStyle: {
                backgroundColor: '#fff'
              }
            }}
          >

            <Stack.Screen
              name='Drawer'
              component={DrawerNavigator}
              options={{
                title: 'All Categories',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='MealsOverviewScreen'
              component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;

            //   return {
            //     title: catId,
            //   }
            // }}
            />
            <Stack.Screen
              name='MealDetails'
              component={MealDetailsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
});
