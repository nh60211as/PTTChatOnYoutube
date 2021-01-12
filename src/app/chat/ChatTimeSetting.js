export let ChatTimeSetting = {

  template: `<div id="PTTChat-Time" class="ptt-text ptt-bg p-2 position-absolute w-100 d-none" style="z-index:400;">
  <div id="PTTChat-Time-Setting">
    <form class="form-inline mb-1">
      <label for="dis" class="col">調整實況重播時間</label>
      <div class="d-flex justify-content-between btn-group">
        <button id="minus-min" class="btn ptt-btnoutline" type="button">-1分鐘</button>
        <button id="minus-sec" class="btn ptt-btnoutline" type="button">-15秒</button>
        <button id="add-sec" class="btn ptt-btnoutline" type="button">+15秒</button>
        <button id="add-min" class="btn ptt-btnoutline" type="button">+1分鐘</button>
      </div>
    </form>
  </div>
</div>
`,
}