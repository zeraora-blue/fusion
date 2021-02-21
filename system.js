const first_ans_final = "FINISH";
const fusion_word_array1 = ['FLARE'/*読 read*/,'ACTOR'/*続 continue*/,'GIANT'/*如 like*/,'INPUT'/*抜 pull*/,'CRAFT'/*明 light*/,'FLOAT'/*拾 pick*/,'ALONE'/*給 give*/];
const fusion_word_array2 = ['CRUSH'/*音 sound*/,'LIGHT'/*吾 me*/];
const fusion_word_array3 = ['FINAL'/*接 on*/,'FIGHT'/*語 language*/];
const size_num = 340;

//340の数字変更わすれないように！！！！！

window.onload = function(){
  if(document.getElementById('text_mark').clientWidth == size_num){
    var screen_size_num = screen.width;
    var zoom_num = screen_size_num / 400;
    if(zoom_num < 1){
    document.getElementById("body").style.zoom = zoom_num;
    document.getElementById("html").style.zoom = zoom_num;
  }
    document.getElementById("first_text_final").innerHTML = 'ぼくは　エーアイの　<span id="me1">ご</span>ろう　だ。<br>'
    +'<br>きょうは　この　そうちを　はじめて　つかう　ひ！<br>'
    +'<br>きみが　しようしゃ　だいいちごうに'
    +'<br><span id="pull">ばっ</span>てき　されたんだね。<br>'
    +'<br>でも　まずは　きみが　この　そうちを　ちゃんと<br>'
    +'つかえるか　テストをするよ！<br>'
    +'<br>10まいの　パネルに　かかれた　なぞを　といて'
    +'<br>しじされた　もじを　<span id="pick">ひろ</span>い　<br>こたえを　にゅうりょくしてね！<br>';

    document.getElementById("second_text_final").innerHTML = 'すごい！　よわ<span id="sound">ね</span>を　はかずに　<br>こたえを　だせた　みたいだね。<br>'
    +'<br>よし！　そしたら　きみに<br>「FUSION MACHINE」の'
    +'<br>とりあつかいせつ<span id="light1">めい</span>しょを　し<span id="give">きゅう</span>しよう！<br>'
    +'<br>とりあつかいせつ<span id="light2">めい</span>しょを　しっかりと　<br><span id="read">よ</span>んでから'
    +'<br>じっさいに「sayパネル」と「sellパネル」を'
    +'<br>ボードに　おいて　FUSIONしてみよう！<br>'
    +'<br>FUSION WORDは　えい<span id="language">ご</span>で　<br>にゅうりょくしてね！<br>';

    document.getElementById("forth_text_final").innerHTML = 'じゅうぶん　つかいこなしているね！<br>'
    +'<br>ぼくも　2かい　FUSION したよ！<br>'
    +'<br>そういえば　はかせから　<br>てがみを　あずかっていたんだった。<br>'
    +'<br>このパネルの　ここを　きりはなすと'
    +'<br>あらたな　ふたつの　パネルが　できあがるぞ。<br>'
    +'<br>じゃあ　じっさいに　きりはなしてみよう！<br>'
    +'<br>きりはなして　てにはいった　ふたつの'
    +'<br>パネルの なぞの　こたえを　おしえて！'
    +'<br>';

    document.getElementById("fifth_text_final").innerHTML = 'なるほど！　そのふたつのパネルが　<br>てに　はいったんだね！'
      +'<br>ん？てがみに　まだ　なにか　かいてあるみたい。<br>'
      +'<br>...ただし　あくよう　されないように'
      +'<br>「FUSION MACHINE」は　パネルのきりはなしを'
      +'<br>さっちして しょきかプログラムが　きどうする　<br>せっていに　なっている　から'
      +'<br>かってに　きりはなさない　ように！'
      +'<br>もし　きりはなして　しまったら'
      +'<br><span id="me2">ご</span>ろうの　かんじの　[<span id="on">せつ</span><span id="continue">ぞく</span>]ボタンを　おせば'
      +'<br>しょきかを　とめることが　できるぞ！'
      +'<br>はかせより<br>'
      +'<br>たいへんだ！　しょきか　なんてしたら'
      +'<br>はかせに　おこられちゃうよ...。'
      +'<br>'
      +'<br>さいわい　まだデータに　けつ<span id="like">じょ</span>はないみたい。'
      +'<br>なんとかして　ぼくの　このボタンを　おしてくれ！'
    }
}





