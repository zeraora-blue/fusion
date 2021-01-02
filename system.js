const first_ans_final = "1st";
const fusion_word_array1 = ['FLARE'/*読 read*/,'ACTOR'/*続 continue*/,'GIANT'/*如*/,'INPUT'/*抜 pull*/,'CRAFT'/*明 light*/,'FLOAT'/*拾 pick*/,'ALONE'/*給 give*/];
const fusion_word_array2 = ['CRUSH'/*音 sound*/,'LIGHT'/*吾 me*/];
const fusion_word_array3 = ['FINAL'/*接 on*/,'FIGHT'/*語 language*/];


function func1(){
  const first_anss = document.getElementById('first_ans').value;
  if(first_anss == first_ans_final){
    alert('せいかい！');
    document.getElementById("first_text_final").style.opacity = 0 ;
    document.getElementById("second_text_final").style.opacity = 1 ;
    document.getElementById("third_text_final").style.opacity = 0 ;
    document.getElementById("forth_text_final").style.opacity = 0 ;
    document.getElementById("fifth_text_final").style.opacity = 0 ;
 document.getElementById('blnc').innerHTML = '<form name="fusion_machine"><input type="text" id="fusion_word" placeholder="FUSION WORD" autocomplete="off"><input type="button" value="GO!" onclick="func2()"></form>';
 document.getElementById('tag_lists').innerHTML = '<form name="zzzzzzz"><input type="button" value="1st" onclick="funcbtn1()"><input type="button" value="2nd" onclick="funcbtn2()">';
 document.getElementById('goals').innerHTML='<p class="second_goal">目的:封筒を開けて、実際にFUSIONしてみよう！</p>';
  }
  else{
  alert('ふせいかい...　もういちど　かんがえてみよう！');
}
}

function func2(){
  const fusion_words = document.getElementById('fusion_word').value;
  if(fusion_words == fusion_word_array1[0]){
    if(document.getElementById('read').innerHTML == '読'){
      alert('すでにFUSIONした　たんごだね');
    }
    else{
    alert('FUSIONせいこう！');
    document.getElementById('read').innerHTML = '読';
    document.getElementById("first_text_final").style.opacity = 0 ;
    document.getElementById("second_text_final").style.opacity = 0 ;
    document.getElementById("third_text_final").style.opacity = 1 ;
    document.getElementById("forth_text_final").style.opacity = 0 ;
    document.getElementById("fifth_text_final").style.opacity = 0 ;
    document.getElementById('blnc').innerHTML = '<form name="fusion_machine"><input type="text" id="fusion_word" placeholder="FUSION WORD" autocomplete="off" list="preenter"><datalist id="preenter"><option value="FLARE"></datalist><input type="button" value="GO!" onclick="func3()"></form>';
    document.getElementById('tag_lists').innerHTML = '<form name="zzzzzzz"><input type="button" value="1st" onclick="funcbtn1()"><input type="button" value="2nd" onclick="funcbtn2()"><input type="button" value="3rd" onclick="funcbtn3()">';
     document.getElementById('goals').innerHTML=' <p class="third_goal">目的:②、③のパターンでもFUSIONしてみよう！</p>';
  }
  }else if(fusion_word_array1.indexOf(fusion_words) !== -1 || fusion_word_array2.indexOf(fusion_words) !== -1 || fusion_word_array3.indexOf(fusion_words) !== -1){
  alert('まずは「sayパネル」と「sellパネル」をFUSIONしてみよう！');
  }



//Fusion_words 接続関連//

/*else if(document.getElementById('connection').value == 'せつぞく'　&& fusion_words == ans1){
  alert('FUSIONせいこう！');
  document.getElementById('connection').value = '接ぞく';
}
else if(document.getElementById('connection').value == 'せつ続'　&& fusion_words == ans1){
  alert('FUSIONせいこう！');
  document.getElementById('connection').value = '接続';
}
else if(document.getElementById('connection').value == 'せつぞく'　&& fusion_words == ans2){
  alert('FUSIONせいこう！');
  document.getElementById('connection').valueL = 'せつ続';
}
else if(document.getElementById('connection').value == '接ぞく'　&& fusion_words == ans2){
  alert('FUSIONせいこう！');
  document.getElementById('connection').value = '接続';
}
else if(document.getElementById('connection').value == '接ぞく'　&& fusion_words == ans1){
  alert('すでにFUSIONした　たんごだね');
}
else if(document.getElementById('connection').value == '接続'　&& fusion_words == ans1){
  alert('すでにFUSIONした　たんごだね');
}
else if(document.getElementById('connection').value == 'せつ続'　&& fusion_words == ans2){
  alert('すでにFUSIONした　たんごだね');
}
else if(document.getElementById('connection').value == '接続'　&& fusion_words == ans2){
  alert('すでにFUSIONした　たんごだね');
}*/

  else{
  alert('ふせいかい...　もういちど　かんがえてみよう！');
}
}

