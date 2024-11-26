import { defineComponent as s, computed as p, openBlock as l, createElementBlock as r, normalizeStyle as c, createStaticVNode as h } from "vue";
const d = /* @__PURE__ */ s({
  __name: "LogoSublimetext3",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, i = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (a, e) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "332",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 332",
      style: c(i.value)
    }, e[0] || (e[0] = [
      h('<defs><linearGradient id="sublimetext-3-gui-asset-a" x1="55.117%" x2="63.68%" y1="58.68%" y2="39.597%"><stop offset="0%" stop-color="#FF9700"></stop><stop offset="53%" stop-color="#F48E00"></stop><stop offset="100%" stop-color="#D06F00"></stop></linearGradient></defs><g><path fill="url(#sublimetext-3-gui-asset-a)" d="M255.288 166.795c0-3.887-2.872-6.128-6.397-5.015L6.397 238.675C2.865 239.796 0 243.86 0 247.74v78.59c0 3.887 2.865 6.135 6.397 5.015l242.494-76.888c3.525-1.12 6.397-5.185 6.397-9.071z"></path><path fill="#FF9800" d="M0 164.291c0 3.887 2.865 7.95 6.397 9.071l242.53 76.902c3.531 1.12 6.397-1.127 6.397-5.007V166.66c0-3.88-2.866-7.944-6.397-9.064L6.397 80.694C2.865 79.574 0 81.814 0 85.7z"></path><path fill="#FF9800" d="M255.288 5.302c0-3.886-2.872-6.135-6.397-5.014L6.397 77.176C2.865 78.296 0 82.36 0 86.247v78.59c0 3.887 2.865 6.128 6.397 5.014l242.494-76.895c3.525-1.12 6.397-5.184 6.397-9.064z"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
