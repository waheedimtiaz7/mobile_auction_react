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
  import { getUserComplaints, deleteComplaint } from '../Utils/api'
  
  const UserComplaintsList = () => {
  
    const navigation = useNavigation();
    const [data, setData] = useState([]);
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

    const removeComplaint = async(complaint_id) =>{
      const data = await deleteComplaint({complaint_id:complaint_id});
      setData(data);
    
    }

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
                width:"100%",
                alignItems:"center"
                
            }}
            >
            <Text
                style={{
                fontSize: 25,
                marginBottom: 15,
                marginTop: 10,
                color: "white",
                fontStyle: "italic",
                fontWeight: "bold",
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
                    gap:20
                }}>
                <View style={{ flexDirection:"column", gap:5 }}>
                    <View>
                        <Text
                            style={{
                            fontSize: 16,
                            textAlign:'center'
                            }}
                        >
                          <Text  style={{
                          fontWeight: "bold",
                          fontSize:20
                        }}>Subject:</Text>
                            {"\b"} {item.subject}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 14, }} >
                        <Text style={{
                          fontWeight: "bold",
                          fontSize:20
                        }}> Details:</Text>
                        {"\b"} {item.details}
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection:"row", gap:10, width:"90%", alignSelf:"center",alignItems:"center",justifyContent:'center'}}>
                        <TouchableOpacity
                        onPress={()=>removeComplaint(item.id)}
                            style={{
                            backgroundColor: 'red',
                            borderRadius: 90,
                            width:"40%",
                            alignSelf:'center'
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
                    </TouchableOpacity>
                </View>
            </View>))}
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
  