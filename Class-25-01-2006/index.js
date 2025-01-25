const supaBaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwc255bXZqcXVnYW1xcmZycnlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyODA5MzQsImV4cCI6MjA1Mjg1NjkzNH0.7g1hU78xsVqiVf7c-i2QBteTloi_N-vRvomr6Tgxjtg`;
const supaBaseUrl = `https://dpsnymvjqugamqrfrrys.supabase.co`;
const supa_base = supabase.createClient(supaBaseKey, supaBaseUrl);

console.log('createClient ', supa_base);

// const email = document.getElementById("email");
// const password = document.getElementById("password");

// async function handleLoginSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const email = form.email.value;
//   const password = form.password.value;

//   console.log(email);
//   console.log(password);
// }

async function handleSignupSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;

  console.log(email);
  console.log(password);

  const { data, error } = await supa_base.auth.signUp({
    email: email,
    password: password,
  });
  console.log("Data for signup", data);
  console.log("Error for signup", error);
}

//   const { data, error } = await supa_base.auth.signUp({
//     email: email,
//     password: password,
//   });

//   console.log("Data for signin"data);
//   console.log("Error for signin",error);
