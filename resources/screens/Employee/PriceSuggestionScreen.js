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
import { updateDeviceStatusByEmployee, getDeviceDetail } from '../../Utils/api'

const PriceSuggestionScreen = ({ navigation, route }) => {
  // const navigation = useNavigation();
  // const navigate = (screenName) => {
  //   navigation.navigate(screenName);
  // };
  const [mobile_id, setMobile_id] = useState(route.params.id);
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
  const [S_Price, setS_Price] = useState("");
  const [SuggestPrice, setSuggestPrice] = useState("");
  const [Device_name, setDevice_name] = useState("");
  const [sts, setSts] = useState("");
  const [Model, setModel] = useState("");
  const [image, setImage] = useState(null);
  const [dbImage, setDbImage] = useState(null);
  useEffect(() => {
    const readInfo = async () => {

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
      setWifi(device.wifi);
      setSts(device.status);
      setResolution(device.resolution);


    };
    readInfo();
  }, [route.params.id]);
  const changeStatus = async (status) => {
    if (status == 'Available') {
      if (SuggestPrice == '') {
        alert('Please enter suggested price')
      } else {
        updateDeviceStatusByEmployee({
          status: status,
          suggest_price: SuggestPrice,
          device_id: device.id
        }, navigation)
      }
    } else {
      updateDeviceStatusByEmployee({
        status: status,
        suggest_price: 0,
        device_id: device.id
      }, navigation)
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
        style={{
          paddingTop: 10,
        }}
      >
        <View
          style={{
            width: "90%",
            alignSelf: "center"
          }}
        >
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              color: "#ACFF05",

              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {device.device_name} {device.model}
          </Text>
        </View>

        <Image
          source={{
            uri: device.picture,
          }}
          style={{
            height: 150,
            width: 150,
            borderRadius: 100,
            marginBottom: 10,
            alignSelf: "center"
          }}
        />
        <View style={{
          width: "90%", alignSelf: "center", borderWidth: 1, borderColor: "white",
          borderRadius: 5, padding: 10, marginBottom: 10
        }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Owner Detail</Text>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <View style={{ width: "50%" }}>
              <Text style={{ fontWeight: 'bold' }}>Name</Text>
              <Text style={{ color: 'white' }}>{device.user.fname + ' ' + device.user.lname}</Text>
            </View>
            <View style={{ width: "50%" }}>
              <Text style={{ fontWeight: 'bold' }}>Phone</Text>
              <Text style={{ color: 'white' }}>{device.user.phone}</Text>
            </View>

          </View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <View >
              <Text style={{ fontWeight: 'bold' }}>Email</Text>
              <Text style={{ color: 'white' }}>{device.user.email}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            width: "90%",
            alignSelf: "center",
            borderColor: "white",
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#333",
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Builder
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                }}
              >
                Operating System{"\b"}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                }}
              >
                User Interface{"\b"}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                }}
              >
                Dimensions{"\b"}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                }}
              >
                Weight{"\b"}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                }}
              >
                Color{"\b"}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                }}
              >
                Sim{"\b"}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 15,
                  color: "black",

                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                  fontWeight: "bold",
                }}
              >
                {device.os}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  color: "black",

                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                  fontWeight: "bold",
                }}
              >
                {device.ui}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  color: "black",

                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                  fontWeight: "bold",
                }}
              >
                {device.dimensions}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  color: "black",

                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                  fontWeight: "bold",
                }}
              >
                {device.weight}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  color: "black",

                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                  fontWeight: "bold",
                }}
              >
                {device.color}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  color: "black",

                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                  fontWeight: "bold",
                }}
              >
                {device.sim}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            borderWidth: 1,
            width: "90%",
            alignSelf: "center",
            borderColor: "white",
            borderRadius: 5,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#333",

              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Processor
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                }}
              >
                CPU{"\b"}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                }}
              >
                GPU{"\b"}
              </Text>
            </View>
            <View style={{ marginLeft: 75 }}>
              <Text
                style={{
                  fontSize: 15,
                  color: "black",

                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                  fontWeight: "bold",
                }}
              >
                {device.cpu}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  color: "black",

                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                  fontWeight: "bold",
                }}
              >
                {device.gpu}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            borderWidth: 1,
            width: "90%",
            alignSelf: "center",
            borderColor: "white",
            borderRadius: 5,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#333",

              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Screen
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                }}
              >
                Size{"\b"}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                }}
              >
                Resolution{"\b"}
              </Text>
            </View>
            <View style={{ marginLeft: 50 }}>
              <Text
                style={{
                  fontSize: 15,
                  color: "black",

                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                  fontWeight: "bold",
                }}
              >
                {device.size}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  color: "black",

                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                  fontWeight: "bold",
                }}
              >
                {device.resolution}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            width: "90%",
            alignSelf: "center",
            borderColor: "white",
            borderRadius: 5,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#333",

              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Memory/Storage
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                }}
              >
                RAM{"\b"}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                }}
              >
                ROM{"\b"}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                }}
              >
                SDCard {"\b"}
              </Text>
            </View>
            <View style={{ marginLeft: 65 }}>
              <Text
                style={{
                  fontSize: 15,
                  color: "black",

                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                  fontWeight: "bold",
                }}
              >
                {device.ram}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  color: "black",

                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                  fontWeight: "bold",
                }}
              >
                {device.rom}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "black",

                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                  fontWeight: "bold",
                }}
              >
                {device.sdcard}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            width: "90%",
            alignSelf: "center",
            borderColor: "white",
            borderRadius: 5,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#333",
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Connections/Networks
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  marginBottom: 5,
                }}
              >
                Bluetooth{"\b"}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                }}
              >
                Wifi{"\b"}
              </Text>
            </View>
            <View style={{ marginLeft: 65 }}>
              <Text
                style={{
                  fontSize: 15,
                  color: "black",

                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                  fontWeight: "bold",
                }}
              >
                {device.bluetooth}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  color: "black",

                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                  fontWeight: "bold",
                }}
              >
                {device.wifi}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            width: "90%",
            alignSelf: "center",
            borderColor: "white",
            borderRadius: 5,
            marginTop: 10,
            marginBottom: 5,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#333",

              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Battery Details
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                }}
              >
                Battery {"\b"}
              </Text>
            </View>
            <View style={{ marginLeft: 65 }}>
              <Text
                style={{
                  fontSize: 15,
                  color: "black",

                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                  fontWeight: "bold",
                }}
              >
                {device.battery}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            width: "90%",
            alignSelf: "center",
            borderColor: "white",
            borderRadius: 5,
            marginBottom: 6,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#333",

              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Price
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                }}
              >
                Seller Price{"\b"}
              </Text>

            </View>
            <View style={{ marginLeft: 15 }}>
              <Text
                style={{
                  fontSize: 15,
                  color: "black",

                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,

                  marginBottom: 5,
                  fontWeight: "bold",
                }}
              >
                ${device.price}
              </Text>

            </View>
          </View>
        </View>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <Text>Suggested Price *</Text>
          <TextInput

            placeholder="Enter suggested price"
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
          <View style={{ flexDirection: "row", alignSelf: 'center', gap: 10, marginBottom: 10 }}>
            <TouchableOpacity
              onPress={() => changeStatus("Available")}
              style={{
                backgroundColor: "green",
                height: 40,
                width: "50%",
                marginTop: 15,
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
                  fontSize: 18,
                  fontStyle: "normal",
                }}
              >
                Approve
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => changeStatus("Rejected")}
              style={{
                backgroundColor: "red",
                height: 40,
                width: "50%",
                marginTop: 15,
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
                  fontSize: 18,
                  fontStyle: "normal",
                }}
              >
                Reject
              </Text>
            </TouchableOpacity>
          </View>

        </View>

      </ScrollView>
    </ImageBackground>
  );
};




export default PriceSuggestionScreen

const styles = StyleSheet.create({})