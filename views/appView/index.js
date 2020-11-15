import React from "react";
import { View, Text } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import Profile from "../mainViews/profile";
import styled from "styled-components/native";
import Schedule from "../mainViews/schedule";
import Home from "../mainViews/home";
import Metrics from "../mainViews/metrics";
import Learn from "../mainViews/learn";

const Tab = createBottomTabNavigator();

const BottomNav = styled.View`
  background: #fff;
  align-items: center;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

const BottomNavItem = styled.TouchableHighlight`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  align-items: center;
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
              <options.tabBarIcon color={isFocused ? "#303242" : "#ccc"} />
              <Text
                style={{
                  fontWeight: "bold",
                  color: isFocused ? "#303242" : "#ccc",
                }}
              >
                {label}
              </Text>
            </>
          </BottomNavItem>
        );
      })}
    </BottomNav>
  );
}

function App({ navigation, route }) {
  return (
    <Tab.Navigator
      lazy={false}
      tabBar={(props) => <MyTabBar {...props} />}
      activeColor="#303242"
      inactiveColor="#ccc"
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="schedule"
        component={Schedule}
        options={{
          tabBarLabel: "Schedule",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="calendar-month"
              color={color}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Metrics"
        component={Metrics}
        options={{
          tabBarLabel: "Tracking",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="chart-bell-curve-cumulative"
              color={color}
              size={28}
            />
          ),
        }}
      />

      <Tab.Screen
        name="learn"
        component={Learn}
        options={{
          tabBarLabel: "Skill",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="school" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="account"
        component={Profile}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default App;
