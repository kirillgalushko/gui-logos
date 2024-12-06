import { defineComponent as i, computed as p, openBlock as r, createElementBlock as n, normalizeStyle as a, createStaticVNode as l } from "vue";
const f = /* @__PURE__ */ i({
  __name: "LogoEngineYard2",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, s = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, o) => (r(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "254",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 254",
      style: a(s.value)
    }, o[0] || (o[0] = [
      l('<defs><linearGradient id="engine-yard-2-gui-asset-a" x1="61.05%" x2="38.45%" y1="82.514%" y2="28.19%"><stop offset="0%" stop-color="#477CD8"></stop><stop offset="16%" stop-color="#4573D2"></stop><stop offset="43%" stop-color="#3F5BC2"></stop><stop offset="76%" stop-color="#3633A7"></stop><stop offset="100%" stop-color="#2F1391"></stop></linearGradient><linearGradient id="engine-yard-2-gui-asset-b" x1="62.857%" x2="52.43%" y1="19.708%" y2="78.902%"><stop offset="0%" stop-color="#2055DA"></stop><stop offset="11%" stop-color="#2055DA"></stop><stop offset="100%" stop-color="#00BFF6"></stop></linearGradient></defs><g><path fill="url(#engine-yard-2-gui-asset-a)" d="M72.715 126.611c0-29.75 24.117-53.866 53.866-53.866 29.75 0 53.867 24.117 53.867 53.866 0 29.75-24.117 53.866-53.867 53.866s-53.866-24.116-53.866-53.866m-72.715 0c0 69.893 56.659 126.552 126.552 126.552 69.892 0 126.551-56.66 126.551-126.552S196.444.06 126.552.06C56.7.158.098 56.76 0 126.61"></path><path fill="url(#engine-yard-2-gui-asset-b)" d="m152.457 38.918-25.965 33.857c29.232.687 52.57 24.581 52.57 53.821s-23.338 53.134-52.57 53.822L93.976 217.37l32.516 35.732c45.254 1.044 87.622-22.156 111.116-60.848 23.495-38.691 24.54-86.984 2.742-126.656S177.228.915 131.97 0h-5.478z"></path></g>', 2)
    ]), 4));
  }
});
export {
  f as _
};