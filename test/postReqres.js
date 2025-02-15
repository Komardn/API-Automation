const assert = require("assert");

describe("POST REQRES", function () {
    it("Create user should be success", async function () {
        this.timeout(10000);
        const url = "https://reqres.in/api/users";
        const requestData = {
            "id": 7,
            "email": "Cristiano.Ronaldo@reqres.in",
            "first_name": "Cristiano",
            "last_name": "Ronaldo",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        }
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        });
        const data = await response.json();
        console.log("response API : " + JSON.stringify(data, null, 1));
        assert.strictEqual(response.status, 201, "Status harus 201");
        assert.strictEqual(data.email, "Cristiano.Ronaldo@reqres.in");
        assert.strictEqual(data.first_name, "Cristiano");
        assert.strictEqual(data.last_name, "Ronaldo");
    });
});
