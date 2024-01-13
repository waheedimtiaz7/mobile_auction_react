import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const SingleBid = ({bid}) => {
  const [BidAmount, SetBidAmount] = useState("");
  const [Status, setStatus] = useState("");

 
  useEffect(() => {
    const readInfo = async () => {
        SetBidAmount(bid.bid_amount);
        setStatus(bid.status);
    };
    readInfo();
  }, []);
  // console.log(BidAmount);
  return (
    <View>
    <Text>Bid Amount:{"\b"}
      <Text
        style={{
          fontWeight:"bold",
          color:"green"
        }}
      >
        
        ${BidAmount}
      </Text>
      </Text>
      <Text>Status:{"\b"}
      <Text
        style={{
          fontWeight: "bold",
          color:"blue"
        }}
      > {Status}
       </Text>
       
      </Text>
    </View>
  );
};

export default SingleBid;

const styles = StyleSheet.create({});
