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
var GlobalStyles = styled.createGlobalStyle(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  body {\n    margin: 0;\n    background-color: var(--clear-background);\n    color: var(--clear-textColor);\n    font-family: var(--clear-font-family);\n    font-size: var(--clear-font-size-default);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"], ["\n  body {\n    margin: 0;\n    background-color: var(--clear-background);\n    color: var(--clear-textColor);\n    font-family: var(--clear-font-family);\n    font-size: var(--clear-font-size-default);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"])));
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
    var spacing = _a.spacing, props = __rest(_a, ["spacing"]);
    return React.createElement("div", __assign({}, props));
};
/**
 * A simple 12-column grid container. Must be used in conjunciton with
 * `<GridItem>`.
 *
 * https://chadlavi.github.io/clear/#/layout#grid
 */
var Grid = styled__default(Container)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: ", "px;\n  & > div {\n    padding: ", "px;\n  }\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  padding: ", "px;\n  & > div {\n    padding: ", "px;\n  }\n"])), function (p) { return p.spacing ? p.spacing / 2 : 0; }, function (p) { return p.spacing ? p.spacing / 2 : 0; });
var templateObject_1$5;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
var Container$1 = function (_a) {
    var size = _a.size, props = __rest(_a, ["size"]);
    return React.createElement("div", __assign({}, props));
};
/**
 * A simple 12-column grid item. Must be used as a direct child of `<Grid>`.
 *
 * https://chadlavi.github.io/clear/#/layout#griditem
 */
var GridItem = styled__default(Container$1)(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  flex-basis: calc(100% * ", " / 12);\n  width: calc(100% * ", " / 12);\n  max-width: calc(100% * ", " / 12);\n  @media only screen and (max-width: ", "px) {\n    flex-basis: 100%;\n    width: 100%;\n    max-width: 100%;\n  }\n"], ["\n  flex-basis: calc(100% * ", " / 12);\n  width: calc(100% * ", " / 12);\n  max-width: calc(100% * ", " / 12);\n  @media only screen and (max-width: ", "px) {\n    flex-basis: 100%;\n    width: 100%;\n    max-width: 100%;\n  }\n"])), function (p) { return p.size || 12; }, function (p) { return p.size || 12; }, function (p) { return p.size || 12; }, numbers.breakpoint.xs);
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
var Label = function (_a) {
    var disabled = _a.disabled, error = _a.error, props = __rest(_a, ["disabled", "error"]);
    return React.createElement("label", __assign({}, props));
};
var StyledLabel = styled__default(Label)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  ", ";\n  width: 100%;\n  & > span {\n    font-size: var(--clear-font-size-label);\n  }\n"], ["\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  ",
    ";\n  width: 100%;\n  & > span {\n    font-size: var(--clear-font-size-label);\n  }\n"
    /**
     * Calls props.onClick, but also selects the contents of the Input on click
     * @param func the onClick passed to `<Input>`
     */
])), function (p) { return p.error ? 'var(--clear-error)' : 'inherit'; }, function (p) { return p.disabled ? "\n    opacity: 0.5;\n  " : ''; });
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
    var error = _a.error, label = _a.label, props = __rest(_a, ["error", "label"]);
    return React.createElement("input", __assign({}, props, { onClick: forwardOnClick(props.onClick), onFocus: forwardOnFocus(props.onFocus) }));
};
var StyledInput = styled__default(InputBase)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: var(--clear-background);\n  color: var(--clear-", ");\n  border: 1px solid var(--clear-", ");\n  border-radius: var(--clear-unit);\n  padding: calc(var(--clear-unit) * 1.5);\n  font-size: inherit;\n  margin: calc(var(--clear-unit) / 2) 0;\n  width: 100%;\n  -webkit-appearance: none;\n  ", "\n  ", "\n"], ["\n  background-color: var(--clear-background);\n  color: var(--clear-", ");\n  border: 1px solid var(--clear-", ");\n  border-radius: var(--clear-unit);\n  padding: calc(var(--clear-unit) * 1.5);\n  font-size: inherit;\n  margin: calc(var(--clear-unit) / 2) 0;\n  width: 100%;\n  -webkit-appearance: none;\n  ", "\n  ", "\n"
    /**
     * A simple styled Input
     *
     * https://chadlavi.github.io/clear/#/input
     */
])), function (p) { return p.error ? 'error' : 'textColor'; }, function (p) { return p.error ? 'error' : 'border'; }, focusStyle, function (p) { return p.error ? errorFocusStyle : ''; });
/**
 * A simple styled Input
 *
 * https://chadlavi.github.io/clear/#/input
 */
