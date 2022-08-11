const express = require("express");
const Project = require("../models/project.js");
const mongoose = require("mongoose");

const project = {
    read: async (req, res) => {
        const proj = await Project.findByTitle(req.query.title);
        console.log("프로젝트 정보 : ", proj);
        try {
            if(!proj.length)
                return res.status(404).send({
                    err: 'project not found'
                });
            res.send(proj);
        } catch (err) {
            res.status(500).send(err)
        }
    },

    write: async(req, res) => {
        try{
            const result = await Project.create(req.body);
            console.log("result: ", result),
            res.status(200).send(result);
        }catch(err) {
            res.status(500).send(err);
        }
    }
}

module.exports = project;