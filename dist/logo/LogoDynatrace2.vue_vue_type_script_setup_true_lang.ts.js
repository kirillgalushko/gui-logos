import { defineComponent as p, computed as l, openBlock as o, createElementBlock as a, normalizeStyle as c, createStaticVNode as s } from "vue";
const r = /* @__PURE__ */ p({
  __name: "LogoDynatrace2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, h = l(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, e) => (o(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "260",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 260",
      style: c(h.value)
    }, e[0] || (e[0] = [
      s('<g><path fill="#1496FF" d="M86.386 21.69c-3.33 17.57-7.398 43.647-9.617 70.094-3.884 46.606-1.48 77.862-1.48 77.862L9.633 231.973s-4.993-34.955-7.582-74.349C.57 133.212.016 111.758.016 98.812c0-.74.37-1.48.37-2.22 0-.924 1.11-9.617 9.617-17.754C19.251 69.96 87.495 16.51 86.386 21.69"></path><path fill="#1284EA" d="M86.386 21.69c-3.33 17.57-7.398 43.647-9.617 70.094 0 0-72.684-8.693-76.753 8.877 0-.924 1.295-11.651 9.802-19.789 9.248-8.877 77.677-64.36 76.568-59.182"></path><path fill="#B4DC00" d="M.016 96.408v4.068c.74-3.144 2.035-5.363 4.624-8.877 5.363-6.843 14.056-8.692 17.57-9.062 17.754-2.405 44.017-5.179 70.464-5.919 46.791-1.48 77.677 2.405 77.677 2.405l65.656-62.327s-34.4-6.473-73.609-11.097C136.691 2.455 114.128.791 101.366.051c-.924 0-9.987-1.11-18.494 7.028-9.247 8.877-56.224 53.45-75.088 71.389-8.508 8.137-7.768 17.2-7.768 17.94"></path><path fill="#6F2DA8" d="M233.602 176.119c-17.754 2.404-44.017 5.363-70.464 6.288-46.791 1.48-77.862-2.404-77.862-2.404L19.62 242.514s34.77 6.843 73.979 11.282c24.043 2.774 45.311 4.254 58.257 4.994.925 0 2.405-.74 3.33-.74.924 0 9.987-1.665 18.494-9.802 9.247-8.878 65.1-72.684 59.922-72.129"></path><path fill="#591F91" d="M233.602 176.119c-17.754 2.404-44.017 5.363-70.464 6.288 0 0 4.994 73.054-12.576 76.198.925 0 12.946-.555 21.454-8.693 9.247-8.877 66.765-74.348 61.586-73.793"></path><path fill="#73BE28" d="M154.446 258.975c-1.295 0-2.59-.185-4.07-.185 3.33-.555 5.55-1.665 9.063-4.254 7.028-4.994 9.248-13.686 9.987-17.2 3.144-17.57 7.398-43.647 9.433-70.094 3.698-46.607 1.48-77.677 1.48-77.677l65.655-62.512s4.808 34.77 7.582 74.163c1.665 25.708 2.22 48.456 2.405 61.032 0 .925.74 9.987-7.768 18.125-9.247 8.877-56.223 53.634-74.903 71.574-8.877 8.137-17.94 7.028-18.864 7.028"></path></g>', 1)
    ]), 4));
  }
});
export {
  r as _
};