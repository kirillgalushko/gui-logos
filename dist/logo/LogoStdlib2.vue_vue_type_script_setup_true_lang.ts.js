import { defineComponent as l, computed as e, openBlock as i, createElementBlock as p, normalizeStyle as r, createStaticVNode as d } from "vue";
const h = /* @__PURE__ */ l({
  __name: "LogoStdlib2",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, o = e(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (f, a) => (i(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "286",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 286",
      style: r(o.value)
    }, a[0] || (a[0] = [
      d('<defs><linearGradient id="stdlib-2-gui-asset-a" x1="32.902%" x2="85.889%" y1="78.13%" y2="33.994%"><stop offset="0%" stop-color="#A4681D"></stop><stop offset="31%" stop-color="#E18F2F"></stop><stop offset="100%" stop-color="#F0AD3E"></stop></linearGradient><linearGradient id="stdlib-2-gui-asset-b" x1="-5.516%" x2="87.603%" y1="75.392%" y2="17.059%"><stop offset="0%" stop-color="#F0AD3E"></stop><stop offset="69%" stop-color="#E18F2F"></stop><stop offset="100%" stop-color="#A4681D"></stop></linearGradient><linearGradient id="stdlib-2-gui-asset-c" x1="-.003%" x2="100.006%" y1="50.024%" y2="50.024%"><stop offset="0%" stop-color="#006991"></stop><stop offset="25%" stop-color="#008BBF"></stop><stop offset="62%" stop-color="#008BBF"></stop><stop offset="100%" stop-color="#00AEEF"></stop></linearGradient></defs><g><g><path fill="url(#stdlib-2-gui-asset-a)" d="M92.754 0 49.112 25.096a45.05 45.05 0 0 0-14.068 12.925 21.35 21.35 0 0 0 0 24.902 45 45 0 0 0 14.068 12.754l28.953 16.716a27 27 0 0 1-3.835-3.404c-9.938-10.733-9.29-27.484 1.442-37.419C91.699 40.908 99.282 18.031 92.754 0" transform="translate(35.299)"></path><path fill="url(#stdlib-2-gui-asset-b)" d="m176.338 192.947-21.113-12.192a19.023 19.023 0 0 1-.754 33.562L109.3 240.513a31.73 31.73 0 0 0-16.545 27.12v17.556l84.488-48.769a25.375 25.375 0 0 0-.904-43.385z" transform="translate(35.299)"></path><path fill="#F0AD3E" d="M84.411 75.567a45 45 0 0 1-14.068-12.753 21.35 21.35 0 0 1 0-24.902A45 45 0 0 1 84.41 25.096L51.15 44.484a32.57 32.57 0 0 0-15.852 27.7 32.58 32.58 0 0 0 15.42 27.942l160.918 92.91a25.375 25.375 0 0 1 .904 43.384l27.615-15.942A31.7 31.7 0 0 0 256 193.024a31.7 31.7 0 0 0-15.844-27.455z"></path><path fill="url(#stdlib-2-gui-asset-a)" d="M92.754 0 49.112 25.096a45.05 45.05 0 0 0-14.068 12.925 21.35 21.35 0 0 0 0 24.902 45 45 0 0 0 14.068 12.754l28.953 16.716a27 27 0 0 1-3.835-3.404c-9.938-10.733-9.29-27.484 1.442-37.419C91.699 40.908 99.282 18.031 92.754 0" transform="translate(35.299)"></path><path fill="url(#stdlib-2-gui-asset-b)" d="m176.338 192.947-21.113-12.192a19.023 19.023 0 0 1-.754 33.562L109.3 240.513a31.73 31.73 0 0 0-16.545 27.12v17.556l84.488-48.769a25.375 25.375 0 0 0-.904-43.385z" transform="translate(35.299)"></path><path fill="#F0AD3E" d="M84.411 75.567a45 45 0 0 1-14.068-12.753 21.35 21.35 0 0 1 0-24.902A45 45 0 0 1 84.41 25.096L51.15 44.484a32.57 32.57 0 0 0-15.852 27.7 32.58 32.58 0 0 0 15.42 27.942l160.918 92.91a25.375 25.375 0 0 1 .904 43.384l27.615-15.942A31.7 31.7 0 0 0 256 193.024a31.7 31.7 0 0 0-15.844-27.455z"></path></g><g><path fill="#00AEEF" d="M46.821 203.074a32.57 32.57 0 0 1-15.419-27.942 32.56 32.56 0 0 1 15.85-27.7l-31.387 18.052a31.686 31.686 0 0 0 0 54.909l27.617 15.939 84.571 48.771v-17.555a31.75 31.75 0 0 0-16.542-27.035l-45.237-26.086a19 19 0 0 1-1.853-1.079z"></path><path fill="url(#stdlib-2-gui-asset-c)" d="m166.095 84.787 40.566-23.415a31.71 31.71 0 0 0 15.842-27.455A31.7 31.7 0 0 0 206.66 6.462L195.631 0a24.98 24.98 0 0 1-7.994 28.326l-59.584 34.467-80.8 46.68a32.57 32.57 0 0 0-15.852 27.7 32.56 32.56 0 0 0 15.42 27.941l17.665 10.192a19.02 19.02 0 0 1-8.631-16.356 19.01 19.01 0 0 1 9.34-15.957z" transform="translate(0 37.936)"></path><path fill="#00AEEF" d="M46.821 203.074a32.57 32.57 0 0 1-15.419-27.942 32.56 32.56 0 0 1 15.85-27.7l-31.387 18.052a31.686 31.686 0 0 0 0 54.909l27.617 15.939 84.571 48.771v-17.555a31.75 31.75 0 0 0-16.542-27.035l-45.237-26.086a19 19 0 0 1-1.853-1.079z"></path><path fill="url(#stdlib-2-gui-asset-c)" d="m166.095 84.787 40.566-23.415a31.71 31.71 0 0 0 15.842-27.455A31.7 31.7 0 0 0 206.66 6.462L195.631 0a24.98 24.98 0 0 1-7.994 28.326l-59.584 34.467-80.8 46.68a32.57 32.57 0 0 0-15.852 27.7 32.56 32.56 0 0 0 15.42 27.941l17.665 10.192a19.02 19.02 0 0 1-8.631-16.356 19.01 19.01 0 0 1 9.34-15.957z" transform="translate(0 37.936)"></path></g></g>', 2)
    ]), 4));
  }
});
export {
  h as _
};
