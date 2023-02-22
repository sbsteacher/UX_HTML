// 이미지 및 리소스 로드 후 코드실행
window.onload = () => {

    // aos 라이브러리
    AOS.init();

    // waypoint 활용
    let $goTop = document.querySelector(".gotop");
    // 스크롤 위치에 따른 div 비교대상
    let $visual = document.querySelector(".service");
    let $footer = document.querySelector('.footer-copyright');

    new Waypoint({
        element: $visual,
        handler: function (dir) {
            // dir의 값에 따라 처리
            if (dir == 'down') {
                $goTop.classList.add('active');
            }
            else {
                $goTop.classList.remove('active');
            }
        },
        // 해당 div의 화면 상에 얼마나 보이는가
        offset: '50%'
    });

    new Waypoint({
        element: $footer,
        handler: function (dir) {
            if(dir == 'down') {
                $goTop.classList.add('footerbottom');
            }
            else {
                $goTop.classList.remove('footerbottom');
            }
        },
        offset: '100%'
    });

    $goTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 코드 실행 작성
    let $htmlTag = document.querySelector('html');
    // 모바일 메뉴 버튼 처리
    // 1. 모바일 버튼을 찾아서 저장한다.
    let $mbBt = document.querySelector('.mb-bt');
    // 2. 모바일 메뉴를 찾아서 저장한다.
    let $mbNav = document.querySelector('.mb-nav');
    // 3. 로고를 찾아서 저장한다.
    let $logo = document.querySelector('.logo');
    // 4. 헤더를 찾아서 저장한다.
    let $header = document.querySelector('.header');
    // 5. gnb > li > a
    let $gnbA = document.querySelectorAll('.gnb > li > a');
    // 6. 모바일 버튼의 span 저장
    let $mbBtSpan = $mbBt.querySelectorAll('span');

    // 클릭 시 active 클래스를 추가
    $mbBt.addEventListener('click', () => {
        $htmlTag.classList.toggle('active');
        $mbBt.classList.toggle('active');
        $logo.classList.toggle('active-blue');
        $mbNav.classList.toggle('active');
        $mbBtSpan.forEach(item => {
            item.classList.add('active');
        });
    });

    // 화면 리사이징 처리
    window.addEventListener('resize', () => {
        // window 화면 안쪽 너비 체크
        let width = window.innerWidth;
        if (width > 1080) {
            $htmlTag.classList.remove('active');
            $mbBt.classList.remove('active');
            $mbNav.classList.remove('active');

            // 스크롤이 되었는지 안 되었는지에 따라 분리 처리
            let scT = window.document.documentElement.scrollTop;
            if (scT > 100) {
                $mbBtSpan.forEach(item => {
                    item.classList.add('active');
                });
            }
            else {
                $mbBtSpan.forEach(item => {
                    item.classList.remove('active');
                });
            }
            $logo.classList.remove('active-blue');
        }
    });

    // window 스크롤 처리
    window.addEventListener('scroll', () => {
        let scT = window.document.documentElement.scrollTop;
        // 조금이라도 스크롤을 했다면 처리한다.
        if (scT > 100) {
            $header.classList.add('active');
            $logo.classList.add('active');
            $gnbA.forEach(item => {
                item.classList.add('active');
            });
            $mbBtSpan.forEach(item => {
                item.classList.add('active');
            });
        }
        else {
            $header.classList.remove('active');
            $logo.classList.remove('active');
            $gnbA.forEach(item => {
                item.classList.remove('active');
            });
            $mbBtSpan.forEach(item => {
                item.classList.remove('active');
            });
        }
    });

    // 화면 reload 시 처리
    let scT = window.document.documentElement.scrollTop;
    if (scT > 100) {
        $header.classList.add('active');
        $logo.classList.add('active');
        $gnbA.forEach(item => {
            item.classList.add('active');
        });
        $mbBtSpan.forEach(item => {
            item.classList.add('active');
        });
    }

    // data.json 외부연동 ***

    // 1. XMLHttpRequest 활용
    const xhttp = new XMLHttpRequest();
    // data.json이 불러들여졌는지 검사 후 완료 시 실행
    xhttp.onreadystatechange = e => {
        const req = e.target;
        if (req.readyState === XMLHttpRequest.DONE) {
            console.log(req.response);
            // response : 결과값
            const dataArr = JSON.parse(req.response);
            console.log(dataArr);
        }
    };
    xhttp.open("GET", "data.json");
    // xhttp.send();

    // 통신
    // Network -> Fetch/XHR -> Headers -> Request, status 확인
    // status code : 200 단위 (정상 실행), 400 단위 (Request 오류), 500 단위 (서버 오류)

    // 2. Fetch 활용 : 아래 구문을 준수하자.
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            // data를 활용한다.
            // 데이터를 외부 변수에 저장한다. (스코프)
            // 글로벌 변수에다가 로컬 변수를 담아 내보낸다.
            visualData = data.visual;

            // 데이터 로딩 후 데이터 개수 만큼 li 태그를 만든다.
            // 만들어진 글자를 모아서 swUl 태그 안에 innerHTML 한다.
            let html = '';
            let count = 1;
            visualData.forEach(item => {
                html += `<li>${count++}</li>`;
            });
            swUl.innerHTML = html;
            // js가 li를 참조할 수 있도록 적용
            swList = document.querySelectorAll('.swvisual-list li');

            // li 태그를 클릭해서 슬라이드 이동하기
            swListShow();

            setTimeout(function(){
                showVT(visualData[0], 0);                               
            }, 20);

            setTimeout(function() {
                initSwiper();
            }, 2000);
        })
        .catch(err => {
            // catch: 실패했을 때
            console.log(err);
        });

    let visualData;

    // 화면에 데이터를 출력하는 함수
    const swTitle = document.querySelector('.swvisual-title');
    const swTxt = document.querySelector('.swvisual-txt');
    const swLink = document.querySelector('.swvisual-link');
    const swUl = document.querySelector('.swvisual-list');

    // li는 동적(데이터 로딩 후)으로 만들어야 한다.
    let swList;

    // title 내용 보여주기
    function showVT(data, idx) {
        swTitle.innerHTML = data.title;
        swTxt.innerHTML = data.txt;
        if (data.link === 'nothing') {
            swLink.classList.add('active');
        }
        else {
            swLink.classList.remove('active');
        }
        changeBar(idx);
    }
    // 포커스 라인 애니메이션 실행 함수
    function changeBar(index) {
        swList.forEach((item, idx) => {            
            item.classList.toggle('active', index === idx);
        });
    }

    // li 클릭 시 슬라이드 변경 함수
    function swListShow() {
        swList.forEach((item, idx) => {
            // 클릭 시 슬라이드 변경
            item.addEventListener('click', () => {
                // swVisual 슬라이드를 변경 (API 참조)
                swVisual.slideToLoop(idx, 500, false); // loop 속성을 사용할 경우
                // swVisual.slideToLoop(번호, 속도, 효과);
                // 아닌 경우 slideTo();
            });
        });
    }

    let swVisual = null;
    function initSwiper() {
        swVisual = new Swiper('.swvisual', {
            effect: 'fade',
            loop: true,
            speed: 2000,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,                
            },
            navigation: {
                prevEl: '.swvisual-prev',
                nextEl: '.swvisual-next',
            }
        });        
    
        // 슬라이드가 변경될 때마다 하고 싶은 일 진행
        swVisual.on('slideChange', () => {            
            showVT(visualData[swVisual.realIndex], swVisual.realIndex);
        });       
    }
    // visual slide
    

    // 카테고리 슬라이드
    new Swiper('.swcategory', {
        slidesPerView: 1,
        breakpoints: {
            480: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });

    // 안내창 기능
    let $categoryPop = document.querySelector('.category-pop');
    $categoryPop.addEventListener('click', () => {
        $categoryPop.classList.add('active');
    });

};