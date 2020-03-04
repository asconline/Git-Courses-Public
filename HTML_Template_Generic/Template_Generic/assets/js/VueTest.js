var app1 = new Vue({
  el: '#section1',
  data: {
    FallNoExam: '<div class="row"><div class="col-sm-2"><p><strong>{{ FallTuitionDue }}</strong></p></div><div class="col-sm-10"><p>Tuition due</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallClassesStart }}</strong></p></div><div class="col-sm-10"><p>Classes start</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallFinAddDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to add courses</p><p>Last day to drop courses without financial penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallAcadDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop without academic penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallClassesEnd }}</strong></p></div><div class="col-sm-10"><p>Classes end</p></div></div>'
  }
})

var app2 = new Vue({
  el: '#section1',
  data: {
    FallTuitionDue: 'Sept 1',
    FallClassesStart: 'Sept 6',
    FallFinAddDrop: 'Sept 19',
    FallAcadDrop: 'Nov 2',
    FallClassesEnd: 'Nov 30'
  }
})
