import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = {
    TextInput_4: "",
    TextInput_5: "",
    Switch_6: true,
    CheckBox_7: true,
    CheckBox_8: true
  }

  render = () => (
    <View>
      <Text>Sample text content</Text>
      <Button
        title="Press me!"
        onPress={() => this.props.navigation.navigate("BlankScreen114043")}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_4}
        onChangeText={nextValue => this.setState({ TextInput_4: nextValue })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        multiline={true}
        style={styles.TextInput_5}
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        value={this.state.Switch_6}
        onValueChange={nextChecked => this.setState({ Switch_6: nextChecked })}
      />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={this.state.CheckBox_7}
        onPress={nextChecked => this.setState({ CheckBox_7: nextChecked })}
      />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_8}
        onPress={nextChecked => this.setState({ CheckBox_8: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 16 },
  View_1: {},
  Text_2: {},
  Button_3: {},
  TextInput_4: {},
  TextInput_5: {},
  Switch_6: {},
  CheckBox_7: {},
  CheckBox_8: {},
  View_1: {},
  Text_2: {},
  Button_3: {},
  TextInput_4: {},
  TextInput_5: { height: 100 },
  Switch_6: {},
  CheckBox_7: {},
  CheckBox_8: {},
  View_1: {},
  Text_2: {},
  Button_3: {},
  TextInput_4: {},
  TextInput_5: { height: 100 },
  Switch_6: {},
  CheckBox_7: {},
  CheckBox_8: {}
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)
