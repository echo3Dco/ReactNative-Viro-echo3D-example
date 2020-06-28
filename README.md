# ReactNative-Viro-echoAR-example
Example React Native project with Viro and echoAR integrated.

## Register
Don't have an API key? Make sure to register for FREE at [echoAR](https://console.echoar.xyz/#/auth/register).

## Setup
* Clone this repository.

* Run npm install

## Run
* [Add the 3D model](https://docs.echoar.xyz/quickstart/add-a-3d-model) to the console.
* [Set the API key](https://docs.echoar.xyz/unity/using-the-sdk) in the `echoAR.cs script` inside the `echoAR\echoAR.prefab` using the the Inspector.
* Set Key in App.js
* [Build and run the AR application](https://docs.echoar.xyz/unity/adding-ar-capabilities#4-build-and-run-the-ar-application).
* For Android, make sure you have downloaded and installed Android Studio from here to get required SDK and platform-tools for building android apps Make sure you have the required environment variables set - $ANDROID_HOME, and added platform-tools to $PATH variable. If not,
export ANDROID_HOME=/YOUR_PATH_TO/Android/sdk
export PATH=$ANDROID_HOME/platform-tools:$PATH
export PATH=$ANDROID_HOME/tools:$PATH
Build and launch android app by executing the following from the root of the project
react-native run-android --variant=gvrDebug
* For iOS, in Xcode open ViroSample.xcworkspace in ios/ directory. Select the right "Team" for ViroSample and ViroSampleTest target under General -> Signing Hit play to build and launch the app on your iOS device

## Learn more
Refer to our [documentation](https://docs.echoar.xyz/react-native/) to learn more about how to use React Native and echoAR.
https://docs.viromedia.com/docs/

## Support
Feel free to reach out at [support@echoAR.xyz](mailto:support@echoAR.xyz) or join our [support channel on Slack](https://join.slack.com/t/echoar/shared_invite/enQtNTg4NjI5NjM3OTc1LWU1M2M2MTNlNTM3NGY1YTUxYmY3ZDNjNTc3YjA5M2QyNGZiOTgzMjVmZWZmZmFjNGJjYTcxZjhhNzk3YjNhNjE).
