FROM docker.io/node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=80

WORKDIR /app

RUN addgroup --system live-chat-api && \
          adduser --system -G live-chat-api live-chat-api

COPY dist/live-chat-api live-chat-api
RUN chown -R live-chat-api:live-chat-api .

# You can remove this install step if you build with `--bundle` option.
# The bundled output will include external dependencies.
RUN npm --prefix live-chat-api --omit=dev -f install

EXPOSE 80

CMD [ "node", "live-chat-api" ]
