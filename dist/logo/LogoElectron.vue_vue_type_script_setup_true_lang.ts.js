import { defineComponent as n, computed as o, openBlock as h, createElementBlock as l, normalizeStyle as i, createElementVNode as e } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoElectron",
  props: {
    width: {},
    height: {}
  },
  setup(m) {
    const t = m, c = o(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (s, a) => (h(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "#47848f",
      viewBox: "0 0 1610 1610",
      style: i(c.value)
    }, a[0] || (a[0] = [
      e("path", { d: "M603 382c-195-36-349 2-411 108-46 79-33 185 32 297 5 10 18 13 27 7 10-5 13-18 7-27-58-101-69-192-32-257 51-88 189-122 369-89 11 2 21-5 23-16s-4-21-15-23M326 924a1230 1230 0 0 0 298 235c283 163 584 207 733 106 9-6 11-19 5-28s-19-11-28-5c-133 91-419 49-690-107a1200 1200 0 0 1-289-228 20 20 0 0 0-28-1 20 20 0 0 0-1 28" }, null, -1),
      e("path", { d: "M1309 900c128-151 172-303 111-409-45-78-141-119-267-121-11 0-20 9-20 20s9 20 20 20c114 1 196 37 233 101 51 88 11 224-107 363a20 20 0 0 0 2 28 20 20 0 0 0 28-2M981 388a1263 1263 0 0 0-356 141c-293 169-483 418-457 598a21 21 0 0 0 23 17 21 21 0 0 0 17-23c-24-160 157-395 437-557a1228 1228 0 0 1 345-137 20 20 0 0 0 15-24c-3-10-13-17-24-15" }, null, -1),
      e("path", { d: "M508 1252c67 186 176 301 299 301 90 0 172-61 237-169 6-9 3-22-7-27-9-6-22-3-27 7-58 97-129 149-203 149-102 0-199-102-261-275a20 20 0 0 0-26-12 20 20 0 0 0-12 26m610-36a1240 1240 0 0 0 53-371c0-331-116-617-281-690-10-4-22 0-26 10s0 22 10 26c147 65 257 336 257 654a1230 1230 0 0 1-51 359 20 20 0 0 0 13 25c10 3 21-3 25-13m376-20a96 96 0 1 0-192 0 96 96 0 0 0 192 0m-40 0a56 56 0 1 1-112 0 56 56 0 0 1 112 0m-1241 96a96 96 0 1 0 0-192 96 96 0 0 0 0 192m0-40a56 56 0 1 1 0-112 56 56 0 0 1 0 112" }, null, -1),
      e("path", { d: "M807 252a96 96 0 1 0 0-192 96 96 0 0 0 0 192m0-40a56 56 0 1 1 0-112 56 56 0 0 1 0 112m14 701a70 70 0 0 1-82-53 70 70 0 0 1 53-82 70 70 0 0 1 82 53 69 69 0 0 1-53 82" }, null, -1)
    ]), 4));
  }
});
export {
  d as _
};