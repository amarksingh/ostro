const fs = require('fs');
const path = require('path');

function preparePackage(pkgDir = process.cwd()) {
    const rootPkgPath = path.join(pkgDir, 'package.json');
    if (!fs.existsSync(rootPkgPath)) {
        console.error('No package.json found in ' + pkgDir);
        process.exit(1);
    }

    const rootPkg = JSON.parse(fs.readFileSync(rootPkgPath, 'utf8'));
    const buildDir = path.join(pkgDir, 'build');

    if (!fs.existsSync(buildDir)) {
        console.error('Build directory does not exist: ' + buildDir);
        process.exit(1);
    }

    const pubPkg = { ...rootPkg };

    if (pubPkg.name !== "@ostro/ostro") delete pubPkg.devDependencies;
    if (pubPkg.name === "@ostro/ostro") {
        pubPkg.scripts = {
            "dev": "npm run development",
            "development": "mix",
            "watch": "mix watch",
            "watch-poll": "mix watch -- --watch-options-poll=1000",
            "hot": "mix watch --hot",
            "prod": "npm run production",
            "build": "tsc -p tsconfig.build.json",
            "build:clean": "rm -rf build && npm run build",
            "server:start": "ts-node app.ts"
        };
    } else {
        delete pubPkg.scripts;
    }
    delete pubPkg.files;

    const stripBuild = (str) => {
        if (!str || typeof str !== 'string') return str;
        return str.replace(/^(\.\/)?build\//, './');
    };

    if (pubPkg.main) pubPkg.main = stripBuild(pubPkg.main).replace(/^\.\//, '');
    if (pubPkg.types) pubPkg.types = stripBuild(pubPkg.types).replace(/^\.\//, '');
    if (pubPkg.bin) {
        if (typeof pubPkg.bin === 'string') {
            pubPkg.bin = stripBuild(pubPkg.bin).replace(/^\.\//, "");
        } else if (typeof pubPkg.bin === 'object') {
            const newBin = {};
            for (const [k, v] of Object.entries(pubPkg.bin)) {
                newBin[k] = stripBuild(v).replace(/^\.\//, "");
            }
            pubPkg.bin = newBin;
        }
    }

    if (pubPkg.exports) {
        const rewriteExports = (obj) => {
            if (typeof obj === 'string') return stripBuild(obj);
            if (Array.isArray(obj)) return obj.map(rewriteExports);
            if (typeof obj === "object" && obj !== null) {
                const res = {};
                for (const [k, v] of Object.entries(obj)) {
                    res[k] = rewriteExports(v);
                }
                return res;
            }
            return obj;
        };
        pubPkg.exports = rewriteExports(pubPkg.exports);
    }

    fs.writeFileSync(path.join(buildDir, 'package.json'), JSON.stringify(pubPkg, null, 2) + '\n');

    const copyIfExists = (file) => {
        const src = path.join(pkgDir, file);
        if (fs.existsSync(src)) {
            fs.copyFileSync(src, path.join(buildDir, file));
        }
    };

    copyIfExists('tsconfig.json');
    copyIfExists('tsconfig.build.json');
    copyIfExists('README.md');
    copyIfExists('LICENSE.md');
    copyIfExists('LICENSE');

    console.log(`[prepare-package] Successfully prepared ${pubPkg.name}@${pubPkg.version} inside build/`);
}

preparePackage();
