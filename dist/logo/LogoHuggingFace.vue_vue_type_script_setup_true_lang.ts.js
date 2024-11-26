import { defineComponent as h, computed as t, openBlock as v, createElementBlock as m, normalizeStyle as e, createStaticVNode as i } from "vue";
const z = /* @__PURE__ */ h({
  __name: "LogoHuggingFace",
  props: {
    width: {},
    height: {}
  },
  setup(a) {
    const q = a, c = t(() => ({
      width: q.width || "1em",
      height: q.height || "1em",
      minWidth: q.width || "1em",
      minHeight: q.height || "1em"
    }));
    return (p, l) => (v(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "114",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 114",
      style: e(c.value)
    }, l[0] || (l[0] = [
      i('<g><path fill="#000B1B" d="M144.629 77.212V36.455h10.784v15.176h12.163V36.455h10.784v40.757h-10.784V61.036h-12.163v16.176zm51.387.753q-5.14 0-7.463-3.449-2.32-3.511-2.32-9.34V45.863h10.784v17.934q0 3.01.752 4.013.816 1.003 2.383 1.003 1.505 0 2.508-.627t2.007-2.132V45.865h10.784v31.346h-8.778l-.752-4.138h-.251q-1.881 2.257-4.2 3.574-2.258 1.316-5.455 1.316zm38.13 12.163q-3.575 0-6.582-.815-3.01-.753-4.828-2.446-1.755-1.692-1.755-4.514 0-3.698 4.389-6.02v-.25a9.1 9.1 0 0 1-2.07-2.132q-.815-1.317-.815-3.26 0-1.63.94-3.198a9.8 9.8 0 0 1 2.571-2.696v-.251q-1.692-1.128-3.009-3.198-1.254-2.131-1.254-4.827 0-3.889 1.881-6.393 1.944-2.57 5.016-3.762 3.072-1.253 6.522-1.254 2.76 0 5.016.753h11.66v7.777h-4.514a8.5 8.5 0 0 1 .313 1.442q.188.879.188 1.818 0 3.7-1.693 6.02-1.693 2.256-4.577 3.323-2.885 1.066-6.392 1.066-1.568 0-3.511-.44-.753.69-.753 1.819 0 1.004 1.004 1.442 1.066.44 3.385.439h4.703q5.894 0 9.091 1.944 3.26 1.88 3.26 6.208 0 3.387-2.257 5.955-2.195 2.57-6.268 4.012-4.076 1.443-9.653 1.443zm1.003-29.216q1.505 0 2.445-1.066.94-1.065.94-3.322 0-2.196-.94-3.198-.94-1.065-2.445-1.066-1.506 0-2.445 1.066-.941 1.003-.941 3.198 0 2.257.94 3.322.94 1.066 2.446 1.066m.752 22.575q2.633 0 4.389-.815 1.755-.753 1.755-2.07 0-1.253-1.128-1.567-1.066-.313-3.072-.313H235.4q-1.882 0-2.885-.126a8.3 8.3 0 0 1-1.63-.25q-1.128 1.128-1.128 2.257 0 1.504 1.692 2.194 1.757.69 4.452.69m32.47 6.647q-3.573 0-6.581-.815-3.01-.753-4.828-2.446-1.756-1.692-1.756-4.514 0-3.7 4.39-6.02v-.25a9.1 9.1 0 0 1-2.07-2.132q-.815-1.317-.815-3.26 0-1.63.94-3.198a9.8 9.8 0 0 1 2.572-2.696v-.251q-1.694-1.128-3.01-3.198-1.255-2.131-1.254-4.827 0-3.889 1.88-6.393 1.944-2.57 5.017-3.762 3.071-1.253 6.522-1.254 2.76 0 5.017.753h11.66v7.777h-4.515q.188.565.314 1.442.188.878.188 1.818 0 3.7-1.693 6.02-1.692 2.256-4.577 3.323-2.885 1.065-6.392 1.066-1.567 0-3.511-.44-.753.69-.753 1.819 0 1.004 1.003 1.442 1.067.439 3.386.439h4.703q5.894 0 9.09 1.943 3.261 1.881 3.261 6.21 0 3.386-2.257 5.954-2.195 2.57-6.268 4.012-4.077 1.442-9.654 1.442zm1.003-29.216q1.504 0 2.446-1.066.94-1.065.94-3.322 0-2.196-.94-3.198-.942-1.066-2.446-1.066t-2.445 1.066q-.94 1.002-.94 3.198 0 2.256.94 3.322.941 1.066 2.445 1.066m.753 22.575q2.633 0 4.389-.815 1.755-.753 1.755-2.07 0-1.253-1.128-1.567-1.065-.313-3.073-.313h-2.445q-1.88 0-2.884-.126a8.3 8.3 0 0 1-1.63-.25q-1.129 1.128-1.129 2.257 0 1.504 1.694 2.194 1.755.69 4.451.69m21.06-6.268V45.879h10.783v31.346zm5.391-35.235q-2.633 0-4.264-1.442-1.63-1.505-1.63-3.95t1.63-3.888q1.631-1.504 4.264-1.504t4.264 1.504q1.63 1.443 1.63 3.888t-1.63 3.95q-1.63 1.442-4.264 1.442m12.673 35.235V45.879h8.777l.752 3.761h.251a20 20 0 0 1 4.264-3.135q2.444-1.38 5.643-1.38 5.202 0 7.463 3.512 2.32 3.449 2.32 9.281v19.313h-10.784V59.297q0-3.01-.752-4.013-.753-1.003-2.383-1.003-1.505 0-2.508.627t-2.257 1.756v20.562zm47.9 12.915q-3.573 0-6.581-.815-3.009-.753-4.828-2.446-1.755-1.692-1.755-4.514 0-3.7 4.389-6.02v-.25a9.1 9.1 0 0 1-2.07-2.132q-.814-1.317-.814-3.26 0-1.632.94-3.198a9.8 9.8 0 0 1 2.57-2.696v-.251q-1.692-1.128-3.01-3.198-1.253-2.131-1.253-4.828 0-3.887 1.881-6.392 1.944-2.571 5.016-3.762 3.072-1.254 6.522-1.254 2.76 0 5.016.753h11.66v7.777h-4.514q.188.565.314 1.442.188.877.188 1.818 0 3.7-1.693 6.02-1.694 2.256-4.577 3.323-2.885 1.065-6.392 1.066-1.569 0-3.511-.44-.753.69-.753 1.819 0 1.002 1.004 1.442 1.065.438 3.385.439h4.703q5.894 0 9.09 1.943 3.261 1.881 3.261 6.21 0 3.386-2.257 5.954-2.195 2.57-6.268 4.012-4.077 1.442-9.654 1.442zm1.004-29.216q1.505 0 2.445-1.066.94-1.065.94-3.323 0-2.195-.94-3.197-.94-1.065-2.445-1.066-1.504 0-2.445 1.066-.941 1.002-.94 3.197-.001 2.258.94 3.323.94 1.066 2.445 1.066m.752 22.575q2.634 0 4.389-.815 1.755-.753 1.755-2.07 0-1.253-1.128-1.567-1.065-.314-3.072-.314h-2.445q-1.882 0-2.884-.125a8.3 8.3 0 0 1-1.63-.25q-1.13 1.128-1.13 2.256 0 1.505 1.694 2.195 1.755.69 4.451.69m34.49-6.268V36.474h26.58V45.5H404.18v7.777h13.543v9.026H404.18v14.922zm38.377.752q-2.947 0-5.079-1.316a9.4 9.4 0 0 1-3.197-3.574q-1.13-2.195-1.129-4.765 0-4.891 4.013-7.648 4.012-2.82 13.039-3.762-.376-3.26-4.389-3.26-1.693 0-3.574.69-1.881.627-4.326 1.944l-3.762-7.02q3.325-2.007 6.706-3.073a23.9 23.9 0 0 1 7.085-1.066c4.097 0 7.292 1.171 9.595 3.512q3.447 3.448 3.448 11.163v17.43h-8.778l-.752-3.009h-.251a18 18 0 0 1-4.013 2.759q-2.069 1.003-4.64 1.003zm3.762-8.275q1.317 0 2.195-.564a9.8 9.8 0 0 0 1.692-1.567v-4.264q-3.825.565-5.329 1.693-1.442 1.13-1.442 2.446 0 2.256 2.884 2.256m35.874 8.275q-4.452 0-8.026-1.944-3.575-1.943-5.706-5.58-2.07-3.7-2.069-8.902 0-5.203 2.32-8.843 2.382-3.699 6.209-5.643 3.825-1.943 8.275-1.943 2.821 0 5.078.877 2.32.879 4.076 2.383l-5.016 6.896q-1.003-.877-1.818-1.191a4.7 4.7 0 0 0-1.693-.314q-3.01 0-4.703 2.132-1.692 2.07-1.692 5.642 0 3.575 1.755 5.706 1.755 2.07 4.263 2.07a6.2 6.2 0 0 0 2.571-.565 15.7 15.7 0 0 0 2.446-1.442l4.138 7.02q-2.32 2.069-5.142 2.884-2.82.752-5.266.752zm28.05 0q-4.58 0-8.275-1.944-3.638-1.943-5.769-5.58-2.13-3.7-2.131-8.902 0-5.08 2.131-8.713 2.195-3.7 5.643-5.705 3.449-2.007 7.274-2.007 4.64 0 7.648 2.07 3.072 2.006 4.514 5.454Q512 56.106 512 60.303q0 1.38-.188 2.696-.126 1.254-.251 1.819h-17.87q.753 2.82 2.697 3.95 1.944 1.065 4.577 1.065 3.01 0 6.392-1.88l3.511 6.392q-2.508 1.755-5.643 2.696-3.135.94-5.768.94zm-5.895-20.19h9.28q0-1.817-.94-3.134-.877-1.38-3.322-1.38-1.756 0-3.136 1.066t-1.88 3.449z"></path><path fill="#FFF" d="M121.486 83.19a11.2 11.2 0 0 0-1.523-3.369q.222-.816.336-1.652c.49-3.537-.736-6.777-3.047-9.28-1.252-1.369-2.594-2.272-4.015-2.827a53.6 53.6 0 0 0 1.408-12.175c0-1.871-.106-3.705-.284-5.511a65 65 0 0 0-.335-2.7 54.2 54.2 0 0 0-3.613-12.775 54 54 0 0 0-3.576-6.955 48 48 0 0 0-2.905-4.297 41 41 0 0 0-1.6-2.04 53.5 53.5 0 0 0-5.347-5.615 41 41 0 0 0-1.962-1.693 49 49 0 0 0-2.026-1.602 57 57 0 0 0-4.3-2.904C80.543 2.841 70.978 0 60.75 0 30.983 0 6.86 24.125 6.86 53.89a53.6 53.6 0 0 0 1.432 12.324c-1.278.555-2.504 1.42-3.64 2.672-2.31 2.504-3.537 5.73-3.046 9.269q.111.844.335 1.665a11.3 11.3 0 0 0-1.523 3.37c-.71 2.7-.477 5.134.426 7.269-.98 2.788-.736 5.757.542 8.34.93 1.884 2.26 3.342 3.898 4.646 1.95 1.55 4.39 2.866 7.334 4.129 3.51 1.497 7.795 2.904 9.742 3.42 5.035 1.304 9.86 2.13 14.756 2.17 6.972.065 12.974-1.575 17.27-5.77a52 52 0 0 0 6.364.388 56 56 0 0 0 6.723-.423c4.288 4.221 10.311 5.875 17.307 5.808 4.892-.038 9.719-.864 14.738-2.17 1.962-.516 6.244-1.923 9.76-3.42 2.943-1.265 5.383-2.582 7.345-4.129 1.627-1.303 2.956-2.762 3.885-4.647 1.291-2.581 1.524-5.55.556-8.34.894-2.132 1.126-4.572.416-7.268zm-4.994 7.085c.989 1.877 1.052 3.998.179 5.972-1.324 2.994-4.61 5.351-10.997 7.884-3.97 1.575-7.606 2.581-7.636 2.59-5.25 1.363-10.002 2.054-14.11 2.054-6.807 0-11.873-1.878-15.087-5.588a50.6 50.6 0 0 1-16.425.093c-3.216 3.648-8.25 5.495-15.004 5.495-4.112 0-8.86-.691-14.11-2.053-.033-.01-3.667-1.016-7.636-2.59-6.386-2.532-9.671-4.889-10.997-7.885-.873-1.975-.81-4.096.18-5.972q.136-.261.293-.508a7.58 7.58 0 0 1-1.022-6.122c.393-1.492 1.205-2.734 2.307-3.626a7.6 7.6 0 0 1-1.024-2.854c-.317-2.198.412-4.394 2.054-6.185 1.278-1.393 3.085-2.16 5.086-2.16h.053a50 50 0 0 1-2.269-14.939c0-27.623 22.397-50.02 50.02-50.02 27.63 0 50.02 22.397 50.02 50.02a50 50 0 0 1-2.284 14.975q.363-.036.71-.036c2.001 0 3.809.766 5.087 2.159 1.64 1.788 2.371 3.985 2.053 6.185a7.6 7.6 0 0 1-1.023 2.854c1.102.892 1.914 2.134 2.307 3.627a7.6 7.6 0 0 1-1.023 6.121q.158.245.294.507z"></path><path fill="#FF9D00" d="M116.16 89.76a7.6 7.6 0 0 0 1.022-6.121c-.393-1.493-1.205-2.735-2.307-3.627a7.6 7.6 0 0 0 1.024-2.854c.317-2.198-.412-4.393-2.054-6.185-1.278-1.392-3.085-2.159-5.086-2.159q-.348 0-.71.036a50 50 0 0 0 2.28-14.974c0-27.624-22.397-50.02-50.02-50.02s-50.02 22.39-50.02 50.02a50 50 0 0 0 2.268 14.939h-.053c-2 0-3.807.766-5.085 2.159-1.64 1.788-2.371 3.984-2.054 6.185a7.55 7.55 0 0 0 1.024 2.854c-1.102.892-1.914 2.134-2.307 3.627a7.58 7.58 0 0 0 1.024 6.122 7 7 0 0 0-.294.508c-.988 1.877-1.052 3.998-.18 5.973 1.324 2.993 4.611 5.351 10.998 7.883 3.97 1.575 7.606 2.582 7.635 2.591 5.251 1.362 10.003 2.054 14.11 2.054 6.754 0 11.79-1.847 15.005-5.496a50.6 50.6 0 0 0 16.425-.093c3.212 3.71 8.28 5.589 15.087 5.589 4.11 0 8.86-.692 14.11-2.054.032-.01 3.666-1.016 7.635-2.59 6.387-2.532 9.672-4.89 10.998-7.884.873-1.976.81-4.096-.18-5.973a6 6 0 0 0-.294-.508zm-66.055 7.801q-.415.728-.89 1.418c-.83 1.217-1.925 2.147-3.194 2.839-2.427 1.323-5.498 1.786-8.617 1.786-4.93 0-9.986-1.154-12.815-1.889-.139-.036-17.36-4.9-15.182-9.044.367-.696.972-.974 1.732-.974 3.07 0 8.659 4.572 11.062 4.572.536 0 .915-.23 1.07-.786C24.295 91.81 7.71 90.266 9.107 84.947c.247-.941.915-1.323 1.855-1.323 4.059 0 13.17 7.138 15.076 7.138q.22.001.307-.132l.025-.041c.894-1.477.381-2.55-5.746-6.304l-.588-.358c-6.742-4.08-11.477-6.534-8.784-9.464.31-.339.749-.488 1.282-.488.633 0 1.398.212 2.24.566 3.561 1.502 8.494 5.597 10.56 7.38.608.53.966.853.966.853s2.61 2.715 4.189 2.715c.363 0 .67-.143.88-.498 1.12-1.887-10.394-10.612-11.045-14.21-.44-2.44.31-3.676 1.695-3.676.658 0 1.462.28 2.349.843 2.752 1.747 8.067 10.879 10.015 14.43.652 1.191 1.765 1.694 2.768 1.694 1.99 0 3.547-1.978.183-4.493-5.057-3.784-3.282-9.967-.87-10.346q.156-.024.312-.025c2.194 0 3.163 3.782 3.163 3.782s2.836 7.127 7.712 11.998c4.423 4.42 5.04 8.05 2.464 12.571zm15.762.835-.253.03-.431.05-.681.067-.223.02-.202.017-.289.023q-.158.013-.317.022l-.318.022-.07.004-.25.015-.105.005-.296.015-.344.014-.313.01-.208.007h-.105q-.098.001-.195.004h-.104q-.098 0-.194.003l-.265.003h-.37q-.435 0-.87-.008l-.234-.005-.2-.006-.248-.007-.309-.012-.277-.012-.072-.003-.265-.014-.22-.013-.17-.01q-.322-.02-.645-.045l-.225-.018-.284-.024-.332-.031a30 30 0 0 1-.556-.057h-.009c2.705-6.037 1.337-11.672-4.129-17.129-3.584-3.58-5.972-8.866-6.463-10.027-1.002-3.435-3.653-7.256-8.056-7.256q-.559 0-1.11.088c-1.93.303-3.615 1.414-4.818 3.084-1.3-1.617-2.563-2.902-3.705-3.628-1.723-1.091-3.44-1.645-5.116-1.645-2.09 0-3.958.858-5.26 2.415l-.033.04-.073-.309-.003-.013a44 44 0 0 1-.624-3.203q0-.012-.003-.022l-.037-.243a53 53 0 0 1-.103-.723l-.043-.328a33 33 0 0 1-.076-.642l-.003-.026q-.081-.72-.138-1.444l-.02-.279-.016-.23q-.001-.028-.004-.053l-.02-.31q-.01-.167-.018-.335l-.016-.335-.012-.293-.004-.09-.009-.27-.006-.23q-.001-.138-.006-.276l-.005-.29-.002-.288c-.003-.097 0-.193 0-.29 0-24.77 20.082-44.853 44.859-44.853 24.776 0 44.858 20.082 44.858 44.852v.58q0 .144-.004.29 0 .12-.006.24 0 .106-.006.21-.002.137-.008.272v.008l-.024.59-.004.064-.015.294-.014.233a47 47 0 0 1-.13 1.651v.008l-.03.31-.08.719-.03.24-.038.284-.042.31-.05.344-.04.271-.05.308q-.023.154-.052.307c-.02.102-.035.203-.053.306q-.053.304-.112.61a60 60 0 0 1-.316 1.51c-1.262-1.227-2.934-1.895-4.778-1.895-1.673 0-3.393.553-5.115 1.645-1.143.726-2.405 2.011-3.706 3.628-1.204-1.671-2.89-2.78-4.816-3.085a7 7 0 0 0-1.112-.087c-4.403 0-7.055 3.82-8.055 7.256-.497 1.161-2.882 6.446-6.47 10.033-5.462 5.444-6.842 11.056-4.177 17.064zm46.31-12.08-.019.052a3 3 0 0 1-.106.25q-.086.175-.194.339a4 4 0 0 1-.325.42q-.039.047-.084.092-.063.069-.13.134c-.797.79-2.011 1.482-3.384 2.118q-.233.106-.473.211l-.159.07q-.157.072-.322.14l-.327.137-.33.136c-.772.318-1.564.62-2.336.92l-.33.128-.326.128-.643.254-.314.126-.308.127-.152.063-.299.127c-2.271.974-3.905 1.966-3.562 3.196q.014.052.032.1a1.2 1.2 0 0 0 .231.394c.404.419 1.138.353 2.065.02q.113-.04.23-.087l.159-.063.08-.033c.211-.09.436-.19.665-.3q.087-.04.174-.083c1.132-.554 2.416-1.3 3.69-1.979q.292-.158.585-.308.478-.248.965-.476c1.206-.567 2.34-.97 3.251-.97.428 0 .806.088 1.12.29l.053.034q.241.17.41.409.042.056.077.115.038.061.071.126c.45.855.073 1.74-.808 2.609-.847.833-2.165 1.65-3.663 2.408q-.166.084-.335.167c-4.457 2.188-10.293 3.837-10.376 3.857a67 67 0 0 1-6.285 1.33l-.372.057-.06.009q-.852.127-1.71.225l-.052.005a40 40 0 0 1-3.171.24h-.016q-.576.022-1.15.021h-.442a28 28 0 0 1-1.752-.079q-.02 0-.042-.003a23 23 0 0 1-1.695-.2l-.43-.072-.193-.037-.016-.003a17 17 0 0 1-.613-.129q-.177-.038-.353-.084l-.07-.019-.171-.045-.031-.008-.183-.053-.199-.058-.023-.007-.173-.053-.194-.062-.159-.053-.117-.04q-.167-.06-.335-.124l-.105-.04-.087-.036a14 14 0 0 1-.5-.212l-.11-.052-.018-.009-.116-.053-.228-.113-.022-.011-.11-.058a9 9 0 0 1-.569-.323l-.101-.062q-.078-.048-.151-.097l-.133-.088-.142-.098-.086-.06a8 8 0 0 1-.265-.199l-.137-.106a9 9 0 0 1-.298-.25l-.004-.004a7 7 0 0 1-.279-.254l-.005-.006-.14-.137-.135-.14-.134-.144-.126-.14-.014-.016a9 9 0 0 1-.599-.779l-.073-.108-.144-.216-.14-.215a12 12 0 0 1-.339-.545l-.114-.194-.06-.106q-.03-.055-.063-.11l-.033-.06c-.011-.019-.015-.025-.02-.038q-.06-.105-.118-.215l-.052-.094-.054-.102-.052-.101-.102-.206-.049-.101q-.052-.109-.1-.216l-.04-.087a7 7 0 0 1-.129-.3l-.08-.2a12 12 0 0 1-.214-.592q-.031-.088-.056-.176a7 7 0 0 1-.116-.407 8 8 0 0 1-.163-.77 8 8 0 0 1-.092-.853l-.004-.095-.005-.188c-.033-2.528 1.247-4.96 3.983-7.694 4.874-4.87 7.712-11.998 7.712-11.998s.077-.299.236-.729q.08-.213.167-.424.1-.24.216-.47l.022-.045q.149-.294.323-.574.038-.065.083-.129.13-.194.275-.375a4 4 0 0 1 .237-.268c.283-.292.606-.53.971-.657l.046-.015q.045-.016.092-.028.056-.015.11-.026l.017-.003q.116-.023.234-.031h.007c.04 0 .082-.004.124-.004q.157 0 .312.024c.44.07.858.331 1.218.735l.048.057q.176.206.319.438.106.171.201.36l.074.154.035.08q.035.079.067.162.186.476.287.978a6.7 6.7 0 0 1 .125 1.584l-.01.19a7 7 0 0 1-.456 2.055l-.079.198a7.3 7.3 0 0 1-.75 1.366l-.068.095a8 8 0 0 1-.87 1.023q-.472.473-1.006.87a8 8 0 0 0-1 .875c-.89.933-1.097 1.757-.897 2.381q.036.106.083.207.112.219.285.394l.031.031q.05.048.102.09l.036.03q.129.099.273.177c.027.015.052.03.084.044q.196.097.408.157l.04.01.052.014.046.011.05.01.048.01.047.008q.052.01.105.017l.035.005.06.006.039.004.062.005h.036l.065.003h.206l.058-.003.068-.005.082-.007.077-.01q.026-.001.053-.007a3 3 0 0 0 .94-.301q.155-.078.302-.175.203-.136.383-.298l.084-.08.039-.038q.122-.123.23-.259.19-.24.337-.508a135 135 0 0 1 3.64-6.221l.174-.279.176-.28.265-.418.09-.139.177-.277q.36-.555.72-1.098l.181-.27c.362-.537.724-1.059 1.081-1.555l.18-.245q.583-.807 1.214-1.575l.168-.2q.04-.05.083-.1l.164-.19.081-.091.159-.18.08-.086q.115-.126.234-.248l.154-.155q.451-.462.988-.82l.082-.053.084-.054q.08-.05.162-.095c1.4-.794 2.558-.852 3.224-.186.405.405.628 1.074.616 2.005q.001.061-.004.125v.046q0 .063-.006.128c0 .053-.007.106-.012.16l-.013.14q-.001.02-.005.04l-.014.125q.002.02-.006.039a2 2 0 0 1-.024.168 2 2 0 0 1-.025.154l-.015.088a2 2 0 0 1-.06.25 3.6 3.6 0 0 1-.256.636q-.096.193-.215.396-.059.101-.124.206l-.067.105a14 14 0 0 1-.211.322 16 16 0 0 1-.584.786l-.092.116q-.392.488-.802.959l-.217.246-.11.124q-.227.253-.456.502l-.117.127-.236.254-.24.256-.245.257-.246.258-.249.258-.502.518c-2.4 2.462-4.93 4.915-5.786 6.446q-.084.15-.155.307c-.121.278-.172.516-.138.708a.5.5 0 0 0 .067.18q.073.125.174.229.047.046.1.086c.176.125.389.19.605.183h.067l.07-.005.07-.008.057-.008.023-.004.052-.01.015-.004.058-.012.083-.022.074-.022q.072-.02.146-.05.16-.055.315-.13.039-.017.078-.038l.078-.039q.155-.078.309-.17.123-.072.245-.15l.08-.053q.039-.024.078-.053l.08-.053.04-.029.114-.08c.106-.073.205-.148.306-.224l.009-.007.158-.123c.217-.171.424-.344.61-.507l.125-.11.012-.01.064-.058c.153-.136.289-.264.403-.37l.046-.045.112-.106.066-.065.024-.024.006-.006.114-.114.004-.005.022-.02.025-.022.008-.008.023-.02.12-.106.068-.061q.05-.042.106-.096l.08-.07.044-.04.084-.073.125-.11.066-.057c.258-.224.571-.494.93-.8l.148-.124.244-.204.248-.208q.49-.406 1.047-.855l.243-.196q.311-.247.636-.502l.264-.204a68 68 0 0 1 2.227-1.65l.228-.158q.237-.166.476-.327l.144-.097q.427-.288.861-.563l.144-.09.143-.09q.214-.132.426-.26l.141-.084.284-.165.277-.159.056-.031.22-.12q.137-.075.274-.145l.136-.07.131-.067q.451-.226.918-.418l.127-.053q.124-.052.249-.096.123-.041.243-.085l.212-.068.023-.007q.054-.017.11-.031l.01-.003q.113-.032.225-.059h.006q.165-.04.324-.067.054-.01.105-.016a4 4 0 0 1 .505-.04h.05q.099 0 .193.01.044.002.086.01h.012l.086.014.083.016h.01l.08.022c.227.06.434.175.607.334l.015.015.03.03.03.031c.237.25.434.536.582.847l.023.053q.076.177.117.366c.077.35.057.715-.06 1.053q-.075.222-.185.428l-.048.088a5 5 0 0 1-.65.86l-.054.056a7 7 0 0 1-.485.47l-.062.058q-.196.172-.399.337l-.07.058q-.142.114-.292.23-.52.397-1.06.768-.318.217-.658.44-.631.414-1.274.812-.185.115-.375.23c-1.164.717-2.455 1.483-3.831 2.315l-.357.217q-.585.357-1.104.681l-.175.11-.33.212a37 37 0 0 0-.656.423l-.176.116q-.129.084-.256.17l-.083.052-.256.173-.136.093-.159.11-.147.103q-.347.244-.688.498l-.08.06-.259.201-.108.087q-.275.221-.5.424l-.074.067-.122.115-.082.079-.038.038a6 6 0 0 0-.247.26l-.039.046q-.13.15-.23.29l-.03.044a2.5 2.5 0 0 0-.202.355l-.02.043-.013.03-.01.026-.013.036a1.3 1.3 0 0 0-.071.27l-.006.04-.005.036-.003.035v.186q-.001.024.004.048l.002.028c0 .015.005.03.006.047l.012.065v.003l.013.062.017.066q.029.1.07.197.001.008.005.015l.021.049q.045.1.097.197l.038.067.039.068.04.067.024.032.014.014.014.013.016.012q.016.011.034.02l.038.017.042.012c.342.077 1.044-.206 1.976-.698l.167-.089.284-.154.14-.077q.147-.082.3-.171l.189-.106c1.232-.71 2.706-1.622 4.228-2.512q.213-.126.429-.25l.287-.183.431-.245a47 47 0 0 1 1.86-1.003l.28-.142q.281-.14.555-.27.532-.252 1.075-.478l.198-.08.024-.01c1.05-.416 2.003-.674 2.773-.674q.251-.001.498.04h.005q.078.015.15.033h.008q.107.027.209.067.081.029.156.07a1.5 1.5 0 0 1 .584.533q.078.12.134.25.033.076.06.16.028.082.054.17c.125.448.113.923-.036 1.364z"></path><path fill="#FFD21E" d="M105.15 54.153v-.29c0-24.77-20.076-44.853-44.852-44.853-24.77 0-44.86 20.082-44.86 44.853v.29q.004.144.003.289l.004.213v.077l.004.105.003.17.006.23.01.27.002.09.012.28v.013l.017.327v.008a31 31 0 0 0 .038.645l.002.018q.007.132.018.265l.001.023.02.256.001.017.012.148q.053.64.124 1.279l.003.026.036.313.04.329a41 41 0 0 0 .145 1.05l.003.017q.067.446.144.89.22 1.288.518 2.562l.003.014.02.08.054.227.032-.04c1.302-1.556 3.17-2.414 5.26-2.414 1.675 0 3.394.553 5.116 1.645 1.142.726 2.405 2.012 3.705 3.628 1.203-1.67 2.888-2.78 4.817-3.084q.553-.087 1.111-.088c4.402 0 7.056 3.82 8.056 7.257.494 1.16 2.88 6.445 6.475 10.026 5.466 5.461 6.836 11.098 4.129 17.13h.009a34 34 0 0 0 .888.086l.039.004.244.02.225.019q.322.024.645.045l.17.01.136.008.085.005.264.014.072.003.278.012.309.012.248.007.042.002q.078.003.158.004h.056q.524.014 1.047.013h.37l.266-.003q.098-.004.194-.003h.103l.09-.002.105-.002h.106l.208-.006.312-.01.345-.016.296-.014.106-.006.157-.009.092-.005.07-.004.318-.022q.158-.01.317-.023l.288-.022.203-.017.222-.02a62 62 0 0 0 1.113-.117l.252-.03c-2.662-6.008-1.284-11.619 4.16-17.058 3.588-3.585 5.972-8.873 6.47-10.033 1.002-3.436 3.65-7.256 8.055-7.256q.559 0 1.112.088c1.926.303 3.612 1.413 4.817 3.084 1.3-1.617 2.563-2.902 3.705-3.628 1.722-1.092 3.442-1.645 5.115-1.645 1.844 0 3.517.669 4.779 1.895a55 55 0 0 0 .315-1.51 30 30 0 0 0 .165-.916q.03-.154.053-.307l.006-.039.042-.268.042-.272v-.003l.05-.342.035-.26.007-.05.037-.282.03-.241.053-.477.02-.19.007-.052.03-.318.024-.246q.074-.817.12-1.638v-.004l.016-.29.003-.065.012-.275.012-.314v-.008l.003-.076q.005-.097.005-.195l.001-.027q.005-.091.005-.185l.002-.053.004-.186v-.053q.004-.119.004-.237zM49.176 98.964c3.552-5.21 3.3-9.12-1.574-13.992-4.874-4.871-7.712-11.998-7.712-11.998s-1.059-4.138-3.474-3.757-4.186 6.564.87 10.346c5.056 3.785-1.006 6.35-2.952 2.8-1.947-3.553-7.256-12.685-10.015-14.43-2.754-1.747-4.691-.769-4.042 2.831.322 1.787 3.322 4.837 6.126 7.683 2.843 2.891 5.484 5.575 4.92 6.523-1.12 1.886-5.067-2.217-5.067-2.217S13.898 71.507 11.21 74.437c-2.479 2.7 1.345 4.997 7.24 8.535l1.545.93c6.742 4.083 7.268 5.16 6.31 6.701-.354.57-2.61-.784-5.387-2.45-4.732-2.842-10.973-6.589-11.855-3.235-.763 2.902 3.828 4.68 7.99 6.292 3.469 1.343 6.641 2.572 6.174 4.24-.484 1.729-3.105.287-5.972-1.29-3.217-1.77-6.742-3.71-7.896-1.52-2.18 4.136 15.04 9.008 15.182 9.043 5.563 1.443 19.692 4.5 24.634-2.736zm22.882 0c-3.552-5.21-3.3-9.12 1.574-13.992 4.874-4.871 7.712-11.998 7.712-11.998s1.059-4.138 3.473-3.757c2.415.38 4.187 6.564-.869 10.346s1.006 6.35 2.952 2.8c1.946-3.553 7.257-12.685 10.01-14.43 2.751-1.747 4.692-.769 4.042 2.831-.322 1.787-3.322 4.837-6.126 7.689-2.843 2.89-5.483 5.575-4.919 6.522 1.12 1.887 5.07-2.219 5.07-2.219s12.358-11.245 15.045-8.315c2.48 2.7-1.345 4.997-7.239 8.534q-.75.45-1.545.93c-6.741 4.082-7.268 5.16-6.31 6.701.354.57 2.61-.784 5.386-2.45 4.733-2.841 10.974-6.588 11.856-3.235.763 2.902-3.828 4.68-7.99 6.292-3.47 1.343-6.642 2.571-6.174 4.24.483 1.729 3.104.286 5.966-1.29 3.217-1.77 6.742-3.71 7.896-1.522 2.18 4.14-15.04 9.009-15.182 9.044-5.564 1.448-19.692 4.505-24.628-2.732z"></path><path fill="#32343D" d="M74.905 41.652c.7.247 1.22 1 1.714 1.717.67.969 1.292 1.87 2.247 1.362a6.45 6.45 0 0 0 3.395-6.317 6.45 6.45 0 0 0-5.464-5.764 6.454 6.454 0 0 0-6.66 9.412c.443.833 1.425.44 2.462.026.813-.325 1.66-.664 2.306-.436m-30.41 0c-.7.248-1.22 1.001-1.715 1.718-.67.968-1.292 1.87-2.247 1.362a6.45 6.45 0 0 1-3.233-7.253 6.5 6.5 0 0 1 1.265-2.53 6.47 6.47 0 0 1 4.985-2.37 6.46 6.46 0 0 1 6.436 5.806 6.45 6.45 0 0 1-.723 3.677c-.444.833-1.426.44-2.463.025-.813-.325-1.66-.663-2.306-.435M70.2 69.324c4.82-3.797 6.587-9.997 6.587-13.814 0-3.02-2.03-2.07-5.282-.46l-.183.091c-2.985 1.478-6.96 3.446-11.317 3.446-4.361 0-8.334-1.968-11.317-3.446-3.356-1.663-5.462-2.706-5.462.37 0 3.938 1.884 10.404 7.056 14.163a11.2 11.2 0 0 1 6.85-5.792c.516-.154 1.048.734 1.592 1.643.525.878 1.062 1.775 1.608 1.775.581 0 1.153-.884 1.711-1.747.583-.902 1.151-1.782 1.701-1.606a11.22 11.22 0 0 1 6.458 5.375z"></path><path fill="#FF323D" d="M70.17 69.34c-2.51 1.978-5.846 3.305-10.192 3.305-4.082 0-7.274-1.171-9.725-2.953a11.23 11.23 0 0 1 6.85-5.792c1.015-.303 2.088 3.418 3.2 3.418 1.19 0 2.337-3.697 3.413-3.353a11.24 11.24 0 0 1 6.457 5.375z"></path><path fill="#FFAD03" d="M32.958 47.026a4.19 4.19 0 0 1-4.67.01 4.19 4.19 0 0 1-1.785-4.315 4.2 4.2 0 0 1 1.793-2.67 4.196 4.196 0 0 1 4.662 6.975m60.017 0a4.19 4.19 0 0 1-5.83-1.15 4.18 4.18 0 0 1-.625-3.155 4.196 4.196 0 1 1 6.455 4.305"></path></g>', 1)
    ]), 4));
  }
});
export {
  z as _
};
