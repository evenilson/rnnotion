import Header from "@/components/header"
import RecentList from "@/components/recent-list"
import { DATA } from "@/utils/data"
import { View, Text } from "react-native"

export default function Index(){
  return (
    <View style={{ flex: 1, paddingTop: 32 }}>
      <Header />
      <RecentList data={DATA.RECENT} />
    </View>
  )
}