import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Environment,
  asset
} from "react-360";
import house from "./data/houseData";

export default class Buttons extends React.Component {
  state = {
    room: house.House.roomName,
    info: house.House.info,
    adjacentRooms: house.House.adjacentRooms
  };

  clickHandler(roomSelection) {
    this.setState({
      room: house[roomSelection].roomName,
      info: house[roomSelection].info,
      adjacentRooms: house[roomSelection].adjacentRooms
    });

    Environment.setBackgroundImage(asset(`./360_${house[roomSelection].img}`));
  }

  createRoomButtons(adjacentRooms) {
    let rooms = adjacentRooms;
    let buttons = [];

    rooms.map(room =>
      buttons.push(
        <VrButton
          key={`${room} - button`}
          onClick={() => this.clickHandler(room)}
        >
          <Text style={{ backgroundColor: "green" }}>{room}</Text>
        </VrButton>
      )
    );

    return buttons;
  }

  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>Room Selection</Text>
          <Text>{this.state.room}</Text>
          {this.createRoomButtons(this.state.adjacentRooms)}
        </View>

        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>Room Info</Text>
          <Text>{this.state.info}</Text>
        </View>
      </View>
    );
  }
}


export class InfoPanel extends React.Component {
  state = {
    room: house.House.roomName,
    info: house.House.info,
    adjacentRooms: house.House.adjacentRooms
  };

  clickHandler(roomSelection) {
    this.setState({
      room: house[roomSelection].roomName,
      info: house[roomSelection].info,
      adjacentRooms: house[roomSelection].adjacentRooms
    });

    Environment.setBackgroundImage(asset(`./360_${house[roomSelection].img}`));
  }

  createRoomButtons(adjacentRooms) {
    let rooms = adjacentRooms;
    let buttons = [];

    rooms.map(room =>
      buttons.push(
        <VrButton
          key={`${room} - button`}
          onClick={() => this.clickHandler(room)}
        >
          <Text style={{ backgroundColor: "green" }}>{room}</Text>
        </VrButton>
      )
    );

    return buttons;
  }

  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>Room Selection ygwuyegwy</Text>
          <Text>{this.state.room}</Text>
          {this.createRoomButtons(this.state.adjacentRooms)}
        </View>

        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>Room Info</Text>
          <Text>{this.state.info}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2
  },
  greeting: {
    fontSize: 30
  }
});

AppRegistry.registerComponent('Buttons', () => Buttons);
AppRegistry.registerComponent('InfoPanel', () => InfoPanel);
