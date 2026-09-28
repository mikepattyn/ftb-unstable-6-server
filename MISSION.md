# Mission: Name home services so people can find them

## Why
Friends should join the FTB Unstable 6 server as `ftb-unstable.mikepattyn.nl` instead of a raw public IP. The same naming pattern should work for the next TCP or HTTP thing hosted on this MacBook behind the same router.

## Success looks like
- Create a DNS name under `mikepattyn.nl` that resolves to the home public IPv4
- Tell players the exact string to type in Minecraft (hostname, not a website URL)
- Recreate the same pattern for a later service without re-learning DNS from scratch
- Check that the name actually resolves before blaming the game client

## Constraints
- Server runs in Docker on a MacBook; router already port-forwards to this host
- Domain `mikepattyn.nl` already exists
- Residential public IP may change; keep that in mind when choosing TTL and later Dynamic DNS

## Out of scope
- Buying a new domain
- Cloudflare Spectrum or paid TCP proxying
- Bedrock Edition addressing (different client, different ports)
- Hardening the server against the public internet beyond what is already in this repo
