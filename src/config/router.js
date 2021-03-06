import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import Feed from '../screens/feed'
import Settings from '../screens/settings'
import Solution from '../screens/solution'

import UserDetail from '../screens/user-detail'
import ProblemPage from '../screens/problem'

import Me from '../screens/me'
import Home from '../screens/home'

import SolutionForm from '../screens/solution-form'
import ProblemForm from '../screens/problem-form'

export const HomeStack = StackNavigator({
  Home : {
    screen: Home, 
    navigationOptions: {
      title: 'Home',
    },
  },
  Problem: {
    screen: ProblemPage,
    navigationOptions: {
      title: 'Problem',
    },
  },
  Solution: {
    screen: Solution,
    navigationOptions: {
      title: 'Solution',
    },
  },
})

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
    },
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name,
    }),
  },
});

export const Tabs = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => <Icon name="home" size={35} color={tintColor} />,
    },
  },
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
})

export const SolutionFormStack = StackNavigator({
  SolutionForm: {
    screen: SolutionForm,
    navigationOptions: {
      title: 'Solution',
    },
  },
})

export const ProblemFormStack = StackNavigator({
  ProblemForm: {
    screen: ProblemForm,
    navigationOptions: {
      title: 'Problem',
    },
  },
})

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: SettingsStack,
  },
  SolutionForm: {
    screen: SolutionFormStack,
  },
  ProblemForm: {
    screen: ProblemFormStack,
  }
}, {
  mode: 'modal',
  headerMode: 'none',
})
