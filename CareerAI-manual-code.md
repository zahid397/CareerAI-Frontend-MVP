# CareerAI — complete manual source code

Create a folder named `careerai`. For each filename below, create the matching file and copy its code block. All application source and configuration files are included.

Run after copying:

```bash
cd careerai
npm ci
npm run dev
```

Open http://localhost:3000. Click **Try Demo** to explore Zahid’s complete workspace.

To create and preview the static production output:

```bash
npm run check
npm start
```

The ZIP also includes the prebuilt `out/` directory. This manual source document includes the editable source needed to regenerate it. All AI behavior is simulated locally.

## File index

- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `next.config.ts`
- `next-env.d.ts`
- `postcss.config.mjs`
- `.gitignore`
- `README.md`
- `QA.md`
- `src/app/assessment/page.tsx`
- `src/app/careers/[slug]/page.tsx`
- `src/app/careers/page.tsx`
- `src/app/cv-builder/page.tsx`
- `src/app/dashboard/page.tsx`
- `src/app/error.tsx`
- `src/app/globals.css`
- `src/app/interview/page.tsx`
- `src/app/jobs/page.tsx`
- `src/app/layout.tsx`
- `src/app/not-found.tsx`
- `src/app/onboarding/page.tsx`
- `src/app/page.tsx`
- `src/app/readiness/page.tsx`
- `src/app/results/page.tsx`
- `src/app/roadmap/page.tsx`
- `src/app/skill-gap/page.tsx`
- `src/components/assessment/AssessmentFlow.tsx`
- `src/components/assessment/AssessmentQuestion.tsx`
- `src/components/assessment/OnboardingFlow.tsx`
- `src/components/career/CareerCards.tsx`
- `src/components/career/CareerDetails.tsx`
- `src/components/career/CareersPage.tsx`
- `src/components/career/ResultsPage.tsx`
- `src/components/career/TargetCareerSelect.tsx`
- `src/components/cv/CVBuilderPage.tsx`
- `src/components/cv/CVPreview.tsx`
- `src/components/dashboard/DashboardPage.tsx`
- `src/components/dashboard/ReadinessPage.tsx`
- `src/components/dashboard/StatCard.tsx`
- `src/components/interview/InterviewPage.tsx`
- `src/components/interview/InterviewQuestionCard.tsx`
- `src/components/jobs/JobCard.tsx`
- `src/components/jobs/JobsPage.tsx`
- `src/components/layout/AgentTools.tsx`
- `src/components/layout/AppShell.tsx`
- `src/components/layout/LandingPage.tsx`
- `src/components/roadmap/RoadmapPage.tsx`
- `src/components/roadmap/RoadmapTimeline.tsx`
- `src/components/skill-gap/SkillBar.tsx`
- `src/components/skill-gap/SkillGapPage.tsx`
- `src/components/ui/Modal.tsx`
- `src/components/ui/primitives.tsx`
- `src/data/assessmentQuestions.ts`
- `src/data/careers.ts`
- `src/data/cvTemplates.ts`
- `src/data/demo.ts`
- `src/data/interviewQuestions.ts`
- `src/data/jobs.ts`
- `src/data/roadmaps.ts`
- `src/data/skills.ts`
- `src/hooks/useCareerAI.tsx`
- `src/lib/careerEngine.ts`
- `src/lib/cvEngine.ts`
- `src/lib/id.ts`
- `src/lib/interviewEngine.ts`
- `src/lib/progress.ts`
- `src/lib/storage.ts`
- `src/types/assessment.ts`
- `src/types/career.ts`
- `src/types/job.ts`
- `src/types/roadmap.ts`
- `src/types/user.ts`
- `public/favicon.svg`
- `scripts/preview.mjs`

## package.json

````json
{
  "name": "careerai-frontend",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev --hostname 0.0.0.0",
    "build": "next build",
    "start": "node scripts/preview.mjs",
    "typecheck": "tsc --noEmit",
    "check": "npm run typecheck && npm run build"
  },
  "dependencies": {
    "next": "^16.1.6",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "framer-motion": "^12.34.0",
    "lucide-react": "^0.577.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.2.0",
    "@types/node": "^22.0.0",
    "@types/react": "^19.2.0",
    "@types/react-dom": "^19.2.0",
    "tailwindcss": "^4.2.0",
    "typescript": "^5.9.0"
  }
}

````


## package-lock.json

