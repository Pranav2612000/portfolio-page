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
    links: [{ name: "Demo / Live version", url: "https://github.com/helmerapp" }],
  },
  {
    name: "Raft Simulator",
    url: "https://pranav2612000.github.io/raft/",
    top: true,
    summary: "A browser simulation of the raft protocol, useful for understanding how it works.",
    description: [
      "A browser simulation of the raft protocol, useful for understanding how it works.",
      `Implementation based on the <a href="https://raft.github.io/raft.pdf">Raft whitepaper</a>`,
    ],
    tech: ["Raft", "Distributed Systems", "HTML Canvas"],
    links: [{ name: "Demo / Live version", url: "https://github.com/Pranav2612000/raft" }],
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
    links: [{ name: "Demo / Live version", url: "https://github.com/CapSoftware/scap" }],
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
    links: [{ name: "Demo / Live version", url: "https://github.com/Pranav2612000/wifi_share" }],
  },
  {
    name: "SDK Integrator",
    url: "https://github.com/apps/sdk-integrator-007",
    summary: "A GitHub App built with Probot that integrate SDKs with your project",
    description: ["A GitHub App built with Probot that integrate SDKs with your project"],
    tech: ["AI Agents", "RAG", "AI Programming", "LLMs"],
    links: [{ name: "Demo / Live version", url: "https://github.com/apps/sdk-integrator-007" }],
  },
  {
    name: "Milaap",
    url: "https://milaap.video/",
    summary: "Milaap is a Decentralized Video/Audio CHAT/conferencing application, which is designed to work on the edge(i.e peer to peer), with very little interference of the server.",
    description: [
      "Milaap is a Decentralized Video/Audio CHAT/conferencing application, which is designed to work on the edge(i.e peer to peer), with very little interference of the server. There are many video calling applications around the globe, but they are mostly server based applications providing maximum load on the server, wherein the audio and video quality decreases with increase in the number of participants. Many don't even support end-to-end encryption. So me and my team decided to develop a one-stop solution for not only addressing all these solution, but to give a seamless experience to the user. Milaap is a decentralized video/audio conferencing application, which is designed to work in a peer to peer fashion. It is designed to work efficiently on all platforms.",
    ],
    tech: ["Node", "React", "Express", "JavaScript", "MongoDB", "WebRTC", "Gcloud", "Nginx", "simple-peer"],
    links: [{ name: "Demo / Live version", url: "https://milaap.video/" }],
  },
  {
    name: "togthrdo - A radical note-taking application",
    url: "https://github.com/Pranav2612000/colab_tool",
    summary: "Take notes together and arrange them in beautiful ways!!",
    description: [
      "Take notes together and arrange them in beautiful ways!! Note-taking and task management was never this fun",
      "There are many TODO managing applications, but none of them are as intuitive to use as togthrdo. Togthrdo allows you to create lists, add cards to lists and drag these cards between lists, as other applications. But the reason why toghtrdo is better, is because, it allows users to drag and move lists around on the board - to create meaningful views for managing your tasks.",
      "Refer the README for more information",
    ],
    tech: ["MongoDB", "Express", "React", "Node", "JavaScript", "heroku"],
    links: [{ name: "Demo / Live version", url: "https://github.com/Pranav2612000/colab_tool" }],
  },
  {
    name: "Indian Medical Association - Social Security Scheme",
    url: "https://www.imamsss.com",
    summary: "A website and management tool for the Indian Medical Association, Maharashtra Section.",
    description: [
      "A website and management tool for the Indian Medical Association, Maharashtra Section - A tool to help IMA manage its Social Service Scheme. Consists of a user side where users can log in to view their application, can pay their fees online and request assistance. The admin side consists of monitoring the users, creating bills and receipts, and sending alerts to the users through mails and messages. (https://www.imamssss.com). Project scope includes automating the process of generation of bills & receipts and dispersing the receipts to current scheme holders in an automatic fashion.",
    ],
    tech: ["MongoDB", "Express", "React", "Redux", "Node", "JavaScript", "Nginx", "AWS"],
    links: [{ name: "Demo / Live version", url: "https://imamssss.com/" }],
  },
  {
    name: "Email Client Application using Python Socket Programming",
    url: "http://doodles-art-gallery.s3-website-us-east-1.amazonaws.com/",
    summary: "A simple email client in python which uses sockets to connect to SMTP and IMAP servers.",
    description: [
      "A simple email client in python which uses sockets to connect to SMTP and IMAP servers to send and receive emails(containing attachements)",
    ],
    tech: ["Python", "Socket Programming", "SMTP", "IMAP"],
    links: [{ name: "View repo on Github", url: "https://github.com/Pranav2612000/smtp_email_client" }],
  },
  {
    name: "myNano - improved fork of nano text editor",
    summary: "Improved fork of nano text editor",
    description: [
      "When opening a directory in nano, the original behaviour was to display an error message saying the file we opened is an directory. After my changes, on opening a directory, it displays the contents of the current directory and allows to navigate through the directories using the UP/DOWN arrow keys to select a file/directory and ENTER to open the selected directory.",
    ],
    tech: ["C", "make"],
    links: [{ name: "View repo on Github", url: "https://github.com/Pranav2612000/mynano" }],
  },
  {
    name: "Cubbit - Online File Encryptor",
    url: "https://encryptor4cubbitbypranav.web.app",
    summary: "A fast, lightweight web application, with minimalistic clean UI, to encrypt/decrypt files on the go.",
    description: ["A fast, lightweight web application, with minimalistic clean UI, to encrypt/decrypt files on the go."],
    tech: ["TypeScript", "React", "Redux", "firebase"],
    links: [
      { name: "Demo / Live version", url: "https://encryptor4cubbitbypranav.web.app/" },
      { name: "View repo on Github", url: "https://github.com/Pranav2612000/encryption-app" },
    ],
  },
  {
    name: "Web Review - npm package",
    url: "https://www.npmjs.com/package/web-review",
    summary: "A CLI based npm package which compiles reports on performance, responsiveness, SEO, accessibility and more.",
    description: [
      "It is extremely important from the developer's point of view that your website is responsive and follows good practices. That's why me and team have developed web-review a CLI based npm package which will compile reports consisting of :",
      "<ul><li>Performace of website</li><li>Responsiveness (Screenshots)</li><li>SEO capability</li><li>Accessibility</li><li>Best Practices</li><li>Progressive web app support</li></ul>",
      "And serve it to you HTML format. All this is done by modifying lighthouse under the hood.",
    ],
    tech: ["JavaScript", "Node", "npm", "Lighthouse"],
    links: [
      { name: "NPM Link", url: "https://www.npmjs.com/package/web-review" },
      { name: "View repo on Github", url: "https://github.com/savannahar68/web-review" },
    ],
  },
];
