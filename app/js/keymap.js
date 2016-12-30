 //键盘事件
 $(document).keydown(function(event) {
     if ((event.keyCode == 37 || event.keyCode == 39) && !$(':focus').length) {
         var cur = curTab();
         var next = event.keyCode == 37 ? cur - 1 : cur + 1;
         if (next == 0)
             next = 5;
         else if (next == 6)
             next = 1
         $('#tab' + next).click();
     }
 });

 function curTab() {
     for (var i = 1; i <= 5; i++) {
         if ($('#tab' + i).attr('class') == 'tab-current')
             return i;
     }
 }
