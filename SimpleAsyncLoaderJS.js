var SimpleAsyncLoaderJS = (function () {

    /**
     * @constructor
     */
    var SimpleAsyncLoaderJS = function () {
        SimpleAsyncLoaderJS.awaitDOMCall(SimpleAsyncLoaderJS._initLoader);
    }

    /**
     * @param {function} f
     */
    SimpleAsyncLoaderJS.awaitDOMCall = function (f) {
        if (document.readyState !== 'loading') {
            SimpleAsyncLoaderJS.timeoutCall(f);
        } else {
            document.addEventListener('DOMContentLoaded', function domContentLoaded() {
                SimpleAsyncLoaderJS.timeoutCall(f);
                document.removeEventListener("DOMContentLoaded", domContentLoaded, false);
            }, false);
        }
    }

    /**
     * @param {function} f
     */
    SimpleAsyncLoaderJS.timeoutCall = function (f) {
        if (typeof f !== "function") {
            return;
        }
        setTimeout(function () {
            SimpleAsyncLoaderJS.call(f);
        });
    }

    /**
     * @param {function} f
     */
    SimpleAsyncLoaderJS.call = function (f) {
        if (typeof f !== "function") {
            return;
        }
        f();
    }

    /**
     *
     */
    SimpleAsyncLoaderJS.loadAsyncDataScriptFunctions = function () {
        var dataScripts = document.querySelectorAll('script[data-script-function]');

        for (var i = 0; i < dataScripts.length; i++) {
            SimpleAsyncLoaderJS.call(window[dataScripts[i].getAttribute("data-script-function")]);
        }
    }

    /**
     *
     */
    SimpleAsyncLoaderJS.loadAsyncFunctionsArray = function () {
        if (typeof asyncFunctions === "undefined" || !Array.isArray(asyncFunctions)) {
            return;
        }

        for (var j = 0; j < asyncFunctions.length; j++) {
            SimpleAsyncLoaderJS.call(asyncFunctions[j]);
        }
    }

    /**
     * @return boolean
     */
    SimpleAsyncLoaderJS._initLoader = function () {
        SimpleAsyncLoaderJS.loadAsyncDataScriptFunctions();
        SimpleAsyncLoaderJS.loadAsyncFunctionsArray();
        return true;
    }

    /**
     * @param asyncFunction
     * @return {SimpleAsyncLoaderJS}
     */
    SimpleAsyncLoaderJS.create = function (asyncFunction) {
        return new SimpleAsyncLoaderJS(asyncFunction);
    }

    return SimpleAsyncLoaderJS;
})();

(function () {
    SimpleAsyncLoaderJS.create();
})();
