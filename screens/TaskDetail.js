import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TagOption from '../components/TagOption';

export default function TaskDetail(props) {
  const [nameList, setNameList] = useState(
    'Name List kjhsakdfjhkjashdsdalkjfhkjsadf',
  );
  const [isDone, setIsDone] = useState(false);
  const [nameTask, setNameTask] = useState('Name Taskhsgfsasdfsdfasd');
  const [star, setStar] = useState(false);
  const [timeCreate, setTimeCreate] = useState('4/5/2021');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}>
            <MaterialIcons name="keyboard-backspace" size={26} color="#fff" />
          </TouchableOpacity>
          <Text style={{...styles.text, marginLeft: 20, fontSize: 23}}>
            {nameList.length > 25 ? nameList.slice(0, 25) + '...' : nameList}
          </Text>
        </View>
        <View style={styles.body}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 7}}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name={
                  isDone
                    ? 'checkbox-marked-circle'
                    : 'checkbox-blank-circle-outline'
                }
                size={35}
                color={isDone ? '#99ccff' : 'gray'}
              />
            </TouchableOpacity>

            <TextInput
              defaultValue={nameTask}
              multiline={true}
              backgroundColor="#fff"
              colo
              style={{flex: 1}}
            />
            <TouchableOpacity>
              <MaterialIcons
                name={star ? 'star' : 'star-border'}
                size={30}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          <ScrollView style={{}}>
            <TagOption
              name="Bước tiếp theo"
              color="#99ccff"
              sizeName={20}
              nameIcon="plus"
              sizeIcon={25}
            />
            <TagOption
              name="Thêm vào Ngày của Tôi"
              nameIcon="spotlight"
              color="gray"
              sizeName={20}
              sizeIcon={25}
            />
            <TagOption
              name="Nhắc tôi"
              nameIcon="bell-outline"
              color="gray"
              sizeName={20}
              sizeIcon={25}
            />
            <TagOption
              name="Thêm ngày đến hạn"
              nameIcon="calendar-outline"
              color="gray"
              sizeName={20}
              sizeIcon={25}
            />
            <TagOption
              name="Lặp lại"
              nameIcon="repeat"
              color="gray"
              sizeName={20}
              sizeIcon={25}
            />
            <TagOption
              name="Thêm tệp"
              nameIcon="paperclip"
              color="gray"
              sizeName={20}
              sizeIcon={25}
            />
          </ScrollView>
          <View style={styles.footer}>
            <Text style={{color: 'gray'}}>
              {isDone ? 'Đã hoàn thành vào' : 'Đã tạo vào'} {timeCreate}
            </Text>
            <MaterialCommunityIcons
              name="trash-can-outline"
              size={30}
              color="gray"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  mainView: {
    flex: 1,
    marginHorizontal: 10,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    height: 55,
    borderTopColor: 'gray',
    borderTopWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: '#fff',
  },
  body: {
    flex: 1,
  },
});
