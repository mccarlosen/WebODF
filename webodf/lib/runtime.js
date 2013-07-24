/**
 * Copyright (C) 2012 KO GmbH <jos.van.den.oever@kogmbh.com>
 * @licstart
 * The JavaScript code in this page is free software: you can redistribute it
 * and/or modify it under the terms of the GNU Affero General Public License
 * (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 * the License, or (at your option) any later version.  The code is distributed
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.
 *
 * As additional permission under GNU AGPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * As a special exception to the AGPL, any HTML file which merely makes function
 * calls to this code, and for that purpose includes it by reference shall be
 * deemed a separate work for copyright law purposes. In addition, the copyright
 * holders of this code give you permission to combine this code with free
 * software libraries that are released under the GNU LGPL. You may copy and
 * distribute such a system following the terms of the GNU AGPL for this code
 * and the LGPL for the libraries. If you modify this code, you may extend this
 * exception to your version of the code, but you are not obligated to do so.
 * If you do not wish to do so, delete this exception statement from your
 * version.
 *
 * This license applies to this entire compilation.
 * @licend
 * @source: http://www.webodf.org/
 * @source: http://gitorious.org/webodf/webodf/
 */
/*jslint nomen: true, evil: true, bitwise: true, emptyblock: true, unparam: true */
/*global window, XMLHttpRequest, require, console, DOMParser,
  process, __dirname, setTimeout, Packages, print,
  readFile, quit, Buffer, ArrayBuffer, Uint8Array,
  navigator, VBArray, alert, now, clearTimeout */
/**
 * Three implementations of a runtime for browser, node.js and rhino.
 */

/**
 * Abstraction of the runtime environment.
 * @class
 * @interface
 */
function Runtime() {"use strict"; }
/**
 * Abstraction of byte arrays.
 * @constructor
 * @param {!number} size
 */
Runtime.ByteArray = function (size) {"use strict"; };

/**
 * @param {!string} name
 * @return {*}
 */
Runtime.prototype.getVariable = function (name) { "use strict"; };

/**
 * @param {*} anything
 * @return {!string}
 */
Runtime.prototype.toJson = function (anything) { "use strict"; };

/**
 * @param {!string} jsonstr
 * @return {*}
 */
Runtime.prototype.fromJson = function (jsonstr) { "use strict"; };

/**
 * @param {!number} start
 * @param {!number} end
 * @return {!Runtime.ByteArray}
 */
Runtime.ByteArray.prototype.slice = function (start, end) {"use strict"; };

/**
 * @type {!number}
 */
Runtime.ByteArray.prototype.length = 0;
/**
 * @param {!Array.<number>} array
 * @return {!Runtime.ByteArray}
 */
Runtime.prototype.byteArrayFromArray = function (array) {"use strict"; };
/**
 * @param {!string} string
 * @param {!string} encoding
 * @return {!Runtime.ByteArray}
 */
Runtime.prototype.byteArrayFromString = function (string, encoding) {"use strict"; };
/**
 * @param {!Runtime.ByteArray} bytearray
 * @param {!string} encoding
 * @return {!string}
 */
Runtime.prototype.byteArrayToString = function (bytearray, encoding) {"use strict"; };
/**
 * @param {!Runtime.ByteArray} bytearray1
 * @param {!Runtime.ByteArray} bytearray2
 * @return {!Runtime.ByteArray}
 */
Runtime.prototype.concatByteArrays = function (bytearray1, bytearray2) {"use strict"; };
/**
 * @param {!string} path
 * @param {!number} offset
 * @param {!number} length
 * @param {!function(string,Runtime.ByteArray):undefined} callback
 * @return {undefined}
 */
Runtime.prototype.read = function (path, offset, length, callback) {"use strict"; };
/**
 * Read the contents of a file. Returns the result via a callback. If the
 * encoding is 'binary', the result is returned as a Runtime.ByteArray,
 * otherwise, it is returned as a string.
 * @param {!string} path
 * @param {!string} encoding text encoding or 'binary'
 * @param {!function(string,(string|Runtime.ByteArray)):undefined} callback
 * @return {undefined}
 */
Runtime.prototype.readFile = function (path, encoding, callback) {"use strict"; };
/**
 * @param {!string} path
 * @param {!string} encoding text encoding or 'binary'
 * @return {!string}
 */
Runtime.prototype.readFileSync = function (path, encoding) {"use strict"; };
/**
 * @param {!string} path
 * @param {!function((string|Document)):undefined} callback
 * @return {undefined}
 */
Runtime.prototype.loadXML = function (path, callback) {"use strict"; };
/**
 * @param {!string} path
 * @param {!Runtime.ByteArray} data
 * @param {!function(?string):undefined} callback
 * @return {undefined}
 */
Runtime.prototype.writeFile = function (path, data, callback) {"use strict"; };
/**
 * @param {!string} path
 * @param {!function(boolean):undefined} callback
 * @return {undefined}
 */
Runtime.prototype.isFile = function (path, callback) {"use strict"; };
/**
 * @param {!string} path
 * @param {!function(number):undefined} callback
 * @return {undefined}
 */
Runtime.prototype.getFileSize = function (path, callback) {"use strict"; };
/**
 * @param {!string} path
 * @param {!function(?string):undefined} callback
 * @return {undefined}
 */
Runtime.prototype.deleteFile = function (path, callback) {"use strict"; };
/**
 * @param {!string} msgOrCategory
 * @param {!string=} msg
 * @return {undefined}
 */
Runtime.prototype.log = function (msgOrCategory, msg) {"use strict"; };
/**
 * @param {!function():undefined} callback
 * @param {!number} milliseconds
 * @return {!number}
 */
Runtime.prototype.setTimeout = function (callback, milliseconds) {"use strict"; };
/**
 * @param {!number} timeoutID
 * @return {undefined}
 */
Runtime.prototype.clearTimeout = function (timeoutID) {"use strict"; };
/**
 * @return {!Array.<string>}
 */
Runtime.prototype.libraryPaths = function () {"use strict"; };
/**
 * @return {string}
 */
Runtime.prototype.type = function () {"use strict"; };
/**
 * @return {?DOMImplementation}
 */
Runtime.prototype.getDOMImplementation = function () {"use strict"; };
/**
 * @param {!string} xml
 * @return {?Document}
 */
Runtime.prototype.parseXML = function (xml) {"use strict"; };
/**
 * @return {?Window}
 */
Runtime.prototype.getWindow = function () {"use strict"; };

/**
 * @param {!boolean} condition
 * @param {!string} message
 * @param {!function():undefined=} callback
 * @return {undefined}
 */
Runtime.prototype.assert = function (condition, message, callback) { "use strict"; };
/*jslint emptyblock: false, unparam: false */

/** @define {boolean} */
var IS_COMPILED_CODE = false;

/**
 * @this {Runtime}
 * @param {!Runtime.ByteArray} bytearray
 * @param {!string} encoding
 * @return {!string}
 */
Runtime.byteArrayToString = function (bytearray, encoding) {
    "use strict";
    function byteArrayToString(bytearray) {
        var s = "", i, l = bytearray.length;
        for (i = 0; i < l; i += 1) {
            s += String.fromCharCode(bytearray[i] & 0xff);
        }
        return s;
    }
    function utf8ByteArrayToString(bytearray) {
        var s = "", i, l = bytearray.length,
            c0, c1, c2, c3, codepoint;

        for (i = 0; i < l; i += 1) {
            c0 = bytearray[i];
            if (c0 < 0x80) {
                s += String.fromCharCode(c0);
            } else {
                i += 1;
                c1 = bytearray[i];
                if (c0 >= 0xc2 && c0 < 0xe0) {
                    s += String.fromCharCode(((c0 & 0x1f) << 6) | (c1 & 0x3f));
                } else {
                    i += 1;
                    c2 = bytearray[i];
                    if (c0 >= 0xe0 && c0 < 0xf0) {
                        s += String.fromCharCode(((c0 & 0x0f) << 12) |
                            ((c1 & 0x3f) << 6) | (c2 & 0x3f));
                    } else {
                        i += 1;
                        c3 = bytearray[i];
                        if (c0 >= 0xf0 && c0 < 0xf5) {
                            codepoint = ((c0 & 0x07) << 18) | ((c1 & 0x3f) << 12) | ((c2 & 0x3f) << 6) | (c3 & 0x3f);
                            codepoint -= 0x10000;
                            s += String.fromCharCode(
                                (codepoint >> 10) + 0xd800, (codepoint & 0x3ff) + 0xdc00);
                        }
                    }
                }
            }
        }
        return s;
    }
    var result;
    if (encoding === "utf8") {
        result = utf8ByteArrayToString(bytearray);
    } else {
        if (encoding !== "binary") {
            this.log("Unsupported encoding: " + encoding);
        }
        result = byteArrayToString(bytearray);
    }
    return result;
};

/**
 * @param {!string} name
 * @return {*}
 */
Runtime.getVariable = function (name) {
    "use strict";
    try {
    return eval(name);
    } catch (e) {
        return undefined;
    }
};

/**
 * @param {*} anything
 * @return {!string}
 */
Runtime.toJson = function (anything) {
    "use strict";
    return JSON.stringify(anything);
};

/**
 * @param {!string} jsonstr
 * @return {*}
 */
Runtime.fromJson = function (jsonstr) {
    "use strict";
    return JSON.parse(jsonstr);
};

Runtime.getFunctionName = function getFunctionName(f) {
    "use strict";
    var m;
    if (f.name === undefined) {
        m = new RegExp("function\\s+(\\w+)").exec(f);
        return m && m[1];
    }
    return f.name;
};
/**
 * @class
 * @constructor
 * @augments Runtime
 * @implements {Runtime}
 * @param {Element} logoutput
 */
