import { defineComponent as n, computed as h, openBlock as l, createElementBlock as m, normalizeStyle as r, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoMeteor2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, s = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, i) => (l(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "251",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 251",
      style: r(s.value)
    }, i[0] || (i[0] = [
      t("g", { fill: "#DF4F4F" }, [
        t("g", null, [
          t("path", { d: "M.439.438 219.3 232.266s7.457 5.259 13.158-.877c5.702-6.135 1.316-12.27 1.316-12.27zM69.738 22.35l166.668 179.677s7.456 5.26 13.158-.876c5.702-6.135 1.316-12.27 1.316-12.27zM21.053 69.242 187.72 248.919s7.456 5.259 13.158-.877c5.702-6.135 1.316-12.27 1.316-12.27zM128.32 41.194l116.442 125.53s5.21 3.674 9.193-.612c3.983-4.287.919-8.573.919-8.573zm-91.228 82.389 116.441 125.53s5.21 3.674 9.193-.613c3.983-4.286.919-8.572.919-8.572zM188.16 68.365l52.775 57.067s2.577 1.722 4.547-.287.455-4.017.455-4.017zM66.229 181.43l52.775 57.067s2.577 1.722 4.547-.286.455-4.017.455-4.017z" })
        ])
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
