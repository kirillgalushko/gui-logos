import { defineComponent as m, computed as n, openBlock as l, createElementBlock as s, normalizeStyle as c, createElementVNode as i } from "vue";
const a = /* @__PURE__ */ m({
  __name: "LogoItsalive2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (l(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "253",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 253",
      style: c(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#5146F9",
          d: "m88.279 246.57-38.769 6.027c-4.51.87-8.88-2.036-9.762-6.489a8.1 8.1 0 0 1 .007-3.183l4.525-20.932C17.159 198.82 0 164.581 0 126.387 0 56.585 57.308 0 128 0s128 56.585 128 126.387-57.308 126.386-128 126.386c-13.866 0-27.217-2.176-39.721-6.203m51.8-131.07L159.2 79.75a7.2 7.2 0 0 0 .85-3.385c0-4.004-3.287-7.25-7.342-7.25h-46.516c-3.491 0-6.5 2.427-7.195 5.806L87.766 129.48a7 7 0 0 0-.147 1.434c-.006 4.004 3.277 7.254 7.332 7.26l13.641.018 2.39 40.095a7.22 7.22 0 0 0 2.867 5.33c3.22 2.434 7.828 1.83 10.293-1.35l42.729-55.11a7.2 7.2 0 0 0 1.512-4.406c0-4.004-3.287-7.25-7.342-7.25z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};
