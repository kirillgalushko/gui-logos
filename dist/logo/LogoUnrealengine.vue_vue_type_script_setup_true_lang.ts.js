import { defineComponent as a, computed as t, openBlock as m, createElementBlock as i, normalizeStyle as o, createElementVNode as v } from "vue";
const s = /* @__PURE__ */ a({
  __name: "LogoUnrealengine",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const h = e, c = t(() => ({
      width: h.width || "1em",
      height: h.height || "1em",
      minWidth: h.width || "1em",
      minHeight: h.height || "1em"
    }));
    return (q, l) => (m(), i("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "210",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 210",
      style: o(c.value)
    }, l[0] || (l[0] = [
      v("g", { fill: "#000" }, [
        v("path", { d: "M80.455 208.842H60.45v-18.359h19.69v4.066H65.802v3.127h13.572v3.835H65.811v3.162h14.644zm115.092 0h-19.69v-18.068h19.383v3.982h-14.106v3.075h13.357v3.771h-13.357v3.115h14.413zm-87.956 0h-8.104L88.83 195.111h-.104v13.731H83.43v-18.359h8.223l10.526 13.748h.103v-13.748h5.309zm64.129 0h-8.092l-10.657-13.731h-.104v13.731h-5.32v-18.359h8.223l10.526 13.748h.103v-13.748h5.32zm-47.678.235-.824.008-.625-.002-.603-.006-.58-.01-.56-.014-.536-.018-.514-.021-.493-.026-.47-.03a16.4 16.4 0 0 1-3.15-.47 6 6 0 0 1-2.099-.984 4.1 4.1 0 0 1-1.258-1.633 8.3 8.3 0 0 1-.625-2.44 32 32 0 0 1-.156-2.969v-.962a31 31 0 0 1 .164-3.417 8.3 8.3 0 0 1 .613-2.454 4.2 4.2 0 0 1 1.262-1.628 5.9 5.9 0 0 1 2.103-.964c.927-.231 1.872-.38 2.825-.447l.317-.019q.233-.016.474-.028l.495-.024.255-.011.526-.019.548-.015.569-.01.292-.005.6-.006.622-.002h.796l.595.002.573.006.552.01.268.005.52.015.497.019.241.01.466.025q1.38.07 2.736.335c.66.123 1.298.346 1.892.66.477.254.887.619 1.194 1.064.305.47.51.997.602 1.55a12 12 0 0 1 .167 1.841v.97h-5.177v-.223c.01-.36-.057-.719-.195-1.052a1.44 1.44 0 0 0-.76-.68 5.5 5.5 0 0 0-1.412-.343l-.182-.016q-.342-.032-.757-.056l-.344-.016-.367-.013-.39-.01-.413-.006-.437-.003h-.686l-.448.003-.633.008-.395.009-.375.011-.353.014-.168.007a10 10 0 0 0-1.796.227c-.41.088-.797.26-1.135.506-.29.23-.509.538-.63.888a5.3 5.3 0 0 0-.25 1.216l-.013.178q-.012.166-.021.345l-.017.372-.012.399-.007.424-.002.223v.78l.005.43.01.402.014.377q.008.183.02.351l.01.166c.026.465.114.925.263 1.366.122.348.34.653.63.88.338.246.725.418 1.135.506q.76.167 1.537.214l.427.021.353.014.375.012.395.009.417.005.437.003h1.353l.418-.001.394-.005q.384-.007.72-.026l.551-.04.357-.028q.43-.035.772-.086c.337-.048.667-.14.98-.275.223-.1.419-.253.57-.446a1.45 1.45 0 0 0 .266-.626q.066-.419.064-.844v-.51h-7.045v-3.544h12.158v4.078c.009.777-.049 1.554-.171 2.322a5 5 0 0 1-.621 1.724c-.3.485-.71.894-1.195 1.195a6.4 6.4 0 0 1-1.924.76q-1.204.273-2.436.374l-.351.025q-.349.025-.72.046l-.508.024-.262.01-.54.017q-.414.012-.852.017l-.596.005zm19.602-.19h-5.38v-18.224h5.38zM20.573 180.86l-1.372.006-.77-.002-.38-.003-.741-.008q-.549-.009-1.077-.021l-.694-.019-.674-.023-.656-.028-.636-.031-.31-.018-.607-.038-.297-.02a31.6 31.6 0 0 1-5.073-.713 12.1 12.1 0 0 1-3.533-1.37 6.9 6.9 0 0 1-2.234-2.167 8.7 8.7 0 0 1-1.175-3.098 22.4 22.4 0 0 1-.342-4.197V148.4H9.44v17.65q0 .756.025 1.413l.019.427q.021.416.055.788l.017.184a6.8 6.8 0 0 0 .466 1.991c.215.527.565.989 1.015 1.338.527.379 1.124.65 1.756.797a13.5 13.5 0 0 0 2.386.38l.519.03.448.02.47.018.491.015.513.011.535.009.558.005.58.001h.796l.579-.001.556-.006.27-.004.524-.011.254-.007.492-.017.237-.01.459-.021.22-.013.216-.013a15 15 0 0 0 2.692-.378 4.7 4.7 0 0 0 1.757-.797 3.4 3.4 0 0 0 1.011-1.338 6.7 6.7 0 0 0 .47-1.991q.111-1.195.112-2.788v-17.686h9.442v20.709a24.5 24.5 0 0 1-.319 4.185 8.6 8.6 0 0 1-1.143 3.11 6.8 6.8 0 0 1-2.21 2.167 12 12 0 0 1-3.524 1.37 31.6 31.6 0 0 1-4.665.685l-.728.048-.613.037-.632.034-.324.015-.661.027-.682.023-.7.02-.72.014-.368.006-.75.01zm67.34-.388H73.8l-18.582-24.014h-.183v24.014H45.78v-32.119h14.336l18.355 24.038h.18v-24.038h9.255v32.103zm16.062-15.902h11.764l.479-.002.458-.004.439-.007.419-.01.201-.007.39-.014.368-.018.35-.02.167-.012.32-.025.3-.029a5.3 5.3 0 0 0 2.198-.625c.485-.292.836-.762.98-1.31.171-.73.249-1.477.23-2.226v-.554a8.7 8.7 0 0 0-.23-2.198 2.07 2.07 0 0 0-.992-1.29 5.5 5.5 0 0 0-2.21-.602l-.3-.028-.319-.025-.167-.012-.348-.02-.367-.018-.386-.015-.406-.011-.425-.01-.445-.005-.465-.003h-12.003zm28.57 15.902h-9.327v-2.605q.01-1.214-.112-2.421a4.9 4.9 0 0 0-.481-1.717 2.94 2.94 0 0 0-1.024-1.127 5.2 5.2 0 0 0-1.744-.657 17 17 0 0 0-2.668-.31l-.215-.011-.446-.02-.23-.008-.478-.015-.498-.012-.52-.009-.267-.003-.55-.005h-.283l-9.727-.001v8.92h-9.35v-32.118h24.901a35.4 35.4 0 0 1 6.025.417l.427.07a9.2 9.2 0 0 1 3.982 1.624 5.86 5.86 0 0 1 2.02 3.019c.404 1.513.591 3.077.557 4.643v1.127a16.5 16.5 0 0 1-.295 3.31 7.2 7.2 0 0 1-.96 2.44 5.6 5.6 0 0 1-1.708 1.693 8.1 8.1 0 0 1-2.577 1.016v.183a13.8 13.8 0 0 1 2.768.705 3.7 3.7 0 0 1 1.7 1.266 5.1 5.1 0 0 1 .845 2.203c.168 1.15.244 2.313.227 3.476v4.91zm41.015 0h-34.886v-32.119h34.336v7.1h-24.99v5.46h23.668v6.707h-23.667v5.532h25.539zm31.54-12.442-6.542-12.883h-.231l-6.496 12.883zm16.52 12.465h-10.18l-2.942-5.762h-20.02l-2.895 5.762h-10.104l17.24-32.098h11.585zm34.38 0h-30.92v-32.098h9.439v24.647H256zM128 0a64.937 64.937 0 0 1 64.946 64.937c.002 35.867-29.071 64.944-64.937 64.946s-64.943-29.071-64.946-64.938C63.061 29.438 91.556.585 126.927.01zm23.854 7.338c-23.297-9.65-50.113-4.315-67.943 13.516C66.081 38.686 60.748 65.502 70.399 88.8s32.385 38.485 57.602 38.483c34.43-.002 62.34-27.914 62.34-62.345 0-25.216-15.19-47.95-38.487-57.6m-29.743 18.3c-5.436 3.1-8.495 8.157-8.495 12.402 0 5.13 2.336 5.937 4.008 5.592l.201-.047.098-.028.189-.062.09-.035.175-.074.082-.04.156-.083.143-.088.129-.09q.03-.023.058-.047v39.394c.206.495.473.962.796 1.39a5.81 5.81 0 0 0 4.767 2.405c1.696 0 3.599-.796 5.25-1.734l.465-.27.45-.276.43-.276.41-.274.386-.268.36-.258.636-.475.505-.397.356-.291.21-.18V49.63c0-3.246-2.445-7.168-4.894-8.506l.338-.046.396-.035.38-.021.445-.01h.161l.34.008.178.008.37.023q.286.022.59.06l.412.06c1.325.213 2.837.687 4.21 1.669l.217.16a30 30 0 0 1 2.094-2.307c5.718-5.617 11.21-8.41 16.191-9.97l.744-.225.368-.106.732-.2q.363-.095.723-.183l.714-.17.706-.157.697-.144 1.03-.197.337-.061-.417.346-.599.526-.38.348-.425.403-.466.456-.502.508-.351.367-.363.388-.372.41-.381.432-.387.452-.392.473-.396.492-.198.254-.398.52q-.397.532-.79 1.1l-.39.576q-.194.293-.384.594l-.377.61c-2.05 3.408-3.688 7.57-3.688 12.17l.022 6.304.213 25.094c2.574 2.472 5.883 1.359 9.362-1.204l.465-.35.233-.181.467-.374.235-.193.469-.394.234-.203.47-.413.471-.425.706-.655.705-.673.693-.677.69-.687.457-.463.91-.93-.076.352-.087.374-.15.6-.115.424-.127.443-.14.46-.152.479-.166.494-.179.51-.193.524-.207.538-.223.551-.237.564-.125.286-.26.58-.278.59-.294.598-.153.303-.32.611-.166.309-.345.621c-3.254 5.728-8.794 12.2-17.986 16.543l-6.372-7.168-10.753 10.816a39.71 39.71 0 0 1-31.405-16.109c1.144.356 2.325.578 3.52.661 1.76.032 3.668-.613 3.668-3.584V56.479a4.803 4.803 0 0 0-6.045-4.807c-2.451.56-4.66 3.858-6.272 7.061l-.295.599-.28.592-.266.582-.25.568-.234.548-.217.526-.2.499-.347.899-.272.741-.328.953a39.53 39.53 0 0 1 13.684-30.29c6.507-5.515 12.883-7.865 18.066-8.933l.715-.141q.177-.034.352-.065l.69-.118z" })
      ], -1)
    ]), 4));
  }
});
export {
  s as _
};