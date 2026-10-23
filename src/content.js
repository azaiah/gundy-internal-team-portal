// Static reference content for the Gundy internal portal: playbook, research library, growth plan.
// Written in our own words from the sources listed in SOURCES. Not legal advice.

export const SOURCES = [
  { group: 'Lead data', items: [
    ['SBA Small Business Search (DSBS): certified firms, contacts, NAICS, bonding', 'https://search.certifications.sba.gov/'],
    ['SAM.gov entity and contract-opportunity search', 'https://sam.gov/'],
    ['YellowPages contractor listings by city and trade', 'https://www.yellowpages.com/'],
  ]},
  { group: 'Government contracting', items: [
    ['CRS: Federal Small Business Contracting Goals (FY2025 results, 2026 goals)', 'https://www.everycrsreport.com/reports/IN12018.html'],
    ['CRS: An Overview of Small Business Contracting', 'https://www.everycrsreport.com/files/2026-07-21_R45576_358462c91347a41144c3557df270b1590a5b4d42.html'],
    ['FAR 28.102-1: Miller Act bond thresholds', 'https://www.acquisition.gov/far/28.102-1'],
    ['SBA 8(a) social-disadvantage final rule (effective Sept 10, 2026)', 'https://www.selfemployed.com/news/sba-8a-social-disadvantage-rule-2026/'],
  ]},
  { group: 'Sales and negotiation', items: [
    ['Fight Less, Win More (Jonathan B. Smith and Derek Gaunt), Penguin', 'https://www.penguin.co.uk/books/482360/fight-less-win-more-by-gaunt-jonathan-b-smith-derek/9781804963272'],
    ['Review of Fight Less, Win More (BusinessDay, March 2026)', 'https://www.businessday.co.za/lifestyle/2026-03-12-how-to-be-a-master-negotiator/'],
    ['Never Split the Difference: book notes (Graham Mann)', 'https://grahammann.net/book-notes/never-split-the-difference-chris-voss'],
    ['Black Swan Group: fixing a bad cold-calling script', 'https://www.blackswanltd.com/the-edge/fixing-a-bad-cold-calling-script'],
    ['$100M Offers summary (Readingraphics)', 'https://readingraphics.com/book-summary-100m-offers-alex-hormozi/'],
    ['$100M Offers: scarcity, urgency, bonuses, guarantees, naming (SuperSummary)', 'https://www.supersummary.com/100m-offers/section-4-summary/'],
    ['$100M Leads applied (Bryce Watson)', 'https://brycewatson.com/blog/20-100m-leads-applied'],
    ['Hormozi CLOSER framework (11x guide)', 'https://www.11x.ai/guides/alex-hormozi-sales-training-method'],
  ]},
]

