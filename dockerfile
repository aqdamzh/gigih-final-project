FROM node:14-slim AS ui-build
WORKDIR /user/src
COPY frontend/ ./ui/
RUN cd ui && npm install && npm run build

FROM node:14-slim AS api-build
WORKDIR /usr/src
COPY  backend/ ./api/
RUN cd api && npm install && ENVIRONMENT=production npm run build
RUN ls

FROM node:14-slim
WORKDIR /root/
COPY --from=ui-build /usr/src/ui/build ./ui/build
COPY --from=api-build /usr/src/api/dist .
RUN ls

EXPOSE 8080

CMD ["node", "api.bundle.js"]