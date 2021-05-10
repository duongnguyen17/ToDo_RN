import React, {useState, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function TagList(props) {
  const [emoji, setEmoji] = useState(props.emoji);
  const [color, setColor] = useState(props.color);
  const [numTask, setNumTask] = useState(props.numTask);
  const [name, setName] = useState(props.name);
  const gotoListDetail = props.gotoListDetail;
  return (
    <TouchableOpacity style={styles.tag} onPress={gotoListDetail}>
      <MaterialCommunityIcons
        style={{marginHorizontal: 18}}
        name={emoji}
        size={26}
        color={color}
      />
      <Text style={{fontSize: 20, color: color, fontWeight: '600'}}>
        {name.length >25? name.slice(0,25)+'...':name}
      </Text>
      <Text style={{position: 'absolute', right: 20, color: color}}>
        {numTask}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {},
  tag: {height: 60, flexDirection: 'row', alignItems: 'center'},
});
