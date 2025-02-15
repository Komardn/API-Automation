const assert = require("assert");

describe("PATCH REQRES", function () {
    it("Update user should be success", async function () {
        this.timeout(10000);
        const userId = 3;
        const url = "https://reqres.in/api/users/3";
        const requestData = {
            "first_name": "Komar",
        };

        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        });

        const data = await response.json();
        console.log("response API : " + JSON.stringify(data, null, 1));

        assert.strictEqual(response.status, 200, "Status harus 200");
        assert.strictEqual(data.first_name, "Komar");
    });
});
