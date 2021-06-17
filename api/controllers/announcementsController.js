'use strict';

var mongoose = require('mongoose'), Announcements = mongoose.model('Announcements');

exports.list_all_announcements = function(req, res) {
    Announcements.find({}, function(err, announcement) {
        if (err)
        res.send(err);
        res.json(announcement);
    });
};

exports.create_an_announcement = function(req, res) {
    var new_announcement = new Announcements(req.body);
    new_announcement.save(function(err, announcement) {
        if (err)
            res.send(err);
        res.json(announcement);
    });
};

exports.read_an_announcement = function(req, res) {
    Announcements.findById(req.params.announcementId, function(err, announcement) {
        if (err)
            res.send(err);
        res.json(announcement);
    });
};

exports.update_an_announcement = function(req, res) {
    Announcements.findOneAndUpdate({_id: req.params.announcementId}, req.body, {new: true}, function(err, announcement) {
        if (err)
            res.send(err);
        res.json(announcement);
    });
};

exports.delete_an_announcement = function(req, res) {
    Announcements.remove({
        _id: req.params.announcementId
    }, function(err, announcement) {
        if (err)
        res.send(err);
        res.json({ message: 'Announcements successfully deleted' });
    });
};