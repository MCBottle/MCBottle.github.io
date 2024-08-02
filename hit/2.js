//基本赋值
  var isPressed = false;
  var sound;
  var clickcount = 0;
  
  
  function handlePress(event) {
    // 阻止默认的触摸行为，例如滚动
    event.preventDefault();

    if (isPressed) {
      // 如果已经处于按下状态，则不做任何操作
      return;
    }
  
    clickcount = clickcount + 1;
    var listcount = (clickcount - 1) % soundslist.length;
    var sound = new Audio(soundslist[listcount])
    

    console.log(listcount);
    console.log(clickcount);
    console.log(sound);
    // 播放声音
    if (!sound.paused) {
        sound.pause(); // 暂停当前播放的声音
        sound.currentTime = 0;
      }
    sound.play();
    
    // 切换图片显示状态
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');
    image1.classList.add('hidden');
    image2.classList.remove('hidden');

    // 更新状态
    isPressed = true;
  }

  function handleRelease() {
    if (!isPressed) {
      // 如果没有处于按下状态，则不做任何操作
      return;
    }

    // 恢复图片显示状态
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');
    image1.classList.remove('hidden');
    image2.classList.add('hidden');

    // 更新状态
    isPressed = false;
  }

  // 绑定事件处理程序
  document.addEventListener('mousedown', handlePress);
  document.addEventListener('mouseup', handleRelease);
  document.addEventListener('touchstart', handlePress, { passive: false });
  document.addEventListener('touchend', handleRelease, { passive: false });