export const PLAYBOOK = [
{ id: 'offer', title: 'Our offer, built the Hormozi way', md: `
The value of anything we sell is **dream outcome × how sure they are it'll work**, divided by **how long it takes × how much effort it costs them**. Every line of every script pushes one of those four levers.

## The dream outcome, in their words
- **Residential trades:** "My phone rings with the right jobs, and I'm not doing paperwork at 10 pm."
- **Commercial and gov contractors:** "I bid two more jobs a month that I can actually win, with the paperwork already done."

## How we raise their certainty
- A **working demo** they can click through before they pay (the sample-company portal).
- **Their own data** in the pitch: their years in business, their website's real problems, their certifications and bonding. Specific beats clever.
- **Proof of process:** we check permit coverage in their county before promising lead volume, and we say so.

## How we shrink time and effort
- Live in **four weeks**. We load their contacts, subs and open jobs; they don't.
- **Nothing goes out without their approval**, so it never feels like losing control.

## The stack (one-to-one: ask first, add bonuses only to answer an objection)
| Package | Setup | Monthly | Best for |
|---|---|---|---|
| Contracts | $5,000 | $399 | Commercial GCs and certified subs chasing public work |
| Growth | $1,500 | $199 | Remodelers, roofers and growing subs |
| Foundation | $999 | $99 | Solo operators getting organized |

Bonuses we can name and hand over: **Capability Statement Builder**, **Prequal Packet in a Day**, **50-GC Outreach Pack**, **First Two Bids Done With You**. Use one at a time, only to close the gap on a specific objection.

## Honest scarcity and urgency
- We onboard a limited number of companies per month because we build each portal by hand. Say the real number.
- Setup fees credit toward an upgrade within 12 months, so starting smaller has no downside.
`},
{ id: 'voss', title: 'Tactical empathy on the phone (Voss, Smith and Gaunt)', md: `
People decide emotionally and justify with logic. Our job on a cold call is to make them **feel understood fast**, then let them talk themselves into the next step.

## The tools, in the order we use them
1. **Tone first.** Slow, low, warm ("late-night DJ"). Smile while dialing. Playful tone for the opener, calm tone for anything hard.
2. **Accusation audit.** Say the bad thing they're thinking before they do: "You're probably thinking this is another marketing company that'll promise leads and vanish." It takes the air out of it.
3. **No-oriented questions.** People feel safe saying no. "Is now a bad time?" beats "Do you have a minute?" "Would it be crazy to…" beats "Can I…?"
4. **Labels.** "It seems like…", "It sounds like…", "It looks like…", then **stop talking**. Never "I hear that…" (the "I" makes it about us).
5. **Mirrors.** Repeat their last one to three words as a question. "Slow in the winter?" Then wait.
6. **Calibrated questions.** Start with **what** or **how**. "How are new customers finding you right now?" "What happens to a call that comes in while you're on a roof?"
7. **Dynamic silence.** After a label or a question, count to four in your head. The best information comes after the pause.
8. **Summaries until "That's right."** Recap their situation in their words. "You're right" means they want you to stop; "That's right" means they feel heard.
9. **Rule of three.** Get the commitment three ways: the yes, a "That's right" on the summary, and an implementation question ("What would get in the way of Tuesday?").

## Five levels of listening (Smith and Gaunt)
Level 1 is barely present; level 2 is waiting for our turn; level 3 hears their logic; level 4 hears their emotion; level 5 holds all of it at once. On calls we live at 3 to 5. Take notes on **feelings**, not just facts.

## Read the counterpart
- **Assertive:** wants to be heard and wants it fast. Let them vent, label it, give them the short version.
- **Analyst:** wants data and time. Send the details, don't rush, silence is them thinking.
- **Accommodator:** friendly, says yes easily. Pin down the **how** and the **when**, or the yes is empty.

## Black swans
Every deal has one hidden fact that changes everything: the partner who actually decides, a bad experience with the last web guy, a bonding cap they're embarrassed about. Keep asking calibrated questions until it surfaces.

## Proof of life
If they won't commit to anything specific after a full conversation, label it ("It sounds like now isn't the time") and move on. Our time is the scarcest thing we have.
`},
{ id: 'closer', title: 'The demo call: CLOSER', md: `
Use this on the booked ten-to-twenty minute call, not the cold call.

1. **Clarify** why they're here. "What made you say yes to this call?"
2. **Label** the problem specifically. "So the real issue is the calls you miss while you're on a job."
3. **Overview** the past pain. "What have you tried? What happened?" This surfaces objections early.
4. **Sell the vacation.** Paint the outcome: phone rings with the right jobs, bids show up scored, paperwork is one click. Then show it in the demo, in their seat.
5. **Explain away concerns** with **AAA**: Acknowledge ("Makes sense"), Associate ("A roofer in Mesa said the same thing before he started"), Ask ("What specifically do you want to think through?").
6. **Reinforce** the decision right away. Tell them what happens on day one and who they'll hear from.

**On price:** state it plainly, then stop talking.
`},
{ id: 'objections', title: 'Objection bank', md: `
| They say | We say (label first, then a calibrated question) |
|---|---|
| "We're busy enough." | "It sounds like you've got more work than you can handle right now. What happens in the slow months?" |
| "Just send me something." | "Happy to. So I send the right thing, what would have to be true for this to be worth ten minutes?" |
| "How much?" | "Depends what you turn on. Most start at the Growth package. Before price matters, is more of the right work even a priority this year?" |
| "I have a website guy." | "Makes sense, and I'm not trying to replace him. How is he helping you find the jobs once people land on the site?" |
| "Tried marketing, got burned." | "It sounds like someone promised a lot and didn't deliver. What did they promise?" Then: we check your county's permit data before promising volume, and you approve everything." |
| "Need to talk to my partner." | "That makes sense. What do you think they'll push back on?" Offer a 15-minute call with both. |
| "Not interested." | "Fair. Have you given up on [winning more set-aside work / getting more jobs online] this year, or is it timing?" |
| "We get all our work from GCs." | "That's a great position. How many GCs are on your list today, and what happens when two of them slow down at once?" |
| "Government work is a pain." | "It can be. What part burns the most time: finding the bids, the paperwork, or getting paid?" |
`},
{ id: 'cadence', title: 'Cadence and channels', md: `
**Rule:** the fortune is in the follow-up. Most of our deals will close on touch four to eight.

| Day | Channel | What |
|---|---|---|
| 0 | Call + voicemail + email | Custom opener. If no answer, the 20-second voicemail, then the email. |
| 0 | Text | **Only after a call attempt, and only to a number that looks like a cell.** Include who we are and "Reply STOP". |
| 2 | Email | "Three things I'd fix first" (from their lead card). |
| 4 | Call | Different time of day. Try 7:15–8:00 am local, before crews roll out. |
| 7 | DM | LinkedIn for gov and commercial, Instagram or Facebook for residential. |
| 10 | Email | "Have you given up on…?" (no-oriented, gets replies). |
| 18 | Call | Last call, then park for next quarter. |

## When to call each region (local time)
- **Best:** 7:00–8:30 am (before the job site) and 3:30–5:30 pm (driving home).
- **OK:** 11:30 am–1:00 pm.
- **Avoid:** mid-morning on job sites, and Fridays after 2 pm.
- Virginia evenings are prime **West Coast** calling hours: 6–8 pm ET is 3–5 pm PT. The Leads page shows every region's local clock and who's callable right now.
`},
{ id: 'compliance', title: 'Stay compliant (read once)', md: `
This is practical guidance, not legal advice.

- **Calls:** B2B cold calls to business lines are generally fine. Call between 8 am and 9 pm **their** time. If someone says "don't call," log it as Do Not Contact and stop.
- **Texts:** Federal rules (the TCPA) treat marketing texts to cell phones strictly, even for businesses. Text **one-to-one by hand**, only after a call attempt or when they've said it's OK, always say who we are, and always include "Reply STOP." Never blast. Many listed numbers are landlines and can't receive texts anyway.
- **Email (CAN-SPAM):** honest subject line, our real name, our physical address (4870 Sadler Road, Suite 300, Glen Allen, VA 23060), and an easy opt-out we honor within 10 business days. Every email template already includes this.
- **Data:** SBA and SAM contacts are published for government business. Use them for relevant business outreach, never resell them.
`},
]

