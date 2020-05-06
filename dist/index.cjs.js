'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var styled = require('styled-components');
var styled__default = _interopDefault(styled);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var colors = {
    light: {
        background: 'white',
        blue: '#005cb8',
        border: '#ddd',
        error: '#cf0303',
        link: '#55e',
        textColor: '#111',
        violet: '#bc1abc',
        zebra: '#f8f8f8',
    },
    dark: {
        background: '#111',
        blue: 'dodgerblue',
        border: '#555',
        error: '#ff5656',
        link: '#8787f9',
        textColor: 'white',
        violet: 'violet',
        zebra: '#242424',
    }
};

var focusStyle = "\n:focus {\n  outline: none;\n  box-shadow: 0 0 0 calc(var(--clear-unit) / 4) var(--clear-background),\n    0 0 0 calc(var(--clear-unit) / 2) var(--clear-link);\n}\n::-moz-focus-inner {\n  border:0;\n}\n";
var errorFocusStyle = "\n:focus {\n  outline: none;\n  box-shadow: 0 0 0 calc(var(--clear-unit) / 4) var(--clear-background),\n    0 0 0 calc(var(--clear-unit) / 2) var(--clear-error);\n}\n::-moz-focus-inner {\n  border:0;\n}\n";

var unit = 8;
var numbers = {
    breakpoint: {
        xs: 600,
        sm: 960,
        md: 1280,
        lg: 1920,
    },
    fontSize: {
        default: unit * 2,
        label: unit * 1.8,
    },
    width: {
        main: 95 * unit,
    },
    unit: unit,
};

/**
 * Creates a set of css variables necessary for global colors. This component
 * should be included once at the top level of your application.
 *
 * https://chadlavi.github.io/clear/#/global-styles#cssvariables
 */
var CSSVariables = styled.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  :root {\n    ", "\n\n    --clear-unit: ", "px;\n    --clear-main-width: ", "px;\n    --clear-font-size-default: ", "px;\n    --clear-font-size-label: ", "px;\n\n    ", "\n\n    --clear-font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu,\n      roboto, noto, segoe ui, arial, sans-serif;\n    --clear-monospace-font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;\n  }\n\n  @media (prefers-color-scheme: dark) {\n    :root {\n      ", "\n    }\n  }\n  "], ["\n  :root {\n    ", "\n\n    --clear-unit: ", "px;\n    --clear-main-width: ", "px;\n    --clear-font-size-default: ", "px;\n    --clear-font-size-label: ", "px;\n\n    ",
    "\n\n    --clear-font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu,\n      roboto, noto, segoe ui, arial, sans-serif;\n    --clear-monospace-font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;\n  }\n\n  @media (prefers-color-scheme: dark) {\n    :root {\n      ", "\n    }\n  }\n  "])), Object.keys(colors.light).map(function (c) { return "--clear-" + c + ": " + colors.light[c] + ";"; }), numbers.unit, numbers.width.main, numbers.fontSize.default, numbers.fontSize.label, Object.keys(numbers.breakpoint).map(function (k) { return "--clear-breakpoint-" + k + ": " + numbers.breakpoint[k] + "px;"; }), Object.keys(colors.dark).map(function (c) { return "--clear-" + c + ": " + colors.dark[c] + ";"; }));
var templateObject_1;

/**
 * Applies styles to the `<body>` of your app.
 *
 * https://chadlavi.github.io/clear/#/global-styles#globalstyles
 */
