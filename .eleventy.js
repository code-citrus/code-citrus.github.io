module.exports = function(eleventyConfig) {

    // Copy styles to dir.output. These are brought in
    // by teh base template.
    eleventyConfig.addPassthroughCopy('styles/*.css');

    return {
        dir: {

            // 🗒️ Templates 
            input: 'views',

            // ⚒️ Build directory
            output: '_site',

            // 🧩Files consumed by other templates such as
            // layouts (unless using dir.layotus), macros, etc.
            // ⚠️ relative to dir.input.
            includes: '_includes',
            
        }
    }
}