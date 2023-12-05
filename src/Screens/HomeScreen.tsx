/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {data} from '../../assets/data';
import AsyncStorage from '@react-native-async-storage/async-storage';
const HomeScreen = () => {
  const [searchQuery, setSearchquery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const UserData = AsyncStorage.getItem('token');
  console.log(UserData);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const filterData = (item: {
    id?: number;
    name: any;
    price: any;
    imageUrl: any;
    description?: string;
  }) => {
    if (searchQuery === '') {
      return (
        <TouchableOpacity style={style.foodItem}>
          <Image source={{uri: item.imageUrl}} style={style.Image} />
          <Text style={style.foodName}>{item.name}</Text>
          <Text style={style.PriceText}>Time</Text>
          <Text style={style.foodPrice}>{item.price.toFixed(2)}Mins</Text>
        </TouchableOpacity>
      );
    }
    if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return (
        <TouchableOpacity style={style.foodItem}>
          <Image source={{uri: item.imageUrl}} style={style.Image} />
          <Text style={style.foodName}>{item.name}</Text>
          <Text style={style.PriceText}>Time</Text>
          <Text style={style.foodPrice}>{item.price.toFixed(2)}Mins</Text>
        </TouchableOpacity>
      );
    }
  };
  return (
    <View style={style.container}>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 15,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={style.headerText}>Hello John</Text>
          <Text style={style.header2Text}>What are you cooking Today?</Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
          }}>
          <Image
            source={require('../../assets/profilecookingbook.jpg')}
            style={style.profile}
          />
        </View>
      </View>
      <TextInput
        placeholder="Searching for receipes"
        style={[
          style.SearchBar,
          {borderColor: isFocused ? '#E3A428' : '#D9D9D9'},
        ]}
        onChangeText={query => setSearchquery(query)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <FlatList
        data={data}
        renderItem={({item}) => filterData(item)}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1, // Ensure that the container takes up the entire screen
  },
  headerText: {
    fontSize: 20,
    marginTop: '5%',
    marginLeft: '5%',
    color: 'black',
    fontFamily: 'Poppins-Bold',
  },
  header2Text: {
    fontSize: 10,
    // marginTop: '5%',
    marginLeft: '5%',
    color: 'gray',
    fontFamily: 'Poppins-Regular',
  },
  foodItem: {
    width: '42%',
    height: 207,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    marginLeft: '3.5%',
    marginRight: '5%',
    marginTop: '5%',
    marginBottom: 10,
    elevation: 3,
  },
  foodName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 15,
  },
  Image: {
    height: '60%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    // borderRadius: 60,
  },
  foodPrice: {
    fontFamily: 'Poppins-Bold',
    fontSize: 10,
    marginLeft: '5%',
  },
  PriceText: {
    fontSize: 12,
    marginLeft: '5%',
    marginTop: 10,
    fontFamily: 'Poppins-SemiBold',
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 30,
  },
  SearchBar: {
    borderWidth: 2,
    borderColor: '#D9D9D9',
    width: '90%',
    marginLeft: 17,
    padding: 10,
    marginTop: 5,
    // textAlign: 'center',
    borderRadius: 20,
  },
});
export default HomeScreen;