const T = (trade, body) => ({ trade, ...body })
export const TRADE_BRIEFS = [
T('General contractor', { buys: 'Bid management, sub coordination, client updates, pay apps.', ticket: '$50K–$5M+ per project', season: 'Year-round; bid season peaks January–April as public budgets release.', pains: ['Finding bids that fit bonding and trades', 'Chasing subs for COIs and pricing', 'Change orders agreed verbally, never billed', 'Retainage and slow pay apps'], lingo: ['ITB (invitation to bid)', 'GMP', 'CM at risk', 'SOV (schedule of values)', 'RFI', 'submittals', 'punch list', 'retainage', 'G702/G703 pay app'], angle: 'Lead with the bid engine and paperwork (prequal, capability statement, pay apps). The website is proof of legitimacy for owners and primes.' }),
T('Remodeler', { buys: 'Lead flow from homeowners, estimating, selections, client portal.', ticket: '$15K–$150K (kitchens, baths, additions)', season: 'Spring and fall peaks; January is planning season for homeowners.', pains: ['Tire-kickers from shared lead sites', 'Selections and change orders by text', 'Homeowners calling for updates', 'Slow deposits'], lingo: ['design-build', 'allowances', 'selections', 'change order', 'draw schedule', 'punch walk'], angle: 'Permits tell us who already decided to build. Client portal with photos and approvals sells itself to remodelers.' }),
T('Roofing', { buys: 'Inspection-to-close speed, storm response, insurance paperwork.', ticket: '$8K–$30K residential; commercial much higher', season: 'Storm-driven; spring hail in TX/CO/OK, hurricane season in FL/Gulf.', pains: ['Storm chasers undercutting them', 'Insurance supplements', 'Leads that went cold in 48 hours', 'Crew scheduling around weather'], lingo: ['squares', 'tear-off', 'supplement', 'ACV/RCV', 'TPO', 'mod bit', 'drip edge', 'ROC license (AZ)'], angle: 'Speed to lead and follow-up. Show the roof-permit and HOA feed. Reviews and license number on the site build trust against storm chasers.' }),
T('Electrical', { buys: 'Service-call booking, commercial bid flow, compliance tracking.', ticket: '$300 service calls to $500K commercial', season: 'Steady; commercial bids track construction starts.', pains: ['Missed calls on service work', 'Permit and inspection juggling', 'Finding commercial bids', 'Licensing for multiple states'], lingo: ['service upgrade', 'panel swap', 'rough-in', 'trim-out', 'master/journeyman', 'NEC', 'low voltage'], angle: 'Service shops: booking and follow-up. Commercial and certified shops: daily bid sweep plus prequal packet.' }),
T('Plumbing', { buys: 'Call capture, dispatch, maintenance agreements, commercial bids.', ticket: '$250 service to $250K commercial', season: 'Winter freeze spikes; steady otherwise.', pains: ['After-hours calls going to voicemail', 'Techs not upselling agreements', 'Property-manager accounts slipping', 'Bidding new-construction rough-in'], lingo: ['rough-in', 'top-out', 'repipe', 'backflow', 'med gas', 'hydronics', 'service agreement'], angle: 'Property managers and HOAs hire on repeat. Show the outreach drafts to 50 local PMs.' }),
T('HVAC', { buys: 'Install leads, maintenance agreements, financing, commercial mechanical bids.', ticket: '$8K–$20K installs; agreements $150–$300/yr', season: 'Summer and winter peaks; shoulder seasons are the slow months to fill.', pains: ['Shoulder-season gaps', 'Agreement renewals by hand', 'Competing with big franchises', 'Commercial mechanical bids'], lingo: ['SEER2', 'tonnage', 'heat pump', 'changeout', 'Manual J', 'RTU', 'VRF', 'TAB'], angle: 'Fill the shoulder seasons: permit-based install leads plus PM outreach. Gov shops: mechanical set-asides at bases and VA hospitals.' }),
T('Concrete and masonry', { buys: 'GC bid invites, takeoffs, public flatwork bids.', ticket: '$5K driveways to $1M+ structural', season: 'Weather-bound; spring through fall.', pains: ['Living off GC invites', 'Weather delays', 'Bonding for public work', 'Getting paid by GCs'], lingo: ['flatwork', 'yardage', 'rebar/mesh', 'finish (broom, stamp)', 'ICF', 'CMU', 'tuckpointing'], angle: 'More GC relationships plus public flatwork bids (sidewalks, ADA ramps) that fit their bonding.' }),
T('Framing and carpentry', { buys: 'Steady GC work, bid invites, crew scheduling.', ticket: '$10K–$500K per package', season: 'Follows housing starts.', pains: ['One or two GCs carry the whole business', 'Pricing by the square foot under pressure', 'Crew utilization'], lingo: ['rough framing', 'sheathing', 'trusses', 'finish carpentry', 'millwork', 'casework'], angle: 'Diversify GC list: outreach to every GC pulling new-build permits in their county.' }),
T('Painting and finishes', { buys: 'Residential repaint leads, HOA and PM contracts, commercial bids.', ticket: '$3K–$15K residential; $50K+ commercial', season: 'Spring and fall exterior; interiors year-round.', pains: ['Price shoppers', 'Seasonal gaps', 'Proving quality without a portfolio'], lingo: ['cut-in', 'prep', 'elastomeric', 'wallcovering', 'drywall finish levels 1–5', 'spec repaint'], angle: 'Gallery-first website plus HOA and property-manager outreach for repeat contracts.' }),
T('Flooring', { buys: 'Remodel and builder leads, commercial bids, measuring and estimating.', ticket: '$3K–$40K residential; commercial much higher', season: 'Steady; follows remodel and multifamily turns.', pains: ['Showroom foot traffic dropping', 'Builder price pressure', 'Multifamily turn work by phone'], lingo: ['LVP/LVT', 'subfloor', 'moisture testing', 'resilient', 'Division 09', 'turns'], angle: 'Property-manager unit turns are recurring revenue; remodel permits feed residential.' }),
T('Site work and excavation', { buys: 'Public bids (DOT, municipal, utilities), equipment scheduling.', ticket: '$20K–$5M', season: 'Spring through fall; public lettings on fixed calendars.', pains: ['Tracking DOT and municipal lettings', 'Bonding capacity', 'Davis-Bacon certified payroll', 'Equipment idle time'], lingo: ['cut and fill', 'grading', 'utilities', 'storm water/SWPPP', 'lettings', 'unit price bid', 'DBE goal'], angle: 'The bid engine is the whole pitch: lettings and set-asides scored against bonding, plus DBE outreach to primes.' }),
T('Specialty sub (other)', { buys: 'GC invites and public bids for their niche scope.', ticket: 'Varies by scope', season: 'Varies', pains: ['Scope rarely matches generic lead sites', 'GCs forget them until the last minute', 'Certifications not leveraged'], lingo: ['scope', 'Division (CSI MasterFormat)', 'submittals', 'shop drawings', 'value engineering'], angle: 'Niche-scope bid matching plus prime outreach that leads with their certification.' }),
]

