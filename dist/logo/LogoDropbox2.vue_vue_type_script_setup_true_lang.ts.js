import { defineComponent as i, computed as p, openBlock as g, createElementBlock as l, normalizeStyle as s, createStaticVNode as h } from "vue";
const y = /* @__PURE__ */ i({
  __name: "LogoDropbox2",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const o = e, n = p(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (r, t) => (g(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "218",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 218",
      style: s(n.value)
    }, t[0] || (t[0] = [
      h('<g fill="#0061FF"><polygon points="63.9945638 0 0 40.7712563 63.9945638 81.5425125 128 40.7712563"></polygon><polygon points="192.000442 0 128 40.7750015 192.000442 81.5500031 256.000885 40.7750015"></polygon><polygon points="0 122.321259 63.9945638 163.092516 128 122.321259 63.9945638 81.5500031"></polygon><polygon points="192 81.5500031 128 122.324723 192 163.099442 256 122.324723"></polygon><polygon points="64 176.771256 128.005436 217.542513 192 176.771256 128.005436 136"></polygon></g>', 1)
    ]), 4));
  }
});
export {
  y as _
};
