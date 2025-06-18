// 时钟应用JavaScript逻辑
class ClockApp {
    constructor() {
        this.is24Hour = true;
        this.init();
    }

    init() {
        this.setupElements();
        this.createClockMarks();
        
        // 延迟创建数字，确保CSS样式已应用
        setTimeout(() => {
            this.createClockNumbers();
        }, 100);
        
        this.updateClock();
        this.setupEventListeners();
        
        // 每秒更新一次时钟
        setInterval(() => {
            this.updateClock();
        }, 1000);

        console.log('时钟应用已启动');
    }

    setupElements() {
        this.elements = {
            digitalTime: document.getElementById('digital-time'),
            date: document.getElementById('date'),
            day: document.getElementById('day'),
            hourHand: document.getElementById('hour-hand'),
            minuteHand: document.getElementById('minute-hand'),
            secondHand: document.getElementById('second-hand'),
            modeToggle: document.getElementById('mode-toggle'),
            timezone: document.getElementById('timezone')
        };
    }

    createClockMarks() {
        const hourMarks = document.querySelector('.hour-marks');
        const minuteMarks = document.querySelector('.minute-marks');

        // 创建12个小时刻度
        for (let i = 0; i < 12; i++) {
            const mark = document.createElement('div');
            mark.className = 'hour-mark';
            mark.style.transform = `translateX(-50%) rotate(${i * 30}deg)`;
            hourMarks.appendChild(mark);
        }

        // 创建60个分钟刻度（排除小时刻度位置）
        for (let i = 0; i < 60; i++) {
            if (i % 5 !== 0) { // 不在小时刻度位置创建分钟刻度
                const mark = document.createElement('div');
                mark.className = 'minute-mark';
                mark.style.transform = `translateX(-50%) rotate(${i * 6}deg)`;
                minuteMarks.appendChild(mark);
            }
        }
    }

    createClockNumbers() {
        const clockNumbers = document.querySelector('.clock-numbers');
        const analogClock = document.querySelector('.analog-clock');
        const numbers = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
        
        numbers.forEach((number, index) => {
            const numberElement = document.createElement('div');
            numberElement.className = 'number';
            numberElement.textContent = number;
            
            // 动态获取时钟尺寸并计算合适的半径
            const clockSize = analogClock.offsetWidth || 220; // 默认220px
            const radius = clockSize * 0.42; // 时钟半径的42%位置放置数字
            
            // 计算数字位置
            const angle = (index * 30 - 90) * Math.PI / 180; // 转换为弧度，12点方向为0度
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            // 根据数字宽度和时钟大小调整偏移
            const baseOffset = clockSize / 44; // 基础偏移量与时钟大小成比例
            const offsetX = number.length > 1 ? baseOffset * 2 : baseOffset; // 双位数需要更大偏移
            const offsetY = baseOffset * 1.4;
            
            numberElement.style.left = `calc(50% + ${x}px - ${offsetX}px)`;
            numberElement.style.top = `calc(50% + ${y}px - ${offsetY}px)`;
            
            clockNumbers.appendChild(numberElement);
        });
    }

    updateClock() {
        const now = new Date();
        this.updateDigitalClock(now);
        this.updateAnalogClock(now);
        this.updateTimezone();
    }

    updateDigitalClock(now) {
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        let displayHours = hours;
        let ampm = '';

        if (!this.is24Hour) {
            ampm = hours >= 12 ? ' PM' : ' AM';
            displayHours = hours % 12;
            if (displayHours === 0) displayHours = 12;
        }

        const timeString = `${displayHours.toString().padStart(2, '0')}:${
            minutes.toString().padStart(2, '0')
        }:${seconds.toString().padStart(2, '0')}${ampm}`;

        this.elements.digitalTime.textContent = timeString;

        // 更新日期
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const date = now.getDate();
        this.elements.date.textContent = `${year}年${month}月${date}日`;

        // 更新星期
        const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        this.elements.day.textContent = days[now.getDay()];
    }

