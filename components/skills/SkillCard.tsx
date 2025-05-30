import React from "react";

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  return (
    <div className="bg-transparent mr-4 shadow-none rounded-lg hover:border hover:border-indigo-400 transition-all duration-300 ease-in-out">
      <div className="grid justify-center text-center p-4 ">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-800 p-2.5 text-white shadow">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
        <h5 className="mb-2 text-2xl font-semibold text-teal-400">{title}</h5>
        <p className="px-8 font-normal text-zinc-100">{children}</p>
      </div>
    </div>
  );
}

export default SkillCard;

// import { motion } from "framer-motion";
// // ...existing code...

// export function SkillCard({ icon: Icon, title, children }: any) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       viewport={{ once: true, amount: 0.2 }}
//       className="rounded-xl bg-zinc-800 p-6 shadow-lg"
//     >
//       {/* ...existing card content... */}
//       <Icon className="h-10 w-10 text-teal-400 mb-4" />
//       <h2 className="text-xl font-bold mb-2">{title}</h2>
//       <p className="text-zinc-200">{children}</p>
//     </motion.div>
//   );
// }

// ...existing code...
// {SKILLS.map((props, idx) => (
//   <SkillCard key={idx} {...props} delay={idx * 0.15} />
// ))}
// ...existing code...

// export function SkillCard({ icon: Icon, title, children, delay = 0 }: any) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut", delay }}
//       viewport={{ once: true, amount: 0.2 }}
//       className="rounded-xl bg-zinc-800 p-6 shadow-lg"
//     >
//       {/* ...existing card content... */}
//     </motion.div>
//   );
// }