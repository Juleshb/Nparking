import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {  Image,  Text, View } from "react-native";

import { images } from "../../constants";

import { EmptyState, SearchInput } from "../../components";

const Home = () => {
 
  // one flatlist
  // with list header
  // and horizontal flatlist

  //  we cannot do that with just scrollview as there's both horizontal and vertical scroll (two flat lists, within trending)

  return (
    <SafeAreaView className="bg-primary h-full">
     
       
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                
                <Text className="text-2xl font-psemibold text-white">
                  Welcome
                </Text>
              </View>

              
            </View>

            <SearchInput />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-pregular text-gray-100 mb-3">
                Latest Cars
              </Text>

              
            </View>
          </View>
      
          <EmptyState
            title="No Cars Found"
            subtitle="No Car created yet"
          />
       
       
      
    </SafeAreaView>
  );
};

export default Home;
