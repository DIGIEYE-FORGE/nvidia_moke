export type MenuItem = {
  name: string;
  href?: string;
  items?: MenuItem[];
};

export const menuItems: MenuItem[] = [
  {
    name: "Products",
    items: [
      {
        name: "Hardware",
        items: [
          {
            name: "Gaming and Creating",
            items: [
              {
                name: "GeForce Graphics Cards",
                href: "/products/hardware/gaming-and-creating/geforce-graphics-cards",
              },
              {
                name: "Laptops",
                href: "/products/hardware/gaming-and-creating/laptops",
              },
              {
                name: "G-SYNC Monitors",
                href: "/products/hardware/gaming-and-creating/g-sync-monitors",
              },
              {
                name: "Studio",
                href: "/products/hardware/gaming-and-creating/studio",
              },
              {
                name: "SHIELD TV",
                href: "/products/hardware/gaming-and-creating/shield-tv",
              },
              {
                name: "RTX AI PCs",
                href: "/products/hardware/gaming-and-creating/rtx-ai-pcs",
              },
            ],
          },
          {
            name: "Laptops and Workstations",
            items: [
              {
                name: "Laptops",
                href: "/products/hardware/laptops-and-workstations/laptops",
              },
              {
                name: "NVIDIA RTX in Desktop Workstations",
                href: "/products/hardware/laptops-and-workstations/nvidia-rtx-in-desktop-workstations",
              },
              {
                name: "NVIDIA RTX in Professional Laptops",
                href: "/products/hardware/laptops-and-workstations/nvidia-rtx-in-professional-laptops",
              },
              {
                name: "NVIDIA RTX-Powered AI Workstations",
                href: "/products/hardware/laptops-and-workstations/nvidia-rtx-powered-ai-workstations",
              },
            ],
          },
          {
            name: "Cloud and Data Center",
            items: [
              {
                name: "Overview",
                href: "/products/hardware/cloud-and-data-center/overview",
              },
              {
                name: "Grace CPU",
                href: "/products/hardware/cloud-and-data-center/grace-cpu",
              },
              {
                name: "DGX Platform",
                href: "/products/hardware/cloud-and-data-center/dgx-platform",
              },
              {
                name: "EGX Platform",
                href: "/products/hardware/cloud-and-data-center/egx-platform",
              },
              {
                name: "IGX Platform",
                href: "/products/hardware/cloud-and-data-center/igx-platform",
              },
              {
                name: "HGX Platform",
                href: "/products/hardware/cloud-and-data-center/hgx-platform",
              },
              {
                name: "NVIDIA MGX",
                href: "/products/hardware/cloud-and-data-center/nvidia-mgx",
              },
              {
                name: "NVIDIA OVX",
                href: "/products/hardware/cloud-and-data-center/nvidia-ovx",
              },
              {
                name: "DRIVE Sim",
                href: "/products/hardware/cloud-and-data-center/drive-sim",
              },
            ],
          },
          {
            name: "Networking",
            items: [
              {
                name: "Overview",
                href: "/products/hardware/networking/overview",
              },
              {
                name: "DPUs and SuperNICs",
                href: "/products/hardware/networking/dpus-and-supernics",
              },
              {
                name: "Ethernet",
                href: "/products/hardware/networking/ethernet",
              },
              {
                name: "InfiniBand",
                href: "/products/hardware/networking/infiniband",
              },
            ],
          },
          {
            name: "GPUs",
            items: [
              {
                name: "GeForce",
                href: "/products/hardware/gpus/geforce",
              },
              {
                name: "NVIDIA RTX / Quadro",
                href: "/products/hardware/gpus/nvidia-rtx-quadro",
              },
              {
                name: "Data Center",
                href: "/products/hardware/gpus/data-center",
              },
            ],
          },
          {
            name: "Embedded Systems",
            items: [
              {
                name: "Jetson",
                href: "/products/hardware/embedded-systems/jetson",
              },
              {
                name: "DRIVE AGX",
                href: "/products/hardware/embedded-systems/drive-agx",
              },
              {
                name: "Clara AGX",
                href: "/products/hardware/embedded-systems/clara-agx",
              },
            ],
          },
        ],
      },
      {
        name: "Software",
        items: [
          {
            name: "Application Frameworks",
            items: [
              {
                name: "AI Inference - Triton",
                href: "/products/software/application-frameworks/ai-inference-triton",
              },
              {
                name: "Automotive - DRIVE",
                href: "/products/software/application-frameworks/automotive-drive",
              },
              {
                name: "Cloud-AI Video Streaming - Maxine",
                href: "/products/software/application-frameworks/cloud-ai-video-streaming-maxine",
              },
              {
                name: "Computational Lithography - cuLitho",
                href: "/products/software/application-frameworks/computational-lithography-culitho",
              },
              {
                name: "Cybersecurity - Morpheus",
                href: "/products/software/application-frameworks/cybersecurity-morpheus",
              },
              {
                name: "Data Analytics - RAPIDS",
                href: "/products/software/application-frameworks/data-analytics-rapids",
              },
              {
                name: "Generative AI - NeMo",
                href: "/products/software/application-frameworks/generative-ai-nemo",
              },
              {
                name: "Healthcare - Clara",
                href: "/products/software/application-frameworks/healthcare-clara",
              },
              {
                name: "High-Performance Computing",
                href: "/products/software/application-frameworks/high-performance-computing",
              },
              {
                name: "Intelligent Video Analytics - Metropolis",
                href: "/products/software/application-frameworks/intelligent-video-analytics-metropolis",
              },
              {
                name: "Logistics and Route Optimization - cuOpt",
                href: "/products/software/application-frameworks/logistics-and-route-optimization-cuopt",
              },
              {
                name: "Metaverse Applications - Omniverse",
                href: "/products/software/application-frameworks/metaverse-applications-omniverse",
              },
              {
                name: "Recommender Systems - Merlin",
                href: "/products/software/application-frameworks/recommender-systems-merlin",
              },
              {
                name: "Robotics - Isaac",
                href: "/products/software/application-frameworks/robotics-isaac",
              },
              {
                name: "Speech AI - Riva",
                href: "/products/software/application-frameworks/speech-ai-riva",
              },
              {
                name: "Telecommunications - Aerial",
                href: "/products/software/application-frameworks/telecommunications-aerial",
              },
            ],
          },
          {
            name: "Apps and Tools",
            items: [
              {
                name: "Application Catalog",
                href: "/products/software/apps-and-tools/application-catalog",
              },
              {
                name: "NGC Catalog",
                href: "/products/software/apps-and-tools/ngc-catalog",
              },
              {
                name: "NVIDIA NGC",
                href: "/products/software/apps-and-tools/nvidia-ngc",
              },
              {
                name: "3D Workflows - Omniverse",
                href: "/products/software/apps-and-tools/3d-workflows-omniverse",
              },
              {
                name: "Data Center",
                href: "/products/software/apps-and-tools/data-center",
              },
              {
                name: "GPU Monitoring",
                href: "/products/software/apps-and-tools/gpu-monitoring",
              },
              {
                name: "NVIDIA App for Enterprise",
                href: "/products/software/apps-and-tools/nvidia-app-for-enterprise",
              },
              {
                name: "NVIDIA RTX Desktop Manager",
                href: "/products/software/apps-and-tools/nvidia-rtx-desktop-manager",
              },
              {
                name: "RTX Accelerated Creative Apps",
                href: "/products/software/apps-and-tools/rtx-accelerated-creative-apps",
              },
              {
                name: "Video Conferencing",
                href: "/products/software/apps-and-tools/video-conferencing",
              },
              {
                name: "AI Workbench",
                href: "/products/software/apps-and-tools/ai-workbench",
              },
            ],
          },
          {
            name: "Gaming and Creating",
            items: [
              {
                name: "GeForce NOW Cloud Gaming",
                href: "/products/software/gaming-and-creating/geforce-now-cloud-gaming",
              },
              {
                name: "GeForce Experience",
                href: "/products/software/gaming-and-creating/geforce-experience",
              },
              {
                name: "NVIDIA Broadcast App",
                href: "/products/software/gaming-and-creating/nvidia-broadcast-app",
              },
              {
                name: "Animation - Machinima",
                href: "/products/software/gaming-and-creating/animation-machinima",
              },
              {
                name: "Modding - RTX Remix",
                href: "/products/software/gaming-and-creating/modding-rtx-remix",
              },
              {
                name: "Studio",
                href: "/products/software/gaming-and-creating/studio",
              },
            ],
          },
          {
            name: "Infrastructure",
            items: [
              {
                name: "AI Enterprise Suite",
                href: "/products/software/infrastructure/ai-enterprise-suite",
              },
              {
                name: "Cloud Native Support",
                href: "/products/software/infrastructure/cloud-native-support",
              },
              {
                name: "Cluster Management",
                href: "/products/software/infrastructure/cluster-management",
              },
              {
                name: "IO Acceleration",
                href: "/products/software/infrastructure/io-acceleration",
              },
              {
                name: "Networking",
                href: "/products/software/infrastructure/networking",
              },
              {
                name: "Virtual GPU",
                href: "/products/software/infrastructure/virtual-gpu",
              },
            ],
          },
          {
            name: "Cloud Services",
            items: [
              {
                name: "Base Command",
                href: "/products/software/cloud-services/base-command",
              },
              {
                name: "BioNeMo",
                href: "/products/software/cloud-services/bionemo",
              },
              {
                name: "DGX Cloud",
                href: "/products/software/cloud-services/dgx-cloud",
              },
              { name: "NeMo", href: "/products/software/cloud-services/nemo" },
              {
                name: "Edify",
                href: "/products/software/cloud-services/edify",
              },
              {
                name: "Private Registry",
                href: "/products/software/cloud-services/private-registry",
              },
              {
                name: "Omniverse",
                href: "/products/software/cloud-services/omniverse",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Solutions",
    items: [
      {
        name: "Artificial Intelligence",
        items: [
          {
            name: "Overview",
            href: "/solutions/artificial-intelligence/overview",
          },
          {
            name: "AI Platform",
            href: "/solutions/artificial-intelligence/ai-platform",
          },
          {
            name: "AI Inference",
            href: "/solutions/artificial-intelligence/ai-inference",
          },
          {
            name: "AI Workflows",
            href: "/solutions/artificial-intelligence/ai-workflows",
          },
          {
            name: "Conversational AI",
            href: "/solutions/artificial-intelligence/conversational-ai",
          },
          {
            name: "Custom Models",
            href: "/solutions/artificial-intelligence/custom-models",
          },
          {
            name: "Cybersecurity",
            href: "/solutions/artificial-intelligence/cybersecurity",
          },
          {
            name: "Data Analytics",
            href: "/solutions/artificial-intelligence/data-analytics",
          },
          {
            name: "Generative AI",
            href: "/solutions/artificial-intelligence/generative-ai",
          },
          {
            name: "Machine Learning",
            href: "/solutions/artificial-intelligence/machine-learning",
          },
          {
            name: "Prediction and Forecasting",
            href: "/solutions/artificial-intelligence/prediction-and-forecasting",
          },
          {
            name: "Speech AI",
            href: "/solutions/artificial-intelligence/speech-ai",
          },
        ],
      },
      {
        name: "Data Center and Cloud Computing",
        items: [
          {
            name: "Overview",
            href: "/solutions/data-center-and-cloud-computing/overview",
          },
          {
            name: "Accelerated Computing for Enterprise IT",
            href: "/solutions/data-center-and-cloud-computing/accelerated-computing-for-enterprise-it",
          },
          {
            name: "Cloud Computing",
            href: "/solutions/data-center-and-cloud-computing/cloud-computing",
          },
          {
            name: "Colocation",
            href: "/solutions/data-center-and-cloud-computing/colocation",
          },
          {
            name: "MLOps",
            href: "/solutions/data-center-and-cloud-computing/mlops",
          },
          {
            name: "Networking",
            href: "/solutions/data-center-and-cloud-computing/networking",
          },
          {
            name: "Virtualization",
            href: "/solutions/data-center-and-cloud-computing/virtualization",
          },
        ],
      },
      {
        name: "Design and Simulation",
        items: [
          {
            name: "Overview",
            href: "/solutions/design-and-simulation/overview",
          },
          {
            name: "Digital Twin Development",
            href: "/solutions/design-and-simulation/digital-twin-development",
          },
          {
            name: "Rendering and Visualization",
            href: "/solutions/design-and-simulation/rendering-and-visualization",
          },
          {
            name: "Robotics Simulation",
            href: "/solutions/design-and-simulation/robotics-simulation",
          },
          {
            name: "Vehicle Simulation",
            href: "/solutions/design-and-simulation/vehicle-simulation",
          },
        ],
      },
      {
        name: "Robotics and Edge Computing",
        items: [
          {
            name: "Overview",
            href: "/solutions/robotics-and-edge-computing/overview",
          },
          {
            name: "Robotics",
            href: "/solutions/robotics-and-edge-computing/robotics",
          },
          {
            name: "Edge Computing",
            href: "/solutions/robotics-and-edge-computing/edge-computing",
          },
          {
            name: "Vision AI",
            href: "/solutions/robotics-and-edge-computing/vision-ai",
          },
        ],
      },
      {
        name: "High-Performance Computing",
        items: [
          {
            name: "Overview",
            href: "/solutions/high-performance-computing/overview",
          },
          {
            name: "HPC and AI",
            href: "/solutions/high-performance-computing/hpc-and-ai",
          },
          {
            name: "Scientific Visualization",
            href: "/solutions/high-performance-computing/scientific-visualization",
          },
          {
            name: "Simulation and Modeling",
            href: "/solutions/high-performance-computing/simulation-and-modeling",
          },
          {
            name: "Quantum Computing",
            href: "/solutions/high-performance-computing/quantum-computing",
          },
        ],
      },
      {
        name: "Self-Driving Vehicles",
        items: [
          {
            name: "Overview",
            href: "/solutions/self-driving-vehicles/overview",
          },
          {
            name: "In-Vehicle Computing",
            href: "/solutions/self-driving-vehicles/in-vehicle-computing",
          },
          {
            name: "Infrastructure",
            href: "/solutions/self-driving-vehicles/infrastructure",
          },
        ],
      },
    ],
  },
  {
    name: "Industries",
    items: [
      {
        name: "Industries",
        items: [
          { name: "Overview", href: "/industries/overview" },
          {
            name: "Architecture, Engineering, Construction & Operations",
            href: "/industries/architecture-engineering-construction-operations",
          },
          { name: "Automotive", href: "/industries/automotive" },
          { name: "Consumer Internet", href: "/industries/consumer-internet" },
          { name: "Energy", href: "/industries/energy" },
          {
            name: "Financial Services",
            href: "/industries/financial-services",
          },
          { name: "Gaming", href: "/industries/gaming" },
          {
            name: "Global Public Sector",
            href: "/industries/global-public-sector",
          },
          {
            name: "Healthcare and Life Sciences",
            href: "/industries/healthcare-and-life-sciences",
          },
          {
            name: "Higher Education and Research",
            href: "/industries/higher-education-and-research",
          },
          { name: "Industrial", href: "/industries/industrial" },
          { name: "Manufacturing", href: "/industries/manufacturing" },
          {
            name: "Media and Entertainment",
            href: "/industries/media-and-entertainment",
          },
          {
            name: "Restaurants and Quick-Service",
            href: "/industries/restaurants-and-quick-service",
          },
          {
            name: "Retail and Consumer Packaged Goods",
            href: "/industries/retail-and-consumer-packaged-goods",
          },
          { name: "Robotics", href: "/industries/robotics" },
          {
            name: "Smart Cities and Spaces",
            href: "/industries/smart-cities-and-spaces",
          },
          { name: "Supercomputing", href: "/industries/supercomputing" },
          {
            name: "Telecommunications",
            href: "/industries/telecommunications",
          },
          { name: "US Public Sector", href: "/industries/us-public-sector" },
        ],
      },
    ],
  },
  {
    name: "For You",
    items: [
      {
        name: "Creatives/Designers",
        href: "/for-you/creatives-designers",
      },
      {
        name: "Data Scientists",
        href: "/for-you/data-scientists",
      },
      {
        name: "Developers",
        href: "/for-you/developers",
      },
      {
        name: "Executives",
        href: "/for-you/executives",
      },
      {
        name: "Gamers",
        href: "/for-you/gamers",
      },
      {
        name: "ISVs",
        href: "/for-you/isvs",
      },
      {
        name: "IT Professionals",
        href: "/for-you/it-professionals",
      },
      {
        name: "Researchers",
        href: "/for-you/researchers",
      },
      {
        name: "Roboticists",
        href: "/for-you/roboticists",
      },
      {
        name: "Startups",
        href: "/for-you/startups",
      },
    ],
  },
  {
    name: "Shop",
    href: "/shop",
  },
  {
    name: "Drivers",
    href: "/drivers",
  },
  {
    name: "Support",
    href: "/support",
  },
];
