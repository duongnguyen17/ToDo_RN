import AsyncStorage from '@react-native-async-storage/async-storage';

//AsyncStorage sẽ lưu các key :
//'arrayList' : là 1 mảng lưu thông tin các list
//các key khác là tên của các list: lưu danh sách các task của list đó dưới dạng mảng

// export const initStorage = async () => {
//   try {
//     let arrayList =[]
//     await AsyncStorage.setItem('arrayList', JSON.stringify(arrayList))
//   } catch (error) {
//     console.log(error);
//   }
// };

//lấy arrayList trả về mảng các obj nếu chưa có thì tạo một mảng rỗng
export const getListLists = async () => {
  try {
    let arrayList = await AsyncStorage.getItem('arrayList');

    if (arrayList === null) {
      arrayList = '[]';
      //console.log(arrayList);
      await AsyncStorage.setItem('arrayList', arrayList);
    }
    return JSON.parse(arrayList);
  } catch (error) {
    console.log(error);
  }
};

//thêm 1 List Task có các trường : name, emoji, color, bgPic, numTask
export const addList = async (name, emoji, color, bgPic) => {
  let newList = [
    {
      name: name,
      emoji: emoji,
      color: color,
      bgPic: bgPic,
      numTask: 0,
    },
  ];
  try {
    let arrayList = await AsyncStorage.getItem('arrayList'); //lấy danh sách các list
    if (arrayList.length !== 0) {
      //nếu có danh sách thì thêm

      let newArr = JSON.parse(arrayList);
      newArr = newArr.concat(newList);
      await AsyncStorage.setItem('arrayList', JSON.stringify(newArr));
    } else {
      //nếu chưa có thì tạo mới
      await AsyncStorage.setItem('arrayList', JSON.stringify(newList));
    }
  } catch (error) {
    console.log(error);
  }
};

//thêm task
export const addTask = async (
  nameList,
  nameTask,
  dueDate,
  notiDate,
  notiTime,
  loop,
) => {
  let newTask = [
    {
      nameTask: nameTask,
      dueDate: dueDate,
      notiDate: notiDate,
      notiTime: notiTime,
      loop: loop,
      isDone: false,
    },
  ];

  try {
    let arrayTask = await AsyncStorage.getItem(nameList); //lấy danh sách task của list đó
    let arrayList = await AsyncStorage.getItem('arrayList');
    if (arrayTask !== null) {
      //nếu list đó đã có task
      let newArr = JSON.parse(arrayTask);
      let arrList = JSON.parse(arrayList);
      const list = arrList.find(element => {
        if (element.name === nameList) return element;
      });
      list.numTask++;
      newArr = newArr.concat(newTask);
      await AsyncStorage.setItem(nameList, JSON.stringify(newArr)); // lưu task vào nameList
      await AsyncStorage.setItem('arrayList', JSON.stringify(arrList)); //cập nhật List
    } else {
      //nếu list đó chưa có task
      console.log('chưa tạo List nào');
    }
  } catch (error) {
    console.log(error);
  }
};

//lấy thông tin chi tiết của một List trả về mảng lưu các task dạng obj
export const getListDetail = async nameList => {
  try {
    let result = await AsyncStorage.getItem(nameList);
    let arrayTask = JSON.parse(result);
    let arrayDone = [];
    let arrayNotDone = [];
    arrayTask.forEach(element => {
      if (element.isDone === true) {
        arrayDone.push(element);
      } else {
        arrayNotDone.push(element);
      }
    });
    return {arrayDone: arrayDone, arrayNotDone: arrayNotDone};
  } catch (error) {
    console.log(error);
  }
};

//xóa 1 list
export const deleteList = async index => {
  try {
    let result = await AsyncStorage.getItem('arrayList');
    let arrayList = JSON.parse(result);
    let list = arrayList[index];
    arrayList.splice(index, 1);
    await AsyncStorage.setItem('arrayList', JSON.stringify(arrayList)); // xóa list khỏi arrayList
    await AsyncStorage.removeItem(list.name); //xóa danh arrayTask của list đó
  } catch (error) {
    console.log(error);
  }
};

//xóa 1 task trong list
export const deleteTask = async (index, nameList) => {
  try {
    let result = await AsyncStorage.getItem(nameList);
    let arrayTask = JSON.parse(result);
    arrayTask.splice(index, 1);
    await AsyncStorage.setItem(nameList, JSON.stringify(arrayTask));
  } catch (error) {
    console.log(error);
  }
};

//CHƯA HOÀN THÀNH

//update list
export const updateList = async () => {
  try {
  } catch (error) {
    console.log(error);
  }
};
//update task
export const updateTask = async () => {
  try {
  } catch (error) {
    console.log(error);
  }
};