function abc(){
  return false;
}

function func1(){
  const first_anss = document.getElementById('first_ans').value;
  if(first_anss == first_ans_final || first_anss == "finish" || first_anss == "Finish"){
    alert('せいかい！');
    document.getElementById("first_text_final").style.display = "none" ;
    document.getElementById("second_text_final").style.display = "block" ;
    document.getElementById("third_text_final").style.display = "none" ;
    document.getElementById("forth_text_final").style.display = "none" ;
    document.getElementById("fifth_text_final").style.display = "none" ;
    if(document.getElementById('text_mark').clientWidth == size_num){
    document.getElementById('blnc').innerHTML = '<form name="fusion_machine" onsubmit="return abc()"><input type="button" value="FUSION MACHINE" onclick="functrans()" id="go_fusionbtn"></form>';
    }else{
    document.getElementById('blnc').innerHTML = '<form name="fusion_machine" onsubmit="return abc()"><input type="button" value="FUSION MACHINEをつかう" onclick="functrans()" id="go_fusionbtn"></form>';
    }
 document.getElementById('tag_lists').innerHTML = '<form name="zzzzzzz"><input type="button" value="1st" onclick="funcbtn1()" class="tag_btn btn_first"><input type="button" value="2nd" onclick="funcbtn2()" class="tag_btn btn_second">';
 document.getElementById('goals').innerHTML='<p class="second_goal">2nd：封筒を開けて、実際にFUSIONしてみよう！</p>';
 document.getElementById("text_mark").style.borderColor = "#53F890" ;
  }
  else{
  alert('ふせいかい...　もういちど　かんがえてみよう！');
}
}

