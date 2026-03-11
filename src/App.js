import { useState } from "react";

function StepBadge({ label, left }) {
  return (
    <span
      className={`absolute ${
        left ? "-left-1 -top-4" : "-top-4 right-0"
      } bg-amber-400 text-white px-1.5 py-0.5 rounded-full whitespace-nowrap z-10 shadow`}
      style={{ fontSize: "9px" }}
    >
      {label}
    </span>
  );
}

function NexInput({ icon, value, highlight, highlightStep, eye }) {
  return (
    <div className="relative">
      <div
        className={`flex items-center border rounded px-2 py-1.5 gap-1.5 bg-white ${
          highlight
            ? "border-amber-400 ring-1 ring-amber-300"
            : "border-gray-200"
        }`}
      >
        <span style={{ fontSize: "10px" }}>{icon}</span>
        <span className="flex-1 text-gray-400" style={{ fontSize: "10px" }}>
          {value}
        </span>
        {eye && (
          <span className="text-gray-300" style={{ fontSize: "10px" }}>
            👁
          </span>
        )}
      </div>
      {highlight && highlightStep && (
        <StepBadge label={`${highlightStep} 입력`} />
      )}
    </div>
  );
}

function NexSlider({ highlight }) {
  return (
    <div className="relative">
      <div
        className={`flex items-center border rounded px-2 py-1.5 gap-1.5 bg-gray-50 ${
          highlight
            ? "border-amber-400 ring-1 ring-amber-300"
            : "border-gray-200"
        }`}
      >
        <div
          className="bg-white border border-gray-200 rounded px-1.5 py-0.5 text-gray-400"
          style={{ fontSize: "9px" }}
        >
          »
        </div>
        <span className="text-gray-400" style={{ fontSize: "9px" }}>
          Please drag the slider to the far right
        </span>
      </div>
      {highlight && <StepBadge label="④ 슬라이더 드래그 →끝" />}
    </div>
  );
}

