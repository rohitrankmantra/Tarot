"use client";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function CheckoutForm({ visitorId, cartItems }) {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!userInfo.name.trim()) newErrors.name = "Full name is required.";
    if (!userInfo.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(userInfo.email))
      newErrors.email = "Enter a valid email.";
    if (!userInfo.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10,15}$/.test(userInfo.phone))
      newErrors.phone = "Enter a valid phone number.";
    if (!userInfo.city.trim()) newErrors.city = "City is required.";
    if (!userInfo.country.trim()) newErrors.country = "Country is required.";
    if (!userInfo.postalCode.trim())
      newErrors.postalCode = "Postal code is required.";
    if (!userInfo.address.trim())
      newErrors.address = "Street address is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("❌ Please fix the errors in the form.");
      return;
    }
    if (!cartItems || cartItems.length === 0) {
      toast.error("❌ Your cart is empty.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({  userInfo }),
      });


      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Checkout failed");
      toast.success("✅ Redirecting to payment...");
      window.location.href = data.url; // redirect to Stripe
    } catch (err) {
      console.error(err);
      toast.error("❌ " + err.message);
    } finally {
      setLoading(false);
      
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10 mystical-shadow mt-12"
    >
      <h2 className="text-2xl font-serif font-bold mb-6 underline text-accent">
        Your Information
      </h2>

      <div className="space-y-5">
        {[
          { name: "name", placeholder: "Full Name" },
          { name: "email", placeholder: "Email Address", type: "email" },
          { name: "phone", placeholder: "Phone Number" },
          { name: "city", placeholder: "City" },
          { name: "country", placeholder: "Country" },
          { name: "postalCode", placeholder: "Postal Code" },
        ].map(({ name, placeholder, type = "text" }) => (
          <div key={name}>
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              value={userInfo[name]}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-background/30 text-accent rounded-2xl shadow-inner focus:outline-none focus:ring-2 ${
                errors[name]
                  ? "focus:ring-red-500 border border-red-500"
                  : "focus:ring-accent"
              }`}
              disabled={loading}
            />
            {errors[name] && (
              <p className="text-red-400 text-sm mt-1">{errors[name]}</p>
            )}
          </div>
        ))}

        <div>
          <textarea
            name="address"
            placeholder="Street Address"
            value={userInfo.address}
            onChange={handleChange}
            rows={2}
            className={`w-full px-4 py-3 bg-background/30 text-accent rounded-2xl shadow-inner focus:outline-none focus:ring-2 ${
              errors.address
                ? "focus:ring-red-500 border border-red-500"
                : "focus:ring-accent"
            }`}
            disabled={loading}
          />
          {errors.address && (
            <p className="text-red-400 text-sm mt-1">{errors.address}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-8 bg-accent text-white py-4 rounded-2xl font-medium text-lg shadow-lg hover:mystical-glow hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Processing..." : "Proceed to Payment"}
      </button>
    </form>
  );
}
