import { defineComponent as i, computed as m, openBlock as o, createElementBlock as l, normalizeStyle as n, createElementVNode as t } from "vue";
const s = /* @__PURE__ */ i({
  __name: "LogoPipefy",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const a = h, c = m(() => ({
      width: a.width || "1em",
      height: a.height || "1em",
      minWidth: a.width || "1em",
      minHeight: a.height || "1em"
    }));
    return (p, e) => (o(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "88",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 88",
      style: n(c.value)
    }, e[0] || (e[0] = [
      t("g", null, [
        t("path", {
          fill: "#000",
          d: "m238.93 54.478-17.988-31.152a.83.83 0 0 0-.718-.416h-11.78c-.116 0-.209.043-.31.087-.035-.005-.068-.027-.103-.027h-6.494c.003-.063.006-1.696.011-1.756.468-8.333 7.757-10.445 10.242-10.889a.82.82 0 0 0 .675-.816L212.45.827a.827.827 0 0 0-.876-.825c-4.72.302-21.06 3.987-21.92 21.212l-.011 1.753h-4.997a.72.72 0 0 0-.719.724v8.415c0 .4.321.727.719.727h4.218c.395 0 .719.324.719.719v36.592c0 .449.362.811.808.811h10.26a.8.8 0 0 0 .6-.28.8.8 0 0 0 .29-.613v-36.48c0-.218.09-.417.232-.564a.8.8 0 0 1 .495-.185l9.904-.133c.3-.003.578.156.727.416l12.334 21.365a.84.84 0 0 1 .011.814l-16.357 30.43a.833.833 0 0 0 .73 1.228h11.8a.83.83 0 0 0 .727-.436l16.793-31.222a.84.84 0 0 0-.008-.817m16.966-30.42-12.881 23.973a.83.83 0 0 1-1.443.027l-6.178-10.555a.83.83 0 0 1-.013-.816l7.22-13.369a.82.82 0 0 1 .713-.435c1.903-.022 8.905-.082 11.872-.05a.825.825 0 0 1 .71 1.225M169.19 41.722h-23.006a.806.806 0 0 1-.727-1.173c1.22-2.403 4.736-7.645 12.242-7.645 7.37 0 10.952 5.233 12.212 7.637a.81.81 0 0 1-.721 1.18m-11.445-20.645c-13.924 0-25.21 11.349-25.21 25.346 0 14 11.286 25.347 25.21 25.347 7.517 0 17.228-3.702 22.598-14.177a.816.816 0 0 0-.73-1.179h-12.342a.8.8 0 0 0-.545.223 12.3 12.3 0 0 1-3.121 2.17c-1.606.778-3.552 1.284-5.909 1.284-7.422 0-11.004-4.872-12.01-7.457a.806.806 0 0 1 .762-1.083l35.25.005a.836.836 0 0 0 .803-.716c.123-.988.289-1.986.343-3.004a25.194 25.194 0 0 0-25.102-26.76M105.725 60.08a13.86 13.86 0 0 1-12.955-3.717 13.95 13.95 0 0 1-3.71-12.99 13.59 13.59 0 0 1 10.331-10.36 13.86 13.86 0 0 1 12.955 3.718 13.95 13.95 0 0 1 3.71 12.99 13.59 13.59 0 0 1-10.331 10.36m7.737-36.628c-11.303-4.94-20.87-.03-23.912 1.935-1.595 1.034-1.524-2.341-3.048-2.341h-8.954a.81.81 0 0 0-.811.808v62.427a.81.81 0 0 0 .808.81h10.168a.81.81 0 0 0 .808-.81V68.495c0-.626.678-1.021 1.214-.7 2.243 1.361 7.397 3.976 13.733 3.976 14.724 0 26.536-12.759 25.023-27.828-.906-9-6.763-16.874-15.029-20.491M28.985 60.079a13.86 13.86 0 0 1-12.955-3.717 13.95 13.95 0 0 1-3.706-12.99 13.59 13.59 0 0 1 10.33-10.36A13.86 13.86 0 0 1 35.61 36.73a13.95 13.95 0 0 1 3.707 12.99 13.59 13.59 0 0 1-10.332 10.36m7.74-36.628c-11.302-4.94-20.866-.03-23.914 1.935-1.592 1.034-1.524-2.341-3.048-2.341H.808a.81.81 0 0 0-.808.808v62.427a.81.81 0 0 0 .808.81h10.166a.81.81 0 0 0 .808-.81V68.495c0-.626.678-1.021 1.214-.7 2.245 1.361 7.4 3.976 13.733 3.976 14.73 0 26.536-12.759 25.023-27.828-.906-9-6.76-16.874-15.026-20.491m31.884-.403H58.423a.803.803 0 0 0-.809.803v46.542c0 .45.365.811.811.811h10.187a.81.81 0 0 0 .809-.81V23.856a.814.814 0 0 0-.811-.811"
        })
      ], -1)
    ]), 4));
  }
});
export {
  s as _
};