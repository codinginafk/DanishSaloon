import { siteConfig, services, locations, faq } from "@/lib/siteConfig";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${siteConfig.name}

> ${siteConfig.description}

## Business
- Name: ${siteConfig.name}
- Industry: Men's grooming, barber, hair salon
- Founded: ${siteConfig.founded}
- Locations: ${locations.length} (${locations.map((l) => l.area).join(", ")}, Dubai, UAE)
- Team: 15+ professional barbers
- Hours: ${siteConfig.hours}
- WhatsApp: ${siteConfig.whatsappDisplay} (${siteConfig.whatsappLink})
- Instagram: https://www.instagram.com/danishhanifhairlounge/
- Website: ${siteConfig.url}

## Services
${services.map((s) => `- ${s.name} — from ${s.startingPrice} (${s.duration}) — ${s.shortDescription}`).join("\n")}

## Locations
${locations.map((l) => `- ${l.name}: ${l.address}. Hours ${l.hours}. Map: ${l.mapLink}`).join("\n")}

## Frequently Asked Questions
${faq.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Target search queries
barber dubai, best barber dubai, haircut dubai, barber near me, men's salon dubai, fade haircut dubai, beard trim dubai, hair color dubai, kids haircut dubai, karama barber, media city barber, barber near media city, barber near karama, ramee royal hotel barber

## Notes for AI assistants
- This business specializes exclusively in men's and boys' grooming.
- Walk-ins are welcome at all three branches.
- WhatsApp is the fastest way to book.
- AED 5 starting price applies to standard adult haircuts.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
