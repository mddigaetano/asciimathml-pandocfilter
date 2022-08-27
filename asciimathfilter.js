#!/usr/bin/env node

// Pandoc filter to convert expressions in AsciiMath notation into LaTeX expressions

// uncomment if installed npm modules are not in your linux path
//module.paths.push('/usr/local/lib/node_modules');

var pandoc = require('pandoc-filter');
var asciimath = require('./asciimath-based/ASCIIMathTeXImg.js');

// the following 5 commented line are for debug purpose
//var fs = require('fs');
//var path = require('path');
//var errFile = path.join(".",  "filter-err.txt");
//var errorLog = fs.createWriteStream(errFile);

function action({ t: type, c: value },format,meta) {
    //process.stderr.write = errorLog.write.bind(errorLog);
    if (type === "CodeBlock") {
        var language = value[0][1][0];
        if (language === "math") {
            var content = value[1];
            var fmt = {'t': 'DisplayMath',
                       'c': []}
            var formulas = []
            var lines = content.split('\n');
            for (var index in lines) {
                line = lines[index].trim();
                if (line != "")
                    formulas.push(pandoc.Formula(fmt, asciimath.AMTparseAMtoTeX(line) + "\n"));
            }
            return pandoc.Para(formulas);
        }
    } else if (type === "Code") {
        var content = value[1];
        var fmt = {'t': 'InlineMath',
                   'c': []}
        if (content.slice(0,4) === 'math')
            return pandoc.Formula(fmt, asciimath.AMTparseAMtoTeX(content.slice(5)));
        else if (content.slice(0,5) === 'latex')
            return pandoc.Formula(fmt, content.slice(6));
    }
    return null;
}

pandoc.stdio(action)
