INIT=false

while getopts ":ih" option; do
  case $option in
      i) # display Help
        INIT=true
        ;;
      h)
        echo "There's no help, you are on your own!"
        exit
        ;;
      *)
        echo "There's no help, you are on your own!"
        exit
        ;;
  esac
done

compose() {
  docker compose up -d
}

initReplica() {
  docker compose exec -it cockroach-0 ./cockroach init --insecure
}

compose

if [ "$INIT" = true ]; then
  initReplica
fi
