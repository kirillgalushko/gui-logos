import { defineComponent as a, computed as r, openBlock as e, createElementBlock as l, normalizeStyle as g, createStaticVNode as p } from "vue";
const f = /* @__PURE__ */ a({
  __name: "LogoOrigami",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const i = o, s = r(() => ({
      width: i.width || "1em",
      height: i.height || "1em",
      minWidth: i.width || "1em",
      minHeight: i.height || "1em"
    }));
    return (m, t) => (e(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: g(s.value)
    }, t[0] || (t[0] = [
      p('<defs><radialGradient id="origami-gui-asset-a" cx="26.196%" cy="9.36%" r="105.51%" fx="26.196%" fy="9.36%" gradientTransform="matrix(.52887 .8454 -.8487 .5268 .203 -.177)"><stop offset="0%" stop-color="#51C3F7"></stop><stop offset="100%" stop-color="#046CF4"></stop></radialGradient><radialGradient id="origami-gui-asset-d" cx="-15.313%" cy="-13.633%" r="181.001%" fx="-15.313%" fy="-13.633%" gradientTransform="scale(1 .90955)rotate(15.27 -.103 -.143)"><stop offset="0%" stop-color="#FFF"></stop><stop offset="100%" stop-color="#5CB5FF"></stop></radialGradient><radialGradient id="origami-gui-asset-e" cx="69.551%" cy="-14.976%" r="205.05%" fx="69.551%" fy="-14.976%" gradientTransform="matrix(-.45604 .51346 -.88996 -.26311 .88 -.546)"><stop offset="0%" stop-color="#FFF"></stop><stop offset="100%" stop-color="#7AC2FF"></stop></radialGradient><radialGradient id="origami-gui-asset-f" cx="40.071%" cy="19.981%" r="98.92%" fx="40.071%" fy="19.981%" gradientTransform="matrix(.5143 .57232 -.8576 .34322 .366 -.098)"><stop offset="0%" stop-color="#FFF"></stop><stop offset="100%" stop-color="#CBE7FF"></stop></radialGradient><path id="origami-gui-asset-b" d="M127.755 256c70.416 0 127.5-57.307 127.5-128 0-70.692-57.084-128-127.5-128C57.338 0 .255 57.308.255 128s57.083 128 127.5 128"></path></defs><g><path fill="url(#origami-gui-asset-a)" d="M127.755 256c70.416 0 127.5-57.307 127.5-128 0-70.692-57.084-128-127.5-128C57.338 0 .255 57.308.255 128s57.083 128 127.5 128"></path><mask id="origami-gui-asset-c" fill="#fff"><use xlink:href="#origami-gui-asset-b"></use></mask><polygon fill="#E8F5FF" points="136.981818 58.7636364 194.745455 119.854545 144.988659 108.218182" mask="url(#origami-gui-asset-c)"></polygon><path fill="#64A4D8" d="m138.379 67.243 14.525 42.993-8.211-2.018z" mask="url(#origami-gui-asset-c)"></path><polygon fill="url(#origami-gui-asset-d)" points="21.3636364 140.8 -94 13.9636364 6.17220664 35.9065018" mask="url(#origami-gui-asset-c)"></polygon><polygon fill="url(#origami-gui-asset-e)" points="159.487855 196.996655 136.503324 58.7636364 79.7349818 127.880145" mask="url(#origami-gui-asset-c)"></polygon><path fill="#4492D2" d="m89.116 116.735 34.936 43.464-37.688-40.054z" mask="url(#origami-gui-asset-c)"></path><polygon fill="url(#origami-gui-asset-f)" points="56.7247255 335.584582 -40.5537164 108.739491 4.62124364 35.4909091 159.711855 197.174109" mask="url(#origami-gui-asset-c)"></polygon></g>', 2)
    ]), 4));
  }
});
export {
  f as _
};
