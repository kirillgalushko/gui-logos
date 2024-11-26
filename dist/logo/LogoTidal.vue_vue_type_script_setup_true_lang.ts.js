import { defineComponent as o, computed as l, openBlock as n, createElementBlock as r, normalizeStyle as s, createElementVNode as h } from "vue";
const c = /* @__PURE__ */ o({
  __name: "LogoTidal",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, m = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (n(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "68",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 68",
      style: s(m.value)
    }, t[0] || (t[0] = [
      h("g", { fill: "#000" }, [
        h("path", { d: "M203.294 8.504v11.264h-16.997v46.616h-13.142V19.768h-16.997V8.504zm52.548.001v57.88h-13.22V8.504zm233.294 0v46.457H512v11.422h-36.084V8.504zm-72.29 0 23.843 57.88h-14.53l-4.23-11.421h-24.404l-4.266 11.42H379.12l24.078-57.88zm-95.579 0c15.802 0 31.525 8.366 31.525 28.782 0 19.243-15.411 29.096-30.742 29.096h-22.2V8.505zm-.078 11.263h-8.51v35.273h8.198c11.028 0 18.382-6.882 18.382-17.833 0-10.403-7.431-17.44-18.07-17.44m88.598 2.276-8.718 22.637h17.356zM50.825 33.88l16.942 16.942-16.942 16.943-16.942-16.943zM16.941 0l16.942 16.94-16.942 16.94L0 16.94zm67.767 0 16.94 16.939-16.94 16.942L67.765 16.94l-16.94 16.94-16.942-16.943L50.825 0l16.942 16.937z" })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
