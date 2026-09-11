import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase";

const Login = ({setUser}) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const showError = (message) => {
    setError(message);
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let { user } = await signInWithEmailAndPassword(auth, email, password);
      setUser(user.uid)
    } catch (error) {
      if (error.code === "auth/user-disabled") {
        showError("This account has been disabled.");
      } else if (error.code === "auth/too-many-requests") {
        showError(
          "Too many unsuccessful login attempts. Please try again later.",
        );
      } else if (error.code === "auth/invalid-credential") {
        showError("Invalid email or password.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h1 className="logo">
            SA<span>.</span>
          </h1>

          <p className="login-label">
            <span></span>
            ADMIN PANEL
          </p>

          <h2>Welcome back</h2>

          <p className="login-description">
            Sign in to manage your portfolio and content.
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>

            <div className="input-wrapper">
              <i className="fa-regular fa-envelope"></i>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading ? true : false}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>

            <div className="input-wrapper">
              <i className="fa-solid fa-lock"></i>

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading ? true : false}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i
                  className={`ph ${showPassword ? "ph-eye-slash" : "ph-eye"}`}
                ></i>
              </button>
            </div>
          </div>

          {error && <p className="login-error">{error}</p>}

          <button
            type="submit"
            className="login-btn"
            disabled={loading ? true : false}
          >
            {loading ? "Logging in..." : "Login"}
            {!loading && <i className="fa-solid fa-arrow-right"></i>}
          </button>
        </form>

        <button className="back-btn" onClick={() => navigate("/")}>
          <i className="fa-solid fa-arrow-left"></i>
          Back to portfolio
        </button>
      </div>
    </main>
  );
};

export default Login;
