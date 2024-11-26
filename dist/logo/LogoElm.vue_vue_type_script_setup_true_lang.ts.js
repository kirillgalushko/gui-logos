import { defineComponent as p, computed as n, openBlock as l, createElementBlock as g, normalizeStyle as s, createStaticVNode as y } from "vue";
const r = /* @__PURE__ */ p({
  __name: "LogoElm",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const o = i, e = n(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (h, t) => (l(), g("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(e.value)
    }, t[0] || (t[0] = [
      y('<g fill="#1293D8"><polygon points="8.52852758 256 127.927914 136.600614 247.3273 256"></polygon><polygon points="0 8.67270025 119.399386 128.072086 4.84790665e-14 247.471472"></polygon><polygon fill-opacity=".75" points="136.594522 0 256 0 256 119.405478"></polygon><polygon points="136.456441 128.072086 191.89187 183.507516 247.3273 128.072086 191.89187 72.6366571"></polygon><polygon fill-opacity=".75" points="8.52852758 0.144172676 119.399386 0.144172676 171.423404 52.1681909 60.5525458 52.1681909"></polygon><polygon fill-opacity=".75" points="183.363343 64.1081295 127.927914 119.543559 72.4924844 64.1081295"></polygon><polygon fill-opacity=".75" points="255.855827 247.471472 200.420398 192.036043 255.855827 136.600614"></polygon></g>', 1)
    ]), 4));
  }
});
export {
  r as _
};
