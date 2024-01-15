import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native';
import { TextInput } from 'react-native-paper';

const OwnerDet = ({user}) => {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const [dbImage, setDbImage] = useState(null);
// console.log(props.id);
    useEffect(() => {
        
            setfname(user.fname);
            setlname(user.lname);
            setphone(user.phone);
            setemail(user.email);
            setDbImage(user.picture);
         
      },[]);
  return (
    <View style={{
      width: "90%", alignSelf: "center", borderWidth: 1, borderColor: "black",
      borderRadius: 5, padding: 10, marginBottom: 10
    }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Owner Detail</Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        
        <View style={{ width: "50%" }}>
          <Text style={{ fontWeight: 'bold' }}>Name</Text>
          <Text style={{ color: 'black' }}>{fname} {lname}</Text>
        </View>
        <View style={{ width: "50%" }}>
          <Text style={{ fontWeight: 'bold' }}>Phone</Text>
          <Text style={{ color: 'black' }}>{phone}</Text>
        </View>

      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View >
          <Text style={{ fontWeight: 'bold' }}>Email</Text>
          <Text style={{ color: 'black' }}>{email}</Text>
        </View>
      </View>
    </View>
              
  )
}

export default OwnerDet

const styles = StyleSheet.create({})