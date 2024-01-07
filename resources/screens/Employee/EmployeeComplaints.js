import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
  } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { getEmployeeComplaints, getDeviceDetail } from '../../Utils/api'
import AsyncStorage from '@react-native-async-storage/async-storage';

  const EmployeeComplaints = () => {
  
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    
    const [highestBids, setHighestBids] = useState({});
    const [loading, setLoading] = useState(true);
    const [userDatat, setUser] = useState(true);
    
    const navigate = (screenName) => {
      navigation.navigate(screenName);
    };
    useEffect(() => {
      const fetchData = async () => {
        try {
          const complaints = await getEmployeeComplaints();
          setData(complaints);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      };
      navigation.addListener('focus', () => {
        fetchData();
        });
        ftechUser = async () => {
            const userData =  await AsyncStorage.getItem('authUser');
            if(JSON.parse(userData)){
              const user = JSON.parse(userData);
              setUser(user)
            }
        };
        ftechUser();
    }, []);
    return (
        <ImageBackground
        source={{
          uri:
            "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3865.jpg?size=626&ext=jpg",
        }}
        style={{height:"100%"}}
      >
            <View
            style={{
                flexDirection: "row",
                alignItems: "center",
            }}
            >
            <Text
                style={{
                fontSize: 16,
                marginBottom: 20,
                marginTop: 10,
                marginLeft: 10,
                color: "white",
                fontStyle: "italic",
                fontWeight: "bold",
                width: "48%",
                }}
            >
                Complaints
            </Text>
            
            </View>
            <ScrollView
            
            showsHorizontalScrollIndicator={false}
            style={{
                position: "relative",
            }}
            >
            {data.map((item, key) => (
                <View key={key}  style={{
                    display:"flex",
                    flexDirection:"column",
                    backgroundColor: "white",
                    borderRadius: 25,
                    width: "90%",
                    height: 150,
                    padding:15,
                    justifyContent:"center",
                    alignSelf:"center",
                    alignItems:'center',
                    marginBottom:10,
                    gap:5
                }}>
                <View style={{ flexDirection:"row", justifyContent:"center",alignItems:"center",width:"100%", gap:10,}}>
                    <View >
                        <Text
                            style={{
                            fontSize: 12,
                            }}
                        >
                            {item.user.fname +' '+item.user.fname }
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 12, }} >
                        {item.user.phone}
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection:"row", justifyContent:"center",alignItems:"center",width:"100%"}}>
                    <View>
                        <Text style={{ fontSize: 12, }} >
                        {item.user.email}
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection:"column", gap:5 }}>
                    <View>
                        <Text
                            style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            textAlign:'center'
                            }}
                        >
                            {"\n"}{item.subject}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 14, }} >
                        {item.details}
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection:"row", gap:10, width:"90%", alignSelf:"center",alignItems:"center",justifyContent:'center'}}>
                        
                </View>
            </View>))}
            </ScrollView>
      </ImageBackground>
    );
  };
  
  export default EmployeeComplaints;
  
  const styles = StyleSheet.create({});
  