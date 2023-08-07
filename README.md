Steps to run app:
   1. yarn install
   2. cd ios && pod install && cd ..
   3. Run on ios: yarn ios
   4. Run on android: yarn android

To login in the app:
   Username: flex
   Password: 123456

How might you make this app more secure?
   1. I would not use the BASE_URL in the code, but in the .env files from react-native-config

How would you make this solution scale to millions of records?
   1. With pagination, by making new requests when the end of the list of products is reached

What else would you have liked to improve given more time?
   1. I would make a better looking inputs than I did, I would also make the placeholder move up on the input when it is focused, just like in the Viva Fresh App (it is pure code from me, not by using third party libraries)
   2. I would use Formik with yup to validate inputs of the form
   3. I would use KeyboardAvoidingView, to allow scrolling in the Sign In screen when keyboard is open
   4. I would also create some unit tests given more time, but I don't have much experience with unit tests, just some independent excercises on my own, but not required at work.
   5. I would use Redux for state management if the project was bigger, and also I would divide the code in smaller components.
