import { defineComponent as r, computed as c, openBlock as i, createElementBlock as m, normalizeStyle as n, createElementVNode as l } from "vue";
const d = /* @__PURE__ */ r({
  __name: "LogoUniqlo",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = c(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (v, t) => (i(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1000",
      height: "998",
      viewBox: "0 0 203.68 203.15",
      style: n(h.value)
    }, t[0] || (t[0] = [
      l("path", {
        fill: "#ED1D24FF",
        "fill-color-id": "0",
        d: "M0 203.15h203.68V0H0z",
        "recolor-fill": "true",
        "recolor-stroke": "true"
      }, null, -1),
      l("path", {
        fill: "#FFF",
        "fill-color-id": "1",
        d: "M149.95 27.713h13.04v64.176h-13.04zM68.448 70.566c0 12.04-9.182 21.326-21.19 21.326-11.983 0-21.389-9.286-21.389-21.326v-42.85h12.72v42.85c0 4.867 3.866 8.79 8.67 8.79 4.826 0 8.66-3.923 8.66-8.79v-42.85h12.529zm60.256 104.918h-42.86v-64.152h12.993v51.104h29.867zm0-83.599H115.68L98.837 55.118v36.767H85.845V27.709h12.992l16.843 36.71V27.71h13.024zm-81.458 19.449c-11.967 0-21.381 9.59-21.381 21.198v21.757c0 11.455 9.414 21.197 21.381 21.197 1.45 0 2.858-.152 4.203-.4l4.467 13.393h12.528l-5.932-19.277c3.474-3.97 5.932-9.373 5.932-14.913v-21.757c0-11.608-9.182-21.198-21.198-21.198m8.67 42.955c0 4.219-3.835 8.15-8.67 8.15-4.795 0-8.661-3.931-8.661-8.15v-21.757a8.633 8.633 0 0 1 8.661-8.646c4.835 0 8.67 3.85 8.67 8.646zm100.531-42.955c-11.999 0-21.205 9.59-21.205 21.198v21.757c0 11.455 9.206 21.197 21.205 21.197 11.976 0 21.198-9.742 21.198-21.197v-21.757c0-11.608-9.222-21.198-21.198-21.198m8.694 42.955c0 4.219-3.923 8.15-8.694 8.15-4.795 0-8.693-3.931-8.693-8.15v-21.757c0-4.795 3.898-8.646 8.693-8.646 4.771 0 8.694 3.85 8.694 8.646z",
        "recolor-fill": "true",
        "recolor-stroke": "true"
      }, null, -1)
    ]), 4));
  }
});
export {
  d as _
};
