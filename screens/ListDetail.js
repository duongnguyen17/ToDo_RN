import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  Dimensions,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';

import TagTask from '../components/TagTask';
import {addList, addTask} from '../backend/index';
const ScreenWidth = Math.floor(Dimensions.get('screen').width);

export default function ListDetail(props) {
  const menu = useRef(null);
  const [create, setCreate] = useState(props.route.params.create);
  const [update, setUpdate] = useState(false);
  const [name, setName] = useState(
    create ? 'Chưa có tên' : props.route.params.element.name,
  );
  const [color, setColor] = useState(
    create ? '#fff' : props.route.params.element.color,
  );
  const [emoji, setEmoji] = useState(
    create ? 'sticker-emoji' : props.route.params.element.emoji,
  );
  const [bgPic, setBgPic] = useState(
    create ? 0 : props.route.params.element.bgPic,
  );
  const [image, setImage] = useState(require('../assets/bg_0.png'));
  const [nameTask, setNameTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [notiDate, setNotiDate] = useState('');
  const [notiTime, setNotiTime] = useState('');
  const [loop, setLoop] = useState('');

  useEffect(() => {
    setBackground(bgPic);
  }, []);
  const gotoTaskDetail = () => {
    props.navigation.navigate('TaskDetail');
  };
  const createList = async (name, emoji, color, bgPic) => {
    await addList(name, emoji, color, bgPic);
  };
  const createTask = async (
    nameList,
    nameTask,
    dueDate,
    notiDate,
    notiTime,
    loop,
  ) => {
    await addTask(nameList, nameTask, dueDate, notiDate, notiTime, loop);
  };
  const showMenu = () => {
    menu.current.show();
  };
  const hideMenu = () => {
    menu.current.hide();
  };
  const setBackground = () => {
    switch (bgPic) {
      case 1:
        setBgPic(require('../assets/bg_1.jpg'));
        break;
      case 2:
        setBgPic(require('../assets/bg_2.jpg'));
        break;
      case 3:
        setBgPic(require('../assets/bg_3.jpg'));
        break;
      default:
        setBgPic(require('../assets/bg_0.png'));
        break;
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <ImageBackground style={styles.container} source={image}>
        <View style={styles.mainView}>
          <View style={styles.header}>
            <TouchableOpacity
              style={{width: 20}}
              onPress={() => {
                props.navigation.goBack();
              }}>
              <MaterialIcons
                name="keyboard-backspace"
                size={26}
                color={color}
              />
            </TouchableOpacity>
            <View
              style={{
                position: 'absolute',
                right: 10,
                flexDirection: 'row',
                width: 50,
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity>
                <FontAwesome5 name="user-plus" size={26} color={color} />
              </TouchableOpacity>
              <TouchableOpacity onPress={showMenu}>
                <MaterialIcons name="more-vert" size={26} color={color} />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              setUpdate(true);
            }}
            style={{marginBottom: 20}}>
            <Text style={{color: color, fontSize: 28}}>{name}</Text>
          </TouchableOpacity>
          <ScrollView
            style={styles.listTask}
            // onScroll={e => {
            //   scrollOffset = e.nativeEvent.contentOffset.y ;
            // }}
            // scrollEventThrottle={20}
          ></ScrollView>
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 10,
              bottom: 20,
              width: 60,
              height: 60,
              borderRadius: 60,
              backgroundColor: color,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'black', fontSize: 38}}>+</Text>
          </TouchableOpacity>
        </View>
        <Modal visible={create || update} transparent={true}>
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}
            style={styles.modalContainer}>
            <View style={styles.viewCenter}>
              <View style={{marginVertical: 10, marginHorizontal: 20}}>
                <Text style={{fontSize: 22, fontWeight: '600', color: '#fff'}}>
                  Danh sách mới
                </Text>
                <View
                  style={{
                    marginTop: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity>
                    <MaterialCommunityIcons
                      name={emoji}
                      size={20}
                      color="#fff"
                    />
                  </TouchableOpacity>

                  <TextInput
                    style={{
                      marginLeft: 10,
                      borderBottomWidth: 1,
                      borderBottomColor: '#fff',
                      alignItems: 'center',
                    }}
                    placeholder="Nhập tiêu đề danh sách"
                    placeholderTextColor="#fff"
                    onChangeText={text => {
                      setName(text);
                    }}
                  />
                </View>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <TouchableOpacity
                    style={{
                      borderRadius: 15,
                      borderWidth: 2,
                      borderColor: '#fff',
                      width: 50,
                      height: 32,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{fontSize: 16}}>Màu</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      borderRadius: 15,
                      borderWidth: 2,
                      borderColor: '#fff',
                      width: 50,
                      height: 32,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: 10,
                    }}>
                    <Text style={{fontSize: 16}}>Ảnh</Text>
                  </TouchableOpacity>
                </View>
                <ScrollView
                  style={{height: 40, marginVertical: 5}}
                  horizontal={true}></ScrollView>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginLeft: 60,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (update) {
                        setUpdate(!update);
                      } else {
                        props.navigation.goBack();
                      }
                    }}>
                    <Text
                      style={{fontSize: 16, fontWeight: '600', color: '#fff'}}>
                      HỦY BỎ
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={async () => {
                      await createList(name, emoji, color, bgPic);
                      setCreate(false);
                    }}>
                    <Text
                      style={{fontSize: 16, fontWeight: '600', color: '#fff'}}>
                      {update ? 'LƯU' : 'TẠO DANH SÁCH'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <Menu
          ref={menu}
          style={{backgroundColor: '#262626', width: 250, top: 200, left: 135}}>
          <MenuItem onPress={hideMenu}>
            <MaterialCommunityIcons
              name="pencil-outline"
              color="#fff"
              size={20}
            />
            <Text style={{color: '#fff', marginLeft: 20, fontSize: 20}}>
              Đổi tên danh sách
            </Text>
          </MenuItem>
          <MenuItem onPress={hideMenu}>
            {' '}
            <MaterialCommunityIcons name="sort" color="#fff" size={20} />
            <Text style={{color: '#fff', marginLeft: 20, fontSize: 20}}>
              Sắp xếp theo
            </Text>
          </MenuItem>
          <MenuItem onPress={hideMenu}>
            <MaterialCommunityIcons name="image-area" color="#fff" size={20} />
            <Text
              style={{
                color: '#fff',
                marginLeft: 20,
                fontSize: 20,
              }}>
              Thay đổi chủ đề
            </Text>
          </MenuItem>
          <MenuItem onPress={hideMenu}>
            <MaterialCommunityIcons
              name="trash-can-outline"
              color="#fff"
              size={20}
            />
            <Text style={{color: '#fff', marginLeft: 20, fontSize: 20}}>
              Xóa danh sách
            </Text>
          </MenuItem>
        </Menu>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    marginHorizontal: 10,
  },
  // header: {
  //   marginTop: 10,
  // },
  header: {
    marginTop: 8,
    flexDirection: 'row',
    // alignItems: 'flex-end',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 8,
  },
  listTask: {},
  modalContainer: {
    flex: 1,
  },
  viewCenter: {
    marginTop: 200,
    height: 230,
    marginHorizontal: 20,
    backgroundColor: '#262626',
  },
});

