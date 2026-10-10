// `top: true` projects are shown on the home page
export default [
  {
    name: "Helmer",
    url: "https://www.helmer.app/",
    top: true,
    summary: "A new way to record screencasts - Capture audio, video, camera, keystrokes & everything else, merging it together to create videos.",
    description: [
      "A new way to record screencasts - Capture audio, video, camera, keystrokes & everything else, merging it together to create videos. Everything works locally and you can also use AI to help you out and speed up the process.",
    ],
    tech: ["Rust", "Tauri", "Astro", "Video & Audio Processing", "ffmpeg"],
    links: [
      { name: "Download Helmer Micro", url: "https://www.helmer.app/micro" },
      { name: "GitHub", url: "https://github.com/helmerapp" },
    ],
  },
  {
    name: "Raft Simulator",
    url: "https://pranav2612000.github.io/raft/",
    top: true,
    summary: "A browser simulation of the Raft protocol, useful for understanding how it works.",
    description: [
      "A browser simulation of the Raft protocol, useful for understanding how it works.",
      `Implementation based on the <a href="https://raft.github.io/raft.pdf">Raft whitepaper</a>`,
    ],
    tech: ["Raft", "Distributed Systems", "HTML Canvas"],
    links: [
      { name: "Live demo", url: "https://pranav2612000.github.io/raft/" },
      { name: "GitHub", url: "https://github.com/Pranav2612000/raft" },
    ],
  },
  {
    name: "scap - modern screencapture engine",
    url: "https://crates.io/crates/scap",
    top: true,
    summary: "High-performance, cross-platform screen capture library in Rust. Acquired by Cap.",
    description: [
      "High-performance, cross-platform screen capture library in Rust.",
      `Acquired by <a href="https://cap.so/">Cap</a>`,
    ],
    tech: ["Rust", "Cargo", "Video processing", "ffmpeg"],
    links: [
      { name: "crates.io", url: "https://crates.io/crates/scap" },
      { name: "GitHub", url: "https://github.com/CapSoftware/scap" },
    ],
  },
  {
    name: "wifi share",
    url: "https://chromewebstore.google.com/detail/Wifi%20Share/kdjhpollblakokcnfhbgmallkelgncbn?hl=en",
    top: true,
    summary: "A browser extension and a web app to allow you to share a scratchpad over the network.",
    description: [
      `A <a href="https://chromewebstore.google.com/detail/Wifi%20Share/kdjhpollblakokcnfhbgmallkelgncbn?hl=en">browser extension</a> and a <a href="https://quick-wifi-share.web.app/">web app</a> to allow you to share a scratchpad over the network.`,
    ],
    tech: ["Browser Extension", "Socket Programming", "Figma"],
    links: [
      { name: "Chrome extension", url: "https://chromewebstore.google.com/detail/Wifi%20Share/kdjhpollblakokcnfhbgmallkelgncbn?hl=en" },
      { name: "GitHub", url: "https://github.com/Pranav2612000/wifi_share" },
    ],
  },
  {
    name: "SDK Integrator",
    url: "https://github.com/apps/sdk-integrator-007",
    summary: "A GitHub App built with Probot that integrates SDKs with your project",
    description: ["A GitHub App built with Probot that integrates SDKs with your project"],
    tech: ["AI Agents", "RAG", "AI Programming", "LLMs"],
    links: [{ name: "Demo / Live version", url: "https://github.com/apps/sdk-integrator-007" }],
  },
  {
    name: "Milaap",
    url: "https://milaap.video/",
    summary: "Milaap is a decentralized video/audio chat & conferencing application, which is designed to work on the edge (i.e. peer to peer), with very little interference of the server.",
    description: [
      "Milaap is a decentralized video/audio chat & conferencing application, which is designed to work on the edge (i.e. peer to peer), with very little interference of the server. There are many video calling applications around the globe, but they are mostly server-based applications putting maximum load on the server, wherein the audio and video quality decreases with increase in the number of participants. Many don't even support end-to-end encryption. So my team and I decided to develop a one-stop solution, not only to address all these problems, but to give a seamless experience to the user. Milaap is a decentralized video/audio conferencing application, which is designed to work in a peer to peer fashion. It is designed to work efficiently on all platforms.",
    ],
    tech: ["Node", "React", "Express", "JavaScript", "MongoDB", "WebRTC", "Gcloud", "Nginx", "simple-peer"],
    links: [{ name: "Demo / Live version", url: "https://milaap.video/" }],
  },
  {
    name: "myNano - improved fork of nano text editor",
    summary: "Improved fork of nano text editor",
    description: [
      "When opening a directory in nano, the original behaviour was to display an error message saying the file we opened is a directory. After my changes, on opening a directory, it displays the contents of the current directory and lets you navigate through the directories using the UP/DOWN arrow keys to select a file/directory and ENTER to open the selected directory.",
    ],
    tech: ["C", "make"],
    links: [{ name: "View repo on GitHub", url: "https://github.com/Pranav2612000/mynano" }],
  },
];
