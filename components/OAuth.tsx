import { Image, Text, View } from "react-native"
import CustomButton from "./CustomButton"
import { icons } from "@/constants"

const OAuth = () => {

    const handleGoogleSignIn = async () => {
        
    }

  return (
    <View>
        <View className="flex flex-row gap-x-3 justify-center items-center mt-4">
            <View className="flex-1 h-[1px] rounded-full bg-general-100" />
            <Text>Or</Text>
            <View className="flex-1 h-[1px] rounded-full bg-general-100" />
        </View>
        <CustomButton 
            title="Log In with Google"
            className="mt-4 shadow-none"
            IconLeft={() => (
                <Image 
                    source={icons.google}
                    resizeMode="contain"
                    className="w-5 h-5 mx-2"
                />
            )}
            bgVariant="outline"
            textVariant="primary"
            onPress={handleGoogleSignIn}
        />
    </View>
  )
}

export default OAuth