````json
{
  "name": "careerai-frontend",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "careerai-frontend",
      "version": "1.0.0",
      "dependencies": {
        "framer-motion": "^12.34.0",
        "lucide-react": "^0.577.0",
        "next": "^16.1.6",
        "react": "^19.2.0",
        "react-dom": "^19.2.0"
      },
      "devDependencies": {
        "@tailwindcss/postcss": "^4.2.0",
        "@types/node": "^22.0.0",
        "@types/react": "^19.2.0",
        "@types/react-dom": "^19.2.0",
        "tailwindcss": "^4.2.0",
        "typescript": "^5.9.0"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.3.0.tgz",
      "integrity": "sha512-U4+70Pc5ZS9osnCBCE5Jha/ciHM+Yp+CNMNC/7HvYbNRk1Ldd+f7qO65W5qfhu/TCv+/ozljlXXe9Nj8419DMA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.11.3",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.11.3.tgz",
      "integrity": "sha512-Xz4Tpyki7XyrpbUK1jR1AhdAdaXyhhY4lZ3neLodmhpuWfy2PAQN5B46sAiU4liOXGLkHypn/qU+jvfWSCYYLA==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@img/colour": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@img/colour/-/colour-1.1.0.tgz",
      "integrity": "sha512-Td76q7j57o/tLVdgS746cYARfSyxk8iEfRxewL9h4OMzYhbW4TAcppl0mT4eyqXddh6L/jwoM75mo7ixa/pCeQ==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@img/sharp-darwin-arm64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-arm64/-/sharp-darwin-arm64-0.35.5.tgz",
      "integrity": "sha512-QRUlFQ0WxvdWyqqG/WtI3iupfD5rBzmCHXSdPsY91sAtVtTo7Q4cb6zOccZ3gqEqkr0f1As1ehLqmEpDsRf+lg==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-arm64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-darwin-x64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-x64/-/sharp-darwin-x64-0.35.5.tgz",
      "integrity": "sha512-+BR255RhDlpygUpOc/Jdt1nT6DQ3XG/ERo5wbcdOf5Q320dKtPCKPLR1LJs9VGXRaMa8l1uUa0tkCNOXiAxZUw==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-x64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-freebsd-wasm32": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-freebsd-wasm32/-/sharp-freebsd-wasm32-0.35.5.tgz",
      "integrity": "sha512-Y/z91nEZ4uIBX5X3nfTovjU9lHNKFYbL2lpHCLVNmXQK03VIZvXBBt0KxbPGp2SdGSF+2mQU4e+hQaWOt86iAw==",
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "dependencies": {
        "@img/sharp-wasm32": "0.35.5"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-arm64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-arm64/-/sharp-libvips-darwin-arm64-1.3.4.tgz",
      "integrity": "sha512-5R89nBYiRdUlSWJxPhO+GVtaXzXSxKnRu/xqMn3KTA3L9EB9Oy/P+Nn2f2vlhPuUdy/Zusb2DarbyTpGCfEDuw==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-x64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-x64/-/sharp-libvips-darwin-x64-1.3.4.tgz",
      "integrity": "sha512-iR2OKH80yi0U+dUplyh3/xdpFvps6YkCwsXenIJxqxR1v9o+xtKTGbS9H7cps+2Vxjc8B1j96p75NmTGjIhtpQ==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm/-/sharp-libvips-linux-arm-1.3.4.tgz",
      "integrity": "sha512-LmRtTsOHuvM2+wlO2Db37dx5MiZhB0FvSunciw48YjdOkZz9KAiRbm8ujeMOA1INqmei5NapFxYEK1D1ZSidmw==",
      "cpu": [
        "arm"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm64/-/sharp-libvips-linux-arm64-1.3.4.tgz",
      "integrity": "sha512-Y3dgX/6lE2QhQb+Gxy0WZxfg9MEm/JBjamZpS2IklP7xIQoKN4hzAm7KcMVGtaVDt3neE9OKBC7vAfonA/Lr1A==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-ppc64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-ppc64/-/sharp-libvips-linux-ppc64-1.3.4.tgz",
      "integrity": "sha512-Le6boB8Tai0Nis+gIxIpKx68UDVVIqdR8Tin5Yf1z2LJJQLDJvCDRqRu+jC2qCoD+eIomonmOwB4smBRxfVpYQ==",
      "cpu": [
        "ppc64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-riscv64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-riscv64/-/sharp-libvips-linux-riscv64-1.3.4.tgz",
      "integrity": "sha512-aHkkIEHPRdQEegJN20MLmGtxYD9R2wQr3Cwpddnu5+YKMt6Uzax7S9h5gpZTo8wyrGuZSlfQ63OevL5mTyOC7Q==",
      "cpu": [
        "riscv64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-s390x": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-s390x/-/sharp-libvips-linux-s390x-1.3.4.tgz",
      "integrity": "sha512-ra/mB6MikESDUO7Yg+Mi95bFBb9GsObURuhnOv3OqknjGe9sZrG8tCe9q0xSIGrtLgvgw0gKnFWcK4blSgQOuQ==",
      "cpu": [
        "s390x"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-x64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-x64/-/sharp-libvips-linux-x64-1.3.4.tgz",
      "integrity": "sha512-GJ//SSXbnwSDes02umB3nDJLFcQzw8a18V8fyhqr6tV515tOEMdImjjxj1AoafMRz56F3PHgftnj1QEKSU1zkw==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-arm64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-arm64/-/sharp-libvips-linuxmusl-arm64-1.3.4.tgz",
      "integrity": "sha512-hvulFwtjUcagsis6BBxHwGFwWoNZjgYmULGVrZcyfNbjA8hKILbRxGg15/7w5HDyXHXUos/j6baAWqnCyQ2DWA==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-x64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-x64/-/sharp-libvips-linuxmusl-x64-1.3.4.tgz",
      "integrity": "sha512-6zXKeE/p39I1AmA3cJG35eyBGNqNddLnUXjhwBnsGjFPWqf5VKkDBEqaEkPDoTEtkxwi2vv8Tcr2mDyP4So7Fg==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-linux-arm": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm/-/sharp-linux-arm-0.35.5.tgz",
      "integrity": "sha512-LEaXK2WdXVK5ykcw0buWyPMsmLLL2vpHLD6yrNSW+JGEL3BZPA4tpKN6iaMc4AxTTAoaX/sU1rOL51lcIz48ZQ==",
      "cpu": [
        "arm"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linux-arm64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm64/-/sharp-linux-arm64-0.35.5.tgz",
      "integrity": "sha512-LYVx5JTsOM2CBzmxreh+nl64/3H6Xb09iSLknqH47z2T2DFFxDeFLP5y4dJwe6H7uGQlHPyEEtIqyo3DYsRwdQ==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linux-ppc64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-ppc64/-/sharp-linux-ppc64-0.35.5.tgz",
      "integrity": "sha512-QVxAAq8evVRI9ia2vqgwrmWucn5Dfv+JdWzj75pD8omHLPSP7f8p20O8jxzjCcuCEQEOtYOZUmX1hkiZ0kdevA==",
      "cpu": [
        "ppc64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-ppc64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linux-riscv64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-riscv64/-/sharp-linux-riscv64-0.35.5.tgz",
      "integrity": "sha512-LtdreXguaavKODPIfzJ4kffx7UNt1omwtK0rch4EBbbSTXPnxWmYSayXdLJw0fJzQ97kHt1gL/yh4tvU+nCyRQ==",
      "cpu": [
        "riscv64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-riscv64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linux-s390x": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-s390x/-/sharp-linux-s390x-0.35.5.tgz",
      "integrity": "sha512-UZasTOFiYzotTsGOCu42BfUzP6Tu6Do/947iRm1RsLKvlllxwGcn4RN27LibGWceix4Y+Pmw3jsnTcCQIgWjqA==",
      "cpu": [
        "s390x"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-s390x": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linux-x64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-x64/-/sharp-linux-x64-0.35.5.tgz",
      "integrity": "sha512-SxFtLTeJInhAA9Q836kux2vZNeOBQEx658qvbboZScr0wIARym3IcGmW7KpVD5sbVg0Ojy+udFQdayYIZyoNog==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-x64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linuxmusl-arm64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-arm64/-/sharp-linuxmusl-arm64-0.35.5.tgz",
      "integrity": "sha512-9HbMclmI1zlNkFRs3z9/eBtDjfD0sGlrX1z6b1qwmiFY5ElDLh4BC0LPBdVp7z1DXFiKlIcznf+ZlsuZzLxQqg==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-arm64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linuxmusl-x64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-x64/-/sharp-linuxmusl-x64-0.35.5.tgz",
      "integrity": "sha512-4KOphqB035HrVdqLZfCgMzzERrQkkzOwRhl4OAkRO1YCldbaFjySXMaK534Mo0V+LndnlJk+sbUyLeU0ULyD1A==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-x64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-wasm32": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-wasm32/-/sharp-wasm32-0.35.5.tgz",
      "integrity": "sha512-Ptsga1su4tQx+LLF1ECS9U6nz5kmrXKo6XVbtR48Ke3ZRxxgaWBu7IDtEe1quo8hiupwm6WFqxVlXaSf7IINGQ==",
      "license": "Apache-2.0 AND LGPL-3.0-or-later AND MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/runtime": "^1.11.3"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-webcontainers-wasm32": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-webcontainers-wasm32/-/sharp-webcontainers-wasm32-0.35.5.tgz",
      "integrity": "sha512-hfhF/FmoQyTUkA0bIKFOtw536BQSeBMe6BF6QyWlrPxT754+TFLaZ7sKKTfvvM0yJgKgaYTwnFCIZ/GuDw5SUA==",
      "cpu": [
        "wasm32"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "dependencies": {
        "@img/sharp-wasm32": "0.35.5"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-arm64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-arm64/-/sharp-win32-arm64-0.35.5.tgz",
      "integrity": "sha512-X4t7g+7ZA5DKblCBEXGjUqqemj4vczING/5viFwAL8h4N3qYeyjwdCvRLHi4EdOUI+2Z7UFlp1VM+p/AuEtm6Q==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-ia32": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-ia32/-/sharp-win32-ia32-0.35.5.tgz",
      "integrity": "sha512-5Zm82LoBc43nhwNybZlG7Y1KO//Zhsn306fQl29ZOuStHLGTo3BWL83q3cznX0poxSAMuYL1On/BHBxkBeKr6A==",
      "cpu": [
        "ia32"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-x64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-x64/-/sharp-win32-x64-0.35.5.tgz",
      "integrity": "sha512-x76eH0vEiHlcMQu8Y8IenntaACtddpT6W0wmXtWrnKcnKI7ME5DdgqhAD6SEWOEl1v2zDvkZDhFA9KnURwpfqg==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.6.0.tgz",
      "integrity": "sha512-T7jf+5zgsZHwNJ4lvQ7/aezbyk0nNX+zJVWpmHA7VYsEx7a7qr5Rg5IbtJFqkgze5Y2sruq1RUY8Q837Od7iFw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@next/env": {
      "version": "16.3.8",
      "resolved": "https://registry.npmjs.org/@next/env/-/env-16.3.8.tgz",
      "integrity": "sha512-Al9zqHVV7TJv0eFuOU4U7Lvv74PTih4Ch63sk2xCIpSTkE3udFnaOcnzP2lQVymiL7yS9Cj2iClUXlR3EQ5sEw==",
      "license": "MIT"
    },
    "node_modules/@next/swc-darwin-arm64": {
      "version": "16.3.8",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-arm64/-/swc-darwin-arm64-16.3.8.tgz",
      "integrity": "sha512-2JPRMh2nmQG5CiL7cXGL9AGwnPWJQ//cTtAUCT+w511QHk79SYz3LGv/pc5X643B/WEO0rvu3Yww0hqwt3kgeA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-darwin-x64": {
      "version": "16.3.8",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-x64/-/swc-darwin-x64-16.3.8.tgz",
      "integrity": "sha512-GZtCCOBKJ4leVIT/Th0llWKhD1ca92lzbQiS5R5ON9QkoiFnilFsebDae1JU2a3HWoKMEmEZWGs1AGLavVM72Q==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-gnu": {
      "version": "16.3.8",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-gnu/-/swc-linux-arm64-gnu-16.3.8.tgz",
      "integrity": "sha512-O659ygeQYqneJ1fBKMpFxIFqYkYswu8IAS1OCKK/4f3ZgJJm1dRz4fVJZRi/kLLWjnBKnebOePA4WNv+sV1pVA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-musl": {
      "version": "16.3.8",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-musl/-/swc-linux-arm64-musl-16.3.8.tgz",
      "integrity": "sha512-dSjKSyWpzxoO1d3DIZZcP4XJcNaKeLmxQMFOiYl5vuBRMmweIqnAhty8tAmRsvTss779cK1FtYnDMj40e4TQlg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-gnu": {
      "version": "16.3.8",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-gnu/-/swc-linux-x64-gnu-16.3.8.tgz",
      "integrity": "sha512-lbqOuz3RPRcv+o9msNsJw5x4+Y1ZwPTs6vmL6DCf7i0fZfvng/F59wyeDwqHIvV0mK//RBy/jJkZ+nCKsSMXjQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-musl": {
      "version": "16.3.8",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-musl/-/swc-linux-x64-musl-16.3.8.tgz",
      "integrity": "sha512-+316WswI8ScVgZeUd+1KGaXkHhaYQzCjvH/05TZSpJ8zBizb1a4G7DtO7F12jcBIqMOtsz9ji1t48fmKtzqsGA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-arm64-msvc": {
      "version": "16.3.8",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-arm64-msvc/-/swc-win32-arm64-msvc-16.3.8.tgz",
      "integrity": "sha512-ji0gd4kMYUxO+1fJBIbiBVRCjzG/lloiyCccnlebvb1ZJ5qXCPZqYg4Jl1DrrixnWNMKylzgpmMWx0yNDYXlzw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-x64-msvc": {
      "version": "16.3.8",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-x64-msvc/-/swc-win32-x64-msvc-16.3.8.tgz",
      "integrity": "sha512-WcTlaKt/TWkh5kUjdJcUmB1XgZ+1c6fz4Y9fDHL73YNSdGaUWjceeWrrlwF0nv19iABYWC4iAq1oX1w4Bn0vfg==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@swc/helpers": {
      "version": "0.5.23",
      "resolved": "https://registry.npmjs.org/@swc/helpers/-/helpers-0.5.23.tgz",
      "integrity": "sha512-5lSsMOTXURePglDfvuAQUqkGek9Hg2kksOYay2m0+XR++b2NWYL/4sWyuvVBIs8oKnJaxkdi9whaL/sqN13afw==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.3.3.tgz",
      "integrity": "sha512-/T8IKEsf9VTU6tLjgC7+sv2mOPtQxzE2jMw7u4Tt40Tx+QSZxpzh95/H6cMKoja9XuW7iMdLJYBB0o9G1CaAgg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/remapping": "^2.3.5",
        "enhanced-resolve": "^5.24.1",
        "jiti": "^2.7.0",
        "lightningcss": "1.32.0",
        "magic-string": "^0.30.21",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.3.3"
      }
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.3.3.tgz",
      "integrity": "sha512-krXjAikiaFSPaK/FkAQT5UTx3VormQaiZ5hBFlJZ9UFQGB/rwg1MZIhHAG9smMQRTdyJxP6Qt5MwMtdyU5FWrA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 20"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.3.3",
        "@tailwindcss/oxide-darwin-arm64": "4.3.3",
        "@tailwindcss/oxide-darwin-x64": "4.3.3",
        "@tailwindcss/oxide-freebsd-x64": "4.3.3",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.3.3",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.3.3",
        "@tailwindcss/oxide-linux-arm64-musl": "4.3.3",
        "@tailwindcss/oxide-linux-x64-gnu": "4.3.3",
        "@tailwindcss/oxide-linux-x64-musl": "4.3.3",
        "@tailwindcss/oxide-wasm32-wasi": "4.3.3",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.3.3",
        "@tailwindcss/oxide-win32-x64-msvc": "4.3.3"
      }
    },
    "node_modules/@tailwindcss/oxide-android-arm64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.3.3.tgz",
      "integrity": "sha512-Y85A2gmPSkl5Ve5qR86GL4HT509cFqQh1aes9p3sSkyTPwt0Pppf3GkwGe4JPACcRYjgJIEhQgM6dBClnr0NYw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-arm64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.3.3.tgz",
      "integrity": "sha512-BiaWatpBcERQFDlOjRDpIVXuFK5PJez5SA4JMg6VYZdBYU+qKfV/vqjcIs+IYmtitf1xYQZTwXvU/8y4lfZUGw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-x64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.3.3.tgz",
      "integrity": "sha512-fAeUqfV5ndhxRwai8cXGzdLvul9utWOmeTkv69unv4ZXixjn61Z+p9lCWdwOwA3TYboG3BwdVuN/RDjhBRl0mw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-freebsd-x64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.3.3.tgz",
      "integrity": "sha512-iyf5bV6+wnAlflVeEy7R25dupxTNECZN5QMI0qNT6eT+EgaGdZcKhGkr5SdoaWiLJ3spLqIY9VCeSGrwmtg4kw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.3.3.tgz",
      "integrity": "sha512-aAYUprJAJQWWbRrPvtjdroZ56Md+JM8pMiopS6xGEwDfLhqj+2ver2p4nU4Mb3CRqcMmNBjo8KkUgcxhkzVQGQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.3.3.tgz",
      "integrity": "sha512-nDxldcEENOxZRzC2uu9jrutZdAAQtb+8WWDCSnWL1zvBk1+FN+x6MtDViPB5AJMfttVCUhehGWus3XBPgatM/w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.3.3.tgz",
      "integrity": "sha512-Md44bD6veX/PC5iyF8cDVnw4HBIANZepRZZ7a8DQOvkfo5WUBwcp6iAuCUz23u+4SUkhJlD3eL7hNdW8ezd/kA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.3.3.tgz",
      "integrity": "sha512-tx7us1muwOKAKWao2v/GaafFeQboE6aj88vC6ziN2NCGcRm8gWUhwjzg+YdVB1e4boAtdtma4L43onunI6NS4w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-musl": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.3.3.tgz",
      "integrity": "sha512-SJxX60smvHgasZoBy11dX6YRjXJFovwWBoedhbQPOBzgFWBHGB+TVPWB9BxzR7TTxU8FQZAI2AyiNCMzFm8Img==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-wasm32-wasi/-/oxide-wasm32-wasi-4.3.3.tgz",
      "integrity": "sha512-jx1+rPhY/5Ympkktd656HBWEBLxP7dH06losBLjjf5vgCODXvi9KhtftWcMIwTFIDqBr7cRnQkdLnAG+IOlGvQ==",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.11.1",
        "@emnapi/runtime": "^1.11.1",
        "@emnapi/wasi-threads": "^1.2.2",
        "@napi-rs/wasm-runtime": "^1.1.4",
        "@tybys/wasm-util": "^0.10.2",
        "tslib": "^2.8.1"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.3.3.tgz",
      "integrity": "sha512-3rc292Ca2ceK6Ulcc/bAVnTs/3nDtoPhyEKlgPv+yQJQi/JS/AMJlqzxvlDacL1nekbrcf6bTqp/jV4qgnPxNQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.3.3.tgz",
      "integrity": "sha512-yJ0pwIVc/nYeGoV02WtsN8KYyLQv7kyI2wDnkezyJlGGjkd4QLwDGAwl47YpPJeuI0M0ObaXGSPjvWDPeTPggw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/postcss": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/postcss/-/postcss-4.3.3.tgz",
      "integrity": "sha512-JTSZZGQi1AyKirbLN3azmjVzef92tcX7h+iSqPdaeStyFpGpDlKvvpxeOE8njhbUanbRwr3z8DyzhICWnMtQeg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "@tailwindcss/node": "4.3.3",
        "@tailwindcss/oxide": "4.3.3",
        "postcss": "^8.5.16",
        "tailwindcss": "4.3.3"
      }
    },
    "node_modules/@types/node": {
      "version": "22.20.5",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-22.20.5.tgz",
      "integrity": "sha512-U2+DNr+wSjpsTS/wZGYHq7GcwfuSmKiKvoPvK22zwTlRhU91yOniN4qRR5KhIjvif7ysw/dz/hKmfDH0Ris4aA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@types/react": {
      "version": "19.3.0",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.3.0.tgz",
      "integrity": "sha512-N0rFCuH9YoxG9/m61l9MfpJKfmLOVU0em7ipIz6TRgSSkvReLB9vL85GB+yr8Bs5leqpvg96JSwF4ZS1s4viQg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.3.0",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.3.0.tgz",
      "integrity": "sha512-ZI7bU42mZXXKHn/qNLEw2IrbiINU7X5+vfgdixBHkCNpYWXjKgfQ/P+uyGb5CjOLB9UcnTeg3rylQtV2hym44Q==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.3.0"
      }
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.11.27",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.11.27.tgz",
      "integrity": "sha512-ElY12DaROGuan+lMmZ8Cvo/ZUbXPe7Enc/9VU/b1T3Kp4dwytRcNdR8DoSJN5SNJT/CuvcCA0DHDVmMOCePdRQ==",
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.cjs"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001814",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001814.tgz",
      "integrity": "sha512-/Uaf1lAzr59XcMpW0o96WoEfr+VXK2OX4U9AgFoiSHsVJ4HppnIFUjtYzsyDH2+tgANaQb2/oxYGwCPapN1FpA==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/client-only": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/client-only/-/client-only-0.0.1.tgz",
      "integrity": "sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==",
      "license": "MIT"
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "devOptional": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/enhanced-resolve": {
      "version": "5.26.0",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.26.0.tgz",
      "integrity": "sha512-9vhedylFonb2YGogzUKX6+Ja72gOJbN1QHAqdrvqLwhdl/QWbKopzoUC9EbQNVsAns/bx/4uyqalrQAoy1IByw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.3.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/framer-motion": {
      "version": "12.43.0",
      "resolved": "https://registry.npmjs.org/framer-motion/-/framer-motion-12.43.0.tgz",
      "integrity": "sha512-1eaL3RvR/kAlbG7UYcpMptEyzPoENO0c6w7ZnB3/hh2vSAz/6uGAFn6fdoqTBguNstf3MsFhJHsD/0DHiclG+g==",
      "license": "MIT",
      "dependencies": {
        "motion-dom": "^12.43.0",
        "motion-utils": "^12.39.0",
        "tslib": "^2.4.0"
      },
      "peerDependencies": {
        "@emotion/is-prop-valid": "*",
        "react": "^18.0.0 || ^19.0.0",
        "react-dom": "^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@emotion/is-prop-valid": {
          "optional": true
        },
        "react": {
          "optional": true
        },
        "react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/jiti": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.7.0.tgz",
      "integrity": "sha512-AC/7JofJvZGrrneWNaEnJeOLUx+JlGt7tNa0wZiRPT4MY1wmfKjt2+6O2p2uz2+skll8OZZmJMNqeke7kKbNgQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.32.0.tgz",
      "integrity": "sha512-NXYBzinNrblfraPGyrbPoD19C1h9lfI/1mzgWYvXUTe414Gz/X1FD2XBZSZM7rRTrMA8JL3OtAaGifrIKhQ5yQ==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.32.0",
        "lightningcss-darwin-arm64": "1.32.0",
        "lightningcss-darwin-x64": "1.32.0",
        "lightningcss-freebsd-x64": "1.32.0",
        "lightningcss-linux-arm-gnueabihf": "1.32.0",
        "lightningcss-linux-arm64-gnu": "1.32.0",
        "lightningcss-linux-arm64-musl": "1.32.0",
        "lightningcss-linux-x64-gnu": "1.32.0",
        "lightningcss-linux-x64-musl": "1.32.0",
        "lightningcss-win32-arm64-msvc": "1.32.0",
        "lightningcss-win32-x64-msvc": "1.32.0"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.32.0.tgz",
      "integrity": "sha512-YK7/ClTt4kAK0vo6w3X+Pnm0D2cf2vPHbhOXdoNti1Ga0al1P4TBZhwjATvjNwLEBCnKvjJc2jQgHXH0NEwlAg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.32.0.tgz",
      "integrity": "sha512-RzeG9Ju5bag2Bv1/lwlVJvBE3q6TtXskdZLLCyfg5pt+HLz9BqlICO7LZM7VHNTTn/5PRhHFBSjk5lc4cmscPQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.32.0.tgz",
      "integrity": "sha512-U+QsBp2m/s2wqpUYT/6wnlagdZbtZdndSmut/NJqlCcMLTWp5muCrID+K5UJ6jqD2BFshejCYXniPDbNh73V8w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.32.0.tgz",
      "integrity": "sha512-JCTigedEksZk3tHTTthnMdVfGf61Fky8Ji2E4YjUTEQX14xiy/lTzXnu1vwiZe3bYe0q+SpsSH/CTeDXK6WHig==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.32.0.tgz",
      "integrity": "sha512-x6rnnpRa2GL0zQOkt6rts3YDPzduLpWvwAF6EMhXFVZXD4tPrBkEFqzGowzCsIWsPjqSK+tyNEODUBXeeVHSkw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.32.0.tgz",
      "integrity": "sha512-0nnMyoyOLRJXfbMOilaSRcLH3Jw5z9HDNGfT/gwCPgaDjnx0i8w7vBzFLFR1f6CMLKF8gVbebmkUN3fa/kQJpQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.32.0.tgz",
      "integrity": "sha512-UpQkoenr4UJEzgVIYpI80lDFvRmPVg6oqboNHfoH4CQIfNA+HOrZ7Mo7KZP02dC6LjghPQJeBsvXhJod/wnIBg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.32.0.tgz",
      "integrity": "sha512-V7Qr52IhZmdKPVr+Vtw8o+WLsQJYCTd8loIfpDaMRWGUZfBOYEJeyJIkqGIDMZPwPx24pUMfwSxxI8phr/MbOA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.32.0.tgz",
      "integrity": "sha512-bYcLp+Vb0awsiXg/80uCRezCYHNg1/l3mt0gzHnWV9XP1W5sKa5/TCdGWaR/zBM2PeF/HbsQv/j2URNOiVuxWg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.32.0.tgz",
      "integrity": "sha512-8SbC8BR40pS6baCM8sbtYDSwEVQd4JlFTOlaD3gWGHfThTcABnNDBda6eTZeqbofalIJhFx0qKzgHJmcPTnGdw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.32.0.tgz",
      "integrity": "sha512-Amq9B/SoZYdDi1kFrojnoqPLxYhQ4Wo5XiL8EVJrVsB8ARoC1PWW6VGtT0WKCemjy8aC+louJnjS7U18x3b06Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lucide-react": {
      "version": "0.577.0",
      "resolved": "https://registry.npmjs.org/lucide-react/-/lucide-react-0.577.0.tgz",
      "integrity": "sha512-4LjoFv2eEPwYDPg/CUdBJQSDfPyzXCRrVW1X7jrx/trgxnxkHFjnVZINbzvzxjN70dxychOfg+FTYwBiS3pQ5A==",
      "license": "ISC",
      "peerDependencies": {
        "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/motion-dom": {
      "version": "12.43.0",
      "resolved": "https://registry.npmjs.org/motion-dom/-/motion-dom-12.43.0.tgz",
      "integrity": "sha512-azKON4d9S65PEoFUiQTMTgPheEmzf2QngdRc50AKfJp9Q9mmcBVw22c8eMq9k8kxOFHdL7+WZY7N/5F/lwiDag==",
      "license": "MIT",
      "dependencies": {
        "motion-utils": "^12.39.0"
      }
    },
    "node_modules/motion-utils": {
      "version": "12.39.0",
      "resolved": "https://registry.npmjs.org/motion-utils/-/motion-utils-12.39.0.tgz",
      "integrity": "sha512-8nadJAJjTtqRkmRF36FoJTrywK9nnFmnPwnSMyxaOCU7GDjN9RTMJIxx9De8ErM+vpPhMccr/6fo5WciyQLnMQ==",
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.19",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.19.tgz",
      "integrity": "sha512-Y2tUNy4ouw6tq5oDSKeQYGOyhkUBhNOcGV/02KC+6kd9eDGqdZd++mjMiIDilrBYvjEnCYvVtsuHCuP+okSfug==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/next": {
      "version": "16.3.8",
      "resolved": "https://registry.npmjs.org/next/-/next-16.3.8.tgz",
      "integrity": "sha512-U7QEZaTini6wKrb8A8hqLLqYQyCetegKjCpJOyxk642vWoMoU1x5PyZCJFvgYgiptA8xc5j/9xYlZFO7w9Sjmw==",
      "license": "MIT",
      "dependencies": {
        "@next/env": "16.3.8",
        "@swc/helpers": "0.5.23",
        "baseline-browser-mapping": "^2.9.19",
        "caniuse-lite": "^1.0.30001579",
        "postcss": "8.5.23",
        "styled-jsx": "5.1.6"
      },
      "bin": {
        "next": "dist/bin/next"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "optionalDependencies": {
        "@next/swc-darwin-arm64": "16.3.8",
        "@next/swc-darwin-x64": "16.3.8",
        "@next/swc-linux-arm64-gnu": "16.3.8",
        "@next/swc-linux-arm64-musl": "16.3.8",
        "@next/swc-linux-x64-gnu": "16.3.8",
        "@next/swc-linux-x64-musl": "16.3.8",
        "@next/swc-win32-arm64-msvc": "16.3.8",
        "@next/swc-win32-x64-msvc": "16.3.8",
        "sharp": "^0.35.4"
      },
      "peerDependencies": {
        "@opentelemetry/api": "^1.1.0",
        "@playwright/test": "^1.51.1",
        "babel-plugin-react-compiler": "*",
        "react": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "react-dom": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "sass": "^1.3.0"
      },
      "peerDependenciesMeta": {
        "@opentelemetry/api": {
          "optional": true
        },
        "@playwright/test": {
          "optional": true
        },
        "babel-plugin-react-compiler": {
          "optional": true
        },
        "sass": {
          "optional": true
        }
      }
    },
    "node_modules/next/node_modules/postcss": {
      "version": "8.5.23",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.23.tgz",
      "integrity": "sha512-g50586zr4bZmwFiTlflMu8E0bDTb5I5gertgwAKmsdUlTQIhZtunzUlD1WSzwcVWPoAVpsrA6vlfCD7oXvRwgg==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.16",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "license": "ISC"
    },
    "node_modules/postcss": {
      "version": "8.5.28",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.28.tgz",
      "integrity": "sha512-RRuzqDtt5Y9h3quz5hWhK+TPnsmVs6WwSU6LkJMeY4HstUEDuYTG8UJSdawMRzmzAtV+KEoG8N3Qg2qLy5vM/A==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.18",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/react": {
      "version": "19.3.0",
      "resolved": "https://registry.npmjs.org/react/-/react-19.3.0.tgz",
      "integrity": "sha512-E8LUcbtBWt20bbl2YoHfx4ZDBdxVTfOKtCZn9cDSJ4l6/nuoApcpIBcj47t2wZoVX8g2ZHuMHbiShgCR1T5Sog==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.3.0",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.3.0.tgz",
      "integrity": "sha512-JDk8dgif51OjFoDE70+OT9ICyYr+69HlmihNwp1+Nsfbna3t5sIiCa9ZJktDmQ4/1b/rn26hIAR2uYXDMr5r0Q==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.28.0"
      },
      "peerDependencies": {
        "react": "^19.3.0"
      }
    },
    "node_modules/scheduler": {
      "version": "0.28.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.28.0.tgz",
      "integrity": "sha512-juorfCmIkIw8tT+p5BXSm6PJjQF/ycEYmKyzURCIt/RaZIhL+PulbQ9Yu2z1HdOJDdqDTlxA1+xKBmHXJsczAw==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "7.8.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.5.tgz",
      "integrity": "sha512-Y7/KDsb8LjooZpwaqGyulO6DQlksgCncchHGk+sZIY4SBvUocMBEFH5Ur1fI4dV+Jvl0w6cjvucaIi40puRioA==",
      "license": "ISC",
      "optional": true,
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/sharp": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/sharp/-/sharp-0.35.5.tgz",
      "integrity": "sha512-Ywn4OnzGukp7CDMrp08RQ50YKmuwG47brZgIVPTvBaaAfQlRlygrRqSrxdCiL9M+LlzLBiJ68IR1QqvzHyjC7g==",
      "license": "Apache-2.0",
      "optional": true,
      "dependencies": {
        "@img/colour": "^1.1.0",
        "detect-libc": "^2.1.2",
        "semver": "^7.8.5"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-darwin-arm64": "0.35.5",
        "@img/sharp-darwin-x64": "0.35.5",
        "@img/sharp-freebsd-wasm32": "0.35.5",
        "@img/sharp-libvips-darwin-arm64": "1.3.4",
        "@img/sharp-libvips-darwin-x64": "1.3.4",
        "@img/sharp-libvips-linux-arm": "1.3.4",
        "@img/sharp-libvips-linux-arm64": "1.3.4",
        "@img/sharp-libvips-linux-ppc64": "1.3.4",
        "@img/sharp-libvips-linux-riscv64": "1.3.4",
        "@img/sharp-libvips-linux-s390x": "1.3.4",
        "@img/sharp-libvips-linux-x64": "1.3.4",
        "@img/sharp-libvips-linuxmusl-arm64": "1.3.4",
        "@img/sharp-libvips-linuxmusl-x64": "1.3.4",
        "@img/sharp-linux-arm": "0.35.5",
        "@img/sharp-linux-arm64": "0.35.5",
        "@img/sharp-linux-ppc64": "0.35.5",
        "@img/sharp-linux-riscv64": "0.35.5",
        "@img/sharp-linux-s390x": "0.35.5",
        "@img/sharp-linux-x64": "0.35.5",
        "@img/sharp-linuxmusl-arm64": "0.35.5",
        "@img/sharp-linuxmusl-x64": "0.35.5",
        "@img/sharp-webcontainers-wasm32": "0.35.5",
        "@img/sharp-win32-arm64": "0.35.5",
        "@img/sharp-win32-ia32": "0.35.5",
        "@img/sharp-win32-x64": "0.35.5"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.2.tgz",
      "integrity": "sha512-KGj/8Y43x35aZVDtt+J4mK1hoLGHULMYfSkODJNQjNDC3oW1PqPoxMwo0pLUsWM/UEGzON/NxeHywEfNXNP3Vw==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/styled-jsx": {
      "version": "5.1.6",
      "resolved": "https://registry.npmjs.org/styled-jsx/-/styled-jsx-5.1.6.tgz",
      "integrity": "sha512-qSVyDTeMotdvQYoHWLNGwRFJHC+i+ZvdBRYosOFgC+Wg1vx4frN2/RG/NA7SYqqvKNLf39P2LSRA2pu6n0XYZA==",
      "license": "MIT",
      "dependencies": {
        "client-only": "0.0.1"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "peerDependencies": {
        "react": ">= 16.8.0 || 17.x.x || ^18.0.0-0 || ^19.0.0-0"
      },
      "peerDependenciesMeta": {
        "@babel/core": {
          "optional": true
        },
        "babel-plugin-macros": {
          "optional": true
        }
      }
    },
    "node_modules/tailwindcss": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.3.3.tgz",
      "integrity": "sha512-gOhV3P7ufE62QDGg1zVaTgCR+EtPv92k2nIhVcVKcLmxT1sUBsQGhnZj175j+MqRt4zLF7ic+sCYjfhxMxj7YQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tapable": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.3.3.tgz",
      "integrity": "sha512-uxc/zpqFg6x7C8vOE7lh6Lbda8eEL9zmVm/PLeTPBRhh1xCgdWaQ+J1CUieGpIfm2HdtsUpRv+HshiasBMcc6A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/undici-types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
      "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
      "dev": true,
      "license": "MIT"
    }
  }
}

````


## tsconfig.json

````json
{
  "compilerOptions": {
    "target": "ES2019",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}

````


## next.config.ts

````typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

````


## next-env.d.ts

````typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/types/routes.d.ts";
import "./.next/types/root-params.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

````


## postcss.config.mjs

````javascript
export default { plugins: { "@tailwindcss/postcss": {} } };

````


## .gitignore

````text
node_modules/
.next/
out/
*.tsbuildinfo
.DS_Store
.env*
test-results/

````


## README.md

````markdown
# CareerAI — Frontend MVP

Discover your skills. Find your path. Build your future.

A complete, connected career-guidance prototype for Bangladeshi students, graduates, and early-career professionals. Built with Next.js App Router, strict TypeScript, React, Tailwind CSS, Framer Motion, and Lucide React.

## Run locally

Requirements: Node.js 20.9 or newer and npm. Node.js 22 or 24 is a good choice.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. No environment variables, API keys, account, database, or backend setup is needed.

## Production build and preview

```bash
npm run check
npm start
```

`check` runs TypeScript and the production build. `start` serves the prebuilt frontend in `out/` at http://localhost:3000 using a dependency-free local preview script. It only serves static files and contains no API or application backend. You can set the `PORT` environment variable if port 3000 is busy.

The application uses `output: "export"`. You can upload `out/` to any static host that serves directory index files. All eight career detail routes are prebuilt. Do not use `next start` for a static export.

## Quick demonstration

1. Open the landing page and click **Try Demo**.
2. Explore Zahid Hasan's software-engineering dashboard.
3. Open **Skill gap**, adjust a self-rating, and filter priorities.
4. Open **My roadmap**, complete a task, and refresh. Progress remains saved.
5. Change the target career. Skill requirements, learning phases, and the dashboard update together. Each career retains its own task progress.
6. Open **CV builder**, edit the form, review an **Improve with AI** suggestion, and apply or edit it. Export text or print to PDF.
7. Open **Interview practice**, choose a role and difficulty, and complete five questions. Review the session summary.
8. Explore **Job readiness** and **Demo opportunities**. Save a listing or practice the demo application flow.

For a fresh journey, open your profile chip at the bottom of the sidebar and choose **Start fresh**. This clears the current local profile, CV, assessment, and session. The dialog explains the effect before you proceed.

## User journey and routes

| Route             | Experience                                                                       |
| ----------------- | -------------------------------------------------------------------------------- |
| `/`               | Landing page and interactive career compass                                      |
| `/onboarding`     | Eight-step profile setup; selections save as you go                              |
| `/assessment`     | Ten-question assessment with back/next and resumable answers                     |
| `/results`        | Ranked profile matches, explanations, strengths, and development areas           |
| `/careers`        | Search and compare eight career paths                                            |
| `/careers/[slug]` | Responsibilities, skills, tools, projects, interview topics, and phases          |
| `/skill-gap`      | Self-ratings, practice credit, targets, gaps, and priority filters               |
| `/roadmap`        | Eight phases per career, 24 tasks, time estimates, and completion tracking       |
| `/dashboard`      | Selected career, progress, next task, skill bars, and quick actions              |
| `/cv-builder`     | Editable CV sections, live preview, templates, suggestions, and exports          |
| `/interview`      | Role-specific practice, five-question sessions, feedback, and summary            |
| `/readiness`      | Transparent skill, CV, portfolio, interview, and overall progress indicators     |
| `/jobs`           | Fictional listings, filters, saved jobs, skill comparison, and demo applications |

## What is simulated

- **Profile Match**: a deterministic frontend rules engine. It combines interests, existing skills, assessment answers, education, and work preferences. Scores are exploration guides, not scientifically validated predictions.
- **Improve with AI**: predefined writing assistance built from the CV details you enter. No AI API is called; suggestions stay editable and do not invent achievements or metrics.
- **Interview feedback**: checks concept keywords, answer length, and simple structure. Correct synonyms may be missed; this is a practice aid, not a measure of interview ability.
- **Job readiness**: heuristic progress indicators. Overall weights are skills 40%, CV 25%, portfolio 15%, and interview 20%. They do not predict hiring outcomes.
- **Jobs and salaries**: clearly labeled fictional examples. No application is sent to any employer.
- **Skill levels**: self-ratings plus five percentage points per completed task in that skill, capped at 100. Completing a task is not proof of proficiency.

The roadmap includes learning topics such as backend concepts and databases for career education. The CareerAI application itself contains no backend endpoints, authentication, database, Docker setup, or AI service integration.

## Data and state

All product content lives under `src/data/`. Types live under `src/types/`, calculations under `src/lib/`, and the shared provider under `src/hooks/useCareerAI.tsx`.

`careerai:state:v1` in localStorage persists the profile, answers, selected career, task completion per career, CV, interview session, saved jobs, and theme. Saved state is validated on restore. Invalid JSON shows a recovery message; storage failures keep the current session usable with a visible warning. Changes also sync across tabs on the same origin.

Progress is specific to a browser and website origin. Moving to a different browser or URL starts a separate workspace. Loading the demo replaces the current local workspace; use it on a fresh profile when demonstrating.

## Responsive and accessible behavior

- Desktop sidebar, mobile drawer, and mobile bottom navigation.
- Stacked cards on smaller screens, and Edit/Preview CV tabs on mobile and tablet.
- Visible focus states, labeled inputs, native controls, semantic content, progress-bar values, skip link, and native dialogs with keyboard dismissal.
- Keyboard arrow navigation for the CV tabs; Escape closes dialogs and the mobile drawer.
- Reduced-motion preferences are respected, and theme choice persists.
- CV printing hides application controls and produces a clean document. Use the browser's **Save as PDF** destination; print pagination may vary by browser and content length.

## Structure

```text
src/
  app/                 App Router pages, metadata, global styles, error states
  components/
    ui/                Shared buttons, progress bars, cards, dialogs, motion
    layout/            Navigation, landing page, optional browser agent tools
    assessment/        Onboarding and assessment
    career/            Catalog, results, details, career selector
    skill-gap/         Skill ratings, bars, and filters
    roadmap/           Task phases and timelines
    dashboard/         Overview, stat cards, and readiness
    cv/                Form editor and live document preview
    interview/         Practice configuration, session, and feedback
    jobs/              Listing cards, filters, and demo application dialog
  data/                Local career, skill, question, roadmap, and job data
  lib/                 Storage validation and pure recommendation/progress logic
  types/               Strict TypeScript models
  hooks/               Shared frontend state
```

`AgentTools.tsx` optionally registers two feature-detected WebMCP browser tools using the same visible state. Ordinary browsers simply ignore them. No server-side MCP or plugin setup is required.

## Validation

See `QA.md` for the checks performed on this version. Re-run `npm run check` after changes. The deliverable includes a lockfile so `npm ci` reproduces the dependency versions used for this build.

````


## QA.md

````markdown
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

````


## src/app/assessment/page.tsx

````tsx
import type { Metadata } from "next";
import { AssessmentFlow } from "@/components/assessment/AssessmentFlow";
export const metadata: Metadata = { title: "Career assessment" };
export default function Page() {
  return <AssessmentFlow />;
}

````


## src/app/careers/[slug]/page.tsx

````tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { careers, getCareer } from "@/data/careers";
import { CareerDetails } from "@/components/career/CareerDetails";
export function generateStaticParams() {
  return careers.map((c) => ({ slug: c.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const career = getCareer(slug);
  return {
    title: career?.name ?? "Career not found",
    description: career?.description,
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const career = getCareer(slug);
  if (!career) notFound();
  return <CareerDetails career={career} />;
}

````


## src/app/careers/page.tsx

````tsx
import type { Metadata } from "next";
import { CareersPage } from "@/components/career/CareersPage";
export const metadata: Metadata = { title: "Explore careers" };
export default function Page() {
  return <CareersPage />;
}

````


## src/app/cv-builder/page.tsx

````tsx
import type { Metadata } from "next";
import { CVBuilderPage } from "@/components/cv/CVBuilderPage";
export const metadata: Metadata = { title: "CV builder" };
export default function Page() {
  return <CVBuilderPage />;
}

````


## src/app/dashboard/page.tsx

````tsx
import type { Metadata } from "next";
import { DashboardPage } from "@/components/dashboard/DashboardPage";
export const metadata: Metadata = { title: "Dashboard" };
export default function Page() {
  return <DashboardPage />;
}

````


## src/app/error.tsx

````tsx
"use client";
import { EmptyState, Button } from "@/components/ui/primitives";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <EmptyState
      title="Let’s get you moving again"
      description="This page had a problem loading. Try again to restore the view."
    >
      <Button onClick={reset}>Try again</Button>
    </EmptyState>
  );
}

````


## src/app/globals.css

````css
@import "tailwindcss";
@theme {
  --font-sans: "Inter", "Segoe UI", Arial, sans-serif;
}
:root {
  --bg: #090e1c;
  --surface: #11182a;
  --surface-alt: #161e33;
  --surface-hover: #1b2540;
  --nav: #0d1323;
  --text: #f1f3fb;
  --muted: #99a5bf;
  --border: #252e45;
  --accent: #8a7aff;
  --accent-strong: #7460ed;
  --accent-soft: #8a7aff18;
  --mint: #74d9b7;
  --cyan: #79cde4;
  --orange: #eeb987;
  --pink: #e7a0c8;
  --shadow: 0 12px 35px #03071322;
  --radius: 18px;
}
[data-theme="light"] {
  --bg: #f5f7fc;
  --surface: #ffffff;
  --surface-alt: #eff2fa;
  --surface-hover: #e7ebf7;
  --nav: #ffffff;
  --text: #15203a;
  --muted: #576580;
  --border: #dce2ef;
  --accent: #6450d5;
  --accent-strong: #6550d9;
  --accent-soft: #735beb12;
  --mint: #217b5b;
  --cyan: #17768f;
  --orange: #966025;
  --pink: #a14179;
  --shadow: 0 10px 35px #20305b08;
}
* {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
}
body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
a {
  color: inherit;
  text-decoration: none;
}
button,
input,
textarea,
select {
  font: inherit;
}
button {
  cursor: pointer;
}
button:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}
h1,
h2,
h3,
h4,
p {
  margin: 0;
}
h1,
h2,
h3,
h4 {
  line-height: 1.25;
  letter-spacing: -0.035em;
}
h1 {
  font-size: 2.25rem;
  font-weight: 700;
}
h2 {
  font-size: 1.35rem;
  font-weight: 650;
}
h3 {
  font-size: 1.0625rem;
  font-weight: 650;
}
h4 {
  font-size: 1rem;
  font-weight: 650;
}
p {
  color: var(--muted);
}
small {
  font-size: 0.8125rem;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
svg {
  flex-shrink: 0;
}
::selection {
  background: var(--accent);
  color: white;
}
:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 4px;
  border-radius: 5px;
}
input,
textarea,
select {
  width: 100%;
  color: var(--text);
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  min-height: 46px;
  padding: 10px 13px;
}
textarea {
  resize: vertical;
  min-height: 110px;
  line-height: 1.6;
}
input::placeholder,
textarea::placeholder {
  color: var(--muted);
  opacity: 0.8;
}
input[type="range"] {
  min-height: 30px;
  accent-color: var(--accent);
  padding: 0;
  background: transparent;
  cursor: pointer;
}
input[type="checkbox"] {
  width: 20px;
  min-height: 20px;
  accent-color: var(--accent);
  margin: 0;
}
label {
  font-size: 0.875rem;
  font-weight: 550;
}
label > input,
label > textarea,
label > select {
  margin-top: 6px;
}
select {
  appearance: auto;
}
fieldset {
  border: 0;
  padding: 0;
  margin: 0;
}
legend {
  font-weight: 600;
  margin-bottom: 10px;
}
.container {
  width: min(1220px, calc(100% - 64px));
  margin-inline: auto;
}
.muted {
  color: var(--muted);
}
.accent {
  color: var(--accent);
}
.mint {
  color: var(--mint);
}
.text-small {
  font-size: 0.875rem;
}
.eyebrow {
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  margin-bottom: 12px;
}
.panel {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 26px;
  box-shadow: var(--shadow);
}
.section-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 22px;
}
.section-title p {
  font-size: 0.875rem;
  margin-top: 5px;
}
.stack {
  display: flex;
  flex-direction: column;
  gap: 22px;
}
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}
.inline-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 46px;
  padding: 11px 20px;
  border: 1px solid transparent;
  border-radius: 10px;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.45;
  transition:
    background 0.2s,
    transform 0.2s,
    border-color 0.2s;
  white-space: normal;
  text-align: center;
}
.btn:hover:not(:disabled) {
  transform: translateY(-1px);
}
.btn-primary {
  background: var(--accent-strong);
  color: #fff;
  box-shadow: 0 5px 15px #6550d920;
}
.btn-primary:hover:not(:disabled) {
  background: #6951de;
}
.btn-secondary {
  background: var(--surface);
  border-color: var(--border);
  color: var(--text);
}
.btn-secondary:hover:not(:disabled) {
  background: var(--surface-hover);
  border-color: var(--accent);
}
.btn-ghost {
  background: transparent;
  color: var(--muted);
  padding-inline: 10px;
}
.btn-ghost:hover {
  color: var(--text);
  background: var(--surface-alt);
}
.icon-btn {
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 10px;
  background: transparent;
  color: var(--muted);
}
.icon-btn:hover {
  background: var(--surface-alt);
  color: var(--text);
}
.text-link {
  background: none;
  border: 0;
  padding: 0;
  color: var(--accent);
  font-size: 0.875rem;
  font-weight: 600;
}
.text-link:hover {
  text-decoration: underline;
}
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  font-size: 0.75rem;
  font-weight: 550;
  border: 1px solid var(--border);
  border-radius: 6px;
  line-height: 1.5;
  color: var(--muted);
  background: var(--surface-alt);
}
.badge-violet {
  color: var(--accent);
  background: var(--accent-soft);
  border-color: #8a7aff30;
}
.badge-mint,
.badge-Low {
  color: var(--mint);
  background: #74d9b70d;
  border-color: #74d9b730;
}
.badge-High {
  color: var(--orange);
  background: #eeb98710;
  border-color: #eeb98730;
}
.badge-Medium {
  color: var(--cyan);
  background: #79cde410;
  border-color: #79cde430;
}
.progress-track {
  width: 100%;
  height: 7px;
  border-radius: 10px;
  background: var(--surface-hover);
  overflow: hidden;
}
.progress-track > div {
  height: 100%;
  background: var(--accent);
  border-radius: 10px;
}
.progress-mint > div {
  background: var(--mint);
}
.progress-cyan > div {
  background: var(--cyan);
}
.progress-orange > div {
  background: var(--orange);
}
.prototype-note {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.8125rem;
  line-height: 1.6;
  color: var(--muted);
  margin: 18px 0;
}
.prototype-note svg {
  margin-top: 3px;
  color: var(--accent);
}
.check-list {
  display: grid;
  gap: 12px;
  font-size: 0.875rem;
}
.check-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.check-list svg {
  color: var(--mint);
  margin-top: 3px;
}
.loading-state {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 70vh;
  color: var(--muted);
}
.spinner {
  width: 22px;
  height: 22px;
  border: 2px solid var(--border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.empty-state {
  text-align: center;
  max-width: 670px;
  margin: 40px auto;
  padding: 55px 28px;
}
.empty-icon {
  width: 70px;
  height: 70px;
  background: var(--accent-soft);
  color: var(--accent);
  border: 1px solid #8a7aff35;
  border-radius: 20px;
  display: grid;
  place-items: center;
  margin: 0 auto 22px;
}
.empty-state h2 {
  font-size: 1.6rem;
}
.empty-state p {
  margin: 12px auto 24px;
  max-width: 480px;
}
.empty-state .inline-actions {
  justify-content: center;
}
.skip-link {
  position: fixed;
  z-index: 200;
  top: -70px;
  left: 20px;
  background: var(--accent);
  color: white;
  padding: 12px 18px;
  border-radius: 8px;
}
.skip-link:focus {
  top: 10px;
}
.toast {
  position: fixed;
  bottom: 25px;
  left: 50%;
  transform: translate(-50%, 20px);
  background: var(--surface-alt);
  border: 1px solid var(--accent);
  box-shadow: var(--shadow);
  padding: 12px 20px;
  border-radius: 12px;
  z-index: 120;
  opacity: 0;
  pointer-events: none;
  font-size: 0.875rem;
  transition: all 0.25s;
  max-width: min(90vw, 540px);
  text-align: center;
}
.toast-visible {
  opacity: 1;
  transform: translate(-50%, 0);
}
.storage-warning {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  background: var(--surface-alt);
  border: 1px solid var(--orange);
  border-radius: 10px;
  padding: 12px 18px;
  margin: 16px;
  font-size: 0.875rem;
}
.modal {
  position: fixed;
  inset: 0;
  margin: auto;
  width: min(580px, calc(100% - 32px));
  max-height: 85vh;
  overflow: auto;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 20px 100px #0007;
}
.modal::backdrop {
  background: #050b20bb;
  backdrop-filter: blur(4px);
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 20px;
}
.modal-actions {
  display: flex;
  gap: 12px;
  margin: 24px 0;
  flex-wrap: wrap;
}
/* Shared product chrome */
.logo {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-weight: 750;
  font-size: 1.35rem;
  letter-spacing: -0.055em;
  white-space: nowrap;
}
.logo-mark {
  width: 35px;
  height: 35px;
  display: grid;
  place-items: center;
  background: var(--accent-strong);
  border-radius: 11px;
  color: white;
}
.logo-ai {
  color: var(--accent);
}
.public-nav {
  height: 86px;
  border-bottom: 1px solid var(--border);
  background: var(--bg);
}
.nav-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.landing-links {
  display: flex;
  align-items: center;
  gap: 32px;
  font-size: 0.875rem;
  color: var(--muted);
}
.landing-links a:hover {
  color: var(--text);
}
.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}
.public-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-top: 1px solid var(--border);
  padding-block: 30px;
  font-size: 0.75rem;
}
.public-footer p {
  font-size: 0.8125rem;
}
.public-footer > span {
  color: var(--muted);
}
.sidebar {
  position: fixed;
  z-index: 50;
  inset: 0 auto 0 0;
  width: 240px;
  display: flex;
  flex-direction: column;
  background: var(--nav);
  border-right: 1px solid var(--border);
  padding: 26px 18px 18px;
}
.sidebar-top {
  padding: 0 9px 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sidebar-caption {
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  color: var(--muted);
  padding: 0 12px;
  margin-bottom: 13px;
  font-weight: 650;
}
.side-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  font-size: 0.875rem;
  margin-bottom: 5px;
  border-radius: 9px;
  color: var(--muted);
  position: relative;
}
.side-link:hover {
  color: var(--text);
  background: var(--surface-alt);
}
.side-link.active {
  color: var(--accent);
  background: var(--accent-soft);
}
.side-link.active:before {
  content: "";
  width: 3px;
  height: 21px;
  background: var(--accent);
  position: absolute;
  left: 0;
  border-radius: 4px;
}
.sidebar-bottom {
  margin-top: auto;
  padding-top: 24px;
}
.sidebar-progress {
  padding: 18px 15px;
  border: 1px solid var(--border);
  border-radius: 12px;
  margin-bottom: 18px;
  display: grid;
  gap: 10px;
  font-size: 0.8125rem;
  background: var(--surface);
}
.sidebar-progress > span {
  color: var(--muted);
  font-size: 0.75rem;
}
.sidebar-progress strong {
  font-size: 0.875rem;
}
.sidebar-progress small {
  color: var(--muted);
  font-size: 0.75rem;
}
.sidebar-progress a {
  color: var(--accent);
  font-weight: 600;
  font-size: 0.8125rem;
}
.profile-chip {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  background: none;
  border: 0;
  border-top: 1px solid var(--border);
  color: var(--text);
  padding: 16px 3px 0;
  text-align: left;
}
.profile-chip > span:nth-child(2) {
  flex: 1;
  min-width: 0;
}
.profile-chip strong {
  display: block;
  font-size: 0.8125rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.profile-chip small {
  display: block;
  color: var(--muted);
  font-size: 0.75rem;
}
.avatar {
  width: 35px;
  height: 35px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--accent-soft);
  border: 1px solid #8a7aff44;
  color: var(--accent);
  font-size: 0.8125rem;
  font-weight: 700;
}
.workspace-header {
  height: 76px;
  margin-left: 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 38px;
  border-bottom: 1px solid var(--border);
  background: var(--nav);
}
.breadcrumb {
  display: flex;
  gap: 14px;
  align-items: center;
  font-size: 0.8125rem;
  color: var(--muted);
}
.breadcrumb > span:last-child {
  color: var(--text);
}
.local-pill {
  font-size: 0.75rem;
  color: var(--muted);
  padding: 6px 10px;
  border: 1px solid var(--border);
  border-radius: 6px;
}
.workspace-main {
  margin-left: 240px;
  padding: 36px 38px 60px;
  max-width: 1660px;
  min-height: calc(100vh - 76px);
}
.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 32px;
}
.page-header p {
  margin-top: 9px;
  font-size: 0.9375rem;
  max-width: 700px;
}
.page-header .eyebrow {
  margin-bottom: 9px;
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}
.mobile-only,
.mobile-bottom-nav,
.drawer-backdrop {
  display: none;
}
/* Landing */
.hero {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  align-items: center;
  gap: 60px;
  padding-block: 90px 85px;
}
.hero-copy > .badge {
  margin-bottom: 26px;
}
.hero h1 {
  font-size: clamp(3rem, 5vw, 4.5rem);
  letter-spacing: -0.06em;
  line-height: 1.08;
  font-weight: 750;
}
.hero h1 span {
  color: var(--accent);
}
.hero-copy > p {
  font-size: 1.0625rem;
  max-width: 500px;
  line-height: 1.8;
  margin-top: 25px;
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}
.hero-actions .btn {
  min-height: 50px;
}
.hero-assurance {
  display: flex;
  gap: 20px;
  color: var(--muted);
  font-size: 0.75rem;
  margin-top: 22px;
}
.hero-assurance span {
  display: flex;
  align-items: center;
  gap: 6px;
}
.hero-assurance svg {
  color: var(--mint);
}
.hero-demo {
  margin-top: 24px;
  font-size: 0.8125rem;
  color: var(--muted);
}
.path-visual {
  background: linear-gradient(140deg, var(--surface-alt), var(--surface));
  border: 1px solid var(--border);
  border-radius: 23px;
  padding: 26px;
  position: relative;
  box-shadow:
    0 0 80px #6855dc0b,
    0 20px 65px #0002;
}
.path-topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  font-size: 0.75rem;
  color: var(--muted);
  font-weight: 650;
  letter-spacing: 0.07em;
}
.path-topline > span:first-child {
  display: flex;
  gap: 7px;
  align-items: center;
}
.path-topline svg {
  color: var(--accent);
}
.tiny-badge {
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 5px 8px;
  border-radius: 5px;
  font-size: 0.75rem;
  letter-spacing: 0;
  font-weight: 400;
}
.path-nodes {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  position: relative;
  margin: 32px 0 30px;
  gap: 4px;
}
.path-nodes:before {
  content: "";
  position: absolute;
  top: 23px;
  left: 25px;
  right: 25px;
  height: 1px;
  background: var(--border);
}
.path-node {
  padding: 0;
  border: 0;
  background: none;
  color: var(--muted);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  font-size: 0.75rem;
  white-space: nowrap;
}
.path-node-icon {
  width: 44px;
  height: 44px;
  background: var(--surface);
  border: 1px solid var(--border);
  display: grid;
  place-items: center;
  border-radius: 12px;
  transition: all 0.2s;
}
.path-node.selected {
  color: var(--accent);
}
.path-node.selected .path-node-icon {
  background: var(--accent-strong);
  color: #fff;
  border-color: var(--accent);
  box-shadow: 0 0 0 5px var(--accent-soft);
}
.path-node.past .path-node-icon {
  color: var(--mint);
  border-color: #74d9b740;
}
.path-current {
  display: flex;
  align-items: center;
  gap: 15px;
  background: var(--surface);
  border: 1px solid #8a7aff55;
  border-radius: 14px;
  padding: 22px;
  margin-bottom: 18px;
  min-height: 150px;
}
.path-current-icon {
  background: var(--accent-soft);
  color: var(--accent);
  padding: 15px;
  border-radius: 13px;
}
.path-current small {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: var(--accent);
}
.path-current h3 {
  font-size: 1.125rem;
  margin: 6px 0;
}
.path-current p {
  font-size: 0.8125rem;
  line-height: 1.55;
}
.path-mini-grid {
  display: grid;
  grid-template-columns: 0.95fr 1fr;
  gap: 18px;
  padding: 0 2px;
}
.mini-caption {
  font-size: 0.75rem;
  letter-spacing: 0.055em;
  color: var(--muted);
  font-weight: 600;
}
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 11px;
}
.skill-tags > span {
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 4px 9px;
  font-size: 0.75rem;
  color: var(--muted);
  background: var(--surface);
}
.mini-roadmap {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.mini-roadmap > span:not(:first-child) {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.75rem;
}
.mini-roadmap svg {
  color: var(--mint);
}
.step-ring {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid var(--muted);
}
.visual-footnote {
  border-top: 1px solid var(--border);
  padding-top: 18px;
  margin-top: 25px;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 0.75rem;
}
.sparkle-dot {
  color: var(--accent);
}
.audience-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 24px 0;
  border-block: 1px solid var(--border);
}
.audience-strip > span {
  font-size: 0.75rem;
  color: var(--muted);
  letter-spacing: 0.09em;
}
.audience-strip > div {
  display: flex;
  align-items: center;
  gap: 9px;
  color: var(--muted);
  font-size: 0.875rem;
}
.audience-strip svg {
  color: var(--accent);
}
.landing-section {
  padding-block: 85px;
}
.section-heading {
  margin-bottom: 36px;
}
.section-heading h2,
.bangladesh-section h2 {
  font-size: 2.125rem;
  letter-spacing: -0.05em;
}
.section-heading p {
  margin-top: 12px;
  max-width: 680px;
}
.heading-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.how-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
}
.how-step {
  position: relative;
  border-top: 1px solid var(--border);
  padding-top: 26px;
}
.how-number {
  font-size: 0.75rem;
  display: block;
  color: var(--accent);
  margin-bottom: 20px;
}
.how-step svg {
  color: var(--muted);
  margin-bottom: 16px;
}
.how-step h3 {
  margin-bottom: 10px;
}
.how-step p {
  font-size: 0.875rem;
  line-height: 1.7;
}
.feature-section {
  background: var(--nav);
  border-block: 1px solid var(--border);
}
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.feature-card {
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 26px;
  background: var(--surface);
  transition:
    transform 0.2s,
    border-color 0.2s;
}
.feature-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
}
.feature-icon {
  width: 43px;
  height: 43px;
  background: var(--accent-soft);
  color: var(--accent);
  border-radius: 11px;
  display: grid;
  place-items: center;
  margin-bottom: 22px;
}
.feature-card h3 {
  font-size: 1.125rem;
  margin-bottom: 10px;
}
.feature-card p {
  font-size: 0.875rem;
  line-height: 1.7;
}
.feature-link {
  display: inline-block;
  margin-top: 24px;
  color: var(--accent);
  font-size: 0.75rem;
}
.category-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.category-card {
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface);
  transition: border-color 0.2s;
}
.category-card:hover {
  border-color: var(--accent);
}
.category-card h3 {
  margin: 18px 0 6px;
}
.category-card p {
  font-size: 0.8125rem;
}
.career-icon {
  width: 44px;
  height: 44px;
  display: inline-grid;
  place-items: center;
  border-radius: 12px;
  background: var(--accent-soft);
  color: var(--accent);
  flex-shrink: 0;
}
.icon-cyan,
.icon-blue {
  color: var(--cyan);
  background: #79cde412;
}
.icon-mint {
  color: var(--mint);
  background: #74d9b712;
}
.icon-orange {
  color: var(--orange);
  background: #eeb98712;
}
.icon-pink {
  color: var(--pink);
  background: #e7a0c812;
}
.bangladesh-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
  padding: 60px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 22px;
}
.bangladesh-section h2 {
  margin: 22px 0 18px;
}
.bangladesh-section p {
  line-height: 1.75;
}
.bangladesh-list {
  display: grid;
  gap: 25px;
}
.bangladesh-list > div {
  display: flex;
  align-items: flex-start;
  gap: 17px;
}
.bangladesh-list svg {
  color: var(--accent);
  margin-top: 3px;
}
.bangladesh-list h3 {
  margin-bottom: 8px;
}
.bangladesh-list p {
  font-size: 0.875rem;
}
.final-cta {
  text-align: center;
  padding-block: 95px;
}
.final-cta h2 {
  font-size: 2.75rem;
  letter-spacing: -0.055em;
}
.final-cta p {
  margin: 15px 0 25px;
}
.final-cta small {
  display: block;
  color: var(--muted);
  margin-top: 20px;
  font-size: 0.75rem;
}
.cta-symbol {
  display: grid;
  place-items: center;
  width: 66px;
  height: 66px;
  background: var(--accent-soft);
  border: 1px solid #8a7aff30;
  border-radius: 20px;
  color: var(--accent);
  margin: 0 auto 22px;
}
/* Onboarding and assessment */
.flow-page {
  width: min(900px, calc(100% - 40px));
  margin: 55px auto 65px;
  display: grid;
  grid-template-columns: 210px minmax(0, 1fr);
  gap: 55px;
}
.flow-sidebar h2 {
  font-size: 1.15rem;
  margin-bottom: 24px;
}
.flow-step {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 0;
  color: var(--muted);
  font-size: 0.875rem;
}
.flow-step > span {
  width: 25px;
  height: 25px;
  display: grid;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 50%;
  font-size: 0.75rem;
}
.flow-step.active {
  color: var(--text);
}
.flow-step.active > span {
  background: var(--accent-strong);
  color: white;
  border-color: var(--accent);
}
.flow-step.complete > span {
  border-color: #74d9b750;
  color: var(--mint);
}
.flow-card {
  padding: 32px;
}
.flow-card .eyebrow {
  margin-top: 25px;
}
.flow-card h1 {
  font-size: 1.75rem;
  margin: 14px 0 12px;
}
.flow-card > p {
  font-size: 0.9375rem;
  margin-bottom: 25px;
}
.flow-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border-top: 1px solid var(--border);
  padding-top: 24px;
  margin-top: 32px;
}
.flow-step-count {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8125rem;
  color: var(--muted);
  margin-bottom: 14px;
}
.choice-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.choice-button {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 58px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 14px;
  color: var(--muted);
  text-align: left;
  font-size: 0.875rem;
  transition: all 0.2s;
}
.choice-button.selected {
  color: var(--text);
  border-color: var(--accent);
  background: var(--accent-soft);
}
.choice-button:hover {
  border-color: var(--accent);
}
.choice-check {
  width: 18px;
  height: 18px;
  display: grid;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 5px;
  flex-shrink: 0;
}
.selected > .choice-check {
  background: var(--accent-strong);
  color: #fff;
  border-color: var(--accent);
}
.field-error {
  color: var(--orange);
  font-size: 0.8125rem;
  margin-top: 12px;
}
.flow-hint {
  font-size: 0.8125rem;
  margin-top: 17px;
}
.assessment-layout {
  width: min(710px, calc(100% - 40px));
  margin: 50px auto 65px;
}
.assessment-heading {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 26px;
}
.assessment-heading h2 {
  font-size: 1.125rem;
}
.assessment-heading p {
  font-size: 0.8125rem;
}
.question-options {
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-top: 27px;
}
.question-option {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 17px 19px;
  display: flex;
  align-items: center;
  gap: 15px;
  text-align: left;
  color: var(--text);
  transition: all 0.2s;
}
.question-option.selected {
  background: var(--accent-soft);
  border-color: var(--accent);
}
.question-option:hover {
  border-color: var(--accent);
}
.option-letter {
  width: 29px;
  height: 29px;
  border: 1px solid var(--border);
  display: grid;
  place-items: center;
  font-size: 0.8125rem;
  border-radius: 7px;
  color: var(--muted);
}
.question-option.selected .option-letter {
  background: var(--accent-strong);
  color: #fff;
  border-color: var(--accent);
}
.question-option strong {
  display: block;
  font-size: 0.9375rem;
  font-weight: 550;
}
.question-option small {
  display: block;
  color: var(--muted);
  margin-top: 3px;
  font-size: 0.8125rem;
}
.assessment-tip {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 25px;
  font-size: 0.8125rem;
  color: var(--muted);
}
.assessment-tip svg {
  color: var(--accent);
  margin-top: 3px;
}
/* Results and career catalog */
.results-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 24px;
}
.primary-career {
  background: linear-gradient(120deg, var(--surface-alt), var(--surface));
  border-color: #8a7aff66;
}
.primary-career-top {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: flex-start;
  margin-top: 24px;
}
.primary-career h2 {
  font-size: 1.8rem;
  max-width: 360px;
}
.primary-career p {
  margin: 12px 0 23px;
  font-size: 0.9375rem;
}
.match-ring {
  position: relative;
  width: 104px;
  height: 104px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}
.match-ring svg {
  position: absolute;
  inset: 0;
  transform: rotate(-90deg);
}
.match-ring > span {
  text-align: center;
}
.match-ring strong {
  display: block;
  font-size: 1.7rem;
  line-height: 1.2;
}
.match-ring small {
  font-size: 0.75rem;
  color: var(--muted);
}
.primary-career .check-list {
  margin-top: 24px;
}
.career-mini-card {
  display: flex;
  gap: 14px;
  align-items: center;
  padding: 17px 0;
  border-bottom: 1px solid var(--border);
}
.career-mini-card:last-child {
  border-bottom: 0;
}
.career-mini-card > div:nth-child(2) {
  flex: 1;
}
.career-mini-card h3 {
  font-size: 0.9375rem;
  margin-bottom: 5px;
}
.career-mini-card small {
  color: var(--muted);
}
.career-mini-card > .match-num {
  color: var(--accent);
  font-size: 1.25rem;
  font-weight: 650;
}
.career-card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}
.career-card {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 24px;
}
.career-card h2 {
  font-size: 1.25rem;
}
.career-card > p {
  font-size: 0.875rem;
}
.career-card .skill-tags {
  margin-top: 0;
  margin-bottom: 8px;
}
.career-card .inline-actions {
  margin-top: auto;
}
.career-card .inline-actions .btn {
  flex: 1;
  padding-inline: 12px;
}
.filter-bar {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 25px;
}
.search-input {
  max-width: 360px;
  position: relative;
}
.search-input input {
  padding-left: 40px;
}
.search-input svg {
  position: absolute;
  left: 13px;
  top: 14px;
  color: var(--muted);
}
.filter-select {
  max-width: 200px;
}
.filter-chip {
  padding: 8px 15px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--muted);
  font-size: 0.8125rem;
}
.filter-chip.active {
  color: var(--accent);
  border-color: var(--accent);
  background: var(--accent-soft);
}
.detail-hero {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
}
.detail-hero .career-icon {
  width: 65px;
  height: 65px;
}
.detail-hero p {
  margin-top: 10px;
}
.detail-hero h1 {
  font-size: 2.5rem;
}
.detail-top {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 22px;
}
.content-panel h2 {
  margin-bottom: 17px;
}
.content-panel > p {
  line-height: 1.9;
}
.detail-levels {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-top: 22px;
}
.level-card .eyebrow {
  margin-bottom: 20px;
}
.detail-bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
  margin-top: 22px;
}
.target-selector {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 26px;
}
.target-selector label {
  font-size: 0.8125rem;
  color: var(--muted);
  white-space: nowrap;
}
.target-selector select {
  max-width: 340px;
  font-size: 0.875rem;
  background: var(--surface);
}
/* Dashboard and skills */
.stat-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 17px;
  margin-bottom: 24px;
}
.stat-card {
  padding: 21px;
}
.stat-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8125rem;
  color: var(--muted);
  margin-bottom: 20px;
}
.stat-card-top svg {
  color: var(--accent);
}
.stat-card strong {
  display: block;
  font-size: 1.9rem;
  font-weight: 650;
  letter-spacing: -0.045em;
  margin-bottom: 12px;
}
.stat-card small {
  display: block;
  color: var(--muted);
  font-size: 0.75rem;
  margin-top: 10px;
}
.dashboard-main-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 22px;
  margin-top: 24px;
}
.next-step-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  padding: 27px 30px;
  background: linear-gradient(105deg, #7160df18, var(--surface));
  border: 1px solid #8a7aff44;
  border-radius: var(--radius);
}
.next-step-card h2 {
  font-size: 1.3rem;
  margin-bottom: 8px;
}
.next-step-card p {
  font-size: 0.875rem;
}
.next-step-card .eyebrow {
  margin-bottom: 10px;
}
.next-step-icon {
  width: 52px;
  height: 52px;
  background: var(--accent-soft);
  color: var(--accent);
  border-radius: 14px;
  display: grid;
  place-items: center;
}
.next-step-copy {
  flex: 1;
}
.skill-list {
  display: grid;
  gap: 22px;
}
.skill-row-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
  margin-bottom: 8px;
}
.skill-row-head > span:last-child {
  font-size: 0.8125rem;
  color: var(--muted);
}
.quick-actions {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 13px;
}
.quick-action {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 21px 18px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
  font-size: 0.875rem;
}
.quick-action svg {
  color: var(--accent);
}
.quick-action:hover {
  background: var(--surface-alt);
  border-color: var(--accent);
}
.mini-timeline {
  display: grid;
  gap: 0;
}
.mini-timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  position: relative;
  padding-bottom: 23px;
}
.mini-timeline-item:last-child {
  padding-bottom: 0;
}
.timeline-marker {
  width: 25px;
  height: 25px;
  display: grid;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 50%;
  color: var(--muted);
  font-size: 0.75rem;
  background: var(--surface);
  position: relative;
  z-index: 1;
}
.timeline-marker.done {
  border-color: #74d9b744;
  color: var(--mint);
  background: #74d9b710;
}
.timeline-marker.current {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-soft);
}
.mini-timeline-item:not(:last-child):before {
  content: "";
  position: absolute;
  left: 12px;
  top: 25px;
  bottom: 0;
  width: 1px;
  background: var(--border);
}
.mini-timeline-item strong {
  font-size: 0.875rem;
  display: block;
  padding-top: 1px;
}
.mini-timeline-item small {
  color: var(--muted);
  font-size: 0.75rem;
}
.skill-gap-intro {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 22px;
  padding: 25px 30px;
  margin-bottom: 24px;
}
.skill-gap-intro h2 {
  margin-bottom: 7px;
}
.skill-gap-intro p {
  font-size: 0.875rem;
  max-width: 700px;
}
.skill-gap-summary {
  display: flex;
  gap: 22px;
  text-align: center;
  flex-shrink: 0;
}
.skill-gap-summary strong {
  font-size: 1.5rem;
  display: block;
}
.skill-gap-summary span {
  font-size: 0.75rem;
  color: var(--muted);
}
.skill-gap-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}
.skill-gap-card {
  padding: 24px;
}
.skill-gap-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 23px;
  gap: 12px;
}
.skill-comparison {
  display: grid;
  gap: 16px;
}
.skill-current-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.8125rem;
  color: var(--muted);
  margin-bottom: 7px;
}
.gap-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border);
  padding-top: 15px;
  margin-top: 21px;
  font-size: 0.8125rem;
  color: var(--muted);
}
.gap-bottom strong {
  color: var(--text);
}
.rating-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.8125rem;
  color: var(--muted);
  margin-top: 15px;
}
.readiness-grid {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 24px;
}
.overall-readiness {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px;
}
.overall-readiness .match-ring {
  width: 164px;
  height: 164px;
  margin: 27px 0;
}
.overall-readiness .match-ring strong {
  font-size: 2.5rem;
}
.overall-readiness .match-ring small {
  font-size: 0.8125rem;
}
.overall-readiness p {
  font-size: 0.875rem;
}
.readiness-items {
  display: grid;
  gap: 19px;
}
.readiness-item {
  display: flex;
  gap: 15px;
  padding: 21px;
  border: 1px solid var(--border);
  border-radius: 13px;
  background: var(--surface);
}
.readiness-item > .career-icon {
  width: 40px;
  height: 40px;
}
.readiness-item > div:last-child {
  flex: 1;
}
.readiness-item h3 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.readiness-item p {
  font-size: 0.8125rem;
  margin-top: 10px;
}
.readiness-item a {
  font-size: 0.8125rem;
  color: var(--accent);
  display: inline-block;
  margin-top: 10px;
}
/* Roadmap */
.roadmap-summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  padding: 26px;
  margin-bottom: 28px;
}
.roadmap-summary h2 {
  margin-bottom: 8px;
}
.roadmap-summary p {
  font-size: 0.875rem;
}
.roadmap-summary-progress {
  width: 260px;
  flex-shrink: 0;
}
.roadmap-summary-progress > div:first-child {
  display: flex;
  justify-content: space-between;
  font-size: 0.8125rem;
  color: var(--muted);
  margin-bottom: 10px;
}
.roadmap-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.roadmap-phase {
  padding: 0;
  overflow: hidden;
}
.phase-heading {
  display: flex;
  gap: 19px;
  align-items: center;
  width: 100%;
  padding: 23px 26px;
  border: 0;
  background: none;
  color: var(--text);
  text-align: left;
}
.phase-number {
  width: 43px;
  height: 43px;
  display: grid;
  place-items: center;
  border-radius: 11px;
  flex-shrink: 0;
  background: var(--surface-alt);
  color: var(--muted);
  font-size: 0.875rem;
  border: 1px solid var(--border);
}
.phase-number.complete {
  color: var(--mint);
  background: #74d9b710;
  border-color: #74d9b744;
}
.phase-heading > div:nth-child(2) {
  flex: 1;
}
.phase-heading h2 {
  font-size: 1.0625rem;
  margin-bottom: 6px;
}
.phase-heading p {
  font-size: 0.8125rem;
}
.phase-meta {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 0.8125rem;
  color: var(--muted);
}
.phase-body {
  padding: 0 28px 26px 88px;
  border-top: 1px solid var(--border);
}
.phase-body > p {
  font-size: 0.875rem;
  margin: 19px 0;
}
.task-list {
  display: grid;
  gap: 10px;
  margin-top: 19px;
}
.task-row {
  display: flex;
  gap: 13px;
  align-items: flex-start;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 15px;
}
.task-row input {
  margin-top: 3px;
  flex-shrink: 0;
}
.task-row strong {
  display: block;
  font-size: 0.875rem;
  font-weight: 550;
}
.task-row p {
  font-size: 0.8125rem;
  margin-top: 5px;
  font-weight: 400;
}
.task-row.is-done strong {
  color: var(--muted);
  text-decoration: line-through;
}
.phase-resource {
  display: flex;
  gap: 14px;
  margin-top: 20px;
  align-items: center;
  flex-wrap: wrap;
}
.phase-resource a {
  color: var(--accent);
  font-size: 0.8125rem;
  font-weight: 550;
}
.phase-resource .skill-tags {
  margin: 0;
}
/* CV */
.cv-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: start;
}
.cv-editor {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.cv-section {
  padding: 24px;
}
.cv-section h2 {
  font-size: 1.125rem;
  margin-bottom: 19px;
}
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.full-span {
  grid-column: 1/-1;
}
.form-item {
  border-top: 1px solid var(--border);
  padding-top: 20px;
  margin-top: 20px;
}
.item-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 13px;
}
.item-heading h3 {
  font-size: 0.9375rem;
}
.item-heading .icon-btn {
  color: var(--muted);
}
.add-entry {
  margin-top: 16px;
}
.cv-sticky {
  position: sticky;
  top: 25px;
}
.cv-preview-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  gap: 12px;
}
.cv-preview-toolbar > span {
  font-size: 0.8125rem;
  color: var(--muted);
}
.cv-paper {
  background: white;
  color: #17243a;
  padding: 36px;
  min-height: 640px;
  border-radius: 4px;
  box-shadow: 0 10px 40px #0002;
  line-height: 1.55;
  overflow-wrap: anywhere;
}
.cv-paper h2 {
  font-size: 1.9rem;
  letter-spacing: -0.04em;
  color: #132039;
}
.cv-paper h3 {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-bottom: 1px solid #d8dce5;
  padding-bottom: 7px;
  margin: 26px 0 12px;
  color: #27364b;
}
.cv-paper p {
  color: #445066;
  font-size: 0.8125rem;
  white-space: pre-line;
}
.cv-paper .cv-contact {
  font-size: 0.75rem;
  margin: 9px 0 20px;
  color: #566074;
}
.cv-entry {
  margin-bottom: 15px;
}
.cv-entry-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  font-size: 0.8125rem;
}
.cv-entry-head small {
  font-size: 0.75rem;
  color: #526177;
  flex-shrink: 0;
}
.cv-entry > span {
  display: block;
  font-size: 0.75rem;
  color: #566074;
  margin: 2px 0 5px;
}
.cv-modern .cv-paper-heading {
  background: #eef0ff;
  margin: -36px -36px 22px;
  padding: 32px 36px 20px;
  border-bottom: 3px solid #7662df;
}
.cv-placeholder {
  color: #748199 !important;
  font-style: italic;
}
.cv-empty-note {
  font-size: 0.875rem;
  text-align: center;
  padding: 30px 0;
  color: #657189;
}
.cv-tabs {
  display: none;
}
.suggestion-box {
  margin-top: 16px;
  padding: 16px;
  background: var(--accent-soft);
  border: 1px solid #8a7aff44;
  border-radius: 10px;
}
.suggestion-box p {
  font-size: 0.875rem;
  color: var(--text);
  margin: 8px 0 14px;
  white-space: pre-line;
}
.suggestion-box small {
  color: var(--muted);
}
.cv-score {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.875rem;
}
.cv-score .progress-track {
  width: 90px;
}
.cv-actions {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}
/* Interview and jobs */
.interview-setup {
  max-width: 750px;
  margin: 0 auto;
}
.interview-setup h2 {
  margin-bottom: 12px;
}
.interview-setup > p {
  margin-bottom: 25px;
}
.interview-session {
  max-width: 860px;
  margin: 0 auto;
}
.interview-question {
  padding: 30px;
}
.interview-question h2 {
  font-size: 1.4rem;
  line-height: 1.5;
  margin: 25px 0 10px;
}
.interview-question > p {
  font-size: 0.875rem;
  margin-bottom: 25px;
}
.interview-question textarea {
  min-height: 170px;
}
.interview-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 17px;
  gap: 12px;
  font-size: 0.75rem;
  color: var(--muted);
}
.feedback-panel {
  margin-top: 24px;
}
.feedback-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin: 23px 0;
}
.feedback-score span {
  display: flex;
  justify-content: space-between;
  font-size: 0.8125rem;
  margin-bottom: 9px;
}
.feedback-score strong {
  color: var(--accent);
}
.feedback-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}
.feedback-content h3 {
  margin-bottom: 15px;
}
.feedback-content li {
  font-size: 0.875rem;
  line-height: 1.7;
  margin-bottom: 10px;
  color: var(--muted);
}
.sample-answer {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 11px;
  padding: 17px;
  margin: 18px 0;
}
.sample-answer summary {
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 550;
}
.sample-answer p {
  font-size: 0.875rem;
  margin-top: 12px;
}
.interview-summary {
  max-width: 850px;
  margin: 0 auto;
}
.summary-hero {
  text-align: center;
  padding: 35px;
}
.summary-hero > .career-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 18px;
}
.summary-hero h2 {
  font-size: 1.7rem;
}
.summary-hero p {
  margin-top: 12px;
}
.summary-question {
  padding: 20px;
  margin-top: 15px;
}
.summary-question summary {
  cursor: pointer;
  font-size: 0.9375rem;
  font-weight: 550;
}
.summary-question > p {
  font-size: 0.875rem;
  margin-top: 15px;
  white-space: pre-line;
}
.jobs-notice {
  display: flex;
  align-items: flex-start;
  gap: 13px;
  border: 1px solid #79cde430;
  background: #79cde408;
  padding: 17px 21px;
  border-radius: 12px;
  margin-bottom: 24px;
  font-size: 0.875rem;
  color: var(--muted);
}
.jobs-notice svg {
  color: var(--cyan);
  margin-top: 3px;
}
.jobs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.job-card {
  padding: 25px;
  display: flex;
  flex-direction: column;
}
.job-heading {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 17px;
}
.job-heading h2 {
  font-size: 1.125rem;
  margin-bottom: 6px;
}
.job-heading p {
  font-size: 0.75rem;
}
.job-heading .icon-btn.saved {
  color: var(--accent);
  background: var(--accent-soft);
}
.job-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 17px;
  font-size: 0.8125rem;
  color: var(--muted);
  margin-bottom: 17px;
}
.job-meta > span {
  display: flex;
  align-items: center;
  gap: 6px;
}
.job-salary {
  font-size: 0.875rem;
  font-weight: 550;
  border-bottom: 1px solid var(--border);
  padding-bottom: 17px;
  margin-bottom: 18px;
}
.job-match-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8125rem;
  margin-bottom: 12px;
}
.job-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 23px;
}
.job-skills > span {
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 4px 8px;
  border-radius: 5px;
  font-size: 0.75rem;
  background: var(--surface-alt);
  color: var(--muted);
}
.job-skills .matched {
  color: var(--mint);
  background: #74d9b708;
}
.job-skills .missing {
  color: var(--orange);
  background: #eeb98708;
}
.job-card > .inline-actions {
  margin-top: auto;
}
.job-card > .inline-actions > .btn {
  flex: 1;
}
.job-modal-details h3 {
  margin: 22px 0 12px;
}
.job-modal-details p {
  font-size: 0.875rem;
}
.job-demo-success {
  text-align: center;
  background: var(--accent-soft);
  border: 1px solid #8a7aff44;
  border-radius: 12px;
  padding: 25px;
  margin-top: 23px;
}
.job-demo-success svg {
  color: var(--mint);
  margin: 0 auto 12px;
  display: block;
}
.job-demo-success h3 {
  margin-bottom: 9px;
}
@media (min-width: 1650px) {
  .workspace-main {
    margin-inline: auto;
    padding-left: 278px;
  }
}
@media (max-width: 1150px) {
  .hero {
    gap: 30px;
  }
  .path-visual {
    padding: 20px;
  }
  .hero h1 {
    font-size: 3.5rem;
  }
  .category-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .workspace-main {
    padding: 28px;
  }
  .workspace-header {
    padding-inline: 28px;
  }
  .career-card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .stat-grid {
    gap: 12px;
  }
  .stat-card {
    padding: 18px;
  }
  .dashboard-main-grid {
    grid-template-columns: 1.2fr 1fr;
  }
  .next-step-card {
    padding: 22px;
    gap: 17px;
  }
  .next-step-icon {
    display: none;
  }
  .quick-actions {
    grid-template-columns: repeat(2, 1fr);
  }
  .cv-layout {
    grid-template-columns: 1fr 1fr;
    gap: 18px;
  }
  .cv-paper {
    padding: 25px;
  }
  .cv-modern .cv-paper-heading {
    margin: -25px -25px 20px;
    padding: 25px;
  }
  .cv-section {
    padding: 20px;
  }
  .form-grid {
    grid-template-columns: 1fr;
  }
  .detail-top {
    grid-template-columns: 1.2fr 1fr;
  }
  .skill-gap-intro {
    align-items: flex-start;
  }
  .skill-gap-summary {
    gap: 15px;
  }
  .readiness-grid {
    grid-template-columns: 1fr 1.2fr;
  }
  .public-footer > span {
    display: none;
  }
}
@media (max-width: 950px) {
  .sidebar {
    width: 215px;
  }
  .workspace-header,
  .workspace-main {
    margin-left: 215px;
  }
  .workspace-main {
    padding: 27px 22px;
  }
  .workspace-header {
    padding-inline: 22px;
  }
  .stat-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .dashboard-main-grid,
  .results-grid {
    grid-template-columns: 1fr;
  }
  .primary-career h2 {
    max-width: none;
  }
  .cv-layout {
    grid-template-columns: 1fr;
  }
  .cv-sticky {
    position: static;
  }
  .cv-preview-panel {
    display: none;
  }
  .cv-tabs {
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
  }
  .cv-tabs button {
    flex: 1;
  }
  .cv-layout.show-preview .cv-editor {
    display: none;
  }
  .cv-layout.show-preview .cv-preview-panel {
    display: block;
  }
  .cv-layout .cv-paper {
    min-height: 700px;
  }
  .hero {
    grid-template-columns: 1fr;
    gap: 50px;
    padding-block: 65px;
  }
  .hero-copy {
    max-width: 680px;
  }
  .hero h1 {
    font-size: 4rem;
  }
  .path-visual {
    max-width: 620px;
    width: 100%;
    margin: auto;
  }
  .path-topline {
    font-size: 0.75rem;
  }
  .path-node {
    font-size: 0.75rem;
  }
  .how-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  .audience-strip > span {
    display: none;
  }
  .bangladesh-section {
    padding: 35px;
    gap: 30px;
  }
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .jobs-grid,
  .skill-gap-grid {
    grid-template-columns: 1fr;
  }
  .detail-top,
  .detail-bottom {
    grid-template-columns: 1fr;
  }
  .detail-levels {
    gap: 12px;
  }
  .detail-levels .panel {
    padding: 20px;
  }
  .readiness-grid {
    grid-template-columns: 1fr;
  }
  .overall-readiness {
    padding: 26px;
  }
  .overall-readiness .match-ring {
    margin: 20px 0;
  }
  .roadmap-summary {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
  }
  .roadmap-summary-progress {
    width: 100%;
  }
  .phase-heading {
    gap: 13px;
    padding: 20px;
  }
  .phase-meta .phase-time {
    display: none;
  }
  .phase-body {
    padding-left: 20px;
    padding-right: 20px;
  }
  .skill-gap-intro {
    flex-direction: column;
  }
  .skill-gap-summary {
    text-align: left;
    gap: 30px;
  }
}
@media (max-width: 760px) {
  .container {
    width: calc(100% - 36px);
  }
  .public-nav {
    height: 74px;
  }
  .landing-links {
    display: none;
  }
  .nav-inner {
    gap: 12px;
  }
  .nav-actions {
    gap: 5px;
  }
  .nav-actions .btn {
    padding: 9px 13px;
    min-height: 40px;
  }
  .logo {
    font-size: 1.2rem;
  }
  .logo-mark {
    width: 31px;
    height: 31px;
    border-radius: 9px;
  }
  .sidebar {
    transform: translateX(-100%);
    transition: transform 0.2s;
    width: 265px;
    z-index: 100;
  }
  .sidebar.sidebar-open {
    transform: translateX(0);
  }
  .drawer-backdrop {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 90;
    border: 0;
    background: #03081799;
    backdrop-filter: blur(3px);
  }
  .sidebar-top {
    padding-bottom: 27px;
  }
  .mobile-only {
    display: inline-flex;
  }
  .workspace-header {
    margin: 0;
    height: 64px;
    padding: 0 17px;
  }
  .workspace-main {
    margin: 0;
    padding: 25px 18px 110px;
    min-height: calc(100vh - 64px);
  }
  .breadcrumb {
    gap: 10px;
    font-size: 0.75rem;
  }
  .breadcrumb > a,
  .breadcrumb > span:nth-last-child(2) {
    display: none;
  }
  .local-pill {
    font-size: 0.75rem;
    padding: 4px 7px;
  }
  .mobile-bottom-nav {
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--nav);
    border-top: 1px solid var(--border);
    z-index: 60;
    padding: 9px 6px max(10px, env(safe-area-inset-bottom));
  }
  .mobile-bottom-nav a,
  .mobile-bottom-nav button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 3px 8px;
    font-size: 0.75rem;
    color: var(--muted);
    background: none;
    border: 0;
  }
  .mobile-bottom-nav .active {
    color: var(--accent);
  }
  .toast {
    bottom: 93px;
  }
  .page-header {
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 25px;
    gap: 17px;
  }
  .page-header h1 {
    font-size: 1.85rem;
  }
  .page-header p {
    font-size: 0.875rem;
  }
  .header-actions {
    flex-wrap: wrap;
    width: 100%;
  }
  .hero {
    padding-block: 50px;
    gap: 40px;
  }
  .hero h1 {
    font-size: 3.35rem;
  }
  .hero-copy > p {
    font-size: 1rem;
  }
  .hero-assurance {
    gap: 15px;
    flex-wrap: wrap;
  }
  .path-visual {
    padding: 20px;
  }
  .path-current {
    padding: 18px;
    gap: 13px;
  }
  .path-current-icon {
    padding: 10px;
  }
  .path-mini-grid {
    grid-template-columns: 1fr 1fr;
  }
  .mini-caption {
    font-size: 0.75rem;
  }
  .path-node {
    font-size: 0.75rem;
  }
  .path-node-icon {
    width: 37px;
    height: 37px;
    border-radius: 10px;
  }
  .path-node-icon svg {
    width: 18px;
  }
  .path-nodes:before {
    top: 20px;
  }
  .path-topline {
    font-size: 0.75rem;
  }
  .tiny-badge {
    font-size: 0.75rem;
  }
  .audience-strip {
    flex-wrap: wrap;
    justify-content: center;
    gap: 13px 24px;
  }
  .audience-strip > div {
    font-size: 0.75rem;
  }
  .landing-section {
    padding-block: 60px;
  }
  .section-heading h2,
  .bangladesh-section h2 {
    font-size: 1.75rem;
  }
  .section-heading p {
    font-size: 0.9375rem;
  }
  .how-grid {
    grid-template-columns: 1fr 1fr;
    gap: 26px;
  }
  .how-step h3 {
    font-size: 1rem;
  }
  .how-step p {
    font-size: 0.8125rem;
  }
  .feature-grid {
    grid-template-columns: 1fr;
  }
  .feature-card {
    padding: 24px;
  }
  .feature-card .feature-icon {
    margin-bottom: 16px;
  }
  .feature-link {
    margin-top: 18px;
  }
  .category-grid {
    gap: 12px;
  }
  .category-card {
    padding: 19px;
  }
  .category-card h3 {
    font-size: 0.875rem;
  }
  .category-card p {
    font-size: 0.75rem;
  }
  .heading-row {
    align-items: flex-start;
    flex-direction: column;
  }
  .bangladesh-section {
    grid-template-columns: 1fr;
    padding: 25px;
    gap: 30px;
  }
  .bangladesh-section .badge {
    font-size: 0.75rem;
  }
  .final-cta {
    padding-block: 65px;
  }
  .final-cta h2 {
    font-size: 2.25rem;
  }
  .public-footer {
    flex-direction: column;
    align-items: flex-start;
    padding-block: 24px;
    gap: 10px;
  }
  .public-footer p {
    font-size: 0.75rem;
  }
  .flow-page {
    width: calc(100% - 32px);
    margin: 25px auto 40px;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .flow-sidebar {
    display: none;
  }
  .flow-card {
    padding: 24px;
  }
  .flow-card h1 {
    font-size: 1.6rem;
  }
  .flow-controls {
    margin-top: 25px;
  }
  .assessment-layout {
    margin: 28px auto 40px;
    width: calc(100% - 32px);
  }
  .question-option {
    padding: 15px 13px;
    gap: 12px;
  }
  .question-option strong {
    font-size: 0.875rem;
  }
  .question-option small {
    font-size: 0.75rem;
  }
  .question-options {
    gap: 10px;
  }
  .panel {
    padding: 22px;
  }
  .grid-2,
  .grid-3 {
    grid-template-columns: 1fr;
    gap: 18px;
  }
  .stat-card {
    padding: 19px;
  }
  .stat-card-top {
    font-size: 0.75rem;
    margin-bottom: 14px;
  }
  .stat-card strong {
    font-size: 1.65rem;
  }
  .stat-card small {
    font-size: 0.75rem;
  }
  .next-step-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
  }
  .next-step-card h2 {
    font-size: 1.2rem;
  }
  .next-step-card .btn {
    width: 100%;
  }
  .dashboard-main-grid {
    margin-top: 20px;
  }
  .quick-action {
    font-size: 0.8125rem;
    padding: 17px 14px;
    gap: 9px;
  }
  .quick-actions {
    gap: 11px;
  }
  .career-card-grid {
    grid-template-columns: 1fr;
  }
  .career-card h2 {
    font-size: 1.3rem;
  }
  .filter-bar {
    gap: 10px;
  }
  .search-input {
    max-width: none;
    width: 100%;
  }
  .filter-select {
    max-width: none;
    flex: 1;
    min-width: 130px;
  }
  .primary-career h2 {
    font-size: 1.6rem;
  }
  .primary-career-top {
    gap: 12px;
  }
  .match-ring {
    width: 85px;
    height: 85px;
  }
  .match-ring strong {
    font-size: 1.4rem;
  }
  .match-ring small {
    font-size: 0.75rem;
  }
  .detail-hero {
    align-items: flex-start;
    gap: 15px;
  }
  .detail-hero h1 {
    font-size: 1.85rem;
  }
  .detail-hero .career-icon {
    width: 50px;
    height: 50px;
  }
  .detail-levels {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .detail-bottom {
    gap: 18px;
  }
  .target-selector {
    align-items: flex-start;
    flex-direction: column;
    gap: 7px;
  }
  .target-selector select {
    max-width: none;
  }
  .skill-gap-intro {
    padding: 22px;
  }
  .skill-gap-summary {
    width: 100%;
    justify-content: space-between;
  }
  .roadmap-summary {
    padding: 22px;
  }
  .phase-heading {
    padding: 19px 16px;
    gap: 12px;
  }
  .phase-number {
    width: 35px;
    height: 35px;
    font-size: 0.75rem;
  }
  .phase-heading h2 {
    font-size: 0.9375rem;
  }
  .phase-meta {
    gap: 7px;
    font-size: 0.75rem;
  }
  .phase-heading p {
    font-size: 0.75rem;
  }
  .phase-body {
    padding: 0 17px 20px;
  }
  .task-row {
    padding: 13px;
  }
  .interview-question {
    padding: 23px;
  }
  .interview-question h2 {
    font-size: 1.2rem;
  }
  .feedback-grid {
    gap: 12px;
  }
  .feedback-score span {
    flex-direction: column;
    gap: 5px;
    font-size: 0.75rem;
  }
  .feedback-content {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .interview-bottom {
    align-items: flex-start;
    gap: 15px;
    flex-direction: column;
  }
  .interview-bottom .btn {
    width: 100%;
  }
  .cv-paper {
    padding: 27px;
  }
  .cv-modern .cv-paper-heading {
    margin: -27px -27px 22px;
    padding: 25px 27px;
  }
  .cv-entry-head {
    flex-direction: column;
    gap: 3px;
  }
  .cv-preview-toolbar {
    align-items: flex-start;
  }
  .cv-actions .btn {
    font-size: 0.75rem;
    padding: 9px 13px;
  }
  .cv-actions {
    gap: 8px;
  }
  .job-card {
    padding: 22px;
  }
  .job-heading h2 {
    font-size: 1.0625rem;
  }
  .jobs-notice {
    padding: 16px;
    font-size: 0.8125rem;
  }
  .modal {
    padding: 22px;
  }
  .modal-actions .btn {
    flex: 1;
  }
  .section-title {
    align-items: flex-start;
  }
  .readiness-item {
    padding: 19px;
  }
  .readiness-item > .career-icon {
    display: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  *,
  *:before,
  *:after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
@media print {
  @page {
    margin: 14mm;
    size: A4;
  }
  body {
    background: #fff !important;
  }
  .public-nav,
  .sidebar,
  .workspace-header,
  .mobile-bottom-nav,
  .page-header,
  .cv-editor,
  .cv-tabs,
  .cv-preview-toolbar,
  .prototype-note,
  .toast,
  .storage-warning,
  .skip-link {
    display: none !important;
  }
  .workspace-main {
    margin: 0 !important;
    padding: 0 !important;
    max-width: none !important;
  }
  .cv-layout {
    display: block !important;
  }
  .cv-preview-panel {
    display: block !important;
  }
  .cv-sticky {
    position: static;
  }
  .cv-paper {
    box-shadow: none;
    min-height: 0;
    border-radius: 0;
    padding: 0;
    font-size: 12px;
  }
  .cv-modern .cv-paper-heading {
    margin: 0;
    padding: 0 0 16px;
    background: #fff;
    border-bottom: 2px solid #7662df;
  }
  .cv-entry {
    break-inside: avoid;
  }
  .cv-paper h3 {
    break-after: avoid;
  }
  .cv-paper p {
    font-size: 10pt;
  }
  .cv-paper h2 {
    font-size: 22pt;
  }
}

@media (max-width: 760px) {
  .sidebar {
    visibility: hidden;
  }
  .sidebar.sidebar-open {
    visibility: visible;
  }
  .path-nodes {
    grid-template-columns: repeat(3, 1fr);
    gap: 18px 8px;
  }
  .path-nodes:before {
    display: none;
  }
  .path-node {
    white-space: normal;
  }
  .path-current small,
  .mini-caption {
    font-size: 0.75rem;
  }
  .mini-caption {
    display: block;
    line-height: 1.5;
  }
  .path-topline {
    flex-wrap: wrap;
  }
  .path-mini-grid {
    gap: 15px;
  }
  .match-ring small {
    font-size: 0.75rem;
    line-height: 1.25;
    display: block;
    max-width: 70px;
  }
  .phase-meta {
    flex-shrink: 0;
  }
}

.modal[open] {
  animation: modal-appear 0.2s ease-out;
}
@keyframes modal-appear {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.task-row {
  transition:
    background 0.2s,
    border-color 0.2s;
}
.task-row.is-done {
  background: #74d9b706;
  border-color: #74d9b738;
}

````


## src/app/interview/page.tsx

````tsx
import type { Metadata } from "next";
import { InterviewPage } from "@/components/interview/InterviewPage";
export const metadata: Metadata = { title: "Interview practice" };
export default function Page() {
  return <InterviewPage />;
}

````


## src/app/jobs/page.tsx

````tsx
import type { Metadata } from "next";
import { JobsPage } from "@/components/jobs/JobsPage";
export const metadata: Metadata = { title: "Demo opportunities" };
export default function Page() {
  return <JobsPage />;
}

````


## src/app/layout.tsx

````tsx
import type { Metadata } from "next";
import { CareerAIProvider } from "@/hooks/useCareerAI";
import { AppShell } from "@/components/layout/AppShell";
import "./globals.css";
import { AgentTools } from "@/components/layout/AgentTools";
export const metadata: Metadata = {
  title: {
    default: "CareerAI — Your next chapter starts here",
    template: "%s | CareerAI",
  },
  description:
    "Explore your strengths, discover career paths, and build a practical learning roadmap. Career guidance for students and young professionals in Bangladesh.",
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        <CareerAIProvider>
          <AgentTools />
          <AppShell>{children}</AppShell>
        </CareerAIProvider>
      </body>
    </html>
  );
}

````


## src/app/not-found.tsx

````tsx
import { EmptyState } from "@/components/ui/primitives";
export default function NotFound() {
  return (
    <EmptyState
      title="This path is a little off track"
      description="The page could not be found. Your workspace is a good place to start again."
      action="Open my dashboard"
      href="/dashboard"
    />
  );
}

````


## src/app/onboarding/page.tsx

````tsx
import type { Metadata } from "next";
import { OnboardingFlow } from "@/components/assessment/OnboardingFlow";
export const metadata: Metadata = { title: "Your profile" };
export default function Page() {
  return <OnboardingFlow />;
}

````


## src/app/page.tsx

````tsx
import { LandingPage } from "@/components/layout/LandingPage";
export default function Home() {
  return <LandingPage />;
}

````


## src/app/readiness/page.tsx

````tsx
import type { Metadata } from "next";
import { ReadinessPage } from "@/components/dashboard/ReadinessPage";
export const metadata: Metadata = { title: "Job readiness" };
export default function Page() {
  return <ReadinessPage />;
}

````


## src/app/results/page.tsx

````tsx
import type { Metadata } from "next";
import { ResultsPage } from "@/components/career/ResultsPage";
export const metadata: Metadata = { title: "Your career profile" };
export default function Page() {
  return <ResultsPage />;
}

````


## src/app/roadmap/page.tsx

````tsx
import type { Metadata } from "next";
import { RoadmapPage } from "@/components/roadmap/RoadmapPage";
export const metadata: Metadata = { title: "Your roadmap" };
export default function Page() {
  return <RoadmapPage />;
}

````


## src/app/skill-gap/page.tsx

````tsx
import type { Metadata } from "next";
import { SkillGapPage } from "@/components/skill-gap/SkillGapPage";
export const metadata: Metadata = { title: "Skill gap" };
export default function Page() {
  return <SkillGapPage />;
}

````


## src/components/assessment/AssessmentFlow.tsx

````tsx
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, Compass, LockKeyhole } from "lucide-react";
import { useCareerAI } from "@/hooks/useCareerAI";
import { assessmentQuestions } from "@/data/assessmentQuestions";
import { recommendCareers } from "@/lib/careerEngine";
import {
  Button,
  ProgressBar,
  EmptyState,
  Reveal,
} from "@/components/ui/primitives";
import { AssessmentQuestion } from "./AssessmentQuestion";
export function AssessmentFlow() {
  const { state, answerQuestion, selectCareer } = useCareerAI();
  const router = useRouter();
  const [index, setIndex] = useState(() => {
      const i = assessmentQuestions.findIndex((q) => !state.assessment[q.id]);
      return i === -1 ? 0 : i;
    }),
    [analyzing, setAnalyzing] = useState(false),
    [error, setError] = useState("");
  useEffect(() => {
    if (!analyzing) return;
    const timer = setTimeout(() => router.push("/results"), 1100);
    return () => clearTimeout(timer);
  }, [analyzing, router]);
  if (!state.profile.onboarded)
    return (
      <div className="assessment-layout">
        <EmptyState
          title="Let’s start with your profile"
          description="Share your interests and current skills so the assessment can connect with your goals."
          action="Set up my profile"
          href="/onboarding"
        />
      </div>
    );
  if (analyzing)
    return (
      <div className="assessment-layout">
        <div className="empty-state panel">
          <div className="empty-icon">
            <Sparkles size={32} />
          </div>
          <h2>Connecting the dots…</h2>
          <p>
            Comparing your interests, skills, and responses across eight career
            paths.
          </p>
          <ProgressBar value={100} label="Career analysis" />
          <p className="text-small">
            Transparent rules. A thoughtful starting point.
          </p>
        </div>
      </div>
    );
  const question = assessmentQuestions[index],
    answered = Object.keys(state.assessment).length;
  const next = () => {
    if (!state.assessment[question.id]) {
      setError("Choose the answer that feels closest to you.");
      return;
    }
    setError("");
    if (index === assessmentQuestions.length - 1) {
      const result = recommendCareers(state.profile, state.assessment);
      selectCareer(result[0].career.slug);
      setAnalyzing(true);
    } else setIndex((i) => i + 1);
  };
  return (
    <div className="assessment-layout">
      <div className="assessment-heading">
        <span className="career-icon">
          <Compass size={23} />
        </span>
        <span>
          <h2>Your career assessment</h2>
          <p>Take your time. Follow your curiosity.</p>
        </span>
      </div>
      <div className="panel flow-card">
        <div className="flow-step-count">
          <span>
            Question {index + 1} of {assessmentQuestions.length}
          </span>
          <span>{answered} answered</span>
        </div>
        <ProgressBar
          value={(answered / assessmentQuestions.length) * 100}
          label="Assessment answers completed"
        />
        <Reveal key={question.id}>
          <div className="eyebrow">DISCOVER YOUR DIRECTION</div>
          <h1>{question.question}</h1>
          <p className="muted">{question.hint}</p>
          <AssessmentQuestion
            question={question}
            answer={state.assessment[question.id]}
            onAnswer={(id) => {
              answerQuestion(question.id, id);
              setError("");
            }}
          />
        </Reveal>
        {error && (
          <p role="alert" className="field-error">
            {error}
          </p>
        )}
        <div className="flow-controls">
          <Button
            variant="ghost"
            onClick={() => {
              setIndex((i) => i - 1);
              setError("");
            }}
            disabled={index === 0}
          >
            Back
          </Button>
          <Button onClick={next}>
            {index === assessmentQuestions.length - 1
              ? "Discover my career paths"
              : "Next question"}
            {index === assessmentQuestions.length - 1 && <Sparkles size={16} />}
          </Button>
        </div>
      </div>
      <p className="assessment-tip">
        <LockKeyhole size={16} />
        Your answers stay in this browser. Profile matches are suggestions to
        explore, not fixed judgments about your future.
      </p>
    </div>
  );
}

````


## src/components/assessment/AssessmentQuestion.tsx

````tsx
"use client";
import type { AssessmentQuestion as Question } from "@/types/assessment";
export function AssessmentQuestion({
  question,
  answer,
  onAnswer,
}: {
  question: Question;
  answer?: string;
  onAnswer: (id: string) => void;
}) {
  return (
    <fieldset>
      <legend className="sr-only">{question.question}</legend>
      <div className="question-options">
        {question.options.map((option, i) => (
          <button
            key={option.id}
            className={`question-option ${answer === option.id ? "selected" : ""}`}
            aria-pressed={answer === option.id}
            onClick={() => onAnswer(option.id)}
          >
            <span className="option-letter">{String.fromCharCode(65 + i)}</span>
            <span>
              <strong>{option.label}</strong>
              <small>{option.description}</small>
            </span>
          </button>
        ))}
      </div>
    </fieldset>
  );
}

````


## src/components/assessment/OnboardingFlow.tsx

````tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Sparkles } from "lucide-react";
import { useCareerAI } from "@/hooks/useCareerAI";
import { interestOptions, locations, skills } from "@/data/skills";
import { Button, ProgressBar, Reveal } from "@/components/ui/primitives";
const steps = [
  "Your name",
  "Education",
  "Current status",
  "Location",
  "Interests",
  "Existing skills",
  "Work style",
  "Learning time",
];
const titles = [
  "First, what should we call you?",
  "Tell us about your education.",
  "Where are you in your journey?",
  "Where are you based?",
  "What sparks your curiosity?",
  "What skills do you already have?",
  "How would you like to work?",
  "Make room for your next chapter.",
];
const hints = [
  "Your first name or the name you prefer is enough.",
  "Every starting point has possibilities. Choose your current or most recent level.",
  "This helps us make your next steps more relevant.",
  "Choose your city or division in Bangladesh.",
  "Pick a few interests. You can always explore something new later.",
  "Select the skills you have practiced. Starting from scratch is completely fine.",
  "Choose what suits your life right now.",
  "How much time can you realistically spend learning each day?",
];
export function OnboardingFlow() {
  const { state, updateProfile, updateCV } = useCareerAI();
  const p = state.profile;
  const router = useRouter();
  const [step, setStep] = useState(0),
    [error, setError] = useState("");
  const valid = [
    p.name.trim().length >= 2,
    !!p.education,
    !!p.status,
    !!p.location,
    p.interests.length > 0,
    true,
    !!p.workStyle,
    !!p.learningTime,
  ];
  const next = () => {
    if (!valid[step]) {
      setError(
        step === 0
          ? "Please enter a name with at least two characters."
          : "Choose an option to continue.",
      );
      return;
    }
    setError("");
    if (step === 7) {
      updateProfile({ onboarded: true, name: p.name.trim() });
      updateCV({
        name: state.cv.name || p.name.trim(),
        location: state.cv.location || `${p.location}, Bangladesh`,
        skills:
          state.cv.skills ||
          p.skills
            .map((id) => skills.find((s) => s.id === id)?.name ?? id)
            .join(", "),
      });
      router.push("/assessment");
    } else setStep((s) => s + 1);
  };
  const choices = (
    items: string[],
    value: string,
    onChange: (v: string) => void,
    multiple = false,
    selected: string[] = [],
  ) => (
    <div className="choice-grid" role="group" aria-label={steps[step]}>
      {items.map((item) => (
        <button
          key={item}
          className={`choice-button ${(multiple ? selected.includes(item) : value === item) ? "selected" : ""}`}
          onClick={() => {
            onChange(item);
            setError("");
          }}
          aria-pressed={multiple ? selected.includes(item) : value === item}
        >
          <span className="choice-check">
            {(multiple ? selected.includes(item) : value === item) && (
              <Check size={13} />
            )}
          </span>
          {item}
        </button>
      ))}
    </div>
  );
  return (
    <div className="flow-page">
      <aside className="flow-sidebar">
        <div className="eyebrow">LET’S GET TO KNOW YOU</div>
        <h2>
          A little about you.
          <br />A better path ahead.
        </h2>
        {steps.map((s, i) => (
          <div
            key={s}
            className={`flow-step ${i === step ? "active" : i < step ? "complete" : ""}`}
          >
            <span>{i < step ? <Check size={13} /> : i + 1}</span>
            {s}
          </div>
        ))}
      </aside>
      <div className="panel flow-card">
        <div className="flow-step-count">
          <span>
            Step {step + 1} of {steps.length}
          </span>
          <span>About 2 minutes</span>
        </div>
        <ProgressBar
          value={((step + 1) / steps.length) * 100}
          label="Onboarding progress"
        />
        <Reveal key={step}>
          <div className="eyebrow">{steps[step]}</div>
          <h1>{titles[step]}</h1>
          <p className="muted" style={{ margin: "12px 0 25px" }}>
            {hints[step]}
          </p>
          {step === 0 && (
            <label htmlFor="profile-name">
              Your name
              <input
                id="profile-name"
                autoComplete="name"
                maxLength={80}
                autoFocus
                placeholder="e.g. Zahid Hasan"
                value={p.name}
                onChange={(e) => {
                  updateProfile({ name: e.target.value });
                  setError("");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") next();
                }}
                aria-invalid={!!error}
                aria-describedby={error ? "onboarding-error" : undefined}
              />
            </label>
          )}
          {step === 1 &&
            choices(
              ["HSC", "Diploma", "Bachelor's", "Master's", "Other"],
              p.education,
              (v) => updateProfile({ education: v }),
            )}
          {step === 2 &&
            choices(
              [
                "Student",
                "Fresh Graduate",
                "Job Seeker",
                "Working Professional",
              ],
              p.status,
              (v) => updateProfile({ status: v }),
            )}
          {step === 3 && (
            <label htmlFor="profile-location">
              City or division
              <select
                id="profile-location"
                aria-label="City or division"
                value={p.location}
                onChange={(e) => {
                  updateProfile({ location: e.target.value });
                  setError("");
                }}
              >
                <option value="">Choose your location</option>
                {locations.map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
            </label>
          )}
          {step === 4 &&
            choices(
              interestOptions,
              "",
              (v) =>
                updateProfile({
                  interests: p.interests.includes(v)
                    ? p.interests.filter((i) => i !== v)
                    : [...p.interests, v],
                }),
              true,
              p.interests,
            )}
          {step === 5 && (
            <>
              <div
                className="choice-grid"
                role="group"
                aria-label="Existing skills"
              >
                {skills.map((s) => (
                  <button
                    key={s.id}
                    className={`choice-button ${p.skills.includes(s.id) ? "selected" : ""}`}
                    aria-pressed={p.skills.includes(s.id)}
                    onClick={() =>
                      updateProfile({
                        skills: p.skills.includes(s.id)
                          ? p.skills.filter((id) => id !== s.id)
                          : [...p.skills, s.id],
                        skillLevels: {
                          ...p.skillLevels,
                          [s.id]: p.skills.includes(s.id)
                            ? 0
                            : p.skillLevels[s.id] || 40,
                        },
                      })
                    }
                  >
                    <span className="choice-check">
                      {p.skills.includes(s.id) && <Check size={13} />}
                    </span>
                    {s.name}
                  </button>
                ))}
              </div>
              <p className="flow-hint">
                Selected skills start at a self-assessed level of 40%. You can
                adjust each level in Skill Gap.
              </p>
            </>
          )}
          {step === 6 &&
            choices(
              ["Remote", "On-site", "Hybrid", "Flexible"],
              p.workStyle,
              (v) => updateProfile({ workStyle: v }),
            )}
          {step === 7 &&
            choices(
              ["30 min/day", "1 hour/day", "2 hours/day", "3+ hours/day"],
              p.learningTime,
              (v) => updateProfile({ learningTime: v }),
            )}
          {error && (
            <p id="onboarding-error" className="field-error" role="alert">
              {error}
            </p>
          )}
        </Reveal>
        <div className="flow-controls">
          <Button
            variant="ghost"
            onClick={() => {
              setStep((s) => Math.max(0, s - 1));
              setError("");
            }}
            disabled={step === 0}
          >
            Back
          </Button>
          <Button onClick={next}>
            {step === 7 ? "Start my assessment" : "Continue"}
            {step === 7 && <Sparkles size={16} />}
          </Button>
        </div>
      </div>
    </div>
  );
}

````


## src/components/career/CareerCards.tsx

````tsx
"use client";
import Link from "next/link";
import type { Career, CareerMatch } from "@/types/career";
import { useCareerAI } from "@/hooks/useCareerAI";
import {
  Button,
  ButtonLink,
  CareerIcon,
  Badge,
} from "@/components/ui/primitives";
import { skillName } from "@/data/skills";
export function MatchRing({
  value,
  label = "Profile Match",
  large = false,
}: {
  value: number;
  label?: string;
  large?: boolean;
}) {
  const size = large ? 164 : 104;
  return (
    <div className="match-ring" aria-label={`${label}: ${value}%`}>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width="100%"
        height="100%"
        aria-hidden="true"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 5}
          fill="none"
          stroke="var(--border)"
          strokeWidth="5"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 5}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="5"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray={`${value} ${100 - value}`}
        />
      </svg>
      <span>
        <strong>{value}%</strong>
        <small>{label}</small>
      </span>
    </div>
  );
}
export function CareerCard({
  career,
  match,
}: {
  career: Career;
  match?: number;
}) {
  const { state, selectCareer } = useCareerAI();
  return (
    <article className="panel career-card">
      <div className="section-title" style={{ margin: 0 }}>
        <span className={`career-icon icon-${career.color}`}>
          <CareerIcon name={career.icon} />
        </span>
        {match !== undefined && (
          <Badge tone="violet">{match}% Profile Match</Badge>
        )}
      </div>
      <h2>{career.name}</h2>
      <p>{career.description}</p>
      <div className="skill-tags">
        {career.skills.slice(0, 3).map((s) => (
          <span key={s.id}>{skillName(s.id)}</span>
        ))}
      </div>
      <div className="inline-actions">
        <ButtonLink href={`/careers/${career.slug}`} variant="secondary">
          Explore path
        </ButtonLink>
        <Button
          variant={
            state.selectedCareer === career.slug ? "secondary" : "primary"
          }
          onClick={() => selectCareer(career.slug)}
          aria-pressed={state.selectedCareer === career.slug}
        >
          {state.selectedCareer === career.slug ? "Selected" : "Choose path"}
        </Button>
      </div>
    </article>
  );
}
export function CareerMatchCard({ match }: { match: CareerMatch }) {
  return (
    <Link href={`/careers/${match.career.slug}`} className="career-mini-card">
      <span className={`career-icon icon-${match.career.color}`}>
        <CareerIcon name={match.career.icon} />
      </span>
      <div>
        <h3>{match.career.name}</h3>
        <small>{match.career.category}</small>
      </div>
      <span className="match-num">{match.match}%</span>
    </Link>
  );
}

