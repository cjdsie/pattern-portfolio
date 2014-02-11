/*jslint node: true */
'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {                                 // Task
			dist: {                             // Target
				files: {                        // Dictionary of files
					'public/stylesheets/pattern.css': 'public/stylesheets/pattern.scss'     // 'destination': 'source'
					}
			},
			dev: {                              // Another target
				options: {
					style: 'compacted',                      // Dictionary of render options
					includePaths: ['stylesheets', 'admin/','patterns/', 'optional/']
				}
			}
		},
		uglify: {
			build: {
				src: 'public/javascripts/pattern.js',
				dest: 'public/javascripts/pattern.min.js'
			}
		},
		cssmin: {
			minify: {
				expand: true,
				cwd: 'public/stylesheets/',
				src: ['pattern.css', '!pattern.min.css'],
				dest: 'public/stylesheets/',
				ext: '.min.css'
			}
		},
		jshint: {
			files: ['Gruntfile.js'],
			options: {
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true
				}
			}
		},
		concat: {
			options: {
				separator: ';'
			},
			js: {
				src: ['public/javascripts/classie.js', 'public/javascripts/prism.js', 'public/javascripts/pattern.js'],
				dest: 'public/javascripts/pattern.min.js'
			}
		},
		watch: {
			files: [
			'public/*',
			'public/stylesheets/*.scss',
			'public/stylesheets/*.css',
			'public/javascripts/*.js',
			'views/*'
			],
			tasks: 'default'
		}
  });

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['sass', 'uglify', 'concat', 'jshint', 'cssmin']);
grunt.registerTask('watch', ['sass', 'uglify', 'concat', 'jshint', 'cssmin']);
};