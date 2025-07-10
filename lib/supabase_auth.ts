import { supabase } from "./supabase";

export const signUp = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error in signUp function:", error);
    throw error;
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error in signIn function:", error);
    throw error;
  }
};
export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw error;
    }

    return true;
  } catch (error) {
    console.error("Error in signOut function:", error);
    throw error;
  }
};

export const getSession = () => {
  const session = supabase.auth.getSession();
  if (!session) {
    throw new Error("No user is currently signed in");
  }
  return session;
};
