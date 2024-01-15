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
  console.log(BidAmount);
  return (
    <View >
      <View style={{ }}>
          <Text style={{ fontWeight: 'bold' }}>Bid Amount</Text>
          <Text style={{ color: 'green' }}> ${BidAmount}</Text>
        </View>
        <View style={{  }}>
          <Text style={{ fontWeight: 'bold' }}>Bid Status</Text>
          <Text style={{ color: 'black' }}>{Status}</Text>
        </View>
    </View>
  );
};

export default SingleBid;

const styles = StyleSheet.create({});
