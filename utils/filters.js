const { DateTime } = require('luxon');
const rss = require('@11ty/eleventy-plugin-rss');

module.exports = {
    // https://github.com/11ty/eleventy-base-blog/blob/master/.eleventy.js
    readableDate: (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
            `LLLL d, yyyy`
        );
    },
    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    htmlDateString: (dateObj) => {
        return DateTime.fromJSDate(dateObj, {
            zone: 'utc',
        }).toFormat('yyyy-LL-dd');
    },
    // Debug utility
    dump: (obj) => {
        return util.inspect(obj);
    },
};
