import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { Image } from "react-native";
import { TextInput } from "react-native-paper";
import { db } from "../../firebase/firebase.config";

const SingleBid = (props) => {
  const [BidAmount, SetBidAmount] = useState("");
  const [Status, setStatus] = useState("");

 
  useEffect(() => {
    const readInfo = async () => {
      const docRef = doc(db, "Bidding", props.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        SetBidAmount(docSnap.data().bid_amount);
        setStatus(docSnap.data().status);
      }
    };
    readInfo();
  }, [props.id]);
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
        
        {BidAmount}
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
