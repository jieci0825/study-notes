import { getProvinces } from '@/utils/areaService'

const provincesList = document.querySelector('.provinces')
getProvinces().then(res => {
	provincesList.innerHTML = res
		.map(
			item =>
				`<li><a href="/detail.html?provinceId=${item.provinceId}&name=${item.areaName}" target="_blank">${item.areaName}</a></li>`
		)
		.join('')
})