function func3(){
  const fusion_words = document.getElementById('fusion_word').value;
  var num_array1 = 1;
  var num_array2 = 0;
  var num_array3 = 0;
  if(document.getElementById('sound').innerHTML == '音'){num_array2 += 1;}
  if(document.getElementById('me1').innerHTML == '吾'){num_array2 += 1;}
  if(document.getElementById('language').innerHTML == '語'){num_array3 += 1;}

  if(fusion_word_array1.indexOf(fusion_words) !== -1){
    alert('そのパターンはすでにFUSIONずみだよ');
  }else if(fusion_word_array2.indexOf(fusion_words) !== -1){
    if(num_array2 == 1){
      alert('そのパターンはすでにFUSIONずみだよ');
    }else{
      num_array2 = 1;
      alert('FUSIONせいこう！');
      if(fusion_words == 'CRUSH'){
      document.getElementById('sound').innerHTML = '音';
      var list_reload = document.getElementById('preenter');
      list_reload.insertAdjacentHTML('beforeend', '<option value="CRUSH">');
    }else if(fusion_words == 'LIGHT'){
      document.getElementById('me1').innerHTML = '吾';
      document.getElementById('me2').innerHTML = '吾';
      var list_reload = document.getElementById('preenter');
      list_reload.insertAdjacentHTML('beforeend', '<option value="LIGHT">');
    }
    }
  }else if(fusion_word_array3.indexOf(fusion_words) !== -1){
    if(num_array3 == 1){
      alert('そのパターンはすでにFUSIONずみだよ');
    }else{


if(fusion_words == 'FIGHT'){
alert('FUSIONせいこう！');
document.getElementById('language').innerHTML = '語';
var list_reload = document.getElementById('preenter');
list_reload.insertAdjacentHTML('beforeend', '<option value="FIGHT">');
num_array3 = 1;
}

if(fusion_words == 'FINAL'){
alert('そのたんごは　まだFUSION　できないみたい');
}


    }
  }

  if(fusion_word_array1.indexOf(fusion_words) == -1 && fusion_word_array2.indexOf(fusion_words) == -1 && fusion_word_array3.indexOf(fusion_words) == -1){
    alert('ふせいかい...　もういちど　かんがえてみよう！');
  }

  if(num_array2 == 1 && num_array3 == 1){
    alert('ぶじ　すべてのパターンを　つくれたみたいだね！');
    document.getElementById("first_text_final").style.opacity = 0 ;
    document.getElementById("second_text_final").style.opacity = 0 ;
    document.getElementById("third_text_final").style.opacity = 0 ;
    document.getElementById("forth_text_final").style.opacity = 1 ;
    document.getElementById("fifth_text_final").style.opacity = 0 ;
    document.getElementById('pull').innerHTML = '抜';
    document.getElementById('pick').innerHTML = '拾';
    var list_reload = document.getElementById('preenter');
    list_reload.insertAdjacentHTML('beforeend', '<option value="INPUT">');
    list_reload = document.getElementById('preenter');
    list_reload.insertAdjacentHTML('beforeend', '<option value="FLOAT">');
    document.getElementById('secret').innerHTML = document.getElementById('preenter').innerHTML;
    document.getElementById('tag_lists').innerHTML = '<form name="zzzzzzz"><input type="button" value="1st" onclick="funcbtn1()"><input type="button" value="2nd" onclick="funcbtn2()"><input type="button" value="3rd" onclick="funcbtn3()"><input type="button" value="4th" onclick="funcbtn4()">';
    document.getElementById('goals').innerHTML='  <p class="forth_goal">目的:パネルを切って新しいパネルにしよう！</p>';
    document.getElementById('blnc').innerHTML = '<form name="forth_check"><input type="text" id="forth_ans1"　autocomplete="off"><input type="text" id="forth_ans2"　autocomplete="off"><input type="button" value="GO!" onclick="func4()">';
  }
}


