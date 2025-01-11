document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const message = document.getElementById('message');

  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 获取输入值并去除前后空格
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // 清除之前的消息
    message.textContent = '';
    message.style.color = '';

    // 基本验证
    if (!username || !password) {
      showMessage('用户名和密码不能为空', 'error');
      return;
    }

    // 模拟登录请求
    simulateLogin(username, password);
  });

  function simulateLogin(username, password) {
    // 模拟网络延迟
    setTimeout(() => {
      // 模拟登录成功条件
      if (username === 'admin' && password === '123456') {
        showMessage('登录成功！正在跳转...', 'success');
        // 模拟跳转
        setTimeout(() => {
          window.location.href = 'https://github.com/shanhu128/shanhu128.git';
        }, 1500);
      } else {
        showMessage('用户名或密码错误', 'error');
      }
    }, 800);
  }

  function showMessage(text, type) {
    message.textContent = text;
    message.style.color = type === 'error' ? 'var(--error-color)' : 'var(--secondary-color)';
    
    // 添加动画
    message.style.opacity = 0;
    message.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      message.style.opacity = 1;
      message.style.transform = 'translateY(0)';
    }, 10);
  }
});
