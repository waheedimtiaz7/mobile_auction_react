import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native';
import { TextInput } from 'react-native-paper';

const OwnerDet = ({user}) => {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [dbImage, setDbImage] = useState(null);
// console.log(props.id);
    useEffect(() => {
        
            setfname(user.fname);
            setlname(user.lname);
            setDbImage(user.picture);
         
      },[]);
  return (
    <View>
     <View>
                <Image
                  source={{
                    uri: dbImage,
                  }}
                  style={{
                    height: 100,
                    width: 60,
                    borderRadius: 10,
                    alignSelf: "center",
                    
                  }}
                />
              </View>
              
              <Text
                style={{
                  fontWeight: "bold",
                  marginTop: 5,
                }}
              >
                
                {fname} {lname}
              </Text></View>
              
  )
}

export default OwnerDet

const styles = StyleSheet.create({})