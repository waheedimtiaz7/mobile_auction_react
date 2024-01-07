import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore';
import { Image } from 'react-native';
import { TextInput } from 'react-native-paper';

const SingleBidder = ({user}) => {
  console.log(user)
    const {fname, lname, picture} = user;
    const [dbImage, setDbImage] = useState(picture);
    useEffect(() => {
       
      },[]);
  return (
    <View>
      <View>
        <Image
          source={{
            uri: dbImage,
          }}
          style={{
            height: 70,
            width: 70,
            borderRadius: 50,
            alignSelf: "center",
            
          }}
        />
      </View>
              
      <Text
        style={{
          fontWeight: "bold",
          
        }}
      >
        
        Name::  <Text>
        {fname} {lname}
        </Text>
      </Text>
    </View>
              
  )
}

export default SingleBidder

const styles = StyleSheet.create({})