var GlobalStyles = styled.createGlobalStyle(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  body {\n    margin: 0;\n    background-color: var(--clear-background);\n    color: var(--clear-textColor);\n    font-family: var(--clear-font-family);\n    font-size: var(--clear-font-size-default);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-text-size-adjust: 100%;\n  }\n"], ["\n  body {\n    margin: 0;\n    background-color: var(--clear-background);\n    color: var(--clear-textColor);\n    font-family: var(--clear-font-family);\n    font-size: var(--clear-font-size-default);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-text-size-adjust: 100%;\n  }\n"])));
var templateObject_1$1;

/**
 * This basic React hook returns a boolean value that reflects whether or not the given query matches.
 *
 * https://chadlavi.github.io/clear/#/helpers#usemediaquery
 */
var useMediaQuery = function (query) {
    var _a = React.useState(matchMedia(query).matches), result = _a[0], setResult = _a[1];
    var callback = React.useCallback(function (matchMediaResult) { return setResult(matchMediaResult.matches); }, [setResult]);
    React.useEffect(function () {
        var matchMediaResult = matchMedia(query);
        callback(matchMediaResult);
        matchMediaResult.addListener(callback);
        return function () { return matchMediaResult.removeListener(callback); };
    }, [callback]);
    return result;
};
/**
 * Returns a boolean value that reflects whether or not the user's viewport is smaller than the given breakpoint.
 *
 * https://chadlavi.github.io/clear/#/helpers#usebreakpoint
 */
var useBreakpoint = function (breakpoint) { return useMediaQuery("(max-width: " + numbers.breakpoint[breakpoint] + "px)"); };
/**
 * Returns a boolean value that reflects whether or not the user's browser is currently in dark mode.
 *
 * https://chadlavi.github.io/clear/#/helpers#usedarkmode
 */
var useDarkMode = function () { return useMediaQuery('(prefers-color-scheme: dark)'); };
/**
 * Returns a boolean value that reflects whether or not the user's browser is currently in dark mode.
 *
 * https://chadlavi.github.io/clear/#/helpers#useresponsivecolor
 */
var useResponsiveColor = function (color) {
    var theme = useDarkMode() ? 'dark' : 'light';
    return colors[theme][color];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
var ButtonBase = function (_a) {
    var primary = _a.primary, props = __rest(_a, ["primary"]);
    return React.createElement("button", __assign({}, props));
};
/**
 * A simple styled `<button>`
 *
 * https://chadlavi.github.io/clear/#/button
 */
var Button = styled__default(ButtonBase)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  background: var(--clear-border);\n  border-radius: var(--clear-unit);\n  border: none;\n  color: inherit;\n  ", ";\n  cursor: pointer;\n  ", ";\n  font-size: var(--clear-font-size-label);\n  margin: 0;\n  padding: var(--clear-unit) calc(var(--clear-unit) * 2);\n  @media (prefers-color-scheme: dark) {\n    font-weight: 500;\n  }\n  ", "\n"], ["\n  background: var(--clear-border);\n  border-radius: var(--clear-unit);\n  border: none;\n  color: inherit;\n  ",
    ";\n  cursor: pointer;\n  ",
    ";\n  font-size: var(--clear-font-size-label);\n  margin: 0;\n  padding: var(--clear-unit) calc(var(--clear-unit) * 2);\n  @media (prefers-color-scheme: dark) {\n    font-weight: 500;\n  }\n  ", "\n"])), function (p) { return p.primary ? "\n    background: var(--clear-link);\n    color: var(--clear-background);\n  " : ''; }, function (p) { return p.disabled ? "\n    cursor: not-allowed;\n    opacity: 0.5;\n  " : ''; }, focusStyle);
var templateObject_1$2;

/**
 * A simple styled `<code>`
 *
 * https://chadlavi.github.io/clear/#/text#code
 */
