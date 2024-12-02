/* eslint-disable @next/next/no-img-element */
import { CustomLink } from "@/app/components/custom-link";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const data = [
  {
    image:
      "https://www.nvidia.com/en-us/industries/home/_jcr_content/root/responsivegrid/nv_container_4363795/nv_tabs/item_1670486348813/nv_container/nv_teaser_copy_68232.coreimg.100.410.jpeg/1724862270569/state-of-ai-financial-services.jpeg",
    title: "State of AI in Financial Services: 2024 Trends",
    description:
      "Dive into the data compiled from a survey of over 400 financial services professionals—including executives, data scientists, developers, engineers, and IT specialists—from around the world. This year’s results reveal the trends, challenges, and opportunities that define the state of AI in financial services in 2024.",
    url: "blogs/industries",
  },
  {
    image:
      "https://www.nvidia.com/en-us/industries/home/_jcr_content/root/responsivegrid/nv_container_4363795/nv_tabs/item_1670486348813/nv_container/nv_teaser_copy_68232_494693843.coreimg.100.410.jpeg/1724862270605/state-of-ai-telecommunications.jpeg",
    title: "State of AI in Telecommunications: 2024 Trends",
    description:
      "Dive into the data compiled from a survey of over 400 industry professionals from around the world. This year’s results explore opportunities and challenges, investments, implementation approaches, and the top AI and generative AI use cases across customer experiences, network planning, operations, and more.",
    url: "blogs/industries",
  },
  {
    image:
      "https://www.nvidia.com/en-us/industries/home/_jcr_content/root/responsivegrid/nv_container_4363795/nv_tabs/item_1670486348813/nv_container/nv_teaser_copy_68232_1290230267.coreimg.100.410.jpeg/1724862270643/state-of-ai-retail-cpg.jpeg",
    title: "State of AI in Retail and CPG: 2024 Trends",
    description:
      "Dive into the data compiled from a survey of over 400 professionals—including executives, data scientists, developers, engineers, and IT specialists—from around the world. This year’s results reveal the trends, challenges, and opportunities that define the state of AI in retail and consumer packaged goods (CPG) in 2024.",
    url: "blogs/industries",
  },
];

export function Reports() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap justify-center gap-6"
    >
      {data.map((item, index) => (
        <Card
          key={index}
          className="flex w-96 flex-col overflow-hidden shadow-xl transition-shadow duration-300 hover:shadow-2xl"
        >
          <img
            className="aspect-video w-full object-cover"
            src={item.image}
            alt=""
          />
          <div className="flex h-1 flex-1 flex-col gap-6 p-6">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p>{item.description}</p>
            <CustomLink
              href="/industries"
              name="Read Ebook"
              className="mt-auto"
            />
          </div>
        </Card>
      ))}
    </motion.div>
  );
}