````


## src/components/career/CareerDetails.tsx

````tsx
"use client";
import type { Career } from "@/types/career";
import { getRoadmap } from "@/data/roadmaps";
import { skillName } from "@/data/skills";
import { useCareerAI } from "@/hooks/useCareerAI";
import {
  Button,
  ButtonLink,
  CareerIcon,
  CheckList,
  Badge,
} from "@/components/ui/primitives";
export function CareerDetails({ career }: { career: Career }) {
  const { state, selectCareer } = useCareerAI();
  const roadmap = getRoadmap(career.slug);
  return (
    <>
      <ButtonLink href="/careers" variant="ghost" className="mb-5">
        All career paths
      </ButtonLink>
      <div className="detail-hero">
        <span className={`career-icon icon-${career.color}`}>
          <CareerIcon name={career.icon} size={30} />
        </span>
        <div>
          <div className="eyebrow">{career.category}</div>
          <h1>{career.name}</h1>
          <p>{career.description}</p>
        </div>
      </div>
      <div className="inline-actions" style={{ marginBottom: 30 }}>
        <Button onClick={() => selectCareer(career.slug)}>
          {state.selectedCareer === career.slug
            ? "Selected as my path"
            : "Choose this career path"}
        </Button>
        {state.selectedCareer === career.slug && (
          <>
            <ButtonLink href="/skill-gap" variant="secondary">
              View my skill gap
            </ButtonLink>
            <ButtonLink href="/roadmap" variant="secondary">
              Open my roadmap
            </ButtonLink>
          </>
        )}
      </div>
      <div className="detail-top">
        <section className="panel content-panel">
          <h2>Career overview</h2>
          <p>{career.overview}</p>
          <h2 style={{ marginTop: 27 }}>Typical responsibilities</h2>
          <CheckList items={career.responsibilities} />
        </section>
        <section className="panel content-panel">
          <h2>Core skills</h2>
          <div className="skill-tags">
            {career.skills.map((s) => (
              <span key={s.id}>{skillName(s.id)}</span>
            ))}
          </div>
          <h2 style={{ marginTop: 27 }}>Tools you may use</h2>
          <div className="skill-tags">
            {career.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </section>
      </div>
      <div className="detail-levels">
        {(["beginner", "intermediate", "advanced"] as const).map((level, i) => (
          <section key={level} className="panel level-card">
            <div className="eyebrow">
              0{i + 1} · {level}
            </div>
            <CheckList items={career.levels[level]} />
          </section>
        ))}
      </div>
      <div className="detail-bottom">
        <section className="panel content-panel">
          <h2>Projects worth building</h2>
          <CheckList items={career.projects} />
        </section>
        <section className="panel content-panel">
          <h2>Interview topics</h2>
          <CheckList items={career.interviewTopics} />
          <ButtonLink
            variant="ghost"
            href="/interview"
            onClick={() => selectCareer(career.slug)}
          >
            Practice these skills
          </ButtonLink>
        </section>
      </div>
      <section className="panel content-panel" style={{ marginTop: 22 }}>
        <div className="section-title">
          <h2>Learning roadmap</h2>
          <Badge>{roadmap?.phases.length ?? 0} phases</Badge>
        </div>
        <div className="skill-tags">
          {roadmap?.phases.map((p, i) => (
            <span key={p.id}>
              0{i + 1} · {p.title}
            </span>
          ))}
        </div>
        <p className="text-small" style={{ marginTop: 22 }}>
          Choose this path to unlock tasks, progress tracking, and learning-time
          estimates.
        </p>
        <div className="inline-actions" style={{ marginTop: 20 }}>
          <Button onClick={() => selectCareer(career.slug)}>
            Use this roadmap
          </Button>
          <ButtonLink href="/roadmap" variant="secondary">
            View selected roadmap
          </ButtonLink>
        </div>
      </section>
    </>
  );
}

````


## src/components/career/CareersPage.tsx

````tsx
"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { careers } from "@/data/careers";
import { useCareerAI } from "@/hooks/useCareerAI";
import { recommendCareers, assessmentComplete } from "@/lib/careerEngine";
import {
  PageHeader,
  Button,
  ButtonLink,
  EmptyState,
  PrototypeNote,
} from "@/components/ui/primitives";
import { CareerCard } from "./CareerCards";
export function CareersPage() {
  const [query, setQuery] = useState("");
  const { state } = useCareerAI();
  const matches = assessmentComplete(state.assessment)
    ? recommendCareers(state.profile, state.assessment)
    : [];
  const filtered = careers.filter((c) =>
    `${c.name} ${c.description} ${c.category}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );
  return (
    <>
      <PageHeader
        eyebrow="EIGHT PATHS. YOUR OWN DIRECTION."
        title="Explore careers"
        description="Look past job titles. Discover the skills, projects, and everyday work behind each path."
      >
        <ButtonLink
          href={state.profile.onboarded ? "/results" : "/onboarding"}
          variant="secondary"
        >
          {state.profile.onboarded ? "My career profile" : "Find my matches"}
        </ButtonLink>
      </PageHeader>
      <div className="filter-bar">
        <label className="search-input">
          <span className="sr-only">Search career paths</span>
          <Search size={19} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a career or interest…"
          />
        </label>
        <span className="muted text-small">{filtered.length} career paths</span>
        {state.selectedCareer && (
          <ButtonLink href="/skill-gap" variant="ghost">
            Continue with selected path
          </ButtonLink>
        )}
      </div>
      {filtered.length ? (
        <div className="career-card-grid">
          {filtered.map((c) => (
            <CareerCard
              key={c.slug}
              career={c}
              match={matches.find((m) => m.career.slug === c.slug)?.match}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No paths found"
          description="Try a broader term such as data, design, or software."
        >
          <Button variant="secondary" onClick={() => setQuery("")}>
            Clear search
          </Button>
        </EmptyState>
      )}
      <PrototypeNote />
    </>
  );
}

````


## src/components/career/ResultsPage.tsx

````tsx
"use client";
import { useCareerAI } from "@/hooks/useCareerAI";
import { recommendCareers, assessmentComplete } from "@/lib/careerEngine";
import {
  PageHeader,
  EmptyState,
  Button,
  ButtonLink,
  Badge,
  CareerIcon,
  CheckList,
  PrototypeNote,
  Reveal,
} from "@/components/ui/primitives";
import { CareerMatchCard, MatchRing } from "./CareerCards";
export function ResultsPage() {
  const { state, selectCareer, loadDemo } = useCareerAI();
  if (!assessmentComplete(state.assessment))
    return (
      <EmptyState
        title="Your career profile starts with you"
        description="Complete the short assessment to compare career paths and understand why they fit your interests."
        action={
          state.profile.onboarded
            ? "Continue assessment"
            : "Start career assessment"
        }
        href={state.profile.onboarded ? "/assessment" : "/onboarding"}
      >
        <Button variant="ghost" onClick={loadDemo}>
          Try a complete demo profile
        </Button>
      </EmptyState>
    );
  const matches = recommendCareers(state.profile, state.assessment),
    primary = matches[0],
    selected =
      matches.find((m) => m.career.slug === state.selectedCareer) ?? primary;
  return (
    <>
      <PageHeader
        eyebrow="A STARTING POINT, FULL OF POSSIBILITY"
        title="Your Career Profile"
        description={`Here is how your interests and responses connect, ${state.profile.name.split(" ")[0]}. Explore, compare, and choose your next chapter.`}
      >
        <ButtonLink href="/assessment" variant="secondary">
          Retake assessment
        </ButtonLink>
      </PageHeader>
      <div className="results-grid">
        <Reveal className="panel primary-career">
          <Badge tone="violet">Primary career path</Badge>
          <div className="primary-career-top">
            <div>
              <span className={`career-icon icon-${primary.career.color}`}>
                <CareerIcon name={primary.career.icon} />
              </span>
              <h2 style={{ marginTop: 15 }}>{primary.career.name}</h2>
            </div>
            <MatchRing value={primary.match} />
          </div>
          <p>{primary.career.description}</p>
          <h3>Why this path fits you</h3>
          <CheckList items={primary.reasons} />
          <div className="inline-actions" style={{ marginTop: 27 }}>
            <Button onClick={() => selectCareer(primary.career.slug)}>
              {state.selectedCareer === primary.career.slug
                ? "Keep this career path"
                : "Choose this career path"}
            </Button>
            <ButtonLink
              href={`/careers/${primary.career.slug}`}
              variant="secondary"
            >
              Explore the career
            </ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="panel">
          <div className="section-title">
            <h2>Other paths to explore</h2>
            <Badge>{matches.length - 1} paths</Badge>
          </div>
          <p className="text-small muted">
            Your strengths can lead in more than one direction.
          </p>
          {matches.slice(1, 5).map((match) => (
            <CareerMatchCard key={match.career.slug} match={match} />
          ))}
          <ButtonLink href="/careers" variant="ghost">
            Compare all career paths
          </ButtonLink>
        </Reveal>
      </div>
      <PrototypeNote />
      <div className="grid-2">
        <div className="panel">
          <div className="section-title">
            <h2>Your strengths</h2>
            <Badge tone="mint">{selected.career.shortName}</Badge>
          </div>
          {selected.strengths.length ? (
            <CheckList items={selected.strengths} />
          ) : (
            <p>
              Your curiosity is a good foundation. Add practiced skills to your
              profile as you learn.
            </p>
          )}
          <ButtonLink href="/skill-gap" variant="ghost">
            Review your current levels
          </ButtonLink>
        </div>
        <div className="panel">
          <h2 style={{ marginBottom: 20 }}>Your development areas</h2>
          <CheckList
            items={
              selected.gaps.length
                ? selected.gaps
                : [
                    "Deepen your existing skills through projects, testing, and feedback.",
                  ]
            }
          />
        </div>
      </div>
      <div className="next-step-card" style={{ marginTop: 24 }}>
        <div>
          <div className="eyebrow">YOUR SELECTED DIRECTION</div>
          <h2>{selected.career.name}</h2>
          <p>
            Start with your skill gap, then turn it into a practical learning
            plan.
          </p>
        </div>
        <div className="inline-actions">
          <ButtonLink href="/skill-gap">View my skill gap</ButtonLink>
          <ButtonLink href="/roadmap" variant="secondary">
            Build my roadmap
          </ButtonLink>
        </div>
      </div>
    </>
  );
}

````


## src/components/career/TargetCareerSelect.tsx

````tsx
"use client";
import { careers } from "@/data/careers";
import { useCareerAI } from "@/hooks/useCareerAI";
export function TargetCareerSelect() {
  const { state, selectCareer } = useCareerAI();
  return (
    <div className="target-selector">
      <label htmlFor="target-career">Target career</label>
      <select
        id="target-career"
        value={state.selectedCareer}
        onChange={(e) => selectCareer(e.target.value)}
      >
        <option value="" disabled>
          Choose a career path
        </option>
        {careers.map((c) => (
          <option key={c.slug} value={c.slug}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}

````


## src/components/cv/CVBuilderPage.tsx

````tsx
"use client";
import { useState } from "react";
import { Sparkles, Plus, Trash2, Printer, Download, Check } from "lucide-react";
import type { CVData, CVItem } from "@/types/user";
import { useCareerAI } from "@/hooks/useCareerAI";
import { getCareer } from "@/data/careers";
import { cvTemplates } from "@/data/cvTemplates";
import { cvReadiness } from "@/lib/progress";
import { suggestSummary, cvAsText } from "@/lib/cvEngine";
import { createId } from "@/lib/id";
import {
  PageHeader,
  Button,
  ButtonLink,
  Badge,
  PrototypeNote,
  ProgressBar,
} from "@/components/ui/primitives";
import { CVPreview } from "./CVPreview";
type Section = "education" | "experience" | "projects";
function EntryEditor({
  section,
  items,
  onChange,
}: {
  section: Section;
  items: CVItem[];
  onChange: (items: CVItem[]) => void;
}) {
  const title =
    section === "education"
      ? "Degree / qualification"
      : section === "experience"
        ? "Role / position"
        : "Project name";
  const org =
    section === "education"
      ? "Institution"
      : section === "experience"
        ? "Organization"
        : "Project context / link";
  const edit = (id: string, patch: Partial<CVItem>) =>
    onChange(
      items.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    );
  return (
    <>
      {items.map((item, i) => (
        <div className="form-item" key={item.id}>
          <div className="item-heading">
            <h3>
              {section.slice(0, 1).toUpperCase() + section.slice(1)} {i + 1}
            </h3>
            <button
              className="icon-btn"
              aria-label={`Remove ${section} entry ${i + 1}`}
              onClick={() => onChange(items.filter((x) => x.id !== item.id))}
            >
              <Trash2 size={17} />
            </button>
          </div>
          <div className="form-grid">
            <label>
              {title}
              <input
                aria-label={`${title} ${i + 1}`}
                value={item.title}
                onChange={(e) => edit(item.id, { title: e.target.value })}
                placeholder={
                  section === "education"
                    ? "BSc in Computer Science"
                    : section === "experience"
                      ? "Web Development Intern"
                      : "Campus Event Planner"
                }
              />
            </label>
            <label>
              {org}
              <input
                aria-label={`${org} ${i + 1}`}
                value={item.organization}
                onChange={(e) =>
                  edit(item.id, { organization: e.target.value })
                }
                placeholder={
                  section === "projects"
                    ? "Personal project · github.com/…"
                    : "Organization name"
                }
              />
            </label>
            <label className="full-span">
              Dates
              <input
                aria-label={`${section} dates ${i + 1}`}
                value={item.period}
                onChange={(e) => edit(item.id, { period: e.target.value })}
                placeholder="2024–present"
              />
            </label>
            <label className="full-span">
              Description
              <textarea
                aria-label={`${section} description ${i + 1}`}
                value={item.description}
                onChange={(e) => edit(item.id, { description: e.target.value })}
                placeholder="Describe your contribution, the tools you used, and what you learned. Only include results you can support."
              />
            </label>
          </div>
        </div>
      ))}
      {items.length === 0 && (
        <p className="text-small">
          {section === "experience"
            ? "No work experience yet? Your projects can show what you can do."
            : section === "projects"
              ? "A small, clearly explained project is a strong place to start."
              : "Add your current or most recent qualification."}
        </p>
      )}
      <Button
        variant="secondary"
        className="add-entry"
        onClick={() =>
          onChange([
            ...items,
            {
              id: createId(),
              title: "",
              organization: "",
              period: "",
              description: "",
            },
          ])
        }
        disabled={items.length >= 20}
      >
        <Plus size={16} />
        Add{" "}
        {section === "education"
          ? "education"
          : section === "experience"
            ? "experience"
            : "project"}
      </Button>
    </>
  );
}
export function CVBuilderPage() {
  const { state, updateCV, notify } = useCareerAI();
  const cv = state.cv;
  const [tab, setTab] = useState("edit"),
    [suggestion, setSuggestion] = useState("");
  const update = (key: keyof CVData, value: string) =>
    updateCV({ [key]: value });
  const download = () => {
    const blob = new Blob([cvAsText(cv)], { type: "text/plain;charset=utf-8" }),
      url = URL.createObjectURL(blob),
      a = document.createElement("a");
    a.href = url;
    a.download = `${cv.name.trim().replace(/[^a-z0-9\u0980-\u09ff]+/gi, "-") || "CareerAI"}-CV.txt`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    notify("Your CV text has been downloaded.");
  };
  return (
    <>
      <PageHeader
        eyebrow="MAKE YOUR EXPERIENCE COUNT"
        title="Build your CV"
        description="A clear story of your skills, projects, and potential. Every edit updates your preview."
      >
        <div className="cv-score">
          <span>{cvReadiness(state)}% ready</span>
          <ProgressBar value={cvReadiness(state)} label="CV completeness" />
        </div>
      </PageHeader>
      <div
        className="cv-tabs"
        role="tablist"
        aria-label="CV builder view"
        onKeyDown={(event) => {
          if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key))
            return;
          event.preventDefault();
          const next =
            event.key === "Home"
              ? "edit"
              : event.key === "End"
                ? "preview"
                : tab === "edit"
                  ? "preview"
                  : "edit";
          setTab(next);
          document.getElementById(`${next}-tab`)?.focus();
        }}
      >
        <Button
          id="edit-tab"
          role="tab"
          tabIndex={tab === "edit" ? 0 : -1}
          aria-selected={tab === "edit"}
          aria-controls="cv-edit-panel"
          variant={tab === "edit" ? "primary" : "secondary"}
          onClick={() => setTab("edit")}
        >
          Edit
        </Button>
        <Button
          id="preview-tab"
          role="tab"
          tabIndex={tab === "preview" ? 0 : -1}
          aria-selected={tab === "preview"}
          aria-controls="cv-preview-panel"
          variant={tab === "preview" ? "primary" : "secondary"}
          onClick={() => setTab("preview")}
        >
          Preview
        </Button>
      </div>
      <div className={`cv-layout ${tab === "preview" ? "show-preview" : ""}`}>
        <div className="cv-editor" id="cv-edit-panel">
          <section className="panel cv-section">
            <h2>Personal information</h2>
            <div className="form-grid">
              {[
                {
                  key: "name",
                  label: "Full name",
                  type: "text",
                  placeholder: "Your full name",
                },
                {
                  key: "email",
                  label: "Email",
                  type: "email",
                  placeholder: "you@example.com",
                },
                {
                  key: "phone",
                  label: "Phone",
                  type: "tel",
                  placeholder: "+880…",
                },
                {
                  key: "location",
                  label: "Location",
                  type: "text",
                  placeholder: "Dhaka, Bangladesh",
                },
                {
                  key: "website",
                  label: "Portfolio / website (optional)",
                  type: "text",
                  placeholder: "yourname.dev",
                },
              ].map((f) => (
                <label
                  key={f.key}
                  className={f.key === "website" ? "full-span" : ""}
                >
                  {f.label}
                  <input
                    type={f.type}
                    value={
                      cv[
                        f.key as
                          | "name"
                          | "email"
                          | "phone"
                          | "location"
                          | "website"
                      ]
                    }
                    onChange={(e) =>
                      update(f.key as keyof CVData, e.target.value)
                    }
                    placeholder={f.placeholder}
                    autoComplete={
                      f.key === "name"
                        ? "name"
                        : f.key === "email"
                          ? "email"
                          : f.key === "phone"
                            ? "tel"
                            : "off"
                    }
                  />
                </label>
              ))}
            </div>
          </section>
          <section className="panel cv-section">
            <div className="section-title">
              <h2 style={{ margin: 0 }}>Professional summary</h2>
              <Button
                variant="secondary"
                onClick={() =>
                  setSuggestion(
                    suggestSummary(cv, getCareer(state.selectedCareer)),
                  )
                }
              >
                <Sparkles size={15} />
                Improve with AI
              </Button>
            </div>
            <label className="sr-only" htmlFor="cv-summary">
              Professional summary
            </label>
            <textarea
              id="cv-summary"
              value={cv.summary}
              onChange={(e) => updateCV({ summary: e.target.value })}
              placeholder="What are you learning, what have you built, and where would you like to contribute?"
            />
            {suggestion && (
              <div className="suggestion-box">
                <Badge tone="violet">Simulated AI suggestion</Badge>
                <label className="block mt-3">
                  Review and edit the suggestion
                  <textarea
                    aria-label="Review and edit the suggestion"
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                  />
                </label>
                <div className="inline-actions mt-3">
                  <Button
                    onClick={() => {
                      updateCV({ summary: suggestion });
                      setSuggestion("");
                      notify(
                        "Summary updated. Review it to make sure every detail is accurate.",
                      );
                    }}
                  >
                    <Check size={15} />
                    Use this summary
                  </Button>
                  <Button variant="ghost" onClick={() => setSuggestion("")}>
                    Dismiss
                  </Button>
                </div>
                <small>
                  Uses your entered details. No AI service is connected.
                </small>
              </div>
            )}
          </section>
          {(["education", "experience", "projects"] as const).map((section) => (
            <section className="panel cv-section" key={section}>
              <h2>{section.slice(0, 1).toUpperCase() + section.slice(1)}</h2>
              <EntryEditor
                section={section}
                items={cv[section]}
                onChange={(items) => updateCV({ [section]: items })}
              />
            </section>
          ))}
          <section className="panel cv-section">
            <h2>Skills</h2>
            <label>
              Separate skills with commas
              <textarea
                aria-label="Separate skills with commas"
                value={cv.skills}
                onChange={(e) => updateCV({ skills: e.target.value })}
                placeholder="JavaScript, React, SQL, Communication"
              />
            </label>
          </section>
          <section className="panel cv-section">
            <h2>Achievements</h2>
            <label>
              Awards, activities, or milestones
              <textarea
                aria-label="Awards, activities, or milestones"
                value={cv.achievements}
                onChange={(e) => updateCV({ achievements: e.target.value })}
                placeholder="Describe a real achievement, activity, or contribution. This section is optional."
              />
            </label>
          </section>
          <PrototypeNote>
            Writing assistance uses predefined suggestions from your inputs.
            Review every claim; no external AI API is used.
          </PrototypeNote>
        </div>
        <div className="cv-preview-panel cv-sticky" id="cv-preview-panel">
          <div className="cv-preview-toolbar">
            <label>
              <span className="sr-only">CV template</span>
              <select
                aria-label="CV template"
                value={cv.template}
                onChange={(e) =>
                  updateCV({ template: e.target.value as CVData["template"] })
                }
                style={{ minHeight: 40, fontSize: 14, maxWidth: 135 }}
              >
                {cvTemplates.map((t) => (
                  <option value={t.id} key={t.id}>
                    {t.name} template
                  </option>
                ))}
              </select>
            </label>
            <div className="cv-actions">
              <Button
                variant="secondary"
                onClick={download}
                disabled={!cv.name.trim()}
              >
                <Download size={15} />
                Text
              </Button>
              <Button onClick={() => window.print()} disabled={!cv.name.trim()}>
                <Printer size={15} />
                Print / PDF
              </Button>
            </div>
          </div>
          <CVPreview cv={cv} />
          <p className="text-small muted" style={{ marginTop: 15 }}>
            Print / PDF opens your browser’s print dialog. Choose “Save as PDF”
            to export.
          </p>
          <ButtonLink href="/interview" variant="ghost" className="mt-4">
            Practice explaining your projects
          </ButtonLink>
        </div>
      </div>
    </>
  );
}

````


## src/components/cv/CVPreview.tsx

````tsx
"use client";
import type { CVData, CVItem } from "@/types/user";
function Entries({ title, items }: { title: string; items: CVItem[] }) {
  const visible = items.filter(
    (item) =>
      item.title.trim() || item.organization.trim() || item.description.trim(),
  );
  if (!visible.length) return null;
  return (
    <section>
      <h3>{title}</h3>
      {visible.map((item) => (
        <div className="cv-entry" key={item.id}>
          <div className="cv-entry-head">
            <strong>{item.title}</strong>
            <small>{item.period}</small>
          </div>
          {item.organization && <span>{item.organization}</span>}
          {item.description && <p>{item.description}</p>}
        </div>
      ))}
    </section>
  );
}
export function CVPreview({ cv }: { cv: CVData }) {
  return (
    <article
      className={`cv-paper cv-${cv.template}`}
      aria-label="Live CV preview"
    >
      <div className="cv-paper-heading">
        <h2>{cv.name || "Your name"}</h2>
        <p className="cv-contact">
          {[cv.email, cv.phone, cv.location, cv.website]
            .filter(Boolean)
            .join(" · ") || "Your contact details will appear here"}
        </p>
      </div>
      {cv.summary && (
        <section>
          <h3>Professional Summary</h3>
          <p>{cv.summary}</p>
        </section>
      )}
      <Entries title="Education" items={cv.education} />
      <Entries title="Experience" items={cv.experience} />
      <Entries title="Projects" items={cv.projects} />
      {cv.skills && (
        <section>
          <h3>Skills</h3>
          <p>{cv.skills}</p>
        </section>
      )}
      {cv.achievements && (
        <section>
          <h3>Achievements</h3>
          <p>{cv.achievements}</p>
        </section>
      )}
      {!cv.summary &&
        !cv.education.length &&
        !cv.projects.length &&
        !cv.skills && (
          <p className="cv-empty-note">
            Add your education, skills, and first project to see your CV take
            shape.
          </p>
        )}
    </article>
  );
}

````


## src/components/dashboard/DashboardPage.tsx

````tsx
"use client";
import Link from "next/link";
import {
  Compass,
  Route,
  FileText,
  MessagesSquare,
  Sparkles,
  ScanLine,
} from "lucide-react";
import { useCareerAI } from "@/hooks/useCareerAI";
import { getCareer } from "@/data/careers";
import { getRoadmap } from "@/data/roadmaps";
import { skillName } from "@/data/skills";
import { recommendCareers, assessmentComplete } from "@/lib/careerEngine";
import { roadmapProgress, readiness, skillLevel } from "@/lib/progress";
import {
  PageHeader,
  EmptyState,
  Button,
  ButtonLink,
  Badge,
  CareerIcon,
  Reveal,
  PrototypeNote,
} from "@/components/ui/primitives";
import { StatCard } from "./StatCard";
import { SkillBar } from "@/components/skill-gap/SkillBar";
import { RoadmapTimeline } from "@/components/roadmap/RoadmapTimeline";
export function DashboardPage() {
  const { state, loadDemo } = useCareerAI();
  const career = getCareer(state.selectedCareer);
  if (!career)
    return (
      <>
        <PageHeader
          title={
            state.profile.name
              ? `Welcome, ${state.profile.name.split(" ")[0]} 👋`
              : "Your next chapter starts here"
          }
          description="A little clarity can go a long way. Let’s turn your interests into a practical career plan."
        />
        <EmptyState
          title="Build a path that feels like yours"
          description="Start with a short assessment or explore a complete sample workspace."
          action={
            state.profile.onboarded
              ? "Continue assessment"
              : "Start career assessment"
          }
          href={state.profile.onboarded ? "/assessment" : "/onboarding"}
        >
          <Button variant="ghost" onClick={loadDemo}>
            Try Zahid’s demo
          </Button>
        </EmptyState>
      </>
    );
  const ready = readiness(state),
    roadmap = getRoadmap(career.slug)!,
    completed = state.completedTasks[career.slug] ?? [],
    nextPhase = roadmap.phases.find((p) =>
      p.tasks.some((t) => !completed.includes(t.id)),
    ),
    nextTask = nextPhase?.tasks.find((t) => !completed.includes(t.id));
  const match =
      recommendCareers(state.profile, state.assessment).find(
        (m) => m.career.slug === career.slug,
      )?.match ?? 0,
    hasAssessment = assessmentComplete(state.assessment);
  const hour = Number(
    new Intl.DateTimeFormat("en", {
      hour: "numeric",
      hourCycle: "h23",
      timeZone: "Asia/Dhaka",
    }).format(new Date()),
  );
  const greeting =
    hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  return (
    <>
      <PageHeader
        eyebrow="YOUR CAREER, IN MOTION"
        title={`${greeting}, ${state.profile.name.split(" ")[0] || "friend"} 👋`}
        description="You do not have to figure it all out today. Just take your next step."
      >
        <ButtonLink href="/careers" variant="secondary">
          Explore careers
        </ButtonLink>
        {state.demo && <Badge tone="violet">Demo profile</Badge>}
      </PageHeader>
      <Reveal>
        <div
          className="panel"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
            marginBottom: 22,
          }}
        >
          <div className="inline-actions">
            <span className={`career-icon icon-${career.color}`}>
              <CareerIcon name={career.icon} />
            </span>
            <span>
              <small className="muted">YOUR CAREER PATH</small>
              <h2 style={{ marginTop: 4 }}>{career.name}</h2>
            </span>
          </div>
          <ButtonLink href="/results" variant="ghost">
            View career profile
          </ButtonLink>
        </div>
      </Reveal>
      <div className="stat-grid">
        {[
          {
            label: "Profile Match",
            value: hasAssessment ? match : 0,
            icon: Compass,
            note: hasAssessment
              ? "Based on your responses"
              : "Complete your assessment",
          },
          {
            label: "Roadmap Progress",
            value: roadmapProgress(state),
            icon: Route,
            note: `${completed.length} of 24 learning tasks`,
            tone: "mint",
          },
          {
            label: "CV Readiness",
            value: ready.cv,
            icon: FileText,
            note: "Your CV completeness",
            tone: "cyan",
          },
          {
            label: "Interview Readiness",
            value: ready.interview,
            icon: MessagesSquare,
            note: "Practice coverage & feedback",
            tone: "violet",
          },
        ].map((s, i) => (
          <Reveal key={s.label} delay={i * 0.05}>
            <StatCard {...s} />
          </Reveal>
        ))}
      </div>
      <div className="next-step-card">
        <span className="next-step-icon">
          <Sparkles size={25} />
        </span>
        <div className="next-step-copy">
          <div className="eyebrow">YOUR NEXT STEP</div>
          <h2>
            {nextTask ? nextTask.title : "Your learning plan is complete"}
          </h2>
          <p>
            {nextPhase
              ? `${nextPhase.title} · Pick up where you left off.`
              : "Review your CV and bring your projects into your interview answers."}
          </p>
        </div>
        <ButtonLink href={nextTask ? "/roadmap" : "/interview"}>
          {nextTask ? "Continue Roadmap" : "Practice Interview"}
        </ButtonLink>
      </div>
      <div className="dashboard-main-grid">
        <section className="panel">
          <div className="section-title">
            <div>
              <h2>Skill progress</h2>
              <p>Current levels for your target path</p>
            </div>
            <ButtonLink href="/skill-gap" variant="ghost">
              View all
            </ButtonLink>
          </div>
          <div className="skill-list">
            {career.skills.slice(0, 6).map((s) => (
              <SkillBar
                key={s.id}
                name={skillName(s.id)}
                value={skillLevel(state, s.id)}
                target={s.target}
              />
            ))}
          </div>
        </section>
        <section className="panel">
          <div className="section-title">
            <div>
              <h2>Career roadmap</h2>
              <p>A clear path, at your pace</p>
            </div>
            <Badge tone="violet">{roadmapProgress(state)}%</Badge>
          </div>
          <RoadmapTimeline
            phases={roadmap.phases.slice(0, 5)}
            completed={completed}
          />
          <ButtonLink href="/roadmap" variant="ghost" className="mt-5">
            See all 8 phases
          </ButtonLink>
        </section>
      </div>
      <div style={{ marginTop: 30 }}>
        <div className="section-title">
          <h2>Keep your momentum</h2>
          <span className="muted text-small">Quick actions</span>
        </div>
        <div className="quick-actions">
          {[
            {
              href: "/assessment",
              title: "Continue assessment",
              icon: ScanLine,
            },
            { href: "/cv-builder", title: "Improve my CV", icon: FileText },
            {
              href: "/interview",
              title: "Practice interview",
              icon: MessagesSquare,
            },
            { href: "/careers", title: "Explore careers", icon: Compass },
          ].map(({ href, title, icon: Icon }) => (
            <Link href={href} className="quick-action" key={href}>
              <Icon size={20} />
              {title}
            </Link>
          ))}
        </div>
      </div>
      <PrototypeNote>
        Readiness and match scores are prototype indicators from your profile
        and progress. They do not predict hiring outcomes.
      </PrototypeNote>
    </>
  );
}

````


## src/components/dashboard/ReadinessPage.tsx

````tsx
"use client";
import {
  Layers3,
  FileText,
  BriefcaseBusiness,
  MessagesSquare,
} from "lucide-react";
import { useCareerAI } from "@/hooks/useCareerAI";
import { getCareer } from "@/data/careers";
import { readiness } from "@/lib/progress";
import {
  PageHeader,
  EmptyState,
  ButtonLink,
  ProgressBar,
  PrototypeNote,
} from "@/components/ui/primitives";
import { MatchRing } from "@/components/career/CareerCards";
export function ReadinessPage() {
  const { state } = useCareerAI();
  const career = getCareer(state.selectedCareer);
  if (!career)
    return (
      <EmptyState
        title="Choose a career to measure your progress"
        description="Your target path helps connect your skills, CV, portfolio, and practice into a useful progress guide."
        action="Choose a career"
        href="/careers"
      />
    );
  const r = readiness(state);
  const items = [
    {
      title: "Skill Readiness",
      value: r.skill,
      icon: Layers3,
      desc: "Average coverage of target skill levels using your self-ratings and roadmap practice credit.",
      href: "/skill-gap",
      action: "Review skill levels",
    },
    {
      title: "CV Readiness",
      value: r.cv,
      icon: FileText,
      desc: "Completeness of contact details, summary, education, projects, skills, and achievements.",
      href: "/cv-builder",
      action: "Improve my CV",
    },
    {
      title: "Portfolio Readiness",
      value: r.portfolio,
      icon: BriefcaseBusiness,
      desc: "Based on described projects, project context, and an optional portfolio link in your CV.",
      href: "/cv-builder",
      action: "Add a portfolio project",
    },
    {
      title: "Interview Readiness",
      value: r.interview,
      icon: MessagesSquare,
      desc: "Combines five-question session coverage and simulated feedback for this career. A new session starts this indicator over.",
      href: "/interview",
      action: "Practice my interview",
    },
  ];
  return (
    <>
      <PageHeader
        eyebrow="PROGRESS YOU CAN ACT ON"
        title="Your job readiness"
        description={`${career.name} · Bring your preparation into focus.`}
      >
        <ButtonLink href="/jobs" variant="secondary">
          Explore demo opportunities
        </ButtonLink>
      </PageHeader>
      <div className="readiness-grid">
        <section className="panel overall-readiness">
          <h2>Overall Readiness</h2>
          <MatchRing value={r.overall} label="Prototype score" large />
          <p>This is a prototype score based on your current progress.</p>
          <p style={{ marginTop: 14 }}>
            It is a learning guide, not an objective hiring prediction.
          </p>
          <ButtonLink href="/roadmap" className="mt-6">
            Take my next step
          </ButtonLink>
        </section>
        <div className="readiness-items">
          {items.map(({ title, value, icon: Icon, desc, href, action }) => (
            <section className="readiness-item" key={title}>
              <span className="career-icon">
                <Icon size={22} />
              </span>
              <div>
                <h3>
                  <span>{title}</span>
                  <span className="accent">{value}%</span>
                </h3>
                <ProgressBar value={value} label={title} />
                <p>{desc}</p>
                <ButtonLink href={href} variant="ghost">
                  {action}
                </ButtonLink>
              </div>
            </section>
          ))}
        </div>
      </div>
      <PrototypeNote>
        Overall score weights: skills 40%, CV 25%, portfolio 15%, interview
        practice 20%. Ratings are heuristic and self-reported.
      </PrototypeNote>
    </>
  );
}

````


## src/components/dashboard/StatCard.tsx

````tsx
"use client";
import type { LucideIcon } from "lucide-react";
import { ProgressBar } from "@/components/ui/primitives";
export function StatCard({
  label,
  value,
  icon: Icon,
  note,
  tone = "violet",
}: {
  label: string;
  value: number;
  icon: LucideIcon;
  note: string;
  tone?: string;
}) {
  return (
    <div className="panel stat-card">
      <div className="stat-card-top">
        <span>{label}</span>
        <Icon size={18} />
      </div>
      <strong>{value}%</strong>
      <ProgressBar value={value} label={label} tone={tone} />
      <small>{note}</small>
    </div>
  );
}

````


## src/components/interview/InterviewPage.tsx

````tsx
"use client";
import { useState } from "react";
import { MessagesSquare, Sparkles, Check, RotateCcw } from "lucide-react";
import { useCareerAI } from "@/hooks/useCareerAI";
import { careers, getCareer } from "@/data/careers";
import { getInterviewQuestions } from "@/data/interviewQuestions";
import { evaluateAnswer } from "@/lib/interviewEngine";
import {
  PageHeader,
  Button,
  ButtonLink,
  ProgressBar,
  Badge,
  PrototypeNote,
} from "@/components/ui/primitives";
import { Modal } from "@/components/ui/Modal";
import { InterviewFeedbackCard } from "./InterviewQuestionCard";
const roles: Record<string, string[]> = {
  "software-engineering": [
    "Frontend Developer",
    "React Developer",
    "Web Development Intern",
  ],
  "data-analytics": ["Data Analyst", "Reporting Analyst"],
  "ai-machine-learning": ["Machine Learning Intern", "Junior ML Engineer"],
  cybersecurity: ["Security Analyst", "Security Operations Intern"],
  "cloud-devops": ["DevOps Associate", "Cloud Support Associate"],
  "ui-ux-design": ["Product Designer", "UX Research Intern"],
  "digital-marketing": [
    "Digital Marketing Associate",
    "Content Marketing Associate",
  ],
  "finance-business-analytics": ["Business Analyst", "Financial Analyst"],
};
export function InterviewPage() {
  const { state } = useCareerAI();
  return (
    <>
      <PageHeader
        eyebrow="FIND YOUR VOICE"
        title="Interview practice"
        description="Five focused questions. Space to think. Practical feedback to try again."
      />
      {state.interview ? (
        <InterviewSession
          key={`${state.interview.careerSlug}-${state.interview.role}-${state.interview.kind}`}
        />
      ) : (
        <InterviewSetup />
      )}
      <PrototypeNote>
        Frontend simulation: feedback checks answer length, keywords, and
        structure. It may miss correct phrasing and does not measure actual
        interview ability.
      </PrototypeNote>
    </>
  );
}
function InterviewSetup() {
  const { state, setInterview } = useCareerAI();
  const [slug, setSlug] = useState(state.selectedCareer || careers[0].slug),
    [role, setRole] = useState(roles[slug][0]),
    [difficulty, setDifficulty] = useState("Junior"),
    [kind, setKind] = useState("Technical");
  return (
    <div className="panel interview-setup">
      <span className="career-icon" style={{ marginBottom: 20 }}>
        <MessagesSquare size={25} />
      </span>
      <h2>A little practice goes a long way.</h2>
      <p>
        Choose a path and role. Answer in your own words, then use the feedback
        to make your explanation clearer.
      </p>
      <div className="form-grid">
        <label>
          Career
          <select
            aria-label="Career"
            value={slug}
            onChange={(e) => {
              setSlug(e.target.value);
              setRole(roles[e.target.value][0]);
            }}
          >
            {careers.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Role
          <select
            aria-label="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            {roles[slug].map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </label>
        <label>
          Difficulty
          <select
            aria-label="Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option>Junior</option>
            <option>Intermediate</option>
          </select>
        </label>
        <label>
          Session type
          <select
            aria-label="Session type"
            value={kind}
            onChange={(e) => setKind(e.target.value)}
          >
            <option>Technical</option>
            <option>Behavioral</option>
          </select>
        </label>
      </div>
      <div className="inline-actions" style={{ marginTop: 27 }}>
        <Button
          onClick={() =>
            setInterview({
              careerSlug: slug,
              role,
              difficulty,
              kind,
              answers: [],
              finished: false,
            })
          }
        >
          <Sparkles size={16} />
          Start practice session
        </Button>
        <span className="muted text-small">5 questions · no timer</span>
      </div>
    </div>
  );
}
function InterviewSession() {
  const { state, setInterview } = useCareerAI();
  const session = state.interview!;
  const questions = getInterviewQuestions(session.careerSlug, session.kind);
  const [index, setIndex] = useState(
      Math.min(session.answers.length, questions.length - 1),
    ),
    [answer, setAnswer] = useState(""),
    [restart, setRestart] = useState(false);
  const question = questions[index],
    saved = session.answers[index];
  const submit = () => {
    if (answer.trim().length < 20) return;
    const feedback = evaluateAnswer(question, answer, session.difficulty);
    setInterview({
      ...session,
      answers: [
        ...session.answers.slice(0, index),
        { questionId: question.id, answer: answer.trim(), feedback },
      ],
    });
  };
  const next = () => {
    if (index === questions.length - 1)
      setInterview({ ...session, finished: true });
    else {
      setIndex((i) => i + 1);
      setAnswer("");
    }
  };
  const averages = { technical: 0, clarity: 0, completeness: 0 };
  if (session.answers.length) {
    for (const key of ["technical", "clarity", "completeness"] as const)
      averages[key] = Math.round(
        session.answers.reduce((sum, a) => sum + a.feedback[key], 0) /
          session.answers.length,
      );
  }
  return (
    <>
      {session.finished ? (
        <div className="interview-summary">
          <section className="panel summary-hero">
            <span className="career-icon">
              <Check size={29} />
            </span>
            <Badge tone="mint">Session complete</Badge>
            <h2 style={{ marginTop: 18 }}>You showed up. That’s progress.</h2>
            <p>
              {session.role} · {session.difficulty} · {session.kind}
            </p>
            <div className="feedback-grid">
              {[
                { label: "Technical understanding", value: averages.technical },
                { label: "Clarity", value: averages.clarity },
                { label: "Completeness", value: averages.completeness },
              ].map(({ label, value }) => (
                <div className="feedback-score" key={label}>
                  <span>
                    {label}
                    <strong>{value}%</strong>
                  </span>
                  <ProgressBar value={value} label={label} />
                </div>
              ))}
            </div>
            <p className="text-small">
              Review your answers, compare the sample explanations, and practice
              one improvement at a time.
            </p>
            <div
              className="inline-actions"
              style={{ justifyContent: "center", marginTop: 23 }}
            >
              <Button onClick={() => setRestart(true)}>
                <RotateCcw size={15} />
                Practice again
              </Button>
              <ButtonLink href="/readiness" variant="secondary">
                View my readiness
              </ButtonLink>
            </div>
          </section>
          {session.answers.map((a, i) => (
            <details className="panel summary-question" key={a.questionId}>
              <summary>
                {i + 1}. {questions[i].question}
              </summary>
              <p>{a.answer}</p>
              <InterviewFeedbackCard
                feedback={a.feedback}
                question={questions[i]}
              />
            </details>
          ))}
        </div>
      ) : (
        <div className="interview-session">
          <div
            className="inline-actions"
            style={{ justifyContent: "space-between", marginBottom: 18 }}
          >
            <span className="muted text-small">
              {session.role} · {session.difficulty} · {session.kind}
            </span>
            <Button variant="ghost" onClick={() => setRestart(true)}>
              Change session
            </Button>
          </div>
          {state.selectedCareer &&
            state.selectedCareer !== session.careerSlug && (
              <p className="prototype-note">
                This session is for {getCareer(session.careerSlug)?.name}. Start
                a new session to practice your selected career.
              </p>
            )}
          <div className="panel interview-question">
            <div className="flow-step-count">
              <span>
                Question {index + 1} of {questions.length}
              </span>
              <Badge>{session.answers.length} answered</Badge>
            </div>
            <ProgressBar
              value={(session.answers.length / questions.length) * 100}
              label="Interview session progress"
            />
            <h2>{question.question}</h2>
            <p>
              {session.difficulty === "Intermediate"
                ? `${question.hint} ${question.followUp}`
                : question.hint}
            </p>
            <label htmlFor="interview-answer">Your answer</label>
            <textarea
              id="interview-answer"
              style={{ marginTop: 8 }}
              value={saved?.answer ?? answer}
              readOnly={!!saved}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Start with the main idea, explain why, and give an example…"
            />
            <div className="interview-bottom">
              <span>
                {
                  (saved?.answer ?? answer).trim().split(/\s+/).filter(Boolean)
                    .length
                }{" "}
                words ·{" "}
                {session.difficulty === "Intermediate"
                  ? "Aim for 90+ words and a tradeoff"
                  : "Aim for 45+ words with an example"}
              </span>
              {saved ? (
                <Button onClick={next}>
                  {index === questions.length - 1
                    ? "See my session summary"
                    : "Next Question"}
                </Button>
              ) : (
                <Button onClick={submit} disabled={answer.trim().length < 20}>
                  Submit answer
                </Button>
              )}
            </div>
            {saved && (
              <InterviewFeedbackCard
                feedback={saved.feedback}
                question={question}
              />
            )}
          </div>
        </div>
      )}
      {restart && (
        <Modal
          title="Start a new practice session?"
          onClose={() => setRestart(false)}
        >
          <p>
            Your current session and its readiness contribution will be
            replaced. You can choose another career, role, or difficulty.
          </p>
          <div className="modal-actions">
            <Button variant="secondary" onClick={() => setRestart(false)}>
              Keep this session
            </Button>
            <Button
              onClick={() => {
                setInterview(null);
                setRestart(false);
              }}
            >
              Start a new session
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
}

````


## src/components/interview/InterviewQuestionCard.tsx

````tsx
"use client";
import type { InterviewFeedback } from "@/types/user";
import type { InterviewQuestion } from "@/data/interviewQuestions";
import { ProgressBar, CheckList, Badge } from "@/components/ui/primitives";
export function InterviewFeedbackCard({
  feedback,
  question,
}: {
  feedback: InterviewFeedback;
  question: InterviewQuestion;
}) {
  return (
    <div className="feedback-panel">
      <Badge tone="violet">Simulated practice feedback</Badge>
      <div className="feedback-grid">
        {[
          { label: "Technical understanding", value: feedback.technical },
          { label: "Clarity", value: feedback.clarity },
          { label: "Completeness", value: feedback.completeness },
        ].map(({ label, value }) => (
          <div className="feedback-score" key={label}>
            <span>
              {label}
              <strong>{value}%</strong>
            </span>
            <ProgressBar value={value} label={label} />
          </div>
        ))}
      </div>
      <div className="feedback-content">
        <div>
          <h3>What worked</h3>
          <CheckList
            items={
              feedback.positives.length
                ? feedback.positives
                : [
                    "You made a start. Use this feedback to develop your explanation.",
                  ]
            }
          />
        </div>
        <div>
          <h3>What to develop</h3>
          <ul>
            {(feedback.improvements.length
              ? feedback.improvements
              : [
                  "Practice a follow-up: explain a tradeoff and how you would verify your reasoning.",
                ]
            ).map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
      <details className="sample-answer">
        <summary>Explore a sample answer</summary>
        <p>{question.sample}</p>
        <p>
          <strong>Try a follow-up:</strong> {question.followUp}
        </p>
      </details>
    </div>
  );
}

````


## src/components/jobs/JobCard.tsx

````tsx
"use client";
import {
  Bookmark,
  MapPin,
  Clock3,
  Check,
  AlertTriangle,
  BriefcaseBusiness,
} from "lucide-react";
import type { Job } from "@/types/job";
import { skillName } from "@/data/skills";
import { useCareerAI } from "@/hooks/useCareerAI";
import { skillLevel } from "@/lib/progress";
import { Button, Badge } from "@/components/ui/primitives";
export function JobCard({
  job,
  onDetails,
}: {
  job: Job;
  onDetails: (job: Job, apply: boolean) => void;
}) {
  const { state, toggleSavedJob } = useCareerAI();
  const matches = job.skills.filter((s) => skillLevel(state, s) >= 40),
    saved = state.savedJobs.includes(job.id);
  return (
    <article className="panel job-card">
      <div className="job-heading">
        <div>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
        </div>
        <button
          className={`icon-btn ${saved ? "saved" : ""}`}
          aria-label={saved ? `Unsave ${job.title}` : `Save ${job.title}`}
          aria-pressed={saved}
          onClick={() => toggleSavedJob(job.id)}
        >
          <Bookmark size={19} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="job-meta">
        <span>
          <MapPin size={14} />
          {job.location}
        </span>
        <span>
          <BriefcaseBusiness size={14} />
          {job.workType}
        </span>
        <span>
          <Clock3 size={14} />
          {job.experience}
        </span>
      </div>
      <div className="job-salary">
        {job.salary} <small className="muted">· illustrative range</small>
      </div>
      <div className="job-match-title">
        <span>Why this matches you</span>
        <Badge tone="violet">
          {matches.length}/{job.skills.length} skills at 40%+
        </Badge>
      </div>
      <div className="job-skills">
        {job.skills.map((id) => (
          <span
            className={matches.includes(id) ? "matched" : "missing"}
            key={id}
          >
            {matches.includes(id) ? (
              <Check size={13} />
            ) : (
              <AlertTriangle size={13} />
            )}{" "}
            {skillName(id)}
          </span>
        ))}
      </div>
      <div className="inline-actions">
        <Button variant="secondary" onClick={() => onDetails(job, false)}>
          View details
        </Button>
        <Button onClick={() => onDetails(job, true)}>Demo application</Button>
      </div>
    </article>
  );
}

````


## src/components/jobs/JobsPage.tsx

````tsx
"use client";
import { useState } from "react";
import { Search, Info, CheckCircle2 } from "lucide-react";
import type { Job } from "@/types/job";
import { jobs } from "@/data/jobs";
import { careers } from "@/data/careers";
import { useCareerAI } from "@/hooks/useCareerAI";
import {
  PageHeader,
  Button,
  ButtonLink,
  EmptyState,
  Badge,
  CheckList,
} from "@/components/ui/primitives";
import { Modal } from "@/components/ui/Modal";
import { JobCard } from "./JobCard";
export function JobsPage() {
  const { state, toggleSavedJob } = useCareerAI();
  const [query, setQuery] = useState(""),
    [work, setWork] = useState("All work styles"),
    [career, setCareer] = useState("All careers"),
    [savedOnly, setSavedOnly] = useState(false),
    [selected, setSelected] = useState<Job | null>(null),
    [applying, setApplying] = useState(false),
    [submitted, setSubmitted] = useState(false);
  const filtered = jobs.filter(
    (j) =>
      `${j.title} ${j.company} ${j.location}`
        .toLowerCase()
        .includes(query.toLowerCase()) &&
      (work === "All work styles" || work === j.workType) &&
      (career === "All careers" || career === j.careerSlug) &&
      (!savedOnly || state.savedJobs.includes(j.id)),
  );
  const show = (job: Job, apply: boolean) => {
    setSelected(job);
    setApplying(apply);
    setSubmitted(false);
  };
  return (
    <>
      <PageHeader
        eyebrow="CONNECT SKILLS WITH POSSIBILITIES"
        title="Explore opportunities"
        description="Practice comparing role requirements with the skills you are building."
      >
        <ButtonLink href="/readiness" variant="secondary">
          Check my readiness
        </ButtonLink>
      </PageHeader>
      <div className="jobs-notice">
        <Info size={21} />
        <span>
          <strong>Demo jobs only.</strong> Companies, openings, and salary
          ranges below are fictional examples. Applications stay in this
          prototype and are never sent to an employer.
        </span>
      </div>
      <div className="filter-bar">
        <label className="search-input">
          <span className="sr-only">Search demo jobs</span>
          <Search size={19} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search role or location…"
          />
        </label>
        <label className="filter-select">
          <span className="sr-only">Filter by career</span>
          <select
            aria-label="Filter by career"
            value={career}
            onChange={(e) => setCareer(e.target.value)}
          >
            <option>All careers</option>
            {careers.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <label className="filter-select">
          <span className="sr-only">Filter by work style</span>
          <select
            aria-label="Filter by work style"
            value={work}
            onChange={(e) => setWork(e.target.value)}
          >
            {["All work styles", "Remote", "Hybrid", "On-site"].map((w) => (
              <option key={w}>{w}</option>
            ))}
          </select>
        </label>
        <button
          className={`filter-chip ${savedOnly ? "active" : ""}`}
          aria-pressed={savedOnly}
          onClick={() => setSavedOnly((s) => !s)}
        >
          Saved ({state.savedJobs.length})
        </button>
      </div>
      <p className="text-small muted" style={{ marginBottom: 18 }}>
        {filtered.length} demo opportunities
      </p>
      {filtered.length ? (
        <div className="jobs-grid">
          {filtered.map((job) => (
            <JobCard key={job.id} job={job} onDetails={show} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No opportunities in this view"
          description="Try another career or work style, or save a demo job to find it here."
        >
          <Button
            variant="secondary"
            onClick={() => {
              setQuery("");
              setWork("All work styles");
              setCareer("All careers");
              setSavedOnly(false);
            }}
          >
            Reset filters
          </Button>
        </EmptyState>
      )}
      {selected && (
        <Modal
          title={applying ? "Practice an application" : selected.title}
          onClose={() => setSelected(null)}
        >
          <div className="job-modal-details">
            <Badge tone="violet">Fictional demo listing</Badge>
            <h3>{selected.title}</h3>
            <p>
              {selected.company}
              <br />
              {selected.location} · {selected.workType} · {selected.experience}
              <br />
              {selected.salary} (illustrative)
            </p>
            <p style={{ marginTop: 15 }}>{selected.description}</p>
            <h3>Typical responsibilities</h3>
            <CheckList items={selected.responsibilities} />
            {applying ? (
              <>
                {submitted ? (
                  <div className="job-demo-success" role="status">
                    <CheckCircle2 size={30} />
                    <h3>Demo application completed</h3>
                    <p>
                      This was a practice step. Nothing was sent to a company.
                    </p>
                    <ButtonLink href="/interview" variant="ghost">
                      Prepare for an interview
                    </ButtonLink>
                  </div>
                ) : (
                  <>
                    <h3>Application preview</h3>
                    <p>
                      {state.cv.name || state.profile.name || "Your name"} ·{" "}
                      {state.cv.email || "Add an email in your CV"}
                    </p>
                    <p style={{ marginTop: 12 }}>
                      Your CV is saved on this device. Review it before
                      practicing the final step.
                    </p>
                    <div className="modal-actions">
                      <ButtonLink href="/cv-builder" variant="secondary">
                        Review my CV
                      </ButtonLink>
                      <Button onClick={() => setSubmitted(true)}>
                        Complete demo application
                      </Button>
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="modal-actions">
                <Button
                  variant="secondary"
                  onClick={() => toggleSavedJob(selected.id)}
                >
                  {state.savedJobs.includes(selected.id)
                    ? "Unsave opportunity"
                    : "Save opportunity"}
                </Button>
                <Button onClick={() => setApplying(true)}>
                  Practice application
                </Button>
              </div>
            )}
          </div>
        </Modal>
      )}
    </>
  );
}

````


## src/components/layout/AgentTools.tsx

````tsx
"use client";
import { useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import { useCareerAI } from "@/hooks/useCareerAI";
import { getCareer } from "@/data/careers";
import { roadmapProgress } from "@/lib/progress";
interface BrowserTool {
  name: string;
  description: string;
  inputSchema: object;
  annotations: { readOnlyHint: boolean; untrustedContentHint: boolean };
  execute: (input: unknown) => unknown;
}
type ToolDocument = Document & {
  modelContext?: {
    registerTool: (
      tool: BrowserTool,
      options: { signal: AbortSignal },
    ) => void | Promise<void>;
  };
};
// Optional, feature-detected browser standard. Never contacts a server.
export function AgentTools() {
  const api = useCareerAI(),
    latest = useRef(api);
  latest.current = api;
  useEffect(() => {
    const registry = (document as ToolDocument).modelContext;
    if (!registry?.registerTool) return;
    const lifecycle = new AbortController();
    const tools: BrowserTool[] = [
      {
        name: "read_career_workspace",
        description:
          "Read the selected career and roadmap progress from this local workspace.",
        inputSchema: {
          type: "object",
          properties: {},
          additionalProperties: false,
        },
        annotations: { readOnlyHint: true, untrustedContentHint: false },
        execute: () => ({
          career: latest.current.state.selectedCareer || null,
          roadmapProgress: roadmapProgress(latest.current.state),
          assessmentAnswers: Object.keys(latest.current.state.assessment)
            .length,
        }),
      },
      {
        name: "select_career_path",
        description:
          "Choose a valid career path, updating the same skill gap, roadmap, and dashboard as the visible career selection button.",
        inputSchema: {
          type: "object",
          properties: { slug: { type: "string" } },
          required: ["slug"],
          additionalProperties: false,
        },
        annotations: { readOnlyHint: false, untrustedContentHint: false },
        execute: (input) => {
          const slug =
            input && typeof input === "object" && "slug" in input
              ? (input as { slug: unknown }).slug
              : null;
          if (typeof slug !== "string" || !getCareer(slug))
            throw new Error("Choose a valid career slug.");
          flushSync(() => latest.current.selectCareer(slug));
          return {
            career: latest.current.state.selectedCareer,
            roadmapProgress: roadmapProgress(latest.current.state),
          };
        },
      },
    ];
    for (const tool of tools) {
      try {
        void Promise.resolve(
          registry.registerTool(tool, { signal: lifecycle.signal }),
        ).catch(() => undefined);
      } catch {
        /* Unsupported implementations leave normal UI intact. */
      }
    }
    return () => lifecycle.abort();
  }, []);
  return null;
}

````


## src/components/layout/AppShell.tsx

````tsx
"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import {
  LayoutDashboard,
  Compass,
  Layers3,
  Route,
  FileText,
  MessagesSquare,
  BriefcaseBusiness,
  Gauge,
  Sun,
  Moon,
  Menu,
  X,
  Sparkles,
  RotateCcw,
  ChevronDown,
} from "lucide-react";
import { useCareerAI } from "@/hooks/useCareerAI";
import { getCareer } from "@/data/careers";
import { Modal } from "@/components/ui/Modal";
import {
  Button,
  ButtonLink,
  ProgressBar,
  Reveal,
} from "@/components/ui/primitives";
import { roadmapProgress } from "@/lib/progress";
const nav = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/results", label: "Career profile", icon: Compass },
  { href: "/skill-gap", label: "Skill gap", icon: Layers3 },
  { href: "/roadmap", label: "My roadmap", icon: Route },
  { href: "/cv-builder", label: "CV builder", icon: FileText },
  { href: "/interview", label: "Interview practice", icon: MessagesSquare },
  { href: "/jobs", label: "Demo opportunities", icon: BriefcaseBusiness },
  { href: "/readiness", label: "Job readiness", icon: Gauge },
];
export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="CareerAI home">
      <span className="logo-mark">
        <Sparkles size={22} />
      </span>
      <span>
        Career<span className="logo-ai">AI</span>
      </span>
    </Link>
  );
}
export function AppShell({ children }: { children: ReactNode }) {
  const path = usePathname().replace(/\/$/, "") || "/",
    router = useRouter();
  const {
    state,
    hydrated,
    toggleTheme,
    loadDemo,
    reset,
    toast,
    warning,
    dismissWarning,
  } = useCareerAI();
  const [menu, setMenu] = useState(false),
    [resetDialog, setResetDialog] = useState(false);
  const publicRoute = ["/", "/onboarding", "/assessment"].includes(path);
  useEffect(() => {
    if (!menu) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = document.querySelector<HTMLElement>(".sidebar .side-link");
    first?.focus();
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(false);
    };
    document.addEventListener("keydown", escape);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", escape);
      previous?.focus();
    };
  }, [menu]);
  const career = getCareer(state.selectedCareer);
  const demo = () => {
    loadDemo();
    router.push("/dashboard");
    setMenu(false);
  };
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      {publicRoute ? (
        <header className="public-nav">
          <div className="container nav-inner">
            <Logo />
            <nav className="landing-links" aria-label="Main navigation">
              <Link href="/careers">Explore careers</Link>
              <Link href="/#how-it-works">How it works</Link>
              {state.profile.onboarded && (
                <Link href="/dashboard">My dashboard</Link>
              )}
            </nav>
            <div className="nav-actions">
              <button
                className="icon-btn"
                onClick={toggleTheme}
                aria-label={`Switch to ${state.theme === "dark" ? "light" : "dark"} mode`}
              >
                {state.theme === "dark" ? (
                  <Sun size={19} />
                ) : (
                  <Moon size={19} />
                )}
              </button>
              <Button variant="secondary" onClick={demo}>
                Try Demo
              </Button>
            </div>
          </div>
        </header>
      ) : (
        <>
          <aside
            className={`sidebar ${menu ? "sidebar-open" : ""}`}
            aria-label="Product navigation"
          >
            <div className="sidebar-top">
              <Logo />
              <button
                className="icon-btn mobile-only"
                onClick={() => setMenu(false)}
                aria-label="Close navigation"
              >
                <X size={20} />
              </button>
            </div>
            <p className="sidebar-caption">YOUR WORKSPACE</p>
            <nav>
              {nav.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenu(false)}
                  className={`side-link ${path === href ? "active" : ""}`}
                  aria-current={path === href ? "page" : undefined}
                >
                  <Icon size={19} />
                  {label}
                </Link>
              ))}
            </nav>
            <div className="sidebar-bottom">
              {career ? (
                <div className="sidebar-progress">
                  <span>Your next chapter</span>
                  <strong>{career.shortName}</strong>
                  <ProgressBar
                    value={roadmapProgress(state)}
                    label="Roadmap completion"
                  />
                  <small>{roadmapProgress(state)}% of roadmap complete</small>
                  <Link href="/roadmap">Keep learning</Link>
                </div>
              ) : (
                <div className="sidebar-progress">
                  <Sparkles size={22} />
                  <strong>Your future starts here.</strong>
                  <Link href="/onboarding">Build your profile</Link>
                </div>
              )}
              <button
                className="profile-chip"
                onClick={() => setResetDialog(true)}
                aria-label="Manage your local profile"
              >
                <span className="avatar">
                  {state.profile.name?.slice(0, 1) || "Y"}
                </span>
                <span>
                  <strong>{state.profile.name || "Your profile"}</strong>
                  <small>
                    {state.demo ? "Demo workspace" : "Local workspace"}
                  </small>
                </span>
                <ChevronDown size={16} />
              </button>
            </div>
          </aside>
          {menu && (
            <button
              className="drawer-backdrop"
              aria-label="Close navigation"
              onClick={() => setMenu(false)}
            />
          )}
          <header className="workspace-header">
            <div className="breadcrumb">
              <button
                className="icon-btn mobile-only"
                onClick={() => setMenu(true)}
                aria-label="Open navigation"
                aria-expanded={menu}
              >
                <Menu size={22} />
              </button>
              <Link href="/dashboard">Workspace</Link>
              <span>/</span>
              <span>
                {nav.find((n) => n.href === path)?.label ??
                  (path.startsWith("/careers/")
                    ? "Career details"
                    : "Explore careers")}
              </span>
            </div>
            <div className="nav-actions">
              <span className="local-pill">
                {state.demo ? "Demo profile" : "Saved on this device"}
              </span>
              <button
                className="icon-btn"
                onClick={toggleTheme}
                aria-label={`Switch to ${state.theme === "dark" ? "light" : "dark"} mode`}
              >
                {state.theme === "dark" ? (
                  <Sun size={19} />
                ) : (
                  <Moon size={19} />
                )}
              </button>
              <Link
                className="icon-btn"
                href="/readiness"
                aria-label="View job readiness"
              >
                <Gauge size={20} />
              </Link>
            </div>
          </header>
          <nav className="mobile-bottom-nav" aria-label="Quick navigation">
            {[nav[0], nav[3], nav[4], nav[5]].map(
              ({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  aria-current={path === href ? "page" : undefined}
                  className={path === href ? "active" : ""}
                >
                  <Icon size={21} />
                  <span>
                    {label === "Interview practice"
                      ? "Interview"
                      : label === "My roadmap"
                        ? "Roadmap"
                        : label}
                  </span>
                </Link>
              ),
            )}
            <button onClick={() => setMenu(true)}>
              <Menu size={21} />
              <span>More</span>
            </button>
          </nav>
        </>
      )}
      <main
        id="main-content"
        className={publicRoute ? "public-main" : "workspace-main"}
      >
        {warning && (
          <div className="storage-warning" role="alert">
            {warning}
            <button
              className="icon-btn"
              onClick={dismissWarning}
              aria-label="Dismiss storage warning"
            >
              <X size={17} />
            </button>
          </div>
        )}
        {!hydrated && path !== "/" ? (
          <div className="loading-state" aria-live="polite">
            <span className="spinner" />
            Restoring your workspace…
          </div>
        ) : publicRoute ? (
          children
        ) : (
          <Reveal key={path}>{children}</Reveal>
        )}
      </main>
      {publicRoute && (
        <footer className="public-footer container">
          <Logo />
          <p>Discover your skills. Find your path. Build your future.</p>
          <span>Made for the next generation in Bangladesh.</span>
        </footer>
      )}
      <div
        className={`toast ${toast ? "toast-visible" : ""}`}
        role="status"
        aria-live="polite"
      >
        {toast}
      </div>
      {resetDialog && (
        <Modal title="Your local profile" onClose={() => setResetDialog(false)}>
          <p className="muted">
            Your profile and progress are saved in this browser. Loading the
            demo or starting fresh replaces the current profile, CV, and
            practice session.
          </p>
          <div className="modal-actions">
            <Button
              variant="secondary"
              onClick={() => {
                demo();
                setResetDialog(false);
              }}
            >
              Load Zahid’s demo
            </Button>
            <Button
              onClick={() => {
                reset();
                setResetDialog(false);
                router.push("/onboarding");
              }}
            >
              <RotateCcw size={16} />
              Start fresh
            </Button>
          </div>
          <ButtonLink href="/onboarding" variant="ghost">
            Edit my profile
          </ButtonLink>
        </Modal>
      )}
    </>
  );
}

````


## src/components/layout/LandingPage.tsx

````tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  Check,
  Fingerprint,
  ScanLine,
  Compass,
  Layers3,
  Route,
  Flag,
  FileText,
  MessagesSquare,
  GraduationCap,
  Globe2,
  MapPin,
  Gauge,
} from "lucide-react";
import { useCareerAI } from "@/hooks/useCareerAI";
import {
  Button,
  ButtonLink,
  CareerIcon,
  Badge,
} from "@/components/ui/primitives";
import { careers } from "@/data/careers";
const pathSteps = [
  {
    label: "Profile",
    icon: Fingerprint,
    desc: "Start with your interests, skills, and the way you like to work.",
  },
  {
    label: "Assessment",
    icon: ScanLine,
    desc: "Ten thoughtful questions to understand what motivates you.",
  },
  {
    label: "Career",
    icon: Compass,
    desc: "Explore paths that connect with your strengths and curiosity.",
  },
  {
    label: "Skill gap",
    icon: Layers3,
    desc: "See where you are now and which skills deserve your attention.",
  },
  {
    label: "Roadmap",
    icon: Route,
    desc: "Turn a career goal into small, achievable learning tasks.",
  },
  {
    label: "Job ready",
    icon: Flag,
    desc: "Build a portfolio, shape your CV, and practice your interview.",
  },
];
const features = [
  {
    icon: Compass,
    title: "AI Career Assessment",
    desc: "Explore where your interests and strengths connect. Transparent, response-based matches.",
    href: "/onboarding",
  },
  {
    icon: Layers3,
    title: "Skill Gap Analysis",
    desc: "Know what to focus on next, with a clear view of your current and target skills.",
    href: "/skill-gap",
  },
  {
    icon: Route,
    title: "Personalized Roadmap",
    desc: "A practical learning plan shaped around your target career and available time.",
    href: "/roadmap",
  },
  {
    icon: FileText,
    title: "CV Builder",
    desc: "Turn your projects and experience into a clear, confident CV with guided suggestions.",
    href: "/cv-builder",
  },
  {
    icon: MessagesSquare,
    title: "Interview Practice",
    desc: "Find your voice with role-specific questions and instant simulated feedback.",
    href: "/interview",
  },
  {
    icon: Gauge,
    title: "Job Readiness",
    desc: "Bring your skill, CV, portfolio, and practice progress into one useful view.",
    href: "/readiness",
  },
];
export function LandingPage() {
  const [active, setActive] = useState(2);
  const { loadDemo, state } = useCareerAI();
  const router = useRouter();
  const reduce = useReducedMotion();
  const demo = () => {
    loadDemo();
    router.push("/dashboard");
  };
  const StepIcon = pathSteps[active].icon;
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <Badge tone="violet">
            <Sparkles size={14} />A clearer path to your future
          </Badge>
          <h1>
            Your Career,
            <br />
            <span>Powered by AI.</span>
          </h1>
          <p>
            Discover the skills you have, identify the skills you need, and
            build a personalized path toward your future career.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/onboarding">Start Career Assessment</ButtonLink>
            <ButtonLink href="/careers" variant="secondary">
              Explore Careers
            </ButtonLink>
          </div>
          <div className="hero-assurance">
            <span>
              <Check size={15} />
              No sign-up needed
            </span>
            <span>
              <Check size={15} />
              Built for Bangladesh
            </span>
          </div>
          <button className="text-link hero-demo" onClick={demo}>
            Just exploring? Try Zahid’s demo profile
          </button>
        </div>
        <motion.div
          className="path-visual"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="path-topline">
            <span>
              <Sparkles size={17} /> YOUR CAREER COMPASS
            </span>
            <span className="tiny-badge">6 connected steps</span>
          </div>
          <div className="path-nodes">
            {pathSteps.map(({ label, icon: Icon }, i) => (
              <button
                key={label}
                onClick={() => setActive(i)}
                className={`path-node ${i === active ? "selected" : ""} ${i < active ? "past" : ""}`}
                aria-pressed={active === i}
              >
                <span className="path-node-icon">
                  <Icon size={21} />
                </span>
                <span>{label}</span>
              </button>
            ))}
          </div>
          <div className="path-current">
            <span className="path-current-icon">
              <StepIcon size={26} />
            </span>
            <span>
              <small>YOUR NEXT CHAPTER</small>
              <h3>
                {active === 2
                  ? "Software Engineering"
                  : pathSteps[active].label}
              </h3>
              <p>{pathSteps[active].desc}</p>
            </span>
          </div>
          <div className="path-mini-grid">
            <div>
              <span className="mini-caption">START WITH WHAT YOU KNOW</span>
              <div className="skill-tags">
                <span>JavaScript</span>
                <span>Problem solving</span>
                <span>Curiosity</span>
              </div>
            </div>
            <div className="mini-roadmap">
              <span className="mini-caption">GROW ONE STEP AT A TIME</span>
              <span>
                <Check size={15} /> Discover your strengths
              </span>
              <span>
                <span className="step-ring" /> Build your first project
              </span>
              <span className="muted">
                <span className="step-ring" /> Share your portfolio
              </span>
            </div>
          </div>
          <div className="visual-footnote">
            <span className="sparkle-dot">
              <Sparkles size={14} />
            </span>
            A path built around you. A future built by you.
          </div>
        </motion.div>
      </section>
      <div className="audience-strip container">
        <span>BIG AMBITIONS. A PRACTICAL FIRST STEP.</span>
        <div>
          <GraduationCap size={20} />
          Students & graduates
        </div>
        <div>
          <MapPin size={20} />
          Local opportunities
        </div>
        <div>
          <Globe2 size={20} />
          Remote possibilities
        </div>
      </div>
      <section id="how-it-works" className="landing-section container">
        <div className="section-heading">
          <div className="eyebrow">FROM UNSURE TO A PLAN</div>
          <h2>Your next chapter, in five steps.</h2>
          <p>You do not need every answer today. Just a place to start.</p>
        </div>
        <div className="how-grid">
          {[
            {
              title: "Discover yourself",
              desc: "Reflect on your interests and the work you enjoy.",
              icon: Fingerprint,
            },
            {
              title: "Understand your skills",
              desc: "Recognize the strengths you already bring.",
              icon: ScanLine,
            },
            {
              title: "Find your career path",
              desc: "Compare careers and choose a direction to explore.",
              icon: Compass,
            },
            {
              title: "Build your roadmap",
              desc: "Break your goal into clear, achievable tasks.",
              icon: Route,
            },
            {
              title: "Get job ready",
              desc: "Prepare your CV, portfolio, and interview answers.",
              icon: Flag,
            },
          ].map(({ title, desc, icon: Icon }, i) => (
            <div key={title} className="how-step">
              <span className="how-number">0{i + 1}</span>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="landing-section feature-section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">ONE CONNECTED WORKSPACE</div>
            <h2>Less guesswork. More forward.</h2>
            <p>
              Everything you need to move from a career question to a concrete
              next step.
            </p>
          </div>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, desc, href }) => (
              <Link className="feature-card" href={href} key={title}>
                <span className="feature-icon">
                  <Icon size={23} />
                </span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="feature-link">
                  Explore {title.toLowerCase()}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="landing-section container">
        <div className="section-heading heading-row">
          <div>
            <div className="eyebrow">FOLLOW YOUR CURIOSITY</div>
            <h2>Different strengths. Different paths.</h2>
          </div>
          <ButtonLink variant="secondary" href="/careers">
            Explore all careers
          </ButtonLink>
        </div>
        <div className="category-grid">
          {careers.map((c) => (
            <Link
              href={`/careers/${c.slug}`}
              className="category-card"
              key={c.slug}
            >
              <span className={`career-icon icon-${c.color}`}>
                <CareerIcon name={c.icon} />
              </span>
              <h3>{c.name}</h3>
              <p>{c.category}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="bangladesh-section container">
        <div>
          <Badge tone="mint">
            <MapPin size={14} />A local perspective. A world of possibility.
          </Badge>
          <h2>
            Built for Bangladesh’s
            <br />
            next generation.
          </h2>
          <p>
            From your campus in Dhaka to your first remote project, your journey
            deserves a plan that fits your life.
          </p>
        </div>
        <div className="bangladesh-list">
          <div>
            <GraduationCap size={25} />
            <span>
              <h3>Start where you are</h3>
              <p>
                For students, fresh graduates, and early-career professionals.
                No experience required to explore.
              </p>
            </span>
          </div>
          <div>
            <Globe2 size={25} />
            <span>
              <h3>Think beyond one destination</h3>
              <p>
                Explore local teams and remote work styles, then build
                transferable skills at your own pace.
              </p>
            </span>
          </div>
          <div>
            <Route size={25} />
            <span>
              <h3>Make time work for you</h3>
              <p>
                Whether you have 30 minutes or two hours a day, your roadmap
                turns progress into manageable steps.
              </p>
            </span>
          </div>
        </div>
      </section>
      <section className="final-cta container">
        <span className="cta-symbol">
          <Sparkles size={31} />
        </span>
        <div className="eyebrow">YOUR FUTURE IS STILL UNWRITTEN</div>
        <h2>Let’s give it a direction.</h2>
        <p>Discover your skills. Find your path. Build your future.</p>
        <ButtonLink href={state.profile.onboarded ? "/results" : "/onboarding"}>
          Build Your Career Roadmap
        </ButtonLink>
        <small>Frontend prototype · transparent matching · no sign-up</small>
      </section>
    </>
  );
}

````


## src/components/roadmap/RoadmapPage.tsx

````tsx
"use client";
import { useState } from "react";
import { Check, ChevronDown, ChevronUp, Clock3 } from "lucide-react";
import { useCareerAI } from "@/hooks/useCareerAI";
import { getCareer } from "@/data/careers";
import { getRoadmap } from "@/data/roadmaps";
import { skillName } from "@/data/skills";
import { roadmapProgress, learningMinutes } from "@/lib/progress";
import {
  PageHeader,
  Button,
  ButtonLink,
  EmptyState,
  ProgressBar,
  Badge,
} from "@/components/ui/primitives";
import { TargetCareerSelect } from "@/components/career/TargetCareerSelect";
export function RoadmapPage() {
  const { state } = useCareerAI();
  const career = getCareer(state.selectedCareer);
  if (!career)
    return (
      <EmptyState
        title="Give your roadmap a destination"
        description="Choose a career path to get a practical plan with learning goals, projects, and tasks you can check off."
        action="Choose my career"
        href="/careers"
      />
    );
  return <RoadmapContent key={career.slug} />;
}
function RoadmapContent() {
  const { state, toggleTask, updateProfile } = useCareerAI(),
    career = getCareer(state.selectedCareer)!,
    roadmap = getRoadmap(career.slug)!,
    completed = state.completedTasks[career.slug] ?? [];
  const [expanded, setExpanded] = useState<string[]>(() => [
    roadmap.phases.find((p) => !p.tasks.every((t) => completed.includes(t.id)))
      ?.id ?? roadmap.phases[0].id,
  ]);
  const total = roadmap.phases.reduce((n, p) => n + p.tasks.length, 0),
    remainingHours = roadmap.phases.reduce(
      (n, p) =>
        n +
        p.hours *
          (1 -
            p.tasks.filter((t) => completed.includes(t.id)).length /
              p.tasks.length),
      0,
    ),
    days = Math.ceil(
      (remainingHours * 60) / learningMinutes(state.profile.learningTime),
    );
  return (
    <>
      <PageHeader
        eyebrow="SMALL STEPS. REAL MOMENTUM."
        title="Your personalized roadmap"
        description={`${career.name} · A practical path you can work through at your own pace.`}
      >
        <ButtonLink href="/dashboard" variant="secondary">
          Back to dashboard
        </ButtonLink>
      </PageHeader>
      <TargetCareerSelect />
      <div className="panel roadmap-summary">
        <div>
          <h2>Your future, one task at a time.</h2>
          <p>
            {days
              ? `About ${days} learning days remaining at ${state.profile.learningTime.toLowerCase()}. These are flexible estimates.`
              : "You completed every task. Review your portfolio and practice your interview."}
          </p>
          <label
            className="inline-actions text-small"
            style={{ marginTop: 15 }}
          >
            Learning time
            <select
              aria-label="Learning time"
              style={{
                width: 155,
                minHeight: 38,
                padding: "6px 10px",
                fontSize: 14,
              }}
              value={state.profile.learningTime}
              onChange={(e) => updateProfile({ learningTime: e.target.value })}
            >
              {["30 min/day", "1 hour/day", "2 hours/day", "3+ hours/day"].map(
                (t) => (
                  <option key={t}>{t}</option>
                ),
              )}
            </select>
          </label>
        </div>
        <div className="roadmap-summary-progress">
          <div>
            <span>
              {completed.length} of {total} tasks complete
            </span>
            <strong className="accent">{roadmapProgress(state)}%</strong>
          </div>
          <ProgressBar
            value={roadmapProgress(state)}
            label="Roadmap progress"
          />
        </div>
      </div>
      <div className="section-title">
        <h2>Your learning phases</h2>
        <Button
          variant="ghost"
          onClick={() =>
            setExpanded(
              expanded.length === roadmap.phases.length
                ? []
                : roadmap.phases.map((p) => p.id),
            )
          }
        >
          {expanded.length === roadmap.phases.length
            ? "Collapse all"
            : "Expand all"}
        </Button>
      </div>
      <div className="roadmap-list">
        {roadmap.phases.map((phase, i) => {
          const count = phase.tasks.filter((t) =>
              completed.includes(t.id),
            ).length,
            open = expanded.includes(phase.id),
            done = count === phase.tasks.length;
          return (
            <article className="panel roadmap-phase" key={phase.id}>
              <button
                className="phase-heading"
                aria-expanded={open}
                aria-controls={`body-${phase.id}`}
                onClick={() =>
                  setExpanded((ids) =>
                    ids.includes(phase.id)
                      ? ids.filter((id) => id !== phase.id)
                      : [...ids, phase.id],
                  )
                }
              >
                <span className={`phase-number ${done ? "complete" : ""}`}>
                  {done ? <Check size={21} /> : String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2>{phase.title}</h2>
                  <p>
                    {done
                      ? "Phase complete. Keep going."
                      : `Phase ${i + 1} of ${roadmap.phases.length}`}
                  </p>
                </div>
                <div className="phase-meta">
                  <span className="phase-time inline-actions">
                    <Clock3 size={14} />
                    {phase.hours}h
                  </span>
                  <span>
                    {count}/{phase.tasks.length}
                  </span>
                  {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </button>
              {open && (
                <div className="phase-body" id={`body-${phase.id}`}>
                  <p>
                    <strong>Learning objective:</strong> {phase.description}
                  </p>
                  <div className="task-list">
                    {phase.tasks.map((task) => (
                      <label
                        className={`task-row ${completed.includes(task.id) ? "is-done" : ""}`}
                        key={task.id}
                      >
                        <input
                          type="checkbox"
                          checked={completed.includes(task.id)}
                          onChange={() => toggleTask(career.slug, task.id)}
                        />
                        <span>
                          <strong>{task.title}</strong>
                          <p>{task.detail}</p>
                        </span>
                      </label>
                    ))}
                  </div>
                  <div className="phase-resource">
                    <a
                      href={phase.resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {phase.resource.label} (opens new tab)
                    </a>
                    <div className="skill-tags">
                      {phase.skills.map((s) => (
                        <span key={s}>{skillName(s)}</span>
                      ))}
                    </div>
                    {done && (
                      <Badge tone="mint">
                        <Check size={12} />
                        Complete
                      </Badge>
                    )}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
      <div className="next-step-card" style={{ marginTop: 25 }}>
        <div>
          <h2>Give your learning somewhere to live.</h2>
          <p>Add your latest project to your CV and practice explaining it.</p>
        </div>
        <div className="inline-actions">
          <ButtonLink href="/cv-builder">Build my CV</ButtonLink>
          <ButtonLink variant="secondary" href="/interview">
            Practice an interview
          </ButtonLink>
        </div>
      </div>
    </>
  );
}

````


## src/components/roadmap/RoadmapTimeline.tsx

````tsx
"use client";
import { Check } from "lucide-react";
import type { RoadmapPhase } from "@/types/roadmap";
export function RoadmapTimeline({
  phases,
  completed,
}: {
  phases: RoadmapPhase[];
  completed: string[];
}) {
  const firstIncomplete = phases.findIndex(
    (p) => !p.tasks.every((t) => completed.includes(t.id)),
  );
  return (
    <div className="mini-timeline">
      {phases.map((p, i) => {
        const count = p.tasks.filter((t) => completed.includes(t.id)).length;
        return (
          <div className="mini-timeline-item" key={p.id}>
            <span
              className={`timeline-marker ${count === p.tasks.length ? "done" : i === firstIncomplete ? "current" : ""}`}
            >
              {count === p.tasks.length ? <Check size={13} /> : i + 1}
            </span>
            <div>
              <strong>{p.title}</strong>
              <small>
                {count === p.tasks.length
                  ? "Completed"
                  : `${count}/${p.tasks.length} tasks · ${p.hours} hours`}
              </small>
            </div>
          </div>
        );
      })}
    </div>
  );
}

````


## src/components/skill-gap/SkillBar.tsx

````tsx
"use client";
import { ProgressBar } from "@/components/ui/primitives";
export function SkillBar({
  name,
  value,
  target,
}: {
  name: string;
  value: number;
  target?: number;
}) {
  return (
    <div>
      <div className="skill-row-head">
        <span>{name}</span>
        <span>
          {value}%{target !== undefined ? ` / ${target}% target` : ""}
        </span>
      </div>
      <ProgressBar
        value={value}
        label={`${name} skill level`}
        tone={target !== undefined && value >= target ? "mint" : "violet"}
      />
    </div>
  );
}

````


## src/components/skill-gap/SkillGapPage.tsx

````tsx
"use client";
import { useState } from "react";
import { getCareer } from "@/data/careers";
import { skillName } from "@/data/skills";
import { useCareerAI } from "@/hooks/useCareerAI";
import { skillLevel } from "@/lib/progress";
import {
  PageHeader,
  EmptyState,
  ButtonLink,
  Badge,
  ProgressBar,
} from "@/components/ui/primitives";
import { TargetCareerSelect } from "@/components/career/TargetCareerSelect";
export function SkillGapPage() {
  const { state, updateProfile } = useCareerAI();
  const career = getCareer(state.selectedCareer);
  const [filter, setFilter] = useState("All");
  if (!career)
    return (
      <EmptyState
        title="Choose a direction to see your skill gap"
        description="A target career gives your skills a useful context. Compare paths and choose one to get started."
        action="Explore career paths"
        href="/careers"
      />
    );
  const rows = career.skills.map((s) => {
    const current = skillLevel(state, s.id),
      gap = Math.max(0, s.target - current),
      priority =
        gap === 0
          ? "Low"
          : s.priority === "High" && gap > 15
            ? "High"
            : gap > 15
              ? "Medium"
              : "Low";
    return { ...s, current, gap, priority };
  });
  const high = rows.filter((s) => s.priority === "High").length,
    ready = rows.filter((s) => s.gap === 0).length,
    filtered = rows.filter((s) => filter === "All" || s.priority === filter);
  const rate = (id: string, value: number) =>
    updateProfile({
      skills:
        value > 0
          ? [...new Set([...state.profile.skills, id])]
          : state.profile.skills.filter((s) => s !== id),
      skillLevels: { ...state.profile.skillLevels, [id]: value },
    });
  return (
    <>
      <PageHeader
        eyebrow="MAKE THE NEXT STEP CLEAR"
        title="Your skill gap"
        description="A focused look at where you are and what your target career asks of you."
      >
        <ButtonLink href="/roadmap">Continue to roadmap</ButtonLink>
      </PageHeader>
      <TargetCareerSelect />
      <div className="panel skill-gap-intro">
        <div>
          <h2>Current skills meet future goals.</h2>
          <p>
            Levels are self-assessed, with a small practice credit for completed
            roadmap tasks. Adjust your ratings honestly; they are a guide for
            learning.
          </p>
        </div>
        <div className="skill-gap-summary">
          <div>
            <strong className="accent">{rows.length}</strong>
            <span>Target skills</span>
          </div>
          <div>
            <strong style={{ color: "var(--orange)" }}>{high}</strong>
            <span>High priority</span>
          </div>
          <div>
            <strong className="mint">{ready}</strong>
            <span>At target</span>
          </div>
        </div>
      </div>
      <div
        className="filter-bar"
        role="group"
        aria-label="Filter skills by priority"
      >
        {["All", "High", "Medium", "Low"].map((f) => (
          <button
            key={f}
            className={`filter-chip ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
          >
            {f === "All" ? "All skills" : `${f} priority`}
          </button>
        ))}
      </div>
      {filtered.length ? (
        <div className="skill-gap-grid">
          {filtered.map((s) => (
            <article className="panel skill-gap-card" key={s.id}>
              <div className="skill-gap-card-header">
                <h2>{skillName(s.id)}</h2>
                <Badge tone={s.priority}>
                  {s.gap === 0 ? "At target" : `${s.priority} priority`}
                </Badge>
              </div>
              <div className="skill-comparison">
                <div>
                  <div className="skill-current-label">
                    <span>Current level</span>
                    <strong>{s.current}%</strong>
                  </div>
                  <ProgressBar
                    value={s.current}
                    label={`${skillName(s.id)} current level`}
                    tone="violet"
                  />
                </div>
                <div>
                  <div className="skill-current-label">
                    <span>Target level</span>
                    <strong>{s.target}%</strong>
                  </div>
                  <ProgressBar
                    value={s.target}
                    label={`${skillName(s.id)} target level`}
                    tone="cyan"
                  />
                </div>
              </div>
              <label className="rating-label" htmlFor={`rating-${s.id}`}>
                <span>Self rating before practice credit</span>
                <span>
                  {state.profile.skillLevels[s.id] ??
                    (state.profile.skills.includes(s.id) ? 40 : 0)}
                  %
                </span>
              </label>
              <input
                id={`rating-${s.id}`}
                type="range"
                min="0"
                max="100"
                step="5"
                value={
                  state.profile.skillLevels[s.id] ??
                  (state.profile.skills.includes(s.id) ? 40 : 0)
                }
                onChange={(e) => rate(s.id, Number(e.target.value))}
              />
              <div className="gap-bottom">
                <span>
                  Gap to target <strong>{s.gap} percentage points</strong>
                </span>
                <ButtonLink href="/roadmap" variant="ghost">
                  Practice skill
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <EmptyState
          title="No skills at this priority"
          description="Your current ratings put these skills in a different priority group."
        >
          <button
            className="btn btn-secondary"
            onClick={() => setFilter("All")}
          >
            Show all skills
          </button>
        </EmptyState>
      )}
    </>
  );
}

````


## src/components/ui/Modal.tsx

````tsx
"use client";
import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";
export function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null),
    closeRef = useRef(onClose);
  closeRef.current = onClose;
  useEffect(() => {
    const element = ref.current;
    const previous = document.activeElement as HTMLElement | null;
    element?.showModal();
    const cancel = (event: Event) => {
      event.preventDefault();
      closeRef.current();
    };
    element?.addEventListener("cancel", cancel);
    return () => {
      element?.removeEventListener("cancel", cancel);
      element?.close();
      previous?.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className="modal"
      aria-labelledby="dialog-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-header">
        <h2 id="dialog-title">{title}</h2>
        <button
          className="icon-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>
      </div>
      {children}
    </dialog>
  );
}

````


## src/components/ui/primitives.tsx

````tsx
"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Check,
  Sparkles,
  Code2,
  ChartNoAxesCombined,
  BrainCircuit,
  ShieldCheck,
  Cloud,
  Palette,
  Megaphone,
  BriefcaseBusiness,
  Compass,
} from "lucide-react";
import type { ReactNode, ButtonHTMLAttributes } from "react";
export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <button
      type="button"
      className={`btn btn-${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`btn btn-${variant} ${className}`}
    >
      {children}
    </Link>
  );
}
export function Badge({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: string;
}) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}
export function ProgressBar({
  value,
  label,
  tone = "violet",
}: {
  value: number;
  label: string;
  tone?: string;
}) {
  const reduce = useReducedMotion();
  const v = Math.max(0, Math.min(100, value));
  return (
    <div
      className={`progress-track progress-${tone}`}
      role="progressbar"
      aria-label={label}
      aria-valuenow={v}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${v}%` }}
        transition={{ duration: reduce ? 0 : 0.65, ease: "easeOut" }}
      />
    </div>
  );
}
export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className="page-header">
      <div>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
      {children && <div className="header-actions">{children}</div>}
    </div>
  );
}
export function EmptyState({
  title,
  description,
  action,
  href,
  children,
}: {
  title: string;
  description: string;
  action?: string;
  href?: string;
  children?: ReactNode;
}) {
  return (
    <div className="empty-state panel">
      <div className="empty-icon">
        <Compass size={32} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      {action && href && <ButtonLink href={href}>{action}</ButtonLink>}
      {children}
    </div>
  );
}
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: reduce ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}
export function CareerIcon({
  name,
  size = 22,
}: {
  name: string;
  size?: number;
}) {
  const icons: Record<string, typeof Code2> = {
    code: Code2,
    chart: ChartNoAxesCombined,
    brain: BrainCircuit,
    shield: ShieldCheck,
    cloud: Cloud,
    palette: Palette,
    megaphone: Megaphone,
    briefcase: BriefcaseBusiness,
  };
  const Icon = icons[name] ?? Compass;
  return <Icon size={size} aria-hidden="true" />;
}
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <Check size={16} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
export function PrototypeNote({ children }: { children?: ReactNode }) {
  return (
    <p className="prototype-note">
      <Sparkles size={15} />
      <span>
        {children ??
          "Profile Match is a rule-based guide based on your responses, not a scientifically validated prediction."}
      </span>
    </p>
  );
}

