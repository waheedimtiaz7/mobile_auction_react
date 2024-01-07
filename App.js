import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, TextInput, View } from "react-native";
import * as ExpoDevice from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

import PaymentMethodScreen from "./resources/screens/PaymentMethodScreen";
import HomeScreen from "./resources/screens/HomeScreen";
import LoginScreen from "./resources/screens/LoginScreen";
import ForgetPassword from "./resources/screens/ForgetPassword";
import ResetPassword from "./resources/screens/ResetPassword";
import RegistrationScreen from "./resources/screens/RegistrationScreen";
import StartScreen from "./resources/screens/StartScreen";
import AdminDashboard from "./resources/screens/Admin/AdminDashboard";
import AdminProfile from "./resources/screens/Admin/AdminProfile";
import AuctionManage from "./resources/screens/Admin/AuctionManage";
import UserScreen from "./resources/screens/Admin/UserScreen";
import MobileScreen from "./resources/screens/Admin/MobileScreen";
import SingleUser from "./resources/screens/Admin/SingleUser";
import EmployeeHome from "./resources/screens/Employee/EmployeeHome";
import EmployeeHomeDesign from "./resources/components/EmployeeHomeDesign";
import LogoScreen from "./resources/screens/LogoScreen";
import UserHome from "./resources/components/UserHome";
import SingleDevice from "./resources/screens/SingleDevice";
import SellDeviceForm from "./resources/screens/SellDeviceForm";
import AuctionScreen from "./resources/screens/AuctionScreen";
import Device from "./resources/screens/Device";
import AdminUsers from "./resources/components/AdminUsers";
import EmployeeDevices from "./resources/components/Employee/EmployeeDevices";
import PriceSuggestionScreen from "./resources/screens/Employee/PriceSuggestionScreen";
import Auction from "./resources/screens/Auction";
import AllBidding from "./resources/components/AllBidding";
import SingleBidder from "./resources/components/SingleBidder";

import SingleBid from "./resources/components/SingleBid";
import OwnerDet from "./resources/components/OwnerDet";
import Appointment from "./resources/screens/Employee/Appointment";

////////////////User Account Screens//////////////
import Account from "./resources/screens/Account";
import Complaints from "./resources/screens/UserComplaintsList";
import PaymentMethods from "./resources/screens/UserPaymentMethodsList";
import Profile from "./resources/screens/profile";
import NewComplaint from "./resources/screens/NewComplaint";

