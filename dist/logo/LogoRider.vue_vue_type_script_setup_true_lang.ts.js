import { defineComponent as i, computed as p, openBlock as r, createElementBlock as l, normalizeStyle as n, createStaticVNode as a } from "vue";
const g = /* @__PURE__ */ i({
  __name: "LogoRider",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const o = e, s = p(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (d, t) => (r(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: n(s.value)
    }, t[0] || (t[0] = [
      a('<defs><linearGradient id="rider-gui-asset-a" x1="90.832%" x2="-19.123%" y1="81.803%" y2="19.04%"><stop offset="0%" stop-color="#DD1265"></stop><stop offset="48%" stop-color="#DD1265"></stop><stop offset="94%" stop-color="#FDB60D"></stop></linearGradient><linearGradient id="rider-gui-asset-b" x1="35.983%" x2="53.7%" y1="7.271%" y2="92.994%"><stop offset="14%" stop-color="#087CFA"></stop><stop offset="48%" stop-color="#DD1265"></stop><stop offset="96%" stop-color="#087CFA"></stop></linearGradient><linearGradient id="rider-gui-asset-c" x1="39.545%" x2="56.938%" y1="11.352%" y2="91.694%"><stop offset="28%" stop-color="#DD1265"></stop><stop offset="97%" stop-color="#FDB60D"></stop></linearGradient></defs><g><polygon fill="url(#rider-gui-asset-a)" points="256 99.6 76.5333333 0 196.693333 178.533333 221.386667 162.346667"></polygon><polygon fill="url(#rider-gui-asset-b)" points="184.4 58.9866667 161.92 4.02666667 112.186667 52.9866667 132.533333 230.64 180.72 256 256 212.026667"></polygon><polygon fill="url(#rider-gui-asset-c)" points="76.5333333 3.78956126e-14 0 51.5466667 28.4533333 227.36 101.84 255.573333 196.693333 178.533333"></polygon><polygon fill="#000" points="48 48.32 208 48.32 208 208.32 48 208.32"></polygon><path fill="#FFF" d="M67.947 178.08h60v10h-60zM68 68.107h27.467a24 24 0 0 1 17.52 6.106 18.88 18.88 0 0 1 5.188 12.957l-.015.963a18.67 18.67 0 0 1-12.907 18.667l14.72 21.493H104.48L91.6 109.04H81.333v19.253H68zM94.667 97.44c6.238 0 9.91-3.214 10.147-8.005l.013-.662c0-5.68-3.947-8.613-10.4-8.613H81.333v17.28zm34.48-29.333h23.466c18.616 0 31.596 12.59 31.991 29.141l.01.965c0 16.934-13.067 30.08-32 30.08h-23.467zm13.333 11.946v36.267h10.24a17.147 17.147 0 0 0 18.155-17.206l-.022-.927a17.307 17.307 0 0 0-18.133-18.16z"></path></g>', 2)
    ]), 4));
  }
});
export {
  g as _
};
