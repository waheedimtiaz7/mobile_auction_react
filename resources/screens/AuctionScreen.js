import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput } from "react-native-paper";
import AllBidding from "../components/AllBidding";
import Input from "../components/Input";
import { createNewBid, fetchDevice } from '../Utils/api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { width } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
const AuctionScreen = ({ navigation, route }) => {
  const [mobile_id, setMobile_id] = useState(route.params.id);
  const [Bid_amount, setBid_amount] = useState('');
  const [device, setDevice] = useState(null);
  const [bids, setBids] = useState([]);
  const [user, setUser] = useState(null);
  const [countdown, setCountdown] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const devices = await fetchDevice(mobile_id);
        console.log(devices)
        setDevice(devices);
        setBids(devices.bids);
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
          setUser(JSON.parse(userData))
        }
    };
    ftechUser();
    
  },[]);

  const Bidding = async () => {
   
    if(user.payment_methods.length > 0){
      if(Bid_amount==''){
        alert("Please provide bid amount")
      }
      else if (Bid_amount>=device.suggest_price && (!device.highest_bid?.bid_amount || Bid_amount>device.highest_bid?.bid_amount)) {
        const docRef = await createNewBid({
          bid_amount: Bid_amount,
          device_id: mobile_id,
          status: "Pending"
        }, navigation);
        
      }else{
        alert("Bid amount should be greater than suggested price and highest bid")
      }
    }else{
      navigation.navigate("PaymentMethodScreen",{
        id: route.params.id,
        device: route.params.device,
      })
    }
    
  };
  
    // Format the countdown time into HH:MM:SS
    const formatCountdown = () => {
      const hours = Math.floor(countdown / 3600);
      const minutes = Math.floor((countdown % 3600) / 60);
      const seconds = countdown % 60;
      return `${hours}:${minutes}:${seconds}`;
    };


  return (
    <ImageBackground
      source={{
        uri:
          "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3865.jpg?size=626&ext=jpg",
      }}
      style={{
        height: "100%",
      }}
    >
      {device!=null &&<KeyboardAwareScrollView
        style={{
          height: "100%",
          width: "100%",
        }}
      >

        <View
          style={{
            paddingVertical: 25,
          }}
        >
          <Image
            source={{
              uri: device.picture,
            }}
            style={{
              height: 100,
              width: 100,
              alignSelf: "center",
              borderRadius: 50,
            }}
            resizeMode="cover"
          />

          <Text
            style={{
              alignSelf: "center",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {device.device_name} {device.model}
          </Text>
        </View>
        <View
          style={{
            width:"90%",
            alignSelf:"center"
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Seller Price::
              <Text>{device.price}</Text>/Rs
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Suggested Price::
              <Text>{device.suggestPrice}</Text>/Rs
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Highest Bid:: {device.highest_bid?.bid_amount}/Rs
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Remaining Time::{" "}
              <Text
                style={{
                  color: "green",
                }}
              >
                {formatCountdown()}
              </Text>{" "}
            </Text>
          </View>

          {!device.is_owner && (
            <>
             <View
                style={{
                  marginTop: 20,
                }}
              >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              fontStyle: "italic",
              color: "white",
            }}
          >
            Place Your Bid
          </Text>
        </View>
            <View
              style={{
                flexDirection: "row",
                width:"100%",
                marginTop: 10,
              }}
            >
              <View style={{ width:"60%",marginEnd:10 }}>
                  <Input
                    placeholder="Enter your Bid"
                    value={Bid_amount}
                    onchange={(text) => setBid_amount(text)}
                    mode="outlined"
                    keyboard="number-pad"
                    is_secure={false}
                    is_required={true}
                />
                </View>
              

              <TouchableOpacity
                onPress={Bidding}
                style={{
                  height: 50,
                  width:"30%",
                  paddingHorizontal: 5,
                  backgroundColor: "#0d75bf",
                  justifyContent: "center",
                  borderRadius: 5,
                  // marginTop:90,
                  marginLeft: 0,
                }}
              >
                <Text
                  style={{
                    textAlign:"center",
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: "bold",
                    fontStyle: "italic",
                  }}
                >
                  Place Bid
                </Text>
              </TouchableOpacity>
            </View>
            </>
          )}
          {bids.length>0&&<AllBidding deviceData={device} bids={bids} />}
        </View>

        
      </KeyboardAwareScrollView>}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({});

export default AuctionScreen;
