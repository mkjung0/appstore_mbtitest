const questions = [
    // E/I 지표 질문
    {
        question: "새로운 상품 아이디어가 떠올랐을 때, 나는...",
        answers: [
            "주변 지인·직원들과 아이디어 회의를 하며 즉각적으로 발전시킨다",
            "혼자 리서치하고 구상한 뒤, 완성된 기획을 차분히 내놓는다"
        ],
        type: "EI"
    },
    {
        question: "고객 문의가 폭주할 때, 나는...",
        answers: [
            "전화 상담, 실시간 채팅 등 직접 소통으로 재빠르게 해결한다",
            "FAQ, 이메일 등 정리된 문서형 응대를 선호한다"
        ],
        type: "EI"
    },
    {
        question: "매장(오프라인) 행사나 네트워킹 기회가 생기면...",
        answers: [
            "직접 가서 사람들과 부딪히며 새로운 기회를 만드는 게 최고!",
            "온라인 정보나 후기만 있으면 충분해. 굳이 현장까지 갈 필요는 없을 듯"
        ],
        type: "EI"
    },
    // S/N 지표 질문
    {
        question: "상품 상세 페이지를 작성할 때, 나는...",
        answers: [
            "제품 스펙·수치·실제 사진 등 구체적 정보를 꼼꼼히 기재한다",
            "브랜드 스토리·감성·이미지 등 큰 콘셉트를 강조한다"
        ],
        type: "SN"
    },
    {
        question: "이벤트를 기획할 때, 나는...",
        answers: [
            "사례 분석과 데이터를 기반으로 철저히 기획한다",
            "새로운 아이디어를 떠올려 일단 시도해 보고, 반응을 본다"
        ],
        type: "SN"
    },
    {
        question: "제품 홍보 방식을 고민할 때, 나는...",
        answers: [
            "실제 후기·리뷰 등 현실적인 정보를 어필해 신뢰를 쌓는다",
            "'이 제품은 라이프스타일을 바꿀 거야!' 같은 비전·트렌드로 승부한다"
        ],
        type: "SN"
    },
    // T/F 지표 질문
    {
        question: "매출이 저조할 때, 가장 먼저 하는 행동은?",
        answers: [
            "엑셀·통계·광고 로그 등 숫자 데이터부터 분석한다",
            "고객과 직원의 감정·분위기 등 사람 문제부터 살핀다"
        ],
        type: "TF"
    },
    {
        question: "가격을 책정할 때, 나는...",
        answers: [
            "원가·마진·경쟁사 가격 등 합리적 계산이 우선이다",
            "브랜드 이미지·고객 감정 등 심리적 가치가 더 중요하다고 본다"
        ],
        type: "TF"
    },
    {
        question: "직원(또는 파트너) 간 의견 충돌이 생기면...",
        answers: [
            "서로의 입장과 근거를 논리적으로 따져 결론을 낸다",
            "양쪽을 배려하고, 감정을 조율해 공감대를 찾는다"
        ],
        type: "TF"
    },
    // J/P 지표 질문
    {
        question: "하루 스케줄을 세울 때, 나는...",
        answers: [
            "일정표와 체크리스트를 미리 만들어놓고 체계적으로 진행해야 편하다",
            "대략적인 방향만 잡고, 상황에 맞춰 융통성 있게 움직이는 편이다"
        ],
        type: "JP"
    },
    {
        question: "신제품 론칭 일정을 잡을 때, 나는...",
        answers: [
            "정확한 마감일을 정한 뒤, 그 시점에 맞춰 꼼꼼하게 준비한다",
            "일단 아이디어를 모으고, 여건이 맞을 때 자연스럽게 출시한다"
        ],
        type: "JP"
    },
    {
        question: "갑작스런 문제(재고, 배송 사고 등)가 터지면...",
        answers: [
            "평소 만든 매뉴얼이나 프로세스를 따라 즉시 처리한다",
            "즉흥으로 우선 수습한 뒤, 새로운 방법을 찾거나 수정한다"
        ],
        type: "JP"
    }
];

