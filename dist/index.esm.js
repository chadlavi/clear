import { useState, useCallback, useEffect, createElement } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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
        border: '#ddd',
        error: '#cf0303',
        link: '#55e',
        textColor: '#111',
        zebra: '#f8f8f8',
    },
    dark: {
        background: '#111',
        border: '#555',
        error: '#ff5656',
        link: '#8787f9',
        textColor: 'white',
        zebra: '#242424',
    }
};

var focusStyle = "\n:focus {\n  outline: none;\n  box-shadow: 0 0 0 calc(var(--clear-unit) / 4) var(--clear-background), 0 0 0 calc(var(--clear-unit) / 2) var(--clear-link);\n}\n";
var errorFocusStyle = "\n:focus {\n  outline: none;\n  box-shadow: 0 0 0 calc(var(--clear-unit) / 4) var(--clear-background), 0 0 0 calc(var(--clear-unit) / 2) var(--clear-error);\n}\n";

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
        main: 90 * unit,
    },
    unit: unit,
};

/**
 * Creates a set of css variables necessary for global colors. This component
 * should be included once at the top level of your application.
 *
 * https://chadlavi.github.io/clear/#/global-styles
 */
var CSSVariables = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  :root {\n    --clear-background: ", ";\n    --clear-border: ", ";\n    --clear-error: ", ";\n    --clear-link: ", ";\n    --clear-text-color: ", ";\n    --clear-zebra: ", ";\n    --clear-unit: ", "px;\n    --clear-font-size-default: ", "px;\n    --clear-font-size-label: ", "px;\n    --clear-font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;\n    --clear-monospace-font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;\n  }\n\n  @media (prefers-color-scheme: dark) {\n    :root {\n      --clear-background: ", ";\n      --clear-border: ", ";\n      --clear-error: ", ";\n      --clear-link: ", ";\n      --clear-text-color: ", ";\n      --clear-zebra: ", ";\n    }\n  }\n  "], ["\n  :root {\n    --clear-background: ", ";\n    --clear-border: ", ";\n    --clear-error: ", ";\n    --clear-link: ", ";\n    --clear-text-color: ", ";\n    --clear-zebra: ", ";\n    --clear-unit: ", "px;\n    --clear-font-size-default: ", "px;\n    --clear-font-size-label: ", "px;\n    --clear-font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;\n    --clear-monospace-font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;\n  }\n\n  @media (prefers-color-scheme: dark) {\n    :root {\n      --clear-background: ", ";\n      --clear-border: ", ";\n      --clear-error: ", ";\n      --clear-link: ", ";\n      --clear-text-color: ", ";\n      --clear-zebra: ", ";\n    }\n  }\n  "
    /**
     * Applies styles to the `<body>` of your app.
     *
     * https://chadlavi.github.io/clear/#/global-styles
     */
])), colors.light.background, colors.light.border, colors.light.error, colors.light.link, colors.light.textColor, colors.light.zebra, numbers.unit, numbers.fontSize.default, numbers.fontSize.label, colors.dark.background, colors.dark.border, colors.dark.error, colors.dark.link, colors.dark.textColor, colors.dark.zebra);
/**
 * Applies styles to the `<body>` of your app.
 *
 * https://chadlavi.github.io/clear/#/global-styles
 */
