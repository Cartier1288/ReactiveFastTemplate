const fs = require("node:fs");
const { exec } = require("node:child_process")
const path = require("node:path");
const form = require("yup-locales");
form.en = require("yup/lib/locale");
const { condenseIntl } = require("./src/utils");


// copied from https://stackoverflow.com/questions/18112204/get-all-directories-within-directory-nodejs
function getDirectories(parent) {
    return fs.readdirSync(parent, { withFileTypes: true })
        .filter(f => f.isDirectory())
        .map(d => d.name);
}


const lang = path.join(process.env.DIR_I18N, "lang");

if(!fs.existsSync(lang)) {
    console.log("unable to access lang directory")
    process.exit(1);
}

const langDirSet = getDirectories(lang).map(d => path.join(lang, d));

for (const d of langDirSet) {
    const locale = path.win32.basename(d);

    // "condense" and add locale file from yup-locales
    // if it exists to path
    if(form[locale]) {
        formLocale = JSON.stringify(condenseIntl({ 
            form: { 
                errors: {
                    ...form[locale]
                }
            } 
        }), null, 4);
        fs.writeFileSync(path.join(d, "yup-" + locale + ".json"), formLocale);
    }

    exec("npx formatjs compile " + path.join(d, "*") + " --out-file " + path.join(lang, locale + ".json"),
        (error, stdout, stderr) => {
            if(error) {
                console.log(`error: ${error.message}`);
            }
            if(stderr) {
                console.log(`stderr: ${stderr}`);
            }
            console.log(stdout);
            console.log(`finished compiling ${path.join(lang, locale + ".json")}`);
        });
}