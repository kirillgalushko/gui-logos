import { defineComponent as s, computed as l, openBlock as p, createElementBlock as a, normalizeStyle as r, createStaticVNode as c } from "vue";
const f = /* @__PURE__ */ s({
  __name: "LogoYii",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, e = l(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, o) => (p(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "274",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 274",
      style: r(e.value)
    }, o[0] || (o[0] = [
      c('<defs><linearGradient id="yii-gui-asset-a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#73B723"></stop><stop offset="100%" stop-color="#D8EE61"></stop></linearGradient><linearGradient id="yii-gui-asset-b" x1="84.858%" x2="13.584%" y1="26.251%" y2="100%"><stop offset="0%" stop-color="#98C9EA"></stop><stop offset="68.865%" stop-color="#026FB2"></stop><stop offset="100%" stop-color="#086EB6"></stop></linearGradient><linearGradient id="yii-gui-asset-c" x1="0%" x2="85.884%" y1="6.32%" y2="69.935%"><stop offset="0%" stop-color="#D73721"></stop><stop offset="100%" stop-color="#F7D768"></stop></linearGradient><linearGradient id="yii-gui-asset-d" x1="30.961%" x2="86.77%" y1="30.993%" y2="81.746%"><stop offset="0%" stop-color="#D4C883"></stop><stop offset="100%" stop-color="#A1D1A7"></stop></linearGradient></defs><g><path fill="url(#yii-gui-asset-a)" d="M221.829.004c18.6 9.478 34.576 34.35 33.775 68.1-2.431 41.585-32.582 77.424-65.387 110.444-1.837-40.269-10.593-65.932-24.265-102.02-12.908-36.367 24.83-75.36 55.877-76.524"></path><path fill="url(#yii-gui-asset-b)" d="M121.217 177.132c9.988-12.424 17.067-23.488 22.007-33.484 33.84 17.693 25.855 14.389 42.176 33.24q.083.88.156 1.755c1.354 26.138-17.713 86.564-92.793 94.845-5.197-40.603 11.699-75.237 28.454-96.356"></path><path fill="url(#yii-gui-asset-c)" d="M.391 25.247c53.495-21.169 111.068.516 144.306 45.697a198 198 0 0 1 9.141 13.582c5.194 33.155 1.233 51.568-8.876 61.329-6.647-3.354-13.739-6.328-21.31-9.078-17.6-6.394-33.845-10.626-57.044-17.495C11.52 104.248-2.065 57.012.391 25.247"></path><path fill="url(#yii-gui-asset-d)" d="M151.793 81.28c.351.545.698 1.086 1.04 1.635l.422.677c.858 1.379 1.7 2.766 2.53 4.17l.14.234.223.38.203.351.594 1.02.041.074.805 1.412.025.041q.873 1.541 1.721 3.1l.07.132.628 1.164.017.03.689 1.295.198.38.384.74.47.911.455.884q.694 1.374 1.37 2.749l.116.227a231 231 0 0 1 2.373 5.011l.587 1.284.057.128.376.834.438.987.247.57.397.912.284.656.599 1.412.041.099.64 1.535.078.186c.682 1.66 1.342 3.32 1.982 4.99l.062.154.528 1.4.033.077.306.826a312 312 0 0 1 1.003 2.753l.128.36c.363 1.027.722 2.06 1.069 3.087l.111.326c.326.966.64 1.932.954 2.898l.153.475.037.111.495 1.565.02.07.459 1.494.458 1.54.013.033.38 1.3.12.422.23.805q.391 1.39.764 2.782l.186.693.359 1.37.016.067q.655 2.527 1.243 5.048l.037.174.041.177q.767 3.326 1.416 6.626l.042.219a195 195 0 0 1 1.717 10.196l.008.045q.222 1.559.413 3.113l.053.445.174 1.482v.004l.148 1.371.05.454.107 1.086.042.437.016.178.132 1.49c-11.818-15.22-25.936-25.71-42.877-33.916 13.672-27.03 11.752-46.29 9.114-63.447"></path></g>', 2)
    ]), 4));
  }
});
export {
  f as _
};
