import { Routes, Route, Link } from "react-router-dom";
import { Calendar, Users, FileText, ShoppingCart, Bug, MessageSquare } from "lucide-react";
import { useState } from "react";

function Home() {
  const features = [
    { title: "Farm Calendar", desc: "Plan and track farming activities", icon: <Calendar className="w-8 h-8 text-green-600" />, path: "/calendar" },
    { title: "Farmers", desc: "View and manage farmers", icon: <Users className="w-8 h-8 text-blue-600" />, path: "/farmers" },
    { title: "Farmer Form", desc: "Register new farmers easily", icon: <FileText className="w-8 h-8 text-purple-600" />, path: "/farmer-form" },
    { title: "Market Prices", desc: "Check daily price updates", icon: <ShoppingCart className="w-8 h-8 text-yellow-600" />, path: "/market-prices" },
    { title: "Pest Warnings", desc: "Stay updated on pest alerts", icon: <Bug className="w-8 h-8 text-red-600" />, path: "/pest-warnings" },
    { title: "Community Posts", desc: "Share knowledge with others", icon: <MessageSquare className="w-8 h-8 text-pink-600" />, path: "/community" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-extrabold flex items-center gap-2 mb-8">🌱 Agrinex Prototype</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <Link to={f.path} key={i}>
            <div className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 hover:shadow-green-500/30 transition-all cursor-pointer">
              <div className="mb-4">{f.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{f.title}</h2>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// 📅 Sample pages
function CalendarPage() {
  return <h2 className="text-3xl text-green-400 p-8">📅 Farm Calendar Page</h2>;
}
function FarmersPage() {
  return <h2 className="text-3xl text-blue-400 p-8">👩‍🌾 Farmers List Page</h2>;
}
function MarketPricesPage() {
  return <h2 className="text-3xl text-yellow-400 p-8">💰 Market Prices Page</h2>;
}
function PestWarningsPage() {
  return <h2 className="text-3xl text-red-400 p-8">🐛 Pest Warnings Page</h2>;
}
function CommunityPage() {
  return <h2 className="text-3xl text-pink-400 p-8">💬 Community Posts Page</h2>;
}

// 📝 Farmer Registration Form Page
function FarmerFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    location: "",
    crop: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Farmer Registered!\n\n${JSON.stringify(formData, null, 2)}`);
    setFormData({ name: "", age: "", location: "", crop: "", phone: "" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6">📝 Farmer Registration Form</h2>

        <label className="block mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
          required
        />

        <label className="block mb-2">Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
          required
        />

        <label className="block mb-2">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
          required
        />

        <label className="block mb-2">Crop Grown</label>
        <input
          type="text"
          name="crop"
          value={formData.crop}
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
          required
        />

        <label className="block mb-2">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 mb-6 rounded bg-gray-700 text-white"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg font-semibold"
        >
          Register Farmer
        </button>
      </form>
    </div>
  );
}


export default FarmerFormPage;
