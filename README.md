# React Native Shopping Cart

This project began as a small playground for getting familiar with React Native ... and well, it still is! Over time, I’ve added quite a few features and tools to it, such as Redux for state management and Cypress for testing.

Currently, you can:

   - Like products
   - Add products to your cart
   - View individual product details
   - And more!

The component structure follows *Atomic Design* principles to ensure scalability and maintainability as the project grows.

> [!NOTE]  
> Since I don't currently have access to an iOS system, I can't determine how the app will appear on iOS devices


## Getting Started

```
git clone https://github.com/bpetermann/react-native-shopping-cart.git
cd react-native-shopping-cart
npm install
npm start
```

- Press "a" to open the App in
  [Android Studio](https://developer.android.com/studio)
- For Android devices scan the QR Code that is displayed in the terminal with the [Expo Go](https://expo.dev/client) app
- Type "npm run web" to view in the browser

## Redux

The app utilizes a Redux store to manage the state of the cart, user and favorites functionality. The Redux store handles the logic and storage for these features, providing a centralized location for accessing and modifying this shared state throughout the application.

## Run Cypress tests

```
npm start web
npm run test
```
## Products 

The product api comes from a [dummy json server](https://github.com/bpetermann/shopping-cart-jsonserver)

## Authentication 

For demonstration purposes only, no backend logic included


## Dependencies
- [React Navigation](https://reactnavigation.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [i18n-js](https://www.npmjs.com/package/i18n-js)
- [Cypress](https://www.cypress.io/)
- [Redux](https://react-redux.js.org/)
- [Expo](https://expo.dev/)

### Thanks

- Model photo by <a href="https://unsplash.com/de/@wiola3001">Wioletta Płonkowska
  </a> on <a href="https://unsplash.com/s/photos/model?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a><br>
- Product photos by <a href="https://unsplash.com/@ikredenets?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Irene Kredenets</a> on <a href="https://unsplash.com/s/photos/shoes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>


### Recommended IDE Setup

[VS Code](https://code.visualstudio.com/)
