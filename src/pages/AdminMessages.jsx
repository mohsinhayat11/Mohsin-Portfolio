import { useEffect, useState } from "react";
import axios from "axios";

function AdminMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/contact"
      );

      setMessages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-black p-10 text-white">
      <h1 className="mb-8 text-4xl font-bold">
        Contact Messages
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700">
          <thead>
            <tr className="bg-gray-900">
              <th className="border p-3">Name</th>
              <th className="border p-3">Email</th>
              <th className="border p-3">Message</th>
            </tr>
          </thead>

          <tbody>
            {messages.map((msg) => (
              <tr key={msg._id}>
                <td className="border p-3">
                  {msg.name}
                </td>

                <td className="border p-3">
                  {msg.email}
                </td>

                <td className="border p-3">
                  {msg.message}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminMessages;