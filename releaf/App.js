// import React, { useEffect, useState } from 'react';
// import { SafeAreaView, Text, View, FlatList } from 'react-native';
// import { db } from './firebaseConfig';
// import { doc, setDoc, collection, getDocs } from 'firebase/firestore';


// //向数据库中新增数据
// // async function quickstartAddData(db) {
// //   const usersCollection = collection(db, 'users');
// //   const docRef = doc(usersCollection, 'alovelace');
// //   await setDoc(docRef, {
// //     first: 'Ada',
// //     last: 'Lovelace',
// //     born: 1815
// //   });
// //   console.log('Data added successfully');
// // }
// //查询数据
// async function fetchUsers(db) {
//   const usersCollection = collection(db, 'users');
//   const snapshot = await getDocs(usersCollection);
//   const userList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//   return userList;
// }

// export default function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // quickstartAddData(db).catch(console.error);
//     fetchUsers(db).then(setUsers).catch(console.error);
//   }, []);

//   return (
//     <SafeAreaView className="flex-1 items-center justify-center">
//       <Text className="font-semibold text-blue-500 text-[30px]">Let's get started!</Text>
//       <FlatList
//         data={users}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (
//           <View style={{ margin: 10 }}>
//             <Text style={{ color: 'black', fontSize: 18 }}>{item.first} {item.last} (Born {item.born})</Text>
//           </View>
//         )}
//       />
//     </SafeAreaView>
//   );
// }


import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

const serverIP = '10.193.137.6'; // 替换为你的服务器的局域网 IP 地址
const serverPort = '8000'; // 你的服务器端口
const serverUrl = `http://${serverIP}:${serverPort}`;

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${serverUrl}/food-scraps-bin`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={item => item._id.toString()}
        renderItem={({ item }) => (
          <Text>{item.item} - {item.category}</Text>
        )}
      />
    </View>
  );
};

export default App;

