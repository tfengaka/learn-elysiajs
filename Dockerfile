FROM oven/bun

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install

COPY src src
COPY tsconfig.json .
# COPY public public

EXPOSE 9000
CMD ["bun", "dev"]