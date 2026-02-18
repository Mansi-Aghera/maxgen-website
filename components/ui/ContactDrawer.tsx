// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { X } from "lucide-react";
// import { useState } from "react";

// type Props = {
//   open: boolean;
//   onClose: () => void;
// };

// export default function ContactDrawer({ open, onClose }: Props) {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     requirement: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   return (
//     <AnimatePresence>
//       {open && (
//         <>
//           {/* OVERLAY */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.45 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="fixed inset-0 bg-black z-40"
//           />

//           {/* DRAWER */}
//           <motion.aside
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 0.4, ease: "easeOut" }}
//             className="
//               fixed right-0 top-0 h-full z-50
//               w-full sm:w-[420px] lg:w-[480px]
//               bg-white shadow-2xl
//               flex flex-col
//             "
//           >
//             {/* HEADER */}
//             <div className="flex items-center justify-between px-6 py-5 border-b">
//               <h3 className="text-xl font-bold text-[#0b1b3f]">
//                 Have Question? Write a Message
//               </h3>

//               <button
//                 onClick={onClose}
//                 className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100"
//               >
//                 <X size={18} />
//               </button>
//             </div>

//             {/* FORM */}
//             <div className="flex-1 overflow-y-auto px-6 py-6">
//               <p className="text-slate-500 text-sm mb-6">
//                 We will catch you as early as we receive the message
//               </p>

//               <div className="grid gap-5">
//                 <input
//                   name="name"
//                   placeholder="Enter name"
//                   value={form.name}
//                   onChange={handleChange}
//                   className="niwax-input"
//                 />

//                 <input
//                   name="email"
//                   placeholder="Enter email"
//                   value={form.email}
//                   onChange={handleChange}
//                   className="niwax-input"
//                 />

//                 <input
//                   name="mobile"
//                   placeholder="Enter mobile"
//                   value={form.mobile}
//                   onChange={handleChange}
//                   className="niwax-input"
//                 />

//                 <select
//                   name="requirement"
//                   value={form.requirement}
//                   onChange={handleChange}
//                   className="niwax-input"
//                 >
//                   <option value="">Select Requirement</option>
//                   <option>Website</option>
//                   <option>Mobile App</option>
//                   <option>UI/UX</option>
//                   <option>Marketing</option>
//                 </select>

//                 <textarea
//                   name="message"
//                   placeholder="Enter your message"
//                   rows={4}
//                   value={form.message}
//                   onChange={handleChange}
//                   className="niwax-input resize-none"
//                 />
//               </div>
//             </div>

//             {/* FOOTER BUTTON */}
//             <div className="p-6 border-t">
//               <button className="niwax-submit w-full">
//                 Submit
//               </button>
//             </div>
//           </motion.aside>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }


"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

type FormState = {
  full_name: string;
  email: string;
  phone: string;
  company_name: string;
  website: string;
  service_type: string;
  project_title: string;
  project_description: string;
  budget_range: string;
  expected_start_date: string;
  project_duration: string;
  priority: "low" | "medium" | "high";
  file_attachment: File | null;
};

export default function ContactDrawer({ open, onClose }: Props) {
  const [form, setForm] = useState<FormState>({
    full_name: "",
    email: "",
    phone: "",
    company_name: "",
    website: "",
    service_type: "",
    project_title: "",
    project_description: "",
    budget_range: "",
    expected_start_date: "",
    project_duration: "",
    priority: "medium",
    file_attachment: null,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (name === "file_attachment") {
      setForm({ ...form, file_attachment: files?.[0] || null });
    } else {
      setForm({ ...form, [name]: value });
    }
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
            className="fixed right-0 top-0 h-full z-50 w-full sm:w-[420px] lg:w-[480px] bg-white shadow-2xl flex flex-col"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-5 border-b">
              <h3 className="text-xl font-bold text-[#0b1b3f]">
                Start Your Project
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
                Tell us about your project requirements
              </p>

              <div className="grid gap-5">
                <input
                  name="full_name"
                  required
                  placeholder="Full Name *"
                  value={form.full_name}
                  onChange={handleChange}
                  className="niwax-input"
                />

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={form.email}
                  onChange={handleChange}
                  className="niwax-input"
                />

                <input
                  name="phone"
                  required
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={handleChange}
                  className="niwax-input"
                />

                <input
                  name="company_name"
                  placeholder="Company Name"
                  value={form.company_name}
                  onChange={handleChange}
                  className="niwax-input"
                />

                <input
                  name="website"
                  placeholder="Website"
                  value={form.website}
                  onChange={handleChange}
                  className="niwax-input"
                />

                <select
                  name="service_type"
                  required
                  value={form.service_type}
                  onChange={handleChange}
                  className="niwax-input"
                >
                  <option value="">Select Service *</option>
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>Software & Enterprise</option>
                  <option>Design</option>
                  <option>Maintenance</option>
                </select>

                <input
                  name="project_title"
                  placeholder="Project Title"
                  value={form.project_title}
                  onChange={handleChange}
                  className="niwax-input"
                />

                <textarea
                  name="project_description"
                  required
                  rows={4}
                  placeholder="Project Description *"
                  value={form.project_description}
                  onChange={handleChange}
                  className="niwax-input resize-none"
                />

                <input
                  name="budget_range"
                  placeholder="Budget Range"
                  value={form.budget_range}
                  onChange={handleChange}
                  className="niwax-input"
                />

                <input
                  type="date"
                  name="expected_start_date"
                  value={form.expected_start_date}
                  onChange={handleChange}
                  className="niwax-input"
                />

                <input
                  name="project_duration"
                  placeholder="Project Duration"
                  value={form.project_duration}
                  onChange={handleChange}
                  className="niwax-input"
                />

                <select
                  name="priority"
                  value={form.priority}
                  onChange={handleChange}
                  className="niwax-input"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>

                <input
                  type="file"
                  name="file_attachment"
                  onChange={handleChange}
                  className="niwax-input"
                />
              </div>
            </div>

            {/* FOOTER */}
            <div className="p-6 border-t">
              <button className="niwax-submit w-full">
                Submit Project Inquiry
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
