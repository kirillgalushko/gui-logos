import { defineComponent as i, computed as h, openBlock as o, createElementBlock as a, normalizeStyle as n, createElementVNode as l } from "vue";
const s = /* @__PURE__ */ i({
  __name: "LogoBugherd2",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const c = t, m = h(() => ({
      width: c.width || "1em",
      height: c.height || "1em",
      minWidth: c.width || "1em",
      minHeight: c.height || "1em"
    }));
    return (r, e) => (o(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: n(m.value)
    }, e[0] || (e[0] = [
      l("g", null, [
        l("circle", {
          cx: "128",
          cy: "128",
          r: "128",
          fill: "#222"
        }),
        l("path", {
          fill: "#FFF",
          d: "M50.418 123.012c1.579-.192 2.743-1.188 2.824-2.722.163-3.096.169-6.218-.074-9.304-.064-.81-1.15-1.95-1.987-2.198-.848-.253-1.747-.335-2.663-.381l-1.105-.048a28 28 0 0 1-1.11-.064v14.952c1.427-.075 2.781-.072 4.115-.235m-4.106 23.112.93-.05 1.828-.081c.904-.046 1.791-.113 2.666-.258 1.687-.28 2.868-1.461 2.951-3.18.146-3 .167-6.019-.007-9.015-.105-1.809-1.313-3.063-3.169-3.315a28 28 0 0 0-2.543-.203l-1.754-.066a62 62 0 0 1-.902-.042zm10.993-19.78c4.106 2.05 5.427 5.492 5.352 9.674l-.012.407a41 41 0 0 0-.025 1.69l.01 1.696c.007 1.412-.018 2.818-.245 4.191-.873 5.267-5.108 8.708-10.479 8.816-3.219.065-6.441.035-9.662.006-2.205-.02-3.687-1.466-3.69-3.666q-.025-21.936-.002-43.873c.002-1.983 1.252-3.613 3.083-3.638l2.6-.038c3.038-.04 6.083-.036 9.077.325 4.82.58 7.733 4.183 7.884 9.052a129 129 0 0 1 0 8.042c-.088 2.854-1.407 5.13-3.546 7.021zm81.042 4.036h-8.6l.004 11.524c0 2.543-.003 5.077-.01 7.611-.01 3.22-3.23 5.007-6.02 3.368-1.443-.846-1.793-2.195-1.79-3.746l.008-10.9-.002-10.9c0-7.413-.01-14.826.006-22.239.006-2.666 1.492-4.139 4.047-4.097 2.238.036 3.742 1.523 3.75 3.79l.01 8.192-.004 9.896h8.524l.06-1.101q.013-.28.014-.56l-.002-10.826q.002-2.708.014-5.414c.013-2.554 1.518-4.001 4.018-3.977 2.27.022 3.767 1.47 3.776 3.741l.01 5.365-.003 10.73-.001 28.383c-.001 2.744-1.372 4.208-3.91 4.197-2.502-.01-3.89-1.51-3.895-4.254l-.006-8.486zm-32.349 20.802-1.845-.11-.003.052h-1.023c-1.896.001-2.705.698-3.353 2.886-.575 1.943-.1 3.66 1.264 4.575 2.016 1.352 6.234 1.061 7.965-.61 1.209-1.167 1.642-2.595 1.172-4.262-.467-1.655-1.698-2.28-3.258-2.451zm2.047-22.948h-.005l.024-2.043a28 28 0 0 0-.04-2.039c-.135-2.077-1.416-3.25-3.382-3.236-1.94.014-3.238 1.226-3.302 3.313a130 130 0 0 0 0 8.02c.065 2.078 1.377 3.301 3.307 3.315 2.001.013 3.279-1.228 3.386-3.393.033-.655.036-1.31.03-1.967zm5.629-7.821c1.5 1.654 1.767 3.566 1.725 5.557l-.011.374q-.03.827-.033 1.658l-.01 1.661c-.013 1.384-.06 2.761-.291 4.107-.825 4.816-4.742 7.893-9.626 7.937l-1.436.005-2.71-.003-.018.196-.108.712c-.056.424-.073.87.114 1.2.318.565 1.304.974 2.035 1.042 1.646.151 3.315.045 4.975.052 6.391.025 10.332 4.674 9.332 11.003-.756 4.786-3.968 8.022-9.229 9.114-3.336.693-6.706.634-10.007-.25-5.976-1.6-8.22-8.08-4.362-12.561.327-.38.705-.714 1.112-1.049l.843-.683q.217-.177.436-.367c-1.955-1.37-2.78-3.285-2.583-5.643.192-2.301 1.425-3.974 3.353-5.365-3.021-2.984-3.405-6.709-3.2-10.605l.034-.875.036-1.757c.025-1.17.073-2.337.269-3.478.741-4.314 4.19-7.185 8.522-7.624l.396-.034c3.444-.228 6.873-.702 10.308-1.068.29-.03.58-.075.872-.097 2.552-.188 3.615.54 3.86 2.64.276 2.357-.716 3.636-3.154 4.05a8 8 0 0 1-.521.067zm95.762 13.875c0-3.462-.077-6.926.038-10.384.045-1.354-.568-1.954-1.655-2.37-2.521-.964-4.496.376-4.509 3.138-.028 6.338-.017 12.676.005 19.014a5.7 5.7 0 0 0 .313 1.856c.458 1.292 1.814 1.908 3.375 1.63 1.763-.316 2.43-1.038 2.432-2.646zm.103 16.049c-1.523 2.047-3.362 3.303-5.832 3.368-4.633.123-7.855-2.844-7.9-7.488-.076-8.098-.058-16.197 0-24.295.019-2.734.968-5.134 3.616-6.377 2.789-1.309 5.587-1.158 8.23.502.244.153.472.332.71.533l.773.673q.143.123.3.253v-12.47c.004-2.689 1.226-4.02 3.692-4.036 2.532-.014 3.819 1.338 3.82 4.083.008 14.246.004 28.49.004 42.737l.006 1.268q-.001.317-.01.634c-.064 1.986-1.093 3.36-2.721 3.658-2.061.377-3.579-.402-4.408-2.268l-.051-.123zm-128.32.026c-1.915 3.206-4.852 3.81-8.147 3.169-3.253-.635-5.392-3.317-5.43-7.048-.093-9.365-.053-18.732-.023-28.098.006-1.89 1.366-3.2 3.215-3.332 2.341-.166 3.844.862 4.193 2.911.067.393.083.796.087 1.2l.008 22.938q-.002.951.076 1.898c.196 2.307 1.57 3.272 3.803 2.682 1.255-.332 1.954-.952 1.942-2.45-.067-8.39-.04-16.782-.028-25.172.004-2.57 1.293-3.973 3.613-4.01 2.527-.039 3.894 1.288 3.896 3.84.008 10.146.003 20.292.003 30.439 0 2.44-.783 3.699-2.507 4.042-2.325.463-3.756-.423-4.7-3.009m84.342-19.907.006-1.035.027-2.022c.016-1.33.016-2.627-.071-3.918-.112-1.649-1.197-2.466-2.714-2.46-1.426.007-2.632.844-2.732 2.318a47 47 0 0 0-.081 3.536l.03 2.381q.008.6.008 1.2zm-5.604 5.983-.005 1.422-.018 2.766c-.006 1.362 0 2.7.047 4.035.064 1.849 1.193 2.87 2.85 2.863 1.687-.008 2.715-1.005 2.908-2.829.026-.242.025-.486.032-.73.073-2.469 1.227-3.637 3.574-3.617 2.317.02 3.499 1.259 3.526 3.695.066 5.834-3.674 9.655-9.529 9.647-1.401-.002-2.845-.078-4.195-.416-3.976-.995-6.466-3.85-6.618-8.414-.233-6.958-.262-13.941.06-20.894.328-7.115 5.783-10.082 12.427-9.047 4.95.77 7.874 4.323 8.045 9.464.06 1.81.066 3.624.052 5.438l-.044 3.627c-.026 1.98-1.12 2.981-3.158 2.988l-3.925.005zm25.668-17.673c.63-2.815 2.275-3.958 4.928-3.72 2.097.187 3.13 1.473 3.077 3.97-.05 2.292-1.245 3.689-3.242 3.697a8 8 0 0 1-1.302-.122l-.866-.138c-1.642-.238-2.208.235-2.209 1.88 0 8.436.01 16.873-.005 25.309-.005 2.909-2.507 4.59-5.242 3.563-1.597-.6-2.267-1.762-2.268-4.003q-.006-14.922 0-29.844c0-2.5.856-3.74 2.73-3.994 2.518-.342 3.608.448 4.4 3.402"
        }),
        l("path", {
          fill: "#86BAD3",
          d: "M231.694 148.847c-.019 2.731-1.905 4.578-4.636 4.538-2.613-.038-4.413-1.928-4.403-4.624.01-2.733 1.878-4.551 4.635-4.51 2.639.038 4.422 1.9 4.404 4.596"
        })
      ], -1)
    ]), 4));
  }
});
export {
  s as _
};