var Code = styled__default('code')(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  font-family: var(--clear-monospace-font-family);\n  font-size: 0.9em;\n  display: inline;\n  margin: 0;\n  background: var(--clear-zebra);\n  padding: calc(var(--clear-unit) / 2 - 2px) calc(var(--clear-unit) / 2 - 1px);\n  border-radius: calc(var(--clear-unit) / 2);\n"], ["\n  font-family: var(--clear-monospace-font-family);\n  font-size: 0.9em;\n  display: inline;\n  margin: 0;\n  background: var(--clear-zebra);\n  padding: calc(var(--clear-unit) / 2 - 2px) calc(var(--clear-unit) / 2 - 1px);\n  border-radius: calc(var(--clear-unit) / 2);\n"])));
var templateObject_1$3;

/**
 * A simple styled `<pre>` for formatting code blocks
 *
 * https://chadlavi.github.io/clear/#/text#codeblock
 */
var CodeBlock = styled__default('pre')(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  font-family: var(--clear-monospace-font-family);\n  font-size: 0.9em;\n  line-height: 1.5;\n  display: block;\n  margin-block-end: calc(var(--clear-unit) * 2);\n  margin-block-start: calc(var(--clear-unit) * 2);\n  background: var(--clear-zebra);\n  padding: calc(var(--clear-unit) * 2);\n  border-radius: var(--clear-unit);\n  overflow-x: auto;\n"], ["\n  font-family: var(--clear-monospace-font-family);\n  font-size: 0.9em;\n  line-height: 1.5;\n  display: block;\n  margin-block-end: calc(var(--clear-unit) * 2);\n  margin-block-start: calc(var(--clear-unit) * 2);\n  background: var(--clear-zebra);\n  padding: calc(var(--clear-unit) * 2);\n  border-radius: var(--clear-unit);\n  overflow-x: auto;\n"])));
var templateObject_1$4;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
var Container = function (_a) {
    var size = _a.size, props = __rest(_a, ["size"]);
    return React.createElement("div", __assign({}, props));
};
/**
 * A simple 12-column grid item. Must be used as a direct child of `<Grid>`.
 *
 * https://chadlavi.github.io/clear/#/layout#griditem
 */
var GridItem = styled__default(Container)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  flex-basis: calc(100% * ", " / 12);\n  width: calc(100% * ", " / 12);\n  max-width: calc(100% * ", " / 12);\n  @media only screen and (max-width: ", "px) {\n    flex-basis: 100%;\n    width: 100%;\n    max-width: 100%;\n  }\n"], ["\n  flex-basis: calc(100% * ", " / 12);\n  width: calc(100% * ", " / 12);\n  max-width: calc(100% * ", " / 12);\n  @media only screen and (max-width: ", "px) {\n    flex-basis: 100%;\n    width: 100%;\n    max-width: 100%;\n  }\n"])), function (p) { return p.size || 12; }, function (p) { return p.size || 12; }, function (p) { return p.size || 12; }, numbers.breakpoint.xs);
var templateObject_1$5;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
var Container$1 = function (_a) {
    var spacing = _a.spacing, props = __rest(_a, ["spacing"]);
    return React.createElement("div", __assign({}, props));
};
/**
 * A simple 12-column grid container. Must be used in conjunciton with
 * `<GridItem>`.
 *
 * https://chadlavi.github.io/clear/#/layout#grid
 */
var Grid = styled__default(Container$1)(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: ", "px;\n  & > ", " {\n    padding: ", "px;\n  }\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  padding: ", "px;\n  & > ", " {\n    padding: ", "px;\n  }\n"])), function (p) { return p.spacing ? p.spacing / 2 : 0; }, GridItem, function (p) { return p.spacing ? p.spacing / 2 : 0; });
var templateObject_1$6;

/**
 * A simple styled `<h1>`
 *
 * Can also be used to create any header (`h1` through `h6`):
 *
 * ```tsx
 * <Header as='h2'>
 *  This will render in the DOM as an `<h2>`
 * </Header>
 * ```
 *
 * https://chadlavi.github.io/clear/#/text#header
 */
var Header = styled__default('h1')(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject([""], [""])));
var templateObject_1$7;

/**
 * Calls props.onClick, but also selects the contents of the Input on click
 * @param func the onClick passed to `<Input>`
 */
var forwardOnClick = function (func) { return function (e) {
    var t = e.currentTarget;
    if (func)
        func(e);
    if (t.value)
        setTimeout(function () {
            t.select();
        }, 1);
}; };
/**
 * Calls props.onFocus, but also selects the contents of the Input on focus
 * @param func the onFocus passed to `<Input>`
 */
var forwardOnFocus = function (func) { return function (e) {
    var t = e.currentTarget;
    if (func)
        func(e);
    if (t.value)
        setTimeout(function () {
            t.select();
        }, 1);
}; };
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var InputBase = function (_a) {
    var error = _a.error, props = __rest(_a, ["error"]);
    return React.createElement("input", __assign({}, props, { onClick: forwardOnClick(props.onClick), onFocus: forwardOnFocus(props.onFocus), value: props.value || (props.type === 'number' ? ' ' : '') }));
};
/**
 * A simple styled Input
 *
 * https://chadlavi.github.io/clear/#/input#input
 */
var Input = styled__default(InputBase)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  background-color: var(--clear-background);\n  color: var(--clear-", ");\n  border: 1px solid var(--clear-", ");\n  border-radius: var(--clear-unit);\n  padding: calc(var(--clear-unit) * 1.5);\n  font-size: var(--clear-font-size-default);\n  margin: calc(var(--clear-unit) / 2) 0;\n  width: 100%;\n  min-width: 100%;\n  max-width: 100%;\n  -webkit-appearance: none;\n  ", "\n  ", "\n  ", "\n"], ["\n  background-color: var(--clear-background);\n  color: var(--clear-", ");\n  border: 1px solid var(--clear-", ");\n  border-radius: var(--clear-unit);\n  padding: calc(var(--clear-unit) * 1.5);\n  font-size: var(--clear-font-size-default);\n  margin: calc(var(--clear-unit) / 2) 0;\n  width: 100%;\n  min-width: 100%;\n  max-width: 100%;\n  -webkit-appearance: none;\n  ", "\n  ", "\n  ", "\n"])), function (p) { return p.error ? 'error' : 'textColor'; }, function (p) { return p.error ? 'error' : 'border'; }, focusStyle, function (p) { return p.error ? errorFocusStyle : ''; }, function (p) { return p.disabled ? 'cursor: not-allowed;' : ''; });
var templateObject_1$8;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
var LabelBase = function (_a) {
    var disabled = _a.disabled, error = _a.error, required = _a.required, props = __rest(_a, ["disabled", "error", "required"]);
    return (React.createElement("label", __assign({}, props), required ? React.createElement(React.Fragment, null,
        props.children,
        ' (Required)') : props.children));
};
/**
 * A simple styled `<label>`
 *
 * https://chadlavi.github.io/clear/#/text#label
 */
var Label = styled__default(LabelBase)(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  color: ", ";\n  ", ";\n  width: 100%;\n  font-size: var(--clear-font-size-label);\n"], ["\n  color: ", ";\n  ",
    ";\n  width: 100%;\n  font-size: var(--clear-font-size-label);\n"])), function (p) { return p.error ? 'var(--clear-error)' : 'inherit'; }, function (p) { return p.disabled ? "\n    opacity: 0.5;\n  " : ''; });
