/**
 * Original Warm Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 커튼 열림 애니메이션 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "고종필",
    father: "고성원",
    mother: "정명자",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김보미",
    father: "김용환",
    mother: "김애진",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-08-29",
    time: "18:00",
    venue: "CN 웨딩홀 계산점",
    address: "인천 계양구 경명대로 1108",
    mapLinks: {
      kakao: "https://place.map.kakao.com/248149939",
      naver: "https://naver.me/GNWkzB3T"
    }
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "고종필", bank: "국민", number: "662602-04-044390" },
      { role: "고성원", bank: "국민", number: "600225-01-051491" },
      { role: "정명자", bank: "농협", number: "216023-52-300607" }
    ],
    bride: [
      { role: "김보미", bank: "신한", number: "110-135-066705" },
      { role: "김용환", bank: "OO", number: "000000-00-000000" },
      { role: "김애진", bank: "신한", number: "110-037-960240" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "고종필 ♥ 김보미 결혼합니다",
    description: "2026년 8월 29일, 소중한 분들을 초대합니다."
  }
};