````


## src/data/assessmentQuestions.ts

````typescript
import type { AssessmentQuestion, AssessmentOption } from "@/types/assessment";
const option = (
  id: string,
  label: string,
  description: string,
  scores: AssessmentOption["scores"],
): AssessmentOption => ({ id, label, description, scores });
export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: "work",
    question: "Which kind of work pulls you in?",
    hint: "Choose what interests you, even if you have never tried it.",
    options: [
      option(
        "build",
        "Building digital products",
        "Apps, websites, and tools people can use",
        { code: 5, cloud: 2 },
      ),
      option(
        "discover",
        "Finding patterns in information",
        "Turning numbers into meaningful answers",
        { data: 5, business: 2 },
      ),
      option(
        "design",
        "Designing experiences",
        "Making everyday tasks easier for people",
        { design: 5 },
      ),
      option(
        "protect",
        "Protecting systems",
        "Investigating risks and solving security puzzles",
        { security: 5, cloud: 2 },
      ),
    ],
  },
  {
    id: "problems",
    question: "What do you enjoy figuring out?",
    hint: "Think about the problems you naturally spend time on.",
    options: [
      option(
        "logic",
        "Why something is not working",
        "Break a problem down and fix it step by step",
        { code: 5, cloud: 3, security: 2 },
      ),
      option(
        "numbers",
        "What the numbers are telling us",
        "Compare evidence and spot a trend",
        { data: 5, business: 3 },
      ),
      option(
        "people",
        "Why people find something confusing",
        "Listen, understand, and simplify",
        { design: 5, business: 2 },
      ),
      option(
        "growth",
        "How an idea can reach more people",
        "Plan, communicate, and try new approaches",
        { business: 5, design: 2 },
      ),
    ],
  },
  {
    id: "math",
    question: "How do you feel about mathematics?",
    hint: "Your current comfort can change with practice.",
    options: [
      option(
        "love",
        "I enjoy it",
        "Numbers and logical reasoning feel rewarding",
        { data: 5, code: 3, business: 3 },
      ),
      option(
        "okay",
        "Comfortable with the basics",
        "I can work with formulas when I need to",
        { data: 3, code: 3, business: 3 },
      ),
      option(
        "learn",
        "I am willing to improve",
        "I prefer learning through practical examples",
        { code: 3, design: 2, cloud: 2 },
      ),
      option(
        "less",
        "I prefer less mathematical work",
        "Writing, visuals, or people interest me more",
        { design: 5, business: 3 },
      ),
    ],
  },
  {
    id: "programming",
    question: "How interested are you in programming?",
    hint: "Interest matters here, not how many languages you know.",
    options: [
      option(
        "yes",
        "I love making things with code",
        "I want to write and improve software",
        { code: 5, cloud: 3, data: 2 },
      ),
      option(
        "curious",
        "I am curious and want to try",
        "Small projects sound like a good start",
        { code: 4, data: 3, security: 2 },
      ),
      option(
        "useful",
        "As a tool for another goal",
        "I would learn it to analyze or automate",
        { data: 5, cloud: 3, business: 2 },
      ),
      option(
        "no",
        "I prefer other ways to create",
        "Research, visuals, content, or strategy",
        { design: 5, business: 5 },
      ),
    ],
  },
  {
    id: "focus",
    question: "What would you rather spend an afternoon on?",
    hint: "Imagine a task you could get absorbed in.",
    options: [
      option(
        "app",
        "Make a small app work",
        "Build, test, and improve a feature",
        { code: 5 },
      ),
      option(
        "dataset",
        "Explore a dataset",
        "Ask a question and investigate the answer",
        { data: 5, business: 2 },
      ),
      option(
        "interview",
        "Talk to people about their needs",
        "Understand their goals and frustrations",
        { design: 5, business: 3 },
      ),
      option(
        "logs",
        "Investigate a strange system alert",
        "Follow clues and find the cause",
        { security: 5, cloud: 4 },
      ),
    ],
  },
  {
    id: "technology",
    question: "How do you approach unfamiliar technology?",
    hint: "There is no best personality for every career.",
    options: [
      option(
        "experiment",
        "Experiment until I understand it",
        "I enjoy trying things and reading documentation",
        { code: 5, cloud: 5, security: 3 },
      ),
      option(
        "guided",
        "Start with a guided example",
        "I build confidence through a clear learning path",
        { code: 3, data: 3, design: 3, cloud: 3 },
      ),
      option(
        "purpose",
        "Learn when it solves a clear problem",
        "A practical reason keeps me motivated",
        { data: 4, business: 5 },
      ),
      option(
        "observe",
        "Understand the experience first",
        "I focus on how people will use the tool",
        { design: 5, business: 3 },
      ),
    ],
  },
  {
    id: "environment",
    question: "Which working rhythm suits you?",
    hint: "Use your preferred day, rather than an ideal job title.",
    options: [
      option(
        "deep",
        "Quiet focus, then share progress",
        "Long stretches to build and investigate",
        { code: 5, data: 4, security: 3 },
      ),
      option(
        "collaborate",
        "Frequent feedback and collaboration",
        "Explore ideas and refine them together",
        { design: 5, business: 4, code: 2 },
      ),
      option(
        "operations",
        "Monitor, respond, and improve",
        "Keep systems healthy and solve incidents",
        { cloud: 5, security: 5 },
      ),
      option(
        "plan",
        "Plan work and coordinate people",
        "Turn a goal into a clear set of actions",
        { business: 5, design: 2 },
      ),
    ],
  },
  {
    id: "activity",
    question: "Which mini-project would you pick?",
    hint: "You can explore the other paths later.",
    options: [
      option(
        "website",
        "A website for a student club",
        "Help people find events and sign up",
        { code: 5, design: 2 },
      ),
      option(
        "prediction",
        "Predict an outcome from sample data",
        "Compare a simple model against a baseline",
        { data: 5, code: 2 },
      ),
      option(
        "prototype",
        "Redesign a confusing mobile app",
        "Prototype a clearer, more accessible flow",
        { design: 5 },
      ),
      option(
        "campaign",
        "Plan a campaign for a small business",
        "Research an audience and tell a useful story",
        { business: 5, design: 2 },
      ),
    ],
  },
  {
    id: "reward",
    question: "What makes a finished project satisfying?",
    hint: "Think about the part you would be proud to explain.",
    options: [
      option(
        "reliable",
        "It works reliably",
        "The logic is clear and the details are tested",
        { code: 5, cloud: 4 },
      ),
      option(
        "insight",
        "It reveals something useful",
        "Evidence helps someone make a decision",
        { data: 5, business: 3 },
      ),
      option(
        "usable",
        "People find it easy to use",
        "A thoughtful experience removes friction",
        { design: 5 },
      ),
      option(
        "safe",
        "It makes a system safer",
        "A risk is understood and reduced",
        { security: 5, cloud: 2 },
      ),
    ],
  },
  {
    id: "learn",
    question: "What would you most like to learn next?",
    hint: "Follow your curiosity. This is a starting point, not a final decision.",
    options: [
      option(
        "frontend",
        "Programming and web development",
        "Build my own useful product",
        { code: 5 },
      ),
      option(
        "analysis",
        "Data, statistics, and AI",
        "Use information to answer better questions",
        { data: 5 },
      ),
      option(
        "creative",
        "Design, research, and storytelling",
        "Create experiences that connect with people",
        { design: 5, business: 3 },
      ),
      option(
        "systems",
        "Cloud systems and cybersecurity",
        "Understand and protect the technology underneath",
        { cloud: 5, security: 5 },
      ),
    ],
  },
];

