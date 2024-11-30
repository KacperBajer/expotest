import { icons, images } from "@/constants"
import { formatDate } from "@/lib/utils"
import { Ride } from "@/types/type"
import { Image, Text, View } from "react-native"

type Props = {
    ride: Ride
}

const RideCard = ({ride}: Props) => {
  return (
    <View className="p-5 rounded-xl bg-white mb-3">
        <View className="flex flex-row items-center">
            <Image 
                source={images.route}
                className="w-20 h-20 rounded-xl"
                resizeMode="cover"
            />

            <View className="flex flex-col gap-3 ml-4">
                <View className="flex flex-row items-center gap-2">
                    <Image source={icons.to} className="w-7 h-7" resizeMode="contain" />
                    <Text className="text-md font-JakartaMedium">{ride.origin_address}</Text>
                </View>
                <View className="flex flex-row items-center gap-2">
                    <Image source={icons.point} className="w-7 h-7" resizeMode="contain" />
                    <Text className="text-md font-JakartaMedium">{ride.destination_address}</Text>
                </View>
            </View>
            
        </View>

        <View className="rounded-xl bg-neutral-100 mt-4 p-5 flex flex-col gap-5">
            <View className="flex flex-row w-full justify-between items-center">
                <Text className="text-gray-500 text-md font-JakartaMedium">Date & Time</Text>
                <Text className="text-md font-JakartaBold">{formatDate(ride.created_at)}</Text>
            </View>
            <View className="flex flex-row justify-between items-center">
                <Text className="text-gray-500 text-md font-JakartaMedium">Driver</Text>
                <Text className="text-md font-JakartaBold">{ride.driver.first_name} {ride.driver.last_name}</Text>
            </View>
            <View className="flex flex-row justify-between items-center">
                <Text className="text-gray-500 text-md font-JakartaMedium">Car seats</Text>
                <Text className="text-md font-JakartaBold">{ride.driver.car_seats}</Text>
            </View>
            <View className="flex flex-row justify-between items-center">
                <Text className="text-gray-500 text-md font-JakartaMedium">Payment Status</Text>
                <Text className={`text-md font-JakartaBold capitalize ${ride.payment_status === 'paid' ? 'text-green-500' : 'text-red-500'}`}>{ride.payment_status}</Text>
            </View>
        </View>

    </View>
  )
}

export default RideCard