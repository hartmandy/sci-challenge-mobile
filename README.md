# SWU Card Gallery Dev Challenge 👋

Hello SCI team, here is the React Native app! To run you need to clone the repository, npm or yarn install, and use the proxy listed below.

1. Install dependencies:

   ```bash
   yarn install
   ```

   ```bash
   # The app requires a proxy for API access
   yarn web-with-proxy   # For web development
   # or
   yarn ios-with-proxy   # For iOS
   # or
   yarn android-with-proxy # For Android
   ```

### Problem-Solving Approach

- _Fixed test issues_ First thing I saw was the test failures. I saw a variable 'card_meta' was unused. The api test was failing because it didn’t match the mock data, so I updated that.
- _Project/ Dep Setup_ I installed native wind (tailwind for react native) and react-native-reusables (shadcn for react native) so I could pull over components I built for the web app. I worked on routing/navigation firs and initially made it with two tabs, Card Search and Saved Cards. For the timeframe I had to work on this demo, I decided to only work on the card search feature/ page.
- _Color Theme_ I set up the color theme first, to make the light and dark mode throughout the app.
- _Components_ Then, I brought over components from the web app and made it RN friendly. The logic for search and sort is different the web app. I decided to do state management with useState and shared state with the entire app using context to manage the options, filters, and cards. With more time, I'd rethink how to display the card stats. The popover component looks great on web, but doesn't work well for this mobile app.