function NexLoginUI() {
  return (
    <div
      className="w-full max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
      style={{ fontSize: "11px" }}
    >
      <div className="bg-white border-b border-gray-100 px-3 py-2 flex items-center">
        <span className="text-blue-500 font-black text-xs">✦ nexdata</span>
      </div>
      <div className="flex">
        <div
          className="w-28 flex-shrink-0 flex items-center justify-center py-5"
          style={{
            background: "linear-gradient(135deg,#1e90ff 0%,#00c6ff 100%)",
          }}
        >
          <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none">
            <ellipse
              cx="40"
              cy="62"
              rx="22"
              ry="8"
              fill="rgba(255,255,255,0.15)"
            />
            <rect
              x="20"
              y="48"
              width="40"
              height="8"
              rx="2"
              fill="rgba(255,255,255,0.25)"
            />
            <rect
              x="20"
              y="38"
              width="40"
              height="10"
              rx="2"
              fill="rgba(255,255,255,0.35)"
            />
            <rect
              x="20"
              y="28"
              width="40"
              height="12"
              rx="2"
              fill="rgba(255,255,255,0.45)"
            />
            <ellipse
              cx="40"
              cy="28"
              rx="20"
              ry="6"
              fill="rgba(255,255,255,0.6)"
            />
            <ellipse
              cx="40"
              cy="26"
              rx="10"
              ry="3"
              fill="rgba(100,200,255,0.9)"
            />
            <rect
              x="64"
              y="42"
              width="4"
              height="14"
              rx="1"
              fill="rgba(150,100,255,0.8)"
            />
            <rect
              x="70"
              y="36"
              width="4"
              height="20"
              rx="1"
              fill="rgba(150,100,255,0.9)"
            />
            <rect
              x="12"
              y="54"
              width="5"
              height="5"
              rx="1"
              fill="rgba(255,255,255,0.5)"
              transform="rotate(-15 14 56)"
            />
            <rect
              x="62"
              y="16"
              width="4"
              height="4"
              rx="1"
              fill="rgba(255,255,255,0.5)"
              transform="rotate(15 64 18)"
            />
            <circle cx="40" cy="22" r="2" fill="white" opacity="0.9" />
          </svg>
        </div>
        <div className="flex-1 p-4 space-y-2.5">
          <div className="text-center mb-1">
            <p className="font-bold text-gray-800" style={{ fontSize: "12px" }}>
              Welcome to Nexdata
            </p>
            <div className="w-10 h-0.5 bg-blue-400 mx-auto mt-1 rounded" />
          </div>
          <NexInput icon="👤" value="계정 이메일" highlight highlightStep="②" />
          <NexInput
            icon="🔒"
            value="••••••••"
            highlight
            highlightStep="③"
            eye
          />
          <NexSlider highlight />
          <div className="flex justify-between items-center">
            <span className="text-gray-400" style={{ fontSize: "10px" }}>
              🌐 English ▾
            </span>
            <span className="text-blue-400" style={{ fontSize: "10px" }}>
              Forget password?
            </span>
          </div>
          <div className="relative">
            <div
              className="bg-blue-500 text-white text-center py-1.5 rounded font-semibold"
              style={{ fontSize: "11px" }}
            >
              Login
            </div>
            <StepBadge label="⑥ Login 클릭" />
          </div>
          <div className="flex items-start gap-1 relative">
            <div className="relative">
              <input
                type="checkbox"
                className="mt-0.5 w-2.5 h-2.5 accent-blue-500"
                readOnly
              />
              <StepBadge label="⑤ 약관 동의" left />
            </div>
            <p
              className="text-gray-400 leading-tight"
              style={{ fontSize: "9px" }}
            >
              I have read and agreed to the terms of the agreement.
              <br />
              <span className="text-blue-400">
                《Privacy agreement》《Service agreement》
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NexOrdersUI() {
  return (
    <div
      className="w-full bg-white rounded-xl shadow border border-gray-200 overflow-hidden"
      style={{ fontSize: "10px" }}
    >
      <div className="bg-white border-b border-gray-100 px-4 py-2 flex items-center justify-between">
        <span className="text-blue-500 font-black text-xs">✦ nexdata</span>
        <div
          className="flex items-center gap-4 text-gray-500"
          style={{ fontSize: "10px" }}
        >
          <span>Datasets</span>
          <span className="text-blue-500 font-bold border-b-2 border-blue-500 pb-0.5">
            Orders
          </span>
          <span>Help Center</span>
          <span className="text-gray-600 ml-2">✉ macallan@socar.kr ▾</span>
        </div>
      </div>
      <div className="px-4 pt-3 pb-1 flex items-center justify-between border-b border-gray-100">
        <div className="flex gap-4">
          <span
            className="text-blue-500 font-semibold border-b-2 border-blue-500 pb-1"
            style={{ fontSize: "11px" }}
          >
            In progress
          </span>
          <span className="text-gray-400" style={{ fontSize: "11px" }}>
            Completed
          </span>
        </div>
        <div className="flex items-center border border-gray-200 rounded overflow-hidden">
          <input
            className="px-2 py-1 text-gray-400 outline-none bg-white"
            placeholder="Order name/Order NO."
            style={{ fontSize: "9px", width: "130px" }}
            readOnly
          />
          <div className="bg-blue-500 px-2 py-1 text-white text-xs">🔍</div>
        </div>
      </div>
      <div className="p-4 flex gap-4">
        <div className="flex-1 border border-gray-200 rounded-xl p-3 bg-white relative shadow-sm">
          <div
            className="absolute top-2 right-2 bg-orange-400 text-white px-2 py-0.5 rounded-full"
            style={{ fontSize: "8px" }}
          >
            Platform Order
          </div>
          <p
            className="font-bold text-gray-800 pr-20 leading-tight mb-1"
            style={{ fontSize: "10px" }}
          >
            Vehicle Part Detection and Stain Level Classification
          </p>
          <p
            className="text-gray-400 mb-3 font-mono"
            style={{ fontSize: "8px" }}
          >
            (ZJDD20260130665)
          </p>
          <div className="flex gap-2">
            <div className="flex-1 bg-white border border-gray-100 rounded-lg p-2 ring-2 ring-amber-400 relative">
              <div
                className="absolute -top-3 -right-1 bg-amber-400 text-white px-1.5 py-0.5 rounded-full font-bold shadow"
                style={{ fontSize: "8px" }}
              >
                ③ 여기 클릭!
              </div>
              <p
                className="text-blue-400 font-semibold mb-1"
                style={{ fontSize: "9px" }}
              >
                | Acceptance
              </p>
              <p className="text-gray-400" style={{ fontSize: "9px" }}>
                Remain
              </p>
              <p className="font-bold text-gray-700 text-sm">0</p>
              <p className="text-gray-400" style={{ fontSize: "9px" }}>
                Total : 1
              </p>
            </div>
            <div className="flex-1 bg-white border border-gray-100 rounded-lg p-2">
              <p
                className="text-blue-400 font-semibold mb-1"
                style={{ fontSize: "9px" }}
              >
                | Delivery
              </p>
              <p className="text-gray-400" style={{ fontSize: "9px" }}>
                Remain
              </p>
              <p className="font-bold text-gray-700 text-sm">0</p>
              <p className="text-gray-400" style={{ fontSize: "9px" }}>
                Total : 0
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 border border-gray-200 rounded-xl p-3 bg-gray-50 opacity-40 relative">
          <div
            className="absolute top-2 right-2 bg-orange-400 text-white px-2 py-0.5 rounded-full"
            style={{ fontSize: "8px" }}
          >
            Platform Order
          </div>
          <p
            className="font-bold text-gray-500 pr-20 leading-tight mb-1"
            style={{ fontSize: "10px" }}
          >
            Vehicle Damage and Stain Detection
          </p>
          <p
            className="text-gray-400 mb-3 font-mono"
            style={{ fontSize: "8px" }}
          >
            (ZJDD20251201332)
          </p>
          <div className="flex gap-2">
            <div className="flex-1 bg-white border border-gray-100 rounded-lg p-2">
              <p
                className="text-blue-400 font-semibold mb-1"
                style={{ fontSize: "9px" }}
              >
                | Acceptance
              </p>
              <p className="text-gray-400" style={{ fontSize: "9px" }}>
                Remain
              </p>
              <p className="font-bold text-gray-700 text-sm">0</p>
              <p className="text-gray-400" style={{ fontSize: "9px" }}>
                Total : 23
              </p>
            </div>
            <div className="flex-1 bg-white border border-gray-100 rounded-lg p-2">
              <p
                className="text-blue-400 font-semibold mb-1"
                style={{ fontSize: "9px" }}
              >
                | Delivery
              </p>
              <p className="text-gray-400" style={{ fontSize: "9px" }}>
                Remain
              </p>
              <p className="font-bold text-gray-700 text-sm">0</p>
              <p className="text-gray-400" style={{ fontSize: "9px" }}>
                Total : 5
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CONTAMINATION_TYPES = [
  {
    category: "이물질",
    ko: "먼지",
    en: "DUST",
    minLevel: null,
    note: "색이 회색이고 하얀 입자",
  },
  {
    category: "이물질",
    ko: "흙",
    en: "DIRT",
    minLevel: null,
    note: "색이 갈색이고 알갱이",
  },
  {
    category: "이물질",
    ko: "동물털",
    en: "ANIMAL_HAIR",
    minLevel: 2,
    note: "각종 동물털",
  },
  { category: "이물질", ko: "머리카락", en: "HAIR", minLevel: null, note: "" },
  {
    category: "이물질",
    ko: "담뱃재",
    en: "CIGARETTE_ASH",
    minLevel: 2,
    note: "Level 2 이상 필수",
  },
  {
    category: "이물질",
    ko: "염화칼슘",
    en: "CALCIUM_RESIDUE",
    minLevel: null,
    note: "겨울철 제설제 흔적",
  },
  {
    category: "이물질",
    ko: "나뭇잎·솔잎·나뭇가지 등 자연 부산물",
    en: "NATURAL_DEBRIS",
    minLevel: null,
    note: "외부: 수량무관 Lv1 / 내부: 10개↑ Lv2, 9개↓ Lv1",
  },
  {
    category: "액체/얼룩",
    ko: "음료얼룩",
    en: "BEVERAGE_STAIN",
    minLevel: null,
    note: "갈색·노란색·붉은색 등 유색",
  },
  {
    category: "액체/얼룩",
    ko: "물얼룩",
    en: "WATER_STAIN",
    minLevel: null,
    note: "무색·흰색 테두리 자국",
  },
  {
    category: "액체/얼룩",
    ko: "기름얼룩",
    en: "OIL_STAIN",
    minLevel: null,
    note: "선크림·손크림 포함",
  },
  {
    category: "액체/얼룩",
    ko: "지문얼룩",
    en: "FINGERPRINT_STAIN",
    minLevel: 1,
    note: "Level 1 필수",
  },
  {
    category: "고착오염",
    ko: "새배설물",
    en: "BIRD_DROPPINGS",
    minLevel: 2,
    note: "Level 2 이상 필수",
  },
  {
    category: "고착오염",
    ko: "벌레사체",
    en: "INSECT_REMAINS",
    minLevel: null,
    note: "범퍼·그릴: 1개라도 Lv2",
  },
  {
    category: "고착오염",
    ko: "나무수액",
    en: "TREE_SAP",
    minLevel: 3,
    note: "Level 3 필수",
  },
  {
    category: "고착오염",
    ko: "페인트자국",
    en: "PAINT_MARKS",
    minLevel: null,
    note: "",
  },
  {
    category: "고착오염",
    ko: "스티커",
    en: "STICKER",
    minLevel: 2,
    note: "초보운전/SOCAR: Lv1 필수",
  },
  {
    category: "쓰레기",
    ko: "일반쓰레기",
    en: "TRASH",
    minLevel: null,
    note: "SOCAR 물티슈: Lv1 필수",
  },
  { category: "쓰레기", ko: "영수증", en: "RECEIPT", minLevel: null, note: "" },
  {
    category: "쓰레기",
    ko: "담배꽁초",
    en: "CIGARETTE_BUTT",
    minLevel: 2,
    note: "Level 2 이상 필수",
  },
  { category: "쓰레기", ko: "휴지", en: "TISSUE", minLevel: null, note: "" },
  { category: "쓰레기", ko: "종이류", en: "PAPER", minLevel: null, note: "" },
  { category: "쓰레기", ko: "비닐류", en: "VINYL", minLevel: null, note: "" },
  {
    category: "쓰레기",
    ko: "플라스틱류",
    en: "PLASTIC",
    minLevel: null,
    note: "",
  },
  { category: "쓰레기", ko: "캔류", en: "CAN", minLevel: null, note: "" },
  {
    category: "쓰레기",
    ko: "스티로폼류",
    en: "STYROFOAM",
    minLevel: null,
    note: "",
  },
  { category: "음식물", ko: "과자", en: "SNACK", minLevel: null, note: "" },
  { category: "음식물", ko: "껌", en: "GUM", minLevel: null, note: "" },
  { category: "음식물", ko: "젤리", en: "JELLY", minLevel: null, note: "" },
  { category: "음식물", ko: "음식물류", en: "FOOD", minLevel: null, note: "" },
  {
    category: "오물",
    ko: "동물사체",
    en: "ANIMAL_CARCASS",
    minLevel: 3,
    note: "Level 3 필수",
  },
  {
    category: "오물",
    ko: "구토",
    en: "VOMIT",
    minLevel: 3,
    note: "Level 3 필수",
  },
  {
    category: "오물",
    ko: "대소변",
    en: "EXCREMENT",
    minLevel: 3,
    note: "Level 3 필수",
  },
  {
    category: "오물",
    ko: "곰팡이",
    en: "MOLD",
    minLevel: 2,
    note: "Level 2 이상 필수",
  },
  {
    category: "분실물",
    ko: "분실물",
    en: "LOST_ITEM",
    minLevel: 2,
    note: "Level 2 이상 필수",
  },
];

const INTERIOR_PARTS = [
  {
    name: "센터페시아",
    en: "CENTER_FASCIA",
    levels: [
      {
        lv: 0,
        desc: "화면·버튼·송풍구 위 오염 없음",
        note: "액정 실금 있어도 Lv0",
      },
      {
        lv: 1,
        desc: "화면/버튼 위 가벼운 먼지, 화면 지문·유분 자국",
        note: "",
      },
      {
        lv: 2,
        desc: "버튼 틈새 낀 이물질, 송풍구 날개 사이 먼지 덩어리",
        note: "",
      },
      { lv: 3, desc: "틈새로 음료 유입 (침수)", note: "" },
    ],
  },
  {
    name: "센터콘솔",
    en: "CENTER_CONSOLE",
    levels: [
      {
        lv: 0,
        desc: "수납함·충전패드 깨끗",
        note: "가죽 해짐·플라스틱 긁힘 있어도 Lv0",
      },
      {
        lv: 1,
        desc: "컵홀더 안 빨대/영수증 1개, 충전패드 가벼운 먼지",
        note: "쓰레기 1개 = Lv1",
      },
      {
        lv: 2,
        desc: "쓰레기 2개↑, 음료 자국, 분실물, 말라붙은 얼룩",
        note: "쓰레기 2개↑ = Lv2",
      },
      { lv: 3, desc: "액체 고임, 끈적이는 젤리·사탕 녹음", note: "" },
    ],
  },
  {
    name: "도어포켓",
    en: "DOOR_POCKET",
    levels: [
      {
        lv: 0,
        desc: "안쪽까지 완전히 비어있음",
        note: "발자국 기스 있어도 Lv0",
      },
      { lv: 1, desc: "영수증·휴지 1조각, 빈 물통 1개", note: "" },
      { lv: 2, desc: "쓰레기 2개↑, 끈적이는 액체 자국, 분실물", note: "" },
      { lv: 3, desc: "먹다 남은 음식물 투기", note: "" },
    ],
  },
  {
    name: "기어노브",
    en: "GEAR_KNOB",
    levels: [
      { lv: 0, desc: "손때·먼지 없이 깨끗", note: "" },
      { lv: 1, desc: "얇게 앉은 먼지", note: "" },
      {
        lv: 2,
        desc: "손때·기름기·선크림 자국, 틈새 과자 부스러기, 분실물",
        note: "",
      },
      { lv: 3, desc: "제거 불가한 접착제·껌 고착", note: "" },
    ],
  },
  {
    name: "대시보드",
    en: "DASHBOARD",
    levels: [
      { lv: 0, desc: "상단 선반 깨끗", note: "" },
      { lv: 1, desc: "가벼운 먼지, 방향제 거치 단순 눌림 자국", note: "" },
      {
        lv: 2,
        desc: "발자국, 화장품 자국, 분실물, 부착물 뗀 끈끈이 자국",
        note: "⚠️끈끈이 자국 = Lv2 (파손 아님)",
      },
      {
        lv: 3,
        desc: "전면 유리에 튈 정도의 음료 자국 (대규모 침수)",
        note: "",
      },
    ],
  },
  {
    name: "글로브박스",
    en: "GLOVE_BOX",
    levels: [
      { lv: 0, desc: "내부 완전히 비어있음", note: "" },
      {
        lv: 1,
        desc: "차량등록증·매뉴얼(정상 서류), 영수증 1장",
        note: "등록증·매뉴얼은 정상 = Lv1",
      },
      { lv: 2, desc: "휴지·마스크 2개↑, 과자 부스러기, 흙, 분실물", note: "" },
      { lv: 3, desc: "액체 터져 내부 오염, 썩은 귤·음식물 부패", note: "" },
    ],
  },
  {
    name: "핸들",
    en: "STEERING_WHEEL",
    levels: [
      { lv: 0, desc: "가죽·우레탄 표면 깨끗", note: "가죽 까짐 있어도 Lv0" },
      { lv: 1, desc: "가벼운 먼지", note: "" },
      { lv: 2, desc: "림 끈적임·손때, 화장품(파운데이션) 자국", note: "" },
      { lv: 3, desc: "심각한 끈적임 (음료 쏟음)", note: "" },
    ],
  },
  {
    name: "시트",
    en: "SEAT",
    levels: [
      { lv: 0, desc: "오염 없음", note: "찢어짐·담배빵 있어도 Lv0" },
      {
        lv: 1,
        desc: "털면 되는 먼지, 머리카락 1개, 휴지 1개",
        note: "머리카락 1개 = Lv1",
      },
      {
        lv: 2,
        desc: "흙 신발자국, 음료 얼룩, 동물털, 담뱃재, 쓰레기 2개↑, 분실물",
        note: "동물털 박힘 = Lv2",
      },
      { lv: 3, desc: "구토·소변·오물 범벅, 곰팡이 핀 음식물", note: "" },
    ],
  },
  {
    name: "바닥재",
    en: "FLOOR_MAT",
    levels: [
      { lv: 0, desc: "흙·이물질 없음", note: "매트 해짐 있어도 Lv0" },
      { lv: 1, desc: "흙먼지 소량, 굴러다니는 병뚜껑 1개", note: "" },
      { lv: 2, desc: "진흙 덩어리, 음료 자국, 쓰레기 2개↑, 분실물", note: "" },
      { lv: 3, desc: "구토, 썩은 악취 유발 오염물", note: "" },
    ],
  },
];

const EXTERIOR_PARTS = [
  {
    name: "본넷",
    en: "HOOD",
    levels: [
      { lv: 0, desc: "광택 유지, 깨끗", note: "돌빵·스크래치 있어도 Lv0" },
      { lv: 1, desc: "마르지 않은 빗물, 마른 낙엽", note: "" },
      {
        lv: 2,
        desc: "새 배설물·나무 수액 고착, 워터스팟·염화칼슘 자국",
        note: "",
      },
      { lv: 3, desc: "본넷 색상을 덮은 진흙·배설물 범벅", note: "" },
    ],
  },
  {
    name: "앞 범퍼",
    en: "FRONT_BUMPER",
    levels: [
      { lv: 0, desc: "이물질 없이 깨끗", note: "긁힘·찌그러짐 있어도 Lv0" },
      { lv: 1, desc: "빗물, 가벼운 도로 먼지", note: "" },
      {
        lv: 2,
        desc: "벌레 사체(1개라도 무조건 Lv2), 타르·굳은 흙탕물",
        note: "⚠️벌레사체 = 무조건 Lv2",
      },
      { lv: 3, desc: "진흙 덩어리 고착", note: "" },
    ],
  },
  {
    name: "그릴",
    en: "GRILLE",
    levels: [
      { lv: 0, desc: "통풍구 깨끗", note: "플라스틱 깨짐 있어도 Lv0" },
      { lv: 1, desc: "빗물", note: "" },
      { lv: 2, desc: "벌레 사체 다수 끼임", note: "" },
      { lv: 3, desc: "진흙·눈으로 통풍구 막힘", note: "" },
    ],
  },
  {
    name: "후면",
    en: "REAR",
    levels: [
      { lv: 0, desc: "뒷범퍼·트렁크 깨끗", note: "" },
      { lv: 1, desc: "빗물, 가벼운 먼지", note: "" },
      { lv: 2, desc: "새 배설물, 워터스팟", note: "" },
      { lv: 3, desc: "전체 진흙 오염", note: "" },
    ],
  },
  {
    name: "유리",
    en: "WINDOW",
    levels: [
      { lv: 0, desc: "투명하게 깨끗", note: "돌빵·긁힘 있어도 Lv0" },
      {
        lv: 1,
        desc: "초보운전/SOCAR 스티커, 와이퍼로 닦이는 빗물",
        note: "SOCAR 스티커 = Lv1",
      },
      {
        lv: 2,
        desc: "불법 전단지 끈끈이 잔여물, 시야 가리는 새똥·벌레",
        note: "불법 스티커 = Lv2",
      },
      { lv: 3, desc: "폭설·진흙으로 시야 확보 불가", note: "" },
    ],
  },
  {
    name: "사이드미러",
    en: "SIDE_MIRROR",
    levels: [
      { lv: 0, desc: "거울면 깨끗", note: "케이스 기스 있어도 Lv0" },
      { lv: 1, desc: "빗물", note: "" },
      { lv: 2, desc: "거울면 새똥·벌레·흙탕물, 워터스팟(물때)", note: "" },
      { lv: 3, desc: "거울이 안 보일 정도의 오염", note: "" },
    ],
  },
  {
    name: "타이어",
    en: "TIRE",
    levels: [
      { lv: 0, desc: "휠 광택 유지", note: "휠 긁힘·타이어 마모 있어도 Lv0" },
      { lv: 1, desc: "휠하우스 안쪽 흙(무시 수준), 가벼운 먼지", note: "" },
      {
        lv: 2,
        desc: "휠 검은 변색(브레이크 분진), 타이어 옆면 흙탕물·염화칼슘",
        note: "",
      },
      { lv: 3, desc: "휠 형체를 알아볼 수 없는 진흙 범벅", note: "" },
    ],
  },
  {
    name: "도어",
    en: "DOOR",
    levels: [
      { lv: 0, desc: "도장면 깨끗", note: "문콕·덴트 있어도 Lv0" },
      { lv: 1, desc: "빗물", note: "" },
      {
        lv: 2,
        desc: "문콕 방지 스펀지 끈끈이 잔여물, 손잡이 주변 찌든 때",
        note: "",
      },
      { lv: 3, desc: "도어 전체 진흙 오염 (Mud Bath)", note: "" },
    ],
  },
  {
    name: "휀더",
    en: "FENDER",
    levels: [
      { lv: 0, desc: "도장면 깨끗", note: "찌그러짐 있어도 Lv0" },
      { lv: 1, desc: "빗물", note: "" },
      { lv: 2, desc: "바퀴에서 튄 흙·염화칼슘 자국", note: "" },
      { lv: 3, desc: "휀더 전체 진흙 오염 범벅", note: "" },
    ],
  },
  {
    name: "루프",
    en: "ROOF",
    levels: [
      { lv: 0, desc: "도장면 깨끗", note: "" },
      { lv: 1, desc: "마른 낙엽, 날리는 눈", note: "" },
      { lv: 2, desc: "새 배설물·나무 수액 고착, 워터스팟", note: "" },
      { lv: 3, desc: "루프 전체 오염 범벅", note: "" },
    ],
  },
];

const HOW_TO_STEPS = [
  {
    step: 1,
    title: "Nexdata 로그인",
    desc: "작업 시작 전 Nexdata 플랫폼에 로그인합니다.",
    details: [
      { label: "① 접속", text: "Nexdata 홈페이지에 접속합니다." },
      {
        label: "② 이메일 입력",
        text: "이메일 입력란에 계정 이메일을 입력합니다.",
      },
      { label: "③ 비밀번호 입력", text: "비밀번호를 입력합니다." },
      {
        label: "④ 슬라이더 인증",
        text: "슬라이더를 오른쪽 끝까지 드래그합니다.",
      },
      { label: "⑤ 약관 동의", text: "하단 체크박스를 체크합니다." },
      { label: "⑥ 로그인", text: "파란색 Login 버튼을 클릭합니다." },
    ],
    caution:
      "슬라이더 인증을 완료하지 않으면 로그인 버튼이 활성화되지 않습니다.",
    ui: "login",
  },
  {
    step: 2,
    title: "작업 오더 선택",
    desc: "로그인 후 Orders 메뉴에서 작업할 오더를 선택합니다.",
    details: [
      { label: "① Orders 클릭", text: "상단 메뉴에서 Orders를 클릭합니다." },
      {
        label: "② In progress 확인",
        text: "In progress 탭에서 진행 중인 오더 목록을 확인합니다.",
      },
      {
        label: "③ Acceptance 클릭",
        text: '"Vehicle Part Detection and Stain Level Classification" 카드 내 Acceptance 영역을 클릭하여 작업 목록으로 진입합니다.',
      },
    ],
    caution:
      "반드시 Vehicle Part Detection and Stain Level Classification (ZJDD20260130665) 오더를 선택합니다. 옆의 Vehicle Damage and Stain Detection 오더와 혼동하지 않도록 주의하세요.",
    ui: "orders",
  },
];

const FORCED_LEVELS = [
  { en: "FINGERPRINT_STAIN", ko: "지문얼룩", level: "Lv1 필수" },
  { en: "STICKER", ko: "스티커(SOCAR·초보)", level: "Lv1 필수" },
  { en: "TRASH", ko: "쓰레기(SOCAR 물티슈)", level: "Lv1 필수" },
  { en: "CIGARETTE_ASH", ko: "담뱃재", level: "Lv2 이상" },
  { en: "BIRD_DROPPINGS", ko: "새배설물", level: "Lv2 이상" },
  { en: "CIGARETTE_BUTT", ko: "담배꽁초", level: "Lv2 이상" },
  { en: "MOLD", ko: "곰팡이", level: "Lv2 이상" },
  { en: "LOST_ITEM", ko: "분실물", level: "Lv2 이상" },
  { en: "TREE_SAP", ko: "나무수액", level: "Lv3 필수" },
  { en: "ANIMAL_CARCASS", ko: "동물사체", level: "Lv3 필수" },
  { en: "VOMIT", ko: "구토", level: "Lv3 필수" },
  { en: "EXCREMENT", ko: "대소변", level: "Lv3 필수" },
];

const UNDEFINED_CASES = [
  {
    img: "/case1.png",
    label: "정확한 부위명은 알 수 없지만, OOD가 아니고 오염이 확실한 경우",
  },
  {
    img: "/case2.png",
    label: "트렁크는 대상 부위가 아니지만, 오염이 확실한 경우",
  },
];

const lvColor = (lv) => {
  if (lv === 0)
    return {
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      badge: "bg-emerald-100 text-emerald-700",
      border: "border-emerald-200",
    };
  if (lv === 1)
    return {
      bg: "bg-yellow-50",
      text: "text-yellow-700",
      badge: "bg-yellow-100 text-yellow-700",
      border: "border-yellow-200",
    };
  if (lv === 2)
    return {
      bg: "bg-orange-50",
      text: "text-orange-700",
      badge: "bg-orange-100 text-orange-700",
      border: "border-orange-200",
    };
  return {
    bg: "bg-red-50",
    text: "text-red-700",
    badge: "bg-red-100 text-red-700",
    border: "border-red-200",
  };
};

const catColor = (cat) => {
  const m = {
    이물질: "bg-slate-100 text-slate-700",
    "액체/얼룩": "bg-blue-100 text-blue-700",
    고착오염: "bg-purple-100 text-purple-700",
    쓰레기: "bg-gray-100 text-gray-700",
    음식물: "bg-amber-100 text-amber-700",
    오물: "bg-red-100 text-red-700",
    분실물: "bg-pink-100 text-pink-700",
  };
  return m[cat] || "bg-gray-100 text-gray-700";
};

const forcedColor = (lv) => {
  if (lv.includes("Lv1"))
    return "bg-yellow-50 border-yellow-300 text-yellow-800";
  if (lv.includes("Lv2"))
    return "bg-orange-50 border-orange-300 text-orange-800";
  return "bg-red-50 border-red-300 text-red-800";
};

export default function App() {
  const [tab, setTab] = useState("overview");
  const [partType, setPartType] = useState("interior");
  const [selectedPart, setSelectedPart] = useState(null);
  const [catFilter, setCatFilter] = useState("전체");
  const [search, setSearch] = useState("");

  const tabs = [
    { id: "overview", label: "📋 작업 방법" },
    { id: "parts", label: "🚗 부위별 기준" },
    { id: "types", label: "🔍 오염 타입" },
    { id: "forced", label: "⚠️ 강제 레벨" },
  ];

  const parts = partType === "interior" ? INTERIOR_PARTS : EXTERIOR_PARTS;
  const categories = [
    "전체",
    ...Array.from(new Set(CONTAMINATION_TYPES.map((t) => t.category))),
  ];
  const filteredTypes = CONTAMINATION_TYPES.filter(
    (t) =>
      (catFilter === "전체" || t.category === catFilter) &&
      (search === "" ||
        t.ko.includes(search) ||
        t.en.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white px-6 py-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center gap-3">
          <span className="text-2xl">🚘</span>
          <div>
            <h1 className="text-lg font-bold leading-tight">
              차량 오염 라벨링 가이드
            </h1>
            <p className="text-slate-300 text-xs mt-0.5">
              18개 부위 · Level 0~3 · 36종 오염 타입
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex gap-1 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                tab === t.id
                  ? "border-slate-700 text-slate-800"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* ── 작업 방법 ── */}
        {tab === "overview" && (
          <div className="space-y-5">
            {/* 작업 방법 */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <h2 className="font-bold text-gray-800 mb-4 text-base">
                📌 작업 방법
              </h2>
              <div className="space-y-4">
                {HOW_TO_STEPS.map((s) => (
                  <div
                    key={s.step}
                    className="border border-gray-100 rounded-xl overflow-hidden"
                  >
                    <div className="flex items-center gap-3 bg-slate-700 text-white px-4 py-3">
                      <span className="w-7 h-7 rounded-full bg-white text-slate-700 font-bold text-sm flex items-center justify-center flex-shrink-0">
                        {s.step}
                      </span>
                      <div>
                        <div className="font-bold text-sm">{s.title}</div>
                        <div className="text-slate-300 text-xs mt-0.5">
                          {s.desc}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                      <div className="p-4 space-y-2">
                        {s.details.map((d, i) => (
                          <div key={i} className="flex gap-2 text-sm">
                            <span className="font-bold text-slate-600 whitespace-nowrap">
                              {d.label}
                            </span>
                            <span className="text-gray-700">{d.text}</span>
                          </div>
                        ))}
                        {s.caution && (
                          <div className="mt-3 flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3">
                            <span className="text-amber-500 text-sm flex-shrink-0">
                              ⚠️
                            </span>
                            <p className="text-amber-800 text-xs leading-relaxed">
                              {s.caution}
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="p-4 bg-gray-100 flex items-center justify-center">
                        {s.ui === "login" && <NexLoginUI />}
                        {s.ui === "orders" && <NexOrdersUI />}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-5 text-center text-gray-400">
                  <div className="text-2xl mb-2">➕</div>
                  <p className="text-sm">
                    다음 단계 스크린샷을 첨부하면 계속 추가됩니다.
                  </p>
                  <p className="text-xs mt-1 text-gray-300">
                    예: 작업 목록 선택 → BBox 작업 화면 → 저장·제출
                  </p>
                </div>
              </div>
            </div>

            {/* 검수 시 확인 사항 */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <h2 className="font-bold text-gray-800 mb-3 text-base">
                📌 검수 시 확인 사항
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                검수한 이미지에 아무 문제가 없을 경우 <strong>Passed</strong>를
                누르시면 됩니다. 수정이 필요한 부분이 있다면 해당 내용을 수정한
                뒤 <strong>Reject</strong>를 누르시면 됩니다. 레벨이나 타입
                오류가 하나라도 있으면 Reject를 선택해 주세요.
              </p>
            </div>

            {/* 오염 레벨 요약 */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <h2 className="font-bold text-gray-800 mb-3 text-base">
                오염 레벨 요약
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  {
                    lv: 0,
                    label: "청결",
                    desc: "오염 없음 또는 물리적 파손만",
                    meta: "메타 없음",
                  },
                  {
                    lv: 1,
                    label: "경미",
                    desc: "간단히 닦으면 제거 가능",
                    meta: "오염 타입 필수",
                  },
                  {
                    lv: 2,
                    label: "보통",
                    desc: "도구·세제 필요한 중간 수준",
                    meta: "오염 타입 필수",
                  },
                  {
                    lv: 3,
                    label: "심각",
                    desc: "전문 처리 필요 또는 위생 문제",
                    meta: "오염 타입 필수",
                  },
                ].map(({ lv, label, desc, meta }) => {
                  const c = lvColor(lv);
                  return (
                    <div
                      key={lv}
                      className={`rounded-lg border p-3 ${c.bg} ${c.border}`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-lg font-bold ${c.text}`}>
                          Lv{lv}
                        </span>
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${c.badge}`}
                        >
                          {label}
                        </span>
                      </div>
                      <p className="text-xs text-gray-700 leading-relaxed mb-2">
                        {desc}
                      </p>
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded ${c.badge}`}
                      >
                        {meta}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* OOD & UNDEFINED */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <h2 className="font-bold text-gray-800 mb-3 text-base">
                OOD & UNDEFINED 처리
              </h2>
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-3 text-gray-600 font-semibold">
                        상황
                      </th>
                      <th className="text-left p-3 text-gray-600 font-semibold">
                        태그
                      </th>
                      <th className="text-left p-3 text-gray-600 font-semibold">
                        처리 방법
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-100">
                      <td className="p-3 text-gray-700">
                        영수증·사람 사진, 차량과 무관한 사진
                      </td>
                      <td className="p-3">
                        <code className="bg-red-50 text-red-700 px-2 py-0.5 rounded text-xs font-mono">
                          NOT_TARGET_NON_VEHICLE
                        </code>
                      </td>
                      <td className="p-3 text-gray-700">
                        BBox 없이 이미지 전체에 OOD 태그만 부여
                      </td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="p-3 text-gray-700">
                        너무 어두움·흔들림·흐림·가림으로 판독 불가
                        <br />
                        <span className="text-gray-400 text-xs">
                          또는 과도하게 확대되어 부위 구분 불가
                        </span>
                      </td>
                      <td className="p-3">
                        <code className="bg-red-50 text-red-700 px-2 py-0.5 rounded text-xs font-mono">
                          UNIDENTIFIABLE
                        </code>
                      </td>
                      <td className="p-3 text-gray-700">
                        BBox 없이 이미지 전체에 OOD 태그만 부여
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* UNDEFINED 예시 */}
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm font-bold text-gray-700 mb-2">
                  📌 UNDEFINED · Level 4 예시
                </p>
                <p className="text-xs text-gray-500 mb-3">
                  아래 케이스는 OOD가 아닙니다. 오염이 확실하지만 정확한
                  부위명을 알 수 없는 경우{" "}
                  <code className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-mono">
                    UNDEFINED
                  </code>{" "}
                  + <strong>Level 4</strong>로 처리합니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {UNDEFINED_CASES.map((c, i) => (
                    <div
                      key={i}
                      className="border border-gray-200 rounded-xl overflow-hidden"
                    >
                      <img
                        src={c.img}
                        alt={"case" + (i + 1)}
                        className="w-full aspect-square object-cover"
                      />
                      <div className="p-3 bg-gray-50 flex items-start gap-2">
                        <span className="bg-slate-600 text-white text-xs px-2 py-0.5 rounded font-mono flex-shrink-0">
                          UNDEFINED
                        </span>
                        <p className="text-xs text-gray-700 leading-relaxed">
                          {c.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 물리적 파손 주의 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start gap-2">
                <span className="text-xl">⚠️</span>
                <div>
                  <div className="font-bold text-amber-800 text-sm mb-1">
                    물리적 파손은 오염이 아닙니다
                  </div>
                  <p className="text-amber-700 text-xs leading-relaxed">
                    스크래치, 찢어짐, 찌그러짐, 덴트, 마모 등은{" "}
                    <strong>레벨 판정에서 완전히 제외</strong>합니다.
                    <br />
                    <strong>예외:</strong> 부착물 뗀 끈끈이 자국 → 이물질
                    오염으로 Level 2 처리
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 부위별 기준 ── */}
        {tab === "parts" && (
          <div>
            <div className="flex gap-2 mb-4">
              {["interior", "exterior"].map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setPartType(t);
                    setSelectedPart(null);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    partType === t
                      ? "bg-slate-700 text-white"
                      : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {t === "interior" ? "🪑 내부 (9종)" : "🚗 외부 (10종)"}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mb-4">
              {parts.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedPart(selectedPart === i ? null : i)}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    selectedPart === i
                      ? "bg-slate-700 text-white border-slate-700"
                      : "bg-white border-gray-200 hover:border-slate-400 text-gray-700"
                  }`}
                >
                  <div className="font-bold text-sm">{p.name}</div>
                  <div
                    className={`text-xs mt-0.5 font-mono ${
                      selectedPart === i ? "text-slate-300" : "text-gray-400"
                    }`}
                  >
                    {p.en}
                  </div>
                </button>
              ))}
            </div>
            {selectedPart !== null ? (
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-4">
                <div className="bg-slate-700 text-white px-5 py-3 flex items-center gap-3">
                  <span className="font-bold">{parts[selectedPart].name}</span>
                  <code className="text-slate-300 text-xs font-mono">
                    {parts[selectedPart].en}
                  </code>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                  {parts[selectedPart].levels.map(({ lv, desc, note }) => {
                    const c = lvColor(lv);
                    return (
                      <div key={lv} className={`p-4 ${c.bg}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`font-bold text-lg ${c.text}`}>
                            Lv{lv}
                          </span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full font-medium ${c.badge}`}
                          >
                            {["청결", "경미", "보통", "심각"][lv]}
                          </span>
                        </div>
                        <p className="text-sm text-gray-800 leading-relaxed">
                          {desc}
                        </p>
                        {note && (
                          <p className={`text-xs mt-2 font-medium ${c.text}`}>
                            {note}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-gray-200 p-8 text-center text-gray-400 mb-4">
                <div className="text-4xl mb-2">👆</div>
                <p className="text-sm">
                  위에서 부위를 선택하면 레벨별 판정 기준이 표시됩니다.
                </p>
              </div>
            )}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-3 border-b border-gray-100 bg-gray-50">
                <h3 className="font-bold text-gray-700 text-sm">
                  전체 부위 레벨 요약표
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-3 text-gray-600 font-semibold w-24">
                        부위
                      </th>
                      {[0, 1, 2, 3].map((lv) => (
                        <th
                          key={lv}
                          className={`text-left p-3 font-semibold ${
                            lvColor(lv).text
                          }`}
                        >
                          Level {lv}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {parts.map((p, i) => (
                      <tr
                        key={i}
                        className="border-t border-gray-50 hover:bg-gray-50 cursor-pointer"
                        onClick={() => setSelectedPart(i)}
                      >
                        <td className="p-3 font-medium text-gray-800">
                          {p.name}
                        </td>
                        {p.levels.map(({ lv, desc }) => (
                          <td
                            key={lv}
                            className="p-3 text-gray-600 leading-relaxed"
                          >
                            {desc.length > 30 ? desc.slice(0, 30) + "…" : desc}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ── 오염 타입 ── */}
        {tab === "types" && (
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="한글 또는 영문명으로 검색..."
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm flex-1 min-w-40 focus:outline-none focus:border-slate-400"
              />
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCatFilter(c)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    catFilter === c
                      ? "bg-slate-700 text-white"
                      : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left p-3 text-gray-600 font-semibold">
                        분류
                      </th>
                      <th className="text-left p-3 text-gray-600 font-semibold">
                        한글명
                      </th>
                      <th className="text-left p-3 text-gray-600 font-semibold">
                        영문명
                      </th>
                      <th className="text-left p-3 text-gray-600 font-semibold">
                        최소 레벨
                      </th>
                      <th className="text-left p-3 text-gray-600 font-semibold">
                        비고
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTypes.map((t, i) => {
                      const lc =
                        t.minLevel !== null ? lvColor(t.minLevel) : null;
                      return (
                        <tr
                          key={i}
                          className="border-t border-gray-50 hover:bg-gray-50"
                        >
                          <td className="p-3">
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full font-medium ${catColor(
                                t.category
                              )}`}
                            >
                              {t.category}
                            </span>
                          </td>
                          <td className="p-3 font-medium text-gray-800">
                            {t.ko}
                          </td>
                          <td className="p-3">
                            <code className="bg-slate-50 text-slate-700 px-2 py-1 rounded text-xs font-mono font-bold">
                              {t.en}
                            </code>
                          </td>
                          <td className="p-3">
                            {t.minLevel !== null ? (
                              <span
                                className={`text-xs px-2 py-1 rounded-full font-bold ${lc.badge}`}
                              >
                                Lv{t.minLevel}
                                {t.minLevel < 3 ? "+" : ""} 필수
                              </span>
                            ) : (
                              <span className="text-gray-400 text-xs">-</span>
                            )}
                          </td>
                          <td className="p-3 text-xs text-gray-500">
                            {t.note || "-"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {filteredTypes.length === 0 && (
                  <div className="p-8 text-center text-gray-400 text-sm">
                    검색 결과가 없습니다.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── 강제 레벨 ── */}
        {tab === "forced" && (
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <div className="flex items-start gap-2">
                <span className="text-xl">⚠️</span>
                <p className="text-red-800 text-sm leading-relaxed">
                  <strong>강제 레벨 규정</strong>은 발견 즉시 지정 레벨을 무조건
                  부여합니다. 판단 없이 그대로 적용합니다.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {FORCED_LEVELS.map((f, i) => (
                <div
                  key={i}
                  className={`rounded-xl border p-4 ${forcedColor(f.level)}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm">{f.ko}</span>
                    <span className="font-bold text-sm">{f.level}</span>
                  </div>
                  <code className="text-xs font-mono opacity-80">{f.en}</code>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
              <h3 className="font-bold text-gray-800 mb-3">
                자주 하는 실수 TOP 5
              </h3>
              <div className="space-y-3">
                {[
                  {
                    w: "시트 찢어짐 → Level 2",
                    r: "시트 찢어짐만 있으면 → Level 0",
                    reason: "물리적 파손은 오염 아님",
                  },
                  {
                    w: "깨끗한 핸들 → Level 0 + DUST 기록",
                    r: "Level 0은 메타데이터 기록 안 함",
                    reason: "Level 0은 메타 없음",
                  },
                  {
                    w: "'오래된 음료 자국' → OLD_BEVERAGE 입력",
                    r: "단어 사전의 BEVERAGE_STAIN 사용",
                    reason: "단어 사전 외 표현 금지",
                  },
                  {
                    w: "담배꽁초 1개 → Level 1",
                    r: "담배꽁초는 무조건 Level 2 이상",
                    reason: "강제 레벨 규정 미적용",
                  },
                  {
                    w: "더러운 부분만 작게 BBox",
                    r: "해당 부위 전체를 BBox로 감싸기",
                    reason: "BBox = 부위 전체",
                  },
                ].map((e, i) => (
                  <div
                    key={i}
                    className="flex gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100"
                  >
                    <div className="w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-red-600 line-through text-xs">
                          {e.w}
                        </span>
                        <span className="text-gray-400">→</span>
                        <span className="text-green-700 font-medium text-xs">
                          {e.r}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        이유: {e.reason}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
