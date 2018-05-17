all: css/style.css

css/style.css: css/*.scss
	@sass --style=nested --sourcemap=none $< $@ && rm -rf ./.sass-cache
