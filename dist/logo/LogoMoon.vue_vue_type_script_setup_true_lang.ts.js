import { defineComponent as i, computed as r, openBlock as c, createElementBlock as l, normalizeStyle as a, createStaticVNode as n } from "vue";
const f = /* @__PURE__ */ i({
  __name: "LogoMoon",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const o = e, s = r(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (p, t) => (c(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: a(s.value)
    }, t[0] || (t[0] = [
      n('<defs><radialGradient id="moon-gui-asset-b" cx="50%" cy="50%" r="49.789%" fx="50%" fy="50%"><stop offset="0%" stop-color="#4600D1"></stop><stop offset="49.285%" stop-color="#4600D1"></stop><stop offset="100%" stop-color="#35009F"></stop></radialGradient><radialGradient id="moon-gui-asset-d" cx="50%" cy="50%" r="49.603%" fx="50%" fy="50%"><stop offset="0%" stop-color="#35019E"></stop><stop offset="18.73%" stop-color="#320194"></stop><stop offset="100%" stop-color="#206"></stop></radialGradient><circle id="moon-gui-asset-a" cx="128" cy="128" r="128"></circle></defs><g><g><circle cx="128" cy="128" r="128" fill="#5805FF"></circle><mask id="moon-gui-asset-c" fill="#fff"><use xlink:href="#moon-gui-asset-a"></use></mask><circle cx="199.694" cy="105.369" r="128" fill="url(#moon-gui-asset-b)" mask="url(#moon-gui-asset-c)"></circle><circle cx="275.372" cy="82.376" r="128" fill="url(#moon-gui-asset-d)" mask="url(#moon-gui-asset-c)"></circle></g></g>', 2)
    ]), 4));
  }
});
export {
  f as _
};
