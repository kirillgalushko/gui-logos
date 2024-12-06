import { defineComponent as l, computed as n, openBlock as v, createElementBlock as m, normalizeStyle as r, createElementVNode as h } from "vue";
const c = /* @__PURE__ */ l({
  __name: "LogoNetflix2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (v(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "138",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 138",
      style: r(o.value)
    }, t[0] || (t[0] = [
      h("g", null, [
        h("path", {
          fill: "#DB202C",
          "fill-rule": "nonzero",
          d: "M340.657 0v100.203q18.54.861 36.98 2.09v21.245a1822 1822 0 0 0-58.542-2.959V0zM512 .012l-28.077 65.094 28.07 72.438-.031.013a1789 1789 0 0 0-24.576-3.323l-15.763-40.656-15.913 36.882a1816 1816 0 0 0-22.662-2.36l27.371-63.43L435.352.013h23.325l14.035 36.184L488.318.012zM245.093 119.526V.011h60.19v21.436h-38.628v27.78h29.227v21.245h-29.227v49.05zM164.58 21.448V.01h66.69v21.437h-22.565v98.66c-7.197.19-14.386.412-21.56.683V21.448zM90.868 126.966V.014h59.89v21.435h-38.331v29.036c8.806-.113 21.327-.24 29.117-.222V71.51c-9.751-.12-20.758.134-29.117.217v32.164a1848 1848 0 0 1 38.331-2.62v21.247a1816 1816 0 0 0-59.89 4.45M48.571 77.854 48.57.01h21.562v128.96q-11.823 1.216-23.603 2.584L21.56 59.824v74.802q-10.8 1.406-21.56 2.936V.012h20.491zm346.854 46.965V.012h21.563V126.6c-7.179-.64-14.364-1.23-21.563-1.78"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};