export const GLOSSARY = [
['SAM.gov', 'The federal registration every contractor needs to bid federal work. Renewed yearly.'],
['UEI', 'Unique Entity ID, the 12-character federal ID that replaced DUNS.'],
['CAGE code', 'Five-character code used by DoD and other agencies to identify a contractor location.'],
['NAICS code', 'Six-digit industry code (e.g., 238160 roofing). Set-asides and size standards are tied to it.'],
['Size standard', 'The revenue cap to count as "small" for a NAICS code. Check SBA\'s table for exact figures.'],
['Set-aside', 'A contract only certain small businesses can bid on (small business, 8(a), HUBZone, WOSB, SDVOSB).'],
['8(a)', 'SBA business-development program for disadvantaged owners. As of Sept 10, 2026, individually owned applicants must show disadvantage with evidence.'],
['HUBZone', 'SBA certification for firms in, and employing people from, historically underutilized areas. Federal goal: 3% of dollars.'],
['WOSB / EDWOSB', 'Women-owned (and economically disadvantaged women-owned) small business certifications. Goal: 5%.'],
['SDVOSB / VOSB', 'Service-disabled veteran-owned / veteran-owned small business. SDVOSB goal rose to 5%.'],
['DBE', 'Disadvantaged Business Enterprise: state DOT certification for federally funded transportation work.'],
['SWaM / HUB / MBE / WBE', 'State and local minority, women and small business certifications (SWaM is Virginia\'s).'],
['Capability statement', 'One-page résumé for a contractor: core competencies, past performance, codes, certifications, contact.'],
['Sources sought / RFI', 'Agency market research before a solicitation. Responding can shape a set-aside.'],
['RFQ / RFP / IFB', 'Request for quote / proposal / invitation for bid (sealed, lowest responsive bid wins).'],
['IDIQ / MATOC / JOC', 'Contract vehicles that issue many task orders over years. Getting on one is a big win.'],
['Pre-bid / site visit', 'Meeting and walkthrough before bids are due. Sometimes mandatory.'],
['Addendum', 'A change to the solicitation. Must be acknowledged in the bid.'],
['Bid bond', 'Guarantee (often 5–20%) that the bidder will sign the contract if it wins.'],
['Performance and payment bonds', 'Required on federal construction over $150,000 (Miller Act). $35K–$150K uses alternative payment protection.'],
['Bonding capacity', 'Single-job and aggregate limits a surety will write. Caps which bids a firm can chase.'],
['Davis-Bacon', 'Prevailing-wage law for federal construction over $2,000. Requires weekly certified payroll.'],
['Certified payroll (WH-347)', 'Weekly payroll report proving prevailing wages were paid.'],
['Prime / sub', 'The prime holds the contract; subs perform parts. Large primes must hit small-business subcontracting goals.'],
['Subcontracting plan', 'A large prime\'s commitment to use small, disadvantaged, women, HUBZone and veteran subs. Our clients\' certifications fill it.'],
['Past performance', 'Record of similar completed jobs; often scored in proposals (CPARS for federal).'],
['Schedule of values (SOV)', 'Line-item breakdown of the contract price used for progress billing.'],
['Pay app (AIA G702/G703)', 'Monthly progress billing against the SOV.'],
['Retainage', 'Percentage held back from each payment (often 5–10%) until completion.'],
['Change order', 'Signed change to scope, price or time. Unbilled change orders are where margin leaks.'],
['Lien waiver', 'Document releasing lien rights once paid. Conditional vs unconditional matters.'],
['COI', 'Certificate of insurance. GCs need current ones from every sub.'],
['EMR', 'Experience modification rate, a safety score that affects prequalification.'],
['Punch list', 'Final list of items to fix before closeout.'],
['Takeoff', 'Measuring quantities from plans to build an estimate.'],
['Permit valuation', 'Declared job value on a building permit. Helps size a lead before calling.'],
['Owner-filed permit', 'Homeowner pulled the permit with no contractor of record. A hot residential lead.'],
]

