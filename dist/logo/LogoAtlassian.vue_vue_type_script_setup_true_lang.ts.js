import { defineComponent as a, computed as s, openBlock as l, createElementBlock as n, normalizeStyle as d, createStaticVNode as r } from "vue";
const c = /* @__PURE__ */ a({
  __name: "LogoAtlassian",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (l(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 32 32",
      style: d(o.value)
    }, t[0] || (t[0] = [
      r('<path fill="url(#atlassian-gui-asset-a)" fill-rule="evenodd" d="M11.119 14.084a.683.683 0 0 0-1.162.127L4.074 25.98a.704.704 0 0 0 .63 1.02h8.191a.68.68 0 0 0 .63-.389c1.766-3.654.695-9.21-2.406-12.527" clip-rule="evenodd"></path><path fill="#2684FF" fill-rule="evenodd" d="M15.434 3.378a15.54 15.54 0 0 0-.906 15.328l3.95 7.905a.7.7 0 0 0 .628.389h8.191a.703.703 0 0 0 .629-1.018L16.63 3.372a.664.664 0 0 0-1.196.005" clip-rule="evenodd"></path><defs><linearGradient id="atlassian-gui-asset-a" x1="14.343" x2="6.091" y1="15.901" y2="24.759" gradientUnits="userSpaceOnUse"><stop stop-color="#0052CC"></stop><stop offset=".923" stop-color="#2684FF"></stop></linearGradient></defs>', 3)
    ]), 4));
  }
});
export {
  c as _
};
