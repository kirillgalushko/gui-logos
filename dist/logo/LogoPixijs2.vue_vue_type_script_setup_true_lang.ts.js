import { defineComponent as l, computed as o, openBlock as n, createElementBlock as m, normalizeStyle as r, createElementVNode as c } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoPixijs2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, h = o(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (n(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "180",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 180",
      style: r(h.value)
    }, t[0] || (t[0] = [
      c("g", null, [
        c("path", {
          fill: "#EA1E63",
          "fill-rule": "nonzero",
          d: "M462.212 4.263c19.182 0 33.189 3.958 43.237 8.525l-8.374 30.906c-6.85-3.35-18.878-8.069-35.472-8.069s-24.664 7.46-24.664 16.29c0 10.81 9.44 15.681 31.362 23.902 29.84 11.114 43.999 26.643 43.694 50.545 0 28.47-21.923 52.524-68.357 52.524-19.335 0-38.366-5.024-47.957-10.352l7.765-31.667c10.352 5.176 26.185 10.505 42.475 10.505 17.66 0 26.948-7.156 26.948-18.27 0-10.656-7.917-16.594-28.318-23.902-24.359-8.525-41.258-21.162-45.52-40.344v49.174c0 48.11-23.142 65.008-60.289 65.008-8.83 0-20.248-1.522-27.86-3.958l4.262-30.905c5.329 1.827 12.027 3.045 19.64 3.045 16.137 0 26.186-7.308 26.186-33.646V7.004h38.213v38.212c5.024-23.75 27.86-40.953 63.029-40.953M51.762 5.785c23.599 0 40.498 4.568 51.764 13.55 9.591 7.612 16.442 19.792 17.812 34.103h69.728l12.027 20.4c3.502 6.242 6.85 12.484 10.048 18.27h.457c3.35-6.547 6.394-12.79 9.591-18.879L234 53.438h72.62V176.45h-73.84l-12.331-22.075c-3.502-6.09-6.547-12.332-9.592-18.574h-.76c-3.046 6.547-6.243 12.484-9.288 18.574l-11.57 22.075h-72.164V82.212c-2.588 6.394-6.242 12.027-11.113 16.594-12.941 12.332-32.276 17.813-54.96 17.813-5.024 0-9.592-.305-13.093-.762v60.441H0V9.287c11.875-1.98 28.47-3.502 51.763-3.502M268.406 63.79l-33.34 48.261 33.34 52.524zm-113.117 0v100.633l33.799-50.545zM53.742 34.712c-7.764 0-13.093.76-15.833 1.522v49.784c3.197.76 7.307 1.065 12.788 1.065 20.4 0 32.885-10.2 32.885-27.556 0-15.529-10.81-24.815-29.84-24.815M136.258 0c12.332 0 20.096 8.221 20.248 19.335 0 10.505-7.916 19.03-20.552 19.03-12.028 0-20.097-8.525-19.792-19.03C115.857 8.22 123.926 0 136.258 0m151.33 0c12.332 0 20.096 8.221 20.249 19.335 0 10.505-7.917 19.03-20.553 19.03-12.028 0-20.096-8.525-19.792-19.03C267.188 8.22 275.256 0 287.588 0"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
