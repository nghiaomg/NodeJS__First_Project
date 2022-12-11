exports.getList = (req, res) => {
    var data = [
        {"id" : 1, "name": "Wednesdays"},
        {"id" : 2, "name": "Wednesdays"},
        {"id" : 3, "name": "Wednesdays"},
        {"id" : 4, "name": "Wednesdays"},
        {"id" : 5, "name": "Wednesdays"}
    ];
    res.send({result: data});
}