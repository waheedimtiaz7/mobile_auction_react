import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore';
import { Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { db } from '../../firebase/firebase.config';

const OwnerDet = (props) => {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [dbImage, setDbImage] = useState(null);
// console.log(props.id);
    useEffect(() => {
        const readInfo = async () => {
          const docRef = doc(db, "users", props.id);
          const docSnap = await getDoc(docRef);
    
          if (docSnap.exists()) {
            setfname(docSnap.data().fname);
            setlname(docSnap.data().lname);
            setDbImage(docSnap.data().picture);
          }
        };
        readInfo();
      },[props.id]);
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