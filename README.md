# SWU Card Gallery Dev Challenge 👋

A Mobile-first Expo app for displaying Star Wars Unlimited cards, with opportunities for enhancement and optimization. This project uses [Expo](https://expo.dev) with TypeScript and React Native.

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Start the development environment:
   ```bash
   # The app requires a proxy for API access
   yarn web-with-proxy   # For web development
   # or
   yarn ios-with-proxy   # For iOS
   # or
   yarn android-with-proxy # For Android
   ```

> **Note**: You might encounter some lint and test issues when first starting the app. This is intentional - fixing these is part of the challenge!

## 🎯 Challenge Tasks

1. **Fix and Run**:
   - Address any lint or test errors you encounter
   - Get the app running with the proxy service
   - Ensure proper data fetching and display

2. **Enhance the UI**:
   - Add animations to the cards (e.g., on hover, sort, or load)
   - Consider using react-native-reanimated or your preferred animation approach
   - Optimize the layout for both mobile and web views

3. **Optimize Performance**:
   - Consider implementing loading states
   - Handle edge cases in data fetching
   - Optimize sorting operations

## 🛠️ Development Tools

- **Testing**: `yarn test`
- **Linting**: `yarn lint`
- **Validation**: `yarn validate`

## 📱 Available Scripts

- `yarn web-with-proxy`: Start web development with API proxy
- `yarn ios-with-proxy`: Start iOS development with API proxy
- `yarn android-with-proxy`: Start Android development with API proxy
- `yarn test`: Run tests
- `yarn lint`: Run linting

## 🧪 Testing

The app includes unit tests for core functionality. Run them with:
```bash
yarn test
```

## 📝 Additional Notes

- The app uses a proxy service to handle CORS and API access
- You'll need to fix existing issues before the app will run properly
- Consider adding features like:
   - Dark mode support
   - Loading animations
   - Improved error handling
   - Search functionality
   - Responsive design improvements

## 📚 Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Animation Guide](https://reactnative.dev/docs/animations)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)

Good luck! We're excited to see your solutions and improvements! 🎉