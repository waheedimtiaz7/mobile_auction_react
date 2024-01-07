import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Image, ImageBackground } from "react-native";
import { TextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { updateDevice, removeDevice } from '../Utils/api';

const SingleDevice = ({ navigation, route }) => {
  // const navigation = useNavigation();
  // const navigate = (screenName) => {
  //   navigation.navigate(screenName);
  // };

  const [device, setDevice] = useState(route.params.device);

  const [OS, setOS] = useState("");
  const [UI, setUI] = useState("");
  const [Dimensions, setDimensions] = useState("");
  const [Weight, setWeight] = useState("");
  const [Sim, setSim] = useState("");
  const [Color, setColor] = useState("");
  const [CPU, setCPU] = useState("");
  const [GPU, setGPU] = useState("");
  const [Size, setSize] = useState("");
  const [Resolution, setResolution] = useState("");
  const [RAM, setRAM] = useState("");
  const [ROM, setROM] = useState("");
  const [SDCard, setSDCard] = useState("");
  const [Bluetooth, setBluetooth] = useState("");
  const [Wifi, setWifi] = useState("");
  const [Battery, setBattery] = useState("");
  const [Price, setPrice] = useState("");
  const [SuggestPrice, setSuggestPrice] = useState("");
  const [ownerId, setOwnerId] = useState("");
  const [status, setStatus] = useState("");
  const [Device_name, setDevice_name] = useState("");
  const [Model, setModel] = useState("");
  const [image, setImage] = useState(null);
  const [dbImage, setDbImage] = useState(null);
  useEffect(() => {
      if (device) {
        setDevice_name(device.device_name);
        setModel(device.model);
        setDbImage(device.picture);
        setOS(device.os);
        setUI(device.ui);
        setBattery(device.battery);
        setBluetooth(device.bluetooth);
        setCPU(device.cpu);
        setGPU(device.gpu);
        setDimensions(device.dimensions);
        setColor(device.color);
        setRAM(device.ram);
        setROM(device.rom);
        setSize(device.size);
        setSDCard(device.sdcard);
        setSim(device.sim);
        setWeight(device.weight);
        setPrice(device.price);
        setSuggestPrice(device.SuggestPrice);
        setWifi(device.wifi);
        setResolution(device.resolution);
        setOwnerId(device.ownerId);
        setStatus(device.status);
        console.log(device.status)
      }
  }, [route.params.device]);
  const update = async () => {
    const device_info = {
      device_name: Device_name,
      model: Model,
      picture: dbImage,
      os: OS,
      ui: UI,
      battery: Battery,
      bluetooth : Bluetooth,
      cpu : CPU,
      gpu: GPU,
      dimensions: Dimensions,
      color:Color,
      ram: RAM,
      rom: ROM,
      size: Size,
      sim: Sim,
      weight: Weight,
      price: Price,
      wifi: Wifi,
      resolution: Resolution,
      sdcard: SDCard,
      device_id: device.id,
    }
    await updateDevice(device_info, navigation);
  };
  const deleteDevice = async (id) => {
    try {
      await removeDevice(device.id, navigation);
    } catch (error) {
      console.error("Error deleting Device:", error);
    }
  };
 
    return (
      <ImageBackground
        source={{
          uri:
            "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3865.jpg?size=626&ext=jpg",
        }}
        style={{
          flex: 1,
        }}
      >
        <ScrollView
         
        >
          <View style={{ width: "90%", alignSelf:"center",paddingTop:10, }}>
          <Image
            source={{
              uri:dbImage  }}
              style={{
              height: 150,
              width:150,
              alignSelf:"center",
              borderRadius:100,
              marginBottom:10
            }}
          />
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TextInput
              label="Device name"
              placeholder="Enter Device Name"
              style={{
                marginVertical: 5,
                backgroundColor: "white",
                shadowColor: "#000",
                width: "48%",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
  
                elevation: 8,
              }}
              value={Device_name}
              onChangeText={(text) => setDevice_name(text)}
        
            />
            <TextInput
              label="Model"
              placeholder="Enter Model"
              style={{
                marginVertical: 5,
                width: "48%",
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
                elevation: 8,
                marginLeft: 10,
              }}
              value={Model}
              onChangeText={(text) => setModel(text)}
             
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                marginLeft: 15,
                color: "black",
                
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Builder
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TextInput
              label="OS"
              placeholder="Enter Operating System"
              style={{
                marginVertical: 5,
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
                elevation: 8,
                width: "48%",
              }}
              value={OS}
              onChangeText={(text) => setOS(text)}
             
            />
            <TextInput
              label="UI"
              placeholder="Enter User InterFace"
              style={{
                marginVertical: 5,
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
                elevation: 8,
                width: "48%",
                marginLeft: 10,
              }}
              value={UI}
              onChangeText={(text) => setUI(text)}
             
            />
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TextInput
              label="Dimensions "
              placeholder="Dimensions"
              style={{
                marginVertical: 5,
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
                elevation: 8,
                width: "48%",
              }}
              value={Dimensions}
              onChangeText={(text) => setDimensions(text)}
              
            />
            <TextInput
              label="weight "
              placeholder="weight"
              style={{
                marginVertical: 5,
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
                elevation: 8,
                width: "48%",
                marginLeft: 10,
              }}
              value={Weight}
              onChangeText={(text) => setWeight(text)}
             
            />
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TextInput
              label="Color "
              placeholder="Color"
              style={{
                marginVertical: 5,
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
                elevation: 8,
                width: "48%",
              }}
              value={Color}
              onChangeText={(text) => setColor(text)}
             
            />
            <TextInput
              label="Sim"
              placeholder="Enter number of sims"
              style={{
                marginVertical: 5,
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
                elevation: 8,
                width: "48%",
                marginLeft: 10,
              }}
              value={Sim}
              onChangeText={(text) => setSim(text)}
           
            />
          </View>
          <View
            style={{
              marginRight: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                marginLeft: 15,
                color: "black",
                
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Processor
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TextInput
              label="	CPU"
              placeholder="CPU"
              style={{
                marginVertical: 5,
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
                elevation: 8,
                width: "48%",
              }}
              value={CPU}
              onChangeText={(text) => setCPU(text)}
         
            />
            <TextInput
              label="GPU"
              placeholder="GPU"
              style={{
                marginVertical: 5,
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
                elevation: 8,
                width: "48%",
                marginLeft: 10,
              }}
              value={GPU}
              onChangeText={(text) => setGPU(text)}
            
            />
          </View>
  
          <View
            style={{
              marginRight: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                marginLeft: 15,
                color: "black",
                
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Screen
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TextInput
              label="Size"
              placeholder="Size"
              style={{
                marginVertical: 5,
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
                elevation: 8,
                width: "48%",
              }}
              value={Size}
              onChangeText={(text) => setSize(text)}
           
            />
            <TextInput
              label="Resolution"
              placeholder="Resolution"
              style={{
                marginVertical: 5,
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
                elevation: 8,
                width: "48%",
                marginLeft: 10,
              }}
              value={Resolution}
              onChangeText={(text) => setResolution(text)}
             
            />
          </View>
          <View
            style={{
              marginRight: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                marginLeft: 15,
                color: "black",
                
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Memory/Storage
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TextInput
              label="RAM"
              placeholder="RAM"
              style={{
                marginVertical: 5,
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
                elevation: 8,
                width: "30%",
              }}
              value={RAM}
              onChangeText={(text) => setRAM(text)}
             
            />
            <TextInput
              label="ROM"
              placeholder="ROM"
              style={{
                marginVertical: 5,
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
                elevation: 8,
                width: "30%",
                marginLeft: 10,
              }}
              value={ROM}
              onChangeText={(text) => setROM(text)}
            
            />
            <TextInput
              label="SD card"
              placeholder="SD card"
              style={{
                marginVertical: 5,
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
                elevation: 8,
                width: "35%",
                marginLeft: 10,
              }}
              value={SDCard}
              onChangeText={(text) => setSDCard(text)}
             
            />
          </View>
  
          <View
            style={{
              marginRight: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                marginLeft: 15,
                color: "black",
                
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Connections/Networks
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TextInput
              label="Bluetooth"
              placeholder="Bluetooth"
              style={{
                marginVertical: 5,
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
                elevation: 8,
                width: "48%",
              }}
              value={Bluetooth}
              onChangeText={(text) => setBluetooth(text)}
             
            />
            <TextInput
              label="Wifi"
              placeholder="Wifi"
              style={{
                marginVertical: 5,
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
                elevation: 8,
                width: "48%",
                marginLeft: 10,
              }}
              value={Wifi}
              onChangeText={(text) => setWifi(text)}
              
            />
          </View>
          <View
            style={{
              marginRight: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                marginLeft: 15,
                color: "black",
                
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Battery Details
            </Text>
          </View>
          <TextInput
            label="Battery"
            placeholder="Battery"
            style={{
              marginVertical: 5,
              backgroundColor: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,
  
              elevation: 8,
            }}
            value={Battery}
            onChangeText={(text) => setBattery(text)}
           
          />
  
          <View
            style={{
              marginRight: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                marginLeft: 15,
                color: "black",
                
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
               Price
            </Text>
          </View>
          <View style>
          <TextInput
            label="Starting Price"
            placeholder="Enter Your Price"
            style={{
              marginVertical: 5,
              backgroundColor: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,
  
              elevation: 8,
            }}
            value={Price}
            onChangeText={(text) => setPrice(text)}
           
          />
           <TextInput
            label="Suggested Price"
            placeholder="Enter Your Price"
            style={{
              marginVertical: 5,
              backgroundColor: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,
  
              elevation: 8,
            }}
            value={Price}
            onChangeText={(text) => setPrice(text)}
            editable={false}
          />
          </View>
          <View style={{
            flexDirection:"column",
            alignItems:"center"
          }}>
            {status === "Pending" && (
          <TouchableOpacity
           
           style={{
             backgroundColor: "green",
             height: 40,
             width: "75%",
             marginTop: 40,
             marginLeft: 25,
             justifyContent: "center",
             alignItems: "center",
             borderRadius: 25,
             marginVertical: 10,
             shadowColor: "#000",
             shadowOffset: {
               width: 0,
               height: 4,
             },
             shadowOpacity: 0.3,
             shadowRadius: 4.65,
 
             elevation: 9,
           }}
           onPress={update}
         >
           <Text
             style={{
               color: "white",
               fontWeight: "bold",
               fontSize: 25,
               fontStyle: "normal",
             }}
           >
             Update
           </Text>
         </TouchableOpacity>)}
          <TouchableOpacity
           
            style={{
              backgroundColor: "red",
              height: 40,
              width: "75%",
              marginTop: 10,
              marginLeft: 25,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 25,
              marginVertical: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,
  
              elevation: 9,
            }}
            onPress={deleteDevice}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 25,
                fontStyle: "normal",
              }}
            >
              Delete
            </Text>
          </TouchableOpacity>
          </View>
          </View>
          
        </ScrollView>
      </ImageBackground>
    );
  };
  

  

export default SingleDevice;

const styles = StyleSheet.create({});