var templateObject_1$9;

var Anchor = function (props) {
    var _a;
    var isExternal = Boolean((_a = props.href) === null || _a === void 0 ? void 0 : _a.match(/^http/));
    return (React.createElement("a", __assign({}, props, { target: isExternal ? '_blank' : props.target, rel: isExternal ? 'noopener noreferrer' : props.rel, title: props.title || "Open \"" + props.href + "\"" + (isExternal ? ' in a new Tab' : '') })));
};
/**
 * A simple styled `<a>`
 *
 * https://chadlavi.github.io/clear/#/link
 */
var Link = styled__default(Anchor)(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  color: var(--clear-link);\n  ", "\n  &[target='_blank']::after {\n    content: ' [\u2197]';\n  }\n"], ["\n  color: var(--clear-link);\n  ", "\n  &[target='_blank']::after {\n    content: ' [\\u2197]';\n  }\n"])), focusStyle);
var templateObject_1$a;

/**
 * A simple styled `<main>`
 *
 * https://chadlavi.github.io/clear/#/layout#page
 */
var Page = styled__default('main')(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\nmargin: 0 auto;\nmargin-bottom: calc(var(--clear-unit) * 15);\npadding: var(--clear-unit);\nwidth: ", "px;\nbackground-color: var(--clear-background);\ncolor: var(--clear-textColor);\nfont-family: var(--clear-font-family);\nfont-size: var(--clear-font-size-default);\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;\nmax-width: 100%;\n&, & * {\n  box-sizing: border-box;\n}\n"], ["\nmargin: 0 auto;\nmargin-bottom: calc(var(--clear-unit) * 15);\npadding: var(--clear-unit);\nwidth: ", "px;\nbackground-color: var(--clear-background);\ncolor: var(--clear-textColor);\nfont-family: var(--clear-font-family);\nfont-size: var(--clear-font-size-default);\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;\nmax-width: 100%;\n&, & * {\n  box-sizing: border-box;\n}\n"])), numbers.width.main);
var templateObject_1$b;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
var ParagraphBase = function (_a) {
    var margins = _a.margins, props = __rest(_a, ["margins"]);
    return React.createElement("p", __assign({}, props));
};
/**
 * A simple styled `<p>`
 *
 * https://chadlavi.github.io/clear/#/text#paragraph
 */
var Paragraph = styled__default(ParagraphBase)(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  line-height: 1.5;\n  ", "\n"], ["\n  line-height: 1.5;\n  ",
    "\n"])), function (p) { return p.margins === false ? "\n    margin-block-start: 0;\n    margin-block-end: 0;\n  " : "\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n  "; });