function BrowserRuntime(logoutput) {
    "use strict";
    var self = this,
        cache = {},
        useNativeArray = window.ArrayBuffer && window.Uint8Array;
    if (useNativeArray) {
        Uint8Array.prototype.slice = function (begin, end) {
            if (end === undefined) {
                if (begin === undefined) {
                    begin = 0;
                }
                end = this.length;
            }
            var view = this.subarray(begin, end), array, i;
            end -= begin;
            array = new Uint8Array(new ArrayBuffer(end));
            for (i = 0; i < end; i += 1) {
                array[i] = view[i];
            }
            return array;
        };
    }

    /**
     * @constructor
     * @augments Runtime.ByteArray
     * @inner
     * @extends {Runtime.ByteArray}
     * @param {!number} size
     */
    this.ByteArray = useNativeArray
        // if Uint8Array is available, use that
        ? function ByteArray(size) {
            return new Uint8Array(new ArrayBuffer(size));
        }
        : function ByteArray(size) {
            var a = [];
            a.length = size;
            return a;
        };
    this.concatByteArrays = useNativeArray
        ? function (bytearray1, bytearray2) {
            var i, l1 = bytearray1.length, l2 = bytearray2.length,
                a = new this.ByteArray(l1 + l2);
            for (i = 0; i < l1; i += 1) {
                a[i] = bytearray1[i];
            }
            for (i = 0; i < l2; i += 1) {
                a[i + l1] = bytearray2[i];
            }
            return a;
        }
        : function (bytearray1, bytearray2) {
            return bytearray1.concat(bytearray2);
        };
    function utf8ByteArrayFromString(string) {
        var l = string.length, bytearray, i, n, j = 0;
        // first determine the length in bytes
        for (i = 0; i < l; i += 1) {
            n = string.charCodeAt(i);
            j += 1 + (n > 0x80) + (n > 0x800);
        }
        // allocate a buffer and convert to a utf8 array
        bytearray = new self.ByteArray(j);
        j = 0;
        for (i = 0; i < l; i += 1) {
            n = string.charCodeAt(i);
            if (n < 0x80) {
                bytearray[j] = n;
                j += 1;
            } else if (n < 0x800) {
                bytearray[j] = 0xc0 | (n >>>  6);
                bytearray[j + 1] = 0x80 | (n & 0x3f);
                j += 2;
            } else {
                bytearray[j] = 0xe0 | ((n >>> 12) & 0x0f);
                bytearray[j + 1] = 0x80 | ((n >>>  6) & 0x3f);
                bytearray[j + 2] = 0x80 |  (n         & 0x3f);
                j += 3;
            }
        }
        return bytearray;
    }
    function byteArrayFromString(string) {
        // ignore encoding for now
        var l = string.length,
            a = new self.ByteArray(l),
            i;
        for (i = 0; i < l; i += 1) {
            a[i] = string.charCodeAt(i) & 0xff;
        }
        return a;
    }
    this.byteArrayFromArray = function (array) {
        return array.slice();
    };
    this.byteArrayFromString = function (string, encoding) {
        var result;
        if (encoding === "utf8") {
            result = utf8ByteArrayFromString(string);
        } else {
            if (encoding !== "binary") {
                self.log("unknown encoding: " + encoding);
            }
            result = byteArrayFromString(string);
        }
        return result;
    };
    this.byteArrayToString = Runtime.byteArrayToString;

    /**
    * @param {!string} name
    * @return {*}
    */
    this.getVariable = Runtime.getVariable;


    /**
    * @param {!string} jsonstr
    * @return {*}
    */
    this.fromJson = Runtime.fromJson;
    /**
    * @param {*} anything
    * @return {!string}
    */
    this.toJson = Runtime.toJson;

    /**
     * @param {!string} msgOrCategory
     * @param {string=} msg
     * @return {undefined}
     */
    function log(msgOrCategory, msg) {
        var node, doc, category;
        if (msg !== undefined) {
            category = msgOrCategory;
        } else {
            msg = msgOrCategory;
        }
        if (logoutput) {
            doc = logoutput.ownerDocument;
            if (category) {
                node = doc.createElement("span");
                node.className = category;
                node.appendChild(doc.createTextNode(category));
                logoutput.appendChild(node);
                logoutput.appendChild(doc.createTextNode(" "));
            }
            node = doc.createElement("span");
            if (msg.length > 0 && msg[0] === "<") {
                node.innerHTML = msg;
            } else {
                node.appendChild(doc.createTextNode(msg));
            }
            logoutput.appendChild(node);
            logoutput.appendChild(doc.createElement("br"));
        } else if (console) {
            console.log(msg);
        }
        if (category === "alert") {
            alert(msg);
        }
    }

    /**
    * @param {!boolean} condition
    * @param {!string} message
    * @param {!function():undefined=} callback
    * @return {undefined}
    */
    function assert(condition, message, callback) {
        if (!condition) {
            log("alert", "ASSERTION FAILED:\n" + message);
            if (callback) {
                callback();
            }
			throw message; // interrupt execution and provide a backtrace
        }
    }

    function readFile(path, encoding, callback) {
        if (cache.hasOwnProperty(path)) {
            callback(null, cache[path]);
            return;
        }
        var xhr = new XMLHttpRequest();
        function handleResult() {
            var data;
            if (xhr.readyState === 4) {
                if (xhr.status === 0 && !xhr.responseText) {
                    // for local files there is no difference between missing
                    // and empty files, so empty files are considered as errors
                    callback("File " + path + " is empty.");
                } else if (xhr.status === 200 || xhr.status === 0) {
                    // report file
                    if (encoding === "binary") {
                        if (xhr.responseBody !== null && String(typeof VBArray) !== "undefined") { // IE9
                            data = new VBArray(xhr.responseBody).toArray();
                        } else {
                            data = self.byteArrayFromString(xhr.responseText,
                                "binary");
                        }
                    } else {
                        data = xhr.responseText;
                    }
                    cache[path] = data;
                    callback(null, data);
                } else {
                    // report error
                    callback(xhr.responseText || xhr.statusText);
                }
            }
        }
        xhr.open('GET', path, true);
        xhr.onreadystatechange = handleResult;
        if (xhr.overrideMimeType) {
            if (encoding !== "binary") {
                xhr.overrideMimeType("text/plain; charset=" + encoding);
            } else {
                xhr.overrideMimeType("text/plain; charset=x-user-defined");
            }
        }
        try {
            xhr.send(null);
        } catch (e) {
            callback(e.message);
        }
    }
    function read(path, offset, length, callback) {
        if (cache.hasOwnProperty(path)) {
            callback(null, cache[path].slice(offset, offset + length));
            return;
        }
        var xhr = new XMLHttpRequest();
        function handleResult() {
            var data;
            if (xhr.readyState === 4) {
                if (xhr.status === 0 && !xhr.responseText) {
                    // for local files there is no difference between missing
                    // and empty files, so empty files are considered as errors
                    callback("File " + path + " is empty.");
                } else if (xhr.status === 200 || xhr.status === 0) {
                    // report file
                    if(xhr.response) {
                       // w3c complaint way http://www.w3.org/TR/XMLHttpRequest2/#the-response-attribute
                       data = /**@type{!ArrayBuffer}*/(xhr.response);
                       data = new Uint8Array(data);
                    } else if (xhr.responseBody !== null && String(typeof VBArray) !== "undefined") {
                       // fallback for IE < 9
                       data = (new VBArray(xhr.responseBody)).toArray();
                    } else {
                       // fallback for some really weird browsers
                       data = self.byteArrayFromString(xhr.responseText, "binary");
                    }
                    cache[path] = data;
                    callback(null, data.slice(offset, offset + length));
                } else {
                    // report error
                    callback(xhr.responseText || xhr.statusText);
                }
            }
        }
        xhr.open('GET', path, true);
        xhr.onreadystatechange = handleResult;
        if (xhr.overrideMimeType) {
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
        }
        xhr.responseType = "arraybuffer";
        //xhr.setRequestHeader('Range', 'bytes=' + offset + '-' +
        //       (offset + length - 1));
        try {
            xhr.send(null);
        } catch (e) {
            callback(e.message);
        }
    }
    function readFileSync(path, encoding) {
        var xhr = new XMLHttpRequest(),
            result;
        xhr.open('GET', path, false);
        if (xhr.overrideMimeType) {
            if (encoding !== "binary") {
                xhr.overrideMimeType("text/plain; charset=" + encoding);
            } else {
                xhr.overrideMimeType("text/plain; charset=x-user-defined");
            }
        }
        try {
            xhr.send(null);
            if (xhr.status === 200 || xhr.status === 0) {
                result = xhr.responseText;
            }
        } catch (ignore) {
        }
        return result;
    }
    function writeFile(path, data, callback) {
        cache[path] = data;
        var xhr = new XMLHttpRequest();
        function handleResult() {
            if (xhr.readyState === 4) {
                if (xhr.status === 0 && !xhr.responseText) {
                    // for local files there is no difference between missing
                    // and empty files, so empty files are considered as errors
                    callback("File " + path + " is empty.");
                } else if ((xhr.status >= 200 && xhr.status < 300) ||
                           xhr.status === 0) {
                    // report success
                    callback(null);
                } else {
                    // report error
                    callback("Status " + String(xhr.status) + ": " +
                            xhr.responseText || xhr.statusText);
                }
            }
        }
        xhr.open('PUT', path, true);
        xhr.onreadystatechange = handleResult;
        // ArrayBufferView will have an ArrayBuffer property, in WebKit, XHR can send()
        // an ArrayBuffer, In Firefox, one must use sendAsBinary with a string
        if (data.buffer && !xhr.sendAsBinary) {
            data = data.buffer; // webkit supports sending an ArrayBuffer
        } else {
            // encode into a string, this works in FireFox >= 3
            data = self.byteArrayToString(data, "binary");
        }
        try {
            if (xhr.sendAsBinary) {
                xhr.sendAsBinary(data);
            } else {
                xhr.send(data);
            }
        } catch (e) {
            self.log("HUH? " + e + " " + data);
            callback(e.message);
        }
    }
    function deleteFile(path, callback) {
        delete cache[path];
        var xhr = new XMLHttpRequest();
        xhr.open('DELETE', path, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status < 200 && xhr.status >= 300) {
                    callback(xhr.responseText);
                } else {
                    callback(null);
                }
            }
        };
        xhr.send(null);
    }
    function loadXML(path, callback) {
        var xhr = new XMLHttpRequest();
        function handleResult() {
            if (xhr.readyState === 4) {
                if (xhr.status === 0 && !xhr.responseText) {
                    callback("File " + path + " is empty.");
                } else if (xhr.status === 200 || xhr.status === 0) {
                    // report file
                    callback(null, xhr.responseXML);
                } else {
                    // report error
                    callback(xhr.responseText);
                }
            }
        }
        xhr.open("GET", path, true);
        if (xhr.overrideMimeType) {
            xhr.overrideMimeType("text/xml");
        }
        xhr.onreadystatechange = handleResult;
        try {
            xhr.send(null);
        } catch (e) {
            callback(e.message);
        }
    }
    function isFile(path, callback) {
        self.getFileSize(path, function (size) {
            callback(size !== -1);
        });
    }
    function getFileSize(path, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("HEAD", path, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return;
            }
            var cl = xhr.getResponseHeader("Content-Length");
            if (cl) {
                callback(parseInt(cl, 10));
            } else {
                callback(-1);
            }
        };
        xhr.send(null);
    }
    this.readFile = readFile;
    this.read = read;
    this.readFileSync = readFileSync;
    this.writeFile = writeFile;
    this.deleteFile = deleteFile;
    this.loadXML = loadXML;
    this.isFile = isFile;
    this.getFileSize = getFileSize;
    this.log = log;
    this.assert = assert;
    this.setTimeout = function (f, msec) {
        return setTimeout(function () {
            f();
        }, msec);
    };
    this.clearTimeout = function (timeoutID) {
        clearTimeout(timeoutID);
    };
    this.libraryPaths = function () {
        return ["lib"]; // TODO: find a good solution
                                       // probably let html app specify it
    };
