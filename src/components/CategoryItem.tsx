import React, {FC} from 'react';
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  PressableAndroidRippleConfig,
  ViewStyle,
  Platform,
} from 'react-native';
import ICategory from '../models/ICategory';

const CategoryItem: FC<ICategory> = ({title, color}): JSX.Element => {
  const categoryItemBackgroundColor: ViewStyle = {
    backgroundColor: color,
  };
  const androidRippleConfig: PressableAndroidRippleConfig = {
    color: 'rgba(255,255,255,0.7)',
    borderless: true,
  };
  const onPressIosHandler = ({
    pressed,
  }: {
    pressed: boolean;
  }): ViewStyle | ViewStyle[] =>
    pressed && Platform.OS === 'ios'
      ? [styles.itemPressed, styles.pressableContainer]
      : styles.pressableContainer;

  return (
    <View style={[styles.outerItemContainer, categoryItemBackgroundColor]}>
      <Pressable style={onPressIosHandler} android_ripple={androidRippleConfig}>
        <View style={styles.innerItemContainer}>
          <Text style={styles.itemText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  outerItemContainer: {
    flex: 1,
    margin: 16,
    height: 150,
    width: 30,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  pressableContainer: {
    flex: 1,
  },
  innerItemContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemPressed: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    opacity: 0.25,
  },
  itemText: {
    fontSize: 18,
    color: '#363636',

    ...Platform.select({
      android: {
        fontFamily: 'Laila-Bold',
      },
      ios: {
        fontFamily: 'Laila-Bold',
        fontWeight: '700',
      },
    }),
  },
});
