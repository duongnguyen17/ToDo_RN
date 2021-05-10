import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TagTask(props) {
  const gotoTaskDetail = props.gotoTaskDetail;
  return (
    <TouchableOpacity style={styles.tag} onPress={gotoTaskDetail}>
      <MaterialCommunityIcons
        style={{marginHorizontal: 18}}
        name="home"
        size={26}
        color="gray"
        onPress={() => {}}
      />
      <View style={{flexDirection: 'column'}}>
        <Text style={{fontSize: 18, color: '#fff', fontWeight: '600'}}>
          Name
        </Text>
        <Text style={{color: 'gray', fontSize: 13}}>0 trên 3</Text>
      </View>
      <MaterialCommunityIcons
        style={{position: 'absolute', right: 20}}
        name="home"
        size={26}
        color="gray"
        onPress={() => {}}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tag: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#262626',
    borderRadius: 5,
    marginVertical: 1,
  },
});
