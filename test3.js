// for(let i=0; i<$('.tab-button').length; i++) {
//     $('.tab-button').eq(i).on('click',() => {
//         $('.tab-button').removeClass('orange');
//         $('.tab-button').eq(i).addClass('orange');
//         $('.tab-content').removeClass('show');
//         $('.tab-content').eq(i).addClass('show');
//     })
// }

// 위에 코드보다 이벤트 리스너를 적게 쓰기때문에 램을 덜 잡아먹기때문에 더 좋은코드
// 위에 코드는 각 .list안에있는 .tab-button에 하나씩 이벤트를 줬지만
// 아래 코드는 .list자체에 코드를주고 사용자가 실제로누른것과 쿼리셀럭터를 비교하여
// 실행할 이벤트를 찾음 이벤트3개 -> 1개

$('.list').click((e) => {
    // if(e.target == document.querySelectorAll('.tab-button')[0]) {
    //     탭열기(0)
    // }

    탭열기(e.target.dataset.id)

})

function 탭열기(i) {
    $('.tab-button').eq(i).on('click',() => {
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(i).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(i).addClass('show');
    })
}


// HTML 태그에 정보숨기기 가능
// data-자료이름="값"
// EX)  <li class="tab-button" data-id="0">Products</li>
// 출력하기
// document.queryselector('.tab-button').dataset.id
// 한개의 HTML태그에 여러개의 dataset을 넣을수있다.


// 함수로 축약할 때 변수있으면 파라미터로 바꾸면 좋다
// data-자료이름="값"으로 값을 클래스에 넣어둘수있다.
// 이벤트리스너 1개써도 개발 가능할수도있다.