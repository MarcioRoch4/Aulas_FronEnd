function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    const data = jwt_decode(response.credential);
    console.log(data)
  }
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: "406934081250-v860t72j2e70ph3i81p5a8p0tvsktnn2.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  }