import { defineComponent as o, computed as p, openBlock as l, createElementBlock as a, normalizeStyle as r, createStaticVNode as s } from "vue";
const m = /* @__PURE__ */ o({
  __name: "LogoSameroom",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, h = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (c, e) => (l(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(h.value)
    }, e[0] || (e[0] = [
      s('<g><rect width="256" height="256" x="0" y="0" fill="#78787A" rx="14"></rect><g><path fill="#FFF" d="M80.437 114.495c0 18.828-15.263 34.09-34.091 34.09s-34.09-15.262-34.09-34.09 15.262-34.09 34.09-34.09 34.091 15.262 34.091 34.09"></path><path fill="#1B94B8" d="M65.57 114.495c0 10.617-8.607 19.223-19.224 19.223s-19.223-8.606-19.223-19.223 8.606-19.224 19.223-19.224 19.224 8.607 19.224 19.224"></path></g><g><path fill="#FFF" d="M245.168 114.495c0 18.828-15.264 34.09-34.092 34.09s-34.09-15.262-34.09-34.09 15.262-34.09 34.09-34.09 34.092 15.262 34.092 34.09"></path><path fill="#1B94B8" d="M230.301 114.495c0 10.617-8.607 19.223-19.224 19.223s-19.224-8.606-19.224-19.223 8.607-19.224 19.224-19.224 19.224 8.607 19.224 19.224"></path></g><path fill="#000" d="M127.903 209.484c-17.907 0-38.038-5.336-58.089-21.416a8.66 8.66 0 0 1 10.833-13.514c48.448 38.867 96.529 2.085 98.55.495 3.763-2.948 9.2-2.296 12.156 1.45 2.951 3.751 2.326 9.175-1.416 12.14-.398.317-26.926 20.845-62.034 20.845"></path></g>', 1)
    ]), 4));
  }
});
export {
  m as _
};
