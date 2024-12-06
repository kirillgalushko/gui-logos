import { defineComponent as i, computed as d, openBlock as r, createElementBlock as p, normalizeStyle as a, createStaticVNode as f } from "vue";
const c = /* @__PURE__ */ i({
  __name: "LogoFreedomdefined",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, s = d(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (n, t) => (r(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: a(s.value)
    }, t[0] || (t[0] = [
      f('<defs><linearGradient id="freedomdefined-gui-asset-a" x1="0%" x2="50%" y1="0%" y2="50%"><stop offset="0%" stop-color="#FF5959"></stop><stop offset="100%" stop-color="#DF0000"></stop></linearGradient><linearGradient id="freedomdefined-gui-asset-b" x1=".847%" x2="50.04%" y1="99.193%" y2="50%"><stop offset="0%" stop-color="#FFB73D"></stop><stop offset="100%" stop-color="#FFA000"></stop></linearGradient><linearGradient id="freedomdefined-gui-asset-c" x1="92.819%" x2="50%" y1="92.819%" y2="50%"><stop offset="0%" stop-color="#FFF18D"></stop><stop offset="100%" stop-color="#FFCD01"></stop></linearGradient><linearGradient id="freedomdefined-gui-asset-d" x1="82.171%" x2="4.076%" y1="82.171%" y2="4.076%"><stop offset="0%" stop-color="#FFF"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="freedomdefined-gui-asset-e" x1="2.904%" x2="50%" y1="97.096%" y2="50%"><stop offset="0%" stop-color="#00A000" stop-opacity=".259"></stop><stop offset="100%" stop-color="green"></stop></linearGradient><linearGradient id="freedomdefined-gui-asset-f" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stop-color="#263CCE"></stop><stop offset="100%" stop-color="#263CCE" stop-opacity="0"></stop></linearGradient><linearGradient id="freedomdefined-gui-asset-g" x1="50%" x2="-42.783%" y1="50%" y2="-3.568%"><stop offset="0%" stop-color="#652F99"></stop><stop offset="100%" stop-color="#502679" stop-opacity=".652"></stop></linearGradient></defs><g><path fill="url(#freedomdefined-gui-asset-a)" d="M255.41 127.41c0 70.367-57.043 127.41-127.41 127.41S.59 197.777.59 127.41 57.633 0 128 0v127.41z"></path><path fill="url(#freedomdefined-gui-asset-b)" d="M128 236.619c-60.314 0-109.209-48.894-109.209-109.209C18.791 67.096 67.686 18.201 128 18.201s109.209 48.895 109.209 109.21H128z"></path><path fill="url(#freedomdefined-gui-asset-c)" d="M219.008 127.41c0 50.262-40.746 91.008-91.008 91.008s-91.007-40.746-91.007-91.008S77.74 36.403 128 36.403v91.007z" transform="rotate(180 128 127.41)"></path><path fill="url(#freedomdefined-gui-asset-d)" d="M128 54.605c40.21 0 72.806 32.596 72.806 72.806S168.209 200.216 128 200.216c-40.21 0-72.806-32.596-72.806-72.805H128z"></path><path fill="url(#freedomdefined-gui-asset-e)" d="M182.605 127.41c0 30.157-24.448 54.604-54.605 54.604s-54.604-24.447-54.604-54.604S97.843 72.806 128 72.806v54.604z"></path><path fill="url(#freedomdefined-gui-asset-f)" d="M128 164.541c-20.104 0-36.402-16.298-36.402-36.403S107.896 91.735 128 91.735s36.403 16.298 36.403 36.403H128z"></path><path fill="url(#freedomdefined-gui-asset-g)" d="M146.202 127.41a18.201 18.201 0 1 1-36.403 0 18.201 18.201 0 0 1 36.403 0" transform="rotate(180 128 127.41)"></path></g>', 2)
    ]), 4));
  }
});
export {
  c as _
};