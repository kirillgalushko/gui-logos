import { defineComponent as e, computed as l, openBlock as r, createElementBlock as i, normalizeStyle as a, createStaticVNode as f } from "vue";
const d = /* @__PURE__ */ e({
  __name: "LogoRollupjs",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const o = s, p = l(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (c, t) => (r(), i("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "335",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 335",
      style: a(p.value)
    }, t[0] || (t[0] = [
      f('<defs><linearGradient id="rollupjs-gui-asset-a" x1="26.824%" x2="67.576%" y1="48.224%" y2="55.339%"><stop offset="0%" stop-color="#FF6533"></stop><stop offset="15.7%" stop-color="#FF5633"></stop><stop offset="43.4%" stop-color="#FF4333"></stop><stop offset="71.4%" stop-color="#FF3733"></stop><stop offset="100%" stop-color="#F33"></stop></linearGradient><linearGradient id="rollupjs-gui-asset-b" x1="20.45%" x2="93.486%" y1="38.133%" y2="80.432%"><stop offset="0%" stop-color="#BF3338"></stop><stop offset="100%" stop-color="#F33"></stop></linearGradient><linearGradient id="rollupjs-gui-asset-c" x1="32.293%" x2="45.556%" y1="39.497%" y2="48.914%"><stop offset="0%" stop-color="#FF6533"></stop><stop offset="15.7%" stop-color="#FF5633"></stop><stop offset="43.4%" stop-color="#FF4333"></stop><stop offset="71.4%" stop-color="#FF3733"></stop><stop offset="100%" stop-color="#F33"></stop></linearGradient><linearGradient id="rollupjs-gui-asset-d" x1="51.564%" x2="48.518%" y1="78.344%" y2="41.663%"><stop offset="0%" stop-color="#FF6533"></stop><stop offset="15.7%" stop-color="#FF5633"></stop><stop offset="43.4%" stop-color="#FF4333"></stop><stop offset="71.4%" stop-color="#FF3733"></stop><stop offset="100%" stop-color="#F33"></stop></linearGradient><linearGradient id="rollupjs-gui-asset-e" x1="40.201%" x2="53.975%" y1="47.215%" y2="54.535%"><stop offset="0%" stop-color="#FBB040"></stop><stop offset="100%" stop-color="#FB8840"></stop></linearGradient><linearGradient id="rollupjs-gui-asset-f" x1="55.222%" x2="40.926%" y1="5.888%" y2="128.016%"><stop offset="0%" stop-color="#FFF"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient></defs><g><path fill="url(#rollupjs-gui-asset-a)" d="M256 110.133c0-19.684-5.155-38.137-14.235-54.13-24.077-24.78-76.449-30.52-89.454-.117-13.356 31.166 22.437 65.846 38.078 63.092 19.918-3.514-3.515-49.208-3.515-49.208 30.462 57.41 23.433 39.835-31.634 92.559S43.936 326.297 35.735 330.984c-.352.234-.703.41-1.113.586H250.61c3.807 0 6.268-4.042 4.569-7.44l-56.472-111.773c-1.23-2.402-.352-5.39 1.991-6.737C233.74 186.64 256 151.022 256 110.133"></path><path fill="url(#rollupjs-gui-asset-b)" d="M256 110.133c0-19.684-5.155-38.137-14.235-54.13-24.077-24.78-76.449-30.52-89.454-.117-13.356 31.166 22.437 65.846 38.078 63.092 19.918-3.514-3.515-49.208-3.515-49.208 30.462 57.41 23.433 39.835-31.634 92.559S43.936 326.297 35.735 330.984c-.352.234-.703.41-1.113.586H250.61c3.807 0 6.268-4.042 4.569-7.44l-56.472-111.773c-1.23-2.402-.352-5.39 1.991-6.737C233.74 186.64 256 151.022 256 110.133"></path><path fill="url(#rollupjs-gui-asset-c)" d="M35.735 330.984c8.2-4.687 64.439-115.99 119.505-168.714 55.067-52.723 62.096-35.149 31.634-92.558 0 0-116.577 163.441-158.755 244.283"></path><path fill="url(#rollupjs-gui-asset-d)" d="M52.137 184.53C130.87 39.778 141.181 25.19 182.187 25.19c21.559 0 43.292 9.724 57.352 27.006C220.383 21.324 186.464.644 147.625.059H13.884a5.1 5.1 0 0 0-5.097 5.096v269.591c7.967-20.562 21.5-49.97 43.35-90.215"></path><path fill="url(#rollupjs-gui-asset-e)" d="M155.24 162.27C100.174 214.993 43.936 326.297 35.735 330.984c-8.202 4.686-21.968 5.272-29.291-2.93-7.791-8.728-19.918-22.846 45.693-143.523C130.87 39.777 141.181 25.19 182.187 25.19c21.559 0 43.292 9.724 57.352 27.006.761 1.23 1.523 2.519 2.284 3.808-24.077-24.78-76.448-30.521-89.453-.118-13.357 31.166 22.436 65.846 38.078 63.092 19.917-3.514-3.515-49.208-3.515-49.208 30.403 57.351 23.374 39.777-31.693 92.5"></path><path fill="url(#rollupjs-gui-asset-f)" d="M58.581 190.975C137.314 46.22 147.625 31.634 188.631 31.634c17.75 0 35.618 6.62 49.209 18.57-14.06-16.051-34.915-25.014-55.652-25.014-41.007 0-51.318 14.587-130.05 159.34C-13.475 305.209-1.348 319.327 6.443 328.056c1.113 1.23 2.402 2.285 3.75 3.163C3.338 321.26.292 298.12 58.58 190.975" opacity=".3"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
