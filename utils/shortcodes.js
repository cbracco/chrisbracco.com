const Image = require('@11ty/eleventy-img');

module.exports = {
    photo: async (src, title, location, gear) => {
        let metadata = await Image(src, {
            widths: [320, null],
            urlPath: '/assets/images',
            outputDir: './public/assets/images',
        });

        let thumb = metadata.jpeg[0];
        let full = metadata.jpeg[1];

        return `<a href="${full.url}" data-sub-html="<div>${title}</div><div>${location}</div><div>${gear}</div>">
            <img
                data-src="${thumb.url}"
                alt="${title}"
                width="${thumb.width}"
                height="${thumb.height}"
                loading="lazy"
                class="lazyload"
                decoding="async">
        </a>`;
    },
    // https://www.11ty.dev/docs/plugins/image/
    img: async (src, alt, sizes = '100vw', caption, lazy = true) => {
        let metadata = await Image(src, {
            widths: [640, 1024, null],
            urlPath: '/assets/images',
            outputDir: './public/assets/images',
        });

        let lowsrc = metadata.jpeg[0];

        return `<figure class="figure"><picture>
    ${Object.values(metadata).map(imageFormat => {
        return `  <source type="${imageFormat[0].sourceType}" ${ lazy ? 'data-' : ''}srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" ${ lazy ? 'data-' : ''}sizes="${sizes}">`;
    }).join("\n")}
    <img
        ${ lazy ? 'data-' : ''}src="${lowsrc.url}"
        width="${lowsrc.width}"
        height="${lowsrc.height}"
        alt="${alt}"
        ${ lazy ? 'class="lazyload"' : '' }
        ${ lazy ? 'loading="lazy"'  : '' }
        decoding="async">
    </picture>
    ${caption ? `<figcaption>${caption}</figcaption>` : ''}
</figure>`;
    },
    codepen: (id, defaultTab = 'result', height = 600, breakout = true) => {
        return `<div class="post__codepen"${breakout ? ' data-breakout' : ''}>
            <div data-height="${height}" data-slug-hash="${id}" data-default-tab="${defaultTab}" data-user="cbracco" data-border="thick" data-border-color="#18191f" data-tab-bar-color="#3a3c47" data-tab-color="#717482" data-tab-link-color="#dcdee4" data-active-tab-color="#717482" data-link-logo-color="#3a3c47" data-embed-version="1" class="codepen"></div>
            <script async src="//assets.codepen.io/assets/embed/ei.js"></script>
        </div>`;
    },
    codesandbox: (url, height = 600, breakout = true) => {
        return `<div class="post__codesandbox"${breakout ? ' data-breakout' : ''}>
            <iframe src="${url}"
                style="width:100%;height:${height}px;border:0;overflow:hidden;"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
        </div>`;
    },
};
