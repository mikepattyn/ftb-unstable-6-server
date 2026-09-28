# Prior: domain, Docker, and a forwarded port already exist

The learner already owns `mikepattyn.nl`, runs FTB Unstable 6 via Docker Compose on a MacBook with host port 25565, and has a router port-forward to that machine. Future lessons should not reteach “what is Docker” or “open the port on the router”; they should use that setup as the concrete example for DNS and addressing.

## Evidence

Stated in the session request; confirmed in `compose.yaml` (`25565:25565/tcp`) and the project README.

## Implications

Zone of proximal development starts at “hostname versus URL” and “A record must be the public IPv4,” not at installing the server.