// MBTI 16가지 유형별 설명
const types = {
    "ENTJ": {
        name: "결단력 만렙, 빅픽처 전략가",
        description: "대담한 목표와 리더십으로 효율적 성과를 내는 리더형이며, 체계적인 데이터 분석도 놓치지 않는 당신!",
        emoji: "👑",
        apps: [
            {
                name: "원해",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/21387"
            },
            {
                name: "라플라스",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/10905"
            }
        ]
    },
    "ENTP": {
        name: "마케팅에 최적화된 아이디어 뱅크",
        description: "자유로운 발상과 토론을 즐기며, 독창적인 마케팅이나 신사업 구상을 잘 해내는 당신!",
        emoji: "💡",
        apps: [
            {
                name: "코드앤버터",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/19961"
            },
            {
                name: "이프두 마케팅 자동화",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/1503"
            }
        ]
    },
    "ENFJ": {
        name: "사람을 이끄는 따뜻한 리더",
        description: "포용력을 겸비해, 팀·고객을 조화롭게 만들고 브랜드 가치를 높이는 스타일의 당신!",
        emoji: "🤝",
        apps: [
            {
                name: "채널톡",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/259"
            },
            {
                name: "알파리뷰",
                imageExt: "jpg",
                url: "https://store.cafe24.com/kr/apps/452"
            }
        ]
    },
    "ENFP": {
        name: "열정 폭발, SNS 마케팅 장인",
        description: "에너지 넘치는 이벤트·스토리텔링으로 고객과 활발히 소통하며 팬심까지 확보하는 당신! (조금 관종이기도..)",
        emoji: "✨",
        apps: [
            {
                name: "인스타그램 쇼핑 위젯",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/4225"
            },
            {
                name: "쇼츠24",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/23650"
            }
        ]
    },
    "ESTJ": {
        name: "체계적 실행력, 꼼꼼한 실무 관리자",
        description: "현실감각+조직력을 갖춰, 반복적인 업무 프로세스를 효율적으로 관리하는 당신!",
        emoji: "📋",
        apps: [
            {
                name: "경리나라",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/5804"
            },
            {
                name: "센드맨",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/20345"
            }
        ]
    },
    "ESTP": {
        name: "즉흥 돌파력, 행동파",
        description: "문제 상황에 빠르게 대처하며, 오프라인 이벤트·라이브 커머스 등에 강점 많은 당신!",
        emoji: "🚀",
        apps: [
            {
                name: "챗봇나우",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/14882"
            },
            {
                name: "LIVE24",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/5339"
            }
        ]
    },
    "ESFJ": {
        name: "따뜻한 케어와 팀워크, 고객 만족 우선",
        description: "섬세한 소통과 분위기 메이킹으로 고객과 동료를 잘 챙기고 브랜드의 서비스 품질을 높이는 당신!",
        emoji: "💝",
        apps: [
            {
                name: "채널톡",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/259"
            },
            {
                name: "카카오 알림톡",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/11595"
            }
        ]
    },
    "ESFP": {
        name: "유쾌함으로 분위기 주도하는 이벤트 메이커",
        description: "사교적이고 에너지가 넘쳐서, 즐거운 프로모션·행사로 고객의 시선을 사로잡을 줄 아는 당신!",
        emoji: "🎉",
        apps: [
            {
                name: "버즈빌",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/26559"
            },
            {
                name: "키키미션즈",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/24225"
            }
        ]
    },
    "INTJ": {
        name: "분석으로 미래를 설계하는 냉철한 전략가",
        description: "논리적이고 장기적 관점에 능하고, 큰 그림을 치밀하게 구상·실행하며 업무의 효율성이 중요한 당신!",
        emoji: "🎯",
        apps: [
            {
                name: "데이터라이즈",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/11583"
            },
            {
                name: "센드맨",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/20345"
            }
        ]
    },
    "INTP": {
        name: "호기심 많은 논리 탐구자",
        description: "개념·이론을 깊이 파고들어 독창적 방향성을 제시, 효율적 운영 아이디어에 재능있는 당신!",
        emoji: "🔍",
        apps: [
            {
                name: "원해",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/21387"
            },
            {
                name: "페이액션",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/21040"
            }
        ]
    },
    "INFJ": {
        name: "깊은 통찰의 가치 지향, 조용한 이상주의",
        description: "브랜드 철학·내면적 비전을 중시하며, 쇼핑몰의 장기적 목표를 설계해 차분히 실현해나가는 당신!",
        emoji: "🌟",
        apps: [
            {
                name: "카페24 PRO",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/26155"
            },
            {
                name: "스냅박스 AI",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/21066"
            }
        ]
    },
    "INFP": {
        name: "감성과 진정성을 추구하는 로맨티스트",
        description: "공감을 이끄는 스토리텔링과 따뜻한 고객 소통으로 진정성을 표현하는 당신!",
        emoji: "🌸",
        apps: [
            {
                name: "코드앤버터",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/19961"
            },
            {
                name: "에이스카운터 CRM",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/26140"
            }
        ]
    },
    "ISTJ": {
        name: "원칙을 중시하는 꼼꼼한 실무자",
        description: "규율과 절차를 따르며, 재고·회계관리에 강점이 있어 체계적이고 안정적인 운영을 선호하는 당신!",
        emoji: "⚖️",
        apps: [
            {
                name: "카페24 PRO",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/26155"
            },
            {
                name: "이지샵 자동장부",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/22029"
            }
        ]
    },
    "ISTP": {
        name: "실용적이고 융통성 있는 문제 해결사",
        description: "필요할 때만 정확히 움직이는 효율적 성향으로 실용적이며, 돌발 상황에도 유연히 대응 가능한 당신!",
        emoji: "🛠️",
        apps: [
            {
                name: "페이액션",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/21040"
            },
            {
                name: "080 수신거부 서비스",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/2474"
            }
        ]
    },
    "ISFJ": {
        name: "헌신과 세심함으로 신뢰를 쌓는 서포터",
        description: "고객을 세심하고 따뜻하게 케어하며, 섬세한 운영으로 안정적 서비스 품질 유지하는 당신!",
        emoji: "🤲",
        apps: [
            {
                name: "1초 회원가입",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/4964"
            },
            {
                name: "상세페이지 플러스 위젯",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/14838"
            }
        ]
    },
    "ISFP": {
        name: "자유로운 감성의 아티스트",
        description: "감각적인 디자인·감성 표현에 능하며, 브랜드 개성을 잃지 않고 섬세히 운영하는 당신!",
        emoji: "🎨",
        apps: [
            {
                name: "스냅박스 AI",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/21066"
            },
            {
                name: "스토리북",
                imageExt: "png",
                url: "https://store.cafe24.com/kr/apps/15690"
            }
        ]
    }
};

