// const password = document.getElementById("password");
// const email = document.getElementById("email");

const supabaseUrl = "https://dpsnymvjqugamqrfrrys.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwc255bXZqcXVnYW1xcmZycnlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyODA5MzQsImV4cCI6MjA1Mjg1NjkzNH0.7g1hU78xsVqiVf7c-i2QBteTloi_N-vRvomr6Tgxjtg`;
const supaBase = supabase.createClient(supabaseUrl, supabaseKey);

async function signup(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;

  console.log("user email", email);
  console.log("user password", password);
  const { data, error } = await supaBase.auth.signUp({
    email: email,
    password: password,
  });
  if (error) {
    console.error("Signup Error:", error.message);
    alert(`Error: error`);
  } else {
    console.log("Signup Successful:", data);
    alert("Signup successful! Please verify your email.");
  }
  if (signup(event)) {
    window.location.href = "dashboard.html";
    console.log("succesfully Navigate");
  }
  console.log("data", data);
  console.log("error", error);
}

async function signin(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;

  console.log("user email", email);
  console.log("user password", password);
  const { data, error } = await supaBase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (signin(event)) {
    window.location.href = "dashboard.html";
    console.log("succesfully Navigate");
  }
  console.log("data", data);
  console.log("Error", error);
  if (error) {
    console.error("Signin Error", error);
    alert("Sign-in error:", error.message);
  } else {
    console.log("Signup Successful", data);
    alert("Signed in successfully:", data);
  }
}

// CREATE POLICY "Allow Authenticated Users to Upload"
// ON storage.objects
// FOR INSERT
// TO authenticated
// WITH CHECK (bucket_id = 'blogImages');

// (auth.uid() = user_id)
async function upload(event) {
  event.preventDefault();
  const upload = document.getElementById("upload");
  const file_upload = upload.files[0];
  if (file_upload) {
    try {
      const { data, error } = await supaBase.storage
        .from("uplaod_images")
        .upload("images/" + file.name, file);
      console.log(data);
      console.log(error);
    } catch (error) {
      console.error("Error uploading file:", error.message);
      alert("Error uploading file");
    }
  } else {
    alert('Please choose a file to upload.');
  }
}
// const imageData =
// const { data: imageData, error: imageError } = await supa_base?.storage
// .from("blog-images")
// .upload(`${Date.now()}-${imageFile.name}`, imageFile, {
//   contentType: "image/jpg",
// });