````


## src/data/careers.ts

````typescript
import type { Career, CareerSkill } from "@/types/career";
const core = (
  high: string[],
  medium: string[],
  low: string[] = [],
): CareerSkill[] => [
  ...high.map((id) => ({ id, target: 75, priority: "High" as const })),
  ...medium.map((id) => ({ id, target: 60, priority: "Medium" as const })),
  ...low.map((id) => ({ id, target: 45, priority: "Low" as const })),
];
export const careers: Career[] = [
  {
    slug: "software-engineering",
    name: "Software Engineering",
    shortName: "Software Engineer",
    category: "Build products",
    icon: "code",
    color: "violet",
    description: "Turn ideas into useful, reliable digital products.",
    overview:
      "Software engineers design, build, test, and maintain applications. Start with web development and grow through projects, code reviews, and real user feedback. Explore local product teams, software agencies, or remote roles as your portfolio develops.",
    responsibilities: [
      "Build accessible interfaces and application features",
      "Debug problems and write meaningful tests",
      "Collaborate with designers and review code",
      "Document decisions and improve reliability",
    ],
    interests: ["Technology", "AI"],
    axes: ["code"],
    tools: ["VS Code", "GitHub", "Browser DevTools", "Node.js"],
    workStyles: ["Remote", "Hybrid", "Flexible"],
    skills: core(
      ["javascript", "react", "html-css", "problem-solving"],
      ["git", "typescript", "apis", "sql", "testing"],
      ["docker", "communication"],
    ),
    levels: {
      beginner: [
        "Programming logic",
        "Semantic HTML",
        "CSS layouts",
        "Git basics",
      ],
      intermediate: ["React state", "TypeScript", "API integration", "Testing"],
      advanced: [
        "System design",
        "Performance profiling",
        "Secure application design",
      ],
    },
    projects: [
      "A responsive campus event planner",
      "A budget tracker with local persistence",
      "A tested, accessible portfolio application",
    ],
    interviewTopics: [
      "JavaScript fundamentals",
      "React state and props",
      "HTTP and APIs",
      "Debugging",
      "Basic data structures",
    ],
  },
  {
    slug: "data-analytics",
    name: "Data Analytics",
    shortName: "Data Analyst",
    category: "Find the signal",
    icon: "chart",
    color: "cyan",
    description: "Use data to answer questions and guide better decisions.",
    overview:
      "Data analysts collect, clean, and interpret data. They translate a business question into an analysis, then explain the result clearly. Begin with spreadsheets and SQL before moving into Python and interactive reporting.",
    responsibilities: [
      "Clean and validate datasets",
      "Write queries and investigate patterns",
      "Build dashboards and recurring reports",
      "Explain findings with context and limitations",
    ],
    interests: ["Data", "Business", "Finance"],
    axes: ["data"],
    tools: ["Excel", "PostgreSQL client", "Power BI", "Jupyter"],
    workStyles: ["Hybrid", "Remote", "Flexible"],
    skills: core(
      ["sql", "excel", "data-cleaning"],
      ["python", "statistics", "visualization", "communication"],
      ["git"],
    ),
    levels: {
      beginner: [
        "Spreadsheet formulas",
        "Descriptive statistics",
        "SQL filtering",
      ],
      intermediate: ["SQL joins", "Python pandas", "Dashboard storytelling"],
      advanced: [
        "Experiment analysis",
        "Analytics engineering",
        "Data quality systems",
      ],
    },
    projects: [
      "Analyze an open Bangladesh population dataset",
      "A fictional shop sales dashboard",
      "A SQL analysis with a written decision memo",
    ],
    interviewTopics: [
      "SQL joins",
      "Missing values",
      "Aggregation",
      "Statistics",
      "Communicating uncertainty",
    ],
  },
  {
    slug: "ai-machine-learning",
    name: "AI / Machine Learning",
    shortName: "ML Engineer",
    category: "Explore intelligence",
    icon: "brain",
    color: "pink",
    description: "Build and evaluate models that learn from data.",
    overview:
      "Machine learning work combines programming, mathematics, and careful experimentation. Learn how to prepare data, train a baseline, evaluate fairly, and communicate a model's limits. A strong foundation matters more than chasing the latest model.",
    responsibilities: [
      "Prepare datasets and select appropriate baselines",
      "Train models and compare evaluation metrics",
      "Investigate errors and data leakage",
      "Document reproducible experiments",
    ],
    interests: ["AI", "Data", "Technology"],
    axes: ["data", "code"],
    tools: ["Python", "Jupyter", "scikit-learn", "PyTorch"],
    workStyles: ["Remote", "Hybrid", "Flexible"],
    skills: core(
      ["python", "statistics", "machine-learning", "data-cleaning"],
      ["sql", "git", "problem-solving", "apis"],
      ["cloud"],
    ),
    levels: {
      beginner: ["Python", "Linear algebra intuition", "Data preparation"],
      intermediate: [
        "Supervised learning",
        "Cross-validation",
        "Feature engineering",
      ],
      advanced: [
        "Deep learning",
        "Model monitoring",
        "Responsible AI evaluation",
      ],
    },
    projects: [
      "A housing-price baseline with error analysis",
      "A Bangla text classification experiment",
      "A model comparison notebook with reproducible results",
    ],
    interviewTopics: [
      "Overfitting",
      "Train/test splits",
      "Precision and recall",
      "Data leakage",
      "Model evaluation",
    ],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    shortName: "Security Analyst",
    category: "Protect systems",
    icon: "shield",
    color: "mint",
    description: "Understand risks and help people use technology safely.",
    overview:
      "Security professionals identify weaknesses, monitor events, and reduce risks. Start with networking and Linux, then practice only in authorized labs. Clear reporting and responsible handling of information are central skills.",
    responsibilities: [
      "Investigate suspicious logs and alerts",
      "Assess risks in authorized environments",
      "Document findings and practical mitigations",
      "Support secure configurations and incident response",
    ],
    interests: ["Security", "Technology"],
    axes: ["security"],
    tools: ["Linux", "Wireshark", "OWASP learning labs", "Log analysis tools"],
    workStyles: ["On-site", "Hybrid", "Remote"],
    skills: core(
      ["networking", "linux", "security"],
      ["python", "problem-solving", "communication"],
      ["cloud", "git"],
    ),
    levels: {
      beginner: ["TCP/IP basics", "Linux permissions", "Threat awareness"],
      intermediate: ["Log investigation", "Web security", "Risk reporting"],
      advanced: [
        "Incident response",
        "Detection engineering",
        "Cloud security",
      ],
    },
    projects: [
      "A home-lab security checklist",
      "Analyze synthetic network logs",
      "An authorized lab report with clear mitigations",
    ],
    interviewTopics: [
      "Network protocols",
      "Least privilege",
      "Phishing",
      "Incident triage",
      "OWASP concepts",
    ],
  },
  {
    slug: "cloud-devops",
    name: "Cloud / DevOps",
    shortName: "DevOps Engineer",
    category: "Keep things running",
    icon: "cloud",
    color: "blue",
    description: "Automate delivery and make systems more reliable.",
    overview:
      "DevOps and cloud roles improve the way teams ship and operate software. Learn Linux, version control, containers, and automated pipelines. Begin with small deployments and build an understanding of monitoring, cost, and reliability.",
    responsibilities: [
      "Automate build and deployment pipelines",
      "Maintain infrastructure configuration",
      "Monitor services and investigate incidents",
      "Improve reliability, cost awareness, and documentation",
    ],
    interests: ["Cloud", "Technology"],
    axes: ["cloud", "code"],
    tools: ["Docker", "GitHub Actions", "Linux", "Cloud consoles"],
    workStyles: ["Remote", "Hybrid", "Flexible"],
    skills: core(
      ["linux", "git", "docker", "cloud"],
      ["ci-cd", "networking", "python", "problem-solving"],
      ["security"],
    ),
    levels: {
      beginner: ["Shell commands", "Git workflows", "Networking basics"],
      intermediate: ["Containers", "CI pipelines", "Cloud deployment"],
      advanced: [
        "Infrastructure as code",
        "Observability",
        "Incident management",
      ],
    },
    projects: [
      "Containerize a demo application",
      "A tested build pipeline",
      "A deployment runbook and monitoring dashboard",
    ],
    interviewTopics: [
      "Containers vs virtual machines",
      "CI/CD",
      "Linux troubleshooting",
      "Networking",
      "Rollback strategies",
    ],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    shortName: "Product Designer",
    category: "Design for people",
    icon: "palette",
    color: "orange",
    description: "Make digital experiences clear, useful, and inclusive.",
    overview:
      "Product designers investigate user needs and turn them into usable interfaces. Research, prototyping, accessibility, and visual hierarchy work together. A portfolio should explain the problem, your decisions, and what you learned from testing.",
    responsibilities: [
      "Interview users and map their needs",
      "Create wireframes and interactive prototypes",
      "Test flows and improve usability",
      "Collaborate with engineers on accessible interfaces",
    ],
    interests: ["Design", "Technology"],
    axes: ["design"],
    tools: ["Figma", "FigJam", "Pen and paper", "Usability testing notes"],
    workStyles: ["Remote", "Hybrid", "Flexible"],
    skills: core(
      ["figma", "user-research", "prototyping"],
      ["accessibility", "communication", "problem-solving"],
      ["html-css"],
    ),
    levels: {
      beginner: ["Visual hierarchy", "Wireframing", "Typography"],
      intermediate: [
        "User research",
        "Interactive prototypes",
        "Usability testing",
      ],
      advanced: [
        "Design systems",
        "Product strategy",
        "Inclusive design research",
      ],
    },
    projects: [
      "Improve a campus registration journey",
      "A mobile learning app prototype",
      "An accessibility-focused checkout case study",
    ],
    interviewTopics: [
      "Design decisions",
      "Research methods",
      "Accessibility",
      "Usability testing",
      "Receiving feedback",
    ],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    shortName: "Digital Marketer",
    category: "Connect with audiences",
    icon: "megaphone",
    color: "pink",
    description: "Create useful content and measure what reaches people.",
    overview:
      "Digital marketers help organizations communicate with the right audience. Learn content planning, search fundamentals, campaign measurement, and ethical messaging. Use fictional campaigns to build a portfolio without inventing business results.",
    responsibilities: [
      "Research audiences and plan campaigns",
      "Write and improve content",
      "Measure engagement with appropriate metrics",
      "Run small experiments and explain the results",
    ],
    interests: ["Marketing", "Writing", "Business"],
    axes: ["business", "design"],
    tools: [
      "Google Analytics demo account",
      "Search Console guides",
      "Canva",
      "Spreadsheets",
    ],
    workStyles: ["Remote", "Hybrid", "Flexible"],
    skills: core(
      ["content", "marketing", "seo"],
      ["excel", "visualization", "communication"],
      ["figma"],
    ),
    levels: {
      beginner: ["Audience research", "Content writing", "SEO basics"],
      intermediate: ["Campaign planning", "Analytics", "Conversion concepts"],
      advanced: ["Experiment design", "Attribution limits", "Brand strategy"],
    },
    projects: [
      "A fictional local café content plan",
      "An SEO audit of your own portfolio",
      "A campaign measurement plan using sample data",
    ],
    interviewTopics: [
      "Audience segments",
      "Content strategy",
      "SEO",
      "Conversion metrics",
      "Campaign tradeoffs",
    ],
  },
  {
    slug: "finance-business-analytics",
    name: "Finance & Business Analytics",
    shortName: "Business Analyst",
    category: "Make better decisions",
    icon: "briefcase",
    color: "mint",
    description: "Connect financial thinking, data, and business strategy.",
    overview:
      "Business and financial analysts explain how organizations perform and where they can improve. Build spreadsheet fluency, financial fundamentals, and communication skills. Use transparent assumptions and distinguish a forecast from a fact.",
    responsibilities: [
      "Build and check spreadsheet models",
      "Analyze costs, revenue, and business processes",
      "Translate stakeholder questions into requirements",
      "Present recommendations and document assumptions",
    ],
    interests: ["Finance", "Business", "Data"],
    axes: ["business", "data"],
    tools: ["Excel", "Power BI", "SQL clients", "Presentation tools"],
    workStyles: ["On-site", "Hybrid", "Flexible"],
    skills: core(
      ["excel", "finance", "communication"],
      ["sql", "statistics", "visualization", "problem-solving"],
      ["python"],
    ),
    levels: {
      beginner: [
        "Spreadsheet formulas",
        "Financial statements",
        "Business writing",
      ],
      intermediate: [
        "Financial models",
        "SQL analysis",
        "Requirements gathering",
      ],
      advanced: [
        "Scenario analysis",
        "Process improvement",
        "Decision support",
      ],
    },
    projects: [
      "A fictional small-business budget",
      "A financial model with scenario assumptions",
      "A business process improvement proposal",
    ],
    interviewTopics: [
      "Financial statements",
      "Spreadsheet modeling",
      "Stakeholder requirements",
      "Scenario analysis",
      "Presenting findings",
    ],
  },
];
export const getCareer = (slug: string): Career | undefined =>
  careers.find((c) => c.slug === slug);

