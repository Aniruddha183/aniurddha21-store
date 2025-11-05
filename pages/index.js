import Layout from "../components/Layout";
import { ShoppingBag, Mail, Phone, MapPin } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl" style={{backgroundColor: '#3B82F6'}}>
              <ShoppingBag className="w-10 h-10" style={{color: '#FFFFFF'}} />
            </div>
            <h1 className="mt-6 text-5xl font-bold" style={{color: '#000000'}}>
              aniurddha21
            </h1>
            <p className="mt-3 text-lg opacity-80" style={{color: '#000000'}}>
              Beautiful products for modern living
            </p>
            <button
              className="mt-8 px-8 py-3 rounded-full font-semibold"
              style={{ backgroundColor: '#3B82F6', color: '#FFFFFF' }}
            >
              Shop Now
            </button>
          </div>
        </section>

        {/* Contact */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-6 grid sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Mail className="w-6 h-6" />
              <div>
                <div className="font-semibold">Email</div>
                <div className="opacity-70 text-sm">hello@yourstore.com</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-6 h-6" />
              <div>
                <div className="font-semibold">Phone</div>
                <div className="opacity-70 text-sm">+1 (555) 123-4567</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6" />
              <div>
                <div className="font-semibold">Address</div>
                <div className="opacity-70 text-sm">123 Main Street, City, State 12345</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center opacity-70">
          <div>© 2025 aniurddha21. All rights reserved.</div>
        </footer>
      </div>
    </Layout>
  );
}