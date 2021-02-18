
// タイトル画像を切り替える

// DOM要素の取得(画像)
const myImage = document.querySelector('');

// 画像をクリックした際に違う画像変更する
myImage.onclick = () => {
  // 要素の属性を取得する
  const mySrc = myImage.getAttribute('src');
  //もしアイコンが ○○ であれば xx に変更する
  if(mySrc === '') {
    myImage.setAttribute ('src','');
  } else {
    myImage.setAttribute ('src','');
  }
}

// ユーザー名を変更する

// DOM要素の取得
const myHeading = document.querySelector('h1');

// ユーザー名の入力、設定
const setUserName = () => {
  // prompt → ポップアップの表示(入力ダイアログ)
  const myName = prompt("名前を入力してください");
  if(!myName){
    setUserName();
  }else{
    // ローカルストレージに保存する
    localStorage.setItem('name',myName);
    myHeading.innerHTML = '私の名前は ' + myName + 'です';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  // ローカルストレージから取得する
  const storedName = localStorage.getItem('name');
  myHeading.innerHTML = '私の名前は ' + storedName + 'です';
}

// DOM要素の取得
const myButton = document.querySelector('button');

// ボタンをクリックした時setUserNameを呼び出す
myButton.onclick = () => {
  setUserName();
}