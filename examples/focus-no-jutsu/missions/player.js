const songs = ["#song_1", "#song_2", "#song_3", "#song_4", "#song_5", "#song_6", "#song_7"];
// 3～31 行为播放列表的焦点管理部分，管理了焦点的入口、出口，以及焦点在列表内的移动
const playerBagel = focusBagel("#songs_wrapper", songs, { // L:3
  next: e => e.key === "ArrowDown",
  prev: e => e.key === "ArrowUp",
  exit: [{
    key: e => e.key === "Tab" && !e.shiftKey,
    target: "#more_from",
  }, {
    key: e => e.key === "Tab" && e.shiftKey,
    target: "#grid_wrapper",
  }],
  entry: {
    node: "#grid_wrapper",
    key: (e, active) => (e.key === "Tab" && !e.shiftKey && active > -1) || e.key === "ArrowDown" || e.key === "ArrowUp",
    type: "keydown",
  },
  onMove: onMovePlayer,
  correctionTarget({ lastI, last }) {
    if (lastI === -1)
      return "#grid_wrapper";
    return last;
  },
  removeListenersEachExit: false,
});

playerBagel.addForward("grid", {
  node: "#grid_wrapper",
  key: (e, active) => (e.key === "Tab" && !e.shiftKey && active === -1),
  target: "#more_from",
}); // L:31

/** 一首歌曲最后的聚焦焦点的序号 */
let songLastActiveIdx = 0;
/** 管理第 curI + 1 首歌曲的焦点 */
function initSongBagel(curI, lastActive) {
  const idx = curI + 1;
  const list = [`#s${idx}_play`, `#s${idx}_a`, `#s${idx}_like`, `#s${idx}_more`];
  // 40～62 行为播放列表内每一首歌曲的焦点管理部分，管理了焦点的入口、出口，以及焦点在列表内的移动
  return focusBagel(`#song_${idx}`, list, { // L: 40
    entry: [{
      node: `#song_${idx}`,
      type: "focus",
      target: ({ list }) => list[lastActive],
    }, {
      node: `#song_${idx}`,
      key: e => e.key === "ArrowRight" || e.key === "ArrowLeft",
      type: "keydown",
    }, {
      node: `#song_${idx}`,
      type: "click",
      target: false,
    }],
    next: e => e.key === "ArrowRight",
    prev: e => e.key === "ArrowLeft",
    exit: {
      type: "outlist",
      target: false,
    },
    initialActive: songLastActiveIdx,
    correctionTarget: false,
  }); // L:62
}

let lastSong = null;

/** 焦点在播放列表内移动时的样式变化 */
function onMovePlayer({ cur, prev, curI }) {
  prev?.classList.remove("focused");
  cur?.classList.add("focused");

  if (lastSong != null) {
    songLastActiveIdx = lastSong.i() === -1 ? 0 : lastSong.i();
  }
  lastSong?.removeListeners(); // 移除这首歌曲和焦点有关的事件
  if (curI > -1) {
    lastSong = initSongBagel(curI, songLastActiveIdx); // 对这首歌的焦点进行管理
  }
}