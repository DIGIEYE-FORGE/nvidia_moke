import React from "react";
import Logo from "../logo";

function CopyRightComponent() {
  // Privacy Policy Manage My Privacy Do Not Sell or Share My Data Terms of Service Accessibility Corporate Policies Product Security Contact
  const urls = [
    { name: "Privacy Policy", url: "#" },
    { name: "Manage My Privacy", url: "#" },
    { name: "Do Not Sell or Share My Data", url: "#" },
    { name: "Terms of Service", url: "#" },
    { name: "Accessibility", url: "#" },
    { name: "Corporate Policies", url: "#" },
    { name: "Product Security", url: "#" },
    { name: "Contact", url: "#" },
  ];
  return (
    <div className="container flex flex-col gap-4 bg-background py-container">
      <div className="flex justify-between">
        <Logo fill="fill-black/70" />
        <span className="text-xl">Morocco</span>
      </div>
      <div className="flex flex-wrap gap-2 text-foreground/70">
        {urls.map((url, index) => (
          <a key={index} href={url.url} className={`hover:text-foreground/100`}>
            {url.name}
            {index !== urls.length - 1 && (
              <span className="px-2 text-foreground/70">|</span>
            )}
          </a>
        ))}
      </div>
      <div className="flex justify-between text-foreground/70">
        <span>
          ©{new Date().getFullYear()} NVIDIA Corporation. All Rights Reserved.
        </span>
        <span>Legal Information</span>
      </div>
    </div>
  );
}
export default CopyRightComponent;
