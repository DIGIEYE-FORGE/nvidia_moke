/* eslint-disable @next/next/no-img-element */
import { CustomLink } from "@/app/components/custom-link";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const blogData = [
  {
    image:
      "https://www.nvidia.com/en-us/industries/home/_jcr_content/root/responsivegrid/nv_container_4363795/nv_tabs/item_1670486346483/nv_container/nv_teaser_copy_68232.coreimg.100.410.jpeg/1724862269993/industries-resources-blog-accelerated-processing-1920x1080.jpeg",
    title:
      "Why Accelerated Data Processing Is Crucial for AI Innovation in Every Industry",
    description:
      "AI is supercharging innovation with machine-powered computation, and it’s all powered by data. Discover how accelerated data processing shapes AI advancements across industries.",
    url: "blogs/industries",
  },
  {
    image:
      "https://www.nvidia.com/en-us/industries/home/_jcr_content/root/responsivegrid/nv_container_4363795/nv_tabs/item_1670486346483/nv_container/nv_teaser_copy_68232_683973628.coreimg.100.410.jpeg/1724862270031/industries-resources-blog-productivity.jpeg",
    title: "Generative AI Opens New Era of Efficiency Across Industries",
    description:
      "Generative AI is impacting every industry today, from renewable energy forecasting and drug discovery to fraud prevention and wildfire detection. Understand what businesses need to put generative AI into practice to increase productivity, automate tasks, and unlock new opportunities.",
    url: "blogs/industries",
  },
  {
    image:
      "https://www.nvidia.com/en-us/industries/home/_jcr_content/root/responsivegrid/nv_container_4363795/nv_tabs/item_1670486346483/nv_container/nv_teaser_copy_68232_372899067.coreimg.100.410.jpeg/1724862270069/industries-resources-blog-speech-ai.jpeg",
    title: "How Industries Are Meeting Consumer Expectations With Speech AI",
    description:
      "Whether powering self-serve banking in the financial services industry, enabling food kiosk avatars in restaurants, transcribing clinical notes in healthcare facilities, or streamlining bill pay for utility companies, speech AI is the perfect tool to help businesses meet customer expectations.",
    url: "blogs/industries",
  },
  {
    image:
      "https://www.nvidia.com/en-us/industries/home/_jcr_content/root/responsivegrid/nv_container_4363795/nv_tabs/item_1670486346483/nv_container_copy/nv_teaser_copy.coreimg.100.410.jpeg/1724862270193/industries-resources-blog-cybersecurity.jpeg",
    title:
      "How AI-Based Cybersecurity Is Helping Industries Get Back to Business",
    description:
      "Industries today are facing unprecedented threats. AI-powered cybersecurity is the most reliable path to maintain trust and secure enterprise operations.",
    url: "blogs/industries",
  },
  {
    image:
      "https://www.nvidia.com/en-us/industries/home/_jcr_content/root/responsivegrid/nv_container_4363795/nv_tabs/item_1670486346483/nv_container_copy/nv_teaser_copy_copy.coreimg.100.410.jpeg/1724862270374/energy-efficiency-computing-ai.jpeg",
    title:
      "How Energy-Efficient Computing for AI Is Propelling Innovation and Savings Across Industries",
    description:
      "Whether the aim is to reduce operational costs or mitigate carbon footprints, industry leaders are increasingly turning to accelerated computing and AI as the tools of choice for energy efficiency.",
    url: "blogs/industries",
  },
];

export function Blogs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap justify-center gap-6"
    >
      {blogData.map((blog, index) => (
        <Card
          key={index}
          className="flex w-96 flex-col overflow-hidden shadow-xl transition-shadow duration-300 hover:shadow-2xl"
        >
          <img
            className="aspect-video w-full object-cover"
            src={blog.image}
            alt=""
          />
          <div className="flex h-1 flex-1 flex-col gap-6 p-6">
            <h3 className="text-xl font-bold">{blog.title}</h3>
            <p>{blog.description}</p>
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