var GlobalStyles = createGlobalStyle(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  body {\n    margin: 0;\n    background-color: var(--clear-background);\n    color: var(--clear-text-color);\n    font-family: var(--clear-font-family);\n    font-size: var(--clear-font-size-default);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"], ["\n  body {\n    margin: 0;\n    background-color: var(--clear-background);\n    color: var(--clear-text-color);\n    font-family: var(--clear-font-family);\n    font-size: var(--clear-font-size-default);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"])));
var templateObject_1, templateObject_2;

var useResponsiveColor = function (color) {
    var _a = useState(matchMedia('(prefers-color-scheme: dark)').matches), result = _a[0], setResult = _a[1];
    var callback = useCallback(function (matchMediaResult) { return setResult(matchMediaResult.matches); }, [setResult]);
    useEffect(function () {
        var matchMediaResult = matchMedia('(prefers-color-scheme: dark)');
        callback(matchMediaResult);
        matchMediaResult.addListener(callback);
        return function () { return matchMediaResult.removeListener(callback); };
    }, [callback]);
    return colors[result ? 'dark' : 'light'][color];
};

var ButtonBase = function (_a) {
    var primary = _a.primary, props = __rest(_a, ["primary"]);
    return createElement("button", __assign({}, props));
};
/**
 * A simple styled `<button>`
 *
 * https://chadlavi.github.io/clear/#/button
 */
var Button = styled(ButtonBase)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  background: var(--clear-border);\n  border-radius: var(--clear-unit);\n  border: none;\n  color: inherit;\n  ", ";\n  cursor: pointer;\n  ", ";\n  font-size: var(--clear-font-size-label);\n  margin: 0;\n  padding: var(--clear-unit) calc(var(--clear-unit) * 2);\n  @media (prefers-color-scheme: dark) {\n    font-weight: 500;\n  }\n  ", "\n"], ["\n  background: var(--clear-border);\n  border-radius: var(--clear-unit);\n  border: none;\n  color: inherit;\n  ",
    ";\n  cursor: pointer;\n  ",
    ";\n  font-size: var(--clear-font-size-label);\n  margin: 0;\n  padding: var(--clear-unit) calc(var(--clear-unit) * 2);\n  @media (prefers-color-scheme: dark) {\n    font-weight: 500;\n  }\n  ", "\n"])), function (p) { return p.primary && "\n    background: var(--clear-link);\n    color: var(--clear-background);\n  "; }, function (p) { return p.disabled && "\n    cursor: not-allowed;\n    opacity: 0.5;\n  "; }, focusStyle);
var templateObject_1$1;

/**
 * A simple styled `<code>`
 *
 * https://chadlavi.github.io/clear/#/text
 */
