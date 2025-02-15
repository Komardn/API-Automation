const assert = require("assert");
const Ajv = require("ajv");

const ajv = new Ajv();

const schema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Generated schema for Root",
    "type": "object",
    "properties": {
        "data": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "number"
                },
                "email": {
                    "type": "string"
                },
                "first_name": {
                    "type": "string"
                },
                "last_name": {
                    "type": "string"
                },
                "avatar": {
                    "type": "string"
                }
            },
            "required": [
                "id",
                "email",
                "first_name",
                "last_name",
                "avatar"
            ]
        },
        "support": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string"
                },
                "text": {
                    "type": "string"
                }
            },
            "required": [
                "url",
                "text"
            ]
        }
    },
    "required": [
        "data",
        "support"
    ]
}

describe("VALIDATE JSON SCHEMA", function () {
    it("Get user should be success", async function () {
        this.timeout(10000);
        const response = await fetch(
            "https://reqres.in/api/users/2"
        );
        const data = await response.json();

        const validate = ajv;
        const valid = validate.validate(schema, data);

        if (!valid) {
            console.log(validate.errors);
        }

        console.log("test: " + JSON.stringify(data, null, 1));
        assert.ok(valid, "Response JSON harus sesuai dengan schema");
    });
});
