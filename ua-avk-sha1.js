/**
 * @author Kononenko Aleksandr
 *
 * @param RED
 */
module.exports = function(RED) {
    "use strict";
    var crypto = require('crypto');

    function UaAVKSha1(n) {
        RED.nodes.createNode(this, n);
        var node = this;
        //var nodeData = n.data;

        this.data = n.data||"payload";
        var node = this;
        this.on("input", function(msg) {
            var shasum = crypto.createHash('sha1');
            msg.payload = shasum.update(msg.data).digest("hex");
            node.send(msg);
        });

    }
    RED.nodes.registerType("ua-avk-sha1", UaAVKSha1);






};
