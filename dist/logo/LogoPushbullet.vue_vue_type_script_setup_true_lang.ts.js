import { defineComponent as i, computed as u, openBlock as h, createElementBlock as p, normalizeStyle as a, createStaticVNode as o } from "vue";
const c = /* @__PURE__ */ i({
  __name: "LogoPushbullet",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, l = u(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (r, e) => (h(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: a(l.value)
    }, e[0] || (e[0] = [
      o('<defs><linearGradient id="pushbullet-gui-asset-c" x1="8.59%" x2="77.471%" y1="1.954%" y2="73.896%"><stop offset="0%" stop-color="#4CB36B"></stop><stop offset="100%" stop-color="#3EA16F"></stop></linearGradient><path id="pushbullet-gui-asset-a" d="M256 128c0 70.692-57.308 128-128 128S0 198.692 0 128 57.308 0 128 0s128 57.308 128 128"></path></defs><g><mask id="pushbullet-gui-asset-b" fill="#fff"><use xlink:href="#pushbullet-gui-asset-a"></use></mask><use xlink:href="#pushbullet-gui-asset-a" fill="#67BF79"></use><path fill="#67BF79" d="M256 128c0 70.692-57.308 128-128 128S0 198.692 0 128 57.308 0 128 0s128 57.308 128 128" mask="url(#pushbullet-gui-asset-b)"></path><path fill="url(#pushbullet-gui-asset-c)" d="M63.111 187.022 96.178 72l64.533 60.978L200 90.133l87.533 86.289-110.844 124.889z" mask="url(#pushbullet-gui-asset-b)"></path><path fill="#FFF" d="M77 189.6c-16.733 0-16.733 0-16.733-16.733V81c0-16.733 0-16.733 16.733-16.733h3.334c16.733 0 16.733 0 16.733 16.733v91.867c0 16.733 0 16.733-16.733 16.733zm44.041 0c-5.699 0-8.508-2.809-8.508-8.508V72.774c0-5.698 2.809-8.507 8.508-8.507h37.537c32.178 0 52.628 32.273 52.628 63.025S190.578 189.6 158.578 189.6z" mask="url(#pushbullet-gui-asset-b)"></path></g>', 2)
    ]), 4));
  }
});
export {
  c as _
};
