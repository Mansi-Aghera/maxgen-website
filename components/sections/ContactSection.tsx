 
// "use client";
 
// import { motion } from "framer-motion";
 
// const fadeLeft = {
//   hidden: { opacity: 0, x: -50 },
//   show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
// };
 
// const fadeRight = {
//   hidden: { opacity: 0, x: 50 },
//   show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
// };
 
// const cardVariant = {
//   hidden: { opacity: 0, y: 30 },
//   show: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15, duration: 0.5 },
//   }),
// };
 
// export default function ContactSection() {
//   return (
//     <section className="py-16 sm:py-20 bg-[#f7f7fb] ">
// <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[50%_35%] justify-around gap-y-12 items-start">
 
//         {/* LEFT FORM */}
//         <motion.div
//           variants={fadeLeft}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//         >
//           <p className="text-pink-500 uppercase tracking-widest text-sm mb-4">
//             Contact Now
//           </p>
 
//           <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1b3f] mb-4 leading-snug">
//             Have Question? Write a Message
//           </h2>
 
//           <p className="text-gray-500 mb-10">
//             We will catch you as early as we receive the message
//           </p>
 
//           <form className="space-y-7">
 
//             <div className="grid sm:grid-cols-2 gap-8">
//               <input className="inputStyle" placeholder="Enter name" />
//               <input className="inputStyle" placeholder="Enter email" />
//             </div>
 
//             <div className="grid sm:grid-cols-2 gap-8">
//               <input className="inputStyle" placeholder="Enter mobile" />
//               <select className="inputStyle">
//                 <option>Select Requirement</option>
//                 <option>Web Design</option>
//                 <option>Web Development</option>
//                 <option>SEO</option>
//               </select>
//             </div>
 
//             <textarea
//               rows={4}
//               placeholder="Enter your message"
//               className="inputStyle resize-none"
//             />
 
//             <button className="submitBtn">Submit</button>
 
//           </form>
//         </motion.div>
 
//         {/* RIGHT CARDS (SMALLER NOW) */}
//         <motion.div
//           variants={fadeRight}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="space-y-5"
//         >
 
//           {[
//             {
//               title: "Phone:",
//               text: "Assistance hours: Monday – Friday, 9 am to 5 pm",
//               value: "(+91) 0000 000 000",
//               bg: "bg-[#efe3db]",
//               icon: "📞",
//             },
//             {
//               title: "Email:",
//               text: "Our support team will get back to in 24-h during standard business hours.",
//               value: "info@businessname.com",
//               bg: "bg-[#f2dede]",
//               icon: "✉️",
//             },
//             {
//               title: "Skype:",
//               text: "We Are Online: Monday – Friday, 9 am to 5 pm",
//               value: "niwax.company",
//               bg: "bg-[#dceff1]",
//               icon: "💬",
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               custom={i}
//               variants={cardVariant}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//               className={`p-5 sm:p-6 rounded-xl ${item.bg}`}
//             >
//               <h4 className="font-semibold text-[#0b1b3f] mb-1 text-sm sm:text-base flex items-center gap-2">
//                 {item.icon} {item.title}
//               </h4>
 
//               <p className="text-gray-600 text-xs sm:text-sm mb-1">
//                 {item.text}
//               </p>
 
//               <p className="text-base sm:text-lg font-semibold text-[#0b1b3f]">
//                 {item.value}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
 
//       </div>
//     </section>
//   );
// }
 
 

"use client";

import { motion } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function ContactSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#f7f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[50%_35%] justify-around gap-y-12 items-start">
        
        {/* LEFT FORM */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="text-pink-500 uppercase tracking-widest text-sm mb-4">
            Contact Now
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1b3f] mb-4 leading-snug">
            Have Question? Write a Message
          </h2>

          <p className="text-gray-500 mb-10">
            We will contact you shortly after receiving your message
          </p>

          <form className="space-y-7">
            
            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-8">
              <input
                name="full_name"
                required
                placeholder="Full Name *"
                className="inputStyle"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address *"
                className="inputStyle"
              />
            </div>

            {/* Phone + Company */}
            <div className="grid sm:grid-cols-2 gap-8">
              <input
                name="phone"
                required
                placeholder="Phone Number *"
                className="inputStyle"
              />
              <input
                name="company_name"
                placeholder="Company Name"
                className="inputStyle"
              />
            </div>

            {/* Inquiry Type + Subject */}
            <div className="grid sm:grid-cols-2 gap-8">
              <select
                name="inquiry_type"
                defaultValue="general"
                className="inputStyle"
              >
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="sales">Sales</option>
                <option value="other">Other</option>
              </select>

              <input
                name="subject"
                placeholder="Subject"
                className="inputStyle"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your Message *"
              className="inputStyle resize-none"
            />

            <button type="submit" className="submitBtn">
              Submit Message
            </button>
          </form>
        </motion.div>

        {/* RIGHT INFO CARDS */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-5"
        >
          {[
            {
              title: "Phone:",
              text: "Monday – Friday, 9 am to 6 pm",
              value: "+91 9099039845",
              bg: "bg-[#efe3db]",
              icon: "📞",
            },
            {
              title: "Email:",
              text: "We reply within 24 hours",
              value: "ahmedabad@maxgentechnologies.com",
              bg: "bg-[#f2dede]",
              icon: "✉️",
            },
            {
              title: "Address:",
              text: "Visit our office",
              value:
                "Abhijeet 3, 603, Netaji Rd, Mithakhali, Ellisbridge, Ahmedabad",
              bg: "bg-[#dceff1]",
              icon: "📍",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`p-5 sm:p-6 rounded-xl ${item.bg}`}
            >
              <h4 className="font-semibold text-[#0b1b3f] mb-1 flex items-center gap-2">
                {item.icon} {item.title}
              </h4>

              <p className="text-gray-600 text-sm mb-1">{item.text}</p>

              <p className="text-base font-semibold text-[#0b1b3f]">
                {item.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