var Input = function (props) {
    var label = props.label, value = props.value, other = __rest(props, ["label", "value"]);
    return (React.createElement(StyledLabel, { className: other.className, disabled: other.disabled, error: other.error },
        React.createElement("span", null,
            label,
            other.required ? ' (Required)' : ''),
        React.createElement(StyledInput, __assign({}, other, { value: value || (other.type === 'number' ? ' ' : '') }))));
};
var templateObject_1$8, templateObject_2;

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
var Link = styled__default(Anchor)(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  color: var(--clear-link);\n  ", "\n  &[target='_blank']::after {\n    content: ' [\u2197]';\n  }\n"], ["\n  color: var(--clear-link);\n  ", "\n  &[target='_blank']::after {\n    content: ' [\\u2197]';\n  }\n"])), focusStyle);
var templateObject_1$9;

/**
 * A simple styled `<main>`
 *
 * https://chadlavi.github.io/clear/#/layout#page
 */
var Page = styled__default('main')(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\nmargin: 0 auto;\nmargin-bottom: calc(var(--clear-unit) * 15);\npadding: var(--clear-unit);\nwidth: ", "px;\nbackground-color: var(--clear-background);\ncolor: var(--clear-textColor);\nfont-family: var(--clear-font-family);\nfont-size: var(--clear-font-size-default);\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;\nmax-width: 100%;\n&, & * {\n  box-sizing: border-box;\n}\n"], ["\nmargin: 0 auto;\nmargin-bottom: calc(var(--clear-unit) * 15);\npadding: var(--clear-unit);\nwidth: ", "px;\nbackground-color: var(--clear-background);\ncolor: var(--clear-textColor);\nfont-family: var(--clear-font-family);\nfont-size: var(--clear-font-size-default);\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;\nmax-width: 100%;\n&, & * {\n  box-sizing: border-box;\n}\n"])), numbers.width.main);
var templateObject_1$a;

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
var Paragraph = styled__default(ParagraphBase)(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  line-height: 1.5;\n  ", "\n"], ["\n  line-height: 1.5;\n  ",
    "\n"])), function (p) { return p.margins === false ? "\n    margin-block-start: 0;\n    margin-block-end: 0;\n  " : "\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n  "; });
var templateObject_1$b;

var ContainerBase = function (_a) {
    var  
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    contentMinHeight = _a.contentMinHeight, contentMinWidth = _a.contentMinWidth, _b = _a.direction, maxHeight = _a.maxHeight, maxWidth = _a.maxWidth, props = __rest(_a, ["contentMinHeight", "contentMinWidth", "direction", "maxHeight", "maxWidth"]);
    return React.createElement("div", __assign({}, props));
};
var Container$2 = styled__default(ContainerBase)(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  width: 100%;\n  ", "\n  ", "\n\n  ", "\n"], ["\n  width: 100%;\n  ",
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
var Content = styled__default(ContentBase)(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ",
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
var templateObject_1$c, templateObject_2$1;

/**
 * A simple styled `<table>`
 *
 * https://chadlavi.github.io/clear/#/table#table
 */
var Table = styled__default('table')(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  border-collapse: collapse;\n  flex-basis: 100%;\n  width: 100%;\n"], ["\n  border-collapse: collapse;\n  flex-basis: 100%;\n  width: 100%;\n"])));
var templateObject_1$d;

/**
 * A simple styled `<thead>`
 *
 * https://chadlavi.github.io/clear/#/table#tablehead
 */
var TableHead = styled__default('thead')(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  th {\n    font-size: var(--clear-font-size-label);\n    text-align: left;\n    padding: var(--clear-unit);\n    padding-bottom: calc(var(--clear-unit) / 2);\n  }\n"], ["\n  th {\n    font-size: var(--clear-font-size-label);\n    text-align: left;\n    padding: var(--clear-unit);\n    padding-bottom: calc(var(--clear-unit) / 2);\n  }\n"])));
var templateObject_1$e;

/**
 * A simple styled `<tbody>`
 *
 * https://chadlavi.github.io/clear/#/table#tablebody
 */
var TableBody = styled__default('tbody')(templateObject_1$f || (templateObject_1$f = __makeTemplateObject([""], [""])));
var templateObject_1$f;

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
var TableCell = styled__default('td')(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  text-align: left;\n  padding: var(--clear-unit);\n"], ["\n  text-align: left;\n  padding: var(--clear-unit);\n"])));
var templateObject_1$g;

/**
 * A simple styled `<tr>`
 *
 * https://chadlavi.github.io/clear/#/table#tablerow
 */
var TableRow = styled__default('tr')(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  &:nth-child(even) {\n    td {\n      background-color: var(--clear-zebra);\n    }\n    td:first-child {\n      border-radius: var(--clear-unit) 0 0 var(--clear-unit);\n    }\n    td:last-child {\n      border-radius: 0 var(--clear-unit) var(--clear-unit) 0;\n    }\n  }\n"], ["\n  &:nth-child(even) {\n    td {\n      background-color: var(--clear-zebra);\n    }\n    td:first-child {\n      border-radius: var(--clear-unit) 0 0 var(--clear-unit);\n    }\n    td:last-child {\n      border-radius: 0 var(--clear-unit) var(--clear-unit) 0;\n    }\n  }\n"])));
var templateObject_1$h;

exports.Button = Button;
exports.CSSVariables = CSSVariables;
exports.Code = Code;
exports.CodeBlock = CodeBlock;
exports.GlobalStyles = GlobalStyles;
exports.Grid = Grid;
exports.GridItem = GridItem;
exports.Header = Header;
exports.Input = Input;
exports.Link = Link;
exports.Page = Page;
exports.Paragraph = Paragraph;
exports.ScrollContainer = ScrollContainer;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableCell = TableCell;
exports.TableHead = TableHead;
exports.TableRow = TableRow;
exports.colors = colors;
exports.errorFocusStyle = errorFocusStyle;
exports.focusStyle = focusStyle;
exports.numbers = numbers;
exports.useBreakpoint = useBreakpoint;
exports.useDarkMode = useDarkMode;
exports.useMediaQuery = useMediaQuery;
exports.useResponsiveColor = useResponsiveColor;