function func2(){
  const fusion_words = document.getElementById('fusion_word').value;
  if(fusion_words == fusion_word_array1[0]){
    if(document.getElementById('read').innerHTML == '<b>読</b>'){
      alert('すでにFUSIONした　たんごだね');
    }
    else{
    alert('FUSIONせいこう！');
    document.getElementById('fusion_word').value = "";
      document.getElementById("veil").style.visibility = "hidden" ;
      var list_reload = document.getElementById('preenter');
      list_reload.insertAdjacentHTML('beforeend', '<option value="FLARE">');
    document.getElementById('fusion_btn').onclick = new Function("func3()");
    document.getElementById('read').innerHTML = '<b>読</b>';
    document.getElementById("first_text_final").style.display = "none" ;
    document.getElementById("second_text_final").style.display = "none" ;
    document.getElementById("third_text_final").style.display = "block" ;
    document.getElementById("forth_text_final").style.display = "none" ;
    document.getElementById("fifth_text_final").style.display = "none" ;
    if(document.getElementById('text_mark').clientWidth == size_num){
      document.getElementById('blnc').innerHTML = '<form name="fusion_machine" onsubmit="return abc()"><input type="button" value="FUSION MACHINE" onclick="functrans()" id="go_fusionbtn"></form>';
    }else{
      document.getElementById('blnc').innerHTML = '<form name="fusion_machine" onsubmit="return abc()"><input type="button" value="FUSION MACHINEをつかう" onclick="functrans()" id="go_fusionbtn"></form>';
    }
    document.getElementById('tag_lists').innerHTML = '<form name="zzzzzzz"><input type="button" value="1st" onclick="funcbtn1()" class="tag_btn btn_first"><input type="button" value="2nd" onclick="funcbtn2()" class="tag_btn btn_second"><input type="button" value="3rd" onclick="funcbtn3()" class="tag_btn btn_third">';
     document.getElementById('goals').innerHTML=' <p class="third_goal">3rd：②、③のパターンでもFUSIONしてみよう！</p>';
      document.getElementById("text_mark").style.borderColor = "#3FC6E3" ;
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
  if(document.getElementById('sound').innerHTML == '<b>音</b>'){num_array2 += 1;}
  if(document.getElementById('me1').innerHTML == '<b>吾</b>'){num_array2 += 1;}
  if(document.getElementById('language').innerHTML == '<b>語</b>'){num_array3 += 1;}

  if(fusion_word_array1.indexOf(fusion_words) !== -1){
    alert('そのパターンはすでにFUSIONずみだよ');
  }else if(fusion_word_array2.indexOf(fusion_words) !== -1){
    if(num_array2 == 1){
      alert('そのパターンはすでにFUSIONずみだよ');
    }else{
      num_array2 = 1;
      alert('FUSIONせいこう！');
      if(fusion_words == 'CRUSH'){
      document.getElementById('sound').innerHTML = '<b>音</b>';
      var list_reload = document.getElementById('preenter');
      list_reload.insertAdjacentHTML('beforeend', '<option value="CRUSH">');
      document.getElementById('fusion_word').value = "";
    }else if(fusion_words == 'LIGHT'){
      document.getElementById('me1').innerHTML = '<b>吾</b>';
      document.getElementById('me2').innerHTML = '<b>吾</b>';
      var list_reload = document.getElementById('preenter');
      list_reload.insertAdjacentHTML('beforeend', '<option value="LIGHT">');
      document.getElementById('fusion_word').value = "";
    }
    }
  }else if(fusion_word_array3.indexOf(fusion_words) !== -1){
    if(num_array3 == 1){
      alert('そのパターンはすでにFUSIONずみだよ');
    }else{


if(fusion_words == 'FIGHT'){
alert('FUSIONせいこう！');
document.getElementById('language').innerHTML = '<b>語</b>';
var list_reload = document.getElementById('preenter');
list_reload.insertAdjacentHTML('beforeend', '<option value="FIGHT">');
document.getElementById('fusion_word').value = "";
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
    document.getElementById('fusion_btn').onclick = new Function("func5()");
      document.getElementById("veil").style.visibility = "hidden" ;
    document.getElementById("first_text_final").style.display = "none" ;
    document.getElementById("second_text_final").style.display = "none" ;
    document.getElementById("third_text_final").style.display = "none" ;
    document.getElementById("forth_text_final").style.display = "block" ;
    document.getElementById("fifth_text_final").style.display = "none" ;
    document.getElementById('pull').innerHTML = '<b>抜</b>';
    document.getElementById('pick').innerHTML = '<b>拾</b>';
    var list_reload = document.getElementById('preenter');
    list_reload.insertAdjacentHTML('beforeend', '<option value="INPUT">');
    list_reload = document.getElementById('preenter');
    list_reload.insertAdjacentHTML('beforeend', '<option value="FLOAT">');
    document.getElementById('secret').innerHTML = document.getElementById('preenter').innerHTML;
    document.getElementById('tag_lists').innerHTML = '<form name="zzzzzzz"><input type="button" value="1st" onclick="funcbtn1()" class="tag_btn btn_first"><input type="button" value="2nd" onclick="funcbtn2()" class="tag_btn btn_second"><input type="button" value="3rd" onclick="funcbtn3()" class="tag_btn btn_third"><input type="button" value="4th" onclick="funcbtn4()" class="tag_btn btn_forth">';
    document.getElementById('goals').innerHTML='  <p class="forth_goal">4th：パネルを切って新しいパネルにしよう！</p>';
      if(document.getElementById('text_mark').clientWidth == size_num){
      document.getElementById('blnc').innerHTML = '<form name="forth_check" onsubmit="return abc()"><input type="button" value="FUSION MACHINE" onclick="funcnottrans()" id="go_fusionbtn"><input type="text" id="forth_ans1" placeholder="1つめのこたえ" autocomplete="off"><input type="text" id="forth_ans2"　 placeholder="2つめのこたえ" autocomplete="off"><input type="button" value="GO!" onclick="func4()" class="forth_check_btn">';
      }else{
      document.getElementById('blnc').innerHTML = '<form name="forth_check" onsubmit="return abc()"><input type="button" value="FUSION MACHINEをつかう" onclick="funcnottrans()" id="go_fusionbtn"><input type="text" id="forth_ans1" placeholder="1つめのこたえ" autocomplete="off"><input type="text" id="forth_ans2"　 placeholder="2つめのこたえ" autocomplete="off"><input type="button" value="GO!" onclick="func4()" class="forth_check_btn">';
      }
    document.getElementById("text_mark").style.borderColor = "#565EFE" ;
  }
}


function func4(){
  var forth_anss1 = document.getElementById('forth_ans1').value;
  var forth_anss2 = document.getElementById('forth_ans2').value;
  if(forth_anss1 && forth_anss2){
    if((forth_anss1 == 'girl' && forth_anss2 == 'moon') || (forth_anss1 == 'Girl' && forth_anss2 == 'Moon') || (forth_anss1 == 'GIRL' && forth_anss2 == 'MOON') || (forth_anss1 == 'girl' && forth_anss2 == 'Moon') || (forth_anss1 == 'girl' && forth_anss2 == 'MOON') || (forth_anss1 == 'Girl' && forth_anss2 == 'moon') || (forth_anss1 == 'Girl' && forth_anss2 == 'MOON') || (forth_anss1 == 'GIRL' && forth_anss2 == 'Moon') || (forth_anss1 == 'GIRL' && forth_anss2 == 'moon')){
      alert('せいかい！');
      document.getElementById("first_text_final").style.display = "none" ;
      document.getElementById("second_text_final").style.display = "none" ;
      document.getElementById("third_text_final").style.display = "none" ;
      document.getElementById("forth_text_final").style.display = "none" ;
      document.getElementById("fifth_text_final").style.display = "block" ;
      if(document.getElementById('text_mark').clientWidth == size_num){
      document.getElementById('blnc').innerHTML = '<form name="fusion_machine" onsubmit="return abc()"><input type="button" value="FUSION MACHINE" onclick="functrans()" id="go_fusionbtn">  <div class="conn"><input type="button" id="connection" value="せつぞく" onclick="funclast1()"><div class="conn1" id="conn1" onclick="funclast1()"></div><div class="conn2" id="conn2" onclick="funclast1()"></div></div></form>';
      }else{
      document.getElementById('blnc').innerHTML = '<form name="fusion_machine" onsubmit="return abc()"><input type="button" value="FUSION MACHINEをつかう" onclick="functrans()" id="go_fusionbtn">  <div class="conn"><input type="button" id="connection" value="せつぞく" onclick="funclast1()"><div class="conn1" id="conn1" onclick="funclast1()"></div><div class="conn2" id="conn2" onclick="funclast1()"></div></div></form>';
      }
      document.getElementById('tag_lists').innerHTML = '<form name="zzzzzzz"><input type="button" value="1st" onclick="funcbtn1()" class="tag_btn btn_first"><input type="button" value="2nd" onclick="funcbtn2()" class="tag_btn btn_second"><input type="button" value="3rd" onclick="funcbtn3()" class="tag_btn btn_third"><input type="button" value="4th" onclick="funcbtn4()" class="tag_btn btn_forth"><input type="button" value="5th" onclick="funcbtn5()" class="tag_btn btn_fifth">';
      document.getElementById('goals').innerHTML='<p class="fifth_goal">LAST：なんとかして初期化を阻止しよう！</p>';
          document.getElementById("text_mark").style.borderColor = "#D463F9 " ;
    }else if((forth_anss1 == "moon" && forth_anss2 == "girl") || (forth_anss1 == "Moon" && forth_anss2 == "Girl") || (forth_anss1 == "MOON" && forth_anss2 == "GIRL") || (forth_anss1 == "moon" && forth_anss2 == "Girl") || (forth_anss1 == "moon" && forth_anss2 == "GIRL") || (forth_anss1 == "Moon" && forth_anss2 == "girl") || (forth_anss1 == "Moon" && forth_anss2 == "GIRL") || (forth_anss1 == "MOON" && forth_anss2 == "Girl") || (forth_anss1 == "MOON" && forth_anss2 == "girl")){
      alert('せいかい！');
      document.getElementById("first_text_final").style.display = "none" ;
      document.getElementById("second_text_final").style.display = "none" ;
      document.getElementById("third_text_final").style.display = "none" ;
      document.getElementById("forth_text_final").style.display = "none" ;
      document.getElementById("fifth_text_final").style.display = "block" ;
      if(document.getElementById('text_mark').clientWidth == size_num){
      document.getElementById('blnc').innerHTML = '<form name="fusion_machine" onsubmit="return abc()"><input type="button" value="FUSION MACHINE" onclick="functrans()" id="go_fusionbtn">  <div class="conn"><input type="button" id="connection" value="せつぞく" onclick="funclast1()"><div class="conn1" id="conn1" onclick="funclast1()"></div><div class="conn2" id="conn2" onclick="funclast1()"></div></div></form>';
      }else{
      document.getElementById('blnc').innerHTML = '<form name="fusion_machine" onsubmit="return abc()"><input type="button" value="FUSION MACHINEをつかう" onclick="functrans()" id="go_fusionbtn">  <div class="conn"><input type="button" id="connection" value="せつぞく" onclick="funclast1()"><div class="conn1" id="conn1" onclick="funclast1()"></div><div class="conn2" id="conn2" onclick="funclast1()"></div></div></form>';
      }
      document.getElementById('tag_lists').innerHTML = '<form name="zzzzzzz"><input type="button" value="1st" onclick="funcbtn1()" class="tag_btn btn_first"><input type="button" value="2nd" onclick="funcbtn2()" class="tag_btn btn_second"><input type="button" value="3rd" onclick="funcbtn3()" class="tag_btn btn_third"><input type="button" value="4th" onclick="funcbtn4()" class="tag_btn btn_forth"><input type="button" value="5th" onclick="funcbtn5()" class="tag_btn btn_fifth">';
      document.getElementById('goals').innerHTML='<p class="fifth_goal">LAST：なんとかして初期化を阻止しよう！</p>';
          document.getElementById("text_mark").style.borderColor = "#D463F9 " ;
    }else if(forth_anss1 == "moon" && forth_anss2 == "girl"){
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
    if(document.getElementById('read').innerHTML == '<b>読</b>'){
    alert('すでにFUSIONした　たんごだね');
  }else{
    alert('FUSIONせいこう！');
    document.getElementById('read').innerHTML = '<b>読</b>';
    var list_reload = document.getElementById('preenter');
    list_reload.insertAdjacentHTML('beforeend', '<option value="FLARE">');
    document.getElementById('fusion_word').value = "";
  }
  }

  if(fusion_words == 'INPUT'){
    if(document.getElementById('pull').innerHTML == '<b>抜</b>'){
    alert('すでにFUSIONした　たんごだね');
  }else{
    alert('FUSIONせいこう！');
    document.getElementById('pull').innerHTML = '<b>抜</b>';
    var list_reload = document.getElementById('preenter');
    list_reload.insertAdjacentHTML('beforeend', '<option value="INPUT">');
    document.getElementById('fusion_word').value = "";
  }
  }

  if(fusion_words == 'CRAFT'){
    if(document.getElementById('light1').innerHTML == '<b>明</b>'){
    alert('すでにFUSIONした　たんごだね');
  }else{
    alert('FUSIONせいこう！');
    document.getElementById('light1').innerHTML = '<b>明</b>';
    document.getElementById('light2').innerHTML = '<b>明</b>';
    var list_reload = document.getElementById('preenter');
    list_reload.insertAdjacentHTML('beforeend', '<option value="CRAFT">');
    document.getElementById('fusion_word').value = "";
  }
  }

  if(fusion_words == 'FLOAT'){
    if(document.getElementById('pick').innerHTML == '<b>拾</b>'){
    alert('すでにFUSIONした　たんごだね');
  }else{
    alert('FUSIONせいこう！');
    document.getElementById('pick').innerHTML = '<b>拾</b>';
    var list_reload = document.getElementById('preenter');
    list_reload.insertAdjacentHTML('beforeend', '<option value="FLOAT">');
    document.getElementById('fusion_word').value = "";
  }
  }

  if(fusion_words == 'ALONE'){
    if(document.getElementById('give').innerHTML == '<b>給</b>'){
    alert('すでにFUSIONした　たんごだね');
  }else{
    alert('FUSIONせいこう！');
    document.getElementById('give').innerHTML = '<b>給</b>';
    var list_reload = document.getElementById('preenter');
    list_reload.insertAdjacentHTML('beforeend', '<option value="ALONE">');
    document.getElementById('fusion_word').value = "";
  }
  }

  if(fusion_words == 'CRUSH'){
    if(document.getElementById('sound').innerHTML == '<b>音</b>'){
    alert('すでにFUSIONした　たんごだね');
  }else{
    alert('FUSIONせいこう！');
    document.getElementById('sound').innerHTML = '<b>音</b>';
    var list_reload = document.getElementById('preenter');
    list_reload.insertAdjacentHTML('beforeend', '<option value="CRUSH">');
    document.getElementById('fusion_word').value = "";
  }
  }

  if(fusion_words == 'LIGHT'){
    if(document.getElementById('me1').innerHTML == '<b>吾</b>'){
    alert('すでにFUSIONした　たんごだね');
  }else{
    alert('FUSIONせいこう！');
    document.getElementById('me1').innerHTML = '<b>吾</b>'
    document.getElementById('me2').innerHTML = '<b>吾</b>'
    var list_reload = document.getElementById('preenter');
    list_reload.insertAdjacentHTML('beforeend', '<option value="LIGHT">');
    document.getElementById('fusion_word').value = "";
  }
  }

  if(fusion_words == 'GIANT'){
    if(document.getElementById('like').innerHTML == '<b>如</b>'){
    alert('すでにFUSIONした　たんごだね');
  }else{
    alert('FUSIONせいこう！');
    document.getElementById('like').innerHTML = '<b>如</b>'
    var list_reload = document.getElementById('preenter');
    list_reload.insertAdjacentHTML('beforeend', '<option value="GIANT">');
    document.getElementById('fusion_word').value = "";
  }
  }

  if(fusion_words == 'FIGHT'){
    if(document.getElementById('language').innerHTML == '<b>語</b>'){
    alert('すでにFUSIONした　たんごだね');
  }else{
    alert('FUSIONせいこう！');
    document.getElementById('language').innerHTML = '<b>語</b>'
    var list_reload = document.getElementById('preenter');
    list_reload.insertAdjacentHTML('beforeend', '<option value="FIGHT">');
    document.getElementById('fusion_word').value = "";
  }
  }

  if(fusion_words == 'FINAL'){
    if(document.getElementById('connection').value == '　接ぞく'||document.getElementById('connection').value == '接続'){
    alert('すでにFUSIONした　たんごだね');
  }else{
    alert('FUSIONせいこう！');
    var list_reload = document.getElementById('preenter');
    list_reload.insertAdjacentHTML('beforeend', '<option value="FINAL">');
    document.getElementById('fusion_word').value = "";
    document.getElementById("conn1").style.visibility = "hidden" ;
    if(document.getElementById('connection').value == 'せつぞく'){
      document.getElementById('connection').value = '　接ぞく';
      document.getElementById('on').innerHTML = '<b>接</b>'
    }else if(document.getElementById('connection').value == 'せつ続　'){
      document.getElementById('connection').value = '接続';
      document.getElementById('connection').onclick = new Function("funclast2()");
      document.getElementById('on').innerHTML = '<b>接</b>'
    }
  }
  }

  if(fusion_words == 'ACTOR'){
    if(document.getElementById('connection').value == 'せつ続　'||document.getElementById('connection').value == '接続'){
    alert('すでにFUSIONした　たんごだね');
  }else{
    alert('FUSIONせいこう！');
    var list_reload = document.getElementById('preenter');
    list_reload.insertAdjacentHTML('beforeend', '<option value="ACTOR">');
    document.getElementById('fusion_word').value = "";
      document.getElementById("conn2").style.visibility = "hidden" ;
    if(document.getElementById('connection').value == 'せつぞく'){
      document.getElementById('connection').value = 'せつ続　';
      document.getElementById('continue').innerHTML = '<b>続</b>'
    }else if(document.getElementById('connection').value == '　接ぞく'){
      document.getElementById('connection').value = '接続';
      document.getElementById('connection').onclick = new Function("funclast2()");
      document.getElementById('continue').innerHTML = '<b>続</b>'
    }
  }
  }

if(fusion_word_array1.indexOf(fusion_words) == -1 && fusion_word_array2.indexOf(fusion_words) == -1 && fusion_word_array3.indexOf(fusion_words) == -1){
  alert('ふせいかい...　もういちど　かんがえてみよう！');
}
}

function funcbtn1(){
  document.getElementById("first_text_final").style.display = "block" ;
  document.getElementById("second_text_final").style.display = "none" ;
  document.getElementById("third_text_final").style.display = "none" ;
  document.getElementById("forth_text_final").style.display = "none" ;
  document.getElementById("fifth_text_final").style.display = "none" ;
  document.getElementById("text_mark").style.borderColor = "#A6EF48 " ;
}
function funcbtn2(){
  document.getElementById("first_text_final").style.display = "none" ;
  document.getElementById("second_text_final").style.display = "block" ;
  document.getElementById("third_text_final").style.display = "none" ;
  document.getElementById("forth_text_final").style.display = "none" ;
  document.getElementById("fifth_text_final").style.display = "none" ;
  document.getElementById("text_mark").style.borderColor = "#53F890" ;
}
function funcbtn3(){
  document.getElementById("first_text_final").style.display = "none" ;
  document.getElementById("second_text_final").style.display = "none" ;
  document.getElementById("third_text_final").style.display = "block" ;
  document.getElementById("forth_text_final").style.display = "none" ;
  document.getElementById("fifth_text_final").style.display = "none" ;
  document.getElementById("text_mark").style.borderColor = "#3FC6E3" ;
}
function funcbtn4(){
  document.getElementById("first_text_final").style.display = "none" ;
  document.getElementById("second_text_final").style.display = "none" ;
  document.getElementById("third_text_final").style.display = "none" ;
  document.getElementById("forth_text_final").style.display = "block" ;
  document.getElementById("fifth_text_final").style.display = "none" ;
    document.getElementById("text_mark").style.borderColor = "#565EFE" ;
}
function funcbtn5(){
  document.getElementById("first_text_final").style.display = "none" ;
  document.getElementById("second_text_final").style.display = "none" ;
  document.getElementById("third_text_final").style.display = "none" ;
  document.getElementById("forth_text_final").style.display = "none" ;
  document.getElementById("fifth_text_final").style.display = "block" ;
  document.getElementById("text_mark").style.borderColor = "#D463F9" ;
}

function funccancel(){
  document.getElementById("veil").style.visibility = "hidden" ;
}

function functrans(){
  document.getElementById("veil").style.visibility = "visible" ;
}

function funcnottrans(){
  alert('いまは　2つのパネルの　こたえを　おしえて！');
}

function funclast1(){
  alert('まだ　おせないみたい...。')
}

function funclast2(){
  alert('クリア！')
}

function functest(){
  alert('アイウエオ');
}
