"use strict";

const http = require('http');
const https = require('https');
const fs = require('fs');

const base = './target/webpack';
const service = require("./target/nodejs/listener.js").default;

http.createServer((req, res) => {
    if(req.url.match('validate')) {
        let data = '';
        req.on("data", chunk => data += chunk);
        req.on("end", () => {
            try {
                const parsed = JSON.parse(data), formName = parsed.formName, payload = parsed.payload;
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json; charset=utf-8');
                service.validate(formName, payload).then(errors => {
                    res.write(JSON.stringify(errors));
                    res.end();
                });
            } catch(e) {
                res.write(JSON.stringify([e.message]));
                res.end();
            }
        });
    } else if(req.url.match('AJAXServlet')) {
        let data = '';
        https.get('https://arrowheadexchange.com' + req.url, resp => {
            resp.on('data', chunk => data += chunk);
            resp.on('end', () => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json; charset=utf-8');
                res.write(data);
                res.end();
            });
        }).on("error", (err) => {
            res.statusCode = 404;
            res.end();
        })
    } else {
        try {
            let url = req.url.match(/^\/?$/) ? "/index.html" : req.url;
            if(fs.statSync(base + url).mtime < new Date(req.rawHeaders[req.rawHeaders.indexOf("If-Modified-Since")+1])) {
                res.statusCode = 304;
                res.end();
            } else {
                fs.readFile(base + url, (err, content) => {
                    if(err) {
                        res.statusCode = 404;
                    } else {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'text/html; charset=utf-8');
                        res.write(content)
                    }
                    res.end();
                })
            }
        } catch(e) {
            res.statusCode = 404;
            res.end();
        }
    }
}).listen(process.argv[2] || 3000, '0.0.0.0', () => {})
