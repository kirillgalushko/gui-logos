import { defineComponent as o, computed as a, openBlock as n, createElementBlock as p, normalizeStyle as h, createStaticVNode as r } from "vue";
const c = /* @__PURE__ */ o({
  __name: "LogoAtlassian2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, s = a(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (l, e) => (n(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: h(s.value)
    }, e[0] || (e[0] = [
      r('<defs><linearGradient id="atlassian-2-gui-asset-a" x1="99.687%" x2="39.836%" y1="15.801%" y2="97.438%"><stop offset="0%" stop-color="#0052CC"></stop><stop offset="92.3%" stop-color="#2684FF"></stop></linearGradient></defs><g><path fill="url(#atlassian-2-gui-asset-a)" d="M75.793 117.95c-3.82-4.08-9.77-3.85-12.367 1.342L.791 244.565a7.488 7.488 0 0 0 6.697 10.838h87.228a7.22 7.22 0 0 0 6.699-4.14c18.808-38.89 7.413-98.018-25.622-133.314"></path><path fill="#2681FF" d="M121.756 4.011c-35.033 55.505-32.721 116.979-9.646 163.13l42.06 84.121a7.49 7.49 0 0 0 6.697 4.14h87.227a7.488 7.488 0 0 0 6.697-10.838S137.445 9.837 134.493 3.964c-2.64-5.258-9.344-5.33-12.737.047"></path></g>', 2)
    ]), 4));
  }
});
export {
  c as _
};
