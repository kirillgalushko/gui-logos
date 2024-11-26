import { defineComponent as h, computed as c, openBlock as m, createElementBlock as n, normalizeStyle as a, createElementVNode as t } from "vue";
const s = /* @__PURE__ */ h({
  __name: "LogoNx",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = c(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, l) => (m(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "160",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 160",
      style: a(o.value)
    }, l[0] || (l[0] = [
      t("g", null, [
        t("path", {
          fill: "#012F55",
          d: "m39.37 0 55.965 94.22.049-42.649 32.473 50.76-33.412 52.51-55.387-89.885-.128 94.102H0V0zm94.895 44.468 16.203 25.438.205.353a57.22 57.22 0 0 1 47.854-25.79c31.247 0 56.655 26.446 57.274 57.582l.01 1.052h-.029v.396a7.535 7.535 0 0 1-15.058.224l-.009-.277-.004-.358c-.125-4.924-2.833-6.922-6.39-8.395l-.526-.213-.537-.206-.547-.202-2.838-1.007-.58-.213-.58-.22-.581-.229-.29-.119-.58-.246-.575-.26c-2.295-1.067-4.49-2.496-6.235-4.77l-.204-.273-.204-.285-.304-.447-.408-.63-1.29-2.064-.47-.728-.37-.553-.258-.371-.403-.558-.28-.372-.292-.372-.15-.185-.309-.368c-3.04-3.553-7.799-6.745-17.003-6.745a28.687 28.687 0 0 0-28.696 28.696 7.5 7.5 0 0 0 .751 3.126l.149.289 34.244 53.89h-37.767l-16.72-25.233-16.428 25.233H96.284l36.044-56.747-36.934-57.843zm121.586 66.756a14.4 14.4 0 0 1-1.096 7.896c-1.322 3.058-3.186 3.61-4.428 3.582l-.206-.01-.193-.02-.179-.026-.237-.048-.196-.053-.253-.087-.092-.042-.111-.063-.167-.104-.135-.093-.148-.11-.157-.13-.08-.071-.161-.156c-.698-.716-1.323-1.94-.213-3.645.82-1.268 1.957-1.98 3.147-2.618l1.201-.635c1.439-.776 2.827-1.683 3.704-3.567M134.363 0v40.437l-.088.45H95.394l-.01-.45L95.433 0z"
        }),
        t("path", {
          fill: "#96D8E9",
          d: "M194.368 84.984a21.99 21.99 0 0 0-21.006 14.255 20.95 20.95 0 0 1 24.988-7.886c4.227 1.722 9.784 4.5 14.187 3.013a22.36 22.36 0 0 0-18.169-9.382"
        }),
        t("path", {
          fill: "#48C4E5",
          d: "M238.484 104.121c0-4.765-2.592-5.87-7.974-7.827-3.992-1.39-8.522-2.955-11.819-7.26-.645-.851-1.242-1.81-1.878-2.827a22.7 22.7 0 0 0-5.685-6.85c-3.14-2.308-7.26-3.433-12.601-3.433a26.475 26.475 0 0 0-24.46 16.388 24.822 24.822 0 0 1 42.687 4.138 7.974 7.974 0 0 0 8.913 3.562c5.254-1.125 4.892 3.845 12.827 5.528z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  s as _
};
