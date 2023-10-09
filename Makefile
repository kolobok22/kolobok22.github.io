up:
	docker run --rm --network=web \
    -v ${PWD}/dist:/var/www/html/trainer \
    -v caddy_data:/data \
	-l traefik.enable=true -l traefik.docker.network=web \
	-l traefik.http.routers.caddy_www.entrypoints=http \
	-l traefik.http.routers.caddy_www.rule=Host\(\`/trainer.homeserverone.ru\`\) \
    caddy:2.6-alpine caddy file-server --root /var/www/html