function func4(){
  var forth_anss1 = document.getElementById('forth_ans1').value;
  var forth_anss2 = document.getElementById('forth_ans2').value;
  if(forth_anss1 && forth_anss2){
    if(forth_anss1 == 'A' && forth_anss2 == 'B'){
      alert('せいかい！');
      document.getElementById("first_text_final").style.opacity = 0 ;
      document.getElementById("second_text_final").style.opacity = 0 ;
      document.getElementById("third_text_final").style.opacity = 0 ;
      document.getElementById("forth_text_final").style.opacity = 0 ;
      document.getElementById("fifth_text_final").style.opacity = 1 ;
      document.getElementById('blnc').innerHTML = '<form name="fusion_machine"><input type="text" id="fusion_word" placeholder="FUSION WORD" autocomplete="off" list="preenter1"><datalist id="preenter1"></datalist><input type="button" value="GO!" onclick="func5()"></form>';
      document.getElementById('tag_lists').innerHTML = '<form name="zzzzzzz"><input type="button" value="1st" onclick="funcbtn1()"><input type="button" value="2nd" onclick="funcbtn2()"><input type="button" value="3rd" onclick="funcbtn3()"><input type="button" value="4th" onclick="funcbtn4()"><input type="button" value="5th" onclick="funcbtn5()">';
      document.getElementById('preenter1').innerHTML = document.getElementById('secret').innerHTML;
      document.getElementById('secret').innerHTML = "";
      document.getElementById('goals').innerHTML='<p class="fifth_goal">目的:なんとかして初期化を阻止しよう！</p>';
    }else if(forth_anss1 == "B" && forth_anss2 == "A"){
      alert('せいかい！');
      document.getElementById("first_text_final").style.opacity = 0 ;
      document.getElementById("second_text_final").style.opacity = 0 ;
      document.getElementById("third_text_final").style.opacity = 0 ;
      document.getElementById("forth_text_final").style.opacity = 0 ;
      document.getElementById("fifth_text_final").style.opacity = 1 ;
      document.getElementById('blnc').innerHTML = '<form name="fusion_machine"><input type="text" id="fusion_word" placeholder="FUSION WORD" autocomplete="off" list="preenter1"><datalist id="preenter1"></datalist><input type="button" value="GO!" onclick="func5()"></form>';
      document.getElementById('tag_lists').innerHTML = '<form name="zzzzzzz"><input type="button" value="1st" onclick="funcbtn1()"><input type="button" value="2nd" onclick="funcbtn2()"><input type="button" value="3rd" onclick="funcbtn3()"><input type="button" value="4th" onclick="funcbtn4()"><input type="button" value="5th" onclick="funcbtn5()">';
      document.getElementById('preenter1').innerHTML = document.getElementById('secret').innerHTML;
      document.getElementById('secret').innerHTML = "";
      document.getElementById('goals').innerHTML='<p class="fifth_goal">目的:なんとかして初期化を阻止しよう！</p>';
    }else if(forth_anss1 == "B" && forth_anss2 == "A"){
    }else{
      alert('ふせいかい...　もういちど　かんがえてみよう！')
    }
  }
  else if(forth_anss1 || forth_anss2){
  alert('ふたつとも　こたえを　にゅうりょく　しよう！');
}
else{
  alert('こたえを　にゅうりょく　しよう！')
}
}

