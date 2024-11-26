import { defineComponent as m, computed as s, openBlock as h, createElementBlock as r, normalizeStyle as c, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ m({
  __name: "LogoAsana3",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (h(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "237",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 237",
      style: c(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#F06A6A",
          d: "M200.325 125.27c-30.749 0-55.675 24.927-55.675 55.677s24.926 55.677 55.675 55.677S256 211.696 256 180.947c0-30.75-24.926-55.677-55.675-55.677m-144.65.005C24.927 125.275 0 150.197 0 180.947s24.927 55.677 55.675 55.677c30.75 0 55.678-24.928 55.678-55.677 0-30.75-24.928-55.672-55.678-55.672m128-69.6c0 30.75-24.927 55.68-55.674 55.68-30.75 0-55.676-24.93-55.676-55.68C72.325 24.928 97.25 0 128 0c30.747 0 55.673 24.93 55.673 55.674"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
