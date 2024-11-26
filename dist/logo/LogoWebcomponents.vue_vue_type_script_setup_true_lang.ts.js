import { defineComponent as i, computed as n, openBlock as p, createElementBlock as l, normalizeStyle as r, createStaticVNode as a } from "vue";
const y = /* @__PURE__ */ i({
  __name: "LogoWebcomponents",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const o = e, s = n(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (c, t) => (p(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "209",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 209",
      style: r(s.value)
    }, t[0] || (t[0] = [
      a('<defs><linearGradient id="webcomponents-gui-asset-a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stop-color="#2A3B8F"></stop><stop offset="100%" stop-color="#29ABE2"></stop></linearGradient><linearGradient id="webcomponents-gui-asset-b" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stop-color="#2A3B8F"></stop><stop offset="100%" stop-color="#29ABE2"></stop></linearGradient><linearGradient id="webcomponents-gui-asset-c" x1="100%" x2="0%" y1="50%" y2="50%"><stop offset="0%" stop-color="#B4D44E"></stop><stop offset="100%" stop-color="#E7F716"></stop></linearGradient><linearGradient id="webcomponents-gui-asset-d" x1="100%" x2="0%" y1="50%" y2="50%"><stop offset="0%" stop-color="#B4D44E"></stop><stop offset="100%" stop-color="#E7F716"></stop></linearGradient></defs><g><polygon fill="#166DA5" points="255.996595 104.028579 228.191722 150.849429 189.200979 103.389387 228.191722 57.2077286"></polygon><polygon fill="#8FDB69" points="225.155557 158.839336 182.809054 108.18333 157.401153 150.689631 196.871289 208.376754"></polygon><polygon fill="#166DA5" points="224.676163 48.8982261 182.809054 99.7140297 157.401153 57.2077286 196.871289 0.159798124"></polygon><polygon fill="url(#webcomponents-gui-asset-a)" points="96.9974616 48.8982261 224.676163 48.8982261 196.551693 0.159798124 125.121931 0.159798124" opacity=".95"></polygon><polyline fill="url(#webcomponents-gui-asset-b)" points="182.809054 99.8738278 253.439825 99.8738278 228.031924 57.0479304 157.241354 57.0479304" opacity=".95"></polyline><polygon fill="url(#webcomponents-gui-asset-c)" points="225.155557 158.999134 96.8376634 158.999134 124.962133 207.737562 196.871289 207.737562" opacity=".95"></polygon><polygon fill="#010101" points="124.962133 207.737562 64.8780385 103.868781 125.761124 0 59.9242967 0 0 103.868781 59.9242967 207.737562"></polygon><polyline fill="url(#webcomponents-gui-asset-d)" points="182.809054 108.023532 253.439825 108.023532 228.031924 150.849429 157.241354 150.849429" opacity=".95"></polyline></g>', 2)
    ]), 4));
  }
});
export {
  y as _
};
