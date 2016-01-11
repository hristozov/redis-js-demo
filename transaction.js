var redis  = require("redis"),
    client = redis.createClient(),
    multi = client.multi();

multi.incr("cnt", redis.print);
multi.incr("cnt2", redis.print);

client.mset("cnt", 1002, "cnt2", 702, redis.print);

multi.exec(function (err, replies) {
    console.log(replies);
});

multi.exec(function (err, replies) {
    console.log(replies);
    client.quit();
});
