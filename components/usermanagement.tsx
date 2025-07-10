import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Alert,
  ActivityIndicator,
} from "react-native";
import {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
} from "../lib/supabase_crud";

import { getSession, signOut } from "../lib/supabase_auth";
import { useRouter } from "expo-router";

interface User {
  id: string;
  first_name: string;
  last_name: string;
}

const UserManagement = () => {
  // Form state
  const [first_name, setfirstname] = useState("");
  const [last_name, setlastname] = useState("");
  const [userId, setUserId] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    fetchUsers();
    const fetchSession = async () => {
      const session = await getSession();
      if (!session.data?.session) {
        Alert.alert("Error", "You must be signed in to manage users");
        router.push("/auth");
      }
    };
    fetchSession();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const allUsers = await getAllUsers();
      setUsers(allUsers);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch users");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      setLoading(true);
      await signOut();
      router.push("/auth");
    } catch (error) {
      Alert.alert("Error", "Failed to sign out");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = async () => {
    if (!first_name || !last_name) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      await createUser({ first_name, last_name });
      Alert.alert("Success", "User created successfully");
      setfirstname("");
      setlastname("");
      fetchUsers();
    } catch (error) {
      Alert.alert("Error", "Failed to create user");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateUser = async () => {
    if (!userId || !first_name || !last_name) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      await updateUser(userId, { first_name, last_name });
      Alert.alert("Success", "User updated successfully");
      setfirstname("");
      setlastname("");
      setUserId("");
      setIsUpdateMode(false);
      fetchUsers();
    } catch (error) {
      Alert.alert("Error", "Failed to update user");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (id: string) => {
    try {
      setLoading(true);
      await deleteUser(id);
      Alert.alert("Success", "User deleted successfully");
      fetchUsers();
    } catch (error) {
      Alert.alert("Error", "Failed to delete user");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const setupUpdateForm = (user: User) => {
    setUserId(user.id);
    setfirstname(user.first_name);
    setlastname(user.last_name);
    setIsUpdateMode(true);
  };

  const cancelUpdate = () => {
    setUserId("");
    setfirstname("");
    setlastname("");
    setIsUpdateMode(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <Text style={styles.title}>User Management</Text>
        <Button title="Sign Out" onPress={handleSignOut} />
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="first name"
          value={first_name}
          onChangeText={setfirstname}
        />
        <TextInput
          style={styles.input}
          placeholder="last name"
          value={last_name}
          onChangeText={setlastname}
          // keyboardType="last_name-address"
        />

        {isUpdateMode ? (
          <View style={styles.buttonRow}>
            <Button title="Update User" onPress={handleUpdateUser} />
            <Button title="Cancel" onPress={cancelUpdate} color="gray" />
          </View>
        ) : (
          <Button title="Create User" onPress={handleCreateUser} />
        )}
      </View>

      <View style={styles.listContainer}>
        <View style={styles.listHeader}>
          <Text style={styles.subtitle}>Users List</Text>
          <Button title="Refresh" onPress={fetchUsers} />
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : users.length > 0 ? (
          <FlatList
            data={users}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.userItem}>
                <View>
                  <Text style={styles.userfirst_name}>{item.first_name}</Text>
                  <Text>{item.last_name}</Text>
                </View>
                <View style={styles.buttonRow}>
                  <Button title="Edit" onPress={() => setupUpdateForm(item)} />
                  <Button
                    title="Delete"
                    onPress={() => handleDeleteUser(item.id)}
                    color="red"
                  />
                </View>
              </View>
            )}
          />
        ) : (
          <Text style={styles.noData}>No users found</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  form: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listContainer: {
    flex: 1,
  },
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  userItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 6,
    marginBottom: 8,
  },
  userfirst_name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  noData: {
    textAlign: "center",
    marginTop: 20,
    color: "#666",
  },
});

export default UserManagement;
