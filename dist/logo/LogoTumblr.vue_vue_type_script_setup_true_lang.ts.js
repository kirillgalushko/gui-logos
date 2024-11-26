import { defineComponent as s, computed as m, openBlock as i, createElementBlock as o, normalizeStyle as v, createElementVNode as t } from "vue";
const V = /* @__PURE__ */ s({
  __name: "LogoTumblr",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const c = h, l = m(() => ({
      width: c.width || "1em",
      height: c.height || "1em",
      minWidth: c.width || "1em",
      minHeight: c.height || "1em"
    }));
    return (n, e) => (i(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 -202 512 512",
      style: v(l.value)
    }, e[0] || (e[0] = [
      t("g", null, [
        t("path", {
          fill: "#303D4D",
          d: "M46.797 88.15c-8.4.217-10.026-5.777-10.097-10.13V47.83h19.578V30.332h-19.5V4.326H21.404c-.253 0-.694.218-.756.768-.901 8.01-4.732 22.067-20.648 27.683V47.83h12.116v31.78c0 11.491 7.166 27.815 30.024 27.43 7.713-.127 16.281-3.289 18.177-6.015L55.27 86.378c-1.953.907-5.683 1.7-8.472 1.772m93.73-1.862V30.334h-34.384v16.43l6.625.001c2.18 0 3.096.928 3.125 2.96l-.034 25.522c0 2.502-1.805 11.897-14.33 12.135-8.537.163-10.332-4.872-10.332-11.473V30.334h-25.32V77.21c0 11.862 5.416 30.523 30.693 29.839 8.298-.227 17.805-4.4 22.746-10.52l.206 9.425h28.213V89.88s-2.282-.177-3.99-.29c-1.995-.13-3.22-1.203-3.22-3.303m146.733-.157.002-22.94c0-8.177-.098-16.625-5.51-23.52-4.955-6.313-13.18-10.943-25.665-10.341-8.29.4-17.136 4.253-22.018 10.853l-.77.97-.468-.563c-5.02-7.248-13.034-11.862-25.518-11.26-8.294.4-17.14 4.253-22.021 10.853l-.734-9.853h-30.594v16.434l7.04.104c2.178 0 3.098.927 3.127 2.958l.002 32.16v4.145c0 2.1-1.234 3.248-3.227 3.377-1.708.114-5.168.36-5.168.36v16.074l41.374.013V89.869s-3.26-.23-5.168-.36c-1.995-.136-3.226-1.279-3.226-3.378 0 0 .033-20.528.033-24.636 0-4.107 3.398-12.532 14.183-12.532 8.7 0 10.483 5.303 10.483 11.473s.01 25.697.01 25.697c0 2.1-1.233 3.246-3.226 3.377-1.708.115-5.168.362-5.168.362v16.07h41.33V89.869s-3.26-.23-5.17-.36c-1.993-.136-3.207-1.279-3.207-3.378h-.062s.034-20.528.034-24.636c0-4.107 3.03-12.532 13.817-12.532 8.699 0 10.876 5.303 10.876 11.473v21.55l-.003 4.147c0 2.1-1.234 3.246-3.228 3.377-1.71.115-5.167.362-5.167.362v16.07h41.38V89.869s-3.258-.23-5.165-.36c-1.997-.136-3.208-1.279-3.208-3.378m54.576 2.207c-3.44.254-9.808-.325-13.904-7.513v-10.53l.003-.005h-.003V58.114c0-5.265 4.862-9.884 12.386-10.164 7.62-.281 14.364 4.92 14.364 19.61 0 19.816-8.691 20.471-12.846 20.778m3.747-59.088c-6.256.274-12.857 2.667-17.651 6.835V.987h-8.858s-14.482 5.146-25.695 6.52l-.366 16.072 7.09.01c2.176 0 3.112.926 3.14 2.96v79.338l20.256-.022 2.893-6.51c.62.348 9.913 9.083 24.753 7.335 18.685-2.204 28.497-16.997 28.497-39.44 0-11.775-3.613-39.332-34.06-38m155.68 14.59c-.825-17.93-25.103-18.754-37.795-6.643l-2.315-6.944h-29.347v16.432l6.153-.01c2.18 0 2.988.926 3.017 2.958v36.434c0 2.1-1.238 3.248-3.23 3.376-1.71.113-5.15.36-5.15.36v16.073h41.32V89.803s-3.417-.247-5.123-.36c-1.997-.128-3.233-1.277-3.233-3.376l-.01-24.704c0-4.63 1.061-12.358 9.233-14.334 1.01 7.727 8.474 10.035 12.116 10.035 9.196 0 14.364-6.886 14.364-13.224m-85.21 42.227.022-85.08h-8.95s-14.868 5.378-25.578 6.52V23.58h6.76c2.177 0 3.087.927 3.117 2.959v59.53c0 2.098-1.231 3.247-3.226 3.375-1.708.113-5.535.362-5.535.362v16.071h42.154V89.805s-3.83-.249-5.537-.362c-1.997-.128-3.227-1.277-3.227-3.376m81.13-8.254c-8.185 0-14.815 6.497-14.815 14.508 0 8.005 6.63 14.504 14.815 14.504 8.187 0 14.817-6.499 14.817-14.504 0-8.011-6.63-14.508-14.817-14.508"
        })
      ], -1)
    ]), 4));
  }
});
export {
  V as _
};
