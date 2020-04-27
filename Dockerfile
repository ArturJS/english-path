FROM node:12 as backend-builder
WORKDIR /workspace
COPY /backend/package*.json /workspace/backend/
WORKDIR /workspace/backend
RUN npm i -g @nestjs/cli@6.14.2
RUN npm install
COPY /backend/ /workspace/backend/
RUN npm run build

FROM node:12 as frontend-builder
WORKDIR /workspace
RUN apt-get update && apt-get install -y libglu1 # https://github.com/imagemin/cwebp-bin/issues/31
RUN npm i -g gatsby-cli@2.11.21
COPY /frontend/package*.json /workspace/frontend/
WORKDIR /workspace/frontend
RUN npm install --production
COPY /frontend/ /workspace/frontend/
RUN npm run build

FROM node:12-slim
COPY --from=backend-builder /workspace/backend /workspace/backend
COPY --from=frontend-builder /workspace/frontend /workspace/frontend
WORKDIR /workspace/backend
CMD npm run prod
