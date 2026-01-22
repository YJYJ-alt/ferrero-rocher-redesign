// 언어 변경 함수
function changeLang(lang) {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");
  console.log("언어 변경:", lang);
}

// 헤더 스크롤 효과
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const heroSection = document.querySelector(".hero");
  const heroHeight = heroSection.offsetHeight;

  // Hero 섹션을 벗어나면 헤더 배경 표시
  if (window.scrollY > heroHeight - 130) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// 페이지 로드 시 초기 상태 설정
window.addEventListener("load", function () {
  const header = document.querySelector("header");
  // 페이지 최상단이면 투명 상태
  if (window.scrollY === 0) {
    header.classList.remove("scrolled");
  }
});
