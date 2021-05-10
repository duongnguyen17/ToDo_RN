import React from 'react';
import {
  ScrollView,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function CreateTaskMenu() {
  return (
    <View>
      <TextInput multiline={true} />
      <TouchableOpacity>
        <MaterialCommunityIcons name="arrow-up-box" size={20} color="#fff" />
      </TouchableOpacity>
      <ScrollView horizontal={true}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="calendar-today"
            size={20}
            color="#fff"
          />
          <Text>Đặt ngày đến hạn</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="bell-outline" size={20} color="#fff" />
          <Text>Nhắc tôi</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="repeat" size={20} color="#fff" />
          <Text>Lặp lại</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
