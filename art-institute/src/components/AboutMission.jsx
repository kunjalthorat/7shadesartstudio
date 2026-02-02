import { motion } from "framer-motion"

const LazyImage = ({ src, alt, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      {...props}
    />
  )
}

export default function AboutMission() {
  return (
    <main
      className="bg-white text-black min-h-screen px-10 py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/src/assets/background/green.png)" }}
    >

      {/* MISSION & VISION WITH IMAGE */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <LazyImage
            src="/src/assets/group/Group 1.jpeg"
            alt="Art Studio"
            className="w-full h-[380px] object-cover rounded-2xl"
          />
        </motion.div>


        {/* Mission & Vision */}
        <div className="space-y-8">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 250, damping: 18 }}
            className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#1F5C8C]"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#1F5C8C]">Our Mission</h2>
            <p className="text-black/75 leading-relaxed text-sm font-medium">
              Our mission is to inspire creativity, build artistic skills, and boost self-confidence
              through art. We focus not only on techniques, but also on encouraging self-expression,
              originality, and imagination.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 250, damping: 18 }}
            className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#1F5C8C]"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#1F5C8C]">Our Vision</h2>
            <p className="text-black/75 leading-relaxed text-sm font-medium">
              We aim to create a community where art is not just a subject, but a joyful journey.
              Through creativity, we help students express emotions, improve focus, and develop
              a lifelong love for art.
            </p>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
