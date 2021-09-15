FROM node:lts as dependencies
WORKDIR /blindly-landing
COPY package.json ./
RUN yarn install

FROM node:lts as builder
WORKDIR /blindly-landing
COPY . .
COPY --from=dependencies /blindly-landing/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /blindly-landing
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /blindly-landing/next.config.js ./
COPY --from=builder /blindly-landing/public ./public
COPY --from=builder /blindly-landing/static ./static
COPY --from=builder /blindly-landing/.next ./.next
COPY --from=builder /blindly-landing/node_modules ./node_modules
COPY --from=builder /blindly-landing/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]

# docker build . -t blindy/landingpage
# docker run -p 3000:3000 blindy/landingpage