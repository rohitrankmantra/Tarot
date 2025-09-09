"use client";

import Header from "@/components/Header";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import PaymentSection from "@/components/checkout/PaymentSection";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Left: Form + Payment */}
        <div className="space-y-8">
          <CheckoutForm />
          <PaymentSection />
        </div>

        {/* Right: Order Summary */}
        <OrderSummary />
      </div>
    </main>
  );
}
