import { defineComponent as n, computed as r, openBlock as m, createElementBlock as s, normalizeStyle as p, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ n({
  __name: "LogoModernizr",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = r(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (d, t) => (m(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "123",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 123",
      style: p(h.value)
    }, t[0] || (t[0] = [
      i("g", { fill: "#D91B77" }, [
        i("path", { d: "M0 122.88V81.92h40.96V40.96h40.96V0h40.96v122.88zM133.12 0C200.986 0 256 55.016 256 122.879H133.12z" })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
