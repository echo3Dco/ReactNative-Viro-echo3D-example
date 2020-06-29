# ReactNative-Viro-echoAR-example
Example React Native project with Viro and echoAR integrated.

## Register
Don't have an API key? Make sure to register for FREE at [echoAR](https://console.echoar.xyz/#/auth/register).

## Setup
* Clone this repository.
* Go to the root of the directory.
* Run `npm install`.

## Run
* [Add the 3D model](https://docs.echoar.xyz/quickstart/add-a-3d-model) to the console.
* [Set the API key](https://docs.echoar.xyz/react-native/) in the `App.js script` inside.
* Build and run the AR application
### Android
* For Android, make sure you have downloaded the Android SDK and platform-tools for building apps.
* Set the environment variable $ANDROID_HOME and added platform-tools to $PATH variable.

In Linux/Mac:
```
export ANDROID_HOME=/YOUR_PATH_TO/Android/sdk
export PATH=$ANDROID_HOME/platform-tools:$PATH
export PATH=$ANDROID_HOME/tools:$PATH
```
In Widows:

Right-click the Computer icon and choose Properties, or in Windows Control Panel, choose System. Choose Advanced system settings. On the Advanced tab, click Environment Variables. Click New to create a new environment variable. Click Edit to modify an existing environment variable. After creating or modifying the environment variable, click Apply and then OK to have the change take effect.

* Build and launch android app by executing the following from the root of the project
    ```
    react-native run-android --variant=gvrDebug
    ```
### iOS
* Open ViroSample.xcworkspace under the `ios/` directory in Xcode. Select the right "Team" for `ViroSample` and `ViroSampleTest` target under `General -> Signing`
* Hit play to build and launch the app on your iOS device.
    
## Learn more
Refer to our [documentation](https://docs.echoar.xyz/react-native/) to learn more about how to use React Native and echoAR.

Refer to Viro's [documentation](https://docs.viromedia.com/docs/) to learn more about how to use Viro. **_WARNING: the Viro library is now open-sourced and no longer maintained by Viro Media._**

## Support
Feel free to reach out at [support@echoAR.xyz](mailto:support@echoAR.xyz) or join our [support channel on Slack](https://join.slack.com/t/echoar/shared_invite/enQtNTg4NjI5NjM3OTc1LWU1M2M2MTNlNTM3NGY1YTUxYmY3ZDNjNTc3YjA5M2QyNGZiOTgzMjVmZWZmZmFjNGJjYTcxZjhhNzk3YjNhNjE).

## Screenshots
![Phone screenshot](/screenshots/ReactNative.gif)
![echoAR console screenshot](/screenshots/Console.png)
