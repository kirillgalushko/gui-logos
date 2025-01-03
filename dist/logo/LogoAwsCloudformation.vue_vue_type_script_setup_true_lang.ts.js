import { defineComponent as h, computed as s, openBlock as a, createElementBlock as r, normalizeStyle as m, createStaticVNode as n } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoAwsCloudformation",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, i = s(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (c, e) => (a(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: m(i.value)
    }, e[0] || (e[0] = [
      n('<defs><linearGradient id="aws-cloudformation-gui-asset-a" x1="0%" x2="100%" y1="100%" y2="0%"><stop offset="0%" stop-color="#B0084D"></stop><stop offset="100%" stop-color="#FF4F8B"></stop></linearGradient></defs><g><rect width="256" height="256" x="0" y="0" fill="url(#aws-cloudformation-gui-asset-a)"></rect><path fill="#FFF" d="M169.6 127.882h16v-6.41h-16zm-80 38.46h16v-6.41h-16zm-32 0H80v-6.41H57.6zm0-19.23H96v-6.41H57.6zm0-38.46h28.8v-6.409H57.6zm0 19.23h105.6v-6.41H57.6zm60.8 70.508H44.8V89.423h73.6v25.64h6.4V86.218a3.204 3.204 0 0 0-3.2-3.204h-80a3.2 3.2 0 0 0-3.2 3.204v115.377a3.2 3.2 0 0 0 3.2 3.205h80c1.766 0 3.2-1.436 3.2-3.205v-64.098h-6.4zm99.2-80.122c0 20.71-18.646 27.914-28.506 28.83l-51.494.014v-6.41h51.2c.624-.074 22.4-2.423 22.4-22.434 0-18.224-16.438-21.922-19.731-22.48a3.2 3.2 0 0 1-2.656-3.426q.006-.09.016-.176c-.176-10.297-6.49-13.515-9.226-14.425-5.107-1.699-10.8-.074-13.811 3.964a3.17 3.17 0 0 1-3.037 1.253 3.2 3.2 0 0 1-2.537-2.092c-1.988-5.57-4.87-9.18-8.88-13.195-10.03-9.967-23.642-12.72-36.378-7.362-6.682 2.817-12.522 9.202-16.01 17.518l-5.9-2.487c4.134-9.842 11.219-17.476 19.43-20.937 15.216-6.407 31.427-3.141 43.373 8.727 3.424 3.432 6.259 6.775 8.467 11.101 4.778-3.538 11.222-4.595 17.302-2.573 7.783 2.59 12.704 9.349 13.498 18.335 10.9 2.75 22.48 11.464 22.48 28.255"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
