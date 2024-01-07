import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from "expo-file-system";
const api = axios.create({
  baseURL: 'https://auction.globaldevsolution.com/api', // Update with your server address
});
// Function to save the authentication token
const saveToken = async (token) => {
    try {
      await AsyncStorage.setItem('authToken', token);
    } catch (error) {
      console.error('Error saving token:', error);
    }
  };

  const saveUser = async (user) => {
    try {
      await AsyncStorage.setItem('authUser', JSON.stringify(user));
    } catch (error) {
      console.error('Error saving token:', error);
    }
  };
  
  // Function to retrieve the authentication token
  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      return token;
    } catch (error) {
      console.error('Error getting token:', error);
      return null;
    }
  };

  const convertImageToBase64 = async (selectedImage,index) => {
    const canUpload = await checkFileSize(selectedImage.uri);
    if (!canUpload) {
      alert("Cannot upload files larger than 2MB");
      setSelectedImage(undefined);
      return;
    }
    const uri =
      Platform.OS === "android"
        ? selectedImage.uri
        : selectedImage.uri.replace("file://", "");
    const filename = selectedImage.uri.split("/").pop();
    const match = /\.(\w+)$/.exec(filename);
    const ext = match?.[1];
    const type = match ? `image/${match[1]}` : `image`;
    return image = {
      uri,
      name: `image${index}.${ext}`,
      type,
    }
  };

  const checkFileSize = async (
    fileURI,
    maxSize = 2
  )=> {
    const fileInfo = await FileSystem.getInfoAsync(fileURI);
    if (!fileInfo.size) return false;
    const sizeInMb = fileInfo.size / 1024 / 1024;
    return sizeInMb < maxSize;
  };

  export const registerUser = async (user, navigation) => {
    try {
      const response = await api.post('/register', {user});
      if(response.data.success){
        const { token } = response.data;
        const { user } = response.data;
        await saveToken(token); // Save the token after registration
        await saveUser(user); // Save the token after registration
        alert("User Created Successfully");
        navigation.replace("Home");
      }else{
         alert(response.data.message)
      }
    
    } catch (error) {
      throw error;
    }
  };
  
  export const login = async (email, password, navigation, device_token) => {
    try {
      const response = await api.post('/login', {
        'email': email,
        'password': password,
        'device_token': '',
      });
     
      if(response.data.success){
        const { token, user } = response.data;
        await saveToken(token); // Save the token after registration
        await saveUser(user); // Save the token after registration
        if(user.type=='Emplyee'){
          navigation.replace("EmployeeDashboard");
        }
        navigation.replace("Home");
      }else{
        alert(response.data.message)
     }
     
    } catch (error) {
      throw error;
    }
  };
  
  export const logoutUser = async (navigation) => {
    try {
      const token = await getToken();
      if (token) {
    
        await AsyncStorage.removeItem('authToken'); // Remove the token after logout
        await AsyncStorage.removeItem('authUser'); // Remove the token after logout
        navigation.replace("Login");
      } else {
        return { message: 'User not logged in' };
      }
    } catch (error) {
      throw error;
    }
  };
  
  export const getDevices = async () => {
    try {
      const token = await getToken();
      const response = await api.get('/devices',{
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if(response.data.success){
        return response.data.devices
        
      }else{
        alert(response.data.message);
      }
    } catch (error) {
      throw error;
    }
  };
  
  export const getMyDevices = async () => {
    try {
      const token = await getToken();
      const response = await api.get('/get-my-devices',{
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if(response.data.success){
        return response.data.devices
        
      }else{
        alert(response.data.message);
      }
    } catch (error) {
      throw error;
    }
  };
  export const fetchDevice = async (id) => {
    try {
      const token = await getToken();
      const response = await api.get('device/show/'+id,{
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if(response.data.success){
        return response.data.device
        
      }else{
        alert(response.data.message);
      }
    } catch (error) {
      throw error;
    }
  };
  
  export const AddDevice = async (requestData, Images, navigation) => {
    try {
      const formData = new FormData();
      for (const key in requestData) {
        if (requestData.hasOwnProperty(key)) {
          // Check if the property is an array or a nested object
          if (Array.isArray(requestData[key])) {
            // Handle arrays by appending each element to the FormData
            requestData[key].forEach((item, index) => {
              for (const itemKey in item) {
                if (item.hasOwnProperty(itemKey)) {
                  formData.append(`${key}[${index}][${itemKey}]`, item[itemKey]);
                }
              }
            });
          } else if (typeof requestData[key] === 'object' && requestData[key] !== null) {
            // Handle nested objects similarly
            for (const subKey in requestData[key]) {
              if (requestData[key].hasOwnProperty(subKey)) {
                formData.append(`${key}[${subKey}]`, requestData[key][subKey]);
              }
            }
          } else {
            // Handle simple key-value pairs
            formData.append(key, requestData[key]);
          }
        }
      }
      const base64Images = await Promise.all(
        Images.map(async (image, index) => {
          const imageData = await convertImageToBase64(image, index);
          formData.append('image[]',imageData)
        })
      );
    
      console.log(formData)
      const token = await getToken();
      const response = await api.post('/device/create', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
           "Content-Type": "multipart/form-data",
        },
      });
      console.log('response.data')
      console.log(response.data)
      if(response.data.success){
        alert("Your Device is Added Successfully.")
        navigation.replace("Devices");
      }else{
        alert(response.data.message);
      }
    } catch (error) {
      throw error;
    }
  };

  export const updateDevice = async (id,device, navigation) => {
    try {
      const token = await getToken();
      const response = await api.post('/device/update/'+id, {device}, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if(response.data.success){
        alert("Your Device is Added Successfully.");
        navigation.replace("Devices");
      }else{
        alert(response.data.message);
      }
    } catch (error) {
      throw error;
    }
  };
  export const removeDevice = async (id, navigation) => {
    try {
      const token = await getToken();
      const response = await api.get(`/device/delete/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if(response.data.success){
        alert("Your Device is removed Successfully.");
        navigation.replace("Devices");
      }else{
        alert(response.data.message);
      }
    } catch (error) {
      throw error;
    }
  };
export const createNewBid = async (data) => {
  try {
    const token = await getToken();
    const response = await api.post('/device/create-new-bid',  data, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if(response.data.success){
      alert("Your bid placed successfully.");
      return response.data;
    }else{
      alert(response.data.message);
    }
  } catch (error) {
    throw error;
  }
};
export const acceptBid = async (status, id, navigate) => {
  try {
    const token = await getToken();
    const response = await api.post('/accept-bid',  {status:status, bid_id:id}, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    if(response.data.success){
      navigation.replace("Devices");
    }else{
      alert(response.data.message);
    }
  } catch (error) {
    throw error;
  }
};

export const createCustomer = async (name, email) => {
  try {
    const response = await api.post('/create-customer', { name, email });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCustomer = async (customerId) => {
  try {
    const response = await api.get(`/get-customer/${customerId}` ,{
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSavedPaymentMethods = async (customerId) => {
  try {
    const response = await api.get(`/get-saved-payment-methods/${customerId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPaymentMethods = async (customerId) => {
  try {
    const token = await getToken();
    const response = await api.get(`/get-payment-methods`,{
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    if(response.data.success){
      return response.data.methods
    }else{
      alert(response.data.message);
    }
  } catch (error) {
    throw error;
  }
};

export const setDefaultPaymentMethod = async (method_id) => {
  try {
    const token = await getToken();
    const response = await api.post(`/set-default-method`,  {method_id:method_id},{
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    if(response.data.success){
      alert(response.data.message);
      return response.data.methods
    }else{
      alert(response.data.message);
    }
  } catch (error) {
    throw error;
  }
};

export const deletePaymentMethod = async (method_id) => {
  try {
    const token = await getToken();
    const response = await api.post(`/delete-method`,  {method_id:method_id},{
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    if(response.data.success){
      alert(response.data.message);
      return response.data.methods
    }else{
      alert(response.data.message);
    }
  } catch (error) {
    throw error;
  }
};


export const savePaymentMethod = async (paymentMethodId, params, navigation, isSelected) => {
  try {
    const token = await getToken();
    const response = await api.post('/save-payment-method',  {paymentMethodId:paymentMethodId, isDefault:isSelected}, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    if(response.data.success){
      await AsyncStorage.removeItem('authUser'); // Remove the token after logout
      await saveUser(response.data.user)
      alert("Payment method saved");
      if(params.id !=undefined){
        navigation.replace("Bidding", {
          id: params.id,
          device: params.device,
        });
      }else{
        navigation.pop(1);
      }
      
    }else{
      alert(response.data.message);
    }
  } catch (error) {
    throw error;
  }
};

export const futureUseIntent = async () => {
  try {
    const token = await getToken();
    const response = await api.get('/future-use-intent', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    if(response.data.success){
      return response.data.clientSecret
    }else{
      alert(response.data.message);
    }
  } catch (error) {
    throw error;
  }
};

export const createPaymentIntent = async (amount) => {
  try {
    const response = await api.post('/create-payment-intent', { amount });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const forgetPassword = async (email, navigation) => {
  try {
    const response = await api.post('/forget-password', { email:email });
    if(response.data.success){
      navigation.navigate('ResetPassword')
    }
  } catch (error) {
    throw error;
  }
};

export const resetPassword = async (data, navigation) => {
  try {
    const response = await api.post('/reset-password', data);
    if(response.data.success){
      navigation.navigate('Login');
    }
  } catch (error) {
    throw error;
  }
};


//////////////////Employeee Function///////////////

export const getOngoinAuctionDevices = async () => {
  try {
    const token = await getToken();
    const response = await api.get('/get-ongoing-auction-devices',{
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if(response.data.success){
      return response.data.devices
      
    }else{
      alert(response.data.message);
    }
  } catch (error) {
    throw error;
  }
}

export const getNewDevices = async () => {
  try {
    const token = await getToken();
    const response = await api.get('/get-pending-devices',{
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if(response.data.success){
      return response.data.devices
      
    }else{
      alert(response.data.message);
    }
  } catch (error) {
    throw error;
  }
}
export const updateDeviceStatusByEmployee = async (data, navigation) => {
  try {
    
    const token = await getToken();
    console.log(token)
    const response = await api.post('/update-device-status-by-employee',  data, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if(response.data.success){
      alert(response.data.message);
      navigation.navigate("EmployeeDashboard");
    }else{
      alert(response.data.message);
    }
  } catch (error) {
    throw error;
  }
}

export const getBidDevices = async () => {
  try {
    const token = await getToken();
    const response = await api.get('/get-employee-bid-devices',{
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if(response.data.success){
      return response.data.devices
      
    }else{
      alert(response.data.message);
    }
  } catch (error) {
    throw error;
  }
}

export const getActivePendingDevices = async () => {
  try {
    const token = await getToken();
    const response = await api.get('/get-active-pending-devices',{
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if(response.data.success){
      return response.data.devices
      
    }else{
      alert(response.data.message);
    }
  } catch (error) {
    throw error;
  }
}
export const getSoldDevices = async () => {
  try {
    const token = await getToken();
    const response = await api.get('/get-sold-devices',{
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if(response.data.success){
      return response.data.devices
      
    }else{
      alert(response.data.message);
    }
  } catch (error) {
    throw error;
  }
}

export const updateEmployee = async (selectedImage, requestData, navigation) => {
  try {
    const formData = new FormData();
      for (const key in requestData) {
        if (requestData.hasOwnProperty(key)) {
          // Check if the property is an array or a nested object
          if (Array.isArray(requestData[key])) {
            // Handle arrays by appending each element to the FormData
            requestData[key].forEach((item, index) => {
              for (const itemKey in item) {
                if (item.hasOwnProperty(itemKey)) {
                  formData.append(`${key}[${index}][${itemKey}]`, item[itemKey]);
                }
              }
            });
          } else if (typeof requestData[key] === 'object' && requestData[key] !== null) {
            // Handle nested objects similarly
            for (const subKey in requestData[key]) {
              if (requestData[key].hasOwnProperty(subKey)) {
                formData.append(`${key}[${subKey}]`, requestData[key][subKey]);
              }
            }
          } else {
            // Handle simple key-value pairs
            formData.append(key, requestData[key]);
          }
        }
      }
      const base64Images = await Promise.all(
        async () => {
          const imageData = await convertImageToBase64(selectedImage, 0);
          formData.append('image',imageData)
        }
      );
    
      console.log(formData)
      const token = await getToken();
      const response = await api.post('/device/create', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
           "Content-Type": "multipart/form-data",
        },
      });
      console.log('response.data')
      console.log(response.data)
      if(response.data.success){
        alert("Your Device is Added Successfully.")
        //navigation.replace("Devices");
      }else{
        //alert(response.data.message);
      }
  } catch (error) {
    throw error;
  }
}


/////////Complaints function //////////////////

export const getUserComplaints = async () => {
  try {
    const token = await getToken();
    const response = await api.get('/get-user-complaints',{
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if(response.data.success){
      return response.data.complaints
      
    }else{
      alert(response.data.message);
    }
  } catch (error) {
    throw error;
  }
}

export const createComplaint = async () => {
  try {
    const token = await getToken();
    const response = await api.get('/create-complaint',{
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if(response.data.success){
      return response.data.complaints
      
    }else{
      alert(response.data.message);
    }
  } catch (error) {
    throw error;
  }
}