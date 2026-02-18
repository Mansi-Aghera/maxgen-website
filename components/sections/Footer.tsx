"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f6f7fb] pt-[90px]">
      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 pb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* COL 1 */}
        <div>
          <h2 className="text-[34px] font-black text-[#0b1b3f] mb-6">NIWAX</h2>

          <p className="text-slate-600 leading-relaxed mb-8">
            News letter dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt. Enter your email
          </p>

          <button className="btn-niwax">Become Partner →</button>
        </div>

        {/* COL 2 */}
        <div>
          <h3 className="text-[22px] font-bold text-[#0b1b3f] mb-6">
            Contact Us
          </h3>

          <div className="space-y-5 text-slate-600">
            <div className="flex gap-4">
              <Mail size={20} className="text-slate-500 mt-1" />
              <div>
                <p className="font-semibold text-[#0b1b3f]">Email</p>
                <p>info@businessname.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone size={20} className="text-slate-500 mt-1" />
              <div>
                <p className="font-semibold text-[#0b1b3f]">Phone</p>
                <p>+1 0000 000 000</p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin size={20} className="text-slate-500 mt-1" />
              <div>
                <p className="font-semibold text-[#0b1b3f]">Address</p>
                <p>123 Business Centre London SW1A 1AA</p>
              </div>
            </div>
          </div>
        </div>

        {/* COL 3 */}
        <div>
          <h3 className="text-[22px] font-bold text-[#0b1b3f] mb-6">Company</h3>

          <ul className="space-y-3 text-slate-600">
            <li>
              <Link href="/contact" className="hover:text-pink-500 transition">
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                href="/faqs#customer-faq"
                className="hover:text-pink-500 transition"
              >
                Customer's FAQ
              </Link>
            </li>

            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-pink-500 transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-and-conditions"
                className="hover:text-pink-500 transition"
              >
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="/licence" className="hover:text-pink-500 transition">
                License & Copyright
              </Link>
            </li>
          </ul>
        </div>

        {/* COL 4 */}
        <div>
          <h3 className="text-[22px] font-bold text-[#0b1b3f] mb-6">
            Latest Blogs
          </h3>

          <div className="space-y-6">
            {/* BLOG */}
            <div className="flex gap-4">
              <img
                src="/blog1.jpg"
                className="w-[70px] h-[70px] rounded-xl object-cover"
                alt=""
              />
              <div>
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                  <Clock size={14} />
                  April 15, 2020
                </div>
                <p className="text-[#0b1b3f] font-semibold leading-snug hover:text-pink-500 cursor-pointer">
                  We Provide you Best & Creative Consulting Service
                </p>
              </div>
            </div>

            {/* BLOG */}
            <div className="flex gap-4">
              <img
                src="/blog1.jpg"
                className="w-[70px] h-[70px] rounded-xl object-cover"
                alt=""
              />
              <div>
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                  <Clock size={14} />
                  April 15, 2020
                </div>
                <p className="text-[#0b1b3f] font-semibold leading-snug hover:text-pink-500 cursor-pointer">
                  We Provide you Best & Creative Consulting Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BADGES */}
      <div className="border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-[26px] font-bold text-[#0b1b3f] mb-3">
              Top App Development Companies
            </h3>
            <p className="text-slate-600 max-w-md">
              News letter dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt. Enter your email
            </p>
          </div>

          <div className="flex flex-wrap gap-8 lg:justify-end">
            <img src="/b1.png" className="h-20 object-contain" />
            <img src="/b2.png" className="h-20 object-contain" />
            <img src="/b3.png" className="h-20 object-contain" />
            <img src="/b4.png" className="h-20 object-contain" />
          </div>
        </div>
      </div>
    </footer>
  );
}
