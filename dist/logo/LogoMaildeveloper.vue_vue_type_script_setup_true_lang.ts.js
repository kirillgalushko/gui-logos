import { defineComponent as l, computed as s, openBlock as n, createElementBlock as r, normalizeStyle as p, createStaticVNode as h } from "vue";
const m = /* @__PURE__ */ l({
  __name: "LogoMaildeveloper",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, i = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (d, t) => (n(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "159",
      version: "1.1",
      viewBox: "0 0 256 159",
      style: p(i.value)
    }, t[0] || (t[0] = [
      h('<defs><linearGradient id="maildeveloper-gui-asset-a" x1="50%" x2="0%" y1="33.756%" y2="100%"><stop offset="0%" stop-color="#60676F"></stop><stop offset="100%" stop-color="#303439"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g fill-rule="nonzero"><polygon fill="#393E42" points="21.3308235 158.117647 21.3308235 115.952941 149.330824 115.952941 149.330824 158.117647"></polygon><path fill="#60676F" d="M0 158.118V0h42.67l42.66 42.165L128 0h42.67S256 0 256 79.059s-85.33 79.059-85.33 79.059H128V52.706L85.33 94.87 42.67 52.706v105.412zM170.67 42.165v73.788s41.787 0 42.66-36.894c.882-36.894-42.66-36.894-42.66-36.894"></path><path fill="url(#maildeveloper-gui-asset-a)" d="M252.755 54.37c2.07 7.228 3.245 15.413 3.245 24.689 0 79.059-85.33 79.059-85.33 79.059V21.082s51.365 8.787 82.085 33.288m-82.086-12.205v73.788s41.788 0 42.662-36.894c.88-36.894-42.662-36.894-42.662-36.894"></path></g></g>', 2)
    ]), 4));
  }
});
export {
  m as _
};
