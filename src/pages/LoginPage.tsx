import axios from "axios";

export default function LoginPage() {
  const handleGithubLogin = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/oauth2/authorization/github"
      );
      // window.location.href = response.data.redirectUrl;
      console.log("login response ", response)
    } catch (error) {
      console.error("Error initiating github login:", error);
    }
  };

  return (
    <div>
      <button onClick={handleGithubLogin}>Login with Github</button>
    </div>
  );
}
