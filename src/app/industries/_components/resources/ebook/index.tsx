/* eslint-disable @next/next/no-img-element */
import { CustomLink } from "@/app/components/custom-link";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export function Ebook() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center"
    >
      <Card className="w-96 overflow-hidden shadow-xl transition-shadow duration-300 hover:shadow-2xl">
        <img
          className="aspect-video w-full object-cover"
          src="https://www.nvidia.com/en-us/industries/home/_jcr_content/root/responsivegrid/nv_container_4363795/nv_tabs/item_1706505618125/nv_container_copy/nv_teaser_copy.coreimg.100.630.jpeg/1724862269709/industries-overview-ebook-1920x1080.jpeg"
          alt=""
        />
        <div className="flex flex-col gap-6 p-6">
          <h3 className="text-xl font-bold">
            How Businesses Are Harnessing AI to Drive Value
          </h3>
          <p>
            Learn how AI is powering new capabilities in the public sector,
            financial services, healthcare and life sciences,
            telecommunications, and retail industries.
          </p>
          <CustomLink href="/industries" name="Read Ebook" />
        </div>
      </Card>
    </motion.div>
  );
}
