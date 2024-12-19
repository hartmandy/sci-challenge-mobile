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
- _Project/ Dep Setup_ I installed native wind (tailwind for react native) and react-native-reusables (shadcn for react native) so I could pull over components I built for the web app. I worked on routing/navigation first, simplifying it to have just the two tabs for this exercise, Card Search and Saved Cards.
- _Color Theme_ I set up the color theme first, since I was working on the tabs and header in the layout file.

## 🎯 Challenge Tasks

my notes

- Routing is wrong, no initial screen
- Toggle light and dark mode, icons working with light and dark mode

Remaining tasks

1. **Fix and Run**:

   - Ensure proper data fetching and display

2. **Enhance the UI**:

   - Add animations to the cards (e.g., on hover, sort, or load)
   - Consider using react-native-reanimated or your preferred animation approach
   - Optimize the layout for both mobile and web views

3. **Optimize Performance**:
   - Consider implementing loading states
   - Handle edge cases in data fetching
   - Optimize sorting operations

- Consider adding features like:

  - Dark mode support
  - Loading animations
  - Improved error handling
  - Search functionality
  - Responsive design improvements

  splah screen if time

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Animation Guide](https://reactnative.dev/docs/animations)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)

Good luck! We're excited to see your solutions and improvements! 🎉
