const insert = document.getElementById('insert');

window.addEventListener('keydown', function(event){
  insert.innerHTML=
      `
      <div class="key">
      <!-- if event.key = empty string, instead print 'space'. Else print event.key -->
        ${event.key === ' ' ? 'Space' : event.key}
        <small>event.key</small>
      </div>

      <div class="key">
        ${event.keyCode}
        <small>event.keyCode</small>
      </div>

      <div class="key">
        ${event.code}
        <small>event.code</small>
      </div>`
})
