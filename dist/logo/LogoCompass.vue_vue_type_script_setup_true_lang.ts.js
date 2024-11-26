import { defineComponent as a, computed as c, openBlock as o, createElementBlock as p, normalizeStyle as l, createStaticVNode as h } from "vue";
const d = /* @__PURE__ */ a({
  __name: "LogoCompass",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const s = e, i = c(() => ({
      width: s.width || "1em",
      height: s.height || "1em",
      minWidth: s.width || "1em",
      minHeight: s.height || "1em"
    }));
    return (m, t) => (o(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: l(i.value)
    }, t[0] || (t[0] = [
      h('<defs><path id="compass-gui-asset-a" d="M255.774 0c-3.374 68.465-13.363 131.709-40.03 191.254-20.467 45.706-67.265 69.496-120.04 62.802-43.38-5.502-83.16-42.607-92.844-86.6-10.806-49.09 9.47-100.444 53.017-122.797C117.348 13.104 184.551 4.125 255.774 0"></path></defs><g><mask id="compass-gui-asset-b" fill="#fff"><use xlink:href="#compass-gui-asset-a"></use></mask><use xlink:href="#compass-gui-asset-a" fill="#fff"></use><g mask="url(#compass-gui-asset-b)"><path fill="#E21708" d="M113.79 76.094s-5.894 32.657-8.24 49.203c-11.936-9.303-35.559-26.23-35.559-26.23s18.533 24.924 27.284 36.056c-16.625 1.884-49.951 7.073-49.951 7.073s34.083 5.482 49.956 7.317c-9.206 11.657-27.374 35.291-27.374 35.291s24.681-17.048 35.771-25.593c2.263 15.86 8.112 49.638 8.112 49.638s5.35-33.75 7.384-50.199c10.965 8.546 34.115 26.396 34.115 26.396s-16.128-24.142-24.959-35.544c16.042-1.884 48.637-7.306 48.637-7.306s-32.913-5.241-48.52-7.046c8.077-10.947 24.997-36.095 24.997-36.095s-23.71 18.388-34.29 26.856c-1.958-16.342-7.364-49.817-7.364-49.817M255.8.46c-3.374 68.465-13.363 131.709-40.03 191.255-20.468 45.705-67.265 69.495-120.04 62.801-43.38-5.501-83.16-42.606-92.844-86.6-10.806-49.09 9.47-100.444 53.017-122.797C117.374 13.566 184.577 4.587 255.8.461"></path><path fill="#FA524A" fill-opacity=".3" d="M6.195 103.901c3.892-11.462 9.58-22.166 16.937-31.596 2.778-3.42 5.865-6.837 9.296-10.36a98 98 0 0 1 9.643-8.215c3.125-2.28 6.569-4.52 10.265-6.7a98 98 0 0 1 3.567-1.924c14.884-7.64 30.1-13.956 45.633-19.2C141.8 12.31 184.158 5.915 228.179 2.345 239.039 1.518 248.439.973 255.8.46 180.864 16.623 141.051 32.526 92.565 53.73S2.687 121 .493 134.19c1.29-11.934 3.101-21.743 5.702-30.289"></path><path fill="#AE0E10" fill-opacity=".3" d="M97.011 259.082a110 110 0 0 1-14.533-2.836c-18.214-5.252-37.246-16.484-52.433-32.87-13.227-14.42-22.987-32.097-27.16-51.051a122 122 0 0 1-2.858-26.637c.544 79.974 93.994 92.336 118.985 92.336 39.67.001 39.175-7.9 100.79-51.235a380 380 0 0 1-4.032 9.335c-14.427 32.217-41.942 53.545-75.407 60.983-8.783 1.945-17.868 2.933-27.225 2.933a138 138 0 0 1-16.127-.958"></path></g></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
