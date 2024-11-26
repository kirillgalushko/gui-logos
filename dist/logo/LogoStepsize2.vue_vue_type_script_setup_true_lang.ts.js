import { defineComponent as l, computed as e, openBlock as i, createElementBlock as n, normalizeStyle as g, createStaticVNode as r } from "vue";
const a = /* @__PURE__ */ l({
  __name: "LogoStepsize2",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const o = s, p = e(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (f, t) => (i(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "236",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 236",
      style: g(p.value)
    }, t[0] || (t[0] = [
      r('<defs><linearGradient id="stepsize-2-gui-asset-a" x1="32.521%" x2="102.581%" y1="-18.705%" y2="72.992%"><stop offset="0%" stop-color="#613AB5"></stop><stop offset="19.808%" stop-color="#613AB5"></stop><stop offset="100%" stop-color="#D11E8E"></stop></linearGradient><linearGradient id="stepsize-2-gui-asset-b" x1="-2.438%" x2="67.621%" y1="26.908%" y2="118.609%"><stop offset="0%" stop-color="#613AB5"></stop><stop offset="19.808%" stop-color="#613AB5"></stop><stop offset="100%" stop-color="#D11E8E"></stop></linearGradient><linearGradient id="stepsize-2-gui-asset-c" x1="67.479%" x2="-2.581%" y1="118.709%" y2="27.009%"><stop offset="0%" stop-color="#D11E8E"></stop><stop offset="80.192%" stop-color="#613AB5"></stop><stop offset="100%" stop-color="#613AB5"></stop></linearGradient><linearGradient id="stepsize-2-gui-asset-d" x1="102.438%" x2="32.377%" y1="73.093%" y2="-18.613%"><stop offset="0%" stop-color="#D11E8E"></stop><stop offset="80.192%" stop-color="#613AB5"></stop><stop offset="100%" stop-color="#613AB5"></stop></linearGradient></defs><g><path fill="#D11E8E" d="M256 56.391 214.943.813H97.41L61.182 112.775l41.057 55.579L137.66 56.391zM153.761 66.863l40.252 55.578-34.616 111.963H41.057L0 178.826h118.34z"></path><polygon fill="#D11E8E" points="158.865705 235.204491 100.008355 235.028854 117.714765 178.811317"></polygon><polygon fill="#9F20A8" points="99.9965146 235.011751 41.1391652 234.836114 58.8455746 178.618577"></polygon><polygon fill="#9F20A8" points="135.417227 122.595095 194.274577 122.770732 176.568167 178.988269"></polygon><polygon fill="#613AB5" points="-3.61424262e-15 178.464648 58.8574152 178.639627 41.1510058 234.857164"></polygon><polygon fill="#613AB5" points="194.274577 122.765469 135.417227 122.59049 153.123637 66.3722951"></polygon><polygon fill="#D11E8E" points="117.712791 178.811317 176.570141 178.986953 158.863731 235.204491"></polygon><polygon fill="url(#stepsize-2-gui-asset-a)" points="99.9965146 235.030828 117.700951 178.815264 58.8436011 178.640285"></polygon><polygon fill="url(#stepsize-2-gui-asset-b)" points="117.712791 178.815264 176.570141 178.988269 135.417227 122.595095"></polygon><polygon fill="#613AB5" points="97.1304142 6.57815113e-05 155.987764 0.175307728 138.281354 56.3932398"></polygon><polygon fill="#9F20A8" points="155.999604 0.199186416 214.856954 0.374428363 197.150544 56.5919"></polygon><polygon fill="#9F20A8" points="120.578892 112.615382 61.7215422 112.440403 79.4279516 56.2228657"></polygon><polygon fill="#D11E8E" points="255.996053 56.7464865 197.138704 56.5708499 214.845771 0.353378279"></polygon><polygon fill="#D11E8E" points="61.7215422 112.439087 120.578892 112.614066 102.872482 168.831604"></polygon><polygon fill="#613AB5" points="138.283328 56.3932398 79.4259782 56.2176032 97.1323876 3.61424262e-15"></polygon><polygon fill="url(#stepsize-2-gui-asset-c)" points="138.295168 56.3932398 197.152518 56.5662452 155.999604 0.173531627"></polygon><polygon fill="url(#stepsize-2-gui-asset-d)" points="120.574287 112.615382 138.281354 56.3978445 79.4259782 56.2228657"></polygon></g>', 2)
    ]), 4));
  }
});
export {
  a as _
};
