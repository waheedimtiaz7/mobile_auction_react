import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { ImagePicker } from 'expo-image-multiple-picker';
import Constants from 'expo-constants';
import { ImageBackground } from "react-native";
import { AddDevice } from '../Utils/api';
import { Card, Paragraph } from 'react-native-paper';
const SellDeviceForm = ({ navigation }) => {
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
  const [Device_name, setDevice_name] = useState("");
  const [bidderId,setBidderId] = useState("");
  const [Model, setModel] = useState("");
  const [image, setImage] = useState(null);
  const [dbImage, setDbImage] = useState(null);
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const closeImagePicker = (assets) => {
    setSelectedImages([...assets]);
    setShowImagePicker(false);
  };


  const ImagePickerContainer = () => {
    return (
      <View style={styles.imagePickerContainer}>
        <ImagePicker
          onSave={(assets) => closeImagePicker(assets)}
          onCancel={() => setShowImagePicker(false)}
          multiple
          limit={6}
        />
      </View>
    );
  };

  useEffect(() => {
    
  }, []);
  const saveDevice = async () => {
    if (
      Wifi &&
      Battery &&
      Price &&
      Device_name &&
      Model &&
      OS &&
      UI &&
      Dimensions &&
      Weight &&
      Color &&
      Sim &&
      Size &&
      Resolution &&
      RAM &&
      ROM &&
      SDCard &&
      Bluetooth
    ) {
      const device = {
        device_name: Device_name,
        model: Model,
        picture: dbImage,
        os: OS,
        ui: UI,
        dimensions: Dimensions,
        weight: Weight,
        color: Color,
        sim: Sim,
        cpu: CPU,
        gpu: GPU,
        size: Size,
        resolution: Resolution,
        ram: RAM,
        rom: ROM,
        sdcard: SDCard,
        bluetooth: Bluetooth,
        wifi: Wifi,
        battery: Battery,
        price: Price,
        status: "Pending"
      }
      AddDevice(device,selectedImages, navigation);
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <ImageBackground
      source={{
        uri:
          "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3865.jpg?size=626&ext=jpg",
      }}
    >
      <ScrollView
        style={{
          width: "100%",
        }}
      >
        <View style={{ width:"90%", display:"flex", alignSelf:"center" }}>
        <View>
          <Text
            style={{
              fontSize: 20,
              color: "black",
             

              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Device Details
          </Text>
          <TextInput
            label="Device name"
            placeholder="Enter Device Name"
            style={{
            
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
            value={Device_name}
            onChangeText={(text) => setDevice_name(text)}
          />
          <TextInput
            label="Model"
            placeholder="Enter Model"
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
            value={Model}
            onChangeText={(text) => setModel(text)}
          />
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
        <TextInput
          label="Operating System"
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
          }}
          value={OS}
          onChangeText={(text) => setOS(text)}
        />
        <TextInput
          label="User Interface"
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
          }}
          value={UI}
          onChangeText={(text) => setUI(text)}
        />
        <TextInput
          label="Dimensions"
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
          }}
          value={Dimensions}
          onChangeText={(text) => setDimensions(text)}
        />
        <TextInput
          label="Weight"
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
          }}
          value={Weight}
          onChangeText={(text) => setWeight(text)}
        />
        <TextInput
          label="Color"
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
          }}
          value={Sim}
          onChangeText={(text) => setSim(text)}
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
            Processor
          </Text>
        </View>
        <TextInput
          label="CPU"
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
          }}
          value={GPU}
          onChangeText={(text) => setGPU(text)}
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
            Screen
          </Text>
        </View>
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
          }}
          value={Resolution}
          onChangeText={(text) => setResolution(text)}
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
            Memory/Storage
          </Text>
        </View>
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
          }}
          value={SDCard}
          onChangeText={(text) => setSDCard(text)}
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
             
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Connections/Networks
          </Text>
        </View>
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
          }}
          value={Bluetooth}
          onChangeText={(text) => setBluetooth(text)}
        />
        <TextInput
          label="WIFI"
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
          }}
          value={Wifi}
          onChangeText={(text) => setWifi(text)}
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
            Price You Want
          </Text>
        </View>
        <TextInput
          label="Price"
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
            Upload Device Image
          </Text>
        </View>
        
        <TouchableOpacity
          style={{
            alignItems: "center",
          }}
          onPress={() => setShowImagePicker((pre) => !pre)}
        >
          <Image
            source={{
              uri:
                "data:image/png;base64,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",
              // uri: dbImage,
            }}
            style={{
              width: 80,
              height: 80,
              borderRadius: 100,
            }}
          />
        </TouchableOpacity>
        <ScrollView horizontal
        showsHorizontalScrollIndicator={false}>
        {selectedImages.map((item, index) => (
          <Card key={index} style={styles.cardContainer}>
            <Card.Cover source={{ uri: item.uri }} />
          </Card>
        ))}
      </ScrollView>
        
        <TouchableOpacity
          style={{
            backgroundColor: "#0d75bf",
            height: 40,
            width: "70%",
            marginTop: 20,
            marginBottom: 20,
            justifyContent: "center",
            alignSelf: "center",
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
          onPress={saveDevice}
        >
          <Text
            style={{
              textAlign:"center",
              color: "white",
              fontWeight: "bold",
              fontSize: 18,
              fontStyle: "normal",
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
        </View>
        
      </ScrollView>
      {showImagePicker && <ImagePickerContainer />}
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  openBtn: {
    width: 230,
  },
  imagePickerContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
    zIndex: 9,
  },
  cardContainer: {
    marginLeft: 12,
    width: 260,
    marginTop: 20,
  },
});
export default SellDeviceForm;
