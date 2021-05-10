import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TagList from '../components/TagList';
import {getListLists} from '../backend/index';

export default function home(props) {
  const [arrayList, setArrayList] = useState([]);

  useEffect(async () => {
    const arrayListTemp = await getListLists();
    //console.log(arrayListTemp);
    setArrayList(arrayListTemp);
  }, []);

  const gotoListDetail = (create, element) => {
    props.navigation.navigate('ListDetail', {create: create, element: element});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#fff'}}>
          To Do
        </Text>
      </View>
      <ScrollView style={styles.body}>
        {arrayList.map((value, index) => (
          <TagList
            emoji={value.emoji}
            color={value.color}
            numTask={value.numTask}
            name={value.name}
            key={index}
            gotoListDetail={() => {
              gotoListDetail(false, value);
            }}
          />
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}
          onPress={() => {
            gotoListDetail(true);
          }}>
          <Text style={{color: '#fff', fontSize: 37, marginHorizontal: 20}}>
            +
          </Text>
          <Text style={{color: '#fff', fontSize: 25}}>Danh sách mới</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: 18}} onPress={() => {}}>
          <MaterialCommunityIcons name="home" size={26} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    backgroundColor: 'black',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
