FROM kkarczmarczyk/node-yarn:latest

# Create app folder
RUN mkdir -p /app
WORKDIR /app

# Cache npm dependencies
COPY package.json /app/
COPY yarn.lock /app/
RUN yarn

# Copy application files
COPY . /app

EXPOSE 8080

CMD ["yarn", "start"]
