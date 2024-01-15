import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore';
import { Image } from 'react-native';
import { TextInput } from 'react-native-paper';

const SingleBidder = ({ user }) => {
  const { fname, lname, picture } = user;
  const [dbImage, setDbImage] = useState(picture);
  useEffect(() => {

  }, []);
  return (
    <View>


      <View style={{ width: "50%" }}>
        <Text style={{ fontWeight: 'bold' }}>Bidder</Text>
        <Text style={{ color: 'black', width: "100%" }}>{fname + ' ' + lname}</Text>
      </View>
    </View>

  )
}

export default SingleBidder

const styles = StyleSheet.create({})