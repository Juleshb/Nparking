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
      from: form.title,
      to: form.pay,
    };

    try {
      const token = await AsyncStorage.getItem('authToken');

      const response = await fetch('http://63.142.252.251/sparking/web/index.php/api/v1/ticket/cashier-report', {
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
          TITLE: ${messageData.items}\n
          TITLE: ${messageData.title}\n
          TOTAL: ${messageData.total}
          
        `;

        Alert.alert("Success", `${messageString}`);
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
        <Text className="text-2xl text-white mb-7 font-psemibold">Report</Text>

      

{/* <SearchInput  /> */}
<FormField
          title="From"
          value={form.title}
          placeholder="yyy-m-d"
          handleChangeText={(e) => setForm({ ...form, title: e })}
          otherStyles="mt-10"
        />
         <FormField
          title="To"
          value={form.pay}
          placeholder="yyy-m-d"
          handleChangeText={(e) => setForm({ ...form, pay: e })}
          otherStyles="mt-10"
        />




        <CustomButton
          title="Geneerate"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={uploading}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
