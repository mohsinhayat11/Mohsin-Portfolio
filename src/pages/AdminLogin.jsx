import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../services/api";

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const loginAdmin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      const { data } = await api.post(
        "/api/admin/login",
        formData
      );

      localStorage.setItem("adminToken", data.token);
      toast.success("Login successful!");

      navigate("/admin/messages");
    } catch (error) {
      toast.error("Invalid email or password.");
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <form
        onSubmit={loginAdmin}
        className="w-full max-w-md rounded-2xl bg-gray-900 p-8 shadow-lg"
      >
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          Admin Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mb-4 w-full rounded-lg border border-gray-700 bg-black p-3 text-white outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="mb-6 w-full rounded-lg border border-gray-700 bg-black p-3 text-white outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700"
        >
          {loading ? "Logging In..." : "Login"}
        </button>

        {message && (
          <p className="mt-4 text-center text-white">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default AdminLogin;