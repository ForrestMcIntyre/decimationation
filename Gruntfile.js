module.exports = function(grunt){
   grunt.loadNpmTasks("grunt-autoprefixer");
   grunt.loadNpmTasks("grunt-concurrent");
   grunt.loadNpmTasks("grunt-contrib-less");
   grunt.loadNpmTasks("grunt-contrib-watch");
   grunt.loadNpmTasks("grunt-minified");
   grunt.loadNpmTasks("grunt-nodemon");

   grunt.initConfig({
      autoprefixer: {
         dev: {
            expand: true,
            flatten: true,
            src: "src/css/**/*.css",
            dest: "build/css/"
         }
      },
      concurrent: {
         dev: {
            tasks: ["watch", "nodemon"],
            options: {
               logConcurrentOutput:true
            }
         }
      },
      minified: {
         files: {
            src: "src/js/**/*.js",
            dest: "build/js/"
         }
      },
      nodemon: {
         script: "index.js"
      },
      less: {
         dev: {
            options: {
               paths: ["src/less"]
            },
            files: [{
               expand: true,
               cwd: "src/less",
               src: ["**/*.less"],
               dest: "src/css",
               ext: ".css"
            }]
         }
      },
      watch: {
         options: {
            livereload: true
         },
         less: {
            files: "src/**/*.less",
            tasks: ["less"]
         },
         css: {
            files: "src/**/*.css",
            tasks: ["autoprefixer"]
         },
         js: {
            files: "src/**/*.js",
            tasks: ["minified"]
         },
         html: {
            files: "**/*.html",
            tasks: []
         }
      }
   });

   grunt.registerTask("default", ["less", "autoprefixer", "minified", "concurrent"]);
   grunt.registerTask("build", ["less", "autoprefixer", "minified"]);
}
