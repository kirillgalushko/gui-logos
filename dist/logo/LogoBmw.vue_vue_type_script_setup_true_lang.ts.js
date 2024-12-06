import { defineComponent as i, computed as c, openBlock as h, createElementBlock as s, normalizeStyle as n, createElementVNode as e } from "vue";
const u = /* @__PURE__ */ i({
  __name: "LogoBmw",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const o = l, t = c(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (d, r) => (h(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "250",
      height: "250",
      version: "1.1",
      viewBox: "0 0 499 499",
      style: n(t.value)
    }, r[0] || (r[0] = [
      e("g", {
        fill: "none",
        "fill-color-id": "-1",
        "fill-rule": "evenodd",
        stroke: "none",
        "stroke-color-id": "-1",
        "stroke-width": "1",
        "recolor-fill": "true",
        "recolor-stroke": "true"
      }, [
        e("g", {
          fill: "#000",
          "fill-color-id": "0",
          "stroke-color-id": "-1",
          "recolor-fill": "true",
          "recolor-stroke": "true"
        }, [
          e("path", {
            "fill-color-id": "0",
            d: "M249.251 498.503c-66.576 0-129.168-25.928-176.246-73.005C25.927 378.42 0 315.828 0 249.251 0 111.813 111.813 0 249.251 0c66.577 0 129.169 25.927 176.247 73.005 47.077 47.078 73.005 109.67 73.005 176.246s-25.928 129.169-73.005 176.247c-47.079 47.077-109.67 73.005-176.247 73.005M8.624 249.251c0 64.273 25.03 124.699 70.479 170.149 45.449 45.449 105.875 70.479 170.148 70.479 132.682 0 240.627-107.945 240.627-240.628 0-64.273-25.03-124.699-70.479-170.148-45.448-45.45-105.875-70.479-170.148-70.479S124.552 33.653 79.103 79.103C33.654 124.552 8.624 184.979 8.624 249.251",
            "recolor-fill": "true",
            "recolor-stroke": "true"
          }),
          e("path", {
            "fill-color-id": "0",
            d: "M249.251 18.541c127.416 0 230.71 103.294 230.71 230.71s-103.294 230.711-230.71 230.711-230.71-103.295-230.71-230.711 103.294-230.71 230.71-230.71m0 378.08c81.39 0 147.37-65.98 147.37-147.37 0-81.389-65.981-147.37-147.37-147.37s-147.37 65.981-147.37 147.37 65.981 147.37 147.37 147.37M140.952 108.643c-4.885-4.748-12.436-6.179-19.525-1.784 1.354-3.509.801-7.09.082-9.066-3.054-5.569-4.12-6.266-6.637-8.378-8.148-6.837-16.723-1-22.856 6.309l-29.632 35.313 46.581 39.087 31.249-37.24c7.14-8.509 8.244-16.945.738-24.241m116.018-16.78 15.997-42.401v42.401h12.158V31.137h-18.267l-16.615 43.479h.172L233.8 31.137h-18.266v60.726h12.157V49.462l15.998 42.401zm163.46 25.264-10.08-12.448-36.458 15.652 23.857-31.208-9.396-11.603-38.097 49.004 11.135 13.64 35.989-14.81.13.161-21.969 32.123 11.027 13.727 55.854-27.075-9.396-11.603-35.486 16.847z",
            "recolor-fill": "true",
            "recolor-stroke": "true"
          }),
          e("path", {
            "fill-color-id": "0",
            "fill-rule": "nonzero",
            d: "M111.362 249.251h137.889V111.362c-76.153 0-137.889 61.737-137.889 137.889m137.889 0v137.89c76.153 0 137.889-61.736 137.889-137.89zM98.491 104.464c2.062-2.458 6.722-2.357 9.719.157 3.295 2.765 3.303 6.685 1.09 9.321l-17.597 20.971-11.01-9.239zm31.309 24.739-18.553 22.11-11.634-9.762 18.703-22.29c2.112-2.517 6.821-3.25 9.997-.584 3.595 3.015 3.951 7.59 1.487 10.526",
            "recolor-fill": "true",
            "recolor-stroke": "true"
          })
        ])
      ], -1)
    ]), 4));
  }
});
export {
  u as _
};