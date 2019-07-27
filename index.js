const program = require("commander");
const path = require("path");

program
    .option("-o, --output <filename>", "output filename")
    .option("-t, --target <target>", "target platform", "MSSQL")
    ;

program.parse(process.argv);
if (program.args.length > 0) {
    execute(program.args[0], program.opts());
}

function execute(source, options) {
    source = setMissingExtension(source, ".json");

    let outfilename = (typeof (options.output) !== "undefined") ? options.output : path.basename(source, ".json");
    outfilename = setMissingExtension(outfilename, ".sql");

    
}

function setMissingExtension(filename, extension) {
    if (path.extname(filename).length == 0) {
        return filename + extension;
    }

    return filename;
}