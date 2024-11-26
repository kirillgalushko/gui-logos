import { defineComponent as r, computed as a, openBlock as l, createElementBlock as p, normalizeStyle as i, createStaticVNode as c } from "vue";
const n = /* @__PURE__ */ r({
  __name: "LogoCloudflareWorkers2",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const o = s, e = a(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (f, t) => (l(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "231",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 231",
      style: i(e.value)
    }, t[0] || (t[0] = [
      c('<defs><linearGradient id="cloudflare-workers-2-gui-asset-a" x1="50%" x2="25.7%" y1="100%" y2="8.7%"><stop offset="0%" stop-color="#EB6F07"></stop><stop offset="100%" stop-color="#FAB743"></stop></linearGradient><linearGradient id="cloudflare-workers-2-gui-asset-b" x1="81%" x2="40.5%" y1="83.7%" y2="29.5%"><stop offset="0%" stop-color="#D96504"></stop><stop offset="100%" stop-color="#D96504" stop-opacity="0"></stop></linearGradient><linearGradient id="cloudflare-workers-2-gui-asset-c" x1="42%" x2="84%" y1="8.7%" y2="79.9%"><stop offset="0%" stop-color="#EB6F07"></stop><stop offset="100%" stop-color="#EB720A" stop-opacity="0"></stop></linearGradient><linearGradient id="cloudflare-workers-2-gui-asset-d" x1="50%" x2="25.7%" y1="100%" y2="8.7%"><stop offset="0%" stop-color="#EE6F05"></stop><stop offset="100%" stop-color="#FAB743"></stop></linearGradient><linearGradient id="cloudflare-workers-2-gui-asset-e" x1="-33.2%" x2="91.7%" y1="100%" y2="0%"><stop offset="0%" stop-color="#D96504" stop-opacity=".8"></stop><stop offset="49.8%" stop-color="#D96504" stop-opacity=".2"></stop><stop offset="100%" stop-color="#D96504" stop-opacity="0"></stop></linearGradient><linearGradient id="cloudflare-workers-2-gui-asset-f" x1="50%" x2="25.7%" y1="100%" y2="8.7%"><stop offset="0%" stop-color="#FFA95F"></stop><stop offset="100%" stop-color="#FFEBC8"></stop></linearGradient><linearGradient id="cloudflare-workers-2-gui-asset-g" x1="8.1%" x2="96.5%" y1="1.1%" y2="48.8%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"></stop><stop offset="100%" stop-color="#FFF" stop-opacity=".1"></stop></linearGradient><linearGradient id="cloudflare-workers-2-gui-asset-h" x1="-13.7%" x2="100%" y1="104.2%" y2="46.2%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"></stop><stop offset="100%" stop-color="#FFF" stop-opacity=".1"></stop></linearGradient></defs><g><path fill="url(#cloudflare-workers-2-gui-asset-a)" d="m65.82 3.324 30.161 54.411-27.698 49.857a16 16 0 0 0 0 15.573l27.698 49.98-30.16 54.411a32 32 0 0 1-13.542-12.74L4.27 131.412a32.13 32.13 0 0 1 0-32.007l48.01-83.403a32 32 0 0 1 13.542-12.68"></path><path fill="url(#cloudflare-workers-2-gui-asset-b)" d="M68.283 107.654a16 16 0 0 0 0 15.51l27.698 49.98-30.16 54.412a32 32 0 0 1-13.542-12.74L4.27 131.412c-3.816-6.586 17.542-14.465 64.014-23.698z" opacity=".7"></path><path fill="url(#cloudflare-workers-2-gui-asset-c)" d="m68.898 8.802 27.083 48.933-4.493 7.818-23.882-40.44c-6.894-11.264-17.42-5.416-30.591 17.358l1.97-3.386 13.294-23.082a32 32 0 0 1 13.419-12.68l3.139 5.479z" opacity=".5"></path><path fill="url(#cloudflare-workers-2-gui-asset-d)" d="m203.696 16.003 48.01 83.403c5.725 9.848 5.725 22.159 0 32.007l-48.01 83.402a32.01 32.01 0 0 1-27.698 16.004h-48.01l59.705-107.654a16 16 0 0 0 0-15.511L127.988 0h48.01a32.01 32.01 0 0 1 27.698 16.003"></path><path fill="url(#cloudflare-workers-2-gui-asset-e)" d="m173.536 230.45-47.395.43 57.367-108.208a16.62 16.62 0 0 0 0-15.634L126.14 0h10.834l60.197 106.546a16.62 16.62 0 0 1-.062 16.496 9617 9617 0 0 0-38.592 67.707c-11.695 20.558-6.648 33.791 15.018 39.7"></path><path fill="url(#cloudflare-workers-2-gui-asset-f)" d="M79.978 230.819c-4.924 0-9.849-1.17-14.157-3.263l59.212-106.792a11.05 11.05 0 0 0 0-10.71L65.821 3.324A32 32 0 0 1 79.978 0h48.01l59.705 107.654a16 16 0 0 1 0 15.51L127.988 230.82z"></path><path fill="url(#cloudflare-workers-2-gui-asset-g)" d="M183.508 110.054 122.448 0h5.54l59.705 107.654a16 16 0 0 1 0 15.51L127.988 230.82h-5.54l61.06-110.055a11.05 11.05 0 0 0 0-10.71" opacity=".6"></path><path fill="url(#cloudflare-workers-2-gui-asset-h)" d="M125.033 110.054 65.821 3.324c1.846-.985 4.062-1.724 6.155-2.34 13.049 23.452 32.315 59.029 57.859 106.67a16 16 0 0 1 0 15.51L71.053 229.589c-2.093-.616-3.201-1.047-5.17-1.97l59.089-106.792a11.05 11.05 0 0 0 0-10.71z" opacity=".6"></path></g>', 2)
    ]), 4));
  }
});
export {
  n as _
};
