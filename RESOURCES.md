# Home hostname Resources

## Knowledge

- [RFC 1035 §3.4.1 — A RDATA](https://www.rfc-editor.org/rfc/rfc1035#section-3.4.1)
  The definition of an A record: a name maps to a 32-bit IPv4 address. Use for: what to put in the DNS panel, and why a port never belongs in an A record.
- [RFC 1034 — Domain names: concepts](https://www.rfc-editor.org/rfc/rfc1034)
  How names are looked up. Use for: the “phone book” mental model and caching/TTL.
- [RFC 3986 — Uniform Resource Identifier](https://www.rfc-editor.org/rfc/rfc3986)
  What a URL actually is (scheme, authority, path). Use for: why `https://ftb-unstable.mikepattyn.nl` is the wrong thing to give Minecraft players.
- [Minecraft Wiki: Java server — A record and SRV](https://minecraft.wiki/w/Tutorial:Setting_up_a_Java_Edition_server#A_record)
  Game-specific: players type a domain in the server list; A record points at the *external* IP; SRV is only for a non-default port. Primary source for this lesson.
- [RFC 2782 — SRV records](https://www.rfc-editor.org/rfc/rfc2782)
  Official SRV format: `_Service._Proto.Name` plus priority, weight, port, target. Use when a service is not on its well-known port. Target must be a hostname with address records, not an alias.
- [Cloudflare: DNS record types](https://developers.cloudflare.com/dns/manage-dns-records/reference/dns-record-types/)
  Operator-facing A / AAAA / CNAME / SRV fields. Use when clicking through a DNS UI.
- [Cloudflare: proxy use cases — non-HTTP services](https://developers.cloudflare.com/dns/proxy-status/use-cases/)
  Proxied (orange-cloud) records only carry HTTP/HTTPS. Game servers must be DNS-only. Use before enabling any “proxy” toggle.
- [RFC 1918 — Private address space](https://www.rfc-editor.org/rfc/rfc1918)
  `10/8`, `172.16/12`, `192.168/16` are not reachable from the public internet. Use for: never putting a LAN address in a public A record.
- [RFC 6598 — Shared Address Space / CGNAT](https://www.rfc-editor.org/rfc/rfc6598)
  `100.64.0.0/10` is ISP shared space. Use for: diagnosing “I forwarded the port but nobody can connect.”

## Wisdom (Communities)

- [Minecraft Wiki talk / edits on the Java server tutorial](https://minecraft.wiki/w/Tutorial:Setting_up_a_Java_Edition_server)
  The living operator document. Use for: version-specific client behaviour (Java 1.3.1+ SRV).
- [r/admincraft](https://www.reddit.com/r/admincraft/)
  Server-ops community. Use for: “DNS looks right, still can’t join” after you have `dig` output in hand.

## Gaps

- Registrar-specific screenshots for `mikepattyn.nl` (TransIP, SIDN, Cloudflare, etc.) — fill in once we know which panel hosts the zone.
- This household’s WAN IPv4 / CGNAT status — confirm from the router WAN page, not from a guess.
