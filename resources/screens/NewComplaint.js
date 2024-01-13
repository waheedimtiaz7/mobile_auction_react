import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import { TextInput} from "react-native-paper";
import { TouchableOpacity, ImageBackground } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createComplaint, setDefaultPaymentMethod , deletePaymentMethod} from '../Utils/api';

const NewComplaint = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setFullname] = useState("");
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");
  useEffect(() => {
    ftechUser = async () => {
      const userData =  await AsyncStorage.getItem('authUser');
      if(JSON.parse(userData)){
        const user = JSON.parse(userData);
        setFullname(user.fname+' '+user.lname);
        setPhone(user.phone);
        setEmail(user.email);
        
      }
  };
  ftechUser();
  }, []);

  const createNewComplaint = async() =>{

    // const complaintCount = await AsyncStorage.getItem(`complaintCount_${email}`);
    // if (complaintCount && parseInt(complaintCount) >= 3) {
    //   alert('You have reached the maximum limit of complaints for today (3 complaints).');
    //   return;
    // }
      if(name==''){
        alert('Name is required')
      }if(email==''){
        alert('Email is required')
      }if(phone==''){
        alert('Phone is required')
      }if(subject==''){
        alert('Subject is required')
      }
      let data = {
        name:name,
        email:email,
        phone:phone,
        subject:subject,
        details:details
      }
      // const updatedCount = (parseInt(complaintCount) || 0) + 1;
      // AsyncStorage.setItem(`complaintCount_${email}`, updatedCount.toString());
      createComplaint(data, navigation)

  }
  return (
    <View>
      <ImageBackground
        source={{
          uri:
            "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3865.jpg?size=626&ext=jpg",
        }}
        style={{
          height: "100%",
        }}
      >
        <View
          style={{
            // justifyContent: "center",
            // alignItems: "center",
            margin: 10,

            width: "80%",
            marginLeft: 35,
            marginTop: 45,
          }}
        >
          <TextInput
            label="Fullname"
            placeholder="Enter Full name"
            style={{
              marginVertical: 5,
              backgroundColor: "white",
              marginBottom: 8,
            }}
            value={name}
            onChangeText={(text) => setFullname(text)}
          />

          <TextInput
            label="Phone"
            placeholder="Enter Phone"
            style={{
              marginVertical: 5,
              backgroundColor: "white",
              marginBottom: 8,
            }}
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />
          <TextInput
            label="Email"
            placeholder="Enter Email"
            style={{
              marginVertical: 5,
              backgroundColor: "white",
              marginBottom: 8,
            }}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            label="Subject"
            placeholder="Enter Subject"
            style={{
              marginVertical: 5,
              backgroundColor: "white",
              marginBottom: 8,
            }}
            value={setSubject}
            onChangeText={(text) => setSubject(text)}
          />
          <TextInput
            label="Details"
            placeholder="Enter Details"
            multiline = {true}
            numberOfLines = {4}
            style={{
              marginVertical: 5,
              backgroundColor: "white",
              marginBottom: 8,
            }}
            value={details}
            onChangeText={(text) => setDetails(text)}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            // m
            margin: 10,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              height: 45,
              justifyContent: "center",
              alignSelf: "center",
              alignItems:'center',
              borderRadius: 40,
              marginTop: 10,
              width: "50%",

              marginTop: 30,
            }}
               onPress={createNewComplaint}
          >
            <Text
              style={{
                color: "#00BFFF",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              Submit
            </Text>
            
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default NewComplaint;

const styles = StyleSheet.create({});
