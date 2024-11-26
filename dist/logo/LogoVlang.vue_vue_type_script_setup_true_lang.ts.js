import { defineComponent as a, computed as l, openBlock as o, createElementBlock as r, normalizeStyle as n, createStaticVNode as u } from "vue";
const d = /* @__PURE__ */ a({
  __name: "LogoVlang",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, s = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (g, t) => (o(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "256",
      height: "253",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 253",
      style: n(s.value)
    }, t[0] || (t[0] = [
      u('<defs><polygon id="vlang-gui-asset-c" points="158.907005 248.922264 122.811005 144.647914 127.967406 141.42494 164.708478 247.774739"></polygon><filter id="vlang-gui-asset-d" width="181.4%" height="132.2%" x="-40.2%" y="-14.9%" filterUnits="objectBoundingBox"><feMorphology in="SourceAlpha" operator="dilate" radius="2" result="shadowSpreadOuter1"></feMorphology><feOffset dx="0" dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="3"></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix></filter><path id="vlang-gui-asset-a" d="m5.614.039 68.178 6.568c4.325.417 9.001 4.084 10.437 8.185l43.851 125.291 43.638-125.287c1.397-4.014 5.899-7.613 10.142-8.158l.283-.031L250.32.039c4.326-.417 6.643 2.564 5.173 6.653l-86.696 241.083-.413 1.147c-.47 1.308-1.605 2.458-2.93 3.117-.483.372-1.136.587-1.919.587h-66.78q-.124 0-.246-.003l.246.003a9 9 0 0 1-.493-.014c-4.203-.237-8.629-3.459-10.043-7.394L.442 6.692c-1.47-4.089.847-7.07 5.172-6.653"></path></defs><g><mask id="vlang-gui-asset-b" fill="#fff"><use xlink:href="#vlang-gui-asset-a"></use></mask><path fill="#536B8A" d="M168.797 247.775 255.493 6.692c1.47-4.089-.847-7.07-5.173-6.653l-68.177 6.568c-4.325.417-8.997 4.086-10.425 8.189L91.473 245.193c-1.43 4.102.937 7.433 5.282 7.433h66.36c2.173 0 4.534-1.659 5.269-3.704z" mask="url(#vlang-gui-asset-b)"></path><g fill="#000" fill-opacity="1" mask="url(#vlang-gui-asset-b)"><use xlink:href="#vlang-gui-asset-c" filter="url(#vlang-gui-asset-d)"></use></g><path fill="#5D87BF" d="m5.614.039 68.178 6.568c4.325.417 9.001 4.084 10.437 8.185l81.943 234.12c.717 2.05-.464 3.714-2.637 3.714h-66.78c-4.345 0-9.066-3.319-10.536-7.408L.442 6.692c-1.47-4.089.847-7.07 5.172-6.653" mask="url(#vlang-gui-asset-b)"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
