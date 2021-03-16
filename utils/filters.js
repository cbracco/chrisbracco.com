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
    // https://github.com/11ty/eleventy/issues/898#issuecomment-617628635
    sortByOrder: (values) => {
        let vals = [...values];     // this *seems* to prevent collection mutation...
        return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
    }
};
