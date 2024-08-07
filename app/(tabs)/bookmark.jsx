import { useState } from "react";
import { router } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Alert, ScrollView } from "react-native";

import { CustomButton, FormField } from "../../components";

const Create = () => {
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    pay: "",
  });

  const submit = async () => {
    if (
      (form.pay === "") |
      (form.title === "") 
    ) {
      return Alert.alert("Please provide all fields");
    }
    setUploading(true);

    const FormData = {
      plate_no: form.title,
      payment_mode: form.pay,
    };

    try {
      const token = await AsyncStorage.getItem('authToken');

      const response = await fetch('http://63.142.252.251/sparking/web/index.php/api/v1/ticket/exit', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(FormData)
      });

      const result = await response.json();
      if (result.success) {
        const messageData = result.message;
        const messageString = `
          ID: ${messageData.id}\n
          Parking: ${messageData.parking}\n
          Category: ${messageData.category}\n
          Vehicle: ${messageData.vehicle}\n
          Company: ${messageData.company}\n
          Price: ${messageData.price}\n
          Price Time: ${messageData.price_time}\n
          Paid: ${messageData.paid}\n
          Parking Time: ${messageData.parking_time}\n
          Exit Time: ${messageData.exit_time}\n
          Total Time: ${messageData.total_time}\n
          Currency: ${messageData.currency}\n
          Created At: ${messageData.created_at}\n
          Cashier: ${messageData.cashier}\n
          POS: ${messageData.pos}\n
          Contact: ${messageData.contact}\n
          NIF: ${messageData.nif}
        `;

        Alert.alert("Success", `Car Exit successfully\n\n${messageString}`);
        // router.replace("/home");
      } else {
        Alert.alert("Error", result.message);
      }
    } catch (error) {
      console.error("Error details:", error.message);
      Alert.alert("Error", error.message);
    } finally {
      setForm({ title: "" });
      setUploading(false);
    }
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="px-4 my-6 mt-7">
        <Text className="text-2xl text-white mb-7 font-psemibold">Vehicle	EXIT</Text>

      

{/* <SearchInput  /> */}
<FormField
          title="Plate_no"
          value={form.title}
          placeholder="Plate_no Ex: RAC436J"
          handleChangeText={(e) => setForm({ ...form, title: e })}
          otherStyles="mt-10"
        />
         <FormField
          title="Payment_mode"
          value={form.pay}
          placeholder="Ex: Cash"
          handleChangeText={(e) => setForm({ ...form, pay: e })}
          otherStyles="mt-10"
        />




        <CustomButton
          title="EXIT"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={uploading}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