````


## src/data/cvTemplates.ts

````typescript
import type { CVData } from "@/types/user";
export const cvTemplates = [
  {
    id: "classic" as const,
    name: "Classic",
    description: "A focused, single-column CV.",
  },
  {
    id: "modern" as const,
    name: "Modern",
    description: "An accent header with the same clear structure.",
  },
];
export const emptyCV: CVData = {
  name: "",
  email: "",
  phone: "",
  location: "",
  website: "",
  summary: "",
  education: [],
  experience: [],
  projects: [],
  skills: "",
  achievements: "",
  template: "classic",
};

````


## src/data/demo.ts

````typescript
import { initialState } from "@/lib/storage";
import { getRoadmap } from "@/data/roadmaps";
import type { AppState } from "@/types/user";
export function createDemoState(theme: AppState["theme"]): AppState {
  const state = initialState();
  state.theme = theme;
  state.demo = true;
  state.profile = {
    name: "Zahid Hasan",
    education: "Bachelor's",
    status: "Student",
    location: "Dhaka",
    interests: ["Technology", "AI", "Business"],
    skills: ["javascript", "react", "python", "sql"],
    skillLevels: { javascript: 70, react: 60, python: 45, sql: 40 },
    workStyle: "Remote",
    learningTime: "1 hour/day",
    onboarded: true,
  };
  state.assessment = {
    work: "build",
    problems: "logic",
    math: "okay",
    programming: "yes",
    focus: "app",
    technology: "experiment",
    environment: "deep",
    activity: "website",
    reward: "reliable",
    learn: "frontend",
  };
  state.selectedCareer = "software-engineering";
  state.completedTasks[state.selectedCareer] =
    getRoadmap(state.selectedCareer)
      ?.phases.slice(0, 2)
      .flatMap((p) => p.tasks.map((t) => t.id)) ?? [];
  state.cv = {
    name: "Zahid Hasan",
    email: "zahid@example.com",
    phone: "",
    location: "Dhaka, Bangladesh",
    website: "",
    summary:
      "Computer science student building accessible React applications. Comfortable with JavaScript, Python, and SQL, and currently developing testing and collaboration skills through practical projects.",
    education: [
      {
        id: "demo-education",
        title: "BSc in Computer Science (in progress)",
        organization: "Sample University · demo",
        period: "2024–present",
        description:
          "Focus: web development, programming fundamentals, and database concepts.",
      },
    ],
    experience: [],
    projects: [
      {
        id: "demo-project",
        title: "Campus Event Planner",
        organization: "Personal learning project",
        period: "2026",
        description:
          "Built a responsive React interface for browsing student events, with search, filters, and saved events. Used local storage to preserve selections and tested keyboard navigation.",
      },
    ],
    skills: "JavaScript, React, Python, SQL",
    achievements: "",
    template: "modern",
  };
  return state;
}

