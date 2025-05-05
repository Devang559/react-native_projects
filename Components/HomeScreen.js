import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import { deleteUser } from './slice';


const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // Get users from Redux store
  const users = useSelector(state => state.user.users);

  const renderItem = ({ item,index }) => (
    <View style={styles.userInfo}>
      <Text style={styles.userText}><Text style={{fontWeight:700}}>Name   :</Text>{item.name}</Text>
      <Text style={styles.userText}><Text style={{fontWeight:700}}>Email   :</Text>{item.email}</Text>
      <Text style={styles.userText}><Text style={{fontWeight:700}}>Phone  :</Text>{item.phone}</Text>
      <View>
        <TouchableOpacity onPress={()=>{
            navigation.navigate("Update",{index,item});
        }}>
        <Text style={{textAlign:'right', fontWeight:700,right:16,bottom:35,fontSize:17,color:'green'}}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
            dispatch(deleteUser({index}))
        }}>
        <Text style={{textAlign:'right', fontWeight:700,bottom:20,fontSize:17,color:'red'}}>Delete</Text>
        </TouchableOpacity>
       
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* User List */}
      {users.length > 0 ? (
        <FlatList
          data={users}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      ) : (
        <Text style={styles.noUserText}>No users added yet.</Text>
      )}

      {/* Add User Button */}
      <TouchableOpacity
        style={styles.addUserButton}
        onPress={() => navigation.navigate('AddUser')}
      >
        <Text style={styles.addUserText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  userInfo: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
   
  },
  userText: {
    fontSize: 18,
    color: '#333',
  },
  noUserText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  addUserButton: {
    backgroundColor: 'purple',
    height: 60,
    width: 60,
    borderRadius: 30,
    position: 'absolute',
    top: 670,
    right: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    
  },
  addUserText: {
    fontSize: 36,
    color: '#fff',
    
    
  },
});

export default HomeScreen;
