import { defineComponent as s, computed as p, openBlock as l, createElementBlock as n, normalizeStyle as r, createStaticVNode as a } from "vue";
const g = /* @__PURE__ */ s({
  __name: "LogoTurbopack2",
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
    return (h, e) => (l(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "293",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 293",
      style: r(i.value)
    }, e[0] || (e[0] = [
      a('<defs><linearGradient id="turbopack-2-gui-asset-a" x1="50%" x2="49.855%" y1="7.896%" y2="93.343%"><stop offset="0%" stop-color="#0096FF"></stop><stop offset="100%" stop-color="#FF1E56"></stop></linearGradient></defs><g><path fill="url(#turbopack-2-gui-asset-a)" d="M128 0 46.16 46.768l.16 36.752L128 36.848l96 54.864L256 110V73.136zm-14.4 247.488L32 200.864V91.792l-.032-.016-.176-36.8L0 73.136v146.288l81.68 46.672zM224 200.864v-92.56l32 18.288v92.832l-128 73.152-31.888-18.224L128 255.76v-.048z"></path><polygon fill="#000" points="46.4 108.368615 46.4 192.496615 128 239.136615 128 154.992615"></polygon><polygon fill="#000" points="128 53.4406154 53.648 95.9206154 135.264 142.560615 209.6 100.064615"></polygon></g>', 2)
    ]), 4));
  }
});
export {
  g as _
};
