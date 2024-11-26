import { defineComponent as i, computed as p, openBlock as c, createElementBlock as r, normalizeStyle as n, createStaticVNode as l } from "vue";
const f = /* @__PURE__ */ i({
  __name: "LogoWindiCss",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, e = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (a, s) => (c(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "279",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 279",
      style: n(e.value)
    }, s[0] || (s[0] = [
      l('<defs><linearGradient id="windi-css-gui-asset-a" x1="16.639%" x2="137.275%" y1="36.186%" y2="175.371%"><stop offset="7.822%" stop-color="#54C8F1"></stop><stop offset="57.292%" stop-color="#41A2EF"></stop><stop offset="100%" stop-color="#3386EE"></stop></linearGradient><linearGradient id="windi-css-gui-asset-b" x1="-22.099%" x2="91.451%" y1="-49.621%" y2="73.695%"><stop offset="7.822%" stop-color="#54C8F1"></stop><stop offset="57.292%" stop-color="#41A2EF"></stop><stop offset="100%" stop-color="#3386EE"></stop></linearGradient><linearGradient id="windi-css-gui-asset-c" x1="8.696%" x2="71.739%" y1="37.461%" y2="80.271%"><stop offset="7.822%" stop-color="#54C8F1"></stop><stop offset="57.292%" stop-color="#41A2EF"></stop><stop offset="100%" stop-color="#3386EE"></stop></linearGradient><linearGradient id="windi-css-gui-asset-d" x1="60.744%" x2="501.135%" y1="-308.636%" y2="225.788%"><stop offset="7.822%" stop-color="#54C8F1"></stop><stop offset="57.292%" stop-color="#41A2EF"></stop><stop offset="100%" stop-color="#3386EE"></stop></linearGradient></defs><g><path fill="url(#windi-css-gui-asset-a)" d="M133.784 48.922C133.784 21.945 111.84 0 84.863 0c-28.43 0-45.428 21.316-45.428 41.933h27.956c0-5.8 5.423-13.978 17.472-13.978 11.56 0 20.966 9.407 20.966 20.967s-8.438 20.966-29.715 20.966H0v27.955h76.114c35.911 0 57.67-21.944 57.67-48.921m0 0C133.784 21.945 111.84 0 84.863 0c-28.43 0-45.428 21.316-45.428 41.933h27.956c0-5.8 5.423-13.978 17.472-13.978 11.56 0 20.966 9.407 20.966 20.967s-8.438 20.966-29.715 20.966H0v27.955h76.114c35.911 0 57.67-21.944 57.67-48.921"></path><path fill="url(#windi-css-gui-asset-b)" d="M195.803 229.339c0 26.978-21.945 48.922-48.922 48.922-28.43 0-45.427-21.315-45.427-41.933h27.955c0 5.8 5.423 13.979 17.472 13.979 11.56 0 20.967-9.408 20.967-20.968s-10.63-20.966-29.716-20.966H53.671v-27.956h84.461c35.912 0 57.671 21.945 57.671 48.922m0 0c0 26.978-21.945 48.922-48.922 48.922-28.43 0-45.427-21.315-45.427-41.933h27.955c0 5.8 5.423 13.979 17.472 13.979 11.56 0 20.967-9.408 20.967-20.968s-10.63-20.966-29.716-20.966H53.671v-27.956h84.461c35.912 0 57.671 21.945 57.671 48.922"></path><path fill="url(#windi-css-gui-asset-c)" d="M203.13 43.13c-30.834 0-52.585 23.45-52.585 54.284h24.76c0-15.327 11.13-26.457 27.825-26.457 16.696 0 25.044 11.13 25.044 26.457s-10.842 27.955-40.348 27.955H0v27.956h192c43.695 0 64-28.085 64-55.911 0-30.835-20.87-54.284-52.87-54.284"></path><polygon fill="url(#windi-css-gui-asset-d)" points="36.6472348 180.417391 0 180.417391 0 208.607443 36.6472348 208.607443"></polygon></g>', 2)
    ]), 4));
  }
});
export {
  f as _
};
