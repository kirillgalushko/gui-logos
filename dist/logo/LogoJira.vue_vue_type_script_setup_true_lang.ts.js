import { defineComponent as s, computed as l, openBlock as a, createElementBlock as r, normalizeStyle as n, createStaticVNode as p } from "vue";
const c = /* @__PURE__ */ s({
  __name: "LogoJira",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (d, t) => (a(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 32 32",
      style: n(o.value)
    }, t[0] || (t[0] = [
      p('<path fill="#2684FF" d="M29.665 15.217 17.208 3.166 16 2l-9.377 9.07-4.288 4.147a1.083 1.083 0 0 0 0 1.566l8.567 8.287L16 30l9.377-9.07.146-.14 4.142-4.006a1.083 1.083 0 0 0 0-1.567M16 20.139 11.72 16 16 11.86 20.28 16z"></path><path fill="url(#jira-gui-asset-a)" fill-rule="evenodd" d="M16 11.86a6.81 6.81 0 0 1-.03-9.827l-9.366 9.055 5.097 4.93z" clip-rule="evenodd"></path><path fill="url(#jira-gui-asset-b)" fill-rule="evenodd" d="M20.291 15.989 16 20.139a6.86 6.86 0 0 1 2.112 4.93c0 1.85-.76 3.624-2.112 4.93l9.389-9.08z" clip-rule="evenodd"></path><defs><linearGradient id="jira-gui-asset-a" x1="15.236" x2="8.096" y1="7.673" y2="10.79" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052CC"></stop><stop offset="1" stop-color="#2684FF"></stop></linearGradient><linearGradient id="jira-gui-asset-b" x1="16.818" x2="23.944" y1="24.279" y2="21.184" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052CC"></stop><stop offset="1" stop-color="#2684FF"></stop></linearGradient></defs>', 4)
    ]), 4));
  }
});
export {
  c as _
};
