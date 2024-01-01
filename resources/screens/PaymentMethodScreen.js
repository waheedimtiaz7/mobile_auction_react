import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { CardField, useStripe, StripeProvider, useConfirmPayment } from '@stripe/stripe-react-native';
import { savePaymentMethod, futureUseIntent } from '../Utils/api';

const PaymentMethodScreen = ({route, navigation}) => {

    const { confirmSetupIntent, loading } = useStripe();

  const [clientSecret, setClientSecret] = useState(false);

  useEffect(() => {
    ftechSecret = async () => {
        const data = await futureUseIntent();
        setClientSecret(data);
     }
     ftechSecret();
  },[]);
  const handlePaymentConfirmation = async () => {
    try {
        const { setupIntent, error } = await confirmSetupIntent(clientSecret,{
          paymentMethodType: 'Card',
        });
  
        if (error) {
          console.log('Error confirming SetupIntent:', error.message);
        } else if (setupIntent) {
          console.log('SetupIntent confirmed:', setupIntent);
          // Save the payment method ID to your backend
          savePaymentMethod(setupIntent.paymentMethod.id, route.params.id, route.params.device, navigation);
        }
      } catch (error) {
        console.error('Error confirming SetupIntent:', error);
      }
    };



  return (
    <ImageBackground
    source={{
      uri:
        "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3865.jpg?size=626&ext=jpg",
    }}
    style={{
      height: "100%",
    }}
  >
        <StripeProvider
        publishableKey="pk_test_51O1AC3JtNj6yyfnslOR2yTFEKXpRyyHVcDWkVINLqxRCOFDJ85zuABfZAIfqMCnCoErQbtupMDFiQ2kMR39ZNwmF00RSxY47LU"
    >
            <View style={styles.container}>
            <CardField
                postalCodeEnabled={false}
                placeholder={{
                number: '4242 4242 4242 4242',
                }}
                onCardChange={(cardDetails) => {
                console.log('Card details:', cardDetails);
                // You can use cardDetails for additional logic or UI updates.
                }}
                style={styles.cardField}
            />

            <Button
                    title="Confirm Payment"
                    onPress={handlePaymentConfirmation}
                    disabled={loading}
                />
            </View>
        </StripeProvider>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent:"center",
    display:"flex",
  },
  cardField: {
    width: '100%',
    height: 50,
    marginVertical: 20,
  },
});

export default PaymentMethodScreen;
