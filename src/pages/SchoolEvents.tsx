import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TacticalGrid from "@/components/TacticalGrid";
import { motion } from "framer-motion";
import { useEffect } from "react";

const schoolImages = [
  {
    title: "Stage Performance",
    category: "Cultural Event",
    image: "/school-events/CK%20VIDYALAYA%20SCHOOL%20EVENT/11.png",
    size: "large"
  },
  {
    title: "Student Activity",
    category: "Classroom",
    image: "/school-events/CK%20VIDYALAYA%20SCHOOL%20EVENT/12.png",
    size: "small"
  },
  {
    title: "Group Dance",
    category: "Performance",
    image: "/school-events/CK%20VIDYALAYA%20SCHOOL%20EVENT/13.png",
    size: "small"
  },
  {
    title: "Annual Day",
    category: "Celebration",
    image: "/school-events/CK%20VIDYALAYA%20SCHOOL%20EVENT/14.png",
    size: "large"
  },
  {
    title: "Awards Ceremony",
    category: "Achievement",
    image: "/school-events/CK%20VIDYALAYA%20SCHOOL%20EVENT/15.png",
    size: "small"
  },
  {
    title: "Sports Meet",
    category: "Athletics",
    image: "/school-events/CK%20VIDYALAYA%20SCHOOL%20EVENT/16.png",
    size: "small"
  },
  {
    title: "Choir Performance",
    category: "Music",
    image: "/school-events/CK%20VIDYALAYA%20SCHOOL%20EVENT/17.png",
    size: "large"
  },
  {
    title: "Art Exhibition",
    category: "Creative",
    image: "/school-events/CK%20VIDYALAYA%20SCHOOL%20EVENT/18.png",
    size: "small"
  },
  {
    title: "Science Fair",
    category: "Academic",
    image: "/school-events/CK%20VIDYALAYA%20SCHOOL%20EVENT/19.png",
    size: "small"
  },
  {
    title: "Graduation",
    category: "Ceremony",
    image: "/school-events/CK%20VIDYALAYA%20SCHOOL%20EVENT/20.png",
    size: "large"
  }
];

const SchoolEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <TacticalGrid />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-4 mb-8 relative px-6 py-2"
          >
            <div className="absolute inset-0 border border-primary/20 bg-primary/5 rounded-sm" />
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary" />
            <span className="text-primary font-mono text-[10px] font-bold tracking-[0.5em] uppercase relative z-10">
              Exclusive Archive
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-4xl md:text-7xl font-bold mb-6"
          >
            CK Vidyalaya <span className="text-gradient-gold italic">Events.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg mb-12"
          >
            A curated visual album showcasing the vibrant energy, talent, and memorable moments from CK Vidyalaya school events.
          </motion.p>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="px-6 pb-24 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schoolImages.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer ${
                  project.size === "large" ? "md:col-span-2" : "col-span-1"
                }`}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <div className="relative z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] uppercase tracking-widest border border-primary/40 backdrop-blur-sm mb-4 inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.category}
                    </span>
                    <h3 className="text-white text-3xl font-bold font-display italic group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Tactical Brackets */}
                  <div className="absolute inset-4 pointer-events-none">
                    <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/60 dark:border-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/60 dark:border-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SchoolEvents;
