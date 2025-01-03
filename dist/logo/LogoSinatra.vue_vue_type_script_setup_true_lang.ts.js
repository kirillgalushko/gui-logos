import { defineComponent as p, computed as a, openBlock as r, createElementBlock as l, normalizeStyle as i, createStaticVNode as c } from "vue";
const n = /* @__PURE__ */ p({
  __name: "LogoSinatra",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, e = a(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (f, s) => (r(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "174",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 174",
      style: i(e.value)
    }, s[0] || (s[0] = [
      c('<g><radialGradient id="sinatra-gui-asset-a" cx="125.97" cy="125.709" r="129.906" gradientTransform="matrix(1 0 0 .3673 0 79.541)" gradientUnits="userSpaceOnUse"><stop offset=".694" style="stop-color:#afadae;"></stop><stop offset=".968" style="stop-color:#afadae;stop-opacity:0;"></stop></radialGradient><path d="M5 123c0-27.8 56.2-50.3 125.5-50.3S256 95.2 256 123s-56.2 50.3-125.5 50.3C61.2 173.4 5 150.8 5 123" style="fill:url(#sinatra-gui-asset-a);"></path><radialGradient id="sinatra-gui-asset-b" cx="178.61" cy="90.852" r="177.391" gradientTransform="matrix(-.9856 .1689 -.09166 -.535 362.983 109.296)" gradientUnits="userSpaceOnUse"><stop offset=".476" style="stop-color:#f3efe9;"></stop><stop offset=".568" style="stop-color:#eeeae3;"></stop><stop offset=".688" style="stop-color:#e1dbd2;"></stop><stop offset=".824" style="stop-color:#cdc5b7;"></stop><stop offset=".963" style="stop-color:#b4aa98;"></stop></radialGradient><path d="M2.9 127.8s-20.6-40 47.4-62.4C82.1 54.9 119.4 48 152.7 46.8c38-1.3 71.7 5.3 86.4 27.7 10.6 16.2 4.2 36-16.3 51.4-12.3 9.2-39.3 18.4-57.3 23.6-18 5.1-53.3 12-82.2 10.4s-64.8-5.8-80.4-32.1" style="fill:url(#sinatra-gui-asset-b);"></path><path d="M2.9 127.8s-20.6-40 47.4-62.4C82.1 54.9 119.4 48 152.7 46.8c38-1.3 71.7 5.3 86.4 27.7 10.6 16.2 4.2 36-16.3 51.4-12.3 9.2-39.3 18.4-57.3 23.6-18 5.1-53.3 12-82.2 10.4s-64.8-5.8-80.4-32.1m81 30.9c28.2 1.6 62.6-5.2 80.1-10.2s44.2-13.6 56.2-22.6c20-15 28.1-33.7 16.9-50.9-14.2-22-48.7-28.8-85.7-27.5-32.4 1.1-68.8 8.8-99.8 19-66.3 21.9-46.2 60.9-46.2 60.9 15.3 25.6 50.3 29.7 78.5 31.3" style="fill:#cec7bc;"></path><linearGradient id="sinatra-gui-asset-c" x1="53.662" x2="197.066" y1="47.58" y2="58.425" gradientUnits="userSpaceOnUse"><stop offset=".094" style="stop-color:#d7d0c6;"></stop><stop offset=".248" style="stop-color:#cdc7bb;"></stop><stop offset=".401" style="stop-color:#c7c2b5;"></stop><stop offset=".525" style="stop-color:#cbc6ba;"></stop><stop offset=".669" style="stop-color:#d7d1c7;"></stop><stop offset=".78" style="stop-color:#e6dfd6;"></stop><stop offset=".892" style="stop-color:#e7e3d9;"></stop><stop offset=".934" style="stop-color:#e5dfd3;"></stop><stop offset=".98" style="stop-color:#dfd5c6;"></stop></linearGradient><path d="M57.3 95.9c-5.9-4.3-14.2-25.4-11-30s8-14.2 10.7-23.6c2.7-9.3 6.5-29.1 14-36.1s18.7-7 33.5-5.4c14.7 1.6 57.8 9.4 68.3 13.1 10.4 3.7 24 10.7 23.2 27s.7 24.4-1.2 33.5-21.7 26.8-46.6 28.1c-25 1.5-85-2.3-90.9-6.6" style="fill:url(#sinatra-gui-asset-c);"></path><radialGradient id="sinatra-gui-asset-d" cx="110.123" cy="23.771" r="53.767" gradientTransform="matrix(.08816 .9961 -2.6842 .2376 164.222 -91.57)" gradientUnits="userSpaceOnUse"><stop offset=".067" style="stop-color:#b2a797;"></stop><stop offset=".29" style="stop-color:#c7bdae;"></stop><stop offset=".481" style="stop-color:#d6cebf;"></stop><stop offset=".688" style="stop-color:#e2dcd0;"></stop><stop offset=".942" style="stop-color:#f7f5ee;"></stop></radialGradient><path d="M127.8 75.8s25.7-3.4 41.2-17.9 1.8-24.9-2.4-27.5S148.3 21 126 22s-44.3 1.2-42.8 17.7c1.5 16.4 19.5 36.1 44.6 36.1" style="fill:url(#sinatra-gui-asset-d);"></path><linearGradient id="sinatra-gui-asset-e" x1="69.277" x2="177.061" y1="15.553" y2="15.553" gradientUnits="userSpaceOnUse"><stop offset=".056" style="stop-color:#f7f5ee;"></stop><stop offset=".226" style="stop-color:#e6e1d6;"></stop><stop offset=".43" style="stop-color:#d8d1c3;"></stop><stop offset=".639" style="stop-color:#d0c8b9;"></stop><stop offset=".857" style="stop-color:#cec5b5;"></stop></linearGradient><path d="M71 26.2c-2.8-1.8-3.2-11.6 7.2-18.3 10.4-6.6 37.2-2.6 54.6 1.6 17.5 4.2 45.7 10.1 44.2 11.7-1.5 1.5-43.5-3.6-62.7-2.6C88.2 20 75.4 29 71 26.2" style="fill:url(#sinatra-gui-asset-e);"></path><linearGradient id="sinatra-gui-asset-f" x1="42.47" x2="196.375" y1="94.53" y2="94.53" gradientUnits="userSpaceOnUse"><stop offset=".018" style="stop-color:#262222;"></stop><stop offset=".096" style="stop-color:#2f2c2c;"></stop><stop offset=".3" style="stop-color:#424143;"></stop><stop offset=".402" style="stop-color:#4a4a4c;"></stop><stop offset=".514" style="stop-color:#4a4a4c;"></stop><stop offset=".78" style="stop-color:#383536;"></stop><stop offset="1" style="stop-color:#262222;"></stop></linearGradient><path d="M195.6 71.7c-.3 0-.4.9-.8 1.4-3.3 5.4-13.1 14.6-35.4 14.6H98.8c-38.2 0-49.3-10.3-52.1-17.7-.2-.7-.5-1.6-.8-1.6s-.5 1.6-.5 1.6l-2.9 27.7c0 12.7 32.9 23 75.2 23s78.6-6 78.6-23c0 0 .2-16.9.1-24.4 0-.8-.1-1.6-.8-1.6" style="fill:url(#sinatra-gui-asset-f);"></path></g>', 1)
    ]), 4));
  }
});
export {
  n as _
};
