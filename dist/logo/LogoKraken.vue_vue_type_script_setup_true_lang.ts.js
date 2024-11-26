import { defineComponent as r, computed as a, openBlock as p, createElementBlock as l, normalizeStyle as i, createStaticVNode as n } from "vue";
const d = /* @__PURE__ */ r({
  __name: "LogoKraken",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, e = a(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (f, o) => (p(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "229",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 229",
      style: i(e.value)
    }, o[0] || (o[0] = [
      n('<defs><linearGradient id="kraken-gui-asset-a" x1="-33.923%" x2="157.868%" y1="50.023%" y2="50.023%"><stop offset="0%" stop-color="#000"></stop><stop offset="28%" stop-color="#2E3192"></stop><stop offset="59%" stop-color="#3E5AA8"></stop><stop offset="82%" stop-color="#0093D3"></stop><stop offset="100%" stop-color="#00AEEF"></stop></linearGradient><linearGradient id="kraken-gui-asset-b" x1="-46.425%" x2="198.911%" y1="49.968%" y2="49.968%"><stop offset="0%" stop-color="#000"></stop><stop offset="23%" stop-color="#2E3192"></stop><stop offset="47%" stop-color="#3E5AA8"></stop><stop offset="78%" stop-color="#0075BE"></stop><stop offset="100%" stop-color="#00AEEF"></stop></linearGradient><linearGradient id="kraken-gui-asset-c" x1="-60.263%" x2="192.566%" y1="104.922%" y2="-14.678%"><stop offset="0%" stop-color="#F58220"></stop><stop offset="47%" stop-color="#ED1C24"></stop><stop offset="100%" stop-color="#AE2538"></stop></linearGradient><linearGradient id="kraken-gui-asset-d" x1="-3.608%" x2="73.591%" y1="95.55%" y2="2.579%"><stop offset="0%" stop-color="#F58220"></stop><stop offset="38%" stop-color="#ED1C24"></stop><stop offset="100%" stop-color="#A71C20"></stop></linearGradient><linearGradient id="kraken-gui-asset-e" x1="-9.761%" x2="142.413%" y1="17.45%" y2="97.684%"><stop offset="0%" stop-color="#F58220"></stop><stop offset="50%" stop-color="#FFCB05"></stop><stop offset="100%" stop-color="#FFF200"></stop></linearGradient><linearGradient id="kraken-gui-asset-f" x1="28.061%" x2="63.077%" y1="-13.855%" y2="118.708%"><stop offset="0%" stop-color="#FFF200"></stop><stop offset="100%" stop-color="#F99D1C"></stop></linearGradient><linearGradient id="kraken-gui-asset-g" x1="33.093%" x2="86.963%" y1="77.266%" y2="36.744%"><stop offset="0%" stop-color="#F26522"></stop><stop offset="100%" stop-color="#C61D23"></stop></linearGradient><linearGradient id="kraken-gui-asset-h" x1="40.935%" x2="67.749%" y1="59.884%" y2="-81.382%"><stop offset="0%" stop-color="#2E3192"></stop><stop offset="100%" stop-color="#61A2D8"></stop></linearGradient><linearGradient id="kraken-gui-asset-i" x1="40.966%" x2="67.715%" y1="40.117%" y2="181.378%"><stop offset="0%" stop-color="#2E3192"></stop><stop offset="100%" stop-color="#61A2D8"></stop></linearGradient></defs><g><path fill="url(#kraken-gui-asset-a)" d="m192.9 3.5-64 110.8 64 110.8c3.6-2.1 6.6-5.1 8.8-9l51.8-89.8c4.4-7.7 4.4-16.5 0-24.2l-51.8-89.8c-2.2-3.7-5.2-6.7-8.8-8.8" transform="translate(-1)"></path><path fill="url(#kraken-gui-asset-b)" d="m128.9 114.4 41.4 71.6c.4-.5.8-1.1 1.1-1.7l35.6-61.6c3-5.3 3-11.4 0-16.6l-35.6-61.6c-.4-.6-.7-1.1-1.1-1.7z" transform="translate(-1)"></path><path fill="url(#kraken-gui-asset-c)" d="M128.9 114.4 96 57.4l95-54.8c.7.3 1.3.6 1.9 1z" transform="translate(-1)"></path><path fill="url(#kraken-gui-asset-d)" d="M56.1 216.3c-17.3-29.9-34.6-59.9-51.8-89.8-1.8-3.2-2.9-6.6-3.2-10l95 54.8-31.2 53.9c-3.5-2.1-6.6-5.1-8.8-8.9" transform="translate(-1)"></path><path fill="url(#kraken-gui-asset-e)" d="m96 171.4 95 54.8c.7-.3 1.3-.6 1.9-1l-64-110.8z" transform="translate(-1)"></path><path fill="url(#kraken-gui-asset-f)" d="M56.2 12.4 4.3 102.3c-1.8 3.2-2.9 6.5-3.2 9.9l95-54.8L64.9 3.5c-3.5 2.1-6.5 5-8.7 8.9" transform="translate(-1)"></path><path fill="url(#kraken-gui-asset-g)" d="m96 57.3 32.9 57-32.9 57-95-54.8c-.1-1.4-.1-2.9 0-4.3z" transform="translate(-1)"></path><path fill="url(#kraken-gui-asset-h)" d="m96 57.3 95-54.8c-3.1-1.4-6.6-2.2-10.2-2.2H77.1C72.7.3 68.5 1.4 65 3.5z" transform="translate(-1)"></path><path fill="url(#kraken-gui-asset-i)" d="M64.9 225.2 96 171.4l95 54.8c-3.1 1.4-6.6 2.2-10.2 2.2H77.1c-4.5 0-8.6-1.1-12.2-3.2" transform="translate(-1)"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
