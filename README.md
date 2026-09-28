# FTB Unstable 6 dedicated server

Docker Compose installs FTB Unstable 6 into a persistent Docker named volume. The pack is pinned to FTB release **1.11.0**, version ID **100507**, on Minecraft **26.1.2**, with Java **25**. This is the published pack called "FTB Unstable 6"; FTB does not list a release called "v1.20.0" for this pack. Verify the intended pack before migrating an existing world.

## Start

1. Install Docker Engine/Compose or Docker Desktop. Give Docker enough RAM for an 8 GB Java heap plus overhead.
2. Copy `.env.example` to `.env`. Edit `WHITELIST` and `OPS` to your actual Minecraft **Java Edition** profile name. Read the [Minecraft EULA](https://www.minecraft.net/en-us/eula) and set `EULA=TRUE` if you accept it.
3. Run:

   ```bash
   docker compose config
   docker compose up -d
   docker compose logs -f minecraft
   ```

4. Wait for the server to finish installing and starting. Join with an FTB client running the **same modpack release**, using `<server-ip>:25565`. If friends connect over the internet, forward TCP 25565 to the Docker host and allow it through the host firewall. `MC_PORT` changes the host-side port.

The first startup downloads the official FTB server files automatically. Everything under `/data` (the pack, configs, and world) lives in the Docker volume `ftb-unstable6-data`. `docker compose down` preserves it. **`docker compose down -v` deletes it.** No server downloads or world files belong in this Git repository.

## Back up the whole server

Run these from Bash or WSL in this directory, after the server has been started at least once:

```bash
docker compose stop minecraft
mkdir -p backups
docker run --rm \
  -v ftb-unstable6-data:/data:ro \
  -v "$PWD/backups:/backup" \
  alpine:3.22 sh -c 'tar -czf "/backup/ftb-unstable6-$(date +%Y%m%d-%H%M%S).tar.gz" -C /data .'
docker compose start minecraft
```

Backups live in the ignored `backups/` folder. Keep a copy outside this machine as well. If the backup command fails, run `docker compose start minecraft` after resolving the issue. Restore only while the server is stopped, into an **empty** data volume, using a verified backup.

## Change pack versions

Back up first. Choose a matching version ID from [FTB's versions page](https://feed-the-beast.com/modpacks/132-ftb-unstable-6/versions), change `FTB_MODPACK_VERSION_ID` in `.env`, then run `docker compose up -d --force-recreate` and follow logs. The FTB installer updates server files in the persistent volume. Test the world after any upgrade; do not assume a modded world will work after a downgrade.

The image `itzg/minecraft-server:java25` includes the Ubuntu/Hotspot Java 25 runtime required by FTB's installer. No local Dockerfile is needed: Compose pulls this maintained image and it installs the selected pack on first start. `.dockerignore` is provided for any future local Docker build; Compose does not use it while the service references a prebuilt image.

Sources: [FTB pack](https://feed-the-beast.com/modpacks/132-ftb-unstable-6), [FTB server files](https://feed-the-beast.com/modpacks/server-files/windows/132-ftb-unstable-6), [FTBA Docker settings](https://docker-minecraft-server.readthedocs.io/en/latest/types-and-platforms/mod-platforms/ftb/), [Java image tags](https://docker-minecraft-server.readthedocs.io/en/latest/versions/java/).
