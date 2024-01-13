import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SingleBidder from "../../components/SingleBidder";
import OwnerDet from "../../components/OwnerDet";
import SingleBid from "../../components/SingleBid";
import Modal from "react-native-modal";
import DropDownPicker from 'react-native-dropdown-picker';
import {getBidDevices, getOngoinAuctionDevices, getSoldDevices, updateSoldStatus } from '../../Utils/api'
import { Button } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';

const AuctionManage = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [type, setType] = useState("All");
  const [item, setItem] = useState();
  const [isStatusModalVisible, setStatusModal] = useState(false);
  const [isDetailModelVisible, setDetailModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  const toggleStatusModal = (item) => {
    console.log(item)
    if(item !==''){
      if(item.status == 'Sold'){
          setItems([
            {label: 'In Transit', value: 'In Transit'},
            {label: 'Received By Buyer', value: 'Received By Buyer'},
            {label: 'Closed', value: 'Closed'}
          ])
      }else if(item.status == 'In Transit'){
        setItems([
          {label: 'Received By Buyer', value: 'Received By Buyer'},
          {label: 'Closed', value: 'Closed'}
        ])
      } else if(item.status == 'Received By Buyer'){
        setItems([
          {label: 'Closed', value: 'Closed'}
        ])
      }
      setItem(item)
    }
    
    setStatusModal(!isStatusModalVisible);
  };
  const toggleDetailModal = (item) => {
    setItem(item)
    setDetailModal(!isDetailModelVisible);
  };
  useEffect(() => {}, [type]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const devices = await getBidDevices();
        setData(devices);
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

  const getDevicesList = async(type) =>{
      if(type == 'All'){
        const devices = await getBidDevices();
        setData(devices);
      }else if(type == 'Available'){
        const ongoing = await getOngoinAuctionDevices();
        setData(ongoing);
      }else if(type == 'Sold'){
        const sold = await getSoldDevices();
        setData(sold);
      }
      setType(type);
  }
  const updateStatus = async()=>{
    setLoading(true)
    const devices = await updateSoldStatus({device_id:item.id, status:value});
    if(!devices){
     setLoading(false)
    }else{
      setData(devices);
      setLoading(false)
      toggleStatusModal('');
    }
    
  }
  return (
    <ImageBackground
      source={{
        uri: "https://wallpaperaccess.com/full/449895.jpg",
      }}
      style={styles.container}
    >
      <View>
        <ScrollView
          vertical
          showsHorizontalScrollIndicator={false}
          style={{
            position: "relative",
          }}
        >
          <View
            style={styles.topButtonview}
          >
            <TouchableOpacity
              style={styles.topButton}
              onPress={() => getDevicesList("All")}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.topButton}
              onPress={() => getDevicesList("Available")}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                Active
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.topButton}
              onPress={() => getDevicesList("Sold")}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                Sold
              </Text>
            </TouchableOpacity>
          </View>
          {data && data.map((item, key) => (
            <View key={key}>
                <View
                  style={{
                    flexDirection: "column",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      margin: 20,
                      justifyContent: "space-evenly",
                      backgroundColor: "white",
                      padding: 5,
                      borderRadius: 10,
                      height: 180,
                    }}
                  >
                    <View
                      style={{
                        alignItems: "center",
                        marginTop: 10,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "bold",
                        }}
                      >
                        Owner
                      </Text>
                      <OwnerDet user={item.user} />
                    </View>
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 1,
                        marginLeft: 15,
                        marginRight: 15,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "bold",
                        }}
                      >
                        Device
                      </Text>
                      <Image
                        source={{
                          uri: item.picture,
                        }}
                        style={{
                          width: 50,
                          height: 60,
                          borderRadius: 10,
                        }}
                      />
                      <Text>{item.device_name}</Text>
                      {item.status === "Available" && (
                        <View>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: "bold",
                              alignSelf: "center",
                            }}
                          >
                            Bid Details
                          </Text>
                          <SingleBid bid={item.latest_bid} />
                        </View>
                      )}

                      {(item.status === "Sold" || item.status === "In Transit") && (
                        <View>
                          <Text
                            style={{
                              fontSize: 10,
                            }}
                          >
                            Bid Details
                          </Text>
                          <SingleBid bid={item.accepted_bid} />
                        </View>
                      )}
                    </View>
                    <View
                      style={{
                        alignItems: "center",
                        marginTop: 10,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Bidder
                      </Text>
                      {(item.status === "Sold" || item.status === "In Transit") && (<SingleBidder user={item.accepted_bid.user} />)}
                      {item.status === "Available" && <SingleBidder user={item.latest_bid.user} />}
                    </View>
                  </View>
                  {item.status =="Available" && <TouchableOpacity
                    style={{
                      backgroundColor: "#3346FF",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: "90%",
                      alignSelf:'center',
                      borderBottomStartRadius: 15,
                      borderBottomEndRadius: 15,
                      position: "relative",
                      marginTop: 5,
                      top: -25,
                    }}
                    onPress={()=>{toggleDetailModal(item)}}
                  >
                    <Text
                      style={{
                        color: "white",
                      }}
                    >
                      View Details
                    </Text></TouchableOpacity>}
                  {(item.status === "Sold" || item.status === "In Transit" || item.status === "Received By Buyer") && (<View
                        style={{
                          width: "90%",
                          alignSelf:"center",
                          flexDirection: "row",
                        }}
                      >
                        
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#3346FF",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: "50%",
                      borderBottomLeftRadius: 15,
                      borderTopLeftRadius: 3,
                      position: "relative",
                      top: -25,
                    }}
                    onPress={()=>{toggleDetailModal(item)}}
                  >
                    <Text
                      style={{
                        color: "white",
                      }}
                    >
                      View Details
                    </Text>
                  </TouchableOpacity>
                        <TouchableOpacity
                          disabled={loading}
                          style={{
                            backgroundColor: "green",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "50%",
                            height: 40,
                            borderBottomRightRadius: 15,
                            borderTopRightRadius: 3,
                            position: "relative",
                            top: -25,
                          }}
                          onPress={()=>{toggleStatusModal(item)}}
                        >
                          <Text
                            style={{
                              color: "white",
                            }}
                          >
                            Update Status
                          </Text>
                        </TouchableOpacity>
                    </View>
                    )}
                </View>
            </View>
          ))}
        </ScrollView>
        <Modal isVisible={isStatusModalVisible} onBackButtonPress={() => toggleStatusModal('')} 
      animationIn="slideInUp" animationInTiming={200} animationOut="bounceOut">
        <View style={{ flex: 1,zIndex:11111,justifyContent:"center" }}>
          <View style={{ height:300, width:"90%",borderRadius:40, alignSelf:"center",justifyContent:"center", alignItems:"center", backgroundColor:"white" }}>
              
              <View style={{width:"90%",alignSelf:"center"}}>
                <Text>Select Status</Text>
                <View>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                  />
                </View>
                <TouchableOpacity
                    style={{
                      backgroundColor: "green",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50%",
                      alignSelf:"center",
                      height: 40,
                      top:30,
                      borderRadius:10,
                      position: "relative",
                    }}
                    onPress={()=>{updateStatus('')}}
                  >
                    <Text
                      style={{
                        color: "white",
                      }}
                    >
                      Update Status
                    </Text>
                  </TouchableOpacity>
              </View>
          </View>
          
        </View>
      </Modal>
      <Modal isVisible={isDetailModelVisible} onBackButtonPress={() => toggleDetailModal('')} 
      animationIn="slideInUp" animationInTiming={200} animationOut="bounceOut">
        <View style={{ flex: 1,zIndex:11111,justifyContent:"center" }}>
            
            {isDetailModelVisible && <View style={{ height:500, width:"100%",borderRadius:40, alignSelf:"center", backgroundColor:"white" }}>
                <View style={{width:"90%",alignSelf:"center"}}>
                  
                  <TouchableOpacity
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: 20,
                        height: 40,
                        position: "relative",
                        alignSelf:"flex-end"
                      }}
                      onPress={()=>{toggleDetailModal('')}}
                    >
                    <Icon name="close" size={20} color="gray" />
                    </TouchableOpacity>
                    <Text>{item.device_name}</Text>
                </View>
            </View>}
          </View>
      </Modal>
      </View>
    </ImageBackground>
  );
};

export default AuctionManage;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  topButtonview:{
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  topButton: {
    width: "24%",
    height: 45,
    backgroundColor: "#00BFFF",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});