    updateAnalogClock(now) {
        const hours = now.getHours() % 12;
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        // 计算角度
        const secondAngle = seconds * 6; // 每秒6度
        const minuteAngle = minutes * 6 + seconds * 0.1; // 每分钟6度，加上秒的影响
        const hourAngle = hours * 30 + minutes * 0.5; // 每小时30度，加上分钟的影响

        // 应用旋转
        this.elements.secondHand.style.transform = `translate(-50%, -100%) rotate(${secondAngle}deg)`;
        this.elements.minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteAngle}deg)`;
        this.elements.hourHand.style.transform = `translate(-50%, -100%) rotate(${hourAngle}deg)`;
    }

    updateTimezone() {
        const now = new Date();
        const timezoneOffset = now.getTimezoneOffset();
        const offsetHours = Math.abs(Math.floor(timezoneOffset / 60));
        const offsetMinutes = Math.abs(timezoneOffset % 60);
        const offsetSign = timezoneOffset <= 0 ? '+' : '-';
        
        const timezoneString = `UTC${offsetSign}${offsetHours.toString().padStart(2, '0')}:${offsetMinutes.toString().padStart(2, '0')}`;
        this.elements.timezone.textContent = `时区: ${timezoneString}`;
    }

    setupEventListeners() {
        this.elements.modeToggle.addEventListener('click', () => {
            this.toggleTimeFormat();
        });

        // 键盘快捷键
        document.addEventListener('keydown', (event) => {
            if (event.key === 'F' || event.key === 'f') {
                this.toggleTimeFormat();
            }
        });

        // 窗口焦点事件
        window.addEventListener('focus', () => {
            this.updateClock();
        });

        // 页面可见性变化事件
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                this.updateClock();
            }
        });

        // 拖动事件处理
        this.setupDragEvents();
    }

    setupDragEvents() {
        const clockContainer = document.querySelector('.clock-container');
        
        // 拖动开始
        clockContainer.addEventListener('mousedown', (event) => {
            // 确保不是点击按钮
            if (event.target.closest('.mode-toggle')) {
                return;
            }
            
            clockContainer.style.cursor = 'grabbing';
            clockContainer.classList.add('dragging');
            
            // 添加拖动状态样式
            document.body.style.userSelect = 'none';
        });

        // 拖动结束
        document.addEventListener('mouseup', () => {
            clockContainer.style.cursor = 'move';
            clockContainer.classList.remove('dragging');
            document.body.style.userSelect = '';
        });

        // 双击切换置顶状态（如果有Electron API）
        clockContainer.addEventListener('dblclick', () => {
            this.toggleAlwaysOnTop();
        });

        // 右键菜单（显示简单信息）
        clockContainer.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            this.showContextInfo();
        });
    }

    toggleAlwaysOnTop() {
        // 通过全局快捷键触发
        const event = new KeyboardEvent('keydown', { key: 'F11' });
        document.dispatchEvent(event);
        
        // 显示状态反馈
        this.showStatusMessage('切换置顶状态');
    }

    showContextInfo() {
        const time = this.getCurrentTime();
        const message = `时钟挂件\n当前时间: ${time.hours}:${time.minutes.toString().padStart(2, '0')}\n双击切换置顶\nF11切换置顶\nESC退出`;
        
        // 创建临时提示
        this.showStatusMessage(message, 3000);
    }

    showStatusMessage(message, duration = 1500) {
        // 移除现有提示
        const existingToast = document.querySelector('.status-toast');
        if (existingToast) {
            existingToast.remove();
        }

        // 创建新提示
        const toast = document.createElement('div');
        toast.className = 'status-toast';
        toast.style.cssText = `
            position: absolute;
            top: -50px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 8px 12px;
            border-radius: 8px;
            font-size: 0.8rem;
            white-space: pre-line;
            text-align: center;
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 1000;
            pointer-events: none;
            border: 1px solid rgba(255, 255, 255, 0.2);
        `;
        toast.textContent = message;
        
        const clockContainer = document.querySelector('.clock-container');
        clockContainer.appendChild(toast);
        
        // 显示动画
        setTimeout(() => {
            toast.style.opacity = '1';
            toast.style.top = '-60px';
        }, 10);
        
        // 自动隐藏
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.top = '-50px';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, duration);
    }

    toggleTimeFormat() {
        this.is24Hour = !this.is24Hour;
        this.elements.modeToggle.textContent = this.is24Hour ? '切换12/24小时制' : '切换12/24小时制';
        this.updateClock();
        
        // 添加视觉反馈
        this.elements.modeToggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.elements.modeToggle.style.transform = 'scale(1)';
        }, 100);
    }

    // 获取当前时间信息（供外部调用）
    getCurrentTime() {
        const now = new Date();
        return {
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds(),
            date: now.getDate(),
            month: now.getMonth() + 1,
            year: now.getFullYear(),
            day: now.getDay(),
            timestamp: now.getTime()
        };
    }

    // 设置时区（未来扩展功能）
    setTimezone(timezone) {
        // 这里可以实现时区切换功能
        console.log(`时区切换到: ${timezone}`);
    }
}

// 页面加载完成后启动时钟应用
document.addEventListener('DOMContentLoaded', () => {
    window.clockApp = new ClockApp();
});

// 如果已经加载完成，立即启动
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.clockApp = new ClockApp();
    });
} else {
    window.clockApp = new ClockApp();
}