// 현재 질문 인덱스와 사용자 응답을 저장할 변수들
let currentQuestion = 0;
let userResponses = {
    'E': 0, 'I': 0,
    'S': 0, 'N': 0,
    'T': 0, 'F': 0,
    'J': 0, 'P': 0
};

// 테스트 시작 함수
function startTest() {
    document.getElementById('start').classList.remove('active');
    document.getElementById('question').classList.add('active');
    showQuestion();
}

// 질문 표시 함수
function showQuestion() {
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        document.getElementById('questionText').textContent = question.question;
        document.querySelector('.progress').style.width = `${(currentQuestion + 1) / questions.length * 100}%`;
        document.querySelector('.progress-text').textContent = `${currentQuestion + 1}/${questions.length}`;
        
        const answersHtml = question.answers.map((answer, index) => 
            `<button onclick="selectAnswer(${index})">${answer}</button>`
        ).join('');
        document.querySelector('.answers').innerHTML = answersHtml;
    }
}

// 답변 선택 처리 함수
function selectAnswer(answerIndex) {
    const question = questions[currentQuestion];
    const type = question.type;
    
    if (answerIndex === 0) {
        userResponses[type[0]]++;
    } else {
        userResponses[type[1]]++;
    }
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// MBTI 결과 계산 함수
function calculateResult() {
    let mbti = '';
    // 각 지표별 점수 계산을 명확하게 하기 위해 변수로 분리
    const E = userResponses['E'];
    const I = userResponses['I'];
    const S = userResponses['S'];
    const N = userResponses['N'];
    const T = userResponses['T'];
    const F = userResponses['F'];
    const J = userResponses['J'];
    const P = userResponses['P'];
    
    // 디버깅을 위한 로그
    console.log('E:', E, 'I:', I);
    console.log('S:', S, 'N:', N);
    console.log('T:', T, 'F:', F);
    console.log('J:', J, 'P:', P);

    mbti += E > I ? 'E' : 'I';
    mbti += S > N ? 'S' : 'N';
    mbti += T > F ? 'T' : 'F';
    mbti += J > P ? 'J' : 'P';

    // 최종 MBTI 결과 로그
    console.log('Final MBTI:', mbti);
    return mbti;
}

// 결과 표시 함수
function showResult() {
    document.getElementById('question').classList.remove('active');
    document.getElementById('result').classList.add('active');
    
    // MBTI 결과를 한 번만 계산하고 저장
    const mbti = calculateResult();
    const type = types[mbti];
    window.finalMbti = mbti;
    window.finalType = type;
    
    console.log('Calculated MBTI:', mbti);  // 디버깅용
    
    // 결과 컨테이너를 미리 비우기
    document.getElementById('resultType').innerHTML = '';
    document.getElementById('resultDescription').innerHTML = '';
    document.querySelector('.app-list').innerHTML = '';
    
    setTimeout(() => {
        const headerText = document.querySelector('.result-header h1');
        headerText.textContent = '';  // 기존 텍스트 제거
        const text = "당신은...";
        let index = 0;
        headerText.innerHTML = '<span class="typing-animation"></span>';
        const typingSpan = headerText.querySelector('.typing-animation');
        
        // 한 글자씩 타이핑
        const typing = setInterval(() => {
            typingSpan.textContent += text[index];
            index++;
            if (index >= text.length) {
                clearInterval(typing);
                // 타이핑 완료 후 저장된 결과 표시
                setTimeout(() => {
                    showResultContent(mbti, type);
                }, 500);
            }
        }, 150);
    }, 500);
}

// 결과 내용을 표시하는 함수 분리
function showResultContent(mbti, type) {
    console.log('Showing result for:', mbti);  // 디버깅용
    
    // 결과를 한 번에 설정
    const resultContent = `
        <div class="mbti-type typing-animation-fade">${mbti} ${type.emoji}</div>
        <div class="mbti-name typing-animation-fade">${type.name}</div>
    `;
    document.getElementById('resultType').innerHTML = resultContent;
    
    const descriptionContent = `
        <p class="typing-animation-fade">${type.description}</p>
    `;
    document.getElementById('resultDescription').innerHTML = descriptionContent;
    
    setTimeout(() => {
        // 앱 리스트도 한 번에 설정
        const appList = document.querySelector('.app-list');
        const appsContent = type.apps.map(app => `
            <div class="app typing-animation-fade" onclick="window.open('${app.url}', '_blank')">
                <div class="app-image" style="background-image: url('./images/apps/${app.name}.${app.imageExt}')"></div>
                <h4>${app.name}</h4>
            </div>
        `).join('');
        appList.innerHTML = appsContent;
    }, 1000);
}

// 테스트 다시하기 함수
function restartTest() {
    currentQuestion = 0;
    userResponses = {
        'E': 0, 'I': 0,
        'S': 0, 'N': 0,
        'T': 0, 'F': 0,
        'J': 0, 'P': 0
    };
    document.getElementById('result').classList.remove('active');
    document.getElementById('start').classList.add('active');
}

// 앱스토어로 이동
function goToAppStore() {
    window.open('https://store.cafe24.com/kr/apps', '_blank');
}

// 결과 공유하기
function shareResult() {
    const mbti = window.finalMbti;
    const type = window.finalType;
    const text = `나의 쇼핑몰 운영 스타일은 ${mbti} : ${type.name}입니다!\n테스트 하러가기 👉 ${window.location.href}`;
    
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('링크가 복사되었습니다!');
        })
        .catch(() => {
            alert('링크 복사에 실패했습니다.');
        });
}