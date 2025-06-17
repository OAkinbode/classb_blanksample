import React, { use, useState, useEffect } from "react";
import Signin2 from "./signin2";
import UserDetailsForm from "./userdetailsform";
import { View, Text } from "react-native";

interface SignupControllerProps {
  setIsSignedIn: (isSignedIn: boolean) => void;
}

const initialUserObject = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
};

const SignupController: React.FC<SignupControllerProps> = ({
  setIsSignedIn,
}) => {
  // State to control which component to display
  const [showUserDetailsForm, setShowUserDetailsForm] = useState(false);
  const [userObject, setUserObject] = useState<{
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }>(initialUserObject);
  const [signSuccessful, setSignSuccessful] = useState(false);
  const [moreDetails, setMoreDetails] = useState(false);

  useEffect(() => {
    if (moreDetails === true) {
      setIsSignedIn(true);
    }
  }, [moreDetails]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Welcome to the App!
      </Text>
      {!signSuccessful ? (
        <Signin2
          setIsSignedIn={setIsSignedIn}
          userObject={userObject}
          setSignSuccessful={setSignSuccessful}
        />
      ) : (
        <UserDetailsForm setMoreDetails={setMoreDetails} />
      )}
    </View>
  );
};

export default SignupController;
