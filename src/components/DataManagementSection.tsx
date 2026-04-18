import { motion } from "framer-motion";
import { Folder, FileText, Image as ImageIcon, Video, Music } from "lucide-react";

interface FolderItemProps {
  name: string;
  count: number;
  type: string;
  color: string;
}

const FolderCard = ({ name, count, type, color }: FolderItemProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative"
    >
      {/* Folder Tab Effect */}
      <div className="absolute -top-3 left-4 w-16 h-4 glass-panel rounded-t-lg border-b-0 z-0" />
      
      <div className="relative z-10 glass-panel p-6 rounded-xl overflow-hidden shimmer group-hover:border-primary/50 transition-colors">
        {/* Glossy Overlay */}
        <div className="absolute inset-0 glossy-gradient opacity-30 pointer-events-none" />
        
        <div className="flex flex-col items-start gap-4">
          <div className={`p-3 rounded-lg bg-${color}/10 text-${color}`}>
            <Folder className="w-8 h-8 fill-current opacity-80" />
          </div>
          
          <div>
            <h3 className="text-lg font-bold tracking-tight mb-1">{name}</h3>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              {count} {type} • DATA_SECURE
            </p>
          </div>
          
          <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "70%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-primary" 
            />
          </div>
        </div>

        {/* Tactical HUD Details */}
        <div className="absolute top-2 right-2 font-mono text-[8px] opacity-30 select-none">
          SECURE_NODE_0{Math.floor(Math.random() * 9)}
        </div>
      </div>
    </motion.div>
  );
};

const DataManagementSection = () => {
  const folders = [
    { name: "Dubai Projects", count: 24, type: "assets", color: "primary" },
    { name: "School Events", count: 156, type: "images", color: "primary" },
    { name: "Corporate Identity", count: 42, type: "files", color: "primary" },
    { name: "Brand Guidelines", count: 8, type: "pdfs", color: "primary" },
    { name: "Media Production", count: 12, type: "videos", color: "primary" },
    { name: "Client Archive", count: 88, type: "records", color: "primary" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block px-3 py-1 mb-4 border border-primary/20 bg-primary/5 rounded-sm"
            >
              <span className="text-primary font-mono text-[10px] font-bold tracking-widest uppercase">
                Asset Vault
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Organized <span className="text-gradient-gold">Data</span> Management.
            </h2>
            <p className="text-muted-foreground border-l-2 border-primary/30 pl-6">
              Our advanced digital filing system ensures every creative spark is archived with tactical precision, ready for instant deployment.
            </p>
          </div>
          
          <div className="hidden md:block font-mono text-[10px] text-primary/40 text-right">
            [ COORDINATES: 25.2048° N, 55.2708° E ]<br />
            ARCHIVE_VERSION: 2026.4.0
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {folders.map((folder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <FolderCard {...folder} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataManagementSection;
