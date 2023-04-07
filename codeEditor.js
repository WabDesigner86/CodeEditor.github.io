let html = document.getElementById('htmlCode')
let css = document.getElementById('cssCode')
let js = document.getElementById('jsCode')
let result = document.getElementById('result')

html.addEventListener('input', () => {
 result.contentDocument.body.innerHTML = html.value
})

css.addEventListener('input', () => {
 result.contentDocument.body.innerHTML += '<style>' + css.value + '</style>'
})


js.addEventListener('input', () => {
 result.contentWindow.eval(js.value)
})