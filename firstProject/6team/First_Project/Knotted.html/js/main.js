

$(function() {

	const $category = document.querySelector('#header div.category');
	//const $navigation_index = document.querySelector('div.section_navigation .index');

	$('#fullpage').fullpage({
		//options here
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5','section6', 'section7'],
		navigationTooltips: ['knotted', 'donut', 'dessert', 'goods', 'cafe', 'event', 'about'],
		showActiveTooltip: true,
		slidesNavigation: true,
		autoScrolling:true,
		scrollHorizontally: true,
        navigation: true,
        navigationPosition:'right',
		afterLoad: function(origin, destination, direction, trigger) {
			//category 폰트 색상 변경
			const section = document.querySelector(`#o_${origin}`);
			if(section && section.dataset) {
				$category.style.color = section.dataset.fontColor;
				//$navigation_index.style.color = section.dataset.fontColor;
			}

		}
	});


	function ColorToHex(color) {
		var hexadecimal = color.toString(16);
		return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
	  }
	  
	  function ConvertRGBtoHex(red, green, blue) {
		return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
	  }

	  function getTextColorByBackgroundColor(hexColor) {
		const c = hexColor.substring(1)      // 색상 앞의 # 제거
		const rgb = parseInt(c, 16)   // rrggbb를 10진수로 변환
		const r = (rgb >> 16) & 0xff  // red 추출
		const g = (rgb >>  8) & 0xff  // green 추출
		const b = (rgb >>  0) & 0xff  // blue 추출
		const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b // per ITU-R BT.709
		// 색상 선택
		return luma < 127.5 ? "white" : "black" // 글자색이
	}
});