
import { defineConfig } from "wxt";

export default defineConfig({
  manifest: {
    manifest_version: 3,
    name: "Twitter Follow All",
    version: "1.0.0",
    description: "Automate following users on Twitter/X's For You tab.",
    permissions: ["scripting", "tabs"],
    host_permissions: ["https://x.com/home/*"],
    content_scripts: [
      {
        matches: ["https://x.com/home/*"],
        js: ["content.js"], 
      },
    ],
    background: {
      service_worker: "background.js", // background script
    },
    action: {
      default_popup: "popup.html",
      default_title: "Twitter Follow All",
    },
  },
  entrypointsDir: "public", 
});



