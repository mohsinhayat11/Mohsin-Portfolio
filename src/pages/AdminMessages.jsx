import { useEffect, useState } from "react";
import { FaEnvelope, FaSignOutAlt, FaTrash} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../services/api";

function AdminMessages() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      const res = await api.get("/api/contact", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessages(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      

      if (error.response?.status === 401) {
        localStorage.removeItem("adminToken");
        navigate("/admin");
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin");
  };

  const deleteMessage = async (id) => {
    try {
      const token = localStorage.getItem("adminToken");

      const confirmDelete = window.confirm(
        "Are you sure you want to delete this message?"
      );

      if (!confirmDelete) return;

      await api.delete(`/api/contact/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchMessages();
      toast.success("Message deleted successfully.");
    } catch (error) {
      toast.error("Unable to delete message.");
    }
  };
  const filteredMessages = messages.filter((msg) => {
    return (
      msg.name.toLowerCase().includes(search.toLowerCase()) ||
      msg.email.toLowerCase().includes(search.toLowerCase())
    );
  });
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>

          <p className="text-lg text-white">
            Loading Messages...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-8 text-white">

      {/* Header */}
      <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="text-4xl font-bold">
            📊 Admin Dashboard
          </h1>

          <p className="mt-2 text-gray-400">
            Manage all portfolio contact messages
          </p>
        </div>

        <button
          onClick={logout}
          className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

      {/* Total Messages Card */}
      <div className="mb-8 rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-lg">

        <div className="flex items-center gap-4">

          <div className="rounded-full bg-blue-600 p-4">
            <FaEnvelope className="text-2xl text-white" />
          </div>

          <div>
            <p className="text-gray-400">
              Total Messages
            </p>

            <h2 className="text-3xl font-bold">
              {messages.length}
            </h2>
          </div>

        </div>

      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="🔍 Search by Name or Email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-gray-700 bg-gray-900 p-4 text-white outline-none focus:border-blue-500"
        />
      </div>

      {/* Messages Table */}
      <div className="overflow-x-auto rounded-2xl border border-gray-800 shadow-lg">

        <table className="w-full">

          <thead className="bg-gray-900">

            <tr>

              <th className="border-b border-gray-700 p-4 text-left">
                Name
              </th>

              <th className="border-b border-gray-700 p-4 text-left">
                Email
              </th>

              <th className="border-b border-gray-700 p-4 text-left">
                Message
              </th>
              <th className="border-b border-gray-700 p-4 text-left">
                Date
              </th>

              <th className="border-b border-gray-700 p-4 text-center">
                Action
              </th>

            </tr>

          </thead>

          <tbody>
            {filteredMessages.length > 0 ? (
              filteredMessages.map((msg) => (
                <tr
                  key={msg._id}
                  className="border-b border-gray-800 transition hover:bg-gray-900"
                >
                  <td className="p-4 font-medium">{msg.name}</td>

                  <td className="p-4">
                    <a
                      href={`mailto:${msg.email}`}
                      className="text-blue-400 hover:text-blue-300 hover:underline"
                    >
                      {msg.email}
                    </a>
                  </td>

                  <td className="max-w-sm p-4 break-words">
                    {msg.message}
                  </td>

                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="font-medium">
                        {new Date(msg.createdAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>

                      <span className="text-sm text-gray-400">
                        {new Date(msg.createdAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </td>

                  <td className="p-4 text-center">
                    <button
                      onClick={() => deleteMessage(msg._id)}
                      className="flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700"
                    >
                      <FaTrash />
                        Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="p-12 text-center"
                >
                  <div className="flex flex-col items-center gap-3">
                    <span className="text-6xl">📭</span>

                    <h2 className="text-2xl font-bold">
                      No Messages Found
                    </h2>

                    <p className="text-gray-400">
                      Try another search or wait for new contact messages.
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default AdminMessages;