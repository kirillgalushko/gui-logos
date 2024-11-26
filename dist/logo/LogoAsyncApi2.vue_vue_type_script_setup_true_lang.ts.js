import { defineComponent as e, computed as i, openBlock as c, createElementBlock as a, normalizeStyle as r, createStaticVNode as l } from "vue";
const f = /* @__PURE__ */ e({
  __name: "LogoAsyncApi2",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, p = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (h, o) => (c(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "253",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 253",
      style: r(p.value)
    }, o[0] || (o[0] = [
      l('<defs><linearGradient id="async-api-2-gui-asset-a" x1="90.642%" x2="12.543%" y1="10.337%" y2="88.429%"><stop offset="0%" stop-color="#21D4FD"></stop><stop offset="3%" stop-color="#27CDFC" stop-opacity="96"></stop><stop offset="23%" stop-color="#4E9CF4" stop-opacity="70"></stop><stop offset="43%" stop-color="#6E73EE" stop-opacity="49"></stop><stop offset="61%" stop-color="#8753E9" stop-opacity="32"></stop><stop offset="77%" stop-color="#993CE5" stop-opacity="20"></stop><stop offset="90%" stop-color="#A42EE3" stop-opacity="13"></stop><stop offset="100%" stop-color="#A829E2" stop-opacity="10"></stop></linearGradient></defs><g><path fill="url(#async-api-2-gui-asset-a)" d="M195.452 0H60.548C27.108 0 0 26.78 0 59.814v133.268c0 33.035 27.108 59.814 60.548 59.814h134.904c33.44 0 60.548-26.78 60.548-59.814V59.814C256 26.78 228.892 0 195.452 0"></path><path fill="#FFF" d="m75.025 110.118 7.62-10.373 59.916 42.96-7.62 10.373zm38.47 0 7.62-10.373 59.915 42.96-7.619 10.373zm14.551-63.467c-31.617 0-57.451 19.025-58.472 42.698l-.031 1.95h13.009v-.494c0-17.277 20.443-31.34 45.532-31.34s45.531 14.063 45.531 31.34v.495h13.01v-.495c-.075-24.345-26.316-44.154-58.579-44.154m45.44 115.423c0 17.276-20.444 31.34-45.551 31.34s-45.532-14.064-45.532-31.34v-.496H69.394v.496c0 24.344 26.24 44.154 58.503 44.154 31.618 0 57.452-19.025 58.473-42.699l.032-1.95h-13.01z"></path></g>', 2)
    ]), 4));
  }
});
export {
  f as _
};
