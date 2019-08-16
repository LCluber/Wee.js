module.exports = function(grunt) {
  var path = require("path");
  var babel = require("rollup-plugin-babel");
  var resolve = require("rollup-plugin-node-resolve");

  require("time-grunt")(grunt);

  var projectName = "Wee";
  var projectNameLC = projectName.toLowerCase();

  var port = 3000;
  var host = "localhost";

  var srcDir = "src/";
  var compiledSrcDir = srcDir + "ts/build/";
  var compiledES6Dir = compiledSrcDir + "es6/";
  var distDir = "dist/";

  var banner =
    "/** MIT License\n" +
    "* \n" +
    "* Copyright (c) 2015 Ludovic CLUBER \n" +
    "* \n" +
    "* Permission is hereby granted, free of charge, to any person obtaining a copy\n" +
    '* of this software and associated documentation files (the "Software"), to deal\n' +
    "* in the Software without restriction, including without limitation the rights\n" +
    "* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n" +
    "* copies of the Software, and to permit persons to whom the Software is\n" +
    "* furnished to do so, subject to the following conditions:\n" +
    "*\n" +
    "* The above copyright notice and this permission notice shall be included in all\n" +
    "* copies or substantial portions of the Software.\n" +
    "*\n" +
    '* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n' +
    "* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n" +
    "* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n" +
    "* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n" +
    "* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n" +
    "* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n" +
    "* SOFTWARE.\n" +
    "*\n" +
    "* https://github.com/LCluber/Wee.js\n" +
    "*/\n";

  grunt.option("stack", true);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    clean: {
      lib: {
        src: [distDir + "*", compiledES6Dir + "*"]
      }
    },
    ts: {
      options: {
        fast: "never"
        //rootDir: srcDir + 'ts/'
      },
      es6: {
        tsconfig: "tsconfig.json",
        src: [srcDir + "ts/**/*.ts", "!node_modules/**/*.ts"]
      },
      es5: {
        tsconfig: "tsconfig.es5.json",
        src: [srcDir + "ts/**/*.ts", "!node_modules/**/*.ts"]
      }
    },
    rollup: {
      es6: {
        options: {
          format: "es",
          // moduleName: projectName,
          banner: banner,
          // sourceMap: 'inline'
          plugins: [
            // resolve({
            // //   //exclude: './node_modules/**'
            // })
          ],
          external: ["@lcluber/chjs", "@lcluber/mouettejs"]
        },
        files: [
          {
            src: compiledES6Dir + projectNameLC + ".js",
            dest: distDir + projectNameLC + ".js"
          }
        ]
      },
      iife: {
        options: {
          format: "iife",
          moduleName: projectName,
          banner: banner,
          plugins: [
            resolve({
              module: true,
              browser: true
              //   //exclude: './node_modules/**'
            }),
            babel({
              //   //exclude: './node_modules/**'
            })
          ]
        },
        files: [
          {
            src: compiledES6Dir + projectNameLC + ".js",
            dest: distDir + projectNameLC + ".iife.js"
          }
        ]
      }
    },
    uglify: {
      libIife: {
        options: {
          sourceMap: false,
          sourceMapName: srcDir + "sourcemap.map",
          banner: banner,
          mangle: {
            reserved: [projectName]
          },
          compress: {
            sequences: true,
            properties: true,
            dead_code: true,
            unsafe: false,
            conditionals: true,
            comparisons: true,
            booleans: true,
            loops: true,
            unused: true,
            hoist_funs: true,
            if_return: true,
            join_vars: true,
            warnings: true,
            drop_console: true,
            keep_fargs: false,
            keep_fnames: false
          }
        },
        src: distDir + projectNameLC + ".iife.js",
        dest: distDir + projectNameLC + ".iife.min.js"
      }
    },
    concat: {
      declaration: {
        options: {
          separator: "",
          stripBanners: false,
          banner: banner
        },
        src: compiledES6Dir + "*.d.ts",
        dest: distDir + projectNameLC + ".d.ts"
      }
    },
    strip_code: {
      options: {
        //import { IBase64Service } from '../services/base64.service';
        // /// <reference path="../config/typings/index.d.ts" />
        patterns: [
          /import { .* } from "\..*";/g,
          /export { .* } from ".*";/g
          // /\/\/\/ <reference path=.*\/>/g
        ]
      },
      declaration: {
        src: distDir + projectName + ".d.ts"
      }
    },
    watch: {
      lib: {
        files: [srcDir + "ts/**/*.ts", "!" + srcDir + "ts/build/*"],
        tasks: ["lib", "webjs"]
      },
      options: {
        interrupt: true,
        spawn: false,
        livereload: true,
        livereloadOnError: false
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-strip-code");
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-rollup");

  grunt.registerTask("lib", "build the library in the dist/ folder", [
    // 'tslint:lib',
    "clean:lib",
    //lib es6
    "ts:es6",
    "rollup:es6",
    //lib es5
    //'ts:es5',
    "rollup:iife",
    "uglify:libIife",
    //declaration
    "concat:declaration",
    "strip_code:declaration"
  ]);

  grunt.registerTask("build", "build for production", function() {
    //build lib
    grunt.task.run("lib");
  });
};
