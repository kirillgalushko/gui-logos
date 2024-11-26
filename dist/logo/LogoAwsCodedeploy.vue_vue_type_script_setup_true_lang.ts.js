import { defineComponent as s, computed as c, openBlock as l, createElementBlock as a, normalizeStyle as d, createStaticVNode as p } from "vue";
const m = /* @__PURE__ */ s({
  __name: "LogoAwsCodedeploy",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, i = c(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (l(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: d(i.value)
    }, t[0] || (t[0] = [
      p('<defs><linearGradient id="aws-codedeploy-gui-asset-a" x1="0%" x2="100%" y1="100%" y2="0%"><stop offset="0%" stop-color="#2E27AD"></stop><stop offset="100%" stop-color="#527FFF"></stop></linearGradient></defs><g><rect width="256" height="256" x="0" y="0" fill="url(#aws-codedeploy-gui-asset-a)"></rect><path fill="#FFF" d="M89.601 214.343h83.203v-54.881H89.601zm86.404-61.338H86.4c-1.77 0-3.2 1.447-3.2 3.229v61.338c0 1.782 1.43 3.228 3.2 3.228h89.604c1.77 0 3.2-1.446 3.2-3.228v-61.338c0-1.782-1.43-3.229-3.2-3.229m-57.299 55.63 19.38-44.389 5.856 2.606-19.38 44.389zm36.613-21.4-10.9-10.702 4.461-4.63 13.588 13.34a3.253 3.253 0 0 1-.317 4.9l-15.19 11.458-3.831-5.168zm-54.87-1.127a3.24 3.24 0 0 1-.963-2.52 3.24 3.24 0 0 1 1.277-2.377l15.191-11.457 3.834 5.168-12.193 9.195 10.903 10.705-4.46 4.63zm110.891-73.947c-6.14-5.992-14.31-9.291-23.005-9.291-11.335 0-20.593 4.035-26.331 10.753-1.408-30.937-8.48-55.827-18.593-67.682 36.194 5.47 63.664 32.21 69.74 68.005a189 189 0 0 0-1.81-1.785m-57.528 1.11-1.146-1.11c-6.141-5.992-14.327-9.291-23.044-9.291-11.089 0-20.113 3.731-25.854 10.088 2.112-40.674 14.577-68.079 25.883-68.101.019 0 .032.003.054.003 11.492.068 24.174 28.425 25.95 70.235a127 127 0 0 0-1.843-1.824m-56.572 2.157a120 120 0 0 0-2.704-2.706l-.58-.561c-6.14-5.992-14.323-9.291-23.044-9.291-9.898 0-18.244 2.999-24.017 8.235 7.607-34.291 34.494-59.76 69.005-65.148-10.298 12.09-17.447 37.707-18.66 69.47M129.686 38.4c-50.146 0-89.36 38.214-91.284 88.898-.045 1.208.634 2.302 1.623 2.909L72.8 151.756l3.495-5.41-31.003-20.355c1.634-6.907 6.679-12.11 13.93-14.743 3.443-1.25 7.382-1.922 11.69-1.922 7.05 0 13.655 2.654 18.596 7.477l.58.565c4.412 4.3 7.027 12.155 7.027 12.184.022.197 4.38 16.496 4.38 16.496l6.174-1.688-4.154-15.477.026-.394c1.549-14.13 14.487-19.163 26.08-19.163 7.05 0 13.653 2.654 18.594 7.477 0 0 6.976 5.359 7.488 11.67l.029.43-4.196 15.447 6.177 1.708 4.365-16.096c.025-.12.035-.259.05-.398.868-12.332 11.144-20.238 26.207-20.238 7.024 0 13.613 2.654 18.554 7.477 3.84 3.745 6.547 6.58 7.3 9.365l-27.646 19.419 3.657 5.3 29.234-20.538c.796-.63 1.37-2.896 1.366-3.019-.896-50.697-40.008-88.894-91.114-88.93"></path></g>', 2)
    ]), 4));
  }
});
export {
  m as _
};
