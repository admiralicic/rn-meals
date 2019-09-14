import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import 

import { MEALS } from '../data/dummy-data';

const MealDetailsScreen = props => {
  const mealId = props.navigation.getParam('mealId');

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <ScrollView>
      <Image />
      <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
        <DefaultText>{props.duration}m</DefaultText>
        <DefaultText>{props.complexity}</DefaultText>
        <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
      </View>
      <View style={styles.screen}>
        <Text>{selectedMeal.title}</Text>
        <Button
          title='Go back to categories'
          onPress={() => {
            props.navigation.popToTop();
          }}
        />
      </View>
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Favorite'
          iconName={'ios-star'}
          onPress={() => {
            console.log('Mark as favorite');
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailsScreen;
