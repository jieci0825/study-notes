import img1Url from './assets/1.png'
// import img1Url from './assets/1.png?raw'
// 在 vite 中导入的时候，如果给后面加上 ?raw 就会得到图片的源数据，即二进制数据

const img = document.createElement('img')
img.src = img1Url
img.style.width = '500px'
img.style.height = '300px'
document.body.appendChild(img)
