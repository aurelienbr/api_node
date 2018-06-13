const api_key = "key-cd39fbf45feef315f601496852da12f9";
const domain = "sandbox25bf1553721a49b6909570376dac39d3.mailgun.org";
const mailgun = require("mailgun-js")({ apiKey: api_key, domain: domain });

export default mailgun;