export const GOV_PRIMER = `
## Why gov contractors are our best-fit buyers
The federal government aims to send **23% of prime contract dollars** to small businesses, plus **5% to women-owned**, **5% to service-disabled veteran-owned** (raised from 3%), **3% to HUBZone** and **5% to small disadvantaged** firms. In FY2025 small businesses got **27.58%** of prime dollars, while WOSB (4.52%) and HUBZone (2.66%) **missed** their goals. Agencies are under pressure to find those firms.

The money goes to the certified firms that **find the bid first and answer it cleanly**. Most small firms don't: nobody checks SAM.gov, the state portal and the prime contractors' sub lists every morning, and their capability statement is a two-year-old PDF. That gap is exactly what the Contracts package fixes.

## What a gov-ready contractor needs (and what we sell into)
1. **Active SAM registration** with the right NAICS codes. Every lead in our Gov list is active today.
2. **Certifications** (8(a), HUBZone, WOSB/EDWOSB, SDVOSB, plus state DBE/SWaM/HUB). These open set-asides and prime sub plans.
3. **A capability statement and a website** a contracting officer can vet in ten seconds. 135 of our first 180 gov leads have **no website listed**.
4. **Bonding**: Miller Act performance and payment bonds on federal construction over **$150,000**; alternatives between $35,000 and $150,000. The portal scores bids against their single and aggregate limits.
5. **Davis-Bacon** compliance on federal construction over $2,000: weekly certified payroll.
6. **A daily bid habit.** SAM.gov Contract Opportunities, state procurement (Virginia's is eVA), DOT lettings, school districts, housing authorities, military bases, and GC invitations to bid.

## Know before you call
- **8(a) changed:** as of **September 10, 2026**, individually owned 8(a) applicants must prove social disadvantage with evidence; the race-based presumption is gone. Don't make this a talking point, but expect some 8(a) owners to be anxious about pipeline. Diversifying into other set-asides and prime sub plans is a real need.
- **Primes need them.** Large primes have subcontracting plans to fill. A certified sub that responds fast with clean paperwork gets repeat work.
- **Sources sought notices** are free leverage: responding can convince an agency to set a contract aside.

## How we pitch it
Lead with **"we find the bid first and have your paperwork ready before the pre-bid."** Then the website, because a CO or prime will look you up. Offer the big fast value: *"Would it be a bad idea if I pulled this week's open bids matching your NAICS near you?"*
`

