.PHONY: install start clean

# Install dependencies
install:
	npm install

# Start the development server
start:
	npm start

# Delete node_modules and lock file
clean:
	-rm -rf node_modules
	-rm package-lock.json
	@echo "Cleaned node_modules and package-lock.json"