function func5(){
  const fusion_words = document.getElementById('fusion_word').value;

  if(fusion_words == 'FLARE'){
    if(document.getElementById('read').innerHTML == '読'){
    alert('すでにFUSIONした　たんごだね');
  }else{
    alert('FUSIONせいこう！');
    document.getElementById('read').innerHTML = '読';
    var list_reload = document.getElementById('preenter1');
    list_reload.insertAdjacentHTML('beforeend', '<option value="FLARE">');
  }
  }

  if(fusion_words == 'INPUT'){
    if(document.getElementById('pull').innerHTML == '抜'){
    alert('すでにFUSIONした　たんごだね');
  }else{
    alert('FUSIONせいこう！');
    document.getElementById('pull').innerHTML = '抜';
    var list_reload = document.getElementById('preenter1');
    list_reload.insertAdjacentHTML('beforeend', '<option value="INPUT">');
  }
  }

  if(fusion_words == 'CRAFT'){
    if(document.getElementById('light1').innerHTML == '明'){
    alert('すでにFUSIONした　たんごだね');
  }else{
    alert('FUSIONせいこう！');
    document.getElementById('light1').innerHTML = '明';
    document.getElementById('light2').innerHTML = '明';
    var list_reload = document.getElementById('preenter1');
    list_reload.insertAdjacentHTML('beforeend', '<option value="CRAFT">');
  }
  }

  if(fusion_words == 'FLOAT'){
    if(document.getElementById('pick').innerHTML == '拾'){
    alert('すでにFUSIONした　たんごだね');
  }else{
    alert('FUSIONせいこう！');
    document.getElementById('pick').innerHTML = '拾';
    var list_reload = document.getElementById('preenter1');
    list_reload.insertAdjacentHTML('beforeend', '<option value="FLOAT">');
  }
  }

  if(fusion_words == 'ALONE'){
    if(document.getElementById('give').innerHTML == '給'){
    alert('すでにFUSIONした　たんごだね');
  }else{
    alert('FUSIONせいこう！');
    document.getElementById('give').innerHTML = '給';
    var list_reload = document.getElementById('preenter1');
    list_reload.insertAdjacentHTML('beforeend', '<option value="ALONE">');
  }
  }

  if(fusion_words == 'CRUSH'){
    if(document.getElementById('sound').innerHTML == '音'){
    alert('すでにFUSIONした　たんごだね');
  }else{
    alert('FUSIONせいこう！');
    document.getElementById('sound').innerHTML = '音';
    var list_reload = document.getElementById('preenter1');
    list_reload.insertAdjacentHTML('beforeend', '<option value="CRUSH">');
  }
  }

  if(fusion_words == 'LIGHT'){
    if(document.getElementById('me1').innerHTML == '吾'){
    alert('すでにFUSIONした　たんごだね');
  }else{
    alert('FUSIONせいこう！');
    document.getElementById('me1').innerHTML = '吾'
    document.getElementById('me2').innerHTML = '吾'
    var list_reload = document.getElementById('preenter1');
    list_reload.insertAdjacentHTML('beforeend', '<option value="LIGHT">');
  }
  }

  if(fusion_words == 'FIGHT'){
    if(document.getElementById('language').innerHTML == '語'){
    alert('すでにFUSIONした　たんごだね');
  }else{
    alert('FUSIONせいこう！');
    document.getElementById('language').innerHTML = '語'
    var list_reload = document.getElementById('preenter1');
    list_reload.insertAdjacentHTML('beforeend', '<option value="FIGHT">');
  }
  }

  if(fusion_words == 'FINAL'){
    if(document.getElementById('connection').value == '接ぞく'||document.getElementById('connection').value == '接続'){
    alert('すでにFUSIONした　たんごだね');
  }else{
    alert('FUSIONせいこう！');
    var list_reload = document.getElementById('preenter1');
    list_reload.insertAdjacentHTML('beforeend', '<option value="FINAL">');
    if(document.getElementById('connection').value == 'せつぞく'){
      document.getElementById('connection').value = '接ぞく';
      document.getElementById('on').innerHTML = '接'
    }else if(document.getElementById('connection').value == 'せつ続'){
      document.getElementById('connection').value = '接続';
      document.getElementById('on').innerHTML = '接'
    }
  }
  }

  if(fusion_words == 'ACTOR'){
    if(document.getElementById('connection').value == 'せつ続'||document.getElementById('connection').value == '接続'){
    alert('すでにFUSIONした　たんごだね');
  }else{
    alert('FUSIONせいこう！');
    var list_reload = document.getElementById('preenter1');
    list_reload.insertAdjacentHTML('beforeend', '<option value="ACTOR">');
    if(document.getElementById('connection').value == 'せつぞく'){
      document.getElementById('connection').value = 'せつ続';
      document.getElementById('continue').innerHTML = '続'
    }else if(document.getElementById('connection').value == '接ぞく'){
      document.getElementById('connection').value = '接続';
      document.getElementById('continue').innerHTML = '続'
    }
  }
  }

if(fusion_word_array1.indexOf(fusion_words) == -1 && fusion_word_array2.indexOf(fusion_words) == -1 && fusion_word_array3.indexOf(fusion_words) == -1){
  alert('ふせいかい...　もういちど　かんがえてみよう！');
}
}

function funcbtn1(){
  document.getElementById("first_text_final").style.opacity = 1 ;
  document.getElementById("second_text_final").style.opacity = 0 ;
  document.getElementById("third_text_final").style.opacity = 0 ;
  document.getElementById("forth_text_final").style.opacity = 0 ;
  document.getElementById("fifth_text_final").style.opacity = 0 ;
}
function funcbtn2(){
  document.getElementById("first_text_final").style.opacity = 0 ;
  document.getElementById("second_text_final").style.opacity = 1 ;
  document.getElementById("third_text_final").style.opacity = 0 ;
  document.getElementById("forth_text_final").style.opacity = 0 ;
  document.getElementById("fifth_text_final").style.opacity = 0 ;
}
function funcbtn3(){
  document.getElementById("first_text_final").style.opacity = 0 ;
  document.getElementById("second_text_final").style.opacity = 0 ;
  document.getElementById("third_text_final").style.opacity = 1 ;
  document.getElementById("forth_text_final").style.opacity = 0 ;
  document.getElementById("fifth_text_final").style.opacity = 0 ;
}
function funcbtn4(){
  document.getElementById("first_text_final").style.opacity = 0 ;
  document.getElementById("second_text_final").style.opacity = 0 ;
  document.getElementById("third_text_final").style.opacity = 0 ;
  document.getElementById("forth_text_final").style.opacity = 1 ;
  document.getElementById("fifth_text_final").style.opacity = 0 ;
}
function funcbtn5(){
  document.getElementById("first_text_final").style.opacity = 0 ;
  document.getElementById("second_text_final").style.opacity = 0 ;
  document.getElementById("third_text_final").style.opacity = 0 ;
  document.getElementById("forth_text_final").style.opacity = 0 ;
  document.getElementById("fifth_text_final").style.opacity = 1 ;
}

function functest(){
  alert('アイウエオ');
}
