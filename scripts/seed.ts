import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!supabaseUrl || !serviceRoleKey) throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
const supabase = createClient(supabaseUrl, serviceRoleKey, { auth: { persistSession: false } });
const skills = [
  {
    "slug": "react-hooks",
    "title": "React Hooks Patterns",
    "description": "Manage state, effects, refs, memoization, and custom hooks without stale closures or render loops.",
    "tags": [
      "react",
      "frontend",
      "hooks"
    ],
    "markdown": "# React Hooks Patterns\n**Tags:** react, frontend, hooks\n\n## Quick Reference\n- Goal: Manage state, effects, refs, memoization, and custom hooks without stale closures or render loops.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nReact Hooks Patterns works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "nextjs-app-router",
    "title": "Next.js App Router",
    "description": "Build production routes, layouts, metadata, server components, and route handlers in Next.js 14.",
    "tags": [
      "nextjs",
      "react",
      "full-stack"
    ],
    "markdown": "# Next.js App Router\n**Tags:** nextjs, react, full-stack\n\n## Quick Reference\n- Goal: Build production routes, layouts, metadata, server components, and route handlers in Next.js 14.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nNext.js App Router works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "typescript-strict-mode",
    "title": "TypeScript Strict Mode",
    "description": "Use strict TypeScript to model data, narrow unknown values, and prevent production bugs.",
    "tags": [
      "typescript",
      "quality",
      "frontend"
    ],
    "markdown": "# TypeScript Strict Mode\n**Tags:** typescript, quality, frontend\n\n## Quick Reference\n- Goal: Use strict TypeScript to model data, narrow unknown values, and prevent production bugs.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nTypeScript Strict Mode works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "tailwind-design-systems",
    "title": "Tailwind Design Systems",
    "description": "Create consistent interfaces with tokens, responsive utilities, dark mode, and component variants.",
    "tags": [
      "tailwind",
      "design",
      "css"
    ],
    "markdown": "# Tailwind Design Systems\n**Tags:** tailwind, design, css\n\n## Quick Reference\n- Goal: Create consistent interfaces with tokens, responsive utilities, dark mode, and component variants.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nTailwind Design Systems works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "node-api-design",
    "title": "Node.js API Design",
    "description": "Design predictable, observable, and secure HTTP APIs with Node.js.",
    "tags": [
      "node",
      "api",
      "backend"
    ],
    "markdown": "# Node.js API Design\n**Tags:** node, api, backend\n\n## Quick Reference\n- Goal: Design predictable, observable, and secure HTTP APIs with Node.js.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nNode.js API Design works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "python-automation",
    "title": "Python Automation",
    "description": "Automate repeatable work with safe scripts, structured logs, retries, and file handling.",
    "tags": [
      "python",
      "automation",
      "scripting"
    ],
    "markdown": "# Python Automation\n**Tags:** python, automation, scripting\n\n## Quick Reference\n- Goal: Automate repeatable work with safe scripts, structured logs, retries, and file handling.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nPython Automation works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "git-collaboration",
    "title": "Git Collaboration",
    "description": "Use branches, commits, rebases, and pull requests without losing work.",
    "tags": [
      "git",
      "collaboration",
      "workflow"
    ],
    "markdown": "# Git Collaboration\n**Tags:** git, collaboration, workflow\n\n## Quick Reference\n- Goal: Use branches, commits, rebases, and pull requests without losing work.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nGit Collaboration works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "docker-production",
    "title": "Docker Production",
    "description": "Package applications with small images, deterministic builds, healthchecks, and secure defaults.",
    "tags": [
      "docker",
      "devops",
      "containers"
    ],
    "markdown": "# Docker Production\n**Tags:** docker, devops, containers\n\n## Quick Reference\n- Goal: Package applications with small images, deterministic builds, healthchecks, and secure defaults.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nDocker Production works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "kubernetes-basics",
    "title": "Kubernetes Basics",
    "description": "Deploy services, configure workloads, and debug pods in Kubernetes.",
    "tags": [
      "kubernetes",
      "devops",
      "containers"
    ],
    "markdown": "# Kubernetes Basics\n**Tags:** kubernetes, devops, containers\n\n## Quick Reference\n- Goal: Deploy services, configure workloads, and debug pods in Kubernetes.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nKubernetes Basics works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "postgres-performance",
    "title": "PostgreSQL Performance",
    "description": "Read query plans, design indexes, and avoid common relational database bottlenecks.",
    "tags": [
      "postgres",
      "database",
      "performance"
    ],
    "markdown": "# PostgreSQL Performance\n**Tags:** postgres, database, performance\n\n## Quick Reference\n- Goal: Read query plans, design indexes, and avoid common relational database bottlenecks.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nPostgreSQL Performance works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "supabase-full-stack",
    "title": "Supabase Full Stack",
    "description": "Build apps with Supabase Postgres, Storage, Auth-aware policies, and server-side keys.",
    "tags": [
      "supabase",
      "database",
      "full-stack"
    ],
    "markdown": "# Supabase Full Stack\n**Tags:** supabase, database, full-stack\n\n## Quick Reference\n- Goal: Build apps with Supabase Postgres, Storage, Auth-aware policies, and server-side keys.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nSupabase Full Stack works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "rest-api-testing",
    "title": "REST API Testing",
    "description": "Test API contracts, error paths, auth, pagination, and idempotency.",
    "tags": [
      "api",
      "testing",
      "backend"
    ],
    "markdown": "# REST API Testing\n**Tags:** api, testing, backend\n\n## Quick Reference\n- Goal: Test API contracts, error paths, auth, pagination, and idempotency.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nREST API Testing works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "graphql-practical",
    "title": "GraphQL Practical",
    "description": "Design schemas, resolvers, fragments, and pagination that scale.",
    "tags": [
      "graphql",
      "api",
      "backend"
    ],
    "markdown": "# GraphQL Practical\n**Tags:** graphql, api, backend\n\n## Quick Reference\n- Goal: Design schemas, resolvers, fragments, and pagination that scale.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nGraphQL Practical works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "playwright-e2e",
    "title": "Playwright E2E Testing",
    "description": "Write reliable browser tests with locators, fixtures, traces, and network control.",
    "tags": [
      "testing",
      "playwright",
      "qa"
    ],
    "markdown": "# Playwright E2E Testing\n**Tags:** testing, playwright, qa\n\n## Quick Reference\n- Goal: Write reliable browser tests with locators, fixtures, traces, and network control.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nPlaywright E2E Testing works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "jest-vitest-unit-testing",
    "title": "Jest and Vitest Unit Testing",
    "description": "Build fast unit tests that verify behavior rather than implementation details.",
    "tags": [
      "testing",
      "javascript",
      "quality"
    ],
    "markdown": "# Jest and Vitest Unit Testing\n**Tags:** testing, javascript, quality\n\n## Quick Reference\n- Goal: Build fast unit tests that verify behavior rather than implementation details.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nJest and Vitest Unit Testing works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "ci-cd-github-actions",
    "title": "CI/CD with GitHub Actions",
    "description": "Automate checks, previews, releases, and deployment gates in GitHub Actions.",
    "tags": [
      "ci-cd",
      "github",
      "devops"
    ],
    "markdown": "# CI/CD with GitHub Actions\n**Tags:** ci-cd, github, devops\n\n## Quick Reference\n- Goal: Automate checks, previews, releases, and deployment gates in GitHub Actions.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nCI/CD with GitHub Actions works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "vercel-deployment",
    "title": "Vercel Deployment",
    "description": "Ship Next.js apps with environment variables, previews, logs, and rollback discipline.",
    "tags": [
      "vercel",
      "deployment",
      "nextjs"
    ],
    "markdown": "# Vercel Deployment\n**Tags:** vercel, deployment, nextjs\n\n## Quick Reference\n- Goal: Ship Next.js apps with environment variables, previews, logs, and rollback discipline.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nVercel Deployment works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "security-review",
    "title": "Web Security Review",
    "description": "Find common web app security issues before release.",
    "tags": [
      "security",
      "web",
      "review"
    ],
    "markdown": "# Web Security Review\n**Tags:** security, web, review\n\n## Quick Reference\n- Goal: Find common web app security issues before release.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nWeb Security Review works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "auth-sessions",
    "title": "Authentication and Sessions",
    "description": "Implement secure login flows, cookies, sessions, OAuth, and authorization boundaries.",
    "tags": [
      "auth",
      "security",
      "backend"
    ],
    "markdown": "# Authentication and Sessions\n**Tags:** auth, security, backend\n\n## Quick Reference\n- Goal: Implement secure login flows, cookies, sessions, OAuth, and authorization boundaries.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nAuthentication and Sessions works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "observability-logs",
    "title": "Observability and Logs",
    "description": "Use logs, metrics, traces, and alerts to debug production systems.",
    "tags": [
      "observability",
      "devops",
      "production"
    ],
    "markdown": "# Observability and Logs\n**Tags:** observability, devops, production\n\n## Quick Reference\n- Goal: Use logs, metrics, traces, and alerts to debug production systems.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nObservability and Logs works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "redis-caching",
    "title": "Redis Caching",
    "description": "Cache safely with keys, TTLs, invalidation, locks, and rate limits.",
    "tags": [
      "redis",
      "cache",
      "backend"
    ],
    "markdown": "# Redis Caching\n**Tags:** redis, cache, backend\n\n## Quick Reference\n- Goal: Cache safely with keys, TTLs, invalidation, locks, and rate limits.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nRedis Caching works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "database-migrations",
    "title": "Database Migrations",
    "description": "Ship schema changes with reversible, staged, and backward-compatible migrations.",
    "tags": [
      "database",
      "migrations",
      "devops"
    ],
    "markdown": "# Database Migrations\n**Tags:** database, migrations, devops\n\n## Quick Reference\n- Goal: Ship schema changes with reversible, staged, and backward-compatible migrations.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nDatabase Migrations works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "prisma-orm",
    "title": "Prisma ORM",
    "description": "Use Prisma schemas, migrations, relations, and query patterns effectively.",
    "tags": [
      "prisma",
      "database",
      "typescript"
    ],
    "markdown": "# Prisma ORM\n**Tags:** prisma, database, typescript\n\n## Quick Reference\n- Goal: Use Prisma schemas, migrations, relations, and query patterns effectively.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nPrisma ORM works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "drizzle-orm",
    "title": "Drizzle ORM",
    "description": "Build typed SQL-first data layers with Drizzle ORM.",
    "tags": [
      "drizzle",
      "database",
      "typescript"
    ],
    "markdown": "# Drizzle ORM\n**Tags:** drizzle, database, typescript\n\n## Quick Reference\n- Goal: Build typed SQL-first data layers with Drizzle ORM.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nDrizzle ORM works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "react-query",
    "title": "TanStack Query",
    "description": "Manage server state with caching, invalidation, optimistic updates, and retries.",
    "tags": [
      "react",
      "data",
      "frontend"
    ],
    "markdown": "# TanStack Query\n**Tags:** react, data, frontend\n\n## Quick Reference\n- Goal: Manage server state with caching, invalidation, optimistic updates, and retries.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nTanStack Query works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "zod-validation",
    "title": "Zod Validation",
    "description": "Validate boundaries, parse unknown data, and derive TypeScript types.",
    "tags": [
      "zod",
      "typescript",
      "validation"
    ],
    "markdown": "# Zod Validation\n**Tags:** zod, typescript, validation\n\n## Quick Reference\n- Goal: Validate boundaries, parse unknown data, and derive TypeScript types.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nZod Validation works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "accessibility-checklist",
    "title": "Accessibility Checklist",
    "description": "Build keyboard-friendly, screen-reader-compatible, inclusive web interfaces.",
    "tags": [
      "accessibility",
      "frontend",
      "quality"
    ],
    "markdown": "# Accessibility Checklist\n**Tags:** accessibility, frontend, quality\n\n## Quick Reference\n- Goal: Build keyboard-friendly, screen-reader-compatible, inclusive web interfaces.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nAccessibility Checklist works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "seo-nextjs",
    "title": "SEO for Next.js",
    "description": "Implement metadata, structured data, sitemaps, canonical URLs, and fast pages.",
    "tags": [
      "seo",
      "nextjs",
      "marketing"
    ],
    "markdown": "# SEO for Next.js\n**Tags:** seo, nextjs, marketing\n\n## Quick Reference\n- Goal: Implement metadata, structured data, sitemaps, canonical URLs, and fast pages.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nSEO for Next.js works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "performance-web-vitals",
    "title": "Web Performance",
    "description": "Improve Core Web Vitals with measurement, caching, bundling, and rendering choices.",
    "tags": [
      "performance",
      "frontend",
      "web"
    ],
    "markdown": "# Web Performance\n**Tags:** performance, frontend, web\n\n## Quick Reference\n- Goal: Improve Core Web Vitals with measurement, caching, bundling, and rendering choices.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nWeb Performance works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "responsive-layouts",
    "title": "Responsive Layouts",
    "description": "Design robust layouts across mobile, tablet, and desktop screens.",
    "tags": [
      "css",
      "responsive",
      "design"
    ],
    "markdown": "# Responsive Layouts\n**Tags:** css, responsive, design\n\n## Quick Reference\n- Goal: Design robust layouts across mobile, tablet, and desktop screens.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nResponsive Layouts works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "forms-ux",
    "title": "Form UX",
    "description": "Create accessible, validated, low-friction forms with useful error states.",
    "tags": [
      "forms",
      "ux",
      "frontend"
    ],
    "markdown": "# Form UX\n**Tags:** forms, ux, frontend\n\n## Quick Reference\n- Goal: Create accessible, validated, low-friction forms with useful error states.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nForm UX works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "file-uploads",
    "title": "File Uploads",
    "description": "Handle upload validation, storage, progress, naming, and security controls.",
    "tags": [
      "uploads",
      "storage",
      "backend"
    ],
    "markdown": "# File Uploads\n**Tags:** uploads, storage, backend\n\n## Quick Reference\n- Goal: Handle upload validation, storage, progress, naming, and security controls.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nFile Uploads works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "markdown-content",
    "title": "Markdown Content Systems",
    "description": "Process markdown safely for docs, blogs, previews, and AI-readable resources.",
    "tags": [
      "markdown",
      "content",
      "web"
    ],
    "markdown": "# Markdown Content Systems\n**Tags:** markdown, content, web\n\n## Quick Reference\n- Goal: Process markdown safely for docs, blogs, previews, and AI-readable resources.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nMarkdown Content Systems works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "ai-prompt-engineering",
    "title": "Prompt Engineering",
    "description": "Write clear prompts with roles, constraints, examples, evaluation, and iteration loops.",
    "tags": [
      "ai",
      "prompts",
      "productivity"
    ],
    "markdown": "# Prompt Engineering\n**Tags:** ai, prompts, productivity\n\n## Quick Reference\n- Goal: Write clear prompts with roles, constraints, examples, evaluation, and iteration loops.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nPrompt Engineering works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "llm-evaluation",
    "title": "LLM Evaluation",
    "description": "Evaluate model outputs with datasets, rubrics, regression tests, and human review.",
    "tags": [
      "ai",
      "evaluation",
      "quality"
    ],
    "markdown": "# LLM Evaluation\n**Tags:** ai, evaluation, quality\n\n## Quick Reference\n- Goal: Evaluate model outputs with datasets, rubrics, regression tests, and human review.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nLLM Evaluation works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "product-requirements",
    "title": "Product Requirements",
    "description": "Turn vague ideas into scoped requirements, user stories, and measurable acceptance criteria.",
    "tags": [
      "product",
      "planning",
      "communication"
    ],
    "markdown": "# Product Requirements\n**Tags:** product, planning, communication\n\n## Quick Reference\n- Goal: Turn vague ideas into scoped requirements, user stories, and measurable acceptance criteria.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nProduct Requirements works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "project-management",
    "title": "Project Management",
    "description": "Plan execution with milestones, ownership, risks, status updates, and decision logs.",
    "tags": [
      "project-management",
      "planning",
      "operations"
    ],
    "markdown": "# Project Management\n**Tags:** project-management, planning, operations\n\n## Quick Reference\n- Goal: Plan execution with milestones, ownership, risks, status updates, and decision logs.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nProject Management works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "technical-writing",
    "title": "Technical Writing",
    "description": "Write concise docs, READMEs, runbooks, and API references people actually use.",
    "tags": [
      "writing",
      "docs",
      "communication"
    ],
    "markdown": "# Technical Writing\n**Tags:** writing, docs, communication\n\n## Quick Reference\n- Goal: Write concise docs, READMEs, runbooks, and API references people actually use.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nTechnical Writing works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "code-review",
    "title": "Code Review",
    "description": "Review changes for correctness, maintainability, security, and product fit.",
    "tags": [
      "review",
      "engineering",
      "quality"
    ],
    "markdown": "# Code Review\n**Tags:** review, engineering, quality\n\n## Quick Reference\n- Goal: Review changes for correctness, maintainability, security, and product fit.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nCode Review works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "debugging-root-cause",
    "title": "Root Cause Debugging",
    "description": "Investigate bugs systematically before changing code.",
    "tags": [
      "debugging",
      "quality",
      "engineering"
    ],
    "markdown": "# Root Cause Debugging\n**Tags:** debugging, quality, engineering\n\n## Quick Reference\n- Goal: Investigate bugs systematically before changing code.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nRoot Cause Debugging works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "incident-response",
    "title": "Incident Response",
    "description": "Run production incidents with triage, communication, mitigation, and postmortems.",
    "tags": [
      "incident",
      "production",
      "devops"
    ],
    "markdown": "# Incident Response\n**Tags:** incident, production, devops\n\n## Quick Reference\n- Goal: Run production incidents with triage, communication, mitigation, and postmortems.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nIncident Response works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "feature-flags",
    "title": "Feature Flags",
    "description": "Release safely with targeted rollout, kill switches, and cleanup discipline.",
    "tags": [
      "release",
      "feature-flags",
      "devops"
    ],
    "markdown": "# Feature Flags\n**Tags:** release, feature-flags, devops\n\n## Quick Reference\n- Goal: Release safely with targeted rollout, kill switches, and cleanup discipline.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nFeature Flags works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "api-rate-limits",
    "title": "API Rate Limits",
    "description": "Design rate limits, retries, backoff, quotas, and client-friendly error responses.",
    "tags": [
      "api",
      "reliability",
      "backend"
    ],
    "markdown": "# API Rate Limits\n**Tags:** api, reliability, backend\n\n## Quick Reference\n- Goal: Design rate limits, retries, backoff, quotas, and client-friendly error responses.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nAPI Rate Limits works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "webhooks",
    "title": "Webhooks",
    "description": "Build reliable webhook producers and consumers with signatures and replay safety.",
    "tags": [
      "webhooks",
      "api",
      "backend"
    ],
    "markdown": "# Webhooks\n**Tags:** webhooks, api, backend\n\n## Quick Reference\n- Goal: Build reliable webhook producers and consumers with signatures and replay safety.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nWebhooks works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "stripe-payments",
    "title": "Stripe Payments",
    "description": "Implement checkout, webhooks, subscriptions, and payment state safely.",
    "tags": [
      "stripe",
      "payments",
      "backend"
    ],
    "markdown": "# Stripe Payments\n**Tags:** stripe, payments, backend\n\n## Quick Reference\n- Goal: Implement checkout, webhooks, subscriptions, and payment state safely.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nStripe Payments works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "email-deliverability",
    "title": "Email Deliverability",
    "description": "Send transactional email with templates, DNS records, bounces, and reputation basics.",
    "tags": [
      "email",
      "ops",
      "backend"
    ],
    "markdown": "# Email Deliverability\n**Tags:** email, ops, backend\n\n## Quick Reference\n- Goal: Send transactional email with templates, DNS records, bounces, and reputation basics.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nEmail Deliverability works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "data-visualization",
    "title": "Data Visualization",
    "description": "Choose charts, encode data honestly, and design dashboards for decisions.",
    "tags": [
      "data",
      "visualization",
      "design"
    ],
    "markdown": "# Data Visualization\n**Tags:** data, visualization, design\n\n## Quick Reference\n- Goal: Choose charts, encode data honestly, and design dashboards for decisions.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nData Visualization works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "analytics-events",
    "title": "Analytics Events",
    "description": "Design event schemas, funnels, attribution, and privacy-aware measurement.",
    "tags": [
      "analytics",
      "product",
      "data"
    ],
    "markdown": "# Analytics Events\n**Tags:** analytics, product, data\n\n## Quick Reference\n- Goal: Design event schemas, funnels, attribution, and privacy-aware measurement.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nAnalytics Events works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "mobile-web-pwa",
    "title": "Mobile Web and PWA",
    "description": "Build installable, resilient mobile web experiences with offline-aware patterns.",
    "tags": [
      "pwa",
      "mobile",
      "frontend"
    ],
    "markdown": "# Mobile Web and PWA\n**Tags:** pwa, mobile, frontend\n\n## Quick Reference\n- Goal: Build installable, resilient mobile web experiences with offline-aware patterns.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nMobile Web and PWA works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  },
  {
    "slug": "team-communication",
    "title": "Team Communication",
    "description": "Write crisp async updates, decisions, meeting notes, and escalation messages.",
    "tags": [
      "communication",
      "team",
      "management"
    ],
    "markdown": "# Team Communication\n**Tags:** communication, team, management\n\n## Quick Reference\n- Goal: Write crisp async updates, decisions, meeting notes, and escalation messages.\n- Start by defining the user, input, output, failure modes, and owner.\n- Prefer small examples that can be copied into real work.\n- Keep a checklist beside the implementation and verify it before shipping.\n\n## Core Concepts\nTeam Communication works best when the boundary is explicit and the behavior is observable.\nSeparate configuration from code, happy paths from error paths, and public contracts from internal details.\nUse types, tests, and naming to make intent obvious to the next maintainer.\nOptimize for boring reliability before clever abstractions.\n\n## Best Practices\n1. Write down the desired outcome before choosing tools.\n2. Validate all external input and normalize it once at the edge.\n3. Add tests for success, failure, empty, and permission-related cases.\n4. Log enough context to debug without leaking secrets or private data.\n5. Prefer incremental rollout and reversible changes.\n6. Document the commands, assumptions, and operational ownership.\n\n## Common Pitfalls\n- Shipping a demo path without handling retries, nulls, limits, and timeouts.\n- Hiding important decisions in code comments instead of durable docs.\n- Mixing user-facing behavior with infrastructure concerns.\n- Forgetting accessibility, security, and performance until the end.\n\n## Resources\n- Official documentation for the primary framework or service.\n- Production incident reviews and changelogs from similar systems.\n"
  }
] as const;

async function main(){
  for (const skill of skills) {
    const { error: uploadError } = await supabase.storage.from("skills").upload(`${skill.slug}.md`, skill.markdown, { contentType: "text/markdown; charset=utf-8", upsert: true });
    if (uploadError) throw uploadError;
    const { error: dbError } = await supabase.from("skills").upsert({ slug: skill.slug, title: skill.title, description: skill.description, tags: [...skill.tags] }, { onConflict: "slug" });
    if (dbError) throw dbError;
    console.log(`Seeded ${skill.slug}`);
  }
  console.log(`Done. Seeded ${skills.length} skills.`);
}
main().catch((error)=>{ console.error(error); process.exit(1); });
