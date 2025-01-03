import { defineComponent as c, computed as s, openBlock as r, createElementBlock as y, normalizeStyle as x, createStaticVNode as t } from "vue";
const h = /* @__PURE__ */ c({
  __name: "LogoMetabase",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, p = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (o, l) => (r(), y("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "324",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 324",
      style: x(p.value)
    }, l[0] || (l[0] = [
      t('<g fill="#509EE3"><ellipse cx="19.394" cy="82.757" rx="19.394" ry="19.704"></ellipse><ellipse cx="19.394" cy="137.928" rx="19.394" ry="19.704"></ellipse><ellipse cx="73.697" cy="82.757" opacity=".2" rx="19.394" ry="19.704"></ellipse><ellipse cx="73.697" cy="138.464" rx="19.394" ry="19.704"></ellipse><ellipse cx="128" cy="82.757" opacity=".2" rx="19.394" ry="19.704"></ellipse><ellipse cx="128" cy="19.704" opacity=".2" rx="19.394" ry="19.704"></ellipse><ellipse cx="128" cy="138.464" opacity=".2" rx="19.394" ry="19.704"></ellipse><ellipse cx="182.303" cy="82.757" opacity=".2" rx="19.394" ry="19.704"></ellipse><ellipse cx="236.606" cy="82.757" rx="19.394" ry="19.704"></ellipse><ellipse cx="182.303" cy="138.464" rx="19.394" ry="19.704"></ellipse><ellipse cx="236.606" cy="138.464" rx="19.394" ry="19.704"></ellipse><ellipse cx="19.394" cy="193.099" rx="19.394" ry="19.704"></ellipse><ellipse cx="73.697" cy="193.635" opacity=".2" rx="19.394" ry="19.704"></ellipse><ellipse cx="128" cy="193.635" rx="19.394" ry="19.704"></ellipse><ellipse cx="182.303" cy="193.635" opacity=".2" rx="19.394" ry="19.704"></ellipse><ellipse cx="236.606" cy="193.635" rx="19.394" ry="19.704"></ellipse><ellipse cx="19.394" cy="248.27" rx="19.394" ry="19.704"></ellipse><ellipse cx="73.697" cy="248.806" opacity=".2" rx="19.394" ry="19.704"></ellipse><ellipse cx="128" cy="248.806" opacity=".2" rx="19.394" ry="19.704"></ellipse><ellipse cx="128" cy="303.977" opacity=".2" rx="19.394" ry="19.704"></ellipse><ellipse cx="182.303" cy="248.806" opacity=".2" rx="19.394" ry="19.704"></ellipse><ellipse cx="236.606" cy="248.806" rx="19.394" ry="19.704"></ellipse></g>', 1)
    ]), 4));
  }
});
export {
  h as _
};
