import { defineComponent as a, computed as e, openBlock as t, createElementBlock as c, normalizeStyle as i, createElementVNode as h } from "vue";
const r = /* @__PURE__ */ a({
  __name: "LogoTsmc",
  props: {
    width: {},
    height: {}
  },
  setup(v) {
    const m = v, l = e(() => ({
      width: m.width || "1em",
      height: m.height || "1em",
      minWidth: m.width || "1em",
      minHeight: m.height || "1em"
    }));
    return (o, z) => (t(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "202",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 202",
      style: i(l.value)
    }, z[0] || (z[0] = [
      h("g", null, [
        h("path", {
          fill: "#FFF",
          d: "m93.62 181.679 38.548.292h39.745c32.927-14.868 56.025-48.147 56.025-86.574 0-52.257-42.652-94.915-94.792-94.915-52.266 0-94.944 42.656-94.944 94.915-.003 38.218 22.734 71.336 55.418 86.282"
        }),
        h("path", {
          fill: "#221815",
          d: "M133.141 0q2.116 0 4.267.102 3.736.166 7.39.618l.096.014q.516.061 1.03.131l.245.036q3.546.488 7.004 1.236 2.238.471 4.487 1.08l1.371.385.36.105q.756.216 1.507.446v-.01l1.149.36q.996.319 2.017.676l.687.244.792.288a95 95 0 0 1 4.342 1.705l1.836.753h-.1a95.5 95.5 0 0 1 16.86 9.68l.576.415.769.56a107 107 0 0 1 3.539 2.775l1.243 1.023-.02-.002a96.5 96.5 0 0 1 12.754 13.089l.712.894.461.593h.223l.001.291a96 96 0 0 1 8.51 13.213l.504.942q.136.279.28.558l.157.002.001.308a94.7 94.7 0 0 1 10.224 42.887l-.012-1.287h.018l-.016.19.009.938.007.101h-.007v.058c0 4.127-.267 8.208-.788 12.224l-.16 1.18a95 95 0 0 1-.213 1.417l-.258 1.545-.218 1.202-.154.802-.133.658a93 93 0 0 1-2.428 9.39l-.14.442c-8.07 25.282-26.498 46.458-51.067 57.807l-.746.341-.196.042h-39.748l-38.174-.29h-.368l-.196-.043a95.3 95.3 0 0 1-36.192-28.95l-.058.001v-.07l-.563-.75-.768-1.05-.091-.129a95.5 95.5 0 0 1-7.918-13.055l-.035-.043-.002-.032a95.1 95.1 0 0 1-10.074-42.639c0-15.8 3.881-30.726 10.74-43.875l.073-.15-.001.011a96 96 0 0 1 8.15-12.93l1.29-1.703-.001.017A96.5 96.5 0 0 1 70.76 23.329l.93-.796a96 96 0 0 1 5.173-4.075l1.192-.86.901-.632.208-.144a95.4 95.4 0 0 1 15.419-8.65l-.063.002 1.19-.494a95 95 0 0 1 7.497-2.848l1.082-.355v-.004l.298-.093.397-.126.127-.033.128-.037a94 94 0 0 1 7.077-1.88l.781-.174.778-.169.576-.122a87 87 0 0 1 7.816-1.22l1.112-.113q4.216-.436 8.532-.492l.752-.005V0zM104.29 167.73h-8.613v13.487l8.613.065zm-9.565-.15h-8.248v9.873l.395.225a96 96 0 0 0 5.083 2.691l.928.443.843.391.999.001zm84.839-.002h-8.245v13.624h.993l.455-.207a86 86 0 0 0 5.71-2.927l.689-.385.398-.226zm-47.143.153h-8.25v13.462h8.25zm-9.478 0h-8.239l.001 13.462h8.238zm-9.441-.159h-8.259v13.62h8.259zm56.55.159h-8.205v13.462h8.205zm-9.394 0h-8.267v13.462h8.268zm-9.47 0h-8.23v13.462h8.23zm-9.336 0h-8.236l.001 13.462h8.236zm47.02 0h-8.246v9.104l.746-.443a100 100 0 0 0 6.455-4.184l.654-.468.392-.288zm-103.603 0H77.04v3.599l.655.481a91 91 0 0 0 6.34 4.193l.967.578.268.156zm108.326 0h-3.51l.002 2.808.683-.523a88 88 0 0 0 2.046-1.634l.654-.544zm-117.78.008H72.49l.33.279q.754.629 1.505 1.226l.75.59.741.568zm28.217-14.568h-8.236v13.607h8.236zm-18.77 0H77.03l-.001 13.458h8.234zm113.064.004h-8.237l-.004 13.45h4.813l.43-.371.51-.456.527-.482.556-.516.593-.56.812-.778zm-18.657-.01h-8.665v13.46h8.665zm-84.827 0h-8.627v13.46h8.627zm18.91 0h-8.768v13.455h8.768zm9.19.006h-8.237v13.449h8.238zm28.246 0h-8.23v13.449h8.23zm9.47 0h-8.266l-.001 13.449h8.267zm-28.236 0h-8.25l-.001 13.449h8.25zm37.63 0h-8.205v13.449h8.204zm-28.199 0h-8.236v13.449h8.235zm47.024 0h-8.254l-.001 13.445h8.254zm-113.055.002h-8.248l-.003 10.134.546.523q1.028.98 2.028 1.889l.665.6.331.293h4.68zm131.805.004h-8.09v9.102l.93-.935a96 96 0 0 0 5.927-6.616l.785-.977zm-141.277-.001h-7.887l.26.333a97 97 0 0 0 6.796 7.762l.831.845zm122.777-14.482h-8.615v13.523h8.615zm-84.837 0h-8.614v13.523h8.614zm37.716 0h-8.632v13.523h8.632zm28.045 0h-8.204v13.519h8.205zm-103.703 0h-8.22l.002 13.519h8.219zm84.84 0h-8.23v13.519h8.23zm9.47 0h-8.267v13.519h8.268zm-65.934 0h-8.247l.001 13.519h8.247zm-18.915 0h-8.246l.001 13.519h8.246zm131.958 0h-8.238v13.519h8.24zm-75.346 0h-8.25v13.519h8.25zm-9.478 0h-8.239l.001 13.519h8.238zm56.616 0h-8.245l.001 13.519h8.245zm-66.058 0h-8.259l.001 13.519h8.259zm-28.24 0h-8.233v13.519h8.235zm113.056 0h-8.237l.001 13.519h8.237zm18.535.01h-7.846v12.654l.558-.766a99 99 0 0 0 6.64-10.66l.547-1.027zm-159.828-.01H49.25l.073.142a96 96 0 0 0 6.603 10.926l.664.936.432.594zm131.852-14.433h-8.254l.001 13.48h8.254zm-47.024 0h-8.236l.001 13.48h8.236zm-37.82 0h-8.237v13.48h8.237zm113.205 0h-8.239v13.346h8.242zm-160.226 0h-8.257v13.346h8.257zm94.176 0h-8.23v13.344h8.23zm-65.925 0h-8.234v13.344h8.234zm94.297 0h-8.245v13.344h8.245zm28.208 0h-8.238v13.344h8.238zm-94.266 0h-8.259v13.344h8.259zm56.55 0h-8.204v13.344h8.204zm-37.63 0h-8.25v13.344h8.25zm65.896 0h-8.237v13.344h8.237zm-103.593 0h-8.247v13.344h8.247zm-28.376 0h-8.22v13.344h8.22zm94.31 0h-8.267v13.344h8.267zm-37.715 0h-8.239v13.344h8.239zm-47.134 0h-8.246v13.344h8.246zm147.108-.004h-4.611v11.497l.079-.159a92 92 0 0 0 4.075-9.954l.373-1.116zm-175.331 0h-4.348l.105.326a93 93 0 0 0 3.626 9.371l.528 1.155.09.189zm0-14.59h-7.811l.088.578a92 92 0 0 0 2.496 11.168l.328 1.113.2.651h4.702zm169.652.001h-8.236v13.507h8.235zm9.133-.002h-6.315l-1.743.003v13.505h4.949l.209-.675.215-.723.182-.632a94 94 0 0 0 1.92-8.073l.09-.482.107-.582q.09-.507.176-1.015l.127-.776zm-46.811.002h-8.245v13.499h8.244zm-9.508 0h-8.205v13.499h8.204zm37.716 0h-8.238l-.001 13.499h8.238zm-47.11 0h-8.266l-.001 13.499h8.267zm-84.848 0h-8.246v13.499h8.245zm122.508 0h-8.237v13.499h8.236zm-47.13 0h-8.23v13.499h8.23zm-37.686 0h-8.259v13.499h8.258zm18.92 0h-8.25l-.001 13.499h8.25zm-47.16 0H77.03l-.001 13.499h8.234zm18.77 0h-8.236l-.001 13.499h8.236zm84.845 0h-8.254l-.001 13.499h8.254zm-65.934 0h-8.238v13.499h8.238zm-28.218 0h-8.247v13.499h8.246zm-28.376 0h-8.22v13.499h8.219zm75.504 0h-8.236v13.499h8.235zm-84.831 0h-8.254v13.497h8.253zm18.787-14.435h-8.246l.001 13.48h8.246zm75.378 0h-8.23l.001 13.48h8.23zm-37.686 0h-8.259l.001 13.48h8.259zm-28.24 0h-8.233v13.48h8.235zm75.397 0h-8.267v13.48h8.268zm37.659 0h-8.237l.001 13.48h8.237zm-75.374 0h-8.239l.001 13.48h8.238zm65.933 0h-8.254l.001 13.48h8.254zm-122.528 0h-8.22l.002 13.48h8.219zm28.376 0h-8.247l.001 13.48h8.247zm75.327 0h-8.204v13.48h8.205zm-66.02 0h-8.236v13.48h8.237zm113.206 0H209l.001 13.48h8.236zm1.067.01v13.47h2.033l6.098-.008.942-13.375zm-10.537-.01h-8.238v13.48h8.24zm-150.746 0h-8.254l.001 13.48h8.254zm75.4 0h-8.25v13.48h8.25zm9.431 0h-8.236l.001 13.48h8.236zm37.707 0h-8.245l.001 13.48h8.245zm-131.98.006-8.72.053.47 10.637.233 2.2.07.585h7.947zm0-14.567h-7.707l-.064.383-.127.823-.136.97-.22 1.658-.467 9.669 8.72-.017zm47.145 0h-8.247v13.49h8.247zm-18.915 0h-8.246v13.49h8.246zm122.508 0h-8.237v13.49h8.237zm-28.266 0h-8.204v13.49h8.204zm37.716 0h-8.238v13.49h8.238zm-103.736 0h-8.236v13.49h8.236zm75.528 0h-8.245v13.49h8.245zm9.317 0h-8.254v13.49h8.254zm-75.375 0h-8.259v13.49h8.259zm28.351 0h-8.236v13.49h8.236zm-18.91 0h-8.238v13.49h8.239zm28.245 0h-8.23v13.49h8.23zm-94.166 0h-8.254v13.49h8.254zm160.216 0H209v13.49h8.236zm-84.816 0h-8.25v13.49h8.25zm-66.073 0h-8.22v13.49h8.22zm18.914 0h-8.234v13.49h8.234zm75.396 0h-8.267v13.49h8.267zm65.637.002h-7.988l-.001 13.484 9.073-.043-.81-11.602-.036-.256zm-3.475-14.459h-4.51l.001 13.506h7.822l-.094-.568a94 94 0 0 0-2.663-11.166l-.344-1.116zm-175.233-.007-4.242.002-.207.65a95 95 0 0 0-2.81 11.156l-.204 1.127-.098.576h7.56zm150.73 0h-8.237v13.508h8.237zm-56.465 0h-8.236v13.508h8.236zm-47.128 0h-8.247v13.508h8.247zm56.463 0h-8.23v13.508h8.23zm56.58 0h-8.238v13.508h8.238zm-18.891 0h-8.254v13.508h8.254zm-65.933 0h-8.239v13.508h8.239zm56.616 0h-8.245v13.508h8.245zm-47.138 0h-8.25v13.508h8.25zm-56.612 0h-8.246v13.508h8.246zm28.222 0h-8.236v13.508h8.236zm-18.77 0h-8.233v13.508h8.234zm75.397 0h-8.267v13.508h8.267zm-47.157 0h-8.259v13.508h8.259zm56.55 0h-8.204v13.508h8.204zm47.186.011H209v13.497h8.236zM57.02 66.212h-8.254v13.504h8.254zm9.327-.003h-8.22v13.507h8.22zM218.314 54.98v10.15h4.125l-.078-.24a89 89 0 0 0-3.492-8.733zm-57.656-3.33h-8.267v13.474h8.267zm-28.237 0h-8.25v13.474h8.25zm-18.92 0h-8.259v13.474h8.259zm-28.24 0h-8.233v13.474h8.234zm94.299-.004h-8.245v13.478h8.244zm-113.211 0h-8.22v13.478h8.219zm141.418.002h-8.238v13.476h8.238zm-18.891.002h-8.254v13.474h8.254zm-37.689 0h-8.23v13.474h8.23zm47.13 0h-8.237v13.474h8.237zm-94.285-.004h-8.236l-.001 13.478h8.236zm66.02.004h-8.205v13.474h8.204zm-47.11 0h-8.238v13.474h8.239zM47.587 65.124v-9.622l-.066.144a95 95 0 0 0-3.688 9.088l-.133.39zM75.809 51.65h-8.246v13.474h8.246zm66.043 0h-8.236v13.474h8.236zm-47.128 0h-8.247v13.474h8.247zm121.93.004h-7.656v13.47h8.238V52.808zM57.02 65.124l.004-13.478-7.526.002-.444.837-.173.337-.117.233v12.07zm.004-25.511-.434.596a98 98 0 0 0-6.375 10.122l-.196.362h7.005zm150.257-2.428h-7.733v13.507h8.236V37.84l-.225-.3-.165-.212zm-93.781-.003h-8.259v13.51h8.259zm28.351 0h-8.236v13.51h8.236zm-56.59 0h-8.234v13.51h8.234zm37.68 0h-8.238v13.51h8.239zm-28.217-.123h-8.247v13.633h8.246zm65.933.123h-8.267v13.51h8.267zm-56.368 0h-8.614v13.51h8.614zm28.13 0h-8.25v13.51h8.25zm47.25 0h-8.666v13.51h8.665zm-9.619 0h-8.204v13.51h8.204zm-18.864 0h-8.23v13.51h8.23zm-75.378.002h-8.246v13.508h8.246zm122.508.001h-8.237v13.507h8.237zm-9.441-.003h-8.254v13.51h8.254zm20.13 2.269V50.69h7.15l-.153-.285a99 99 0 0 0-5.831-9.34l-.707-.988zM66.35 37.184h-7.458l-.265.331-.278.365-.218.292v12.517h8.22zM179.559 22.63h-8.245l.001 13.599h8.245zm-75.528-.01h-8.236v13.61h8.237zm37.821.003h-8.236v13.482h8.236zm-9.43-.004h-8.25l-.001 13.486h8.25zm-18.921.004h-8.259v13.482h8.259zm47.157 0h-8.267v13.482h8.267zm-9.47 0h-8.23v13.482h8.23zm-65.926-.003h-8.234v13.485h8.234zm9.58.015h-8.627v13.47h8.627zm94.034-.014h-8.254v13.484h8.254zm-65.933.002h-8.239v13.482h8.239zm70.154-.002h-3.008l-.001 13.484h8.23v-8.79l-.385-.37a90 90 0 0 0-3.944-3.58l-.542-.456zm-23.046.004h-8.204v13.48h8.204zm-94.233-.006h-2.73l-.26.213c-1.43 1.176-2.857 2.458-4.458 3.991l-.798.77-.001 8.512h8.247zm-9.47 6.142-.89.905a94 94 0 0 0-4.872 5.427l-.828 1.01h6.589zm133.19-.252-.002 7.592h6.86l-.711-.87a94 94 0 0 0-5.343-5.914zM94.724 9.173l-.366.164a94 94 0 0 0-7.123 3.609l-.76.431v8.306h8.249zm95.362 11.053v1.443h1.844l-.437-.35-.727-.57zm-18.775-11.13-.001 12.57h8.248v-8.378l-.872-.494a95 95 0 0 0-5.7-2.929l-1.167-.541zM85.27 14.073l-.117.068a96 96 0 0 0-4.832 3.046l-.822.561-.615.43-.703.502-.562.409-.579.431v2.146h8.229zm95.357-.172-.001 7.765h8.246l.001-2.355a95 95 0 0 0-.853-.622 98 98 0 0 0-6.028-3.975l-1.031-.618zm-19.97-5.728h-8.266v13.493h8.267zm-27.993-.01H123.9l.001.009h-.004v13.494h8.767zm36.501.005h-7.31v13.498h8.202V8.532zm-17.978.002h-8.23v13.496h8.23zm-9.335-.005-8.236.003v13.498h8.236zm-18.908.007h-8.237v13.494h8.237zm-9.446-.01h-8.26v13.504h8.26zm-9.47.01h-6.992l-1.244.523v12.97h8.236zM75.816 20.457l-.624.482-.672.526-.251.2h1.546zM132.422.97l-.573.005a89 89 0 0 0-7.115.372l-.562.055v5.81h8.25zm29.428 4.48-.001 1.645h4.66l-.48-.184-.957-.358.134.049a93 93 0 0 0-3.356-1.152M133.616.961v6.133h8.236l.001-5.724-.731-.067a98 98 0 0 0-3.884-.256l-.99-.038L134.7.971zm9.342.517v5.616h8.231l.001-4.373-.759-.15a86 86 0 0 0-3.285-.566l-1.096-.16a84 84 0 0 0-1.645-.21l-.824-.094zm-20.011.03c-2.783.3-5.53.724-8.237 1.263v4.323h8.238zm-9.448 1.513q-.526.113-1.051.23a110 110 0 0 0-6.273 1.649l-.934.28v1.914h8.258zm38.89-.07v4.143h8.267l.001-2.004-.69-.216q-.443-.136-.886-.265a92 92 0 0 0-6.312-1.584zm-48.358 2.613-.556.184q-1.034.348-2.074.724l-1.041.383-.621.236h4.292z"
        }),
        h("path", {
          fill: "#211714",
          stroke: "#211714",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M95.201 36.702V22.136h-9.203v14.566zm0 130.554v-14.565h-9.203v14.565zM104.5 51.174V36.579h-9.184v14.595zm0 101.516v-14.603h-9.184v14.603zm0 28.98v-14.579h-9.184v14.579zm9.48-14.415V152.69h-9.212v14.565zm18.92-145.11V7.568h-9.204v14.579zm9.432 130.544v-14.603h-9.19v14.603zm37.706-101.516V36.578h-9.19v14.595zm0 116.082V152.69h-9.19v14.565zm9.316-14.565v-14.603h-9.2v14.603z"
        }),
        h("path", {
          fill: "#E60012",
          d: "M236.891 197.283v-3.906l-209.587.123v7.884l209.587-.147zM43.061 78.733v-6.83l-14.31.134c-1.82 0-1.715-.39-1.715-2.757l.152-9.336-7.23-.124c-2.22 4.981-4.976 8.27-6.544 8.917L0 74.653v4.21l5.02.125c2.23 0 3.144-.124 3.144 2.505v27.695c0 8.41 4.586 14.585 16.424 14.862 8.898.247 14.3-3.698 18.09-7.383l-1.038-3.545c-1.59 1.068-2.878 1.981-5.001 1.981-10.102 0-9.83-7.887-9.83-14.842V81.497c0-2.763.227-2.763 2.085-2.763h14.168m27.846 44.653c11.565-.54 22.712-3.03 22.712-14.191 0-8.118-8.913-13.26-18.363-17.33-6.06-2.495-14.843-6.163-14.843-9.069 0-3.4 6.688-9.978 13.119-4.725l11.174 9.336 5.125-1.067-2.878-13.9c-2.639.125-4.477.264-14.076-1.333-11.822-1.695-25.865 4.223-25.865 15.233 0 7.383 10.651 12.49 19.063 15.9 4.585 1.965 12.737 4.865 12.737 9.323 0 4.307-7.632 5.517-11.956 5.517-7.355 0-15.51-9.86-15.51-9.86h-4.839l2.62 14.727c.896-.8 4.211-.685 4.868-.4 2.346.898 10.873 2.23 16.912 1.839m29.542-14.062c0 8.147-2.09 12.47-8.669 12.852l.162 1.33c10.993-.125 22.197 0 32.934-.248l.123-.687c-4.963 0-8.793-5.249-8.793-11.785v-21.94c0-5.4 6.568-8.811 11.032-8.411 6.937.651 10.765 5.106 10.765 9.063v21.536c0 6.57-1.968 10.632-7.085 11.017v1.21h30.188v-.925c-4.466-.543-7.608-4.624-7.608-10.778v-22.61c0-4.83 4.197-8.118 11.694-8.24 6.568-.134 10.499 4.734 10.499 9.335v20.464c0 6.965-2.097 11.289-7.336 11.832v.925c11.022.123 20.072.123 30.961 0v-.687c-5.762 0-7.725-3.792-7.725-11.784v-22.61c0-7.478-4.073-16.413-15.5-16.413-7.736 0-13.423 3.782-16.662 4.887-2.239.877-3.82 1.944-4.354 1.944-1.025 0-2.201-.658-3.667-2.23-2.763-2.917-7.737-4.6-13.004-4.6-6.702 0-13.403 3.781-16.567 4.886-.372.105-2.725 1.286-3.01 1.286-.515 0-2.62 0-2.62-.247 0-6.316.4-3.173.141-7.631h-4.347c-1.291 0-3.552 2.372-6.172 3.391-3.156 1.344-9.46 1.205-12.06 1.868v4.46l6.801 1.305v8.675zm129.697-38.086c-19.435 0-34.277 10.113-34.277 27.728 0 14.844 13.517 25.33 31.646 25.33 13.795 0 25.213-9.975 28.485-16.28 0-1.955-1.962-2.76-3.79-2.76-3.164 4.86-12.086 8.554-15.75 8.4-21.938-.792-25.483-9.586-25.749-18.77-.41-9.982 10.374-18.662 19.567-17.986 5.364.376 7.221 9.155 11.928 12.322 1.476.816 4.873.663 7.116.276 1.706-.276 6.278-1.318 6.278-5.26 0-3.275-4.069-6.963-7.983-9.326-3.935-1.819-12.747-3.674-17.471-3.674"
        })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};