export const SWEEP_EXPLAINER = `
Every Monday at 4:39 am ET, the Gundy sweep runs on its own, before either of you is up:

1. **Government contractors:** queries the SBA Small Business Search for active-SAM firms in all 12 trades, scores them (certifications, no or weak website, bonding, years in business, named contact), and takes the best five per trade in each region.
2. **Local contractors:** pulls YellowPages listings in a rotating set of metros across ET, CT, MT and PT, and keeps the established businesses with no website of their own, or one that grades outdated.
3. **Website grading:** opens each lead's website and grades it 1–10 (design age, quote form, reviews, gallery, license, social links).
4. **Dedupe:** skips anyone already in the portal, by name and city or by UEI.
5. **Custom scripts:** writes the call script, voicemail, text, email, LinkedIn, Instagram, Facebook and two-week follow-up for each lead, built from that lead's own facts.
6. **Load:** adds them to the Leads page as **New**, unassigned, stamped with the sweep date, and logs the run here.

To run one early, open the scheduled task "Gundy weekly lead sweep" and choose Run now.
`

export const GROWTH = `
## The goal: $20,000 a month, then keep stacking
Our revenue has two parts: **setup fees** (one-time) and **monthly fees** (recurring). Setup pays for the month; recurring compounds.

## Funnel math (edit the numbers in the calculator)
The calculator uses **assumptions**, not history. Replace them with our real numbers after the first two weeks of logging every call.

## What to do this week
1. **Call the Gov list first.** Highest fit scores, named decision-makers, direct emails, and the Contracts package is our biggest ticket.
2. **Split by clock:** east and central in the morning, west from 3 pm ET onward. The Leads page shows who's callable right now.
3. **Log every touch.** The dashboard, the cadence and our close rates are only as good as the log.
4. **Book demos, not "info."** Every call ends with a date or a clear no.

## Add to the portal next (in order of money made per hour of work)
1. **Click-to-call and text through a business number (Twilio or OpenPhone).** Calls log themselves, recordings feed coaching, and texts come from a Gundy number instead of a personal cell.
2. **Gmail send and reply tracking.** Send the email straight from the lead, see opens and replies on the card.
3. **Calendar booking link** (Cal.com or Google Calendar) in every email and text, so "what time works?" never costs a round trip.
4. **One-click proposal with e-signature and a Stripe payment link** for the setup fee. Shortest path from yes to cash.
5. **Commission and split tracking** between Azaiah and Bilal, per deal.
6. **Client onboarding board** for won deals: the four-week build, data load and go-live checklist.

## Agents worth adding (each one is a scheduled task like the Monday sweep)
- **Enrichment agent (nightly):** finds the owner's name, flags cell vs landline (so we know who can get a text), and adds Facebook, Instagram and LinkedIn links to new leads.
- **Bid-match agent (daily):** for every Gov lead we're working, pulls three open SAM.gov or state bids that match their NAICS and location, and attaches them to the card. That's our big fast value, ready before the call.
- **Website teardown agent:** for each Website + Portal lead, makes a 60-second written teardown and a mock homepage in their colors. A personalized asset gets far more replies than a generic link.
- **Follow-up agent (daily):** reads the call log and drafts the next touch for every lead that's due, so we only review and send.
- **Call recap agent:** paste call notes, get a clean summary, the black swan, the next step and a task.
- **Permit feed agent:** pulls new building permits for client counties. It powers both our own prospecting and the client product.
`
