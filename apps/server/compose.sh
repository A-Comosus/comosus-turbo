docker compose up -d

initReplica() {
  docker compose exec -it cockroach-0 ./cockroach init --insecure
}

## Intentionally ignore error here because not sure how to handle it yet. :shrug:
initReplica || true