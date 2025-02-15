const assert = require("assert");

describe("GET REQRES", function () {
    it("Get user should be success", async function () {
        this.timeout(10000);
        const response = await fetch(
            "https://reqres.in/api/users/2"
        );
        const dataResponse = await response.json();
        assert.strictEqual(response.status, 200);
        assert.strictEqual(dataResponse.data.first_name, "Janet");
        console.log("response API : " + JSON.stringify(dataResponse, null, 1));
    });

    it("Get invalid user should be error", async function () {
        this.timeout(10000);
        const response = await fetch(
            "https://reqres.in/api/users/40000"
        );
        assert.strictEqual(response.status, 404);
    });
});
