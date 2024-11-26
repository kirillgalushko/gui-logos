import { defineComponent as n, computed as l, openBlock as m, createElementBlock as s, normalizeStyle as p, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoQt",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, i) => (m(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 -32 256 256",
      style: p(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("polygon", {
          fill: "#41CD52",
          points: "231.39151 0 222.491837 0 35.5114422 0 0 36.0842074 0 156.748201 0 166.590235 0 191.591183 24.6049796 191.591183 33.5046531 191.591183 220.485047 191.591183 255.99649 155.507862 255.99649 34.842095 255.99649 25.0018341 255.99649 0"
        }),
        t("path", {
          fill: "#FFF",
          d: "M95.453 33.512c16.665 0 28.357 4.789 34.988 14.453 6.719 9.575 10.034 24.38 10.034 44.418 0 13.209-1.396 23.848-4.1 31.917-2.794 8.157-7.242 14.363-13.525 18.618l13.524 22.253-16.665 7.891-14.396-24.027c-2.094.62-5.323.976-9.86.976-16.84 0-28.618-4.61-35.25-13.832-6.63-9.22-9.946-23.848-9.946-43.709 0-19.948 3.403-34.753 10.121-44.417 6.719-9.665 18.41-14.54 35.075-14.54m84.984 6.385v23.937h22.336v15.338h-22.336v36.262c0 6.737.523 11.17 1.483 13.299.959 2.216 3.49 3.28 7.416 3.28l13.262-.533.785 14.364q-10.732 2.128-16.49 2.128-13.741 0-18.847-6.384c-3.402-4.255-5.147-12.324-5.147-24.204v-38.3h-12.39v-15.25h12.39V39.897zm-84.664 8.426c-10.1 0-17.064 3.427-20.895 10.373-3.743 6.945-5.658 17.95-5.658 33.194 0 15.153 1.828 26.068 5.484 32.562 3.657 6.495 10.709 9.832 21.069 9.832s17.325-3.247 20.981-9.651c3.57-6.405 5.398-17.319 5.398-32.563 0-15.334-1.828-26.429-5.572-33.374s-10.708-10.373-20.807-10.373"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