/*jslint emptyblock: true */
    this.setCurrentDirectory = function () {
    };
/*jslint emptyblock: false */
    this.type = function () {
        return "BrowserRuntime";
    };
    this.getDOMImplementation = function () {
        return window.document.implementation;
    };
    this.parseXML = function (xml) {
        var parser = new DOMParser();
        return parser.parseFromString(xml, "text/xml");
    };
    this.exit = function (exitCode) {
        log("Calling exit with code " + String(exitCode) +
                ", but exit() is not implemented.");
    };
    this.getWindow = function () {
        return window;
    };
    this.getNetwork = function () {
        var now = this.getVariable("now");
        if (now === undefined) {
            return {networkStatus:"unavailable"};
        }
        return now;
    };
}

/**
 * @constructor
 * @implements {Runtime}
 */
function NodeJSRuntime() {
    "use strict";
    var self = this,
        fs = require('fs'),
        pathmod = require('path'),
        currentDirectory = "",
        parser,
        domImplementation;

    /**
     * @constructor
     * @extends {Runtime.ByteArray}
     * @param {!number} size
     */
    this.ByteArray = function (size) {
        return new Buffer(size);
    };

    this.byteArrayFromArray = function (array) {
        var ba = new Buffer(array.length),
            i,
            l = array.length;
        for (i = 0; i < l; i += 1) {
            ba[i] = array[i];
        }
        return ba;
    };

    this.concatByteArrays = function (a, b) {
        var ba = new Buffer(a.length + b.length);
        a.copy(ba, 0, 0);
        b.copy(ba, a.length, 0);
        return ba;
    };

    this.byteArrayFromString = function (string, encoding) {
        return new Buffer(string, encoding);
    };

    this.byteArrayToString = function (bytearray, encoding) {
        return bytearray.toString(encoding);
    };

    /**
    * @param {!string} name
    * @return {*}
    */
    this.getVariable = Runtime.getVariable;

    /**
    * @param {!string} jsonstr
    * @return {*}
    */
    this.fromJson = Runtime.fromJson;
    /**
    * @param {*} anything
    * @return {!string}
    */
    this.toJson = Runtime.toJson;

    function isFile(path, callback) {
        path = pathmod.resolve(currentDirectory, path);
        fs.stat(path, function (err, stats) {
            callback(!err && stats.isFile());
        });
    }
    function readFile(path, encoding, callback) {
        path = pathmod.resolve(currentDirectory, path);
        if (encoding !== "binary") {
            fs.readFile(path, encoding, callback);
        } else {
            fs.readFile(path, null, callback);
        }
    }
    this.readFile = readFile;
    function loadXML(path, callback) {
        readFile(path, "utf-8", function (err, data) {
            if (err) {
                return callback(err);
            }
            callback(null, self.parseXML(data));
        });
    }
    this.loadXML = loadXML;
    this.writeFile = function (path, data, callback) {
        path = pathmod.resolve(currentDirectory, path);
        fs.writeFile(path, data, "binary", function (err) {
            callback(err || null);
        });
    };
    this.deleteFile = function (path, callback) {
        path = pathmod.resolve(currentDirectory, path);
        fs.unlink(path, callback);
    };
    this.read = function (path, offset, length, callback) {
        path = pathmod.resolve(currentDirectory, path);
        fs.open(path, "r+", 666, function (err, fd) {
            if (err) {
                callback(err);
                return;
            }
            var buffer = new Buffer(length);
            fs.read(fd, buffer, 0, length, offset, function (err) {
                fs.close(fd);
                callback(err, buffer);
            });
        });
    };
    this.readFileSync = function (path, encoding) {
        if (!encoding) {
            // FIXME - this feels wrong
            return "";
        }
        if (encoding === "binary") {
            // this will return a Buffer
            return fs.readFileSync(path, null);
        }
        return fs.readFileSync(path, encoding);
    };
    this.isFile = isFile;
    this.getFileSize = function (path, callback) {
        path = pathmod.resolve(currentDirectory, path);
        fs.stat(path, function (err, stats) {
            if (err) {
                callback(-1);
            } else {
                callback(stats.size);
            }
        });
    };

    /**
     * @param {!string} msgOrCategory
     * @param {string=} msg
     * @return {undefined}
     */
    function log (msgOrCategory, msg) {
        var category;
        if (msg !== undefined) {
            category = msgOrCategory;
        } else {
            msg = msgOrCategory;
        }
        if (category === "alert") {
            process.stderr.write("\n!!!!! ALERT !!!!!" + '\n');
        }
        process.stderr.write(msg + '\n');
        if (category === "alert") {
            process.stderr.write("!!!!! ALERT !!!!!" + '\n');
        }
    }
    this.log = log;

    /**
    * @param {!boolean} condition
    * @param {!string} message
    * @param {!function():undefined=} callback
    * @return {undefined}
    */
    function assert(condition, message, callback) {
        if (!condition) {
            process.stderr.write("ASSERTION FAILED: "+message);
            if (callback) {
                callback();
            }
        }
    }
    this.assert = assert;

    this.setTimeout = function (f, msec) {
        return setTimeout(function () {
            f();
        }, msec);
    };
    this.clearTimeout = function (timeoutID) {
        clearTimeout(timeoutID);
    };
    this.libraryPaths = function () {
        return [__dirname];
    };
    this.setCurrentDirectory = function (dir) {
        currentDirectory = dir;
    };
    this.currentDirectory = function () {
        return currentDirectory;
    };
    this.type = function () {
        return "NodeJSRuntime";
    };
    this.getDOMImplementation = function () {
        return domImplementation;
    };
    this.parseXML = function (xml) {
        return parser.parseFromString(xml, "text/xml");
    };
    this.exit = process.exit;
    this.getWindow = function () {
        return null;
    };
    this.getNetwork = function () {
        return {networkStatus:"unavailable"};
    };
    function init() {
        var DOMParser = require('xmldom').DOMParser;
        parser = new DOMParser();
        domImplementation = self.parseXML("<a/>").implementation;
    }
    init();
}

