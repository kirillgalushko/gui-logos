import { defineComponent as o, computed as i, openBlock as m, createElementBlock as n, normalizeStyle as s, createElementVNode as r } from "vue";
const d = /* @__PURE__ */ o({
  __name: "LogoApachecordova",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, l = i(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (m(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "#000",
      role: "img",
      viewBox: "0 0 24 24",
      style: s(l.value)
    }, t[0] || (t[0] = [
      r("path", { d: "M18.545.545H5.455L0 9.273l2.182 14.182h3.886l-.273-3.273h1.909l.273 3.273h8.045l.273-3.273h1.909l-.273 3.273h3.886L24 9.273zm0 17.455H5.455L4.364 9.273l2.182-4.364h3.506l-.234 1.636h4.364l-.234-1.636h3.506l2.182 4.364zm-3-6.955c.301 0 .545.908.545 2.029s-.244 2.029-.545 2.029S15 14.195 15 13.074s.244-2.029.545-2.029m-6.886.17c.301 0 .545.908.545 2.029s-.244 2.029-.545 2.029-.545-.908-.545-2.029.244-2.029.545-2.029" }, null, -1)
    ]), 4));
  }
});
export {
  d as _
};
