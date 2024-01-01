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
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase.config";




const PriceSuggestionScreen = ({navigation,route}) => {
  // const navigation = useNavigation();
  // const navigate = (screenName) => {
  //   navigation.navigate(screenName);
  // };
  const [mobile_id, setMobile_id] = useState(route.params.id);
  
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
  const [S_Price, setS_Price] = useState("");
  const [SuggestPrice, setSuggestPrice] = useState("");
  const [Device_name, setDevice_name] = useState("");
  const [sts, setSts] = useState("");
  const [Model, setModel] = useState("");
  const [image, setImage] = useState(null);
  const [dbImage, setDbImage] = useState(null);
  useEffect(() => {
    const readInfo = async () => {
      const docRef = doc(db, "mobiles", mobile_id);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
      
        setDevice_name(docSnap.data().device_name);
        setModel(docSnap.data().model);
        setDbImage(docSnap.data().picture);
        setOS(docSnap.data().os);
        setUI(docSnap.data().ui);
        setBattery(docSnap.data().battery);
        setBluetooth(docSnap.data().bluetooth);
        setCPU(docSnap.data().cpu);
        setGPU(docSnap.data().gpu);
        setDimensions(docSnap.data().dimensions);
        setColor(docSnap.data().color);
        setRAM(docSnap.data().ram);
        setROM(docSnap.data().rom);
        setSize(docSnap.data().size);
        setSDCard(docSnap.data().sdcard);
        setSim(docSnap.data().sim);
        setWeight(docSnap.data().weight);
        setPrice(docSnap.data().price);
        setWifi(docSnap.data().wifi);
        setResolution(docSnap.data().resolution);
        setSts(docSnap.data().status);
        setS_Price(docSnap.data().SuggestPrice);
        
      }
    };
    readInfo();
  }, [route.params.id]);
  const changeStatus = async (status) => {
    const washingtonRef = doc(db, "mobiles", route.params.id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
      status: status,
      SuggestPrice:SuggestPrice
    }).then(() => {
      alert("Device is " + status);
    });
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
        style={{
          width: "90%",
          marginLeft: 15,
          paddingTop: 10,
        }}
      >
        {/* <View>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 15,
              color: "black",
              border: 10,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Device Details
          </Text>
        </View> */}
        <View
          style={{
            flexDirection: "row",
          }}
        >
        
          <TextInput
            label="name"
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
            editable={false}
          />
          <TextInput
            label="model"
            placeholder=""
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
            editable={false}
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            position: "relative",
            paddingTop: 8,
            paddingBottom: 8,
          }}
        >
          <Image
            source={{
              uri:dbImage
                
            }}
            style={{
              height: 200,
              width: 150,
            }}
          />
          {/* <Image
          
            style={{
              height: 200,
              width: 100,
              marginLeft: 8,
            }}
          />
          <Image
            source={{
              uri:
                "https://www.whatmobile.com.pk/admin/images/Samsung/SamsungGalaxyA34-b.jpg",
            }}
            style={{
              height: 200,
              width: 90,
              marginLeft: 8,
              marginRight: 9,
            }}
          /> */}
        </ScrollView>

        <View>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 15,
              color: "black",
              border: 10,
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
            label="Operating System"
            placeholder=""
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
            editable={false}
          />
          <TextInput
            label="User Interface"
            placeholder=""
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
            editable={false}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TextInput
            label="Dimensions"
            placeholder=""
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
            editable={false}
          />
          <TextInput
         label="Weight"
            placeholder=""
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
            editable={false}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TextInput
            label="Color"
            placeholder=""
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
            editable={false}
          />
          <TextInput
            label="SIM"
            placeholder=""
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
            editable={false}
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
              border: 10,
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
            label="CPU"
            placeholder=""
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
            editable={false}
          />
          <TextInput
           label="GPU"
            placeholder=""
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
            editable={false}
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
              border: 10,
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
            placeholder=""
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
            editable={false}
          />
          <TextInput
           label="Resolution"
            placeholder=""
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
            editable={false}
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
              border: 10,
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
            placeholder=""
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
            editable={false}
          />
          <TextInput
           label="ROM"
            placeholder=""
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
            editable={false}
          />
          <TextInput
         label="SDCard"
            placeholder=""
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
            editable={false}
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
              border: 10,
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
            placeholder=""
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
            editable={false}
          />
          <TextInput
label="Wifi"
            placeholder=""
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
            editable={false}
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
              border: 10,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Battery Details
          </Text>
        </View>
        <TextInput
         label="Battery"
          placeholder=""
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
          editable={false}
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
              border: 10,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Seller Price
          </Text>
        </View>
        <TextInput
          
          placeholder=""
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
              border: 10,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Suggest Your Price
          </Text>
        </View>
        { sts==="Active" &&  ( 
        <TextInput
          
          placeholder=""
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
          value={S_Price}
          onChangeText={(text) => setS_Price(text)}
          editable={false}
        />  )}  
         { sts==="Pending" &&  (  
          <TextInput
          
          placeholder=""
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
          value={SuggestPrice}
          onChangeText={(text) => setSuggestPrice(text)}
          
        />
         )}
        { sts==="Pending" &&  (
          
       
        <TouchableOpacity
          onPress={() => changeStatus("Active")}
          style={{
            backgroundColor: "#0d75bf",
            height: 40,
            width: "70%",
            marginTop: 40,
            marginLeft: 37,
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
          // onPress={AddDevice}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 25,
              fontStyle: "normal",
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
        )}
      </ScrollView>
    </ImageBackground>
  );
};




export default PriceSuggestionScreen

const styles = StyleSheet.create({})