import {
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
  TwitchIcon,
  Github,
} from "lucide-react";
import React from "react";
import Footer from "../footer";

const data = [
  {
    title: "Company Information",
    links: [
      {
        name: "About Us",
        redirect: "/about",
      },
      {
        name: "Company Overview",
        redirect: "/company-overview",
      },
      {
        name: "Investors",
        redirect: "/investors",
      },
      {
        name: "Venture Capital (NVentures)",
        redirect: "/nventures",
      },
      {
        name: "NVIDIA Foundation",
        redirect: "/nvidia-foundation",
      },
      {
        name: "Research",
        redirect: "/research",
      },
      {
        name: "Corporate Sustainability",
        redirect: "/corporate-sustainability",
      },
      {
        name: "Technologies",
        redirect: "/technologies",
      },
      {
        name: "Careers",
        redirect: "/careers",
      },
    ],
  },
  {
    title: "Company Information",
    links: [
      {
        name: "About Us",
        redirect: "/about",
      },
      {
        name: "Company Overview",
        redirect: "/company-overview",
      },
      {
        name: "Investors",
        redirect: "/investors",
      },
      {
        name: "Venture Capital (NVentures)",
        redirect: "/nventures",
      },
      {
        name: "NVIDIA Foundation",
        redirect: "/nvidia-foundation",
      },
      {
        name: "Research",
        redirect: "/research",
      },
      {
        name: "Corporate Sustainability",
        redirect: "/corporate-sustainability",
      },
      {
        name: "Technologies",
        redirect: "/technologies",
      },
      {
        name: "Careers",
        redirect: "/careers",
      },
    ],
  },
  {
    title: "Company Information",
    links: [
      {
        name: "About Us",
        redirect: "/about",
      },
      {
        name: "Company Overview",
        redirect: "/company-overview",
      },
      {
        name: "Investors",
        redirect: "/investors",
      },
      {
        name: "Venture Capital (NVentures)",
        redirect: "/nventures",
      },
      {
        name: "NVIDIA Foundation",
        redirect: "/nvidia-foundation",
      },
      {
        name: "Research",
        redirect: "/research",
      },
      {
        name: "Corporate Sustainability",
        redirect: "/corporate-sustainability",
      },
      {
        name: "Technologies",
        redirect: "/technologies",
      },
      {
        name: "Careers",
        redirect: "/careers",
      },
    ],
  },
];

const links = [
  { redirect: "/facebook", icon: <Facebook /> },
  { redirect: "/linkedin", icon: <Linkedin /> },
  { redirect: "/youtube", icon: <Youtube /> },
  { redirect: "/instagram", icon: <Instagram /> },
  { redirect: "/twitch", icon: <TwitchIcon /> },
  { redirect: "/github", icon: <Github /> },
];

export default function NvidiaFooter() {
  return <Footer title="test title" data={data} links={links} />;
}
