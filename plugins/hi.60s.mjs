#!/usr/bin/env /Users/letea/.nvm/versions/node/v19.6.0/bin/node
import xbar, { separator, isDarkMode } from "@sindresorhus/xbar";

xbar([
  {
    text: `Hi!`,
    color: isDarkMode ? "white" : "red",
    dropdown: false,
  },
  separator,
  {
    text: "Unicorns",
    color: "#ff79d7",
    submenu: [
      {
        text: ":tv: Video",
        href: "https://www.youtube.com/watch?v=9auOCbH5Ns4",
      },
      {
        text: ":book: Wiki",
        href: "https://en.wikipedia.org/wiki/Unicorn",
      },
    ],
  },
  separator,
  "Ponies",
]);
