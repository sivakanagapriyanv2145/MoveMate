# 🚕 MoveMate

A business cab-booking mobile app prototype built with **React Native (Expo)**.

Employees can book a cab for themselves or for a family member, choose a vehicle, track the driver, rate the trip and view ride history. Family bookings are clearly labelled with the passenger's name and who booked the ride.

> This is a UI prototype. All data is mocked and nothing is saved after the app closes.

## Features

- Splash, Login and OTP flow (demo)
- Book a cab for yourself or a family member
- Add and manage family members
- Choose a vehicle: Mini (₹220), Sedan (₹350), SUV (₹520)
- Driver details with Call and Message buttons (demo)
- SOS button that asks for confirmation and then calls 112
- Ride history with All, Upcoming and Completed filters
- Family Booking label in ride history
- Payment options, saved locations, notifications, help and profile screens

## Tech stack

- React Native with Expo
- JavaScript (React hooks)
- `react-native-safe-area-context`
- Custom state-based navigation (no navigation library)

## Getting started

```bash
# 1. Create an Expo project
npx create-expo-app MoveMate --template blank
cd MoveMate

# 2. Install the safe area package
npx expo install react-native-safe-area-context

# 3. Copy App.js, screens/ and styles/ into the project

# 4. Start the app
npx expo start
```

Then scan the QR code with the Expo Go app, or press `a` for an Android emulator or `i` for an iOS simulator.

## Project structure

```
MoveMate/
├── App.js                    # Navigation, shared state, top bar, bottom tabs, toast
├── screens/                  # One file per screen
│   ├── Splash.js
│   ├── Login.js
│   ├── Otp.js
│   ├── Home.js
│   ├── SelectPassenger.js
│   ├── Family.js
│   ├── AddFamily.js
│   ├── Location.js
│   ├── SelectCab.js
│   ├── Confirm.js
│   ├── Tracking.js
│   ├── Complete.js
│   ├── Rides.js
│   ├── RideDetails.js
│   ├── Payment.js
│   ├── Notifications.js
│   ├── Profile.js
│   ├── Saved.js
│   └── Help.js
└── styles/                   # One style file per screen
    ├── common.js             # Styles shared by all screens
    ├── App.styles.js         # Top bar, tabs and toast styles
    └── *.styles.js
```

## How it works

**Navigation.** `App.js` keeps a `screen` value and a `stack` list:

- `go('name')` opens a screen
- `back()` returns to the previous screen
- `reset('name')` clears the history (used by the bottom tabs)

**State.** One `app` object in `App.js` holds the booking details, family list, selected car and rides. Screens receive it as props and update it with `set({ ... })`.

## User flow

Splash → Login → OTP → Home → Book (self or family) → Location → Choose cab → Confirm → Tracking → Trip complete → My Rides

## Screens (19)

| Group | Screens |
|---|---|
| Onboarding | Splash, Login, OTP |
| Main tabs | Home, My Rides, Alerts, Profile |
| Booking flow | Select Passenger, Location, Select Cab, Confirm, Tracking, Trip Complete |
| Family | Family Members, Add Family Member |
| Other | Ride Details, Payment, Saved Locations, Help & Support |

## What is mocked

Login and OTP, the driver, fare, distance and time, map, notifications and payments are demo data.

## Future improvements

- Real login with OTP and a backend API
- Real map and live driver location (`react-native-maps`)
- Permanent storage (AsyncStorage or a database)
- Real payments and receipts
- Form validation
- React Navigation for gestures and deep linking
- SOS that shares the live ride with trusted contacts

## License

For learning and demo purposes.
