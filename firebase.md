# firebase

NoSQL

누가 작성한 todo를 작성하자



1. 프로제그 추가

![1557281596747](image/1557281596747.png)



2. db 만들기

![1557281665595](image/1557281665595.png)

![1557281684017](image/1557281684017.png)

![1557281718446](image/1557281718446.png)

![1557281909207](image/1557281909207.png)

html 파일에 installation복붙

![1557282106005](image/1557282106005.png)

대신, Firebase v5.8.0로 한다

![1557282144392](image/1557282144392.png)



문서 보자

![1557282174881](image/1557282174881.png)

여기서 웹 시작하기

그럼 

![1557282246720](image/1557282246720.png)

이걸 복붙하겠다.

![1557282364457](image/1557282364457.png)



채워넣은 상황.

![1557282466964](image/1557282466964.png)

여기서 var-> const했다.편의상

문서 참조 : https://github.com/vuejs/vuefire/tree/v1

![1557291513972](image/1557291513972.png)

로그인 설정

![1557291531509](image/1557291531509.png)



### firebaseui-web [링쿠](<https://github.com/firebase/firebaseui-web>)

install CDN 복사 (v 관계 무)

```html
<script src="https://cdn.firebase.com/libs/firebaseui/3.6.0/firebaseui.js"></script>
<link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.6.0/firebaseui.css" />
```

@[링크](<https://github.com/firebase/firebaseui-web#starting-the-sign-in-flow>)

```js
var ui = new firebaseui.auth.AuthUI(firebase.auth());
```



만들어놓은 object 사용하기위해 메서드 만듦

```js
initUi: function() {
    ui.start('#firebaseui-auth-container',{
        signInoptions: [
            firebase.auth.EmailAuthProvider/PROVIDER_ID
        ],
        callbacks: {
            signinSuccessWithAuthResult: (authResult, redirectUrl) => {
                this.currentUser.uid = authResult.user.uid
                this.currentUser.email = authResult.user.email
                this.currentUser.username = authResult.user.username
                return false
            }
        }
    })
},
```

callback 을 arrowfunction 써야지만 this 가 vue로 된다.

```html
    <style>
        .chat {
            border: 1px solid seashell;
            background-color: darkorange;
        }
        .my-chat {
            margin-left: auto;
            background-color: darkblue;
        }
    </style>
```



```js
                <li v-for="message in messages" 
                :class="{'chat':true, 'my-chat': currentUser.username === messge.username}">
```

![1557298008312](image/1557298008312.png)

![1557298043010](image/1557298043010.png)

![1557298059362](image/1557298059362.png)

![1557298097981](image/1557298097981.png)

![1557298127744](image/1557298127744.png)

![1557298385854](image/1557298385854.png)

![1557298411481](image/1557298411481.png)

![1557298440382](image/1557298440382.png)

![1557298454938](image/1557298454938.png)

![1557298503445](image/1557298503445.png)

![1557298529471](image/1557298529471.png)

![1557298699805](image/1557298699805.png)

![1557298871040](image/1557298871040.png)

![1557298916475](image/1557298916475.png)

public - index.html을 내 index.html로 바꾼다

![1557298985489](image/1557298985489.png)

지금 html.index는 이것

![1557299382177](image/1557299382177.png)

끝!

![1557305958721](image/1557305958721.png)

와웅