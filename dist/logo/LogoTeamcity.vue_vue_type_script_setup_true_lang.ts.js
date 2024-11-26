import { defineComponent as s, computed as a, openBlock as p, createElementBlock as l, normalizeStyle as r, createStaticVNode as c } from "vue";
const h = /* @__PURE__ */ s({
  __name: "LogoTeamcity",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, i = a(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, e) => (p(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(i.value)
    }, e[0] || (e[0] = [
      c('<defs><linearGradient id="teamcity-gui-asset-a" x1="53.143%" x2="46.484%" y1="67.329%" y2="39.303%"><stop offset="0%" stop-color="#07C3F2"></stop><stop offset="100%" stop-color="#6B57FF"></stop></linearGradient><linearGradient id="teamcity-gui-asset-b" x1="35.784%" x2="66.613%" y1="53.936%" y2="42.814%"><stop offset="0%" stop-color="#07C3F2"></stop><stop offset="100%" stop-color="#009AE5"></stop></linearGradient><linearGradient id="teamcity-gui-asset-c" x1="73.979%" x2="21.762%" y1="64.146%" y2="35.072%"><stop offset="0%" stop-color="#009AE5"></stop><stop offset="100%" stop-color="#6B57FF"></stop></linearGradient><linearGradient id="teamcity-gui-asset-d" x1="39.629%" x2="64.847%" y1="80.728%" y2="10.287%"><stop offset="30%" stop-color="#07C3F2"></stop><stop offset="60%" stop-color="#3BEA62"></stop></linearGradient></defs><g><path fill="url(#teamcity-gui-asset-a)" d="M65.213 221.374 11.563 80.296A59.03 59.03 0 0 1 65.107.278c26.069-.669 49.486 15.853 57.596 40.636l46.958 143.424c9.466 28.93-93.835 64.98-104.448 37.036"></path><path fill="url(#teamcity-gui-asset-b)" d="M226.19 176.606 94.706 247.718a63.6 63.6 0 0 1-88.262-29.863 63.723 63.723 0 0 1 34.238-85.325l138.66-55.993c23.588-9.52 50.627-1.678 65.462 18.984a55.352 55.352 0 0 1-18.612 81.085"></path><path fill="url(#teamcity-gui-asset-c)" d="m176.514 177.832-135.78-65.62a59.087 59.087 0 0 1-15.998-94.976C43.186-1.206 71.575-5.308 94.492 7.157L227.018 79.15c26.68 14.523 36.732 47.792 22.558 74.658-13.906 26.38-46.212 37.003-73.062 24.024"></path><path fill="url(#teamcity-gui-asset-d)" d="M37.588 250.198a64.26 64.26 0 0 1-22.878-99.376L129.583 12.01c9.186-11.129 24.684-14.733 37.838-8.799 15.227 6.863 22.657 24.248 17.092 39.996l-59.89 169.928a63.994 63.994 0 0 1-87.035 37.063"></path><polygon fill="#000" points="48.0409844 48.0062728 208.031958 48.0062728 208.031958 207.988965 48.0409844 207.988965"></polygon><path fill="#FFF" d="M67.987 177.752h59.996v10H67.987zm16.132-97.776H65.8V67.764h49.864v12.212h-18.32v47.968H84.12zm36.529 18.544.002-.652a30.556 30.556 0 0 1 31.385-31.117 31.04 31.04 0 0 1 23.732 9.252l-8.426 9.706a22.24 22.24 0 0 0-15.413-6.8c-10.02 0-17.276 8.24-17.436 18.325l-.003.527c0 10.319 7.147 18.905 17.44 18.905 6.097 0 10.1-2.095 14.236-5.616l.638-.553q.479-.424.965-.87l8.426 8.505a30.8 30.8 0 0 1-24.692 10.666 30.37 30.37 0 0 1-30.854-30.278"></path></g>', 2)
    ]), 4));
  }
});
export {
  h as _
};
