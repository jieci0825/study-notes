/**
 * 得到所有的省份
 */
export async function getProvinces() {
	return await fetch('/api/local').then(resp => resp.json())
}

/**
 * 根据省份id获取城市
 */

export async function getCitys(id) {
	return await fetch(`/api/local?parentId=${id}`).then(resp => resp.json())
}
