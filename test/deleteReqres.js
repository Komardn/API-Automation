const assert = require("assert");

describe("DELETE REQRES", function () {
    it("Delete user should be success", async function () {
        const userId = 1;
        const response = await fetch("https://reqres.in/api/users/1", {
            method: "DELETE",
        });
        assert.strictEqual(response.status, 204, "Status harus 204 No Content");
        const dataResponse = await fetch("https://reqres.in/api/users/1");
        assert.strictEqual(dataResponse.status, 200, "Pengguna tidak ditemukan");
    });
});
