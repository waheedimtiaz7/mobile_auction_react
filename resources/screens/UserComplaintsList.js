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
  import { getUserComplaints, getDeviceDetail } from '../Utils/api'
  
  const UserComplaintsList = () => {
  
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    
    const [highestBids, setHighestBids] = useState({});
    const [loading, setLoading] = useState(true);
    
    const navigate = (screenName) => {
      navigation.navigate(screenName);
    };
    useEffect(() => {
      const fetchData = async () => {
        try {
          const complaints = await getUserComplaints();
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
                alignItems:"center",
                justifyContent:"center",
                alignSelf:"center",
                marginBottom:10,
                gap:20
            }}>
                <View style={{ flexDirection:"column", gap:30 }}>
                    <View>
                        <Text style={{
                                fontSize: 14,
                            }} >
                            <Text
                                style={{
                                fontSize: 16,
                                fontWeight: "bold",
                                }}
                            >
                                Subject
                            </Text>
                            {"\n"}{item.subject}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 14, }} >
                            <Text
                                style={{
                                fontSize: 16,
                                fontWeight: "bold",
                                }}
                            >
                                Details
                            </Text>
                        {"\n"}{item.details}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontWeight: "bold", }} >
                            <Text
                            style={{
                                fontSize: 17,
                                fontWeight: "bold",
                            }}
                            >
                            Status:: {"\b"}
                            </Text>
                            {item.status}
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection:"row", gap:10}}>
                
                    <TouchableOpacity
                        onPress={()=>navigation.navigate("ComplaintDetail",{complaint_id:item.id})}
                            style={{
                            backgroundColor: '#00BFFF',
                            borderRadius: 90,
                            width:"40%"
                            }}
                        >
                        <Text
                            style={{
                            color: 'black',
                            textAlign:"center",
                            paddingVertical:3
                            }}
                        >
                            {item.is_default==1?'Default':'Set Default'}
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=>deleteComplaint(item.id)}
                            style={{
                            backgroundColor: 'red',
                            borderRadius: 90,
                            width:"40%"
                            }}
                        >
                        <Text
                            style={{
                            color: '#fff',
                            textAlign:"center",
                            paddingVertical:3
                            }}
                        >
                            Delete
                        </Text>
                    </TouchableOpacity>}
                </View>
            
            </ScrollView>
            <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate("CreateComplaint")
                    }}
                    style={{
                    width: "75%",
                    height: 40,
                    backgroundColor: "gray",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 20,
                    marginVertical: 20,
                    marginLeft: 40,
                    }}
                >
                    <Text
                    style={{
                        color: "#ffffff",
                        fontSize: 16,
                    }}
                    >
                    Create Complaint
                    </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  };
  
  export default UserComplaintsList;
  
  const styles = StyleSheet.create({});
  