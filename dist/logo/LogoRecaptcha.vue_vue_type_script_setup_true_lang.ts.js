import { defineComponent as a, computed as m, openBlock as v, createElementBlock as i, normalizeStyle as o, createElementVNode as h } from "vue";
const p = /* @__PURE__ */ a({
  __name: "LogoRecaptcha",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const t = l, q = m(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (c, e) => (v(), i("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "244",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 244",
      style: o(q.value)
    }, e[0] || (e[0] = [
      h("g", null, [
        h("g", null, [
          h("path", {
            fill: "#1C3AA9",
            d: "M211.301 84.966a87 87 0 0 0-.087-3.653V12.251L192.12 31.344C176.495 12.217 152.723 0 126.097 0 98.387 0 73.77 13.226 58.209 33.71l31.296 31.624a41.46 41.46 0 0 1 12.677-14.224c5.463-4.263 13.205-7.75 23.914-7.75 1.293 0 2.292.152 3.026.436 13.268 1.048 24.769 8.37 31.54 18.998L138.51 84.946c28.06-.11 59.757-.174 72.789.015"
          }),
          h("path", {
            fill: "#4285F4",
            d: "M125.599.003a87 87 0 0 0-3.652.087H52.885l19.093 19.093C52.85 34.809 40.633 58.581 40.633 85.207c0 27.71 13.227 52.327 33.71 67.888l31.624-31.295a41.46 41.46 0 0 1-14.223-12.678c-4.264-5.463-7.75-13.205-7.75-23.914 0-1.293.151-2.292.436-3.026 1.047-13.268 8.37-24.769 18.997-31.54l22.153 22.152c-.11-28.06-.175-59.757.014-72.789"
          }),
          h("path", {
            fill: "#ABABAB",
            d: "M40.636 85.205q.007 1.835.088 3.653v69.062l19.092-19.093c15.627 19.127 39.398 31.344 66.025 31.344 27.709 0 52.326-13.226 67.887-33.71l-31.295-31.624a41.46 41.46 0 0 1-12.677 14.224c-5.464 4.263-13.205 7.75-23.914 7.75-1.294 0-2.292-.152-3.026-.437-13.268-1.047-24.77-8.37-31.541-18.997l22.152-22.153c-28.059.11-59.756.175-72.788-.014"
          })
        ]),
        h("path", {
          fill: "#A6A6A6",
          d: "M55.013 203.168q-3.113 0-5.582 1.18a11.6 11.6 0 0 0-4.187 3.302q-1.69 2.147-2.603 5.206-.886 3.033-.886 6.79v7.22q0 3.783.886 6.816.912 3.032 2.577 5.18 1.663 2.146 4.025 3.3 2.361 1.155 5.314 1.155 3.033 0 5.314-.886 2.308-.885 3.864-2.55 1.557-1.69 2.389-4.079.859-2.389 1.02-5.421h-4.965q-.188 2.335-.644 3.999-.457 1.637-1.342 2.71-.859 1.047-2.255 1.557-1.369.483-3.381.483-2.147 0-3.65-.94-1.503-.965-2.442-2.63-.912-1.664-1.342-3.891-.403-2.227-.403-4.804v-7.273q0-2.764.483-5.019.51-2.254 1.53-3.837t2.577-2.443q1.556-.885 3.703-.885 1.799 0 3.086.537 1.29.51 2.147 1.61.86 1.073 1.315 2.737.457 1.664.618 3.972h4.965q-.134-3.166-.993-5.609-.86-2.442-2.389-4.106-1.53-1.664-3.73-2.523-2.174-.858-5.019-.859m121.2 0q-3.114 0-5.583 1.18a11.6 11.6 0 0 0-4.187 3.302q-1.69 2.147-2.603 5.206-.885 3.033-.885 6.79v7.22q0 3.783.885 6.816.912 3.032 2.577 5.18 1.663 2.146 4.025 3.3 2.362 1.155 5.314 1.155 3.033 0 5.314-.886 2.308-.885 3.865-2.55 1.555-1.69 2.388-4.079.86-2.389 1.02-5.421h-4.965q-.188 2.335-.644 3.999-.456 1.637-1.342 2.71-.859 1.047-2.254 1.557-1.37.483-3.382.483-2.147 0-3.65-.94-1.503-.965-2.442-2.63-.912-1.664-1.342-3.891-.402-2.227-.402-4.804v-7.273q0-2.764.483-5.019.51-2.254 1.53-3.837t2.576-2.443q1.557-.885 3.703-.885 1.8 0 3.087.537 1.287.51 2.147 1.61.858 1.073 1.315 2.737t.617 3.972h4.965q-.134-3.166-.993-5.609-.86-2.442-2.389-4.106-1.53-1.664-3.73-2.523-2.174-.858-5.019-.859m-92.911.537L70.715 242.78h5.045l3.033-10.199h13.204l3.086 10.199h5.046l-12.614-39.075zm22.14 0v39.075h4.911V227.48h7.541q2.818 0 4.992-.778 2.174-.805 3.65-2.308 1.503-1.503 2.254-3.704.78-2.227.779-5.045 0-2.604-.779-4.777-.75-2.201-2.227-3.784-1.476-1.611-3.677-2.496-2.174-.886-4.992-.886zm27.884 0v4.24h10.252v34.835h4.91v-34.835h10.28v-4.24zm61.646 0v39.075h4.91v-18.062h15.728v18.062h4.938v-39.075h-4.938v16.8h-15.727v-16.8zm44.2 0-12.586 39.075h5.046l3.032-10.199h13.204l3.087 10.199H256l-12.614-39.075zm-128.82 4.24h7.542q1.798 0 3.06.644 1.287.645 2.093 1.718a6.9 6.9 0 0 1 1.207 2.495q.403 1.395.403 2.899 0 1.664-.403 3.06a6.4 6.4 0 0 1-1.207 2.388q-.806.993-2.094 1.556-1.26.564-3.06.564h-7.54zm-24.958 2.63 5.341 17.766H80.081zm155.872 0 5.34 17.766h-10.654zm-231.175 2.63q-1.853 0-3.194.94-1.315.94-2.2 2.549l-.081-2.952H0v29.038h4.75v-20.773q.672-1.852 1.906-2.925 1.26-1.074 3.193-1.074.618 0 1.1.054.485.026 1.047.134l-.026-4.616a1.6 1.6 0 0 0-.35-.108 3 3 0 0 0-.482-.134 5 5 0 0 0-.564-.08 2.5 2.5 0 0 0-.483-.054zm15.968 0q-2.066 0-3.999.725-1.932.725-3.435 2.388-1.476 1.638-2.388 4.294-.913 2.631-.913 6.468v3.274q0 3.328.779 5.77.777 2.443 2.227 4.053a9.2 9.2 0 0 0 3.57 2.362q2.092.778 4.696.778 1.878 0 3.355-.376 1.502-.375 2.657-.966a9.3 9.3 0 0 0 1.986-1.395 10.7 10.7 0 0 0 1.422-1.61l-2.469-3.006q-.59.725-1.261 1.341-.672.591-1.476 1.047a7.7 7.7 0 0 1-1.772.671 9 9 0 0 1-2.173.242q-3.302 0-5.073-2.12-1.744-2.12-1.744-6.79v-.672h16.21v-2.764q0-3.328-.564-5.877t-1.798-4.294a7.8 7.8 0 0 0-3.167-2.63q-1.932-.913-4.67-.913m0 4.08q1.557 0 2.577.563a4.15 4.15 0 0 1 1.61 1.583q.617 1.02.886 2.443.295 1.395.375 3.086v.644H20.074q.108-2.442.59-4.053.484-1.61 1.262-2.549.805-.966 1.852-1.342a6.7 6.7 0 0 1 2.281-.376"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};