var Code = styled('code')(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  font-family: var(--clear-monospace-font-family);\n  font-size: 0.9em;\n  display: inline;\n  margin: 0;\n  background: var(--clear-zebra);\n  padding: calc(var(--clear-unit) / 2 - 2px) calc(var(--clear-unit) / 2 - 1px);\n  border-radius: calc(var(--clear-unit) / 2);\n"], ["\n  font-family: var(--clear-monospace-font-family);\n  font-size: 0.9em;\n  display: inline;\n  margin: 0;\n  background: var(--clear-zebra);\n  padding: calc(var(--clear-unit) / 2 - 2px) calc(var(--clear-unit) / 2 - 1px);\n  border-radius: calc(var(--clear-unit) / 2);\n"])));
var templateObject_1$2;

/**
 * A simple styled `<pre>` for formatting code blocks
 *
 * https://chadlavi.github.io/clear/#/text
 */
var CodeBlock = styled('pre')(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  font-family: var(--clear-monospace-font-family);\n  font-size: 0.9em;\n  line-height: 1.5;\n  display: block;\n  margin: 0;\n  background: var(--clear-zebra);\n  padding: calc(var(--clear-unit) * 2);\n  border-radius: var(--clear-unit);\n  overflow-x: auto;\n"], ["\n  font-family: var(--clear-monospace-font-family);\n  font-size: 0.9em;\n  line-height: 1.5;\n  display: block;\n  margin: 0;\n  background: var(--clear-zebra);\n  padding: calc(var(--clear-unit) * 2);\n  border-radius: var(--clear-unit);\n  overflow-x: auto;\n"])));
var templateObject_1$3;

var Container = function (_a) {
    var spacing = _a.spacing, props = __rest(_a, ["spacing"]);
    return createElement("div", __assign({}, props));
};
/**
 * A simple 12-column grid container. Must be used in conjunciton with
 * `<GridItem>`.
 *
 * https://chadlavi.github.io/clear/#/grid
 */
var Grid = styled(Container)(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: ", "px;\n  & > div {\n    padding: ", "px;\n  }\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  padding: ", "px;\n  & > div {\n    padding: ", "px;\n  }\n"])), function (p) { return p.spacing ? (p.spacing / 2) : 0; }, function (p) { return p.spacing ? p.spacing / 2 : 0; });
var templateObject_1$4;

var Container$1 = function (_a) {
    var size = _a.size, props = __rest(_a, ["size"]);
    return createElement("div", __assign({}, props));
};
/**
 * A simple 12-column grid item. Must be used as a direct child of `<Grid>`.
 *
 * https://chadlavi.github.io/clear/#/grid
 */
var GridItem = styled(Container$1)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  flex-basis: calc(100% * ", " / 12);\n  width: calc(100% * ", " / 12);\n  @media only screen and (max-width: ", "px) {\n    flex-basis: 100%;\n    width: 100%;\n  }\n"], ["\n  flex-basis: calc(100% * ", " / 12);\n  width: calc(100% * ", " / 12);\n  @media only screen and (max-width: ", "px) {\n    flex-basis: 100%;\n    width: 100%;\n  }\n"])), function (p) { return p.size || 12; }, function (p) { return p.size || 12; }, numbers.breakpoint.xs);
var templateObject_1$5;

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
 * https://chadlavi.github.io/clear/#/text
 */
var Header = styled('h1')(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject([""], [""])));
var templateObject_1$6;

var Label = function (_a) {
    var disabled = _a.disabled, error = _a.error, props = __rest(_a, ["disabled", "error"]);
    return createElement("label", __assign({}, props));
};
var StyledLabel = styled(Label)(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  ", ";\n  width: 100%;\n  & > span {\n    font-size: var(--clear-font-size-label);\n  }\n"], ["\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  ",
    ";\n  width: 100%;\n  & > span {\n    font-size: var(--clear-font-size-label);\n  }\n"
    /**
     * Calls props.onClick, but also selects the contents of the Input on click
     * @param func the onClick passed to `<Input>`
     */
])), function (p) { return p.error ? 'var(--clear-error)' : 'inherit'; }, function (p) { return p.disabled && "\n    opacity: 0.5;\n  "; });
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
var InputBase = function (_a) {
    var error = _a.error, label = _a.label, props = __rest(_a, ["error", "label"]);
    return (createElement("input", __assign({}, props, { onClick: forwardOnClick(props.onClick), onFocus: forwardOnFocus(props.onFocus) })));
};
var StyledInput = styled(InputBase)(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  background-color: var(--clear-background);\n  color: var(--clear-", ");\n  border: 1px solid var(--clear-", ");\n  border-radius: var(--clear-unit);\n  padding: calc(var(--clear-unit) * 1.5);\n  font-size: inherit;\n  margin: calc(var(--clear-unit) / 2) 0;\n  width: 100%;\n  -webkit-appearance: none;\n  ", "\n  ", "\n"], ["\n  background-color: var(--clear-background);\n  color: var(--clear-", ");\n  border: 1px solid var(--clear-", ");\n  border-radius: var(--clear-unit);\n  padding: calc(var(--clear-unit) * 1.5);\n  font-size: inherit;\n  margin: calc(var(--clear-unit) / 2) 0;\n  width: 100%;\n  -webkit-appearance: none;\n  ", "\n  ", "\n"
    /**
     * A simple styled Input
     *
     * https://chadlavi.github.io/clear/#/input
     */
])), function (p) { return p.error ? 'error' : 'textColor'; }, function (p) { return p.error ? 'error' : 'border'; }, focusStyle, function (p) { return p.error && errorFocusStyle; });
/**
 * A simple styled Input
 *
 * https://chadlavi.github.io/clear/#/input
 */
var Input = function (props) {
    var label = props.label, value = props.value, other = __rest(props, ["label", "value"]);
    return (createElement(StyledLabel, { disabled: other.disabled, error: other.error },
        createElement("span", null,
            label,
            other.required ? ' (Required)' : ''),
        createElement(StyledInput, __assign({}, other, { value: value || (other.type === 'number' ? ' ' : '') }))));
};
var templateObject_1$7, templateObject_2$1;

var Anchor = function (props) {
    var _a;
    var isExternal = Boolean((_a = props.href) === null || _a === void 0 ? void 0 : _a.match(/^http/));
    return (createElement("a", __assign({}, props, { target: isExternal ? '_blank' : props.target, rel: isExternal ? 'noopener noreferrer' : props.rel, title: props.title || "Open \"" + props.href + "\"" + (isExternal ? ' in a new Tab' : '') })));
};
/**
 * A simple styled `<a>`
 *
 * https://chadlavi.github.io/clear/#/link
 */
var Link = styled(Anchor)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  color: var(--clear-link);\n  ", "\n  &[target='_blank']::after {\n    content: ' [\u2197]';\n  }\n"], ["\n  color: var(--clear-link);\n  ", "\n  &[target='_blank']::after {\n    content: ' [\\u2197]';\n  }\n"])), focusStyle);
var templateObject_1$8;

