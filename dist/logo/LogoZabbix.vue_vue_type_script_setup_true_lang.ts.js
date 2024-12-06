import { defineComponent as l, computed as o, openBlock as c, createElementBlock as n, normalizeStyle as s, createElementVNode as h } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoZabbix",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, m = o(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (c(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "135",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 135",
      style: s(m.value)
    }, t[0] || (t[0] = [
      h("g", null, [
        h("rect", {
          width: "512",
          height: "134.095",
          x: "0",
          y: "0",
          fill: "#D40000"
        }),
        h("path", {
          fill: "#FFF",
          d: "M21.943 20.419H96v9.752L36.267 103.01h61.257v10.666H20.419v-9.752l59.733-72.838h-58.21zm125.562 12.495-17.372 46.324h34.743zM140.19 20.42h14.324l35.962 93.257h-13.105l-8.533-23.771h-42.667l-8.533 23.771h-13.41zm76.8 48.762v34.133h20.42c7.009 0 11.885-1.524 15.238-4.266s4.876-7.01 4.876-12.8-1.524-10.058-4.876-12.8-8.534-4.267-15.238-4.267zm0-38.4V58.82h18.896c6.095 0 10.971-1.219 14.019-3.352 3.047-2.438 4.571-5.79 4.571-10.667 0-4.571-1.524-8.229-4.571-10.667-3.048-2.438-7.62-3.352-14.02-3.352zm-12.8-10.362h32.61c9.752 0 17.067 2.133 22.552 6.095 5.181 3.962 7.924 9.753 7.924 17.067 0 5.79-1.219 10.362-3.962 13.714q-4.114 5.03-11.885 6.4 9.6 1.83 14.628 8.229c3.353 4.266 5.181 9.447 5.181 15.847 0 8.229-2.743 14.629-8.533 19.2-5.79 4.572-13.715 6.705-24.381 6.705H204.19zm100.267 48.762v34.133h20.42c6.704 0 11.885-1.524 15.237-4.266s4.876-7.01 4.876-12.8-1.523-10.058-4.876-12.8c-3.352-2.743-8.533-4.267-15.238-4.267zm0-38.4V58.82h18.895c6.096 0 10.972-1.219 14.02-3.352 3.047-2.438 4.57-5.79 4.57-10.667 0-4.571-1.523-8.229-4.57-10.667s-7.62-3.352-14.02-3.352zm-12.8-10.362h32.61c9.752 0 17.066 2.133 22.552 6.095 5.181 3.962 7.924 9.753 7.924 17.067 0 5.79-1.22 10.362-3.962 13.714q-4.115 5.03-11.886 6.4 9.6 1.83 14.629 8.229c3.352 4.266 5.18 9.447 5.18 15.847 0 8.229-2.742 14.629-8.533 19.2-5.79 4.572-13.714 6.705-24.38 6.705h-34.134zm87.162 0h12.8v93.257h-12.8zm36.876 0h14.02l22.247 33.524 22.552-33.524h13.41L458.667 64l32.914 49.676h-14.02l-25.904-39.01-25.905 39.01h-13.714l32.914-49.371z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};