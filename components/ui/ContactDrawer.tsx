"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ContactDrawer({ open, onClose }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    requirement: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40"
          />

          {/* DRAWER */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="
              fixed right-0 top-0 h-full z-50
              w-full sm:w-[420px] lg:w-[480px]
              bg-white shadow-2xl
              flex flex-col
            "
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-5 border-b">
              <h3 className="text-xl font-bold text-[#0b1b3f]">
                Have Question? Write a Message
              </h3>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100"
              >
                <X size={18} />
              </button>
            </div>

            {/* FORM */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <p className="text-slate-500 text-sm mb-6">
                We will catch you as early as we receive the message
              </p>

              <div className="grid gap-5">
                <input
                  name="name"
                  placeholder="Enter name"
                  value={form.name}
                  onChange={handleChange}
                  className="niwax-input"
                />

                <input
                  name="email"
                  placeholder="Enter email"
                  value={form.email}
                  onChange={handleChange}
                  className="niwax-input"
                />

                <input
                  name="mobile"
                  placeholder="Enter mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  className="niwax-input"
                />

                <select
                  name="requirement"
                  value={form.requirement}
                  onChange={handleChange}
                  className="niwax-input"
                >
                  <option value="">Select Requirement</option>
                  <option>Website</option>
                  <option>Mobile App</option>
                  <option>UI/UX</option>
                  <option>Marketing</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="niwax-input resize-none"
                />
              </div>
            </div>

            {/* FOOTER BUTTON */}
            <div className="p-6 border-t">
              <button className="niwax-submit w-full">
                Submit
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
