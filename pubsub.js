var redis = require("redis"),
    subscriber = redis.createClient(),
    publisher = redis.createClient(),
    msg_count = 0;

subscriber.on("subscribe", function (channel, count) {
    publisher.publish("nl.forkbomb.events", "foo");
    publisher.publish("nl.forkbomb.events", "bar");
    publisher.publish("nl.forkbomb.events", "baz");
});

subscriber.on("message", function (channel, message) {
    console.log(channel + ": " + message);
    msg_count += 1;
    if (msg_count === 3) {
        subscriber.unsubscribe();
        subscriber.end();
        publisher.end();
    }
});

subscriber.subscribe("nl.forkbomb.events");
