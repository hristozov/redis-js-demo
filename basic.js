var redis  = require("redis"),
    client = redis.createClient();

client.set("foo", "bar", redis.print);
client.get("foo", redis.print);

for (var i=0; i<10000; i++) {
    client.lpush("baz", i);
}
client.llen("baz", redis.print);

client.quit();
