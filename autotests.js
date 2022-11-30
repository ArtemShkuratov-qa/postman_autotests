pm.test("Автотест статус код: 200", function () {
    pm.response.to.have.status(200);
});

pm.test("В ответе есть строка", function () {
    pm.expect(pm.response.text()).to.include("height");
});

pm.test("Ответ в пределах 15 секунд", function () {
    pm.expect(pm.response.responseTime).to.be.below(15000);
});

pm.test("Строка сервер присутствует", function () {
    pm.response.to.have.header("Server");
});

pm.test("В статусе присутствует строка ОК", function () {
    pm.response.to.have.status("OK");
});

pm.test("Проверка значения", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.eye_color).to.eql("blue-gray");
});

