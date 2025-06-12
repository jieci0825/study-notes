import { getCitys } from '@/utils/areaService'
import queryString from 'query-string'

const parsed = queryString.parse(location.search)

const dl = document.querySelector('dl')

getCitys(parsed.provinceId).then(res => {
	dl.innerHTML = `<dt>管辖城市</dt>${res.map(item => `<dd>${item.areaName}</dd>`).join('')}`
})
