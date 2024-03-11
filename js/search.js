// 控制搜索列表，显示/隐藏
const searchList = document.querySelector('.search-list')
// 输入框内容改变时，有城市关键字出现列表，没有则不出现列表
document.querySelector('.search-city').addEventListener('input', e => {
  if (e.target.value.length > 0) {
    searchList.classList.add('show')
  } else {
    searchList.classList.remove('show')
  }
})
// 输入框失焦，隐藏搜索列表
document.querySelector('.search-city').addEventListener('blur', e => {
  // 延迟消失，保证点击获取到城市code后，再隐藏下拉列表
  setTimeout(() => {
    searchList.classList.remove('show')
  }, 500)
})
// 输入框聚焦，显示搜索列表
document.querySelector('.search-city').addEventListener('focus', e => {
  if (e.target.value.length > 0) {
    searchList.classList.add('show')
  }
})