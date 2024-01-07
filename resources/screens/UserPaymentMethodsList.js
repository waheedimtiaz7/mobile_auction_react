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
  import { getPaymentMethods, setDefaultPaymentMethod , deletePaymentMethod} from '../Utils/api'
  
  const UserPaymentMethodsList = () => {
  
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
          const methods = await getPaymentMethods();
          setData(methods);
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

    const setDefulat = async (id) =>{
        
        try {
            const methods = await setDefaultPaymentMethod(id);
            setData(methods);
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setLoading(false);
          }
    }
    const deleteCard = async (id) =>{
        
        try {
            const methods = await deletePaymentMethod(id);
            setData(methods);
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setLoading(false);
          }
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
            Payment Methods List
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
            {/* { item.ownerId === userId && ( */}
           
            
              <View
                style={{
                    flexDirection:"row",
                    gap:30
                }}
              >
                 <Text
                  style={{
                    fontSize: 14,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    Type::
                  </Text>
                  {"\n"}{item.brand}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    Last 4::
                  </Text>
                  {"\n"}{item.last4}
                </Text>
                <Text
                  style={{
                   
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: "bold",
                      }}
                    >
                      Expiry:: {"\b"}
                      </Text>
                    {item.exp_month + '/' +item.exp_year}
                  </Text>
                </Text>
              </View>
              <View style={{ flexDirection:"row", gap:10}}>
              
              <TouchableOpacity
                  onPress={()=>item.is_default==1?null:setDefulat(item.id)}
                    style={{
                      backgroundColor: item.is_default==1?'green':'#00BFFF',
                      borderRadius: 90,
                      width:"40%"
                    }}
                  >
                  <Text
                    style={{
                      color: item.is_default==1?'white':'black',
                      textAlign:"center",
                      paddingVertical:3
                    }}
                  >
                    {item.is_default==1?'Default':'Set Default'}
                  </Text>
                </TouchableOpacity>
                {item.is_default==0 && <TouchableOpacity
                  onPress={()=>deleteCard(item.id)}
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
              
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity
                onPress={()=>{
                    navigation.navigate("PaymentMethodScreen",{backScreen:"PaymentMethods"})
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
                Add New Method
                </Text>
      </TouchableOpacity>
      </ImageBackground>
    );
  };
  
  export default UserPaymentMethodsList;
  
  const styles = StyleSheet.create({});
  