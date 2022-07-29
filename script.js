let selectors = document.querySelectorAll('.selector');
let texts = document.querySelectorAll('.text-content');
let opcao

selectors.forEach(function (s) {
    s.addEventListener("click", () => {
        selectors.forEach(function (s) {s.classList.remove("active")})
        s.classList.add("active")
        console.log(s)
        texts.forEach(function (t) {t.classList.remove("show")})
        switch (s.id) {
            case "selector1":
                opcao = 0
            break;
            case "selector2":
                opcao = 1
            break;
            case "selector3":
                opcao = 2
            break;
        }
            texts[opcao].classList.add('show')
    })
})