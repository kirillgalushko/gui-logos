import { defineComponent as c, computed as o, openBlock as m, createElementBlock as n, normalizeStyle as p, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ c({
  __name: "LogoStreamlit",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, h = o(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, l) => (m(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "140",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 140",
      style: p(h.value)
    }, l[0] || (l[0] = [
      t("g", null, [
        t("path", {
          fill: "#FF4B4B",
          d: "M123.888 2.182c1.92-2.91 6.258-2.91 8.25 0l40.753 60.75 43.321 64.519a18 18 0 0 1-1.764 2.581c-.452.539-.88 1.048-1.414 1.571l-.011-.005.01.005c-.117.112-.23.2-.37.306l-.15.115q-.735.549-1.514 1.038c-.42.263-.767.495-1.269.736-.5.242-1.302.532-1.784.697-.483.167-.644.223-1 .302-.178.035-.356.07-.533.092q-.182.033-.363.057c-.021.007-.05.007-.07.014l-.542.064c-.568.057-1.159.086-1.763.086a697.8 697.8 0 0 1-151.26 0q-.086.002-.172-.008h-.17l-.079-.007h-.077c-.058-.007-.115-.007-.171-.014h-.057c-.079-.007-.15-.007-.227-.014-.47-.036-1.016-.154-1.408-.241-.393-.079-.627-.143-.953-.215-3.87-.917-7.424-3.25-9.053-7.025-.043-.1-.079-.199-.122-.299l-.006-.021L.225 26.025c-1.067-2.844 1.85-5.69 4.693-4.338.072 0 .214 0 .286.071l77.902 41.173Zm127.006 19.577c2.852-1.564 5.91 1.137 4.914 4.124v.143l-39.595 101.426-43.321-64.52 77.931-41.173Z"
        }),
        t("path", {
          fill: "#7D353B",
          d: "M250.894 21.759h-.07l-77.932 41.173 43.321 64.52 39.595-101.426v-.143c.996-2.987-2.062-5.688-4.914-4.124"
        }),
        t("path", {
          fill: "#BD4043",
          d: "M132.138 2.182c-1.992-2.91-6.33-2.91-8.25 0l-40.782 60.75 44.878 23.723 85.05 44.948c.534-.523.962-1.032 1.414-1.57a18 18 0 0 0 1.764-2.582l-43.32-64.519z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};