# @ostro/ostro — Antigravity AI Architecture & Knowledge Base

> **Package Name**: `@ostro/ostro`
> **Version**: `2.0.0-alpha.1`
> **Role in Ecosystem**: Main Developer Framework Starter Application

---

## 1. Package Purpose & Overview
The main OstroJS application starter skeleton for developers. Contains application controllers, models, config, and routes.

- **Primary Architectural Patterns**: MVC application structure, controller routing, migration/seeder scripts.
- **Key Exported Entities**: `App Skeleton`, `User (Model)`, `Kernel (Http/Console)`, `RouteServiceProvider`

---

## 2. Dependencies & Interoperability
- **Direct Dependencies**:
  - `@ostro/framework`: `^1.3.0`
- **Framework Consumers**: Consumed across the OstroJS ecosystem via `@ostro/framework` and direct imports.

---

## 3. Directory & Source Layout
```text
origin/ostro/
├── app/console/kernel.ts
├── app/exceptions/handler.ts
├── app/http/controllers/controller.ts
├── app/http/kernel.ts
├── app/http/middleware/authenticate.ts
├── app/http/middleware/redirectIfAuthenticated.ts
├── app/http/middleware/verifyCsrfToken.ts
├── app/models/user.ts
├── app/providers/appServiceProvider.ts
├── app/providers/routeServiceProvider.ts
├── app.ts
├── bootstrap/app.ts
├── config/app.ts
├── config/auth.ts
├── config/cache.ts
├── config/database.ts
├── config/filesystem.ts
├── config/hashing.ts
├── config/logging.ts
├── config/session.ts
└── ... (6 more files)
```

---

## 4. TypeScript Typing & Code Standards
1. **Access Modifiers**: All class properties and methods declare explicit visibility (`public`, `protected`, `private`).
2. **Inheritance & Overrides**: Classes overriding base class methods use the `override` keyword to safeguard contracts.
3. **Immutability**: Constant lookup tables and static registries use `readonly` and strict record types.
4. **No Implicit Any**: Public APIs avoid `any` in favor of generics (`<T = unknown>`) and typed contracts from `@ostro/contracts`.
5. **Contract Binding**: Core managers implement contracts from `@ostro/contracts/ostro/*`.

---

## 5. Development & Verification Guide
- **Compile / Build**: `npm run build` (runs `tsc`)
- **Run Tests**: `npm test` (executes Jest with 100% coverage target via `c8`)
- **Published Artifacts**: Target output compiled to `./build` with accompanying `.d.ts` declarations and source maps.

---
*Generated for Antigravity AI high-speed codebase comprehension with minimal token consumption.*
