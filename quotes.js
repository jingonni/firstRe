const quotes = [
    {
        quote: "큰 목표를 이루고 싶으면 허락을 구하지 마라.",
        author: "미상"
    },
    {
        quote: "상황을 가장 잘 활용하는 사람이 가장 좋은 상황을 맞는다.",
        author: "존 우든"
    },
    {
        quote: "창조적인 삶을 살려면 내가 틀릴지도 모른다는 공포를 버려야 한다.",
        author: "미상"
    },
    {
        quote: "일반적인 것을 잃을 위험을 감수하지 않으면 평범한 것에 만족해야 한다.",
        author: "짐 론"
    },
    {
        quote: "신뢰의 이유는 안전하거나 확실해서가 아니라, 위험을 감수할 용의가 있어서이다.",
        author: "미상"
    },
    {
        quote: "한 가지 생각을 선택하라. 그 생각을 당신의 삶으로 만들어라. 그걸 생각하고, 꿈꾸고, 그에 기반해서 살아가라. 당신의 몸의 모든 부분, 뇌, 근육, 신경을 그 생각으로 가득 채우고 다른 생각은 다 내버려둬라. 이것이 성공하는 방법이다.",
        author: "스와미 비베카난다"
    },
    {
        quote: "추구할 수 있는 용기가 있다면 우리의 모든 꿈은 이뤄질 수 있다.",
        author: "월트 디즈니"
    },
    {
        quote: "기다리는 사람에게 좋은 일이 생기지만, 찾아나서는 사람에게는 더 좋은 일이 생긴다.",
        author: "미상"
    },
    {
        quote: "늘 하던 대로 하면 늘 얻던 것을 얻는다.",
        author: "미상"
    },
    {
        quote: "열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.",
        author: "윈스턴 처칠"
    },
    {
        quote: "애벌레가 세상이 끝났다고 생각하는 순간 나비로 변했다.",
        author: "속담"
    },
    {
        quote: "성공한 사업가들은 긍정적인 에너지를 주는 사람들이지 가져가는 사람들이 아니다.",
        author: "미상"
    },
    {
        quote: "성공한 사람을 볼 때 당신은 대중에게 드러난 영예만 보지, 절대 그 영예를 얻기 위해 했던 개인적 희생은 보지 않는다.",
        author: "바입하브 샤"
    },
    {
        quote: "기회는 일어나는 것이 아니라 만들어내는 것이다.",
        author: "크리스 그로서"
    },
    {
        quote: "성공한 사람이 되려고 노력하기보다 가치있는 사람이 되려고 노력하라.",
        author: "알버트 아인슈타인"
    },
    {
        quote: "위대한 정신을 가진 사람들은 생각을 논한다. 평범한 사람들은 사건을 논한다. 마음이 좁은 사람들은 사람들을 논한다.",
        author: "엘리너 루즈벨트"
    },
    {
        quote: "나는 실패한 게 아니다. 나는 잘 되지 않는 방법 1만 가지를 발견한 것이다.",
        author: "토마스 에디슨"
    },
    {
        quote: "당신이 자신의 시간을 가치있게 생각하지 않으면 남들도 마찬가지일 것이다. 시간과 재능을 막 나눠주지 말고 팔아라.",
        author: "킴 가스트"
    },
    {
        quote: "남들이 당신에게 던진 벽돌들로 탄탄한 기반을 쌓을 수 있어야 성공한다.",
        author: "데이비드 브링클리"
    },
    {
        quote: "당신이 허락해주지 않으면 아무도 당신이 열등감을 느끼게 만들 수 없다.",
        author: "엘리너 루즈벨트"
    },
    {
        quote: "성공적인 삶의 비밀은 무엇을 하는 게 자신의 운명인지 찾아낸 다음 그걸 하는 것이다.",
        author: "헨리 포드"
    },
    {
        quote: "지옥을 겪고 있다면 계속 겪어 나가라.",
        author: "윈스턴 처칠"
    },
    {
        quote: "자기가 세상을 바꿀 수 있다고 생각할 정도로 미친 사람들이 세상을 바꾼다.",
        author: "미상"
    },
    {
        quote: "언성을 높이지 말고 논거를 강화하라.",
        author: "미상"
    },
    {
        quote: "괴로운 시련처럼 보이는 것이 뜻밖의 좋은 일일 때가 많다.",
        author: "오스카 와일드"
    },
    {
        quote: "삶의 의미는 자신의 재능을 발견하는 것이다. 그 재능으로 다른 이를 섬기는 것이다.",
        author: "파블로 피카소"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const rndNum = Math.floor(Math.random()*quotes.length);
quote.innerText = "오늘의 명언 : " + quotes[rndNum].quote;
author.innerText ="작가 : " + quotes[rndNum].author;

