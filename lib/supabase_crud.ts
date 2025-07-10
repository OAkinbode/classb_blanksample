import { supabase } from "./supabase";
import { User } from "./datatypes";
const Table_name = "users";

export async function createUser(user: User) {
  const { data, error } = await supabase
    .from(Table_name)
    .insert([user])
    .select();

  if (error) {
    console.error("Error creating user:", error);
    throw error;
  }

  return data;
}

export async function getAllUsers() {
  const { data, error } = await supabase.from(Table_name).select();

  if (error) {
    console.error("Error fetching users:", error);
    throw error;
  }

  return data;
}

export async function updateUser(id: string, user: User) {
  const { data, error } = await supabase
    .from(Table_name)
    .update(user)
    .eq("id", id)
    .select();

  if (error) {
    console.error("Error updating user:", error);
    throw error;
  }

  return data;
}

export async function deleteUser(id: string) {
  const { data, error } = await supabase
    .from(Table_name)
    .delete()
    .eq("id", id)
    .select();

  if (error) {
    console.error("Error deleting user:", error);
    throw error;
  }

  return data;
}