// let scrollOffset = useRef(new Animated.Value(0)).current;
// const [titleWidth, setTitleWidth] = useState(0);
// const [offset, setOffset] = useState(0);

// useEffect(() => {
//   scrollOffset.addListener(({value}) => {
//     setOffset(value);
//   });
// }, []);
{
  /* <Animated.View
            style={[
              styles.header,
              {
                paddingHorizontal: ScreenWidth * 0.05,
                width: ScreenWidth,
                height: scrollOffset.interpolate({
                  inputRange: [0, 24],
                  outputRange: [120, 64],
                  extrapolate: 'clamp',
                }),
              },
            ]}>
            <Animated.Text
              onLayout={e => {
                if (offset === 0 && titleWidth === 0) {
                  let titleWidthTemp = e.nativeEvent.layout.width;
                  setTitleWidth(titleWidthTemp);
                }
              }}
              style={{
                fontWeight: 'bold',
                fontSize: scrollOffset.interpolate({
                  inputRange: [0, 200],
                  outputRange: [26, 20],
                  extrapolate: 'clamp',
                }),
              }}>
              Danh sách chưa có tên
            </Animated.Text>
            <Animated.View
              style={{
                width: scrollOffset.interpolate({
                  inputRange: [0, 200],
                  outputRange: [ScreenWidth * 0.9 - titleWidth, 0],
                  extrapolate: 'clamp',
                }),
              }}
            />
          </Animated.View> */
}
