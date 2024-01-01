import React from 'react';
import { View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Replace with the appropriate icon library

const Input = ({icon, placeholder, onchange, value, mode, keyboard, is_secure,is_required, style}) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', borderColor: 'gray', borderWidth: 1, borderRadius: 5, padding: 10,backgroundColor:"#fff"  }}>
      <Icon name={icon} size={20} color="gray" /> 
      <TextInput
        style={[{ flex: 1, marginLeft: 10 }, style]}
            keyboardType={keyboard}
          placeholder={placeholder}
          placeholderTextColor="black"
          value={value}
          onChangeText={(text) => onchange(text)}
          mode={mode}
          secureTextEntry={is_secure}
        // Other TextInput props...
      />
      {is_required&&<Text style={{ color:'red' }}>*</Text>} 
    </View>
  );
};

export default Input;