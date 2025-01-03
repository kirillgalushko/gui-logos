import { defineComponent as i, computed as o, openBlock as r, createElementBlock as l, normalizeStyle as p, createStaticVNode as n } from "vue";
const h = /* @__PURE__ */ i({
  __name: "LogoTeams",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, a = o(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (c, e) => (r(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 32 32",
      style: p(a.value)
    }, e[0] || (e[0] = [
      n('<path fill="url(#teams-gui-asset-a)" d="M19 13.903c0-.499.404-.903.903-.903h11.194c.499 0 .903.404.903.903V20.5a6.5 6.5 0 1 1-13 0z"></path><path fill="url(#teams-gui-asset-b)" d="M9 12.226C9 11.549 9.549 11 10.226 11h13.548c.677 0 1.226.549 1.226 1.226V22a8 8 0 1 1-16 0z"></path><circle cx="27" cy="8" r="3" fill="#34439E"></circle><circle cx="27" cy="8" r="3" fill="url(#teams-gui-asset-c)"></circle><circle cx="18" cy="6" r="4" fill="url(#teams-gui-asset-d)"></circle><mask id="teams-gui-asset-g" width="16" height="30" x="9" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha;"><path fill="url(#teams-gui-asset-e)" d="M17 10a5 5 0 1 0 0-10 5 5 0 0 0 0 10"></path><path fill="url(#teams-gui-asset-f)" d="M10.226 11C9.549 11 9 11.549 9 12.226V22a8 8 0 1 0 16 0v-9.774c0-.677-.549-1.226-1.226-1.226z"></path></mask><g mask="url(#teams-gui-asset-g)"><path fill="#000" fill-opacity=".3" d="M7 12a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7z"></path></g><rect width="18" height="18" y="7" fill="url(#teams-gui-asset-h)" rx="2"></rect><path fill="#fff" d="M13 11H5v1.835h2.995V21h2.01v-8.165H13z"></path><defs><linearGradient id="teams-gui-asset-a" x1="19" x2="32.159" y1="13.737" y2="22.335" gradientUnits="userSpaceOnUse"><stop stop-color="#364088"></stop><stop offset="1" stop-color="#6E7EE1"></stop></linearGradient><linearGradient id="teams-gui-asset-b" x1="9" x2="25" y1="19.404" y2="19.404" gradientUnits="userSpaceOnUse"><stop stop-color="#515FC4"></stop><stop offset="1" stop-color="#7084EA"></stop></linearGradient><linearGradient id="teams-gui-asset-c" x1="24" x2="29.796" y1="5.316" y2="9.395" gradientUnits="userSpaceOnUse"><stop stop-color="#364088"></stop><stop offset="1" stop-color="#6E7EE1"></stop></linearGradient><linearGradient id="teams-gui-asset-d" x1="15.143" x2="20.286" y1="3.143" y2="9.143" gradientUnits="userSpaceOnUse"><stop stop-color="#4858AE"></stop><stop offset="1" stop-color="#4E60CE"></stop></linearGradient><linearGradient id="teams-gui-asset-e" x1="13.429" x2="19.857" y1="1.429" y2="8.929" gradientUnits="userSpaceOnUse"><stop stop-color="#4858AE"></stop><stop offset="1" stop-color="#4E60CE"></stop></linearGradient><linearGradient id="teams-gui-asset-f" x1="13.429" x2="19.857" y1="1.429" y2="8.929" gradientUnits="userSpaceOnUse"><stop stop-color="#4858AE"></stop><stop offset="1" stop-color="#4E60CE"></stop></linearGradient><linearGradient id="teams-gui-asset-h" x1="0" x2="18" y1="16" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="#2A3887"></stop><stop offset="1" stop-color="#4C56B9"></stop></linearGradient></defs>', 10)
    ]), 4));
  }
});
export {
  h as _
};
