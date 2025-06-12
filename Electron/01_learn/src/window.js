const os = require('os')

const pre = document.querySelector('.box>pre')

const systemInfo = {
    系统架构: os.arch(),
    系统类型: os.type(),
    系统版本: os.version(),
    系统核心数: os.cpus().length,
    系统主机名: os.hostname(),
    系统内存: os.totalmem(),
    系统剩余内存: os.freemem()
}

pre.textContent = JSON.stringify(systemInfo, null, 2)
