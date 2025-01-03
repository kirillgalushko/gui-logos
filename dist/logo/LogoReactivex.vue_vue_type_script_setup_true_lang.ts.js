import { defineComponent as p, computed as i, openBlock as a, createElementBlock as r, normalizeStyle as c, createStaticVNode as l } from "vue";
const n = /* @__PURE__ */ p({
  __name: "LogoReactivex",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, e = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (f, o) => (a(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "247",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 247",
      style: c(e.value)
    }, o[0] || (o[0] = [
      l('<defs><radialGradient id="reactivex-gui-asset-a" cx="78.764%" cy="37.848%" r="89.873%" fx="78.764%" fy="37.848%"><stop offset="0%" stop-color="#F80090"></stop><stop offset="100%" stop-color="#4D008E"></stop></radialGradient><radialGradient id="reactivex-gui-asset-b" cx="68.739%" cy="4.398%" r="81.728%" fx="68.739%" fy="4.398%"><stop offset="0%" stop-color="#57008E"></stop><stop offset="29.175%" stop-color="#5C008E"></stop><stop offset="100%" stop-color="#F80090"></stop></radialGradient><linearGradient id="reactivex-gui-asset-c" x1="18.239%" x2="81.159%" y1="0%" y2="84.337%"><stop offset="0%" stop-color="#F70090"></stop><stop offset="66.971%" stop-color="#E50090"></stop><stop offset="82.715%" stop-color="#D6008F" stop-opacity=".2"></stop><stop offset="100%" stop-color="#C10090" stop-opacity="0"></stop></linearGradient><linearGradient id="reactivex-gui-asset-d" x1="64.906%" x2="44.29%" y1="71.559%" y2="50%"><stop offset="0%" stop-color="#B2008F" stop-opacity=".151"></stop><stop offset="40.035%" stop-color="#F70090" stop-opacity=".4"></stop><stop offset="64.9%" stop-color="#F60090" stop-opacity=".892"></stop><stop offset="100%" stop-color="#FF0090"></stop></linearGradient></defs><g><path fill="#FF0090" d="M16.685 157.125C3.567 87.38 38.236 20.115 117.81 11.166 106.836-.559 91.845-.647 84.949.78 72.77 4.66 73.152 12.541 59.338 22.72c-13.733 7.843-20.63 1.837-30.633 9.968-9.983 8.07-3.017 26.597-7.204 30.2-4.156 7.203-17.047 13.62-19.394 22.718-1.94 11.636 5.264 19.948 4.987 29.922.832 8.311-8.274 13.011-6.966 19.748 3.919 11.005 11.472 17.629 15.033 20.682.816.576 1.678 1.993 1.523 1.167"></path><path fill="url(#reactivex-gui-asset-a)" d="M158.275 60.579a5.264 5.264 0 1 1 .001-10.53 5.264 5.264 0 0 1 0 10.53M19.757 164.733C7.15 104.117 46.16 53.468 121.704 78.403c44.327 25.932 100.09 24.243 102.603 7.48 6.207-20.095-28.26-61.506-79.792-72.311C42.281-6.377-12.834 104.117 19.757 164.732"></path><path fill="url(#reactivex-gui-asset-b)" d="M187.459 171.493c15.18 1.645 29.59-1.998 42.943-12.883-20.174 22.503-45.4 33.817-74.343 36.895 13.82 11.749 27.147 17.041 39.896 14.776-35.426 9.776-65.107-.984-101.213-36.94-1.89 9.679 8.333 24.76 18.87 34.386-61.138-26.505-66.498-109.073 8.053-129.383-77.28-37.13-120.979 35.014-99.51 94.142 21.007 45.54 76.985 80.6 138.337 72.89 29.8-3.65 74.302-24.197 92.482-72.89-12.813 11.498-35.716 21.512-45.936 22.28 34.59-17.287 53.264-46.662 48.022-86.81-7.165 17.058-16.619 30.159-28.444 39.156 25.12-39.157 20.81-59.396 2.217-81.639 13.298 36.572-3.905 77.161-41.374 106.02"></path><path fill="url(#reactivex-gui-asset-c)" d="M169.707 213.626c-2.625-.49 5.95 3.473-10.628-.916-16.577-4.388-33.456-8.617-64.337-39.37-1.89 9.68 8.333 24.76 18.87 34.387 28.444 19.838 9.1 10.56 52.44 25.542 3.478-6.922 3.655-13.074 3.655-19.643"></path><path fill="url(#reactivex-gui-asset-d)" d="M114.601 57.851s3.768-5.562 5.235-8.07c1.798-3.074 4.558-8.676 4.558-8.676S95.39 31.642 88.272 30.487c-22.127 5.744-22.207 15.014-9.837 29.203 1.376 1.58 36.166-1.839 36.166-1.839"></path></g>', 2)
    ]), 4));
  }
});
export {
  n as _
};
