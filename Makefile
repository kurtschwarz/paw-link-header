babel      := ./node_modules/.bin/babel
babel_args := --source-maps inline

js_files := $(shell find src -type f \( -name "*.js" ! -path "./node_modules/*" \))

build: $(js_files)
	@set -exo pipefail ; \
		$(babel) $(babel_args) $^ --out-file ./dist/LinkHeaderDynamicValue.js
.PHONY: build
