import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import s from './styles/App.styles';

import Splash from './screens/Splash';
import Login from './screens/Login';
import Otp from './screens/Otp';
import Home from './screens/Home';
import SelectPassenger from './screens/SelectPassenger';
import Family from './screens/Family';
import AddFamily from './screens/AddFamily';
import Location from './screens/Location';
import SelectCab from './screens/SelectCab';
import Confirm from './screens/Confirm';
import Tracking from './screens/Tracking';
import Complete from './screens/Complete';
import Rides from './screens/Rides';
import RideDetails from './screens/RideDetails';
import Payment from './screens/Payment';
import Notifications from './screens/Notifications';
import Profile from './screens/Profile';
import Saved from './screens/Saved';
import Help from './screens/Help';

const screens = { splash: Splash, login: Login, otp: Otp, home: Home, selectPassenger: SelectPassenger, family: Family, addFamily: AddFamily, location: Location, selectCab: SelectCab, confirm: Confirm, tracking: Tracking, complete: Complete, rides: Rides, rideDetails: RideDetails, payment: Payment, notifications: Notifications, profile: Profile, saved: Saved, help: Help };
const titles = { selectPassenger: 'Select passenger', family: 'Family members', addFamily: 'Add member', location: 'Your journey', selectCab: 'Choose a cab', confirm: 'Confirm booking', tracking: 'Ride tracking', complete: 'Trip completed', rides: 'My rides', rideDetails: 'Ride details', payment: 'Payment', notifications: 'Alerts', profile: 'Profile', saved: 'Saved locations', help: 'Help' };
const tabs = [['home', '🏠', 'Home'], ['rides', '🚕', 'Rides'], ['notifications', '🔔', 'Alerts'], ['profile', '👤', 'Profile']];

function Main() {
  const [screen, setScreen] = useState('splash');
  const [stack, setStack] = useState([]);
  const [toastMsg, setToastMsg] = useState('');
  const [app, setApp] = useState({
    bookingFor: 'self', person: null, pickup: 'T. Nagar, Chennai', drop: 'Tidel Park, Chennai',
    car: { name: 'Mini', price: 220 }, viewRide: null,
    family: [{ name: 'Raman Kumar', relation: 'Father' }, { name: 'Lakshmi Kumar', relation: 'Mother' }],
    rides: [
      { id: 'MM-2048', passenger: 'Arun Kumar', family: false, status: 'Upcoming', pickup: 'Home – T. Nagar', drop: 'Tidel Park', car: 'Sedan', fare: 350, date: 'Tomorrow · 9:00 AM' },
      { id: 'MM-2041', passenger: 'Raman Kumar', family: true, status: 'Completed', pickup: 'T. Nagar', drop: 'Apollo Hospital', car: 'Mini', fare: 220, date: '10 Nov · 10:30 AM' },
    ],
  });

  const set = (patch) => setApp((a) => ({ ...a, ...patch }));
  const go = (id) => { setStack([...stack, screen]); setScreen(id); };
  const back = () => { setScreen(stack.length ? stack[stack.length - 1] : 'home'); setStack(stack.slice(0, -1)); };
  const reset = (id) => { setStack([]); setScreen(id); };
  const toast = (m) => { setToastMsg(m); setTimeout(() => setToastMsg(''), 2200); };

  const Screen = screens[screen];
  const hideBars = ['splash', 'login', 'otp'].includes(screen);
  const props = { go, back, reset, toast, app, set };

  if (screen === 'splash') return <SafeAreaView style={{ flex: 1, backgroundColor: '#1f4270' }}><Screen {...props} /></SafeAreaView>;

  return (
    <SafeAreaView style={s.safe}>
      <View style={s.top}>
        <TouchableOpacity onPress={back}><Text style={s.topBtn}>{['home', 'login', 'otp'].includes(screen) ? ' ' : '‹'}</Text></TouchableOpacity>
        <Text style={s.title}>{titles[screen] || 'movemate'}</Text>
        <TouchableOpacity onPress={() => go('notifications')}><Text style={s.topBtn}>♧</Text></TouchableOpacity>
      </View>
      <View style={s.body}>
        <ScrollView key={screen} keyboardShouldPersistTaps="handled"><Screen {...props} /></ScrollView>
        {toastMsg ? <View style={s.toast}><Text style={s.toastText}>{toastMsg}</Text></View> : null}
      </View>
      {!hideBars && (
        <View style={s.tabs}>
          {tabs.map(([id, icon, label]) => (
            <TouchableOpacity key={id} style={s.tabItem} onPress={() => reset(id)}>
              {/* <Text style={[s.tabIcon, screen !== id && s.tabIconOff]}>{icon}</Text> */}
              <Text style={[s.tab, screen === id && s.tabOn]}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <Main />
    </SafeAreaProvider>
  );
}