var templateObject_1$c;

var ContainerBase = function (_a) {
    var  
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    contentMinHeight = _a.contentMinHeight, contentMinWidth = _a.contentMinWidth, _b = _a.direction, maxHeight = _a.maxHeight, maxWidth = _a.maxWidth, props = __rest(_a, ["contentMinHeight", "contentMinWidth", "direction", "maxHeight", "maxWidth"]);
    return React.createElement("div", __assign({}, props));
};
var Container$2 = styled__default(ContainerBase)(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  width: 100%;\n  ", "\n  ", "\n\n  ", "\n"], ["\n  width: 100%;\n  ",
    "\n  ",
    "\n\n  ",
    "\n"])), function (p) {
    var direction = p.direction;
    if (direction === 'horizontal') {
        return 'overflow-x: auto; max-width: 100%;';
    }
    else {
        return 'overflow-y: auto; max-height: 100%;';
    }
}, function (p) {
    var maxHeight = p.maxHeight;
    if (typeof maxHeight === 'number') {
        return "max-height: " + maxHeight + "px;";
    }
    else if (maxHeight) {
        return "max-height: " + maxHeight + ";";
    }
    else {
        return '';
    }
}, function (p) {
    var maxWidth = p.maxWidth;
    if (typeof maxWidth === 'number') {
        return "max-width: " + maxWidth + "px;";
    }
    else if (maxWidth) {
        return "max-width: " + maxWidth + ";";
    }
    else {
        return '';
    }
});
var ContentBase = function (_a) {
    var  
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    contentMinHeight = _a.contentMinHeight, contentMinWidth = _a.contentMinWidth, _b = _a.direction, maxHeight = _a.maxHeight, maxWidth = _a.maxWidth, props = __rest(_a, ["contentMinHeight", "contentMinWidth", "direction", "maxHeight", "maxWidth"]);
    return React.createElement("div", __assign({}, props));
};
var Content = styled__default(ContentBase)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ",
    "\n  ",
    "\n"
    /**
     * You can use a ScrollContainer to create a verticall or horizontally scrollable div with content of a fixed minimum
     * height/width. Scroll containers are very convenient ways to prevent <Table>s from becoming unmanageable on
     * responsive devices.
     *
     * https://chadlavi.github.io/clear/#/layout#scrollcontainer
     */
])), function (p) {
    var contentMinHeight = p.contentMinHeight;
    if (typeof contentMinHeight === 'number') {
        return "min-height: " + contentMinHeight + "px;";
    }
    else if (contentMinHeight) {
        return "min-height: " + contentMinHeight + ";";
    }
    else {
        return '';
    }
}, function (p) {
    var contentMinWidth = p.contentMinWidth;
    if (typeof contentMinWidth === 'number') {
        return "min-width: " + contentMinWidth + "px;";
    }
    else if (contentMinWidth) {
        return "min-width: " + contentMinWidth + ";";
    }
    else {
        return '';
    }
});
/**
 * You can use a ScrollContainer to create a verticall or horizontally scrollable div with content of a fixed minimum
 * height/width. Scroll containers are very convenient ways to prevent <Table>s from becoming unmanageable on
 * responsive devices.
 *
 * https://chadlavi.github.io/clear/#/layout#scrollcontainer
 */
