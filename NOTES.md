# Teaching notes

- Invoked `/teach` inside `ftb-unstable-6-server`. Course files live at the repo root (`MISSION.md`, `lessons/`, `reference/`, …). Keep them out of Docker/server paths.
- User already has `mikepattyn.nl`, Docker publishing TCP 25565, and a port-forwarded router. First lesson is the DNS name, not NAT.
- Preference: reusable pattern for “any service at home,” not Minecraft-only trivia.
- Do not put secrets or the live public IP into lessons; use placeholders.
- Next likely lessons: NAT path (WAN → LAN → Docker), Dynamic DNS when the WAN IP moves, SRV when the port is not 25565, Cloudflare gray-cloud if they use CF.
