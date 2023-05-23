import { SafeAreaView, Text, View } from "react-native";
import tailwind from "tailwind-rn";

export default function App() {
  return (
    <SafeAreaView style={tailwind("flex-1 items-center justify-center")}>
      <View style={tailwind("bg-blue-500 px-5 py-3 rounded-full")}>
        <Text style={tailwind("text-white font-semibold text-lg")}>
          Hello Tailwind 👋
        </Text>
      </View>
      <View style={tailwind("mt-5 px-5 py-3 justify-center items-center")}>
        <Text style={tailwind("text-black font-semibold text-lg")}>
          Daily find 😎 Kudos to Elvis
        </Text>
        <Text style={tailwind("text-blue-900 items-center text-center font-semibold text-lg")}>
          I now get to build a React Native App with Tailwind! 🚀
        </Text>
      </View>
    </SafeAreaView>
  );
}
