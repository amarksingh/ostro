const fs = require('fs');
const path = require('path');

/**
 * Copy file or directory recursively.
 *
 * @param {string} src - Source path.
 * @param {string} dest - Destination path.
 */
function copyRecursiveSync(src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();

    if (isDirectory) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        for (const childItemName of fs.readdirSync(src)) {
            copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        }
    } else if (exists) {
        const parent = path.dirname(dest);
        if (!fs.existsSync(parent)) {
            fs.mkdirSync(parent, { recursive: true });
        }
        fs.copyFileSync(src, dest);
    }
}

/**
 * List of static non-ts root files to copy to build.
 */
const staticFiles = [
    '.env.example',
    '.gitignore',
    'README.md',
    'LICENSE.md',
    'AGY.md',
    'assistant',
    'webpack.mix.js',
    'package.json'
];

/**
 * List of static non-ts directories to copy to build.
 */
const staticDirectories = [
    'public',
    'resources',
    'storage'
];

// Copy root static files
for (const file of staticFiles) {
    if (fs.existsSync(file)) {
        copyRecursiveSync(file, path.join('build', file));
    }
}

// Copy static directories
for (const dir of staticDirectories) {
    if (fs.existsSync(dir)) {
        copyRecursiveSync(dir, path.join('build', dir));
    }
}

// Copy .gitignore files in database or other subdirectories if present
if (fs.existsSync('database/.gitignore')) {
    copyRecursiveSync('database/.gitignore', path.join('build', 'database', '.gitignore'));
}

// Ensure assistant is executable in build
if (fs.existsSync('build/assistant')) {
    try {
        fs.chmodSync('build/assistant', 0o755);
    } catch (_) {
        // ignore on platforms where chmod is not supported
    }
}

console.log('✓ Successfully copied framework static assets (.env, .gitignore, .md, views, public, storage) into build.');
