import { defineComponent as i, computed as a, openBlock as p, createElementBlock as m, normalizeStyle as o, createStaticVNode as d } from "vue";
const n = /* @__PURE__ */ i({
  __name: "LogoCloudcraft",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, h = a(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (c, l) => (p(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "399",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 399",
      style: o(h.value)
    }, l[0] || (l[0] = [
      d('<g><g><path fill="#C08A07" d="m143.84 128.723 72.213-43.49V254.36l-69.798 41.476v37.046l108.455-65.234V24.563L143.84 91.542z"></path><path fill="#F6B71F" d="M145.645 90.366 254.71 24.563 216.858 1.745 109.722 65.823z"></path><path fill="#4286C5" d="m36.995 155.031 107.825-64.36-35.359-24.848-108.17 64.78z"></path><path fill="#22496E" d="M143.84 91.542 36.994 155.031v242.681l109.26-64.831v-37.047L74.578 339.19V169.662l69.261-40.939z"></path><path fill="#30689C" d="M1.29 130.602v246.976l35.705 20.134V155.03z"></path><path fill="#4286C5" d="m74.579 339.19 72.352-44.03-33.508-21.641-38.844 23.12z"></path><path fill="#F6B71F" d="m146.93 295.16 69.123-40.802-35.436-20.67-67.53 40.147z"></path><path fill="#E4A409" d="M216.053 254.359V85.234l-35.436 21.409v127.045z"></path></g><path fill="#241200" d="M147.544 330.601v-34.033l69.141-41.089c.003-.002.007 0 .01-.003l.008-.008.007-.004.005-.008c.385-.236.628-.65.628-1.1V85.234c0-.465-.252-.893-.655-1.123h-.003a1.3 1.3 0 0 0-1.299.02l-.989.596-68.287 40.774V91.328l107.31-64.48v240.067zM38.286 155.763 143.53 92.865v34.181l-69.607 41.505a1.29 1.29 0 0 0-.636 1.111V339.19c0 .466.252.894.658 1.12a1.27 1.27 0 0 0 1.299-.019l69.72-42.173v34.026L38.286 395.445zM2.58 133.046l33.126 22.663v239.793L2.58 376.822zm106.752-65.799 33.911 23.14L37.046 153.5 3.674 130.67zm107.52-64.002 35.363 21.317-106.642 64.43-33.907-23.136zm-36.06 229.015L75.866 294.356V170.398l104.924-62.23zm2.58-.002V106.682l31.391-19.164V252.11zm-1.29 2.235 31.427 19.873-66.34 39.35-32.197-20.12zM75.867 297.367l36.686-22.338 32.215 20.134-68.9 41.742zM255.39 23.485c-.009-.006-.006-.02-.015-.027L217.522.64a1.29 1.29 0 0 0-1.32-.003L.625 129.497c-.02.012-.013.043-.032.056-.336.224-.555.58-.577.987 0 .01-.014.014-.014.024 0 .004.005.005.005.01 0 .01-.008.017-.008.028v246.974c0 .466.252.893.657 1.12l35.692 20.126.008.008c.2.113.42.17.64.17.222 0 .45-.063.65-.176l.007-.007 217.72-130.07c.387-.234.626-.649.626-1.102V24.562a1.28 1.28 0 0 0-.61-1.077"></path></g>', 1)
    ]), 4));
  }
});
export {
  n as _
};