import supabase from "./supabase";

export async function signUp({ email, password, fullName, phone }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        phone,
      },
    },
  });
  if (error) throw new Error("Error in creating new account");
  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error("Provided password or email was incorrect");
  return data;
}

export async function logout() {
  const { error } = supabase.auth.signOut();

  if (error) throw new Error("Error logging out.");
}

export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function recoverPassword({ email }) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) throw new Error("Error in sending password recovery email");
  return data;
}

export async function updateUser({ email, password }) {
  const { data, error } = await supabase.auth.updateUser({
    email: email,
    password: password,
    // data: { email, password },
  });

  if (error) throw new Error("Error in updating user");
  return data;
}
