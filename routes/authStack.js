import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/authStack/login';
import OnboardingScreen from '../screens/authStack/onboardingScreen';
import Register from '../screens/authStack/register';
import VerifyOTP from '../screens/authStack/verifyOtp';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
    </Stack.Navigator>
  );
}

export default AuthStack;