import { defineComponent as s, computed as i, openBlock as l, createElementBlock as r, normalizeStyle as a, createStaticVNode as p } from "vue";
const d = /* @__PURE__ */ s({
  __name: "LogoFlarum",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, h = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (m, e) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "116",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 116",
      style: a(h.value)
    }, e[0] || (e[0] = [
      p('<defs><linearGradient id="flarum-gui-asset-a" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#D22929"></stop><stop offset="100%" stop-color="#B71717"></stop></linearGradient><linearGradient id="flarum-gui-asset-b" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#E7762E"></stop><stop offset="100%" stop-color="#E7562E"></stop></linearGradient></defs><g><path fill="url(#flarum-gui-asset-a)" d="M.025 75.93.002 5.16C0 2.31 1.963 1.226 4.375 2.733l50.79 31.744v79.3L7.584 84.9C.99 81.31.034 79.082.025 75.93"></path><path fill="url(#flarum-gui-asset-b)" d="M5.176 0A5.174 5.174 0 0 0 0 5.184v70.668c.144 2.429.02 4.961 7.733 9.107 0 0-7.558-7.343 4.334-7.383H96.54V0zm134.46 20.687v24.135h25.859v22.41h-25.859v46.546H118.95V0h49.994v20.687zm36.202 93.09V0h20.687v93.09h29.307v20.688zm96.54-22.41h-15.516l-3.448 22.41h-22.41L251.69 0h25.859l20.687 113.778h-22.411zm-10.344-39.65L260.31 70.68h10.343l-1.724-18.963-3.448-22.41zM330.99 0c4.572 0 8.71.572 12.067 1.724 4.184 1.137 7.432 3.044 10.344 5.172 2.535 3.212 4.656 6.7 6.895 10.343.799 4.966 1.558 10.225 1.724 17.24-.166 6.934-1.161 13.255-3.448 18.962-1.694 4.102-4.731 8.025-8.62 10.344l15.516 49.993h-22.41L330.99 68.956h-5.172v44.822h-20.687V0zm-5.172 20.687v27.582h3.448c1.615 0 3.14-.196 5.172 0 .798-.98 2.077-1.738 3.448-3.447.916-.533 1.814-2.019 1.723-3.448 1.398-2.27 1.724-4.71 1.724-6.896 0-5.326-1.061-8.605-3.447-10.343-1.86-2.411-4.61-3.448-8.62-3.448zm98.263 65.508c0 10.194-2.331 17.498-6.896 22.411-4.759 4.534-11.648 6.896-20.687 6.896-18.414 0-27.582-9.667-27.582-29.307V0h20.687v86.195s-.645 8.348 6.895 8.62c7.541.271 6.896-8.62 6.896-8.62V0h20.687zm41.374 5.172-3.448-13.791-5.172-17.24h-1.724v53.442h-20.687V0h20.687l10.344 31.03 6.895 22.411h1.724l6.896-24.135L491.313 0H512v113.778h-20.687V60.337h-1.724l-5.171 17.239-3.448 13.791z"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};