````


## src/data/interviewQuestions.ts

````typescript
export interface InterviewQuestion {
  id: string;
  question: string;
  hint: string;
  concepts: string[][];
  sample: string;
  followUp: string;
}
type Spec = [string, string[][], string];
const banks: Record<string, Spec[]> = {
  "software-engineering": [
    [
      "What is the difference between state and props in React?",
      [
        ["state", "local"],
        ["props", "parent"],
        ["update", "setter", "setstate"],
        ["read-only", "readonly", "immutable"],
      ],
      "Props are read-only inputs passed from a parent. State is data managed by a component and updated through a setter. Updating state triggers a render. For example, a counter owns its count as state while its label arrives as a prop.",
    ],
    [
      "How would you debug a page that fails to load data from an API?",
      [
        ["network", "status", "http"],
        ["error", "catch"],
        ["request", "url", "endpoint"],
        ["loading", "response", "json"],
      ],
      "Inspect the network request, URL, HTTP status, and response. Check the console, error handling, and response shape. Reproduce the failure, separate server and client causes, and keep a useful loading or error state visible.",
    ],
    [
      "What makes a web form accessible?",
      [
        ["label"],
        ["keyboard", "focus"],
        ["error", "validation"],
        ["semantic", "aria", "fieldset"],
      ],
      "Use native controls with associated labels, clear instructions, and semantic groups. Keep keyboard focus visible, announce validation errors, and ensure errors identify the field and how to fix it. Test using only a keyboard.",
    ],
    [
      "When would you use TypeScript in a team project?",
      [
        ["type", "interface"],
        ["compile", "static", "check"],
        ["runtime", "validation"],
        ["team", "refactor", "documentation"],
      ],
      "TypeScript provides static checks and documents data contracts, making team changes and refactoring safer. It catches many errors before execution but does not validate external data at runtime, so API inputs still need validation.",
    ],
    [
      "How would you test a task-completion feature that persists after refresh?",
      [
        ["complete", "toggle", "check"],
        ["storage", "persist", "refresh"],
        ["unmark", "undo", "uncheck"],
        ["empty", "error", "keyboard", "reload"],
      ],
      "Complete a task, verify its progress changes, and refresh to confirm persistence. Unmark it and refresh again. Also check an empty roadmap, storage failures, and keyboard operation. A meaningful integration test covers the complete user flow.",
    ],
  ],
  "data-analytics": [
    [
      "How are an INNER JOIN and a LEFT JOIN different?",
      [["inner", "match"], ["left", "all"], ["null"], ["table", "key"]],
      "An INNER JOIN returns matching rows from both tables. A LEFT JOIN keeps every row from the left table and fills unmatched right-side columns with NULL. Use a LEFT JOIN when you must retain customers without orders.",
    ],
    [
      "How would you handle missing values in a dataset?",
      [
        ["missing", "null"],
        ["reason", "pattern", "investigate"],
        ["drop", "impute", "fill"],
        ["document", "bias", "validate"],
      ],
      "Inspect how much is missing and why. Choose whether to exclude, impute, or preserve missing values based on the question and data type. Document the choice, consider bias, and validate the effect on results.",
    ],
    [
      "What would you check before trusting a sales dashboard?",
      [
        ["source", "data"],
        ["duplicate", "missing", "quality"],
        ["definition", "metric"],
        ["date", "filter", "reconcile"],
      ],
      "Verify the source, date range, filters, metric definitions, duplicates, and missing values. Reconcile totals against a trusted source and explain any exclusions or freshness limits.",
    ],
    [
      "How would you explain correlation to a nontechnical stakeholder?",
      [
        ["relationship", "together"],
        ["caus", "cause"],
        ["example"],
        ["confound", "other", "factor"],
      ],
      "Correlation means two measures vary together, but it does not establish that one causes the other. For example, ice cream sales and sunburn both rise in summer; warmer weather is another factor. A causal claim needs additional evidence.",
    ],
    [
      "How do you choose a chart for an analysis?",
      [
        ["question", "audience"],
        ["bar", "line", "scatter"],
        ["label", "scale", "axis"],
        ["limitation", "clear", "context"],
      ],
      "Start with the question and audience. Use bars for comparisons, a line for a time trend, or a scatter plot for a relationship. Label axes and units, choose honest scales, and include the relevant context and limitations.",
    ],
  ],
  "ai-machine-learning": [
    [
      "What is overfitting, and how can you reduce it?",
      [
        ["training", "train"],
        ["test", "general"],
        ["regular", "simpl", "validation"],
        ["data", "cross"],
      ],
      "Overfitting happens when a model learns training-specific noise and generalizes poorly. Check held-out performance and consider simpler models, regularization, more suitable data, and cross-validation.",
    ],
    [
      "Why separate training and test data?",
      [
        ["train", "training"],
        ["unseen", "test"],
        ["leak", "bias"],
        ["evaluate", "general"],
      ],
      "Train on one portion and evaluate on unseen data to estimate generalization. Keep test information out of preprocessing and model selection to avoid leakage and an optimistic score.",
    ],
    [
      "When does precision matter more than recall?",
      [
        ["false positive"],
        ["precision"],
        ["recall", "false negative"],
        ["cost", "example"],
      ],
      "Precision matters when false positives are costly. For example, incorrectly blocking a legitimate transaction can harm a customer. Recall matters when missing a true case is costly. Choose the metric using the actual error costs.",
    ],
    [
      "How would you evaluate a first classification model?",
      [
        ["baseline"],
        ["split", "test", "validation"],
        ["metric", "precision", "recall"],
        ["error", "imbalance"],
      ],
      "Set a simple baseline, split the data appropriately, and select metrics for the class balance and error costs. Compare against the baseline and inspect errors and important subgroups before claiming improvement.",
    ],
    [
      "What belongs in a reproducible experiment report?",
      [
        ["data", "version"],
        ["seed", "parameter", "code"],
        ["metric", "result"],
        ["limit", "assumption"],
      ],
      "Record dataset and code versions, preprocessing, parameters, random seeds, environment, and metrics. Include a baseline, limitations, assumptions, and enough instructions for someone else to reproduce the run.",
    ],
  ],
  cybersecurity: [
    [
      "What does least privilege mean?",
      [
        ["minimum", "least"],
        ["permission", "access"],
        ["role", "task"],
        ["review", "revoke"],
      ],
      "Give a person or service only the permissions required for its task. Use appropriate roles, review access regularly, and revoke permissions that are no longer needed.",
    ],
    [
      "How would you triage a suspicious login alert?",
      [
        ["log", "time"],
        ["user", "source", "ip"],
        ["verify", "context"],
        ["escalate", "contain", "document"],
      ],
      "Review timestamps, source information, and account activity. Verify the context with approved procedures, distinguish false positives from compromise, document evidence, and escalate or contain according to the response plan.",
    ],
    [
      "Why does HTTPS matter?",
      [
        ["encrypt", "tls"],
        ["transit"],
        ["certificate", "identity"],
        ["integrity", "tamper"],
      ],
      "HTTPS uses TLS to encrypt traffic in transit and help verify the server's identity through certificates. It also protects integrity, but does not by itself guarantee an application is trustworthy or free of vulnerabilities.",
    ],
    [
      "How should a security finding be reported?",
      [
        ["impact", "risk"],
        ["evidence", "reproduce"],
        ["fix", "mitigation"],
        ["authorized", "responsible", "scope"],
      ],
      "Within authorized scope, document evidence, reproduction steps, affected assets, and practical impact. Explain a mitigation, communicate responsibly, and avoid exposing sensitive information.",
    ],
    [
      "How can a team reduce phishing risk?",
      [
        ["training", "awareness"],
        ["verify", "report"],
        ["mfa", "authentication"],
        ["filter", "process"],
      ],
      "Combine awareness training, easy reporting, verified payment or credential procedures, MFA, and filtering. Treat suspicious messages as a process issue rather than blaming the person who reports them.",
    ],
  ],
  "cloud-devops": [
    [
      "How do containers differ from virtual machines?",
      [
        ["kernel", "share"],
        ["virtual machine", "guest", "os"],
        ["isolation"],
        ["light", "resource"],
      ],
      "Containers share the host kernel and isolate application processes, while a virtual machine runs a guest operating system. Containers are usually lighter, but isolation and compatibility tradeoffs depend on the workload.",
    ],
    [
      "What should a basic CI pipeline do?",
      [
        ["commit", "change"],
        ["test", "check"],
        ["build"],
        ["artifact", "failure", "feedback"],
      ],
      "On a code change, install dependencies, run relevant checks and tests, then build and produce a versioned artifact. Provide clear failure feedback and avoid deploying a build whose checks failed.",
    ],
    [
      "How would you investigate a service that suddenly stops responding?",
      [
        ["log", "metric"],
        ["network", "port", "dns"],
        ["deploy", "change"],
        ["rollback", "recover", "incident"],
      ],
      "Check health metrics and logs, recent changes, process state, and network connectivity. Follow the incident runbook, mitigate or roll back if appropriate, and record the timeline before deeper root-cause analysis.",
    ],
    [
      "Why keep infrastructure configuration in version control?",
      [
        ["history", "track"],
        ["review"],
        ["reproduce", "consistent"],
        ["secret", "rollback"],
      ],
      "Version control makes changes reviewable and reproducible and provides history for recovery. Keep secrets out of the repository and test configuration changes before applying them.",
    ],
    [
      "What makes a useful deployment rollback plan?",
      [
        ["previous", "version"],
        ["trigger", "health"],
        ["data", "migration"],
        ["test", "document"],
      ],
      "Define health checks and rollback triggers, keep a known-good version, and document steps and ownership. Consider data compatibility and migrations, and practice the plan before relying on it.",
    ],
  ],
  "ui-ux-design": [
    [
      "How would you begin redesigning a confusing registration flow?",
      [
        ["user", "research"],
        ["problem", "goal"],
        ["prototype", "wireframe"],
        ["test", "feedback"],
      ],
      "Understand the users, goals, and current problems first. Gather evidence, map the task, prototype improvements, and test whether users can complete the journey with less confusion.",
    ],
    [
      "What is the difference between a wireframe and a prototype?",
      [
        ["structure", "layout"],
        ["wireframe"],
        ["interaction", "click"],
        ["test", "prototype"],
      ],
      "A wireframe focuses on structure and layout. A prototype models interaction, often with linked screens, so the team can test a journey before committing to implementation.",
    ],
    [
      "How do you check accessibility in a design?",
      [
        ["contrast"],
        ["keyboard", "focus"],
        ["label", "screen reader"],
        ["test", "user"],
      ],
      "Check contrast, readable text, meaningful labels, keyboard focus and order, and interaction states. Use accessibility guidance and test with people and assistive technology when possible.",
    ],
    [
      "What would you observe during a usability test?",
      [
        ["task", "goal"],
        ["observe", "behavior"],
        ["neutral", "leading"],
        ["friction", "error", "findings"],
      ],
      "Give a realistic task and observe behavior without leading the person. Note errors, hesitation, completion, and their comments. Summarize patterns and prioritize the friction that blocks the goal.",
    ],
    [
      "How do you explain a design decision to an engineer?",
      [
        ["problem", "user"],
        ["constraint"],
        ["state", "behavior", "interaction"],
        ["feedback", "tradeoff"],
      ],
      "Explain the user problem, constraints, and intended behavior, including loading, empty, and error states. Discuss tradeoffs and invite implementation feedback rather than handing over only a polished screen.",
    ],
  ],
  "digital-marketing": [
    [
      "How would you plan a campaign for a new local business?",
      [["audience"], ["goal"], ["channel", "content"], ["metric", "measure"]],
      "Define the audience and business goal, choose suitable channels, plan useful content, and specify measurable indicators. Begin with a small experiment and review evidence before expanding.",
    ],
    [
      "What does search intent mean?",
      [
        ["user", "search"],
        ["goal", "need"],
        ["content", "answer"],
        ["example"],
      ],
      "Search intent is the goal behind a query. Content should answer that need: for example, a how-to query needs useful instructions, while a product comparison needs clear differences and evidence.",
    ],
    [
      "How would you judge whether a campaign worked?",
      [
        ["goal"],
        ["baseline"],
        ["metric", "conversion"],
        ["cost", "limit", "attribution"],
      ],
      "Compare relevant metrics with the goal and baseline, including conversion and cost where appropriate. Explain attribution limits and avoid treating reach alone as proof of business impact.",
    ],
    [
      "What makes useful marketing content?",
      [
        ["audience", "need"],
        ["clear", "useful"],
        ["accurate", "honest"],
        ["action", "goal"],
      ],
      "Useful content addresses a real audience need with clear, accurate information. Keep claims honest, use a consistent voice, and make the next action understandable without pressuring the reader.",
    ],
    [
      "How do you improve a campaign with limited budget?",
      [
        ["priorit", "focus"],
        ["test", "experiment"],
        ["measure", "data"],
        ["iterate", "learn"],
      ],
      "Focus on the highest-priority audience and goal, run a small test with a clear hypothesis, measure the result, and iterate. Document what was learned rather than inventing an impact.",
    ],
  ],
  "finance-business-analytics": [
    [
      "How do revenue, profit, and cash flow differ?",
      [
        ["revenue", "sales"],
        ["profit", "cost"],
        ["cash", "timing"],
        ["example"],
      ],
      "Revenue is sales earned, profit subtracts relevant costs, and cash flow tracks cash entering and leaving over time. A profitable business can still face a cash shortage when customer payments arrive late.",
    ],
    [
      "How would you check a financial spreadsheet model?",
      [
        ["formula"],
        ["assumption"],
        ["reconcile", "check"],
        ["scenario", "sensitivity"],
      ],
      "Review formulas, units, and assumptions; reconcile totals with source data; test edge cases and scenarios; and use clear checks to catch inconsistent inputs.",
    ],
    [
      "What makes a good business requirement?",
      [
        ["stakeholder", "user"],
        ["goal", "need"],
        ["specific", "clear"],
        ["acceptance", "test"],
      ],
      "A useful requirement identifies the stakeholder need and goal, states the expected behavior clearly, and includes testable acceptance criteria. Confirm assumptions and priority with the stakeholder.",
    ],
    [
      "How should uncertainty appear in a business forecast?",
      [
        ["assumption"],
        ["scenario", "range"],
        ["risk", "uncertain"],
        ["update", "actual"],
      ],
      "State the assumptions, show a plausible range or scenarios, identify important risks, and compare the forecast with actual results over time. A forecast is a planning tool rather than a guaranteed outcome.",
    ],
    [
      "How would you present an analysis to a busy manager?",
      [
        ["decision", "question"],
        ["finding", "evidence"],
        ["limitation", "assumption"],
        ["recommend", "action"],
      ],
      "Lead with the decision and key finding, show the supporting evidence, explain material limitations, and recommend a practical next step. Keep the detail available for follow-up.",
    ],
  ],
};
const behavioral: Spec[] = [
  [
    "Tell me about a project you are proud of.",
    [
      ["situation", "project", "context"],
      ["task", "goal"],
      ["action", "built", "did"],
      ["result", "learn", "outcome"],
    ],
    "Describe a real project using situation, task, action, and result. Explain your own contribution, one challenge, the evidence for the outcome, and what you learned. Do not invent metrics.",
  ],
  [
    "Describe a time you learned something difficult.",
    [
      ["challenge", "difficult"],
      ["plan", "practice"],
      ["feedback", "help"],
      ["learn", "result"],
    ],
    "Name the challenge, explain how you broke it down and practiced, mention feedback or help, and describe the result and how you would approach a similar challenge now.",
  ],
  [
    "How do you handle feedback you disagree with?",
    [
      ["listen", "understand"],
      ["question", "clarify"],
      ["evidence", "test"],
      ["respect", "improve"],
    ],
    "Listen and clarify the concern, explain your reasoning respectfully, and use evidence or a small test where possible. Agree on the next step and focus on improving the work.",
  ],
  [
    "How do you manage several competing deadlines?",
    [
      ["priorit", "impact"],
      ["plan", "break"],
      ["communicat", "stakeholder"],
      ["review", "adjust"],
    ],
    "Compare urgency and impact, break the work into tasks, communicate tradeoffs early, and agree on priorities. Review progress and adjust the plan when circumstances change.",
  ],
  [
    "Why are you interested in this career path?",
    [
      ["interest", "enjoy"],
      ["skill", "project"],
      ["learn", "grow"],
      ["contribute", "goal"],
    ],
    "Connect your interests to a concrete project or skill, describe what you are learning, and explain the contribution you want to make. Keep the answer specific and honest about your current experience.",
  ],
];
export function getInterviewQuestions(
  slug: string,
  kind: string,
): InterviewQuestion[] {
  const source =
    kind === "Behavioral"
      ? behavioral
      : (banks[slug] ?? banks["software-engineering"]);
  return source.map(([question, concepts, sample], i) => ({
    id: `${slug}-${kind}-${i}`,
    question,
    concepts,
    sample,
    hint: "Explain the idea in your own words and include a concrete example.",
    followUp:
      "Explain one tradeoff or an edge case, and how you would check your reasoning.",
  }));
}

````


## src/data/jobs.ts

````typescript
import type { Job } from "@/types/job";
export const jobs: Job[] = [
  {
    id: "demo-frontend",
    title: "Junior Frontend Developer",
    company: "Orbit Studio · fictional company",
    careerSlug: "software-engineering",
    location: "Dhaka",
    workType: "Hybrid",
    experience: "0–1 years",
    salary: "৳25,000–40,000 / month",
    skills: ["react", "javascript", "html-css", "git", "apis"],
    description:
      "Build accessible web interfaces for a fictional product studio. This listing is a practice example, not an active vacancy.",
    responsibilities: [
      "Turn designs into responsive interfaces",
      "Handle API loading and error states",
      "Review changes with the team",
    ],
  },
  {
    id: "demo-backend",
    title: "Junior Backend Developer",
    company: "Riverbyte · fictional company",
    careerSlug: "software-engineering",
    location: "Chattogram",
    workType: "On-site",
    experience: "0–2 years",
    salary: "৳30,000–45,000 / month",
    skills: ["python", "sql", "apis", "git", "docker"],
    description:
      "Practice evaluating a backend role involving APIs and structured data. This is a fictional listing.",
    responsibilities: [
      "Design and document endpoints",
      "Work with relational data",
      "Test and review service behavior",
    ],
  },
  {
    id: "demo-data",
    title: "Data Analyst",
    company: "Insight House · fictional company",
    careerSlug: "data-analytics",
    location: "Dhaka",
    workType: "Hybrid",
    experience: "0–1 years",
    salary: "৳28,000–45,000 / month",
    skills: ["sql", "excel", "visualization", "statistics", "communication"],
    description:
      "A demo analyst role turning sample business data into useful reports.",
    responsibilities: [
      "Clean reporting datasets",
      "Build focused dashboards",
      "Present findings and limitations",
    ],
  },
  {
    id: "demo-python",
    title: "Python Developer",
    company: "Cloudseed Lab · fictional company",
    careerSlug: "ai-machine-learning",
    location: "Bangladesh",
    workType: "Remote",
    experience: "1–2 years",
    salary: "৳35,000–55,000 / month",
    skills: ["python", "git", "apis", "data-cleaning", "testing"],
    description:
      "A fictional role focused on Python utilities and data workflows.",
    responsibilities: [
      "Write maintainable Python tools",
      "Review data transformations",
      "Document assumptions and write tests",
    ],
  },
  {
    id: "demo-react",
    title: "React Developer",
    company: "Pixel Dock · fictional company",
    careerSlug: "software-engineering",
    location: "Bangladesh",
    workType: "Remote",
    experience: "1–2 years",
    salary: "৳40,000–65,000 / month",
    skills: ["react", "typescript", "git", "testing", "accessibility"],
    description:
      "A demo product role with an emphasis on reliable, inclusive interfaces.",
    responsibilities: [
      "Build reusable React components",
      "Write interaction tests",
      "Improve keyboard accessibility",
    ],
  },
  {
    id: "demo-design",
    title: "Associate Product Designer",
    company: "Canvas Collective · fictional company",
    careerSlug: "ui-ux-design",
    location: "Dhaka",
    workType: "Hybrid",
    experience: "0–1 years",
    salary: "৳25,000–40,000 / month",
    skills: ["figma", "user-research", "prototyping", "accessibility"],
    description:
      "A fictional design role for an early-career portfolio demonstration.",
    responsibilities: [
      "Create and test prototypes",
      "Document research findings",
      "Collaborate with engineers",
    ],
  },
  {
    id: "demo-security",
    title: "Junior Security Analyst",
    company: "Shieldroom · fictional company",
    careerSlug: "cybersecurity",
    location: "Dhaka",
    workType: "On-site",
    experience: "0–1 years",
    salary: "৳30,000–48,000 / month",
    skills: ["networking", "linux", "security", "communication"],
    description:
      "Practice reviewing a security role with synthetic alerts and authorized labs.",
    responsibilities: [
      "Review simulated alerts",
      "Maintain incident notes",
      "Support security checklists",
    ],
  },
  {
    id: "demo-cloud",
    title: "Junior DevOps Associate",
    company: "Stack Harbor · fictional company",
    careerSlug: "cloud-devops",
    location: "Bangladesh",
    workType: "Remote",
    experience: "0–2 years",
    salary: "৳35,000–55,000 / month",
    skills: ["linux", "docker", "git", "ci-cd", "cloud"],
    description:
      "A fictional infrastructure position for exploring DevOps requirements.",
    responsibilities: [
      "Maintain demo build pipelines",
      "Document deployment steps",
      "Practice monitoring and rollback",
    ],
  },
  {
    id: "demo-marketing",
    title: "Digital Marketing Associate",
    company: "Storylane · fictional company",
    careerSlug: "digital-marketing",
    location: "Sylhet",
    workType: "Hybrid",
    experience: "0–1 years",
    salary: "৳22,000–35,000 / month",
    skills: ["content", "seo", "marketing", "excel"],
    description:
      "A fictional marketing role with sample campaigns and clear measurement plans.",
    responsibilities: [
      "Plan content calendars",
      "Review search-friendly writing",
      "Summarize sample campaign metrics",
    ],
  },
  {
    id: "demo-finance",
    title: "Junior Business Analyst",
    company: "Metric Bridge · fictional company",
    careerSlug: "finance-business-analytics",
    location: "Dhaka",
    workType: "On-site",
    experience: "0–1 years",
    salary: "৳28,000–45,000 / month",
    skills: ["excel", "finance", "sql", "communication"],
    description:
      "A demo analyst position focused on transparent models and stakeholder needs.",
    responsibilities: [
      "Check spreadsheet models",
      "Write stakeholder requirements",
      "Present scenario assumptions",
    ],
  },
];

````


## src/data/roadmaps.ts

