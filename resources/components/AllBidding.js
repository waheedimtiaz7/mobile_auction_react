import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { acceptBid } from '../Utils/api'
import SingleBidder from "./SingleBidder";
// import { doc, deleteDoc } from "firebase/firestore";

const AllBidding = ({deviceData, bids}) => {
  const navigation = useNavigation();
  const [data, setData] = useState(bids);
  const [device, setDeviceData] = useState(deviceData);
  const navigate = (screenName) => {
    navigation.navigate(screenName);
  };
  useEffect(() => {
    console.log(data)
  }, []);
  const changeStatus = async (id) => {

    await acceptBid(
      "Hold",
      id,
      navigation
    );
  };
  

  
  return (
    <View>
      <View
                style={{
                  marginTop: 20,
                }}
              >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Previous Bids
          </Text>
        </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        {data.length && data.map((item, key) => (
          <View
            key={key}
            style={{
              alignItems: "center",
              margin: 5,
              backgroundColor: "white",
              padding: 5,
              borderRadius: 10,
            }}
          >
          
            <View
              style={{
               
                justifyContent: "space-between",
                padding: 10,
                borderRadius: 2,
              }}
            >    
              <SingleBidder user={item.user}/>
              <Text>
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  <Text>Amount:: {"\b"}</Text>
                  {item.bid_amount}
                </Text>
                /Rs
              </Text>
             
                
            </View>
            {device.is_owner==true &&  item.status!=="Hold" && device.device_status!=="Hold" && (
           
            <TouchableOpacity
              style={{
                backgroundColor: "green",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                borderRadius: 15,
              }}
              onPress={() => changeStatus(item.id)}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                Accept Offer
              </Text>
            </TouchableOpacity>
            )}
            
            {device.is_owner==true && (
           
           <TouchableOpacity
             style={{
               backgroundColor: "red",
               width: "100%",
               justifyContent: "center",
               alignItems: "center",
               height: 40,
               borderRadius: 15,
               
             }}
             onPress={() => removeBidding(item.id)}
           >
             <Text
               style={{
                 color: "white",
               }}
             >
               Delete Bid
             </Text>
           </TouchableOpacity>
           )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default AllBidding;

const styles = StyleSheet.create({});