/**
 * @constructor
 * @implements {Runtime}
 */
function RhinoRuntime() {
    "use strict";
    var self = this,
        dom = Packages.javax.xml.parsers.DocumentBuilderFactory.newInstance(),
        builder,
        entityresolver,
        currentDirectory = "";
    dom.setValidating(false);
    dom.setNamespaceAware(true);
    dom.setExpandEntityReferences(false);
    dom.setSchema(null);
/*jslint unparam: true */
    entityresolver = Packages.org.xml.sax.EntityResolver({
        resolveEntity: function (publicId, systemId) {
            var file, open = function (path) {
                var reader = new Packages.java.io.FileReader(path),
                    source = new Packages.org.xml.sax.InputSource(reader);
                return source;
            };
            file = systemId;
            //file = /[^\/]*$/.exec(systemId); // what should this do?
            return open(file);
        }
    });
/*jslint unparam: false */
    //dom.setEntityResolver(entityresolver);
    builder = dom.newDocumentBuilder();
    builder.setEntityResolver(entityresolver);

    /**
     * @constructor
     * @param {!number} size
     */
    this.ByteArray = function ByteArray(size) {
        return [size];
    };
    this.byteArrayFromArray = function (array) {
        return array;
    };
/*jslint unparam: true*/
    this.byteArrayFromString = function (string, encoding) {
        // ignore encoding for now
        var a = [], i, l = string.length;
        for (i = 0; i < l; i += 1) {
            a[i] = string.charCodeAt(i) & 0xff;
        }
        return a;
    };
/*jslint unparam: false*/
    this.byteArrayToString = Runtime.byteArrayToString;

    /**
    * @param {!string} name
    * @return {*}
    */
    this.getVariable = Runtime.getVariable;

    /**
    * @param {!string} jsonstr
    * @return {*}
    */
    this.fromJson = Runtime.fromJson;
    /**
    * @param {*} anything
    * @return {!string}
    */
    this.toJson = Runtime.toJson;

    this.concatByteArrays = function (bytearray1, bytearray2) {
        return bytearray1.concat(bytearray2);
    };

    function loadXML(path, callback) {
        var file = new Packages.java.io.File(path),
            document;
        try {
            document = builder.parse(file);
        } catch (err) {
            print(err);
            callback(err);
            return;
        }
        callback(null, document);
    }
    function runtimeReadFile(path, encoding, callback) {
        if (currentDirectory) {
            path = currentDirectory + "/" + path;
        }
        var file = new Packages.java.io.File(path),
            data,
            // read binary, seems hacky but works
            rhinoencoding = (encoding === "binary") ? "latin1" : encoding;
        if (!file.isFile()) {
            callback(path + " is not a file.");
        } else {
            data = readFile(path, rhinoencoding);
            if (encoding === "binary") {
                data = self.byteArrayFromString(data, "binary");
            }
            callback(null, data);
        }
    }
    /**
     * @param {!string} path
     * @param {!string} encoding
     * @return {?string}
     */
    function runtimeReadFileSync(path, encoding) {
        var file = new Packages.java.io.File(path);
        if (!file.isFile()) {
            return null;
        }
        if (encoding === "binary") {
            encoding = "latin1"; // read binary, seems hacky but works
        }
        return readFile(path, encoding);
    }
    function isFile(path, callback) {
        if (currentDirectory) {
            path = currentDirectory + "/" + path;
        }
        var file = new Packages.java.io.File(path);
        callback(file.isFile());
    }
    this.loadXML = loadXML;
    this.readFile = runtimeReadFile;
    this.writeFile = function (path, data, callback) {
        if (currentDirectory) {
            path = currentDirectory + "/" + path;
        }
        var out = new Packages.java.io.FileOutputStream(path),
            i,
            l = data.length;
        for (i = 0; i < l; i += 1) {
            out.write(data[i]);
        }
        out.close();
        callback(null);
    };
    this.deleteFile = function (path, callback) {
        if (currentDirectory) {
            path = currentDirectory + "/" + path;
        }
        var file = new Packages.java.io.File(path);
        if (file['delete']()) {
            callback(null);
        } else {
            callback("Could not delete " + path);
        }
    };
    this.read = function (path, offset, length, callback) {
        // TODO: adapt to read only a part instead of the whole file
        if (currentDirectory) {
            path = currentDirectory + "/" + path;
        }
        var data = runtimeReadFileSync(path, "binary");
        if (data) {
            callback(null, this.byteArrayFromString(
                data.substring(offset, offset + length),
                "binary"
            ));
        } else {
            callback("Cannot read " + path);
        }
    };
    this.readFileSync = function (path, encoding) {
        if (!encoding) {
            return "";
        }
        return readFile(path, encoding);
    };
    this.isFile = isFile;
    this.getFileSize = function (path, callback) {
        if (currentDirectory) {
            path = currentDirectory + "/" + path;
        }
        var file = new Packages.java.io.File(path);
        callback(file.length());
    };

    /**
     * @param {!string} msgOrCategory
     * @param {string=} msg
     * @return {undefined}
     */
    function log (msgOrCategory, msg) {
        var category;
        if (msg !== undefined) {
            category = msgOrCategory;
        } else {
            msg = msgOrCategory;
        }
        if (category === "alert") {
            print("\n!!!!! ALERT !!!!!");
        }
        print(msg);
        if (category === "alert") {
            print("!!!!! ALERT !!!!!");
        }
    }
    this.log = log;

    /**
    * @param {!boolean} condition
    * @param {!string} message
    * @param {!function():undefined=} callback
    * @return {undefined}
    */
    function assert(condition, message, callback) {
        if (!condition) {
            log("alert", "ASSERTION FAILED: "+message);
            if (callback) {
                callback();
            }
        }
    }
    this.assert = assert;
    this.setTimeout = function (f) {
        f();
        return 0;
    };
/*jslint emptyblock: true */
    this.clearTimeout = function() {
    };
/*jslint emptyblock: false */
    this.libraryPaths = function () {
        return ["lib"];
    };
    this.setCurrentDirectory = function (dir) {
        currentDirectory = dir;
    };
    this.currentDirectory = function () {
        return currentDirectory;
    };
    this.type = function () {
        return "RhinoRuntime";
    };
    this.getDOMImplementation = function () {
        return builder.getDOMImplementation();
    };
    this.parseXML = function (xml) {
        return builder.parse(xml);
    };
    this.exit = quit;
    this.getWindow = function () {
        return null;
    };
    this.getNetwork = function () {
        return {networkStatus:"unavailable"};
    };
}

