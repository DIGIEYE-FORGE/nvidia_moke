import { CustomLink } from "@/app/components/custom-link";
import { motion } from "framer-motion";

export function Videos() {
  return (
    <div className="grid h-[20rem] grid-cols-2 gap-container px-container">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3 } }}
        transition={{ duration: 1 }}
        src="https://www.nvidia.com/content/dam/en-zz/Solutions/industries/home/industries-resources-video-banner-background-image-spec2-bb770_550-d.jpg"
        alt=""
        className="absolute inset-0 -z-10 w-full object-cover"
      />
      <div></div>
      <div className="flex flex-col justify-center gap-4">
        <h5>Featured Video</h5>
        <h4 className="text-3xl font-bold">I Am AI</h4>
        <p className="max-w-md text-sm font-light">
          AI is powering change in every industry across the globe. From speech
          recognition and recommender systems to medical imaging and improved
          supply chain management, AI is giving enterprises the compute power,
          tools, and algorithms their teams need to do their life’s work.
        </p>
        <CustomLink href="/industries" name="Watch Video (3:31)" />
      </div>
    </div>
  );
}
