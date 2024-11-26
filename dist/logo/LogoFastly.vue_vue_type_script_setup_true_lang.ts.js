import { defineComponent as c, computed as i, openBlock as o, createElementBlock as m, normalizeStyle as n, createElementVNode as e } from "vue";
const r = /* @__PURE__ */ c({
  __name: "LogoFastly",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const l = t, v = i(() => ({
      width: l.width || "1em",
      height: l.height || "1em",
      minWidth: l.width || "1em",
      minHeight: l.height || "1em"
    }));
    return (s, h) => (o(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "199",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 199",
      style: n(v.value)
    }, h[0] || (h[0] = [
      e("g", null, [
        e("path", {
          fill: "#FF282D",
          d: "M444.02 49.107v19.95h-13.244l19.51 48 19.511-48h-13.218v-19.95H512v19.95h-13.247l-33.989 83.619c-9.741 23.49-25.741 45.598-50.109 45.598-5.991 0-13.967-.664-19.498-1.993l2.43-24.388.423.077.43.075.44.072.222.036.449.069.226.034.455.065.229.032.689.091.46.058.46.054.458.052.455.05.451.045.446.043.438.04.431.036.422.034.412.03.4.026.388.023.374.019.359.015.342.012.326.008.306.004h.146c11.3 0 24.048-7.001 28.034-19.192L401.82 69.057h-13.247v-19.95zM375.313 0v133.525h13.26v20.411h-40.127V20.35L348.44.004zM46.087 0c5.986 0 13.081.885 19.293 2.004L61.698 23.85l-.448-.07-.644-.098-.41-.06-.59-.083-.56-.074-.534-.067-.343-.04-.496-.054-.477-.048-.309-.028-.301-.025-.442-.033-.288-.02-.425-.024-.28-.013-.277-.012-.414-.014-.138-.004-.282-.006a57 57 0 0 0-.76-.01l-.535-.002h-.29l-.569.003-.278.002-.543.007-.526.01-.51.015-.492.018c-7.113.302-9.025 2.064-9.025 10.46v15.526h20.274v19.969H40.512v64.45H54.01v20.407L0 153.94v-20.414h13.64v-64.45H0V51.352l13.64-2.243V31.166C13.64 9.432 18.372 0 46.088 0m83.44 28.286v6.824h-3.278v9.279h-.152a54.9 54.9 0 0 1 17.955 6.724l.314.187v-7.84h26.87l.018 83.616h6.422v26.861h-28.382l-4.841-7.902a54.97 54.97 0 0 1-28.46 7.892c-30.504 0-55.233-24.729-55.233-55.234 0-26.797 19.088-49.121 44.406-54.156l.77-.147h-.187v-9.28h-3.278v-6.823zm-11.924 41.961v3.176h-3.22v-3.166c-14.205.828-25.607 12.084-26.663 26.228l-.029.43h3.184v3.219h-3.2c.745 14.3 12.058 25.8 26.277 26.843l.432.029v-3.15h3.22v3.158c14.007-.748 25.317-11.637 26.73-25.458l.04-.42v-.881h-3.227v-3.22h3.226v-.923c-1.231-14.013-12.625-25.109-26.77-25.865m10.449 14.384 2.045 2.046-9.26 10.354a5.3 5.3 0 0 1 .234 1.568c0 2.88-2.274 5.216-5.075 5.216s-5.07-2.335-5.07-5.216c0-2.878 2.268-5.213 5.07-5.213.533 0 1.045.089 1.527.246l.144.05zm206.724 42.444a36.5 36.5 0 0 1-5.275.698l-.46.027-.45.023-.444.018-.434.015-.634.017-.412.009-1.908.028-.35.007-.171.004c-8.513.21-9.904-1.897-10.094-7.635l-.013-.455a56 56 0 0 1-.01-.71l-.004-.492v-.507l.002-.522.016-2.544.003-.92v-45.06h21.042V49.107h-21.042V0h-26.871v119.707c0 23.503 5.8 34.23 31.08 34.23 3.547 0 7.882-.542 12.117-1.26l.793-.136.789-.14.784-.143.778-.146.386-.074.767-.148.756-.15.375-.075.74-.15.728-.151.713-.15.698-.149zM253.725 69.04v-3.575l-.561-.1-.56-.095-.56-.091q-.419-.067-.836-.129l-.557-.08-.555-.076-.276-.037-.552-.07-.275-.034-.548-.065-.546-.061-.543-.058-.539-.054-.536-.051-.532-.048-.528-.044-.524-.042-.52-.039-.769-.052-.758-.047-.745-.042-.49-.024-.483-.022-.477-.02-.702-.027-.459-.016-.895-.025-.651-.016-.839-.015-.997-.013-.937-.007-1.83-.004c-11.63 0-13.763 5.735-14.005 9.43l-.013.235-.008.23-.002.112-.002.219c0 5.085 1.735 7.835 15.282 10.797l1.188.267 1.187.268.593.136 1.185.272c18.336 4.25 35.536 9.86 35.536 32.695 0 23.285-11.984 35.315-37.21 35.315-8.102 0-16.09-.834-23.587-2.053l-.934-.155-.93-.158q-.463-.08-.924-.162l-.918-.165q-.458-.083-.913-.168l-.906-.172-.451-.086-.898-.176-.891-.178-.443-.09-.882-.182-.874-.183-.868-.186-.861-.187-.854-.188-.424-.095-.842-.19-.835-.192-.827-.192-.82-.193-1.213-.29-1.195-.29-.785-.192-1.163-.289-1.142-.287-.376-.095v-20.067h20.348l-.012 3.565.56.106q.84.154 1.682.287l.562.086.28.042.56.08q.422.058.84.111l.56.07.557.065.556.061.277.03.552.055.276.027.549.05.546.047.544.044.54.04.536.038.533.034.529.032.524.03.777.038.512.023.506.02.75.027.735.022.72.018.706.014.914.014.883.01 1.26.005h1.732l1.673-.004c13.338 0 15.496-7.17 15.496-10.983 0-5.027-3.452-7.572-14.517-9.987l-.709-.153q-.54-.114-1.102-.228c-23.555-4.025-42.25-12.067-42.25-35.994 0-22.648 15.148-31.533 40.374-31.533a152 152 0 0 1 18.34 1.083l.864.107.43.055.853.113.425.058.845.12.84.123.833.127q.625.097 1.24.198l.821.136.816.14.406.071.808.145.804.148.4.075.798.153.397.078.791.157.787.16.784.163.39.082.78.167.387.084.774.17.77.173.768.175.765.177.763.18.76.18.759.183 1.134.277 1.13.281.751.19.375.094V69.04z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};
