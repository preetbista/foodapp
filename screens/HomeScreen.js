import { View, Text, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon, UserIcon, AdjustmentsIcon, SearchIcon, AdjustmentsHorizontalIcon } from 'react-native-heroicons/outline';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from 'react-native-screens';
const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <SafeAreaView className='bg-white pt-5'>
            <Text className=' text-red-500'>
                <View className='flex-row pb-3 items-center mx-4 space-x-2' >
                    <Image source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                        className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                    />

                    <View className='flex-1'>
                        <Text className='font-bold text-gray-400 text-xs' >
                            Deliver Now!
                        </Text>
                        <Text className='font-bold text-xl'>
                            Current Location
                            <ChevronDownIcon size={20} color="#00CCBB" />
                        </Text>
                    </View>
                    <View  >
                        <UserIcon color="#00CCBB" size={30} />
                    </View>

                </View>

            </Text>
            <AdjustmentsHorizontalIcon color="#00CCBB" />
        </SafeAreaView>
    );
};

export default HomeScreen;