/**
 * A simple styled `<main>`
 *
 * https://chadlavi.github.io/clear/#/layout
 */
var Page = styled('main')(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\nmargin: 0 auto;\nmargin-bottom: calc(var(--clear-unit) * 15);\npadding: var(--clear-unit);\nwidth: ", "px;\nbackground-color: var(--clear-background);\ncolor: var(--clear-text-color);\nfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\nfont-size: var(--clear-font-size-default);\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;\nmax-width: 100%;\n&, & * {\n  box-sizing: border-box;\n}\n"], ["\nmargin: 0 auto;\nmargin-bottom: calc(var(--clear-unit) * 15);\npadding: var(--clear-unit);\nwidth: ", "px;\nbackground-color: var(--clear-background);\ncolor: var(--clear-text-color);\nfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\nfont-size: var(--clear-font-size-default);\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;\nmax-width: 100%;\n&, & * {\n  box-sizing: border-box;\n}\n"])), numbers.width.main);
var templateObject_1$9;

var ParagraphBase = function (_a) {
    var margins = _a.margins, props = __rest(_a, ["margins"]);
    return createElement("p", __assign({}, props));
};
/**
 * A simple styled `<p>`
 *
 * https://chadlavi.github.io/clear/#/text
 */
var Paragraph = styled(ParagraphBase)(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  line-height: 1.5;\n  ", "\n"], ["\n  line-height: 1.5;\n  ",
    "\n"])), function (p) { return p.margins === false ? "\n    margin-block-start: 0;\n    margin-block-end: 0;\n  " : "\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n  "; });
var templateObject_1$a;

/**
 * A simple styled `<table>`
 *
 * https://chadlavi.github.io/clear/#/table
 */
var Table = styled('table')(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  border-collapse: collapse;\n  flex-basis: 100%;\n  width: 100%;\n"], ["\n  border-collapse: collapse;\n  flex-basis: 100%;\n  width: 100%;\n"])));
var templateObject_1$b;

/**
 * A simple styled `<thead>`
 *
 * https://chadlavi.github.io/clear/#/table
 */
var TableHead = styled('thead')(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  th {\n    font-size: var(--clear-font-size-label);\n    text-align: left;\n    padding: var(--clear-unit);\n    padding-bottom: calc(var(--clear-unit) / 2);\n  }\n"], ["\n  th {\n    font-size: var(--clear-font-size-label);\n    text-align: left;\n    padding: var(--clear-unit);\n    padding-bottom: calc(var(--clear-unit) / 2);\n  }\n"])));
var templateObject_1$c;

/**
 * A simple styled `<tbody>`
 *
 * https://chadlavi.github.io/clear/#/table
 */
var TableBody = styled('tbody')(templateObject_1$d || (templateObject_1$d = __makeTemplateObject([""], [""])));
var templateObject_1$d;

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
 * https://chadlavi.github.io/clear/#/table
 */
var TableCell = styled('td')(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  text-align: left;\n  padding: var(--clear-unit);\n"], ["\n  text-align: left;\n  padding: var(--clear-unit);\n"])));
var templateObject_1$e;

/**
 * A simple styled `<tr>`
 *
 * https://chadlavi.github.io/clear/#/table
 */
var TableRow = styled('tr')(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  &:nth-child(even) {\n    td {\n      background-color: var(--clear-zebra);\n    }\n    td:first-child {\n      border-radius: var(--clear-unit) 0 0 var(--clear-unit);\n    }\n    td:last-child {\n      border-radius: 0 var(--clear-unit) var(--clear-unit) 0;\n    }\n  }\n"], ["\n  &:nth-child(even) {\n    td {\n      background-color: var(--clear-zebra);\n    }\n    td:first-child {\n      border-radius: var(--clear-unit) 0 0 var(--clear-unit);\n    }\n    td:last-child {\n      border-radius: 0 var(--clear-unit) var(--clear-unit) 0;\n    }\n  }\n"])));
var templateObject_1$f;

export { Button, CSSVariables, Code, CodeBlock, GlobalStyles, Grid, GridItem, Header, Input, Link, Page, Paragraph, Table, TableBody, TableCell, TableHead, TableRow, colors, errorFocusStyle, focusStyle, numbers, useResponsiveColor };