async function registerForPushNotificationsAsync() {

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (ExpoDevice.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
  
  } else {
    alert('Must use physical device for Push Notifications');
  }
}


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Logo"
          options={{
            headerStyle: {
              backgroundColor: "#00BFFF",
            },
            title: "Welcome to Mobile Auction",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontStyle: "italic",
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
            },
          }}
          component={LogoScreen}
        />

        <Stack.Screen
          name="Start"
          options={{
            headerStyle: {
              backgroundColor: "white",
            },
            title: "",
            headerTitleAlign: "center",
          }}
          component={StartScreen}
        />

        <Stack.Screen
          name="Login"
          options={{
            headerStyle: {
              backgroundColor: "white",
            },
            title: "Welcome Back !",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontStyle: "italic",
              fontSize: 20,
              fontWeight: "bold",
              color: "#00BFFF",
            },
          }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="ForgetPassword"
          options={{
            headerStyle: {
              backgroundColor: "white",
            },
            title: "Forget Password",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontStyle: "italic",
              fontSize: 20,
              fontWeight: "bold",
              color: "#00BFFF",
            },
          }}
          component={ForgetPassword}
        />
        <Stack.Screen
          name="ResetPassword"
          options={{
            headerStyle: {
              backgroundColor: "white",
            },
            title: "Reset Password",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontStyle: "italic",
              fontSize: 20,
              fontWeight: "bold",
              color: "#00BFFF",
            },
          }}
          component={ResetPassword}
        />
        <Stack.Screen
          name="Home"
          options={{
            headerStyle: {
              backgroundColor: "#4eaff5",
            },
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: "bold",
              color: "white",
            },
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Device Detail"
          options={{
            headerStyle: {
              backgroundColor: "white",
            },
            title: "Device Detail",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontStyle: "italic",
              fontSize: 20,
              fontWeight: "bold",
              color: "#00BFFF",
            },
          }}
          component={SingleDevice}
        />
        <Stack.Screen
          name="Device Form"
          options={{
            headerStyle: {
              backgroundColor: "white",
            },
            title: "Device Detail Form",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontStyle: "italic",
              fontSize: 25,
              fontWeight: "bold",
              color: "#00BFFF",
            },
          }}
          component={SellDeviceForm}
        />
        <Stack.Screen name="Bidding" component={AuctionScreen} />
        <Stack.Screen name="PaymentMethodScreen"  options={{ title:"Payment Method"}} component={PaymentMethodScreen} />
        <Stack.Screen name="AllMobiles" component={Device} />
        <Stack.Screen
          name="Register"
          options={{
            headerStyle: {
              backgroundColor: "white",
            },
            title: "",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontStyle: "italic",
              fontSize: 20,
              fontWeight: "bold",
              color: "#00BFFF",
            },
          }}
          component={RegistrationScreen}
        />

        {/* User Routes */}

        <Stack.Screen name="UserHome" component={UserHome} />
        <Stack.Screen
          name="Profile"
          options={{
            title: "Edit Profile",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#00BFFF",
            },
            headerTitleStyle: {
              fontStyle: "italic",
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
            },
          }}
          component={Profile}
        />

        {/* Admin Routes */}
        <Stack.Screen
          name="Dashboard"
          options={{
            headerStyle: {
              backgroundColor: "white",
            },
            title: "My Home",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontStyle: "italic",
              fontSize: 20,
              fontWeight: "bold",
              color: "#00BFFF",
            },
          }}
          component={AdminDashboard}
        />
        <Stack.Screen name="AdminUsers" component={AdminUsers} />
        <Stack.Screen
          name="AdminProfile"
          options={{
            title: "Edit Profile",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#00BFFF",
            },
            headerTitleStyle: {
              fontStyle: "italic",
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
            },
          }}
          component={AdminProfile}
        />
        <Stack.Screen
          name="Users"
          options={{
            title: "View Users",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontStyle: "italic",
              fontSize: 20,
              fontWeight: "bold",
              color: "#00BFFF",
            },
          }}
          component={UserScreen}
        />
        <Stack.Screen
          name="SingleUser"
          options={{
            title: "Our User ",
            headerTitleAlign: "center",
          }}
          component={SingleUser}
        />
        <Stack.Screen
          name="Mobile"
          options={{
            title: "View Devices",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontStyle: "italic",
              fontSize: 20,
              fontWeight: "bold",
              color: "#00BFFF",
            },
          }}
          component={MobileScreen}
        />
        
        

        <Stack.Screen
          name="Auctionmanage"
          options={{
            headerStyle: {
              backgroundColor: "white",
            },
            title: "View Auction",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontStyle: "italic",
              fontSize: 20,
              fontWeight: "bold",
              color: "#00BFFF",
            },
          }}
          component={AuctionManage}
        />

        {/* Employee Routes */}

        <Stack.Screen
          name="EmployeeDashboard"
          options={{
            title: "Home",
            headerTitleAlign: "center",

            headerStyle: {
              backgroundColor: "#00BFFF",
            },
            headerTitleStyle: {
              fontSize: 28,
              fontWeight: "bold",
              color: "white",
              fontStyle: "italic",
            },
          }}
          component={EmployeeHome}
        />
        <Stack.Screen name="EmployeeDevices" component={EmployeeDevices} />
        <Stack.Screen name="Auction" component={Auction} />
        <Stack.Screen name="HomeDesign" component={EmployeeHomeDesign} />
        <Stack.Screen name="priceSuggest" component={PriceSuggestionScreen} />
        <Stack.Screen name="AllBidding" component={AllBidding} />
        <Stack.Screen name="SingleBidder" component={SingleBidder} />
        <Stack.Screen name="Owner" component={OwnerDet} />
        <Stack.Screen name="SingleBid" component={SingleBid} />
        <Stack.Screen name="meeting" component={Appointment} />
        {/* User Account Routes */}
        <Stack.Screen
          name="Account"
          options={{
            title: "Account",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontStyle: "italic",
              fontSize: 20,
              fontWeight: "bold",
              color: "#00BFFF",
            },
          }}
          component={Account}
        />
        <Stack.Screen
          name="PaymentMethods"
          options={{
            title: "Payment Methods",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontStyle: "italic",
              fontSize: 20,
              fontWeight: "bold",
              color: "#00BFFF",
            },
          }}
          component={PaymentMethods}
        />
        <Stack.Screen
          name="Complaints"
          options={{
            title: "Complaints",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontStyle: "italic",
              fontSize: 20,
              fontWeight: "bold",
              color: "#00BFFF",
            },
          }}
          component={Complaints}
        />
        <Stack.Screen
          name="CreateComplaint"
          options={{
            title: "New Complaint",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontStyle: "italic",
              fontSize: 20,
              fontWeight: "bold",
              color: "#00BFFF",
            },
          }}
          component={NewComplaint}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
