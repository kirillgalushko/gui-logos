import { defineComponent as l, computed as a, openBlock as h, createElementBlock as n, normalizeStyle as u, createStaticVNode as m } from "vue";
const r = /* @__PURE__ */ l({
  __name: "LogoUnitjs",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, i = a(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (p, s) => (h(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "256",
      height: "269",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 269",
      style: u(i.value)
    }, s[0] || (s[0] = [
      m('<defs><path id="unitjs-gui-asset-a" d="m139.789 0-2.48 1.431V21.83L41.416 77.194v14.061l-8.219-14.061L0 133.989h23.577v67.295l116.212 67.095L256 201.284V67.095z"></path></defs><g><mask id="unitjs-gui-asset-b" fill="#fff"><use xlink:href="#unitjs-gui-asset-a"></use></mask><use xlink:href="#unitjs-gui-asset-a" fill="#A4D43A"></use><path fill="#62655D" d="m35.577 73.823 104.212-60.167L244 73.823v120.333l-104.211 60.166-104.212-60.166z" mask="url(#unitjs-gui-asset-b)"></path><path fill="#3F4238" d="M139.789 20.398 41.416 77.194v113.591l98.373 56.795z" mask="url(#unitjs-gui-asset-b)"></path><path fill="#A4D43A" d="m139.789 0-2.48 1.431v20.63l2.88-1.663 98.372 56.796v113.591l-98.372 56.795-98.373-56.795v-56.796h24.579L33.197 77.194 0 133.989h23.577v67.295l116.212 67.095L256 201.284V67.095z" mask="url(#unitjs-gui-asset-b)"></path><path fill="#F7F7F7" d="m78.327 139.189 47.729-19.998s10.092 34.155 15.199 40.263c42.93-65.728 83.46-81.06 83.46-81.06v51.196s-40.216 20.477-87.46 72.527c-25.664-45.129-58.928-62.928-58.928-62.928" mask="url(#unitjs-gui-asset-b)"></path></g>', 2)
    ]), 4));
  }
});
export {
  r as _
};
