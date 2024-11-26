import { defineComponent as a, computed as l, openBlock as i, createElementBlock as r, normalizeStyle as p, createStaticVNode as c } from "vue";
const f = /* @__PURE__ */ a({
  __name: "LogoSolidjs",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, e = l(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, s) => (i(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "179",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 179",
      style: p(e.value)
    }, s[0] || (s[0] = [
      c('<defs><linearGradient id="solidjs-gui-asset-a" x1="27.5" x2="152" y1="3" y2="63.5" gradientTransform="translate(-4.833 -4.412)scale(1.20818)" gradientUnits="userSpaceOnUse"><stop offset=".1" stop-color="#76b3e1"></stop><stop offset=".3" stop-color="#dcf2fd"></stop><stop offset="1" stop-color="#76b3e1"></stop></linearGradient><linearGradient id="solidjs-gui-asset-b" x1="95.8" x2="74" y1="32.6" y2="105.2" gradientTransform="translate(-4.833 -4.412)scale(1.20818)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#76b3e1"></stop><stop offset=".5" stop-color="#4377bb"></stop><stop offset="1" stop-color="#1f3b77"></stop></linearGradient><linearGradient id="solidjs-gui-asset-c" x1="18.4" x2="144.3" y1="64.2" y2="149.8" gradientTransform="translate(-4.833 -4.412)scale(1.20818)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#315aa9"></stop><stop offset=".5" stop-color="#518ac8"></stop><stop offset="1" stop-color="#315aa9"></stop></linearGradient><linearGradient id="solidjs-gui-asset-d" x1="75.2" x2="24.4" y1="74.5" y2="260.8" gradientTransform="translate(-4.833 -4.412)scale(1.20818)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4377bb"></stop><stop offset=".5" stop-color="#1a336b"></stop><stop offset="1" stop-color="#1a336b"></stop></linearGradient></defs><g fill="#58595B"><path d="M249.363 100.364a13.12 13.12 0 0 0 8.853 3.716c3.716 0 6.776-2.186 6.776-5.902 0-8.525-16.94-6.448-16.94-16.94 0-4.918 4.371-9.071 10.6-9.071a13.1 13.1 0 0 1 9.072 3.278l-1.64 2.842a11.35 11.35 0 0 0-7.431-2.951c-4.372 0-7.104 2.842-7.214 5.793 0 8.087 16.94 5.792 16.94 16.94 0 5.027-3.934 9.18-10.273 9.18a14.6 14.6 0 0 1-10.71-4.371zm53.663-27.979a17.19 17.19 0 0 1 17.268 17.378 17.487 17.487 0 0 1-17.268 17.705h-.11a17.487 17.487 0 0 1-17.268-17.705v-.11a17.19 17.19 0 0 1 17.378-17.268m-.11 32.023c7.844-.18 14.058-6.682 13.88-14.525v-.12c0-8.088-6.12-14.318-13.77-14.318a13.9 13.9 0 0 0-13.88 14.208c0 8.307 6.12 14.646 13.77 14.755m37.05-31.367h3.28l-.11 30.93h15.739v2.95h-19.127zm37.051.11h3.279l-.11 33.99h-3.278zm25.356 0h10.93c10.164 0 17.05 6.229 17.05 17.049s-6.886 16.94-17.05 16.94h-10.93zm10.492 31.038c8.307 0 13.88-4.918 13.99-13.99.11-9.07-5.574-13.989-13.88-13.989h-7.323l-.11 27.98zm45.753 2.947.336.004a11.22 11.22 0 0 0 7.716-2.754 9.84 9.84 0 0 0 3.126-7.76V73.555h-6.83v22.569a4.6 4.6 0 0 1-1.094 3.278 3.95 3.95 0 0 1-2.785 1.176l-.242-.006q-3.213 0-4.689-3.77l-5.77 3.223q2.774 6.95 10.232 7.111m40.81.085.467-.004c3.793 0 6.766-.94 8.897-2.83a9.43 9.43 0 0 0 3.202-7.422 7.75 7.75 0 0 0-2.732-6.197c-1.836-1.574-4.776-2.929-8.82-4.087a12.9 12.9 0 0 1-4.11-1.716 2.81 2.81 0 0 1-1.202-2.35 2.95 2.95 0 0 1 1.202-2.46 5.03 5.03 0 0 1 3.18-.928 6.2 6.2 0 0 1 6.241 4.066l5.65-3.093a11.06 11.06 0 0 0-4.447-5.301 13.4 13.4 0 0 0-7.148-1.858 12.14 12.14 0 0 0-7.842 2.597l-.3.245a8.86 8.86 0 0 0-3.379 6.85l.001.308a8.2 8.2 0 0 0 2.313 5.91l.223.222q2.285 2.295 8.055 4.032c1.736.416 3.4 1.086 4.94 1.99a2.55 2.55 0 0 1 1.3 2.284 3 3 0 0 1-1.41 2.524 6.16 6.16 0 0 1-3.606.995 7.65 7.65 0 0 1-7.213-4.623l-5.902 3.05a11.86 11.86 0 0 0 4.907 5.715 15 15 0 0 0 7.533 2.081"></path></g><g><path fill="#76b3e1" d="M192.1 37.874S128.067-9.244 78.531 1.629l-3.624 1.208c-7.249 2.417-13.29 6.041-16.915 10.874l-2.416 3.624-18.123 31.413 31.413 6.041c13.29 8.457 30.204 12.082 45.911 8.457l55.576 10.874z"></path><path fill="url(#solidjs-gui-asset-a)" d="M192.1 37.874S128.067-9.244 78.531 1.629l-3.624 1.208c-7.249 2.417-13.29 6.041-16.915 10.874l-2.416 3.624-18.123 31.413 31.413 6.041c13.29 8.457 30.204 12.082 45.911 8.457l55.576 10.874z" opacity=".3"></path><path fill="#518ac8" d="m57.992 37.874-4.832 1.209c-20.539 6.04-26.58 25.371-15.707 42.286 12.082 15.706 37.454 24.163 57.993 18.122l74.907-25.371S106.319 27.001 57.992 37.874"></path><path fill="url(#solidjs-gui-asset-b)" d="m57.992 37.874-4.832 1.209c-20.539 6.04-26.58 25.371-15.707 42.286 12.082 15.706 37.454 24.163 57.993 18.122l74.907-25.371S106.319 27.001 57.992 37.874" opacity=".3"></path><path fill="url(#solidjs-gui-asset-c)" d="M157.063 92.242C143.226 74.956 120.288 67.788 99.07 74.12L24.164 98.283 0 140.569l135.316 22.956 24.163-43.495c4.833-8.457 3.625-18.122-2.416-27.788"></path><path fill="url(#solidjs-gui-asset-d)" d="M132.899 134.528c-13.837-17.286-36.774-24.454-57.992-18.122L0 140.569s64.033 48.327 113.569 36.246l3.624-1.209c20.539-6.04 27.788-25.371 15.706-41.078"></path></g>', 3)
    ]), 4));
  }
});
export {
  f as _
};
