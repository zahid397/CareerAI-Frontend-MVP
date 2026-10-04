# CareerAI validation

Validated against the production static export using headless Chromium 153 and Playwright, plus strict TypeScript and Next.js production builds.

| Check                                                       | Result                                           |
| ----------------------------------------------------------- | ------------------------------------------------ |
| Strict TypeScript (`npm run typecheck`)                     | Passed                                           |
| Next.js production build (`npm run build`)                  | Passed; 22 generated pages                       |
| Landing hero and interactive career compass                 | Passed                                           |
| Eight-step fresh-profile onboarding                         | Passed                                           |
| Ten-question assessment and ranked results                  | Passed                                           |
| Career selection updates skill gap, roadmap, and dashboard  | Passed                                           |
| Skill priority filters and editable self-ratings            | Passed                                           |
| Roadmap task completion and unmarking survive reload        | Passed                                           |
| Progress remains separate when switching careers            | Passed                                           |
| CV editing, live preview, and editable writing suggestion   | Passed                                           |
| CV text download and browser print/PDF action               | Passed                                           |
| CV data survives reload                                     | Passed                                           |
| Five-question interview with generated feedback and summary | Passed                                           |
| Interview resumes after reload                              | Passed                                           |
| Readiness and fictional job listings                        | Passed                                           |
| Job filters, saved jobs, and demo application dialog        | Passed                                           |
| Demo profile and direct loading of core routes              | Passed                                           |
| Dark/light theme survives reload                            | Passed                                           |
| Mobile navigation drawer and bottom navigation              | Passed                                           |
| Mobile CV Edit/Preview tabs, including arrow-key operation  | Passed                                           |
| Horizontal overflow at 390px and 360px widths               | None in tested routes                            |
| Empty dashboard and invalid saved-data recovery             | Passed                                           |
| Runtime and console errors in tested journeys               | None observed                                    |
| Desktop dashboard layout                                    | Visually inspected at 1440px                     |
| Static source and public output                             | Packaged without dependencies or build internals |

The optional WebMCP registry was unavailable in the test browser. Normal UI fallback works; native WebMCP integration is not claimed as validated.

This is a tested frontend prototype. Recommendation percentages, writing assistance, interview feedback, job listings, salaries, and readiness indicators remain explicitly simulated. Browser printing and local persistence depend on the user's browser; there is no cross-device synchronization.
