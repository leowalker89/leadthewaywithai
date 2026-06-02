export interface EventItem {
  id: string;
  name: string;
  slug: string;
  startedAt: string;
  endedAt: string;
  timezone: string;
  isOnline: boolean;
  posterUrl: string | null;
}

export const FALLBACK_EVENTS: EventItem[] = [
  {
    "id": "6a1d916b2d5b04de1fe711e5",
    "name": "Coding Agents Lunch & Learn - Session 14",
    "slug": "coding-agents-lunch-and-learn-session-14-bwvbsbxsic",
    "startedAt": "2026-06-05T16:00:00.341Z",
    "endedAt": "2026-06-05T17:00:15.614Z",
    "timezone": "US/Pacific",
    "isOnline": true,
    "posterUrl": "https://d2xo500swnpgl1.cloudfront.net/uploads/mlops/Screenshot-2026-06-01-162153-89d00fe6-a3b0-4b77-a877-d9a7c92ff1d4-1780323727676.jpeg"
  },
  {
    "id": "6a1492a77bc7789edac39c00",
    "name": "Coding Agents Lunch & Learn Session 13 - Collaborative Coding Agents, Workflows & Community Show-and",
    "slug": "coding-agents-lunch-and-learn-session-13-collaborative-coding-agents-workflows-and-community-show-and-dqk8ixowoo",
    "startedAt": "2026-05-29T16:00:00.818Z",
    "endedAt": "2026-05-29T17:00:09.081Z",
    "timezone": "US/Pacific",
    "isOnline": true,
    "posterUrl": "https://d2xo500swnpgl1.cloudfront.net/uploads/mlops/Screenshot-2026-05-25-202032-fbbc432f-cb6f-4890-851d-9e114c58eda8-1779733247537.jpeg"
  },
  {
    "id": "6a0b75044dec9774b1611e3f",
    "name": "Coding Agents Lunch & Learn – Session 12: Hermes, Sandboxes & Advanced Agent Workflows",
    "slug": "coding-agents-lunch-and-learn-session-12-hermes-sandboxes-and-advanced-agent-workflows-c52x0egwvd",
    "startedAt": "2026-05-22T16:00:00.698Z",
    "endedAt": "2026-05-22T17:00:22.604Z",
    "timezone": "US/Pacific",
    "isOnline": true,
    "posterUrl": "https://d2xo500swnpgl1.cloudfront.net/uploads/mlops/Screenshot-2026-05-18-223018-040882cb-c96d-45cf-beed-2da28351c61b-1779136226425.jpeg"
  },
  {
    "id": "6a021f7b3199d3fae1c2c5f5",
    "name": "Coding Agents Lunch & Learn – Session 11",
    "slug": "coding-agents-lunch-and-learn-session-11-fvbr283db0",
    "startedAt": "2026-05-15T16:00:00.529Z",
    "endedAt": "2026-05-15T17:00:38.852Z",
    "timezone": "US/Pacific",
    "isOnline": true,
    "posterUrl": "https://d2xo500swnpgl1.cloudfront.net/uploads/mlops/Screenshot-2026-05-11-203032-2392bde9-80b2-4178-828c-0b9868f0a797-1778524241700.jpeg"
  },
  {
    "id": "69f8ca374494382082de73ec",
    "name": "Coding Agents Lunch & Learn: Session 10 - From Claude Design to Code",
    "slug": "coding-agents-lunch-and-learn-session-10-from-claude-design-to-code-vdpmyurnow",
    "startedAt": "2026-05-08T16:00:00.198Z",
    "endedAt": "2026-05-08T17:00:00.198Z",
    "timezone": "US/Pacific",
    "isOnline": true,
    "posterUrl": "https://d2xo500swnpgl1.cloudfront.net/uploads/mlops/Screenshot-2026-05-04-183544-7fd625dc-81a4-4661-900d-b97c518f3a2a-1777912566124.jpeg"
  },
  {
    "id": "69e639e0e18b09e8bc3000d3",
    "name": "Coding Agents Lunch and Learn: Show & Tell – Community Builds, Ideas, and Experiments",
    "slug": "coding-agents-lunch-and-learn-show-and-tell-community-builds-ideas-and-experiments-jax0j6o2cy",
    "startedAt": "2026-04-24T16:00:00.555Z",
    "endedAt": "2026-04-24T17:00:09.656Z",
    "timezone": "US/Pacific",
    "isOnline": true,
    "posterUrl": "https://d2xo500swnpgl1.cloudfront.net/uploads/mlops/Screenshot-2026-04-20-164900-31b9bdfd-462f-4628-91bd-805bc7f9e7a2-1776696566182.jpeg"
  },
  {
    "id": "69dfeaab415ea2509d43c405",
    "name": "Coding Agents Lunch & Learn Session 9 : End-to-End MLOps with Autonomous Agents",
    "slug": "coding-agents-lunch-and-learn-session-9-end-to-end-mlops-with-autonomous-agents-n9vvj04shj",
    "startedAt": "2026-04-17T16:00:00.822Z",
    "endedAt": "2026-04-17T17:00:00.822Z",
    "timezone": "US/Pacific",
    "isOnline": true,
    "posterUrl": "https://d2xo500swnpgl1.cloudfront.net/uploads/mlops/Screenshot-2026-04-15-215633-f71dde87-132f-48f1-8a2c-f342b5fee1e7-1776283012656.jpeg"
  },
  {
    "id": "69d3e82956263f6f12e2c755",
    "name": "Coding Agents Lunch & Learn: Skill Building Workshop (From Idea to Evaluation)",
    "slug": "coding-agents-lunch-and-learn-skill-building-workshop-from-idea-to-evaluation-bzlbvjc1ul",
    "startedAt": "2026-04-10T16:00:00.722Z",
    "endedAt": "2026-04-10T17:00:00.722Z",
    "timezone": "US/Pacific",
    "isOnline": true,
    "posterUrl": "https://d2xo500swnpgl1.cloudfront.net/uploads/mlops/Screenshot-2026-04-06-192757-d3e524cd-5223-458b-94f0-637f120db248-1775496493630.jpeg"
  },
  {
    "id": "69cc3b585b5ca8ef5b1ae00a",
    "name": "Coding Agents Lunch & Learn, Session 7",
    "slug": "coding-agents-lunch-and-learn-session-7-javid0cpse",
    "startedAt": "2026-04-03T16:00:00.032Z",
    "endedAt": "2026-04-03T17:00:23.139Z",
    "timezone": "US/Pacific",
    "isOnline": true,
    "posterUrl": "https://d2xo500swnpgl1.cloudfront.net/uploads/mlops/Screenshot-2026-03-31-232550-7f398401-8270-46dc-88f4-8bd710856ddf-1774992367931.jpeg"
  },
  {
    "id": "69b7b1a5b1038609282e00a4",
    "name": "Coding Agents Lunch & Learn, Session 6",
    "slug": "coding-agents-lunch-and-learn-session-6-d8o6tqqru7",
    "startedAt": "2026-03-20T16:00:00.692Z",
    "endedAt": "2026-03-20T17:00:34.791Z",
    "timezone": "CET",
    "isOnline": true,
    "posterUrl": "https://d2xo500swnpgl1.cloudfront.net/uploads/mlops/Screenshot-2026-03-16-174217-e4c7b2a7-e2f4-4fb8-ab0f-7beda7d4af5a-1773679355599.jpeg"
  },
  {
    "id": "69aec4c11ae11925e407e76c",
    "name": "Coding Agents Lunch & Learn, Session 5",
    "slug": "coding-agents-lunch-and-learn-session-5-vk0idjn8x9",
    "startedAt": "2026-03-13T16:00:00.559Z",
    "endedAt": "2026-03-13T17:00:42.123Z",
    "timezone": "CET",
    "isOnline": true,
    "posterUrl": "https://d2xo500swnpgl1.cloudfront.net/uploads/mlops/Screenshot-2026-03-09-140644-fa0c1b3b-0dd9-4039-926f-44ebc2805923-1773061614338.jpeg"
  },
  {
    "id": "69a5df5a5b1104b006b4d599",
    "name": "Coding Agents Lunch & Learn, Session 4",
    "slug": "coding-agents-lunch-and-learn-session-4-jmffa2wdjr",
    "startedAt": "2026-03-06T17:00:00.589Z",
    "endedAt": "2026-03-06T18:00:42.437Z",
    "timezone": "CET",
    "isOnline": true,
    "posterUrl": "https://d2xo500swnpgl1.cloudfront.net/uploads/mlops/Screenshot-2026-03-02-200618-6923d9e2-a57d-47bf-8509-0d6ff4f1fc14-1772478704099.jpeg"
  },
  {
    "id": "6999ece8c8fcca2f8f2974f8",
    "name": "Coding Agents Lunch & Learn, Session 3: Working on an AI-First Team",
    "slug": "coding-agents-lunch-and-learn-session-3-working-on-an-ai-first-team-sf9jjz1d5g",
    "startedAt": "2026-02-27T20:00:00.427Z",
    "endedAt": "2026-02-27T21:00:18.448Z",
    "timezone": "CET",
    "isOnline": true,
    "posterUrl": "https://d2xo500swnpgl1.cloudfront.net/uploads/mlops/Screenshot-2026-02-21-183817-884ddddf-4186-4d64-81c5-4e4b44242826-1771695583052.jpeg"
  },
  {
    "id": "698bb4bc03c7c24e92575ce1",
    "name": "Coding Agents Lunch & Learn s.2",
    "slug": "coding-agents-lunch-and-learn-s-2-otz2j2hskw",
    "startedAt": "2026-02-20T20:00:00.961Z",
    "endedAt": "2026-02-20T21:00:00.961Z",
    "timezone": "CET",
    "isOnline": true,
    "posterUrl": "https://d2xo500swnpgl1.cloudfront.net/uploads/mlops/Screenshot-2026-02-13-182211-9698a8bb-21e1-4735-b4fe-e754b61b4163-1771003347412.jpeg"
  },
  {
    "id": "696770c23d21cf087884ed3a",
    "name": "Coding Agents: Virtual Conference",
    "slug": "coding-agents-virtual",
    "startedAt": "2026-02-11T16:00:00.676Z",
    "endedAt": "2026-02-11T18:30:00.182Z",
    "timezone": "Europe/Berlin",
    "isOnline": true,
    "posterUrl": "https://d2xo500swnpgl1.cloudfront.net/uploads/mlops/lxk2p7-logo-4737f7b6-0ad2-4650-8088-2cd42a3e5157-1770667419396.jpeg"
  },
  {
    "id": "6984dd2b448bca255f35eb82",
    "name": "Coding Agents Lunch & Learn",
    "slug": "coding-agents-lunch-and-learn-zt06r9up5m",
    "startedAt": "2026-02-06T20:00:00.576Z",
    "endedAt": "2026-02-06T21:00:31.272Z",
    "timezone": "GMT+0",
    "isOnline": true,
    "posterUrl": "https://d2xo500swnpgl1.cloudfront.net/uploads/mlops/Screenshot-2026-02-05-191235-411f90d7-e1e9-4d0b-a08d-222f2a07cf1a-1770315188830.jpeg"
  }
];