/**
 * @const
 * @type {Runtime}
 */
var runtime = (function () {
    "use strict";
    var result;
    if (String(typeof window) !== "undefined") {
        result = new BrowserRuntime(window.document.getElementById("logoutput"));
    } else if (String(typeof require) !== "undefined") {
        result = new NodeJSRuntime();
    } else {
        result = new RhinoRuntime();
    }
    return result;
}());
/*jslint sloppy: true*/
(function () {
    var cache = {},
        dircontents = {};
    function getOrDefinePackage(packageNameComponents) {
        var topname = packageNameComponents[0],
            i,
            pkg;
        // ensure top level package exists
        pkg = eval("if (typeof " + topname + " === 'undefined') {" +
                "eval('" + topname + " = {};');}" + topname);
        for (i = 1; i < packageNameComponents.length - 1; i += 1) {
            if (!pkg.hasOwnProperty(packageNameComponents[i])) {
                pkg = pkg[packageNameComponents[i]] = {};
            } else {
                pkg = pkg[packageNameComponents[i]];
            }
        }
        return pkg[packageNameComponents[packageNameComponents.length - 1]];
    }
    /**
     * @param {string} classpath
     * @returns {undefined}
     */
    runtime.loadClass = function (classpath) {
        if (IS_COMPILED_CODE) {
            return;
        }
        if (cache.hasOwnProperty(classpath)) {
            return;
        }
        var names = classpath.split("."),
            impl;
        impl = getOrDefinePackage(names);
        if (impl) {
            cache[classpath] = true;
            return;
        }
        function getPathFromManifests(classpath) {
            var path = classpath.replace(/\./g, "/") + ".js",
                dirs = runtime.libraryPaths(),
                i,
                dir,
                code;
            if (runtime.currentDirectory) {
                dirs.push(runtime.currentDirectory());
            }
            for (i = 0; i < dirs.length; i += 1) {
                dir = dirs[i];
                if (!dircontents.hasOwnProperty(dir)) {
                    try {
                        code = runtime.readFileSync(dirs[i] + "/manifest.js",
                                "utf8");
                        if (code && code.length) {

                                dircontents[dir] = eval(code);


                        } else {
                            dircontents[dir] = null;
                        }
                    } catch (e1) {
                        dircontents[dir] = null;
                        runtime.log("Cannot load manifest for " + dir +
                            ".");
                    }
                }
                code = null;
                dir = dircontents[dir];
                if (dir && dir.indexOf && dir.indexOf(path) !== -1) {
                    return dirs[i] + "/" + path;
                }
            }
            return null;
        }
        function load(classpath) {
            var code, path;
            path = getPathFromManifests(classpath);
            if (!path) {
                throw classpath + " is not listed in any manifest.js.";
            }
            try {
                code = runtime.readFileSync(path, "utf8");
            } catch (e2) {
                runtime.log("Error loading " + classpath + " " + e2);
                throw e2;
            }
            if (code === undefined) {
                throw "Cannot load class " + classpath;
            }
            // add label to dynamic script for easier debugging
            code += "\n//# sourceURL=" + path;
            code += "\n//@ sourceURL=" + path; // Chrome
            // evaluate loaded code
            try {
                code = eval(classpath + " = eval(code);");
            } catch (e4) {
                runtime.log("Error loading " + classpath + " " + e4);
                throw e4;
            }
            return code;
        }
        // check if the class in context already
        impl = load(classpath);
        if (!impl || Runtime.getFunctionName(impl) !==
                names[names.length - 1]) {
            runtime.log("Loaded code is not for " + names[names.length - 1]);
            throw "Loaded code is not for " + names[names.length - 1];
        }
        cache[classpath] = true;
    };
}());
(function (args) {
    if (args) {
        args = Array.prototype.slice.call(/**@type{{length:number}}*/(args));
    } else {
        args = [];
    }

/*jslint unvar: true, defined: true*/
    function run(argv) {
        if (!argv.length) {
            return;
        }
        var script = argv[0];
        runtime.readFile(script, "utf8", function (err, code) {
            var path = "",
                codestring = /**@type{string}*/(code);
            if (script.indexOf("/") !== -1) {
                path = script.substring(0, script.indexOf("/"));
            }
            runtime.setCurrentDirectory(path);
            function inner_run() {
                var script, path, args, argv, result; // hide variables
                // execute script and make arguments available via argv
                result = eval(codestring);
                if (result) {
                    runtime.exit(result);
                }
                return;
            }
            if (err || codestring === null) {
                runtime.log(err);
                runtime.exit(1);
            } else {
                // run the script with arguments bound to arguments parameter
                inner_run.apply(null, argv);
            }
        });
    }
/*jslint unvar: false, defined: false*/
    // if rhino or node.js, run the scripts provided as arguments
    if (runtime.type() === "NodeJSRuntime") {
        run(process.argv.slice(2));
    } else if (runtime.type() === "RhinoRuntime") {
        run(args);
    } else {
        run(args.slice(1));
    }
}(String(typeof arguments) !== "undefined" && arguments));
