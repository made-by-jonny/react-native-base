import React, { useEffect } from "react";
import { CommonActions } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ApplianceStack from "../myAppliances";
import AddStack from "../addAppliances";
import Profile from "../profile";

import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

const Tab = createBottomTabNavigator();

const BottomNav = styled.View`
  background: #333366;
  align-items: center;
  height: 100px;
  padding: 20px 20px;
  display: flex;
  flex-direction: row;
`;

const BottomNavItem = styled.TouchableHighlight`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 140px;
`;

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <BottomNav style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <BottomNavItem
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <>
              <options.tabBarIcon color={isFocused ? "#99CCCC" : "#ccc"} />
              <Text style={{ color: isFocused ? "#99CCCC" : "#ccc" }}>
                {label}
              </Text>
            </>
          </BottomNavItem>
        );
      })}
    </BottomNav>
  );
}

function App() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      barStyle={{
        backgroundColor: "#333366",
        overflow: "visible",
      }}
      activeColor="#fff"
      inactiveColor="rgba(255,255,255, 0.5)"
    >
      <Tab.Screen
        name="Appliances"
        component={ApplianceStack}
        options={{
          tabBarLabel: "Rooms",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={46} />
          ),
        }}
      />
      <Tab.Screen
        name="Add Appliance"
        component={AddStack}
        options={{
          tabBarLabel: "Add",
          tabBarIcon: ({ color }) => (
            <>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#99CCCC",
                  width: 76,
                  height: 76,
                  marginTop: -45,
                  marginBottom: 18,
                  borderRadius: 100,
                  zIndex: 1,
                }}
              >
                <FontAwesome5
                  name="plus"
                  color={"#333366"}
                  size={24}
                  style={{}}
                />
              </View>
              <View
                style={{
                  position: "absolute",
                  overflow: "hidden",
                  alignItems: "center",
                  width: 100,
                  height: 60,
                  top: 19,
                  marginBottom: 100,
                  zIndex: 0,
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#F4F4F4",
                    width: 90,
                    height: 105,
                    top: -50,
                    marginBottom: 20,
                    borderRadius: 100,
                    zIndex: 0,
                  }}
                />
              </View>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "My Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={46} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default App;
