import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { s } from "./styles"
import { Feather } from "@expo/vector-icons"
import { colors } from "@/styles/colors"
import Page from "@/components/page"

type Props = {
  data: {
    id: string,
    title: string
  }[]
}

export default function PageList({ data }: Props){
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.title}>Private</Text>
        <TouchableOpacity>
          <Feather name="more-horizontal" size={20} color={colors.gray[300]}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="plus" size={20} color={colors.gray[300]}/>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Page title={item.title} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={s.list}
        ItemSeparatorComponent={() => <View style={s.separator} />}
        scrollEnabled={false}
      />
    </View>
  )
}