````typescript
import type { Roadmap, RoadmapPhase } from "@/types/roadmap";
type PhaseSpec = [string, string, string, number, string, string];
const specs: Record<string, PhaseSpec[]> = {
  "software-engineering": [
    [
      "Programming fundamentals",
      "javascript",
      "Write variables, functions, loops, and small reusable utilities.",
      18,
      "A unit converter with input validation",
      "https://developer.mozilla.org/en-US/docs/Learn_web_development",
    ],
    [
      "Git & GitHub",
      "git",
      "Track your work and practice branches, commits, and reviewing changes.",
      8,
      "A repository with clear commits and a useful README",
      "https://docs.github.com/en/get-started",
    ],
    [
      "Frontend development",
      "react",
      "Build accessible layouts and understand components, state, and effects.",
      24,
      "A responsive student event planner",
      "https://react.dev/learn",
    ],
    [
      "Backend concepts",
      "typescript",
      "Understand server responsibilities, typed data, and request handling.",
      16,
      "A typed service design with example request and response objects",
      "https://www.typescriptlang.org/docs/handbook/intro.html",
    ],
    [
      "Databases & data modeling",
      "sql",
      "Model relationships and practice queries with sample datasets.",
      12,
      "A schema sketch and ten SQL practice queries",
      "https://www.postgresql.org/docs/current/tutorial.html",
    ],
    [
      "Working with APIs",
      "apis",
      "Understand HTTP, JSON, errors, and loading states.",
      12,
      "An API-driven interface with useful error handling",
      "https://developer.mozilla.org/en-US/docs/Web/HTTP",
    ],
    [
      "Testing & deployment",
      "testing",
      "Verify important interactions and learn deployment fundamentals.",
      12,
      "A test checklist, bug fixes, and a deployment guide",
      "https://web.dev/learn",
    ],
    [
      "Portfolio project",
      "problem-solving",
      "Combine your skills into a useful, documented product.",
      24,
      "A polished portfolio project with a case study",
      "https://docs.github.com/en/get-started/start-your-journey",
    ],
  ],
  "data-analytics": [
    [
      "Spreadsheet foundations",
      "excel",
      "Clean tables, use formulas, and build a pivot summary.",
      12,
      "A monthly budget workbook",
      "https://support.microsoft.com/excel",
    ],
    [
      "SQL essentials",
      "sql",
      "Filter, aggregate, and join tables to answer questions.",
      20,
      "A query notebook for a fictional shop",
      "https://www.postgresql.org/docs/current/tutorial.html",
    ],
    [
      "Statistics fundamentals",
      "statistics",
      "Interpret distributions, averages, variation, and sampling.",
      14,
      "A short report comparing two sample groups",
      "https://www.khanacademy.org/math/statistics-probability",
    ],
    [
      "Python for analysis",
      "python",
      "Use Python to inspect and transform tabular data.",
      20,
      "A reproducible analysis notebook",
      "https://pandas.pydata.org/docs/getting_started/index.html",
    ],
    [
      "Data cleaning",
      "data-cleaning",
      "Handle missing values, duplicates, and inconsistent categories.",
      12,
      "A cleaning pipeline with a quality checklist",
      "https://pandas.pydata.org/docs/getting_started/index.html",
    ],
    [
      "Visual storytelling",
      "visualization",
      "Choose charts that clearly answer a business question.",
      14,
      "A focused sales dashboard",
      "https://learn.microsoft.com/en-us/power-bi/fundamentals/",
    ],
    [
      "Communicating insights",
      "communication",
      "Explain a result, its limitations, and a practical next step.",
      8,
      "A one-page decision memo",
      "https://www.data-to-viz.com/",
    ],
    [
      "Analytics portfolio",
      "problem-solving",
      "Publish an analysis with transparent data and assumptions.",
      20,
      "An end-to-end analysis case study",
      "https://docs.github.com/en/get-started",
    ],
  ],
  "ai-machine-learning": [
    [
      "Python foundations",
      "python",
      "Write readable Python and work with notebook environments.",
      20,
      "A data exploration notebook",
      "https://docs.python.org/3/tutorial/",
    ],
    [
      "Statistics & evaluation",
      "statistics",
      "Understand probability, distributions, and useful evaluation metrics.",
      24,
      "An illustrated metrics comparison",
      "https://www.khanacademy.org/math/statistics-probability",
    ],
    [
      "Prepare your data",
      "data-cleaning",
      "Clean a dataset and create a reproducible split.",
      14,
      "A leakage-free train/test preparation script",
      "https://pandas.pydata.org/docs/getting_started/index.html",
    ],
    [
      "First learning models",
      "machine-learning",
      "Compare simple supervised models with a baseline.",
      22,
      "A classification experiment with a baseline",
      "https://scikit-learn.org/stable/getting_started.html",
    ],
    [
      "Version experiments",
      "git",
      "Track code, assumptions, parameters, and results.",
      10,
      "A documented experiment repository",
      "https://docs.github.com/en/get-started",
    ],
    [
      "Error analysis",
      "problem-solving",
      "Inspect mistakes and improve the data or modeling choice.",
      14,
      "An error analysis report",
      "https://scikit-learn.org/stable/modules/model_evaluation.html",
    ],
    [
      "Model interfaces",
      "apis",
      "Design a simple interface and document expected inputs.",
      12,
      "A model interface specification and demo",
      "https://developer.mozilla.org/en-US/docs/Web/HTTP",
    ],
    [
      "Responsible ML portfolio",
      "machine-learning",
      "Publish results with limitations and reproducible instructions.",
      24,
      "An ML case study with a model card",
      "https://scikit-learn.org/stable/",
    ],
  ],
  cybersecurity: [
    [
      "Networking basics",
      "networking",
      "Understand IP addresses, ports, DNS, and HTTP.",
      18,
      "A diagram of a request moving through a network",
      "https://developer.mozilla.org/en-US/docs/Web/HTTP",
    ],
    [
      "Linux essentials",
      "linux",
      "Navigate files, permissions, processes, and logs.",
      18,
      "A documented Linux practice lab",
      "https://ubuntu.com/tutorials/command-line-for-beginners",
    ],
    [
      "Security foundations",
      "security",
      "Understand threats, risk, least privilege, and defense in depth.",
      16,
      "A threat model for a fictional application",
      "https://owasp.org/www-project-top-ten/",
    ],
    [
      "Automate small tasks",
      "python",
      "Parse synthetic logs and summarize suspicious events.",
      16,
      "A synthetic log parser",
      "https://docs.python.org/3/tutorial/",
    ],
    [
      "Authorized web labs",
      "security",
      "Practice identifying vulnerabilities only in permitted labs.",
      20,
      "An authorized lab write-up with fixes",
      "https://owasp.org/www-project-webgoat/",
    ],
    [
      "Investigation skills",
      "problem-solving",
      "Build a timeline and separate evidence from assumptions.",
      14,
      "A mock incident investigation",
      "https://www.wireshark.org/docs/",
    ],
    [
      "Clear risk reports",
      "communication",
      "Explain severity, impact, and practical mitigations.",
      10,
      "A concise security assessment report",
      "https://owasp.org/",
    ],
    [
      "Security portfolio",
      "security",
      "Collect responsible, reproducible demonstrations of your skills.",
      20,
      "A security lab portfolio",
      "https://docs.github.com/en/get-started",
    ],
  ],
  "cloud-devops": [
    [
      "Linux & shell",
      "linux",
      "Navigate systems and write useful shell commands.",
      18,
      "A server maintenance checklist",
      "https://ubuntu.com/tutorials/command-line-for-beginners",
    ],
    [
      "Git workflows",
      "git",
      "Use branches, review changes, and track configuration.",
      10,
      "A version-controlled configuration repository",
      "https://docs.github.com/en/get-started",
    ],
    [
      "Networking foundations",
      "networking",
      "Understand DNS, ports, TLS, and connectivity.",
      14,
      "A network troubleshooting guide",
      "https://developer.mozilla.org/en-US/docs/Web/HTTP",
    ],
    [
      "Containers",
      "docker",
      "Build images and understand container configuration.",
      18,
      "A containerized demo with a clear README",
      "https://docs.docker.com/get-started/",
    ],
    [
      "Cloud foundations",
      "cloud",
      "Understand compute, storage, permissions, and cost controls.",
      18,
      "A cloud architecture and cost-control plan",
      "https://learn.microsoft.com/en-us/training/azure/",
    ],
    [
      "Automated pipelines",
      "ci-cd",
      "Run checks and package an application through a pipeline.",
      16,
      "A working build and test pipeline",
      "https://docs.github.com/en/actions",
    ],
    [
      "Reliability basics",
      "problem-solving",
      "Document recovery, monitoring, and rollback decisions.",
      12,
      "An incident runbook",
      "https://sre.google/books/",
    ],
    [
      "DevOps portfolio",
      "cloud",
      "Present an automated delivery workflow and its tradeoffs.",
      22,
      "A delivery pipeline case study",
      "https://docs.github.com/en/get-started",
    ],
  ],
  "ui-ux-design": [
    [
      "Design foundations",
      "figma",
      "Practice spacing, typography, color, and visual hierarchy.",
      14,
      "A small interface style guide",
      "https://help.figma.com/",
    ],
    [
      "Understand users",
      "user-research",
      "Define a question and conduct short, consent-based interviews.",
      14,
      "A research plan and synthesized notes",
      "https://www.nngroup.com/articles/",
    ],
    [
      "Wireframe a journey",
      "prototyping",
      "Map a task and explore simple layout alternatives.",
      12,
      "A campus registration wireframe",
      "https://help.figma.com/",
    ],
    [
      "Interactive prototypes",
      "prototyping",
      "Connect screens and clarify important interaction states.",
      18,
      "A clickable mobile prototype",
      "https://help.figma.com/",
    ],
    [
      "Accessible interfaces",
      "accessibility",
      "Check contrast, keyboard use, labels, and touch targets.",
      12,
      "An accessibility review with fixes",
      "https://www.w3.org/WAI/fundamentals/",
    ],
    [
      "Test and iterate",
      "user-research",
      "Observe users attempting a task and improve the flow.",
      14,
      "A usability findings report",
      "https://www.nngroup.com/articles/",
    ],
    [
      "Present your decisions",
      "communication",
      "Explain the problem, constraints, decisions, and results.",
      10,
      "A clear design case study",
      "https://help.figma.com/",
    ],
    [
      "Design portfolio",
      "figma",
      "Polish a case study and show how feedback changed your work.",
      20,
      "A portfolio with two detailed case studies",
      "https://help.figma.com/",
    ],
  ],
  "digital-marketing": [
    [
      "Audience research",
      "marketing",
      "Define an audience and identify their needs and channels.",
      12,
      "A fictional campaign audience brief",
      "https://skillshop.withgoogle.com/",
    ],
    [
      "Content foundations",
      "content",
      "Write useful, clear content with a consistent voice.",
      14,
      "A one-week content calendar",
      "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
    ],
    [
      "Search essentials",
      "seo",
      "Understand indexing, search intent, and on-page structure.",
      14,
      "An SEO review of your own website",
      "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
    ],
    [
      "Campaign planning",
      "marketing",
      "Set goals, choose channels, and define a realistic experiment.",
      12,
      "A fictional local-business campaign plan",
      "https://skillshop.withgoogle.com/",
    ],
    [
      "Measurement basics",
      "excel",
      "Organize sample campaign data and calculate basic metrics.",
      12,
      "A sample campaign workbook",
      "https://support.microsoft.com/excel",
    ],
    [
      "Tell a visual story",
      "visualization",
      "Explain campaign performance with clear charts.",
      10,
      "A campaign reporting dashboard",
      "https://support.google.com/analytics/",
    ],
    [
      "Present improvements",
      "communication",
      "Separate evidence from assumptions and propose next steps.",
      8,
      "A campaign review presentation",
      "https://skillshop.withgoogle.com/",
    ],
    [
      "Marketing portfolio",
      "content",
      "Publish your plan and measurement approach without invented results.",
      16,
      "A transparent campaign case study",
      "https://docs.github.com/en/get-started",
    ],
  ],
  "finance-business-analytics": [
    [
      "Spreadsheet fluency",
      "excel",
      "Use formulas, tables, validation, and checks.",
      16,
      "A checked monthly budgeting workbook",
      "https://support.microsoft.com/excel",
    ],
    [
      "Finance fundamentals",
      "finance",
      "Read basic statements and understand revenue, cost, and cash flow.",
      18,
      "A fictional business financial summary",
      "https://www.khanacademy.org/economics-finance-domain",
    ],
    [
      "SQL for business",
      "sql",
      "Query sample transactions and summarize performance.",
      16,
      "A business KPI query pack",
      "https://www.postgresql.org/docs/current/tutorial.html",
    ],
    [
      "Statistics for decisions",
      "statistics",
      "Understand variation, sampling, and uncertainty.",
      14,
      "A decision brief using sample evidence",
      "https://www.khanacademy.org/math/statistics-probability",
    ],
    [
      "Scenario modeling",
      "finance",
      "Create transparent assumptions and compare scenarios.",
      16,
      "A simple financial scenario model",
      "https://support.microsoft.com/excel",
    ],
    [
      "Business dashboards",
      "visualization",
      "Connect metrics to a clear stakeholder question.",
      14,
      "A fictional business dashboard",
      "https://learn.microsoft.com/en-us/power-bi/fundamentals/",
    ],
    [
      "Stakeholder communication",
      "communication",
      "Write requirements and present actionable recommendations.",
      10,
      "A business process improvement proposal",
      "https://www.iiba.org/",
    ],
    [
      "Business portfolio",
      "problem-solving",
      "Combine a model, analysis, and recommendation into a case study.",
      20,
      "An end-to-end business analysis",
      "https://docs.github.com/en/get-started",
    ],
  ],
};
export const roadmaps: Roadmap[] = Object.entries(specs).map(
  ([careerSlug, phases]) => ({
    careerSlug,
    phases: phases.map(
      (
        [title, skill, description, hours, deliverable, url],
        index,
      ): RoadmapPhase => ({
        id: `${careerSlug}-phase-${index + 1}`,
        title,
        description,
        hours,
        skills: [skill],
        resource: { label: "Learning reference", url },
        tasks: [
          {
            id: `${careerSlug}-${index}-learn`,
            title: `Learn: ${title.toLowerCase()}`,
            detail: description,
            skillId: skill,
          },
          {
            id: `${careerSlug}-${index}-practice`,
            title: "Practice with a small exercise",
            detail: `Work through one example, then recreate it without following along. Write down what was difficult.`,
            skillId: skill,
          },
          {
            id: `${careerSlug}-${index}-build`,
            title: deliverable,
            detail:
              "Save your work, explain one decision, and ask a peer for feedback.",
            skillId: skill,
          },
        ],
      }),
    ),
  }),
);
export const getRoadmap = (slug: string) =>
  roadmaps.find((r) => r.careerSlug === slug);

````


## src/data/skills.ts

````typescript
export const skills = [
  { id: "javascript", name: "JavaScript", group: "Development" },
  { id: "typescript", name: "TypeScript", group: "Development" },
  { id: "react", name: "React", group: "Development" },
  { id: "html-css", name: "HTML & CSS", group: "Development" },
  { id: "python", name: "Python", group: "Development" },
  { id: "git", name: "Git & GitHub", group: "Development" },
  { id: "apis", name: "REST APIs", group: "Development" },
  { id: "testing", name: "Testing", group: "Development" },
  { id: "sql", name: "SQL", group: "Data" },
  { id: "excel", name: "Excel", group: "Data" },
  { id: "statistics", name: "Statistics", group: "Data" },
  { id: "visualization", name: "Data Visualization", group: "Data" },
  { id: "machine-learning", name: "Machine Learning", group: "Data" },
  { id: "data-cleaning", name: "Data Cleaning", group: "Data" },
  { id: "linux", name: "Linux", group: "Infrastructure" },
  { id: "networking", name: "Networking", group: "Infrastructure" },
  { id: "security", name: "Security Fundamentals", group: "Infrastructure" },
  { id: "cloud", name: "Cloud Fundamentals", group: "Infrastructure" },
  { id: "docker", name: "Docker", group: "Infrastructure" },
  { id: "ci-cd", name: "CI/CD", group: "Infrastructure" },
  { id: "figma", name: "Figma", group: "Design" },
  { id: "user-research", name: "User Research", group: "Design" },
  { id: "prototyping", name: "Prototyping", group: "Design" },
  { id: "accessibility", name: "Accessibility", group: "Design" },
  { id: "seo", name: "SEO", group: "Business" },
  { id: "content", name: "Content Writing", group: "Business" },
  { id: "marketing", name: "Digital Marketing", group: "Business" },
  { id: "finance", name: "Financial Analysis", group: "Business" },
  { id: "communication", name: "Communication", group: "Professional" },
  { id: "problem-solving", name: "Problem Solving", group: "Professional" },
] as const;
export const skillName = (id: string): string =>
  skills.find((s) => s.id === id)?.name ?? id;
export const interestOptions = [
  "Technology",
  "AI",
  "Data",
  "Design",
  "Business",
  "Security",
  "Cloud",
  "Marketing",
  "Finance",
  "Writing",
];
export const locations = [
  "Dhaka",
  "Chattogram",
  "Rajshahi",
  "Khulna",
  "Sylhet",
  "Barishal",
  "Rangpur",
  "Mymensingh",
  "Cumilla",
  "Gazipur",
  "Narayanganj",
  "Other city in Bangladesh",
];

````


## src/hooks/useCareerAI.tsx

````tsx
"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type {
  AppState,
  UserProfile,
  CVData,
  InterviewSession,
} from "@/types/user";
import {
  initialState,
  readStorage,
  writeStorage,
  sanitizeState,
  STORAGE_KEY,
} from "@/lib/storage";
import { createDemoState } from "@/data/demo";
import { getCareer } from "@/data/careers";
interface CareerContext {
  state: AppState;
  hydrated: boolean;
  toast: string;
  warning: string;
  updateProfile: (patch: Partial<UserProfile>) => void;
  answerQuestion: (id: string, answer: string) => void;
  selectCareer: (slug: string) => void;
  toggleTask: (slug: string, id: string) => void;
  updateCV: (patch: Partial<CVData>) => void;
  setInterview: (session: InterviewSession | null) => void;
  toggleTheme: () => void;
  loadDemo: () => void;
  reset: () => void;
  toggleSavedJob: (id: string) => void;
  notify: (message: string) => void;
  dismissWarning: () => void;
}
const Context = createContext<CareerContext | null>(null);
export function CareerAIProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(initialState);
  const [hydrated, setHydrated] = useState(false),
    [toast, setToast] = useState(""),
    [warning, setWarning] = useState("");
  useEffect(() => {
    const saved = readStorage();
    setState(saved.state);
    setWarning(saved.warning);
    setHydrated(true);
    const sync = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) {
        try {
          setState(
            event.newValue
              ? sanitizeState(JSON.parse(event.newValue))
              : initialState(),
          );
        } catch {
          setWarning(
            "A saved change could not be read. Your current work is still available.",
          );
        }
      }
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);
  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.dataset.theme = state.theme;
    document.documentElement.style.colorScheme = state.theme;
    if (!writeStorage(state))
      setWarning(
        "Your browser could not save changes. Keep this tab open; progress is available for this session.",
      );
  }, [state, hydrated]);
  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 3600);
    return () => window.clearTimeout(timer);
  }, [toast]);
  const api: CareerContext = {
    state,
    hydrated,
    toast,
    warning,
    updateProfile: (patch) =>
      setState((s) => ({
        ...s,
        profile: { ...s.profile, ...patch },
        demo: false,
      })),
    answerQuestion: (id, answer) =>
      setState((s) => ({
        ...s,
        assessment: { ...s.assessment, [id]: answer },
      })),
    selectCareer: (slug) => {
      if (getCareer(slug)) {
        setState((s) => ({ ...s, selectedCareer: slug }));
        setToast("Career path updated. Your skill gap and roadmap are ready.");
      }
    },
    toggleTask: (slug, id) =>
      setState((s) => {
        const completed = s.completedTasks[slug] ?? [];
        return {
          ...s,
          completedTasks: {
            ...s.completedTasks,
            [slug]: completed.includes(id)
              ? completed.filter((t) => t !== id)
              : [...completed, id],
          },
        };
      }),
    updateCV: (patch) => setState((s) => ({ ...s, cv: { ...s.cv, ...patch } })),
    setInterview: (session) => setState((s) => ({ ...s, interview: session })),
    toggleTheme: () =>
      setState((s) => ({ ...s, theme: s.theme === "dark" ? "light" : "dark" })),
    loadDemo: () => {
      setState((s) => createDemoState(s.theme));
      setToast("Zahid's demo profile is ready to explore.");
    },
    reset: () => {
      setState((s) => ({ ...initialState(), theme: s.theme }));
      setToast("Profile cleared. You can start fresh.");
    },
    toggleSavedJob: (id) =>
      setState((s) => ({
        ...s,
        savedJobs: s.savedJobs.includes(id)
          ? s.savedJobs.filter((j) => j !== id)
          : [...s.savedJobs, id],
      })),
    notify: setToast,
    dismissWarning: () => setWarning(""),
  };
  return <Context.Provider value={api}>{children}</Context.Provider>;
}
export function useCareerAI(): CareerContext {
  const ctx = useContext(Context);
  if (!ctx) throw new Error("CareerAIProvider is required");
  return ctx;
}

````


## src/lib/careerEngine.ts

````typescript
import { careers } from "@/data/careers";
import { assessmentQuestions } from "@/data/assessmentQuestions";
import type { CareerMatch } from "@/types/career";
import type { UserProfile } from "@/types/user";
import type { AssessmentAnswers } from "@/types/assessment";
import { skillName } from "@/data/skills";
export function recommendCareers(
  profile: UserProfile,
  answers: AssessmentAnswers,
): CareerMatch[] {
  return careers
    .map((career) => {
      const interestHits = career.interests.filter((i) =>
        profile.interests.includes(i),
      );
      const owned = career.skills.filter((s) => profile.skills.includes(s.id));
      const answerFit =
        assessmentQuestions.reduce((sum, q) => {
          const option = q.options.find((o) => o.id === answers[q.id]);
          return (
            sum +
            Math.max(0, ...career.axes.map((axis) => option?.scores[axis] ?? 0))
          );
        }, 0) /
        (assessmentQuestions.length * 5);
      const interestFit =
        interestHits.length / Math.max(1, career.interests.length);
      const skillFit = owned.length / Math.max(1, career.skills.length);
      const educationFit = ["Diploma", "Bachelor's", "Master's"].includes(
        profile.education,
      )
        ? 3
        : profile.education
          ? 2
          : 0;
      const workFit = career.workStyles.includes(profile.workStyle)
        ? 3
        : profile.workStyle
          ? 1
          : 0;
      const match = Math.round(
        Math.min(
          96,
          30 +
            24 * interestFit +
            18 * skillFit +
            22 * answerFit +
            educationFit +
            workFit,
        ),
      );
      const reasons = [
        interestHits.length
          ? `Your interest in ${interestHits.join(" and ")} connects with this path.`
          : "This path offers a different direction worth exploring.",
        owned.length
          ? `You already bring ${owned
              .slice(0, 3)
              .map((s) => skillName(s.id))
              .join(", ")}.`
          : "You can start with foundational skills and small projects.",
        answerFit > 0.5
          ? "Your responses show interest in the kinds of tasks this career involves."
          : "Explore a small project to see whether the daily work suits you.",
        career.workStyles.includes(profile.workStyle)
          ? `Your preference for ${profile.workStyle.toLowerCase()} work aligns with common ways teams collaborate.`
          : "Compare the work environment with your own preferences.",
      ];
      return {
        career,
        match,
        reasons,
        strengths: owned.map((s) => skillName(s.id)),
        gaps: career.skills
          .filter((s) => !profile.skills.includes(s.id))
          .slice(0, 5)
          .map((s) => skillName(s.id)),
      };
    })
    .sort((a, b) => b.match - a.match);
}
export const assessmentComplete = (answers: AssessmentAnswers) =>
  assessmentQuestions.every((q) =>
    q.options.some((o) => o.id === answers[q.id]),
  );

````


## src/lib/cvEngine.ts

````typescript
import type { CVData } from "@/types/user";
import type { Career } from "@/types/career";
export function suggestSummary(cv: CVData, career?: Career): string {
  const skillList = cv.skills
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 4);
  const education = cv.education.find((e) => e.title.trim())?.title;
  const project = cv.projects.find((p) => p.title.trim())?.title;
  const sentences = [
    `${education ? `${education} learner` : `Aspiring ${career?.shortName ?? "early-career professional"}`} developing practical skills${skillList.length ? ` in ${skillList.join(", ")}` : " through focused learning"}.`,
    project
      ? `Current work includes ${project}, with an emphasis on clear decisions and a useful user experience.`
      : "Seeking opportunities to apply learning through practical projects and team collaboration.",
  ];
  if (cv.summary.trim().length > 35)
    sentences.push(
      `Focus: ${cv.summary
        .trim()
        .replace(/\s+/g, " ")
        .slice(0, 160)
        .replace(/[.!?]+$/, "")}.`,
    );
  return sentences.join(" ");
}
export function cvAsText(cv: CVData): string {
  return [
    cv.name,
    [cv.email, cv.phone, cv.location, cv.website].filter(Boolean).join(" | "),
    cv.summary,
    ...(["education", "experience", "projects"] as const).flatMap((section) =>
      cv[section].length
        ? [
            section.toUpperCase(),
            ...cv[section].map(
              (item) =>
                `${item.title} | ${item.organization} | ${item.period}\n${item.description}`,
            ),
          ]
        : [],
    ),
    cv.skills ? `SKILLS\n${cv.skills}` : "",
    cv.achievements ? `ACHIEVEMENTS\n${cv.achievements}` : "",
  ]
    .filter(Boolean)
    .join("\n\n");
}

````


## src/lib/id.ts

````typescript
let sequence = 0;

// Form entry identifiers also work on plain HTTP previews on a local network.
export function createId(): string {
  if (typeof globalThis.crypto?.randomUUID === "function") {
    return globalThis.crypto.randomUUID();
  }
  sequence += 1;
  return `entry-${Date.now().toString(36)}-${sequence}-${Math.random().toString(36).slice(2, 9)}`;
}

````


## src/lib/interviewEngine.ts

````typescript
import type { InterviewQuestion } from "@/data/interviewQuestions";
import type { InterviewFeedback } from "@/types/user";
export function evaluateAnswer(
  question: InterviewQuestion,
  answer: string,
  difficulty: string,
): InterviewFeedback {
  const text = answer.toLowerCase().trim(),
    words = text.split(/\s+/).filter(Boolean).length;
  const concepts = question.concepts.filter((group) =>
    group.some((term) => text.includes(term)),
  ).length;
  const target = difficulty === "Intermediate" ? 90 : 45;
  const technical = Math.round((concepts / question.concepts.length) * 100);
  const clarity = Math.min(
    100,
    Math.round(
      Math.min(1, words / 25) * 70 +
        (/[.!?]/.test(text) ? 15 : 0) +
        (/for example|for instance|because|first|then|so that/.test(text)
          ? 15
          : 0),
    ),
  );
  const completeness = Math.min(
    100,
    Math.round(
      Math.min(1, words / target) * 50 +
        (concepts / question.concepts.length) * 50,
    ),
  );
  return {
    technical,
    clarity,
    completeness,
    positives: [
      ...(concepts >= 2
        ? ["You covered several core concepts from this question."]
        : []),
      ...(words >= 25
        ? ["You gave enough detail to begin a useful discussion."]
        : []),
      ...(/example|for instance/.test(text)
        ? ["An example helps make your explanation concrete."]
        : []),
    ],
    improvements: [
      ...(concepts < question.concepts.length
        ? [
            `Consider discussing: ${question.concepts
              .filter((group) => !group.some((term) => text.includes(term)))
              .map((group) => group[0])
              .join(", ")}.`,
          ]
        : []),
      ...(words < target
        ? ["Develop your explanation with a concrete example and one tradeoff."]
        : []),
      ...(!/[.!?]/.test(text)
        ? ["Use short sentences to make the answer easier to follow."]
        : []),
    ],
  };
}

````


## src/lib/progress.ts

````typescript
import type { AppState } from "@/types/user";
import { getCareer } from "@/data/careers";
import { getRoadmap } from "@/data/roadmaps";
export function roadmapProgress(state: AppState, slug = state.selectedCareer) {
  const total =
    getRoadmap(slug)?.phases.reduce((n, p) => n + p.tasks.length, 0) ?? 0;
  return total
    ? Math.round(((state.completedTasks[slug]?.length ?? 0) / total) * 100)
    : 0;
}
export function skillLevel(
  state: AppState,
  skillId: string,
  slug = state.selectedCareer,
) {
  const initial =
    state.profile.skillLevels[skillId] ??
    (state.profile.skills.includes(skillId) ? 40 : 0);
  const count =
    getRoadmap(slug)
      ?.phases.flatMap((p) => p.tasks)
      .filter(
        (t) =>
          t.skillId === skillId && state.completedTasks[slug]?.includes(t.id),
      ).length ?? 0;
  return Math.min(100, initial + count * 5);
}
export function cvReadiness(state: AppState) {
  const c = state.cv;
  return Math.min(
    100,
    (c.name.trim() ? 10 : 0) +
      (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email) ? 10 : 0) +
      (c.phone.trim() ? 5 : 0) +
      (c.location.trim() ? 5 : 0) +
      (c.summary.trim().length >= 60 ? 15 : 0) +
      (c.education.some((e) => e.title.trim() && e.organization.trim())
        ? 15
        : 0) +
      (c.experience.some((e) => e.title.trim() && e.description.trim())
        ? 10
        : 0) +
      (c.projects.some(
        (p) => p.title.trim() && p.description.trim().length >= 30,
      )
        ? 15
        : 0) +
      (c.skills.split(",").filter((s) => s.trim()).length >= 3 ? 10 : 0) +
      (c.achievements.trim() ? 5 : 0),
  );
}
export function readiness(state: AppState) {
  const career = getCareer(state.selectedCareer);
  const skill = career
    ? Math.round(
        (career.skills.reduce(
          (sum, s) => sum + Math.min(1, skillLevel(state, s.id) / s.target),
          0,
        ) /
          career.skills.length) *
          100,
      )
    : 0;
  const cv = cvReadiness(state);
  const project = state.cv.projects.filter(
    (p) => p.title.trim() && p.description.trim().length >= 30,
  );
  const portfolio = Math.min(
    100,
    project.length * 35 +
      (project.some((p) => p.organization.trim()) ? 15 : 0) +
      (state.cv.website.trim() ? 15 : 0),
  );
  const answers =
    state.interview?.careerSlug === state.selectedCareer
      ? state.interview.answers
      : [];
  const interview = answers.length
    ? Math.round(
        answers.reduce(
          (sum, a) =>
            sum +
            (a.feedback.technical +
              a.feedback.clarity +
              a.feedback.completeness) /
              3,
          0,
        ) / 5,
      )
    : 0;
  const overall = Math.round(
    skill * 0.4 + cv * 0.25 + portfolio * 0.15 + interview * 0.2,
  );
  return { skill, cv, portfolio, interview, overall };
}
export const learningMinutes = (time: string) =>
  time === "30 min/day"
    ? 30
    : time === "2 hours/day"
      ? 120
      : time === "3+ hours/day"
        ? 180
        : 60;

````


## src/lib/storage.ts

````typescript
import { emptyCV } from "@/data/cvTemplates";
import { careers } from "@/data/careers";
import { assessmentQuestions } from "@/data/assessmentQuestions";
import { skills } from "@/data/skills";
import { getRoadmap } from "@/data/roadmaps";
import type { AppState, CVItem, InterviewFeedback } from "@/types/user";
export const STORAGE_KEY = "careerai:state:v1";
export function initialState(): AppState {
  return {
    profile: {
      name: "",
      education: "",
      status: "",
      location: "",
      interests: [],
      skills: [],
      skillLevels: {},
      workStyle: "",
      learningTime: "1 hour/day",
      onboarded: false,
    },
    assessment: {},
    selectedCareer: "",
    completedTasks: {},
    cv: { ...emptyCV, education: [], experience: [], projects: [] },
    interview: null,
    theme: "dark",
    savedJobs: [],
    demo: false,
  };
}
const record = (value: unknown): Record<string, unknown> =>
  value !== null && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};
const str = (v: unknown) => (typeof v === "string" ? v.slice(0, 20000) : "");
const strings = (v: unknown) =>
  Array.isArray(v)
    ? v.filter((s): s is string => typeof s === "string").slice(0, 200)
    : [];
const percent = (v: unknown) =>
  typeof v === "number" && Number.isFinite(v)
    ? Math.max(0, Math.min(100, Math.round(v)))
    : 0;
const cvItems = (v: unknown): CVItem[] =>
  Array.isArray(v)
    ? v.slice(0, 20).map((item) => {
        const r = record(item);
        return {
          id: str(r.id),
          title: str(r.title),
          organization: str(r.organization),
          period: str(r.period),
          description: str(r.description),
        };
      })
    : [];
export function sanitizeState(value: unknown): AppState {
  const r = record(value),
    p = record(r.profile),
    c = record(r.cv),
    defaults = initialState();
  const levels = record(p.skillLevels),
    answers = record(r.assessment),
    completed = record(r.completedTasks);
  const profile = {
    ...defaults.profile,
    name: str(p.name),
    education: str(p.education),
    status: str(p.status),
    location: str(p.location),
    interests: strings(p.interests),
    skills: strings(p.skills).filter((id) => skills.some((s) => s.id === id)),
    skillLevels: Object.fromEntries(
      skills
        .filter((s) => s.id in levels)
        .map((s) => [s.id, percent(levels[s.id])]),
    ),
    workStyle: str(p.workStyle),
    learningTime: str(p.learningTime) || "1 hour/day",
    onboarded: p.onboarded === true,
  };
  const assessment = Object.fromEntries(
    assessmentQuestions
      .filter((q) => q.options.some((o) => o.id === answers[q.id]))
      .map((q) => [q.id, str(answers[q.id])]),
  );
  const completedTasks = Object.fromEntries(
    careers.map((career) => {
      const valid = new Set(
        getRoadmap(career.slug)?.phases.flatMap((phase) =>
          phase.tasks.map((t) => t.id),
        ) ?? [],
      );
      return [
        career.slug,
        [
          ...new Set(
            strings(completed[career.slug]).filter((id) => valid.has(id)),
          ),
        ],
      ];
    }),
  );
  let interview: AppState["interview"] = null;
  const session = record(r.interview);
  if (
    careers.some((career) => career.slug === session.careerSlug) &&
    Array.isArray(session.answers)
  ) {
    interview = {
      careerSlug: str(session.careerSlug),
      role: str(session.role),
      difficulty: str(session.difficulty),
      kind: str(session.kind) || "Technical",
      finished: session.finished === true,
      answers: session.answers.slice(0, 5).map((value) => {
        const a = record(value),
          f = record(a.feedback);
        const feedback: InterviewFeedback = {
          technical: percent(f.technical),
          clarity: percent(f.clarity),
          completeness: percent(f.completeness),
          positives: strings(f.positives),
          improvements: strings(f.improvements),
        };
        return {
          questionId: str(a.questionId),
          answer: str(a.answer),
          feedback,
        };
      }),
    };
  }
  return {
    profile,
    assessment,
    selectedCareer: careers.some((career) => career.slug === r.selectedCareer)
      ? str(r.selectedCareer)
      : "",
    completedTasks,
    cv: {
      name: str(c.name),
      email: str(c.email),
      phone: str(c.phone),
      location: str(c.location),
      website: str(c.website),
      summary: str(c.summary),
      education: cvItems(c.education),
      experience: cvItems(c.experience),
      projects: cvItems(c.projects),
      skills: str(c.skills),
      achievements: str(c.achievements),
      template: c.template === "modern" ? "modern" : "classic",
    },
    interview,
    theme: r.theme === "light" ? "light" : "dark",
    savedJobs: strings(r.savedJobs),
    demo: r.demo === true,
  };
}
export function readStorage(): { state: AppState; warning: string } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return {
      state: raw ? sanitizeState(JSON.parse(raw)) : initialState(),
      warning: "",
    };
  } catch {
    return {
      state: initialState(),
      warning:
        "Saved data could not be read. You can continue with a fresh profile.",
    };
  }
}
export function writeStorage(state: AppState): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}

````


## src/types/assessment.ts

````typescript
import type { Axis } from "./career";
export interface AssessmentOption {
  id: string;
  label: string;
  description: string;
  scores: Partial<Record<Axis, number>>;
}
export interface AssessmentQuestion {
  id: string;
  question: string;
  hint: string;
  options: AssessmentOption[];
}
export type AssessmentAnswers = Record<string, string>;

````


## src/types/career.ts

````typescript
export type Axis =
  | "code"
  | "data"
  | "design"
  | "business"
  | "security"
  | "cloud";
export interface CareerSkill {
  id: string;
  target: number;
  priority: "High" | "Medium" | "Low";
}
export interface Career {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  icon: string;
  color: string;
  description: string;
  overview: string;
  responsibilities: string[];
  interests: string[];
  axes: Axis[];
  tools: string[];
  workStyles: string[];
  skills: CareerSkill[];
  levels: { beginner: string[]; intermediate: string[]; advanced: string[] };
  projects: string[];
  interviewTopics: string[];
}
export interface CareerMatch {
  career: Career;
  match: number;
  reasons: string[];
  strengths: string[];
  gaps: string[];
}

````


## src/types/job.ts

````typescript
export interface Job {
  id: string;
  title: string;
  company: string;
  careerSlug: string;
  location: string;
  workType: string;
  experience: string;
  salary: string;
  skills: string[];
  description: string;
  responsibilities: string[];
}

````


## src/types/roadmap.ts

````typescript
export interface RoadmapTask {
  id: string;
  title: string;
  detail: string;
  skillId: string;
}
export interface RoadmapPhase {
  id: string;
  title: string;
  description: string;
  hours: number;
  skills: string[];
  tasks: RoadmapTask[];
  resource: { label: string; url: string };
}
export interface Roadmap {
  careerSlug: string;
  phases: RoadmapPhase[];
}

````


## src/types/user.ts

````typescript
import type { AssessmentAnswers } from "./assessment";
export interface UserProfile {
  name: string;
  education: string;
  status: string;
  location: string;
  interests: string[];
  skills: string[];
  skillLevels: Record<string, number>;
  workStyle: string;
  learningTime: string;
  onboarded: boolean;
}
export interface CVItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
}
export interface CVData {
  name: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  summary: string;
  education: CVItem[];
  experience: CVItem[];
  projects: CVItem[];
  skills: string;
  achievements: string;
  template: "classic" | "modern";
}
export interface InterviewFeedback {
  technical: number;
  clarity: number;
  completeness: number;
  positives: string[];
  improvements: string[];
}
export interface InterviewAnswer {
  questionId: string;
  answer: string;
  feedback: InterviewFeedback;
}
export interface InterviewSession {
  careerSlug: string;
  role: string;
  difficulty: string;
  kind: string;
  answers: InterviewAnswer[];
  finished: boolean;
}
export interface AppState {
  profile: UserProfile;
  assessment: AssessmentAnswers;
  selectedCareer: string;
  completedTasks: Record<string, string[]>;
  cv: CVData;
  interview: InterviewSession | null;
  theme: "dark" | "light";
  savedJobs: string[];
  demo: boolean;
}

````


## public/favicon.svg

````xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" rx="14" fill="#7769ff"/><path d="M30 14a13 13 0 1 0 0 20" stroke="white" stroke-width="5" fill="none" stroke-linecap="round"/><path d="m34 10 2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#c6f5d7"/></svg>

````


## scripts/preview.mjs

````javascript
// Local tooling only: serves the exported frontend files. No API or application backend.
import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { resolve, extname, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../out/", import.meta.url)).replace(
  /\/$/,
  "",
);
const port = Number(process.env.PORT || 3000);
if (!Number.isInteger(port) || port < 1 || port > 65535)
  throw new Error("PORT must be between 1 and 65535.");
if (!existsSync(resolve(root, "index.html")))
  throw new Error("Run npm run build first to create out/.");
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

const server = createServer((request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end();
    return;
  }
  try {
    const url = new URL(request.url || "/", "http://localhost");
    let target = resolve(root, `.${decodeURIComponent(url.pathname)}`);
    if (target !== root && !target.startsWith(root + sep)) {
      response.writeHead(403);
      response.end();
      return;
    }
    if (existsSync(target) && statSync(target).isDirectory()) {
      if (!url.pathname.endsWith("/")) {
        response.writeHead(308, { Location: url.pathname + "/" + url.search });
        response.end();
        return;
      }
      target = resolve(target, "index.html");
    }
    let status = 200;
    if (!existsSync(target) || !statSync(target).isFile()) {
      target = resolve(root, "404.html");
      status = 404;
    }
    response.writeHead(status, {
      "Content-Type": types[extname(target)] || "application/octet-stream",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    });
    if (request.method === "HEAD") {
      response.end();
      return;
    }
    createReadStream(target)
      .on("error", () => response.destroy())
      .pipe(response);
  } catch {
    response.writeHead(400);
    response.end("Invalid file path.");
  }
});
server.on("error", (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
server.listen(port, "127.0.0.1", () =>
  console.log(`CareerAI preview: http://localhost:${port}`),
);

````