let cachedEvents: EventItem[] | null = null;
let cacheTime = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

export async function getEvents(): Promise<EventItem[]> {
  const now = Date.now();
  if (cachedEvents && now - cacheTime < CACHE_DURATION) {
    return cachedEvents;
  }

  try {
    const res = await fetch("https://home.mlops.community/public/events", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      next: { revalidate: 3600 } // Incremental Static Regeneration at the fetch level too
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch events from MLOps Community: ${res.status} ${res.statusText}`);
    }

    const html = await res.text();
    const nextDataMatch = html.match(
      /<script\s+id="__NEXT_DATA__"\s+type="application\/json">([\s\S]*?)<\/script>/i
    );

    if (!nextDataMatch) {
      throw new Error("Could not find __NEXT_DATA__ in response HTML");
    }

    const nextData = JSON.parse(nextDataMatch[1]);
    const events: any[] = nextData.props?.pageProps?.events || [];

    if (!Array.isArray(events) || events.length === 0) {
      throw new Error("No events found in NEXT_DATA payload");
    }

    const codingAgentsEvents = events
      .filter((e) => e.name && e.name.toLowerCase().includes("coding agents"))
      .map((e) => ({
        id: e.id,
        name: e.name,
        slug: e.slug,
        startedAt: e.startedAt,
        endedAt: e.endedAt,
        timezone: e.timezone,
        isOnline: !!e.isOnline,
        posterUrl: e.liveMeetupInfo?.posterUrl || e.webCoverImageUrl || null,
      }));

    if (codingAgentsEvents.length > 0) {
      cachedEvents = codingAgentsEvents;
      cacheTime = now;
      return codingAgentsEvents;
    }
    
    // Fall back if array filter yields nothing (edge case)
    return FALLBACK_EVENTS;
  } catch (err) {
    console.error("Error scraping MLOps Community events:", err);
    // Silent failover to fallback
    return FALLBACK_EVENTS;
  }
}
