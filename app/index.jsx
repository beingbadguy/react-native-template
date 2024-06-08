import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import React from 'react';

const index = () => {
  return (
    <View className='flex-1 items-center justify-center  bg-black'>
      <Text className='m-10 text-orange-200 font-bold italic '>index</Text>
      <Link href='/profile' className='text-red-200'>
        Go to Profile
      </Link>
    </View>
  );
};
export default index;
