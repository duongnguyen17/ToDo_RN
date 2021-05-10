import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TagOption(props) {
  return (
    <TouchableOpacity style={styles.tag}>
      <MaterialCommunityIcons
        name={props.nameIcon}
        size={props.sizeIcon}
        color={props.color}
        style={{marginHorizontal: 25}}
      />
      <Text
        style={{
          color: props.color,
          fontSize: props.sizeName,
        }}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tag: {flexDirection: 'row', alignItems: 'center', height:65},
});
