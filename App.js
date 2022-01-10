import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CategoryIcons from './src/assets/Icons/category.svg';
import ProfileIcons from './src/assets/Icons/profile.svg';
import ExploreIcons from './src/assets/Icons/explore.svg';
import ScheduleIcons from './src/assets/Icons/schedule.svg';
import TournamentIcons from './src/assets/Icons/tournament.svg';
import Splash from './src/page/Splash';
import Login from './src/page/Login';
import Category from './src/page/Category';
import Register from './src/page/Register';
import LoginButton from './src/components/LoginButton';
import Profile from './src/page/Profile';
import Explore from './src/page/Explore';
import Schedule from './src/page/Schedule';
import Tournament from './src/page/Tournament';
import Profileupdate from './src/page/Profileupdate';
import Profilepassword from './src/page/Profilepassword';
import Categoryvalorant from './src/page/Categoryvalorant';
import Categorydetails from './src/page/Categorydetails';
import Tournamentdetails from './src/page/Tournamentdetails';
import Detailsmatch from './src/page/Detailsmatch';
import Exploredetails from './src/page/Exploredetails';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomNav() {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle: {backgroundColor: '#231432'}}}>
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: tabState => {
            return (
              <View
                style={
                  tabState.focused
                    ? {
                        backgroundColor: '#fff',
                        flex: 1,
                        paddingHorizontal: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 8,
                      }
                    : {backgroundColor: '#231432'}
                }>
                <ExploreIcons
                  width={30}
                  height={30}
                  fill={tabState.focused ? '#333333' : '#ffffff'}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: tabState => {
            return (
              <View
                style={
                  tabState.focused
                    ? {
                        backgroundColor: '#fff',
                        flex: 1,
                        paddingHorizontal: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 8,
                      }
                    : {backgroundColor: '#231432'}
                }>
                <ScheduleIcons
                  width={30}
                  height={30}
                  fill={tabState.focused ? '#333333' : '#ffffff'}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: tabState => {
            return (
              <View
                style={
                  tabState.focused
                    ? {
                        backgroundColor: '#fff',
                        flex: 1,
                        paddingHorizontal: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 8,
                      }
                    : {backgroundColor: '#231432'}
                }>
                <CategoryIcons
                  width={30}
                  height={30}
                  fill={tabState.focused ? '#333333' : '#ffffff'}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Tournament"
        component={Tournament}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: tabState => {
            return (
              <View
                style={
                  tabState.focused
                    ? {
                        backgroundColor: '#fff',
                        flex: 1,
                        paddingHorizontal: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 8,
                      }
                    : {backgroundColor: '#231432'}
                }>
                <TournamentIcons
                  width={30}
                  height={30}
                  fill={tabState.focused ? '#333333' : '#ffffff'}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: tabState => {
            return (
              <View
                style={
                  tabState.focused
                    ? {
                        backgroundColor: '#fff',
                        flex: 1,
                        paddingHorizontal: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 8,
                      }
                    : {backgroundColor: '#231432'}
                }>
                <ProfileIcons
                  width={30}
                  height={30}
                  fill={tabState.focused ? '#333333' : '#ffffff'}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* urutan no 1 adalah tampilan utama */}
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#ffffff',
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: true,
            headerRight: () => {
              return <LoginButton />;
            },
            headerStyle: {
              backgroundColor: '#ffffff',
            },
          }}
        />
        <Stack.Screen
          name="Profileupdate"
          component={Profileupdate}
          options={{
            headerTitle: 'Update Profile',
            headerTintColor: '#fff',
            headerShown: true,
            headerStyle: {
              backgroundColor: '#AD62FB',
            },
          }}
        />
        <Stack.Screen
          name="Profilepassword"
          component={Profilepassword}
          options={{
            headerTitle: 'Change Password',
            headerTintColor: '#fff',
            headerShown: true,
            headerStyle: {
              backgroundColor: '#AD62FB',
            },
          }}
        />
        <Stack.Screen
          name="Categoryvalorant"
          component={Categoryvalorant}
          options={{
            headerTitle: 'Teams List',
            headerTintColor: '#fff',
            headerShown: true,
            headerStyle: {
              backgroundColor: '#AD62FB',
            },
          }}
        />
        <Stack.Screen
          name="Categorydetails"
          component={Categorydetails}
          options={{
            headerTitle: 'Teams Details',
            headerTintColor: '#fff',
            headerShown: true,
            headerStyle: {
              backgroundColor: '#AD62FB',
            },
          }}
        />
        <Stack.Screen
          name="Tournamentdetails"
          component={Tournamentdetails}
          options={{
            headerTitle: 'Tournament Details',
            headerTintColor: '#fff',
            headerShown: true,
            headerStyle: {
              backgroundColor: '#AD62FB',
            },
          }}
        />
        <Stack.Screen
          name="Detailsmatch"
          component={Detailsmatch}
          options={{
            headerTitle: 'Details Match',
            headerTintColor: '#fff',
            headerShown: true,
            headerStyle: {
              backgroundColor: '#AD62FB',
            },
          }}
        />
        <Stack.Screen
          name="Exploredetails"
          component={Exploredetails}
          options={{
            headerTitle: 'Read More',
            headerTintColor: '#fff',
            headerShown: true,
            headerStyle: {
              backgroundColor: '#AD62FB',
            },
          }}
        />
        <Stack.Screen
          name="Tab"
          component={BottomNav}
          options={{headerTintColor: 'white', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
