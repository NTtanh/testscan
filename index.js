const express = require('express')
const Pusher = require('pusher');
const app = express()
const PORT = process.env.PORT || 5000

var pusher = new Pusher({
    appId: '702258',
    key: 'd6f1c74fc954da5d0939',
    secret: 'f02611eaa4feefe209ff',
    cluster: 'ap1',
    encrypted: true
});

app.get('/', (req, res) => {
    var code = req.param('code');
    console.log(code);
    pusher.trigger('test-scan', 'scan', {
        "message": code
    });
    res.send('success');
})

app.listen(PORT,() => console.log(`Example app listening on port ${PORT}!`))