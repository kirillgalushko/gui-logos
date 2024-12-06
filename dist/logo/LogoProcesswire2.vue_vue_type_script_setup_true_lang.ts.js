import { defineComponent as h, computed as m, openBlock as l, createElementBlock as r, normalizeStyle as s, createElementVNode as o } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoProcesswire2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, t) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(n.value)
    }, t[0] || (t[0] = [
      o("g", null, [
        o("path", {
          fill: "#417EDF",
          d: "M234.023 56.207c-7.765-11.595-20.682-24.844-33.653-33.42C173.427 4.334 142.216-2.216 114.611.643c-28.79 3.104-53.44 13.952-73.706 32.043-18.773 16.768-31.168 37.27-36.63 56.822-5.524 19.553-4.788 37.654-2.815 51.287 2.08 13.834 8.97 31.243 8.97 31.243 1.408 3.338 3.36 4.693 4.374 5.258 5.034 2.753 13.301.331 19.648-6.794.32-.438.49-1.046.32-1.558-1.771-6.816-2.411-11.947-3.04-15.915-1.44-7.85-2.08-21.003-1.12-33.163.48-6.581 1.76-13.621 4-21.003 4.33-14.581 13.46-29.803 27.733-42.454 15.37-13.621 35.082-22.037 53.823-24.214 6.571-.789 19.072-1.546 34.123 2.166 3.21.8 16.992 4.395 31.733 14.379 10.73 7.296 19.37 16.299 25.322 25.205 6.059 8.502 12.64 22.838 14.57 33.334 2.732 11.947 2.732 24.609.79 36.94-2.4 12.352-6.73 24.363-13.461 34.933-4.64 8.193-14.261 19.02-25.632 27.148-10.25 7.21-21.952 12.416-33.962 15.296-6.08 1.44-12.181 2.357-18.432 2.56-5.557.17-12.928 0-18.101-.875-7.69-1.226-9.29-3.19-11.05-5.856 0 0-1.228-1.92-1.569-7.061.117-46.988.096-34.444.096-58.839 0-6.89-.224-13.141-.16-18.816.32-9.312 1.11-15.712 7.765-22.646 4.811-5.109 11.542-8.192 18.955-8.192 2.25 0 10.005.107 16.821 5.771 7.307 6.101 8.533 14.443 8.821 16.672 1.664 13.046-6.954 22.763-10.26 25.227-4.097 3.072-7.777 4.566-10.262 5.44-5.29 1.771-11.104 2.283-16.33 1.942-.8-.054-1.526.47-1.686 1.27l-1.76 9.13c-1.717 6.933 2.133 9.472 4.373 10.368 7.158 2.208 13.504 3.126 21.024 2.56 11.53-.81 22.901-5.355 32.555-14.357 8.213-7.809 12.896-17.44 14.495-28.214 1.6-11.958-.48-24.833-5.93-35.734-5.995-12.022-16.341-22.06-29.973-27.553-13.77-5.418-24.725-5.61-38.848-2.005l-.16.053c-9.173 3.158-17.024 7.051-25.194 15.489-5.6 5.824-10.187 12.875-12.982 20.832-2.773 8.021-3.52 14.006-3.648 23.307-.17 6.89.16 13.291.16 19.286v39.478c0 12.63-.426 14.816 0 21.312.235 4.31.832 9.184 2.72 14.422 1.942 5.77 6.016 11.69 8.811 14.421 3.915 4.17 8.896 7.52 13.792 9.6 11.21 4.982 26.432 5.771 38.773 5.291 8.17-.31 16.384-1.44 24.437-3.35 16.107-3.829 31.573-10.794 45.173-20.458 14.581-10.272 27.253-24.289 34.25-36.193 8.971-14.144 14.774-30.016 17.792-46.326 2.72-16.342 2.592-33.1-1.056-49.195-2.88-14.934-10.57-31.318-19.445-44.545z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};