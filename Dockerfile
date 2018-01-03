FROM node:8-alpine
MAINTAINER Nanang Suryadi <nanang.jobs@gmail.com>
#Change timezone to Asia/Jakarta
ENV TZ=Asia/Jakarta
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Bundle app source
ADD . /app

RUN npm install \
	&& npm run build \
  && rm -rf node_modules \
  && npm install --prod

EXPOSE 80 443 5033

# defined in package.json
CMD ["npm", "run", "start:prod"]
