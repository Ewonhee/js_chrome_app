const quotes =[
  {
    quotes:"Stay open. Who knows? Lightning could strike.",
    author:"죠 블랙의 사랑",
  },
  {
    quotes:"My life should be like that light. It has to go up endlessly.",
    author:"위대한 개츠비",
  },
  {
    quotes:"we are all travelling through time together, every day of our lives.",
    author:"어바웃 타임",
  },
  {
    quotes:"If you're a bird, I'm a bird.",
    author:"노트북",
  },
  {
    quotes:"Life was like a box of chocolates. you never know what you're gonna get.",
    author:"포레스트 검프",
  },
  {
    quotes:"Was all this legal? Absolutely not.",
    author:"더 울프 오브 월 스트리트",
  },
  {
    quotes:"You are not trying. Your are whining.",
    author:"악마는 프라다를 입는다",
  },
  {
    quotes:"你今天播放的歌曲叫什么名字？真的很好。这是你不能说的秘密.",
    author:"말할 수 없는 비밀",
  },
  {
    quotes:"지안 편안함에 이르렀나.",
    author:"나의 아저씨",
  },
  {
    quotes:"조금 미쳐도 돼. 어차피 지구도 돌잖아.",
    author:"멜로가 체질",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quotes;
author.innerText = todayQuote.author;