import supabase from './supabase';

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
  if (error) throw new Error(error.messsage);
  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error('Provided password or email was incorrect');
  return data;
}

export async function logout() {
  const { error } = supabase.auth.signOut();

  if (error) throw new Error('Provided password or email was incorrect');
}

export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}
