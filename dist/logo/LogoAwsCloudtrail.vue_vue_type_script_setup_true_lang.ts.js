import { defineComponent as s, computed as h, openBlock as r, createElementBlock as a, normalizeStyle as l, createStaticVNode as c } from "vue";
const p = /* @__PURE__ */ s({
  __name: "LogoAwsCloudtrail",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, o = h(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, e) => (r(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: l(o.value)
    }, e[0] || (e[0] = [
      c('<defs><linearGradient id="aws-cloudtrail-gui-asset-a" x1="0%" x2="100%" y1="100%" y2="0%"><stop offset="0%" stop-color="#B0084D"></stop><stop offset="100%" stop-color="#FF4F8B"></stop></linearGradient></defs><g><rect width="256" height="256" x="0" y="0" fill="url(#aws-cloudtrail-gui-asset-a)"></rect><path fill="#FFF" d="M80 169.587h12.8v-6.406H80zm111.907-47.464c-.72-9.718-5.472-16.874-13.02-19.402-6.077-2.027-12.772-.595-17.87 3.56-3.09-6.096-7.737-12.067-11.57-15.85-13.748-13.569-28.91-17.028-45.076-10.285C89.94 86.15 76.8 105.88 76.8 121.54v.609c-8.662 2.927-15.651 9.289-18.963 17.4l5.926 2.42c4.221-10.336 14.1-13.577 17.027-14.324a3.2 3.2 0 0 0 2.41-3.104v-3.001c0-12.944 11.702-30.516 23.632-35.481 13.744-5.73 26.218-2.822 38.122 8.933 5.062 4.994 10.012 12.403 12.038 18.024a3.196 3.196 0 0 0 5.565.84c3.536-4.703 9.27-6.74 14.304-5.058 5.552 1.86 8.739 7.671 8.739 15.945a3.2 3.2 0 0 0 2.675 3.158c2.346.391 22.925 4.424 22.925 25.67 0 22.006-21.5 22.416-22.4 22.423h-73.6v6.406h73.606c9.959-.02 28.794-6.067 28.794-28.828 0-19.863-15.107-28.806-25.693-31.449M99.2 169.587H144v-6.406H99.2zM86.4 182.4h19.2v-6.406H86.4zm-48 0H48v-6.406h-9.6zm9.6-25.625h28.8v-6.407H48zm-6.4 12.812h32v-6.406h-32zm44.8-12.812h22.4v-6.407H86.4zm-32 25.625H80v-6.406H54.4z"></path></g>', 2)
    ]), 4));
  }
});
export {
  p as _
};