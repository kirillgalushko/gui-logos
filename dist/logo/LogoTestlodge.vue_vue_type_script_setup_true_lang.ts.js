import { defineComponent as p, computed as i, openBlock as a, createElementBlock as d, normalizeStyle as o, createStaticVNode as m } from "vue";
const r = /* @__PURE__ */ p({
  __name: "LogoTestlodge",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, l = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, h) => (a(), d("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "219",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 219",
      style: o(l.value)
    }, h[0] || (h[0] = [
      m('<g><path fill="#C5CF21" d="M256 7.569 142.885 60.452l3.073 1.243L252.982 75.98l3.018-.513z"></path><path fill="#70B540" d="M256 75.467 142.885 60.452l1.891 2.78 55.969 42.391 2.612.297z"></path><path fill="#006D69" d="m203.357 105.92-60.472-45.468.44 4.024 42.495 129.038 2.95 2.312z"></path><path fill="#008CA9" d="m188.77 195.826-60.773 22.952 14.888-158.326z"></path><path fill="#70B540" d="m127.982 38.006.311-.596.07-22.053-.381-.489L37.21 0l1.582 1.402 85.818 35.563z"></path><path fill="#008CA9" d="m0 7.569 113.115 52.883-3.073 1.243L3.018 75.98 0 75.467z"></path><path fill="#006D69" d="M127.982 38.006V14.868L218.79 0l-1.582 1.402-85.818 35.563z"></path><path fill="#C5CF21" d="M127.854 38.006 37.21 0 0 7.569z"></path><path fill="#006D69" d="m0 75.467 113.115-15.015-1.891 2.78-55.969 42.391-2.612.297z"></path><path fill="#C5CF21" d="m52.643 105.92 60.472-45.468-.44 4.024L70.18 193.514l-2.951 2.312z"></path><path fill="#70B540" d="m67.229 195.826 60.768 22.952-14.882-158.326z"></path><path fill="#008CA9" d="M128.146 38.006 218.79 0 256 7.569z"></path></g>', 1)
    ]), 4));
  }
});
export {
  r as _
};