var ScrollContainer = function (props) {
    return React.createElement(Container$2, { direction: props.direction, maxHeight: props.maxHeight, maxWidth: props.maxWidth },
        React.createElement(Content, __assign({ contentMinHeight: props.contentMinHeight, contentMinWidth: props.contentMinWidth }, props)));
};
var templateObject_1$d, templateObject_2;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
var SelectBase = function (_a) {
    var error = _a.error, props = __rest(_a, ["error"]);
    return React.createElement("select", __assign({}, props));
};
var StyledSelect = styled__default(SelectBase)(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  background-color: var(--clear-background);\n  color: var(--clear-", ");\n  border: 1px solid var(--clear-", ");\n  border-radius: var(--clear-unit);\n  padding: calc(var(--clear-unit) * 1.5);\n  font-size: inherit;\n  margin: calc(var(--clear-unit) / 2) 0;\n  width: 100%;\n  -webkit-appearance: none;\n  ", "\n  ", "\n"], ["\n  background-color: var(--clear-background);\n  color: var(--clear-", ");\n  border: 1px solid var(--clear-", ");\n  border-radius: var(--clear-unit);\n  padding: calc(var(--clear-unit) * 1.5);\n  font-size: inherit;\n  margin: calc(var(--clear-unit) / 2) 0;\n  width: 100%;\n  -webkit-appearance: none;\n  ", "\n  ", "\n"])), function (p) { return p.error ? 'error' : 'textColor'; }, function (p) { return p.error ? 'error' : 'border'; }, focusStyle, function (p) { return p.error ? errorFocusStyle : ''; });
var SelectOptions = function (_a) {
    var options = _a.options;
    return (React.createElement(React.Fragment, null, options.map(function (o) { return (React.createElement("option", { key: o.label + ":" + o.value, value: o.value }, o.label)); })));
};
/**
 * A simple styled Select
 *
 * https://chadlavi.github.io/clear/#/input#select
 */
var Select = function (props) {
    var multiple = props.multiple, options = props.options, other = __rest(props, ["multiple", "options"]);
    return (React.createElement(StyledSelect, __assign({}, other, { defaultValue: multiple ? undefined : '', multiple: multiple }),
        multiple ? '' : React.createElement("option", { hidden: true, disabled: true, value: '' }),
        React.createElement(SelectOptions, { options: options })));
};
/**
 * handles update logic to update the value of a `<Select>` with `multiple={true}`
 *
 * Requires two arguments, a value to update and a function to set it. Defaults to
 * expecting a React `useState` hook, but you can optionally specify a type for the
 * setter function.
 */
var handleMultiSelectChange = function (value, setter) { return function (e) {
    var v = e.currentTarget.value;
    if (value && value.length > 0) {
        var index = value.indexOf(v);
        if (index >= 0) {
            var newValue = value.filter(function (opt) { return opt !== v; });
            setter(newValue);
        }
        else {
            setter(__spreadArrays(value, [v]));
        }
    }
    else {
        setter([v]);
    }
}; };
var templateObject_1$e;

var jumpTo = function (id) { return function () {
    var el = document.getElementById(id);
    if (el) {
        el.scrollIntoView();
        el.focus();
    }
}; };
var SkipLinkButton = styled__default(Button)(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  position: absolute;\n  top: var(--clear-unit);\n  left: var(--clear-unit);\n  opacity: 0;\n  pointer-events: none;\n  user-select: none;\n  :focus {\n    opacity: 1;\n    pointer-events: unset;\n    user-select: unset;\n  }\n  \n"], ["\n  position: absolute;\n  top: var(--clear-unit);\n  left: var(--clear-unit);\n  opacity: 0;\n  pointer-events: none;\n  user-select: none;\n  :focus {\n    opacity: 1;\n    pointer-events: unset;\n    user-select: unset;\n  }\n  \n"])));
var SkipLink = function (_a) {
    var id = _a.id;
    return (React.createElement(SkipLinkButton, { onClick: jumpTo(id), primary: true }, "Skip to main content"));
};
var templateObject_1$f;

/**
 * A simple styled `<table>`
 *
 * https://chadlavi.github.io/clear/#/table#table
 */
var Table = styled__default('table')(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  border-collapse: collapse;\n  flex-basis: 100%;\n  width: 100%;\n"], ["\n  border-collapse: collapse;\n  flex-basis: 100%;\n  width: 100%;\n"])));
var templateObject_1$g;

/**
 * A simple styled `<td>`
 *
 * Can also be used to create a `<th>`:
 *
 * ```tsx
 * <TableCell as='th'>
 *  This will be rendered as a `<th>`
 * </TableCell>
 * ```
 *
 * https://chadlavi.github.io/clear/#/table#tablecell
 */
var TableCell = styled__default('td')(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  text-align: left;\n  padding: var(--clear-unit);\n"], ["\n  text-align: left;\n  padding: var(--clear-unit);\n"])));
var templateObject_1$h;

/**
 * A simple styled `<thead>`
 *
 * https://chadlavi.github.io/clear/#/table#tablehead
 */
var TableHead = styled__default('thead')(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  ", " {\n    font-size: var(--clear-font-size-label);\n    text-align: left;\n    padding: var(--clear-unit);\n    padding-bottom: calc(var(--clear-unit) / 2);\n  }\n"], ["\n  ", " {\n    font-size: var(--clear-font-size-label);\n    text-align: left;\n    padding: var(--clear-unit);\n    padding-bottom: calc(var(--clear-unit) / 2);\n  }\n"])), TableCell);
var templateObject_1$i;

/**
 * A simple styled `<tbody>`
 *
 * https://chadlavi.github.io/clear/#/table#tablebody
 */
var TableBody = styled__default('tbody')(templateObject_1$j || (templateObject_1$j = __makeTemplateObject([""], [""])));
var templateObject_1$j;

/**
 * A simple styled `<tr>`
 *
 * https://chadlavi.github.io/clear/#/table#tablerow
 */
var TableRow = styled__default('tr')(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  &:nth-child(even) {\n    ", " {\n      background-color: var(--clear-zebra);\n    }\n    ", ":first-child {\n      border-radius: var(--clear-unit) 0 0 var(--clear-unit);\n    }\n    ", ":last-child {\n      border-radius: 0 var(--clear-unit) var(--clear-unit) 0;\n    }\n  }\n"], ["\n  &:nth-child(even) {\n    ", " {\n      background-color: var(--clear-zebra);\n    }\n    ", ":first-child {\n      border-radius: var(--clear-unit) 0 0 var(--clear-unit);\n    }\n    ", ":last-child {\n      border-radius: 0 var(--clear-unit) var(--clear-unit) 0;\n    }\n  }\n"])), TableCell, TableCell, TableCell);
var templateObject_1$k;

exports.Button = Button;
exports.CSSVariables = CSSVariables;
exports.Code = Code;
exports.CodeBlock = CodeBlock;
exports.GlobalStyles = GlobalStyles;
exports.Grid = Grid;
exports.GridItem = GridItem;
exports.Header = Header;
exports.Input = Input;
exports.Label = Label;
exports.Link = Link;
exports.Page = Page;
exports.Paragraph = Paragraph;
exports.ScrollContainer = ScrollContainer;
exports.Select = Select;
exports.SkipLink = SkipLink;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableCell = TableCell;
exports.TableHead = TableHead;
exports.TableRow = TableRow;
exports.colors = colors;
exports.errorFocusStyle = errorFocusStyle;
exports.focusStyle = focusStyle;
exports.handleMultiSelectChange = handleMultiSelectChange;
exports.numbers = numbers;
exports.useBreakpoint = useBreakpoint;
exports.useDarkMode = useDarkMode;
exports.useMediaQuery = useMediaQuery;
exports.useResponsiveColor = useResponsiveColor;
