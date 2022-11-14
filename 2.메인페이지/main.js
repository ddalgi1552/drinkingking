const $txt = document.querySelector(".txt-title");
const content = "여기서라도 제대로 금주 해볼까..?";
let contentIndex = 0;

// typing 함수
let typing = function () {
  $txt.innerHTML += content[contentIndex];
  contentIndex++;
  if (content[contentIndex] === "\n") {
    $txt.innerHTML += "<br />";
    contentIndex++;
  }
  if (contentIndex > content.length) {
    $txt.textContent = "";
    contentIndex = 0;
  }
};

// 0.2초간격으로 typing 함수 실행
setInterval(typing, 200);


routes = [
  {
    button: 'pabtn',
    page: '../3.day1/index.html'
  },
  {
    button: 'sojubtn',
    page: '../4.day2/index.html'
  },
  {
    button: 'plabtn',
    page: '../5.day3/index.html'
  },
  {
    button: 'rainbowbtn',
    page: '../6.day4/index.html'
  },
  {
    button: 'sunbtn',
    page: '../7.day5/index.html'
  },
  {
    button: 'startbtn',
    page: '../3.day1/index.html'
  }
]

routes.map((route) => {
  const btn = document.getElementById(route.button);
  btn.addEventListener('click',() => {go(route.page)});
})

function go(page){
  console.log('clicked')
  location.href=page;
}
