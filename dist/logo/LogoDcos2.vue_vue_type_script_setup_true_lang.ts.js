import { defineComponent as l, computed as m, openBlock as n, createElementBlock as c, normalizeStyle as r, createElementVNode as e } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoDcos2",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, i = m(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (h, o) => (n(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "201",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 201",
      style: r(i.value)
    }, o[0] || (o[0] = [
      e("defs", null, [
        e("linearGradient", {
          id: "dcos-2-gui-asset-a",
          x1: "0%",
          x2: "100%",
          y1: "0%",
          y2: "100%"
        }, [
          e("stop", {
            offset: "0%",
            "stop-color": "#7D58FF"
          }),
          e("stop", {
            offset: "100%",
            "stop-color": "#FF007D"
          })
        ])
      ], -1),
      e("g", null, [
        e("path", {
          fill: "url(#dcos-2-gui-asset-a)",
          d: "m40.353 17.021 97.434 56.428 82.12-56.428zm113.812 65.91 26.589 15.404 37.284-59.292zM34.332 33.267l48.855 77.697 39.02-26.808zm161.295 73.677 43.134 24.98V38.353zM17.24 38.353v117.925L69.016 120.7zm75.053 87.094L128 182.227l43.66-69.43-33.08-19.158zm35.704 75.086c-5.58 0-10.717-3.084-14.103-8.466v-.004l-35.771-56.88-54.027 37.126c-5.485 3.77-11.458 4.48-16.365 1.946C2.815 171.721 0 166.483 0 159.878V21.201c0-8.242 4.786-15.4 11.763-18.904C13.893.96 16.982.004 21.455 0h213.09c4.169.004 7.147.867 9.277 2.09C251.02 5.517 256 12.794 256 21.201v112.89c0 6.46-2.764 11.732-7.589 14.465-4.83 2.725-10.841 2.416-16.48-.85l-45.4-26.295-44.429 70.652c-3.385 5.386-8.523 8.47-14.106 8.47"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
